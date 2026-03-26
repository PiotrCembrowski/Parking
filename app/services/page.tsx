import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title:
    "Parking Lot Striping Services | ADA Compliance, Sealcoating & Pavement Marking",
  description:
    "Professional parking lot striping, ADA compliance markings, sealcoating, and pavement marking services for commercial properties. Get a free quote today.",
};

const services = [
  {
    id: "striping",
    title: "Parking Lot Striping Services",
    description:
      "Professional parking lot striping services for commercial properties. We create crisp, durable pavement markings that improve traffic flow, maximize parking capacity, and enhance safety.",
    image: "/images/striping-work.jpg",
    features: [
      "Standard parking space striping",
      "Fire lanes and no-parking zones",
      "Directional arrows and traffic markings",
      "Loading zones and reserved spaces",
      "Drive-through lane striping",
      "Crosswalks and pedestrian safety markings",
    ],
  },
  {
    id: "ada",
    title: "ADA Compliance Parking Lot Striping",
    description:
      "Ensure your parking lot meets ADA compliance requirements with properly marked accessible parking spaces, access aisles, and ADA signage.",
    image: "/images/ada-marking.jpg",
    features: [
      "Handicap parking symbols",
      "Van accessible parking spaces",
      "Access aisle striping",
      "Curb ramp identification",
      "ADA compliance audits",
      "ADA signage placement",
    ],
  },
  {
    id: "layout",
    title: "Parking Lot Layout & Design",
    description:
      "Maximize parking capacity with professional parking lot layout and design services. Improve traffic flow and efficiency.",
    image: "/images/hero-parking.jpg",
    features: [
      "Parking capacity optimization",
      "Traffic flow analysis",
      "CAD layout design",
      "New construction layouts",
      "Restriping redesigns",
      "Compliance planning",
    ],
  },
  {
    id: "sealcoating",
    title: "Asphalt Sealcoating Services",
    description:
      "Protect your asphalt investment with professional sealcoating services that extend pavement life and improve appearance.",
    image: "/images/striping-work.jpg",
    features: [
      "Crack filling and repair",
      "Surface protection",
      "UV protection",
      "Water resistance",
      "Extended pavement lifespan",
      "Preventative maintenance",
    ],
  },
  {
    id: "stenciling",
    title: "Custom Parking Lot Stenciling",
    description:
      "Professional stenciling including numbered spaces, reserved parking, and custom markings.",
    image: "/images/ada-marking.jpg",
    features: [
      "Parking space numbering",
      "Reserved parking markings",
      "Company logos",
      "Custom text",
      "Safety messaging",
      "Directional markings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-background/60">
              Parking Lot Striping Services
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Professional Parking Lot Striping & Pavement Marking Services
            </h1>

            <p className="mt-6 text-lg text-background/80">
              We provide professional parking lot striping, ADA compliance,
              sealcoating, and pavement marking services for commercial
              properties, retail centers, warehouses, and industrial facilities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Free Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-gray-700 border-background/30"
              >
                <Link href="tel:+19185551234">Call (918) 555-1234</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col gap-12 lg:gap-16 ${
                  index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} for commercial parking lot striping`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold">{service.title}</h2>

                  <p className="mt-4 text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-accent" />
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
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Our Parking Lot Striping Process
            </h2>

            <p className="mt-4 text-muted-foreground">
              Simple, efficient, and professional from start to finish.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Free Estimate",
                description:
                  "We assess your parking lot and provide a detailed quote.",
              },
              {
                step: "02",
                title: "Scheduling",
                description:
                  "Flexible scheduling including nights and weekends.",
              },
              {
                step: "03",
                title: "Preparation",
                description: "Surface cleaning and preparation for durability.",
              },
              {
                step: "04",
                title: "Completion",
                description:
                  "Professional striping completed quickly and efficiently.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto bg-foreground text-background flex items-center justify-center font-bold">
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

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Get Professional Parking Lot Striping Today
              </h2>

              <p className="mt-4 text-muted-foreground">
                Request your free quote today. Fast turnaround and professional
                results.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Licensed and insured",
                  "Premium materials",
                  "Fast turnaround",
                  "Satisfaction guaranteed",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border p-8">
              <h3 className="text-xl font-semibold mb-6">Get Free Quote</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
