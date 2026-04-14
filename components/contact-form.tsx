"use client"

import { FormEvent, useState } from "react"
import { CheckCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"

type SubmitState = "idle" | "success" | "error"

export function ContactForm() {
  const [name, setName] = useState("")
  const [business, setBusiness] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [serviceNeeded, setServiceNeeded] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState("idle")
    setErrorMessage("")

    try {
      const response = await fetch("https://formspree.io/f/xgorvvga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          business,
          email,
          phone,
          service: serviceNeeded,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error("We couldn't send your message right now. Please try again.")
      }

      setSubmitState("success")
      setName("")
      setBusiness("")
      setEmail("")
      setPhone("")
      setServiceNeeded("")
      setMessage("")
    } catch {
      setSubmitState("error")
      setErrorMessage("We couldn't send your message right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-600" />
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          {"We've received your message and will be in touch within 24 hours."}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="business" className="text-sm font-medium">
            Business Name *
          </label>
          <Input
            id="business"
            name="business"
            required
            placeholder="Your business"
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone <span className="text-muted-foreground">(optional)</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          value={serviceNeeded}
          onChange={(event) => setServiceNeeded(event.target.value)}
          disabled={isSubmitting}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select a service</option>
          <option value="striping">Line Striping</option>
          <option value="restriping">Re-striping / Refresh</option>
          <option value="ada">ADA / Handicap Markings</option>
          <option value="layout">New Lot Layout</option>
          <option value="stenciling">Stenciling / Numbering</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project - lot size, current condition, timeline, etc."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          disabled={isSubmitting}
        />
      </div>

      {submitState === "error" ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner className="mr-2" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
