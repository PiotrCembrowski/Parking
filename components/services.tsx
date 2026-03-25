import Image from "next/image";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Parking Lot Striping",
    description:
      "Professional parking lot striping services designed to improve safety, organization, and traffic flow. We use high-quality traffic paint and precision equipment to create crisp, long-lasting markings for all types of commercial properties.\n\nOur parking lot striping services include:",
    features: [
      "Standard parking spaces",
      "ADA handicap parking spaces",
      "Fire lanes & no parking zones",
      "Directional arrows & traffic flow markings",
      "Loading zones & reserved parking",
      "Crosswalks & pedestrian safety markings",
    ],
    text: "Fresh striping improves visibility, reduces confusion, and maximizes your available parking capacity.",
  },
  {
    number: "02",
    title: "ADA Compliance Striping",
    description:
      "Ensure your property meets ADA parking lot compliance requirements with professionally marked accessible parking spaces. We follow federal accessibility guidelines to help improve accessibility, reduce liability, and keep your property compliant.\n\nOur ADA compliance services include:",
    features: [
      "Handicap parking space striping",
      "Wheelchair accessibility symbols",
      "Van-accessible parking spaces",
      "Access aisle striping",
      "ADA signage placement",
      "Compliance layout adjustments",
    ],
    text: "Proper ADA striping helps avoid fines, improves accessibility, and ensures your property meets current regulations.",
  },
  {
    number: "03",
    title: "Parking Lot Layout & Design",
    description:
      "Maximize your parking capacity with professional parking lot layout and design services. Our team evaluates your property and creates efficient layouts that improve traffic flow, increase parking spaces, and enhance safety.\n\nOur layout and design services include:",
    features: [
      "Parking capacity optimization",
      "Traffic flow planning",
      "New lot layout design",
      "Re-striping and layout redesign",
      "Safety improvements",
      "CAD layout designs available",
    ],
    text: "A well-designed parking lot improves efficiency, reduces congestion, and enhances the customer experience.",
  },
  {
    number: "04",
    title: "Sealcoating Services",
    description:
      "Protect your asphalt investment with professional sealcoating services that extend pavement life and improve curb appeal. Sealcoating helps prevent damage caused by weather, traffic, and UV exposure.\n\nOur sealcoating services include:",
    features: [
      "Asphalt sealcoating",
      "Crack filling and repair",
      "Surface protection",
      "UV and weather resistance",
      "Preventative asphalt maintenance",
      "Extended pavement lifespan",
    ],
    text: "Regular sealcoating protects your pavement, reduces repair costs, and keeps your parking lot looking professional.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Professional Parking Lot Striping & Pavement Marking Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide complete parking lot striping and pavement marking
            solutions for commercial properties, retail centers, office
            buildings, warehouses, and industrial facilities. From initial
            layout planning to final striping, our team delivers clean, durable
            markings that improve safety, maximize space, and ensure compliance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-card border border-border p-8 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-bold text-muted-foreground/30">
                  {service.number}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              <p className="whitespace-pre-line mt-3 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="whitespace-pre-line mt-4 text-sm text-muted-foreground">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/striping-work.jpg"
              alt="Professional striping equipment in action"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/ada-marking.jpg"
              alt="ADA compliant handicap parking marking"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
