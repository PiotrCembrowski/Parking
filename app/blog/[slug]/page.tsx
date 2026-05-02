import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* -----------------------------
   Blog Posts (All In One File)
------------------------------*/

const posts = {
  "ada-compliance-parking-lot-guide": {
    title: "ADA Compliance Parking Lot Guide (2025)",
    excerpt:
      "Learn ADA parking lot striping requirements, dimensions, and compliance rules to avoid fines.",
    image: "/images/blog/ada-parking.jpg",
    date: "January 15, 2025",
    readTime: "6 min read",
    content: `
Parking lot ADA compliance is critical for businesses. Failing to meet ADA requirements can result in fines, lawsuits, and accessibility issues.

## What Is ADA Parking Compliance

ADA compliance ensures accessible parking for people with disabilities. This includes proper striping, signage, and dimensions.

## ADA Parking Space Requirements

Standard ADA parking spaces must:

- Be at least 8 feet wide
- Include access aisle
- Proper signage
- Clear markings

## When To Restrip Parking Lot

You should restripe when:

- Lines are faded
- New ADA regulations apply
- After sealcoating
- Every 1–2 years

## Professional Striping Benefits

Professional striping ensures:

- Compliance
- Clean appearance
- Safety
- Liability protection
`,
  },

  "parking-lot-striping-cost": {
    title: "Parking Lot Striping Cost Guide (2025)",
    excerpt:
      "How much does parking lot striping cost? Learn pricing factors and average costs.",
    image: "/images/blog/striping-cost.jpg",
    date: "January 12, 2025",
    readTime: "5 min read",
    content: `
Parking lot striping cost depends on several factors including size, layout, and condition.

## Average Striping Cost

Typical pricing:

- Small lot: $300–$700
- Medium lot: $700–$1500
- Large lot: $1500+

## What Affects Cost

Factors include:

- Number of stalls
- ADA spaces
- Arrows & symbols
- Surface condition

## When To Repaint Lines

Parking lots typically need repainting every 1-2 years.

## Get Professional Quote

Professional contractors ensure durable and compliant striping.
`,
  },

  "signs-your-parking-lot-needs-striping": {
    title: "Signs Your Parking Lot Needs New Striping",
    excerpt:
      "Faded parking lot lines? Learn when it's time to restripe your parking lot.",
    image: "/images/blog/faded-lines.jpg",
    date: "January 10, 2025",
    readTime: "4 min read",
    content: `
Faded parking lot striping reduces safety and hurts property appearance.

## Faded Lines

When lines are hard to see, it's time to restripe.

## Safety Issues

Poor striping creates:

- Confusion
- Traffic problems
- Liability risk

## ADA Compliance Issues

Faded ADA spaces can lead to fines.

## Professional Striping Benefits

New striping improves:

- Safety
- Appearance
- Compliance
`,
  },

  "thermoplastic-vs-paint-striping": {
    title: "Thermoplastic vs. Paint: Which Striping Material Is Right for You?",
    excerpt:
      "Compare durability, cost, and application methods to choose the best striping material for your parking lot.",
    image: "/images/ada-marking.jpg",
    date: "February 5, 2026",
    readTime: "8 min read",
    content: `

Choosing the right parking lot striping material is one of the most important decisions property owners and facility managers make. The type of striping you choose affects durability, maintenance costs, safety, and overall appearance of your parking lot.

Two of the most common options are **traffic paint** and **thermoplastic striping**. While both serve the same purpose — creating visible and organized parking lot markings — they differ significantly in lifespan, cost, installation, and performance.

This guide compares thermoplastic vs. paint striping in detail so you can choose the best solution for your property.

---

# What Is Traffic Paint Striping?

Traffic paint striping is the most commonly used method for parking lot markings. Contractors apply specialized traffic-grade paint using professional striping machines that ensure consistent, clean lines.

Traffic paint is typically made from:

- Water-based acrylic paint  
- Solvent-based paint  
- Fast-drying traffic paint formulations  

These paints are designed to withstand weather, vehicle traffic, and UV exposure, though they generally require more frequent maintenance compared to thermoplastic.

## Advantages of Paint Striping

### Lower Upfront Cost

Paint striping is significantly more affordable than thermoplastic. This makes it ideal for:

- Small businesses  
- Apartment complexes  
- Retail centers  
- Office buildings  
- HOA communities  

Because of the lower cost, many property owners choose paint for regular maintenance cycles.

### Fast Application

Paint striping is quick to apply and dries fast. Most parking lots can be completed within:

- 1–4 hours for small lots  
- Same-day completion for medium lots  
- Overnight completion for large properties  

This reduces business disruption and allows parking lots to reopen quickly.

### Flexible Layout Changes

Paint is easier to remove or modify. This is especially helpful if you:

- Reconfigure parking spaces  
- Add ADA stalls  
- Update traffic flow  
- Add new signage  

Businesses that expect layout changes often prefer paint striping.

---

# What Is Thermoplastic Striping?

Thermoplastic striping uses a melted plastic material applied at high temperatures. Once applied, the material cools and hardens into a thick, durable marking bonded to the pavement.

Thermoplastic is commonly used for:

- Roadways  
- High-traffic parking lots  
- Airports  
- Industrial facilities  
- Municipal properties  

The thickness of thermoplastic striping typically ranges between 90 and 125 mils, which is significantly thicker than paint.

---

# Advantages of Thermoplastic Striping

## Exceptional Durability

Thermoplastic striping lasts significantly longer than paint. While paint typically lasts 6–18 months, thermoplastic can last:

- 3–5 years in parking lots  
- 5+ years in some applications  
- Even longer in low-traffic areas  

This makes thermoplastic ideal for:

- High traffic areas  
- Distribution centers  
- Hospitals  
- Shopping centers  
- Warehouses  

## Superior Visibility

Thermoplastic markings often include reflective glass beads embedded into the material. This provides:

- Better nighttime visibility  
- Improved safety  
- Enhanced professional appearance  

This is especially important for:

- Hospitals  
- Airports  
- Schools  
- Large commercial properties  

## Long-Term Cost Savings

Although thermoplastic has a higher upfront cost, it can save money over time. Fewer restriping cycles mean:

- Less maintenance  
- Lower long-term expenses  
- Reduced downtime  

For high-traffic properties, thermoplastic often becomes more cost-effective over time.

---

# Paint vs Thermoplastic: Cost Comparison

Cost is one of the biggest deciding factors when choosing striping materials.

## Paint Striping Cost

Typical pricing:

- Parking lines: $0.20–$0.35 per linear foot  
- ADA stalls: $175–$325 per stall  
- Arrows: $35–$75 each  
- Full lot restriping: $400–$2,500+  

Paint is budget-friendly and ideal for routine maintenance.

## Thermoplastic Striping Cost

Thermoplastic typically costs:

- Parking lines: $1.50–$4.00 per linear foot  
- Symbols: $150–$400 each  
- Crosswalks: $300–$1,500  
- Full lot thermoplastic: $2,000–$10,000+  

Thermoplastic is significantly more expensive upfront but lasts much longer.

---

# Durability Comparison

Durability is where thermoplastic clearly stands out.

Paint Striping Lifespan:

- Light traffic: 12–18 months  
- Medium traffic: 6–12 months  
- Heavy traffic: 3–6 months  

Thermoplastic Lifespan:

- Light traffic: 4–5 years  
- Medium traffic: 3–4 years  
- Heavy traffic: 2–3 years  

This difference makes thermoplastic ideal for properties with high vehicle volume.

---

# Installation Process Comparison

## Paint Installation

Paint striping installation includes:

1. Surface cleaning  
2. Layout measurement  
3. Paint application  
4. Drying time (15–60 minutes)  

Most paint jobs can be completed quickly with minimal disruption.

## Thermoplastic Installation

Thermoplastic installation includes:

1. Surface cleaning  
2. Heating thermoplastic material  
3. Applying material using specialized equipment  
4. Cooling and curing  

Thermoplastic requires specialized crews and equipment, which contributes to higher costs.

---

# Weather Performance

Weather conditions play a big role in striping performance.

## Paint Performance

Paint can:

- Fade from UV exposure  
- Wear from snow plows  
- Deteriorate in heavy rain climates  

This is why paint often requires annual maintenance.

## Thermoplastic Performance

Thermoplastic performs better in:

- Hot climates  
- High UV environments  
- Heavy traffic areas  

It resists:

- Fading  
- Cracking  
- Peeling  

This makes thermoplastic ideal for long-term durability.

---

# When to Choose Paint Striping

Paint striping is best when:

- Budget is limited  
- Annual maintenance is acceptable  
- Property has moderate traffic  
- Layout changes are expected  
- Quick turnaround is needed  

Common paint striping applications:

- Retail centers  
- Office buildings  
- Apartment complexes  
- Churches  
- Small commercial lots  

---

# When to Choose Thermoplastic Striping

Thermoplastic is best when:

- Long-term durability is needed  
- High traffic is expected  
- Budget allows higher upfront cost  
- Safety and visibility are priorities  
- Maintenance access is limited  

Common thermoplastic applications:

- Hospitals  
- Airports  
- Industrial facilities  
- Distribution centers  
- Municipal properties  

---

# ADA Compliance Considerations

Both paint and thermoplastic can be used for ADA compliant markings.

Common ADA markings include:

- Handicap stalls  
- Access aisles  
- ADA symbols  
- Van-accessible markings  

Thermoplastic is often preferred for ADA markings because:

- Longer lifespan  
- Better visibility  
- Reduced maintenance  

However, paint is still widely used and compliant when properly maintained.

---

# Maintenance Requirements

Paint Striping Maintenance:

- Annual restriping recommended  
- Touch-ups every 6–12 months  
- More frequent in heavy traffic areas  

Thermoplastic Maintenance:

- Minimal maintenance  
- Occasional touch-ups  
- Much longer maintenance intervals  

This makes thermoplastic appealing for large properties.

---

# Environmental Considerations

Water-based traffic paint is environmentally friendly and commonly used today. Many municipalities prefer water-based paint because of lower emissions.

Thermoplastic is also durable and reduces frequent repainting, which can lower environmental impact over time.

Both options can be environmentally responsible depending on application and maintenance cycles.

---

# Professional Appearance

Fresh striping improves:

- Property value  
- Safety  
- Traffic flow  
- Customer experience  

Thermoplastic often provides a more professional and long-lasting appearance, while paint offers flexibility and affordability.

---

# Final Verdict: Thermoplastic vs Paint

Choose Paint If:

- You want lower upfront costs  
- You plan regular maintenance  
- You expect layout changes  
- Traffic is moderate  

Choose Thermoplastic If:

- You want maximum durability  
- Traffic is heavy  
- You want long-term savings  
- You want premium appearance  

---

# Get Professional Parking Lot Striping

Whether you choose paint or thermoplastic, professional striping improves safety, organization, and property appearance. A qualified striping contractor can evaluate your parking lot and recommend the best solution based on traffic, budget, and long-term goals.

If your parking lot lines are faded, difficult to see, or outdated, now is the perfect time to upgrade your striping and improve your property's appearance and safety.

`,
  },
};

/* -----------------------------
   Static Params
------------------------------*/

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

/* -----------------------------
   Metadata SEO
------------------------------*/

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Parking Lot Striping Experts`,
    description: post.excerpt,
    keywords: [
      "parking lot striping",
      "parking lot maintenance",
      "parking lot painting",
      "ADA parking lot compliance",
      "commercial striping",
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

/* -----------------------------
   Page Component
------------------------------*/

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  const contentSections = post.content.split("##");

  const relatedPosts = Object.entries(posts)
    .filter(([postSlug]) => postSlug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.image,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "PrecisionLine Striping",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl px-6">
          <div className="text-white/80 text-sm mb-4">
            <Link href="/">Home</Link> /<Link href="/blog"> Blog</Link> /
            {post.title}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-white">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>

            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {contentSections.map((section, index) => {
            if (index === 0) {
              return (
                <p key={index} className="mb-8 text-muted-foreground">
                  {section}
                </p>
              );
            }

            const [title, ...content] = section.split("\n");

            return (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>

                <p className="text-muted-foreground whitespace-pre-line">
                  {content.join("\n")}
                </p>
              </div>
            );
          })}

          {/* CTA */}
          <div className="mt-16 bg-primary p-10 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Parking Lot Striping?
            </h3>

            <p className="text-white/80 mb-6">
              Get fast, professional striping services today.
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map(([slug, related]) => (
              <Link key={slug} href={`/blog/${slug}`}>
                <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <div className="relative h-48">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{related.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {related.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
