"use server";

interface FormState {
  success?: boolean;
  error?: string;
}

export async function submitQuoteRequest(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
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

  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Quote request:", { name, email, phone, company, message });

  return { success: true };
}

export async function submitLeadForm(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
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

  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log("Lead form:", { name, business, email, phone, service });

  return { success: true };
}
