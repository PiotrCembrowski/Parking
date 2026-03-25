import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "PrecisionLine transformed our shopping center parking lot. The lines are crisp, the ADA markings are perfect, and they finished ahead of schedule. Highly recommend.",
    author: "Michael Torres",
    role: "Property Manager, Westfield Retail Group",
  },
  {
    quote:
      "We've used PrecisionLine for three years now across all our commercial properties. Consistent quality, fair pricing, and great communication every time.",
    author: "Sarah Chen",
    role: "Director of Facilities, Harbor Real Estate",
  },
  {
    quote:
      "They restriped our 500-space lot overnight with zero disruption to our business. The attention to detail on our custom logo stencils was impressive.",
    author: "David Wilson",
    role: "Operations Manager, AutoNation Dealership",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            What our clients say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card border border-border p-8 flex flex-col"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 flex-1">
                <p className="text-foreground leading-relaxed">
                  {`"${testimonial.quote}"`}
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
