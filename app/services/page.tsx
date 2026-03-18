import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services | PrecisionLine Striping",
  description:
    "Professional parking lot striping, ADA compliance markings, seal coating, and pavement solutions for commercial properties.",
};

const services = [
  {
    id: "striping",
    title: "Parking Lot Striping",
    description:
      "Our core service delivers crisp, durable parking lines that maximize your lot capacity and create a professional appearance. We use premium traffic-grade paint designed for high-traffic commercial environments.",
    image: "/images/striping-work.jpg",
    features: [
      "Standard parking space lines",
      "Fire lanes and no-parking zones",
      "Directional arrows and symbols",
      "Loading zones and reserved spaces",
      "Drive-through lanes",
      "Crosswalks and pedestrian paths",
    ],
  },
  {
    id: "ada",
    title: "ADA Compliance Markings",
    description:
      "Ensure your property meets all federal accessibility requirements. We install properly positioned accessible parking spaces with correct signage, access aisles, and pathway markings to keep you compliant.",
    image: "/images/ada-marking.jpg",
    features: [
      "Handicap symbols and stenciling",
      "Van-accessible spaces",
      "Access aisle markings",
      "Curb ramp identification",
      "Compliance audits available",
      "Signage coordination",
    ],
  },
  {
    id: "layout",
    title: "Lot Layout & Design",
    description:
      "Maximize your parking capacity with professionally designed lot layouts. Our team analyzes traffic flow and space utilization to create efficient parking configurations that work for your business.",
    image: "/images/hero-parking.jpg",
    features: [
      "Capacity optimization studies",
      "Traffic flow analysis",
      "CAD design services",
      "New construction layouts",
      "Restriping redesigns",
      "Zoning compliance review",
    ],
  },
  {
    id: "sealcoating",
    title: "Seal Coating",
    description:
      "Protect your asphalt investment and extend pavement life with professional seal coating. This protective layer guards against UV damage, water penetration, and chemical spills while enhancing curb appeal.",
    image: "/images/striping-work.jpg",
    features: [
      "Crack filling and repair",
      "Surface protection coating",
      "UV and water resistance",
      "Extended pavement life",
      "Enhanced appearance",
      "Cost-effective maintenance",
    ],
  },
  {
    id: "stenciling",
    title: "Custom Stenciling",
    description:
      "Add numbered spaces, reserved signs, company logos, and custom messaging to your parking lot. Our precision stenciling creates clear, professional markings that communicate effectively.",
    image: "/images/ada-marking.jpg",
    features: [
      "Space numbering",
      "Reserved and visitor markings",
      "Company logos",
      "Custom text and symbols",
      "Safety messaging",
      "Wayfinding graphics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-background/60">
                Our Services
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Professional Pavement Marking Solutions
              </h1>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                From precision line striping to ADA compliance, we deliver
                comprehensive parking lot services that enhance safety, maximize
                capacity, and create a professional appearance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background text-gray-700 hover:bg-background/10 hover:text-white"
                >
                  <Link href="tel:+19185551234">Call (918) 555-1234</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col gap-12 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button asChild>
                        <Link href="/contact">
                          Request Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold sm:text-4xl">Our Process</h2>
              <p className="mt-4 text-muted-foreground">
                Simple and efficient from first contact to project completion.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Free Estimate",
                  description:
                    "Contact us for a no-obligation quote. We assess your lot and provide transparent pricing.",
                },
                {
                  step: "02",
                  title: "Schedule",
                  description:
                    "Pick a date that works for your business. We offer flexible scheduling including weekends.",
                },
                {
                  step: "03",
                  title: "Preparation",
                  description:
                    "We clean and prep the surface to ensure optimal paint adhesion and durability.",
                },
                {
                  step: "04",
                  title: "Completion",
                  description:
                    "Professional striping completed with minimal disruption. Most lots ready in 24 hours.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-foreground text-background font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Form */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl text-balance">
                  Ready to Transform Your Parking Lot?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Get a free, no-obligation quote for your project. We respond
                  within 24 hours and can often schedule work within the week.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Licensed and insured contractors",
                    "Premium traffic-grade materials",
                    "Minimal business disruption",
                    "Satisfaction guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-6">
                  Get Your Free Quote
                </h3>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
