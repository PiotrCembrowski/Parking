"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { submitLeadForm } from "@/app/actions";

export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitLeadForm, null);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle className="h-10 w-10 text-green-600 mb-3" />
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {"We'll contact you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name *
        </label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="business" className="text-sm font-medium">
          Business Name *
        </label>
        <Input
          id="business"
          name="business"
          required
          placeholder="Your business"
        />
      </div>

      <div className="space-y-1.5">
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

      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone <span className="text-muted-foreground">(optional)</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="text-sm font-medium">
          Service Needed *
        </label>
        <select
          id="service"
          name="service"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending..." : "Get Free Quote"}
      </Button>
    </form>
  );
}
