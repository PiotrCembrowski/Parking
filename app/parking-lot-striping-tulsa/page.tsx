import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import {
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Parking Lot Striping in Tulsa | PrecisionLine Striping",
  description:
    "Professional parking lot striping services in Tulsa, Oklahoma. ADA compliant markings, custom layouts, and competitive pricing. Get a free quote today.",
};

const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant",
    description:
      "All markings meet federal ADA requirements and local Tulsa regulations.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most Tulsa projects completed within 24-48 hours with minimal disruption.",
  },
  {
    icon: CheckCircle,
    title: "Premium Materials",
    description: "Traffic-grade paints rated for Oklahoma weather conditions.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description:
      "Transparent pricing with no hidden fees. Free estimates for all Tulsa properties.",
  },
];

const pricingItems = [
  {
    service: "Standard Line Striping",
    price: "$0.15 - $0.25",
    unit: "per linear foot",
    description: "White or yellow parking lines",
  },
  {
    service: "Handicap Stall (ADA)",
    price: "$150 - $250",
    unit: "per stall",
    description: "Includes symbol, border, and access aisle",
  },
  {
    service: "Fire Lane Markings",
    price: "$2.00 - $3.50",
    unit: "per linear foot",
    description: "Red curb with stenciled lettering",
  },
  {
    service: "Directional Arrows",
    price: "$25 - $50",
    unit: "each",
    description: "Standard or custom arrow designs",
  },
  {
    service: "Number/Letter Stencils",
    price: "$15 - $30",
    unit: "each",
    description: "Parking space numbering",
  },
  {
    service: "Full Lot Re-stripe",
    price: "Custom Quote",
    unit: "varies",
    description: "Based on lot size and condition",
  },
];

export default function TulsaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Professional parking lot striping in Tulsa"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Serving Tulsa, OK
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Parking Lot Striping in Tulsa
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional parking lot striping and pavement marking services
              for commercial properties throughout Tulsa and the surrounding
              Oklahoma area. ADA compliant, fast turnaround, and competitive
              pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tulsa{"'"}s Trusted Striping Experts
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PrecisionLine Striping has been serving Tulsa businesses,
                  property managers, and commercial real estate owners for over
                  15 years. We understand the unique demands of Oklahoma
                  {"'"}s climate and deliver striping solutions built to last.
                </p>
                <p>
                  From retail shopping centers in Brookside to industrial parks
                  near the Port of Catoosa, we{"'"}ve helped hundreds of Tulsa
                  properties maintain safe, compliant, and professional-looking
                  parking lots.
                </p>
                <p>
                  Our services include new lot layouts, re-striping faded lines,
                  ADA handicap markings, fire lanes, directional arrows, and
                  custom stenciling. We work nights and weekends to minimize
                  disruption to your business.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/striping-work.jpg"
                alt="Striping work in progress in Tulsa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Tulsa Businesses Choose Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quality workmanship, reliable service, and results that last
              through Oklahoma seasons.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-6 rounded-xl">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tulsa Striping Pricing Estimates
            </h2>
            <p className="mt-4 text-muted-foreground">
              Transparent pricing for common services. Final quotes based on lot
              size, condition, and scope.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingItems.map((item) => (
              <div
                key={item.service}
                className="border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
              >
                <h3 className="font-semibold">{item.service}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            * Prices are estimates for Tulsa metro area. Volume discounts
            available for large projects.
          </p>
        </div>
      </section>

      {/* CTA & Lead Form Section */}
      <section id="quote" className="py-20 lg:py-28 bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Request a Free Parking Lot Striping Quote
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Get a customized quote for your Tulsa property. We{"'"}ll assess
                your lot, discuss your needs, and provide a detailed estimate
                within 24 hours.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Call us directly</p>
                    <a
                      href="tel:+15551234567"
                      className="font-semibold hover:text-accent transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email us</p>
                    <a
                      href="mailto:tulsa@precisionline.com"
                      className="font-semibold hover:text-accent transition-colors"
                    >
                      tulsa@precisionline.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Service area</p>
                    <p className="font-semibold">
                      Tulsa, Broken Arrow, Owasso, Jenks, Bixby
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
