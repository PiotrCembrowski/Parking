"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormState {
  success?: boolean;
  error?: string;
}

const recipientEmail = "biuroc4agency@gmail.com";

function validateRequiredFields(values: Record<string, string>): string | null {
  const hasEmpty = Object.values(values).some((value) => !value.trim());
  if (hasEmpty) return "Please fill in all required fields.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (values.email && !emailRegex.test(values.email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

/* ============================= */
/* Lead Form */
/* ============================= */

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

    await resend.emails.send({
      from: "Website Lead <leads@striping.site>",
      to: recipientEmail,
      replyTo: email,
      subject: "New Parking Lot Striping Lead",
      html: `
        <h2>New Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr/>
        <p>New lead from website</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Lead form error:", error);
    return {
      error: "Failed to send message. Please try again.",
    };
  }
}

/* ============================= */
/* Contact Form */
/* ============================= */

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

    const validationError = validateRequiredFields({
      name,
      email,
      message,
    });

    if (validationError) return { error: validationError };

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: email,
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Quote form error:", error);
    return {
      error: "Failed to send message. Please try again.",
    };
  }
}
