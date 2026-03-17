import { Shield, Clock, Award, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Quality Materials",
    description: "We use only premium traffic paints and materials that meet DOT specifications for durability and visibility.",
  },
  {
    icon: Clock,
    title: "Minimal Disruption",
    description: "Our efficient crews work around your schedule, often completing projects during off-hours to minimize business impact.",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Full liability coverage and workers compensation protect your property and give you peace of mind.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our striping technicians average 8+ years of experience, ensuring consistent quality on every project.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Trusted by property managers across the region
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Since 2009, PrecisionLine has been the go-to striping contractor for 
              commercial properties, retail centers, and industrial facilities. 
              We combine old-school craftsmanship with modern equipment to deliver 
              results that stand the test of time.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every project begins with a thorough site assessment and ends with 
              a detailed walkthrough to ensure your complete satisfaction. We stand 
              behind our work with a comprehensive warranty on all striping services.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-6 border border-border">
                <value.icon className="h-8 w-8 text-foreground" />
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
