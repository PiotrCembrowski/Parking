"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"
import { submitQuoteRequest } from "@/app/actions"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitQuoteRequest, null)

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          {"We've received your message and will be in touch within 24 hours."}
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Company name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Project Details *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project - lot size, current condition, timeline, etc."
        />
      </div>

      {state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}
