"use server";

import { connect as connectTls, TLSSocket } from "node:tls";

const defaultRecipientEmail = "biuroc4agency@gmail.com";

interface FormState {
  success?: boolean;
  error?: string;
}

interface SendEmailParams {
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
}

interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  fromEmail: string;
  recipientEmail: string;
}

function normalizeEmail(value: string | undefined, fallback: string): string {
  if (!value) return fallback;

  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/@gmal\.co+?m$/, "@gmail.com");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalized)) {
    console.error(`Invalid email \"${value}\", falling back to ${fallback}.`);
    return fallback;
  }

  return normalized;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

function createEmailError(context: string, message: string): FormState {
  console.error(`Email error (${context}): ${message}`);
  return {
    error: `Email delivery failed: ${message}`,
  };
}

function parseAddress(value: string): string {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
}

function toBase64(value: string): string {
  return Buffer.from(value, "utf8").toString("base64");
}

async function readSmtpResponse(socket: TLSSocket): Promise<string> {
  return new Promise((resolve, reject) => {
    let buffer = "";

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      const lines = buffer.split("\r\n").filter(Boolean);
      const lastLine = lines.at(-1);

      if (!lastLine) return;
      if (!/^\d{3}\s/.test(lastLine)) return;

      socket.off("data", onData);
      socket.off("error", onError);
      resolve(buffer);
    };

    const onError = (error: Error) => {
      socket.off("data", onData);
      socket.off("error", onError);
      reject(error);
    };

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function sendSmtpCommand(
  socket: TLSSocket,
  command: string,
  expectedCodes: number[],
): Promise<string> {
  socket.write(command);
  const response = await readSmtpResponse(socket);
  const code = Number.parseInt(response.slice(0, 3), 10);

  if (!expectedCodes.includes(code)) {
    throw new Error(`SMTP command failed (${command.trim()}): ${response.trim()}`);
  }

  return response;
}

async function sendEmailUsingSmtp(
  config: SmtpConfig,
  params: SendEmailParams,
): Promise<void> {
  const envelopeFrom = parseAddress(config.fromEmail);
  const recipient = parseAddress(config.recipientEmail);

  const socket = connectTls({
    host: config.host,
    port: config.port,
    servername: config.host,
    minVersion: "TLSv1.2",
  });

  await new Promise<void>((resolve, reject) => {
    socket.once("secureConnect", resolve);
    socket.once("error", reject);
  });

  try {
    const greeting = await readSmtpResponse(socket);
    if (!greeting.startsWith("220")) {
      throw new Error(`SMTP greeting failed: ${greeting.trim()}`);
    }

    await sendSmtpCommand(socket, "EHLO localhost\r\n", [250]);
    await sendSmtpCommand(socket, "AUTH LOGIN\r\n", [334]);
    await sendSmtpCommand(socket, `${toBase64(config.user)}\r\n`, [334]);
    await sendSmtpCommand(socket, `${toBase64(config.pass)}\r\n`, [235]);
    await sendSmtpCommand(socket, `MAIL FROM:<${envelopeFrom}>\r\n`, [250]);
    await sendSmtpCommand(socket, `RCPT TO:<${recipient}>\r\n`, [250, 251]);
    await sendSmtpCommand(socket, "DATA\r\n", [354]);

    const safeSubject = params.subject.replace(/\r?\n/g, " ");
    const safeReplyTo = params.replyTo ? parseAddress(params.replyTo) : undefined;
    const htmlBody = params.html
      .replace(/\r?\n/g, "\r\n")
      .replace(/(^|\r\n)\./g, "$1..");

    const rawMessage = [
      `From: Website <${config.fromEmail}>`,
      `To: ${config.recipientEmail}`,
      safeReplyTo ? `Reply-To: ${safeReplyTo}` : "",
      `Subject: ${safeSubject}`,
      "MIME-Version: 1.0",
      'Content-Type: text/html; charset="UTF-8"',
      "",
      htmlBody,
      ".",
      "",
    ]
      .filter(Boolean)
      .join("\r\n");

    await sendSmtpCommand(socket, rawMessage, [250]);
    await sendSmtpCommand(socket, "QUIT\r\n", [221]);
  } finally {
    socket.end();
  }
}

function getSmtpConfig(): { config?: SmtpConfig; error?: string } {
  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !portRaw || !user || !pass) {
    return {
      error:
        "Missing SMTP config. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    };
  }

  const port = Number.parseInt(portRaw, 10);
  if (!Number.isFinite(port) || port <= 0) {
    return { error: "Invalid SMTP_PORT. Use a valid port like 465." };
  }

  const recipientEmail = normalizeEmail(
    process.env.LEAD_RECIPIENT_EMAIL,
    defaultRecipientEmail,
  );

  const fromEmail = normalizeEmail(process.env.SMTP_FROM_EMAIL, user);

  return {
    config: {
      host,
      port,
      user,
      pass,
      fromEmail,
      recipientEmail,
    },
  };
}

function validateRequiredFields(values: Record<string, string>): string | null {
  const hasEmpty = Object.values(values).some((value) => !value.trim());
  if (hasEmpty) return "Please fill in all required fields.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (values.email && !emailRegex.test(values.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export async function submitQuoteRequest(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const validationError = validateRequiredFields({ name, email, message });
    if (validationError) return { error: validationError };

    const { config, error } = getSmtpConfig();
    if (!config) {
      return createEmailError("quote smtp config", error ?? "Missing SMTP config.");
    }

    await sendEmailUsingSmtp(config, {
      from: `Website <${config.fromEmail}>`,
      replyTo: email,
      subject: "New Quote Request - Parking Lot Striping",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message)}</p>
        <hr />
        <p>This lead came from your website quote form.</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return createEmailError("quote request", getErrorMessage(error));
  }
}

export async function submitLeadForm(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const business = String(formData.get("business") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();

    const validationError = validateRequiredFields({
      name,
      business,
      email,
      service,
    });
    if (validationError) return { error: validationError };

    const { config, error } = getSmtpConfig();
    if (!config) {
      return createEmailError("lead smtp config", error ?? "Missing SMTP config.");
    }

    await sendEmailUsingSmtp(config, {
      from: `Website <${config.fromEmail}>`,
      replyTo: email,
      subject: "New Parking Lot Striping Lead",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Service Needed:</strong> ${escapeHtml(service)}</p>
        <hr />
        <p>This lead came from your website lead form.</p>
      `,
    });

    return { success: true };
  } catch (error) {
    return createEmailError("lead form", getErrorMessage(error));
  }
}
