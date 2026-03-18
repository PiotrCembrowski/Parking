import { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Client Testimonials | PrecisionLine Striping",
  description:
    "Read what our clients say about our parking lot striping services. Real reviews from property managers and business owners.",
};

const testimonials = [
  {
    quote:
      "PrecisionLine transformed our shopping center parking lot. The lines are crisp, the ADA markings are perfect, and they finished ahead of schedule. Highly recommend.",
    author: "Michael Torres",
    role: "Property Manager",
    company: "Westfield Retail Group",
    featured: true,
  },
  {
    quote:
      "We've used PrecisionLine for three years now across all our commercial properties. Consistent quality, fair pricing, and great communication every time.",
    author: "Sarah Chen",
    role: "Director of Facilities",
    company: "Harbor Real Estate",
    featured: true,
  },
  {
    quote:
      "They restriped our 500-space lot overnight with zero disruption to our business. The attention to detail on our custom logo stencils was impressive.",
    author: "David Wilson",
    role: "Operations Manager",
    company: "AutoNation Dealership",
    featured: true,
  },
  {
    quote:
      "Professional from start to finish. They helped us redesign our lot layout to add 15% more parking spaces while staying fully ADA compliant.",
    author: "Jennifer Martinez",
    role: "General Manager",
    company: "Riverside Medical Center",
    featured: false,
  },
  {
    quote:
      "Best striping company we've worked with in 20 years of property management. Their crews are efficient, clean, and respectful of our tenants.",
    author: "Robert Kim",
    role: "Regional Director",
    company: "Pacific Property Group",
    featured: false,
  },
  {
    quote:
      "Our warehouse parking lot was in terrible shape. PrecisionLine came in, repainted everything, and now it looks brand new. Great value for the price.",
    author: "Amanda Foster",
    role: "Warehouse Manager",
    company: "Summit Logistics",
    featured: false,
  },
  {
    quote:
      "Quick response time and fair pricing. They worked around our business hours so we didn't lose a single day of operation.",
    author: "Thomas Brown",
    role: "Owner",
    company: "Brown's Auto Body",
    featured: false,
  },
  {
    quote:
      "The fire lane markings and handicap spaces are exactly to code. Passed our city inspection with flying colors thanks to PrecisionLine.",
    author: "Lisa Chang",
    role: "Compliance Officer",
    company: "Metro Office Complex",
    featured: false,
  },
  {
    quote:
      "I manage multiple retail locations and PrecisionLine handles them all. Same great quality every time, no matter the size of the project.",
    author: "Kevin Murphy",
    role: "Facilities Manager",
    company: "Cascade Retail Group",
    featured: false,
  },
];

function TestimonialCard({
  testimonial,
  large = false,
}: {
  testimonial: (typeof testimonials)[0];
  large?: boolean;
}) {
  return (
    <div
      className={`bg-card border border-border p-8 flex flex-col ${large ? "lg:p-10" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <Quote className="h-8 w-8 text-muted-foreground/30" />
      </div>
      <blockquote className="mt-6 flex-1">
        <p
          className={`text-foreground leading-relaxed ${large ? "text-lg" : ""}`}
        >
          {`"${testimonial.quote}"`}
        </p>
      </blockquote>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="font-semibold">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const otherTestimonials = testimonials.filter((t) => !t.featured);

  return (
    <>
      <main className="pt-[73px]">
        {/* Hero */}
        <section className="bg-foreground text-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-background/60">
              Testimonials
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              What Our Clients Say
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-background/80">
              We take pride in delivering quality work that exceeds
              expectations. Here is what property managers and business owners
              have to say about working with PrecisionLine.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              <div className="text-center">
                <p className="text-3xl font-bold">500+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">4.9</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Average Rating
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">98%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Repeat Customers
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">15+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Reviews
            </h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.author}
                  testimonial={testimonial}
                  large
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              More Client Reviews
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.author}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA with Lead Form */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Join Our Satisfied Clients?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Get a free quote for your parking lot striping project. We
                  respond within 24 hours and offer competitive pricing with no
                  hidden fees.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 fill-accent text-accent flex-shrink-0" />
                    <span>Free on-site estimates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 fill-accent text-accent flex-shrink-0" />
                    <span>Licensed and insured contractors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="h-5 w-5 fill-accent text-accent flex-shrink-0" />
                    <span>Satisfaction guaranteed</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-6">
                  Request a Free Quote
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
