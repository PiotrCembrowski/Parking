import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
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
  const post = posts[params.slug as keyof typeof posts];

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  const contentSections = post.content.split("##");

  const relatedPosts = Object.entries(posts)
    .filter(([slug]) => slug !== params.slug)
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
