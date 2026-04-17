"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xgorvvga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          "We couldn't send your message right now. Please try again.",
        );
      }

      setSubmitState("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setSubmitState("error");
      setErrorMessage(
        "We couldn't send your message right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-600" />
        <h3 className="text-xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          We've received your message and will be in touch within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitState("idle")}
        >
          Send another message
        </Button>
      </div>
    );
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
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
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
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
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
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
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
            value={formData.company}
            onChange={handleChange}
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
          value={formData.service}
          onChange={handleChange}
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
        <label htmlFor="service" className="text-sm font-medium">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          value={formValues.service}
          onChange={(event) => setFieldValue("service", event.target.value)}
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
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {submitState === "error" && (
        <p className="text-sm text-red-600 font-medium">{errorMessage}</p>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
  );
}
