"use server";

const defaultRecipientEmail = "biuroc4agency@gmail.com";

type FormState = {
  success?: boolean;
  error?: string;
};

type LeadPayload = {
  formType: "lead";
  submittedAt: string;
  recipientEmail: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
};

type QuotePayload = {
  formType: "quote";
  submittedAt: string;
  recipientEmail: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

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

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;

  try {
    return JSON.stringify(error);
  } catch {
    return "Unknown error";
  }
}

function createFormError(context: string, message: string): FormState {
  console.error(`Form delivery error (${context}): ${message}`);
  return { error: `Message delivery failed: ${message}` };
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

async function postToZapier(payload: LeadPayload | QuotePayload): Promise<void> {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    throw new Error("Missing ZAPIER_WEBHOOK_URL environment variable.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Zapier webhook request failed (${response.status}). ${text}`.trim(),
    );
  }
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

    await postToZapier({
      formType: "quote",
      submittedAt: new Date().toISOString(),
      recipientEmail: normalizeEmail(
        process.env.LEAD_RECIPIENT_EMAIL,
        defaultRecipientEmail,
      ),
      name,
      email,
      phone,
      company,
      message,
    });

    return { success: true };
  } catch (error) {
    return createFormError("quote", getErrorMessage(error));
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

    await postToZapier({
      formType: "lead",
      submittedAt: new Date().toISOString(),
      recipientEmail: normalizeEmail(
        process.env.LEAD_RECIPIENT_EMAIL,
        defaultRecipientEmail,
      ),
      name,
      business,
      email,
      phone,
      service,
    });

    return { success: true };
  } catch (error) {
    return createFormError("lead", getErrorMessage(error));
  }
}
