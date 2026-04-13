import { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | PrecisionLine Striping",
  description:
    "Get a free quote for parking lot striping services. Contact our team by phone, email, or fill out our quick form.",
};

const cities = [
  { name: "Wichita, KS", href: "/wichita-ks" },
  { name: "Omaha, NE", href: "/omaha-ne" },
  { name: "Boise, ID", href: "/boise-id" },
  { name: "Albuquerque, NM", href: "/albuquerque-nm" },
];

const blogPosts = [
  {
    title: "How Often Should You Restripe a Parking Lot?",
    href: "/blog/how-often-should-you-restripe",
  },
  {
    title: "ADA Parking Requirements Explained",
    href: "/blog/ada-parking-requirements",
  },
  {
    title: "Parking Lot Striping Cost Guide",
    href: "/blog/parking-lot-striping-cost",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white lg:text-5xl text-balance">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Ready to get started? Reach out for a free, no-obligation quote.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Get in Touch
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Whether you need a quick re-stripe or a complete lot layout,
                  our team is here to help. Fill out the form or contact us
                  directly.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="mt-1 text-muted-foreground hover:text-foreground transition"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:info@precisionline.com"
                        className="mt-1 text-muted-foreground hover:text-foreground transition"
                      >
                        info@precisionline.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">Service Area</h3>

                      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {cities.map((city) => (
                          <Link
                            key={city.href}
                            href={city.href}
                            className="block hover:text-foreground transition"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                      <Clock className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="mt-1 text-muted-foreground">
                        Mon - Fri: 7:00 AM - 6:00 PM
                        <br />
                        Sat: 8:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Links */}
                <div className="mt-12">
                  <h3 className="font-semibold mb-3">
                    Helpful Parking Lot Resources
                  </h3>

                  <div className="space-y-2 text-sm">
                    {blogPosts.map((post) => (
                      <Link
                        key={post.href}
                        href={post.href}
                        className="block text-muted-foreground hover:text-foreground transition"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
                <h2 className="text-xl font-bold tracking-tight">
                  Request a Free Quote
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form and we will get back to you within 24 hours.
                </p>

                <div className="mt-6">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
