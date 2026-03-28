"use server";

const defaultRecipientEmail = "biuroc4agency@gmail.com";
const defaultFromEmail = "Website <onboarding@resend.dev>";

interface FormState {
  success?: boolean;
  error?: string;
}

function normalizeRecipientEmail(value: string | undefined): string {
  if (!value) return defaultRecipientEmail;

  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/@gmal\.co+?m$/, "@gmail.com");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalized)) {
    console.error(
      `Invalid LEAD_RECIPIENT_EMAIL "${value}", falling back to ${defaultRecipientEmail}.`,
    );
    return defaultRecipientEmail;
  }

  return normalized;
}

function createResendErrorMessage(context: string, message: string) {
  console.error(`Resend error (${context}): ${message}`);
  return {
    error: `Email delivery failed: ${message}`,
  };
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

interface SendEmailParams {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
}

async function sendEmailWithResend({
  from,
  to,
  replyTo,
  subject,
  html,
}: SendEmailParams): Promise<{ error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Missing RESEND_API_KEY." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  const payload = (await response.json().catch(() => null)) as
    | { message?: string }
    | null;

  if (!response.ok) {
    const message =
      payload?.message ??
      `Resend request failed with status ${response.status}.`;
    return { error: message };
  }

  return {};
}

/* ============================= */
/* Quote Request Form */
/* ============================= */

export async function submitQuoteRequest(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return { error: "Email service is not configured. Please try again soon." };
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: "Please enter a valid email address." };
    }

    const recipientEmail = normalizeRecipientEmail(process.env.LEAD_RECIPIENT_EMAIL);
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? defaultFromEmail;

    const { error } = await sendEmailWithResend({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: "New Quote Request - Parking Lot Striping",
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr />
        <p>This lead came from your website quote form.</p>
      `,
    });

    if (error) return createResendErrorMessage("quote request", error.message);

    return { success: true };
  } catch (error) {
    return createResendErrorMessage("quote request catch", getErrorMessage(error));
  }
}

/* ============================= */
/* Lead Form */
/* ============================= */

export async function submitLeadForm(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return { error: "Email service is not configured. Please try again soon." };
    }

    const name = formData.get("name") as string;
    const business = formData.get("business") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;

    if (!name || !business || !email || !service) {
      return { error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: "Please enter a valid email address." };
    }

    const recipientEmail = normalizeRecipientEmail(process.env.LEAD_RECIPIENT_EMAIL);
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? defaultFromEmail;

    const { error } = await sendEmailWithResend({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: "New Parking Lot Striping Lead",
      html: `
        <h2>New Lead Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service}</p>

        <hr />
        <p>This lead came from your website lead form.</p>
      `,
    });

    if (error) return createResendErrorMessage("lead form", error.message);

    return { success: true };
  } catch (error) {
    return createResendErrorMessage("lead form catch", getErrorMessage(error));
  }
}
