"use server"

interface QuoteRequestState {
  success?: boolean
  error?: string
}

export async function submitQuoteRequest(
  _prevState: QuoteRequestState | null,
  formData: FormData
): Promise<QuoteRequestState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." }
  }

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Quote request received:", { name, email, phone, company, message })

  return { success: true }
}
