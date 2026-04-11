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
  title:
    "Parking Lot Striping Tampa FL | ADA, Fire Lane & Line Striping Services",
  description:
    "Professional parking lot striping in Tampa, Florida. ADA compliant markings, fire lanes, warehouse striping, and re-striping. Fast turnaround and competitive Tampa pricing.",
};

const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant Striping",
    description:
      "All parking lot striping meets federal ADA guidelines and Tampa municipal requirements.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most Tampa striping projects completed within 24–48 hours with minimal business disruption.",
  },
  {
    icon: CheckCircle,
    title: "Premium Traffic Paint",
    description:
      "Durable, high-visibility paint designed for Florida heat, rain, and heavy traffic.",
  },
  {
    icon: DollarSign,
    title: "Competitive Tampa Pricing",
    description:
      "Transparent pricing with free estimates for Tampa businesses and property managers.",
  },
];

const pricingItems = [
  {
    service: "Parking Lot Line Striping",
    price: "$0.20 - $0.35",
    unit: "per linear foot",
    description: "White or yellow parking lines",
  },
  {
    service: "ADA Handicap Stall",
    price: "$175 - $325",
    unit: "per stall",
    description: "Includes symbol, border, and access aisle",
  },
  {
    service: "Fire Lane Striping",
    price: "$2.50 - $4.50",
    unit: "per linear foot",
    description: "Red curb with stenciled lettering",
  },
  {
    service: "Directional Arrows",
    price: "$35 - $75",
    unit: "each",
    description: "Traffic flow arrows",
  },
  {
    service: "Parking Space Numbering",
    price: "$20 - $40",
    unit: "each",
    description: "Number or letter stencils",
  },
  {
    service: "Full Lot Re-Striping",
    price: "$450 - $2,500+",
    unit: "per lot",
    description: "Based on size and condition",
  },
];

export default function TampaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Parking lot striping Tampa Florida"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">
                Tampa, Florida
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parking Lot Striping Tampa FL
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Professional parking lot striping services in Tampa, Florida.
              Improve safety, maximize parking capacity, and maintain ADA
              compliance with durable, high-visibility pavement markings.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="#quote"
                className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+18135551234"
                className="border border-white/30 text-white px-6 py-3 rounded-md"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Professional Parking Lot Striping in Tampa
              </h2>

              <p className="mt-4 text-muted-foreground">
                We provide professional parking lot striping services throughout
                Tampa for retail centers, office buildings, apartment complexes,
                warehouses, and commercial properties.
              </p>

              <p className="mt-4 text-muted-foreground">
                Our Tampa striping services include new layouts, re-striping,
                ADA handicap markings, fire lanes, directional arrows, and
                custom pavement markings.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Retail Shopping Centers",
                  "Office Buildings",
                  "Apartment Complexes",
                  "Industrial Facilities",
                  "Churches & Schools",
                  "Medical Centers",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/striping-work.jpg"
                alt="Parking lot striping Tampa Florida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-background p-6 rounded-xl">
                <benefit.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Tampa Parking Lot Striping Prices
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingItems.map((item) => (
              <div
                key={item.service}
                className="border rounded-xl p-6 hover:border-accent transition"
              >
                <h3 className="font-semibold">{item.service}</h3>

                <div className="mt-2">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {item.unit}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">
              Get a Free Tampa Striping Quote
            </h2>

            <p className="mt-4 text-white/70">
              Fast estimates for Tampa businesses. Most projects completed
              within 24-48 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <Phone className="text-accent" />
                <a href="tel:+18135551234">(813) 555-1234</a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-accent" />
                <span>tampa@precisionline.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-accent" />
                <span>
                  Tampa • Brandon • Riverview • Clearwater • St. Petersburg •
                  Wesley Chapel
                </span>
              </div>
            </div>
          </div>

          <div className="bg-background text-black rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
