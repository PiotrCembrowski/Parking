import Image from "next/image"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Parking Lot Striping",
    description: "Precision line marking for parking spaces, traffic lanes, and directional arrows using premium traffic paint that withstands heavy use.",
    features: ["Standard & handicap spaces", "Fire lanes & no parking zones", "Directional arrows & symbols"],
  },
  {
    number: "02",
    title: "ADA Compliance",
    description: "Ensure your property meets all federal accessibility requirements with properly marked and positioned accessible parking spaces.",
    features: ["Wheelchair symbols", "Access aisles", "Signage coordination"],
  },
  {
    number: "03",
    title: "Layout & Design",
    description: "Maximize your parking capacity with efficient lot layouts designed by our experienced team of pavement marking specialists.",
    features: ["Capacity optimization", "Traffic flow analysis", "CAD designs available"],
  },
  {
    number: "04",
    title: "Seal Coating",
    description: "Protect your asphalt investment with professional seal coating that extends pavement life and enhances appearance.",
    features: ["Crack filling", "Surface protection", "UV resistance"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Comprehensive pavement marking solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From initial layout to final striping, we handle every aspect of your parking lot marking needs with precision and care.
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
              <p className="mt-3 text-muted-foreground leading-relaxed">
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
  )
}
