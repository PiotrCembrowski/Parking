import { Shield, Clock, Award, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Premium Quality Materials",
    description:
      "We use high-quality traffic paints and pavement marking materials that meet DOT specifications for durability, visibility, and long-lasting parking lot striping performance.",
  },
  {
    icon: Clock,
    title: "Minimal Business Disruption",
    description:
      "Our experienced striping crews work around your schedule, including nights and weekends, to complete parking lot striping projects with minimal disruption to your operations.",
  },
  {
    icon: Award,
    title: "Licensed & Fully Insured",
    description:
      "We are fully licensed and insured with liability coverage and workers' compensation, protecting your property and ensuring professional parking lot striping services.",
  },
  {
    icon: Users,
    title: "Experienced Striping Professionals",
    description:
      "Our parking lot striping technicians bring years of hands-on experience, delivering precise pavement markings and consistent quality for every commercial project.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About Our Company
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Professional Parking Lot Striping You Can Trust
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              PrecisionLine provides professional parking lot striping and
              pavement marking services for commercial properties, retail
              centers, office buildings, and industrial facilities. Our team
              focuses on delivering clean, durable striping that improves
              safety, maximizes parking capacity, and enhances the overall
              appearance of your property.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every project begins with a detailed site assessment to evaluate
              traffic flow, parking layout, and compliance requirements. We then
              deliver precision striping using professional equipment and
              high-quality materials, followed by a final walkthrough to ensure
              complete satisfaction. Our goal is to provide long-lasting parking
              lot striping solutions that meet your business needs and exceed
              expectations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background p-6 border border-border"
              >
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
  );
}
