import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | PrecisionLine Striping",
  description:
    "Expert tips, industry news, and insights about parking lot striping, ADA compliance, and pavement maintenance.",
};

const posts = [
  {
    slug: "ada-compliance-parking-lot-guide",
    title: "ADA Compliance Guide for Parking Lots",
    excerpt:
      "Ensuring that your parking lot is compliant with ADA (Americans with Disabilities Act) regulations is not just a legal requirement—it is an essential part of providing equal access to all visitors.",
    date: "March 15, 2026",
    category: "Compliance",
    image: "/images/ada-marking.jpg",
  },
  {
    slug: "how-often-repaint-parking-lot-lines",
    title: "How Often Should Parking Lot Lines Be Repainted?",
    excerpt:
      "Parking lot striping is more than just paint on asphalt—it plays a critical role in safety, organization, and the overall functionality of a commercial property.",
    date: "March 8, 2026",
    category: "Maintenance",
    image: "/images/striping-work.jpg",
  },
  {
    slug: "parking-lot-striping-cost",
    title: "Parking Lot Layout: Maximizing Your Available Space",
    excerpt:
      "Understanding the cost of parking lot striping is essential for businesses that want to maintain safe and professional-looking properties.",
    date: "February 28, 2026",
    category: "Design",
    image: "/images/hero-parking.jpg",
  },
  {
    slug: "parking-lot-maintenance",
    title: "Fire Lane Marking Requirements: What Property Owners Need to Know",
    excerpt:
      "Parking lot striping is a critical part of maintaining a safe, organized, and professional commercial property. ",
    date: "February 20, 2026",
    category: "Compliance",
    image: "/images/striping-work.jpg",
  },
  {
    slug: "signs-your-parking-lot-needs-new-striping",
    title: "How Weather Affects Parking Lot Striping Durability",
    excerpt:
      "Sun, rain, and temperature fluctuations all impact your striping. Learn how to plan maintenance around seasonal changes.",
    date: "February 12, 2026",
    category: "Maintenance",
    image: "/images/hero-parking.jpg",
  },
  // {
  //   slug: "thermoplastic-vs-paint-striping",
  //   title: "Thermoplastic vs. Paint: Which Striping Material Is Right for You?",
  //   excerpt:
  //     "Compare durability, cost, and application methods to choose the best striping material for your parking lot.",
  //   date: "February 5, 2026",
  //   category: "Materials",
  //   image: "/images/ada-marking.jpg",
  // },
];

export default function BlogPage() {
  return (
    <>
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-5xl text-balance">
              Industry Insights & Tips
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
              Expert advice on parking lot striping, ADA compliance, maintenance
              best practices, and more.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col border border-border rounded-lg overflow-hidden bg-card hover:border-foreground/20 transition-colors"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-accent font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-balance">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-muted-foreground transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
              Ready to improve your parking lot?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get a free quote for professional striping services.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Request a Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
