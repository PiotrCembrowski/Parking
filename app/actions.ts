"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const recipientEmail =
  process.env.LEAD_RECIPIENT_EMAIL ?? "biuroc4agency@gmail.com";

interface FormState {
  success?: boolean;
  error?: string;
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

    const { error } = await resend.emails.send({
      from: "Website Quote <onboarding@resend.dev>",
      to: recipientEmail,
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

    if (error) {
      console.error("Resend error (quote request):", error);
      return {
        error:
          "We couldn't send your message right now. Please call us or try again shortly.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Please try again." };
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

    const { error } = await resend.emails.send({
      from: "Website Lead <onboarding@resend.dev>",
      to: recipientEmail,
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

    if (error) {
      console.error("Resend error (lead form):", error);
      return {
        error:
          "We couldn't send your message right now. Please call us or try again shortly.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Please try again." };
  }
}
