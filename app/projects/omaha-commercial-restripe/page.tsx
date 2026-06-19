import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ChevronRight, CheckCircle, MapPin } from "lucide-react";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Omaha Parking Lot Re-Striping Project | Commercial Case Study",
  description:
    "A commercial parking lot re-striping case study in Omaha, NE — blackout re-striping, ADA compliance correction, and fire lane marking on a West Omaha commercial property.",
  alternates: {
    canonical: "https://www.striping.site/projects/omaha-commercial-restripe",
  },
  openGraph: {
    title: "Omaha Parking Lot Re-Striping Project | Commercial Case Study",
    description:
      "How we restored a salt-damaged commercial lot in Omaha, NE with MUTCD-compliant re-striping, ADA correction, and fire lane marking.",
    url: "https://www.striping.site/projects/omaha-commercial-restripe",
    siteName: "PrecisionLine Striping",
    images: [
      {
        url: "https://www.striping.site/images/striping-work.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial parking lot re-striping project in Omaha Nebraska",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omaha Parking Lot Re-Striping Project | Commercial Case Study",
    description:
      "A commercial parking lot re-striping case study in Omaha, NE — re-striping, ADA correction, and fire lane marking.",
    images: ["https://www.striping.site/images/striping-work.jpg"],
  },
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function OmahaCaseStudyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id":
          "https://www.striping.site/projects/omaha-commercial-restripe#article",
        headline:
          "Omaha Commercial Parking Lot Re-Striping Project | Case Study",
        image: "https://www.striping.site/images/striping-work.jpg",
        url: "https://www.striping.site/projects/omaha-commercial-restripe",
        author: {
          "@type": "Organization",
          name: "PrecisionLine Striping",
          url: "https://www.striping.site/",
        },
        publisher: {
          "@type": "Organization",
          name: "PrecisionLine Striping",
        },
        about: "Commercial parking lot striping in Omaha, NE",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.striping.site/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://www.striping.site/projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Omaha Commercial Re-Stripe",
            item: "https://www.striping.site/projects/omaha-commercial-restripe",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <Script
        id="omaha-casestudy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-muted py-3 border-b border-border"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li>
              <Link
                href="/projects"
                className="hover:text-foreground transition"
              >
                Projects
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li aria-current="page" className="text-foreground font-medium">
              Omaha Commercial Re-Stripe
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Commercial parking lot re-striping project completed in Omaha Nebraska"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent mb-4">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm uppercase tracking-wide text-white/80">
                Case Study · Omaha, Nebraska
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Omaha Commercial Parking Lot Re-Striping Project
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              How we restored a salt-damaged commercial lot in West Omaha with a
              full blackout re-stripe, ADA compliance correction, and fire lane
              marking — completed with minimal disruption to the property&apos;s
              tenants.
            </p>
          </div>
        </div>
      </section>

      {/* ── Project Overview ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold">Project Overview</h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                This project covered a commercial retail property in West Omaha
                whose parking lot markings had been heavily degraded after a
                single Nebraska winter of road salt and freeze-thaw cycling.
                Faded lines, worn ADA symbols, and an unclear fire lane had left
                the property both hard to navigate and out of compliance. Our{" "}
                <Link
                  href="/parking-lot-striping-omaha"
                  className="text-accent hover:underline"
                >
                  parking lot striping in Omaha
                </Link>{" "}
                team handled the full restoration in a single visit.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-muted rounded-xl p-4">
                  <dt className="text-muted-foreground">Property Type</dt>
                  <dd className="font-semibold mt-1">
                    Commercial retail · West Omaha
                  </dd>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <dt className="text-muted-foreground">Lot Size</dt>
                  <dd className="font-semibold mt-1">
                    [REPLACE: approx. square footage]
                  </dd>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <dt className="text-muted-foreground">Stall Count</dt>
                  <dd className="font-semibold mt-1">
                    [REPLACE: total stalls re-striped]
                  </dd>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <dt className="text-muted-foreground">Completed</dt>
                  <dd className="font-semibold mt-1">
                    [REPLACE: project completion date]
                  </dd>
                </div>
              </dl>
            </div>

            {/* Before / After images — placeholders reusing existing /public images */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/striping-work.jpg"
                    alt="Before and after parking lot re-striping at an Omaha commercial property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ada-marking.jpg"
                    alt="ADA compliant stall markings restored at an Omaha commercial parking lot"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                [REPLACE: swap in real before/after photos of the completed Omaha
                project]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge / Solution / Result ── */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold">The Challenge</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                After winter salt and freeze-thaw exposure, the lot&apos;s lines
                had faded to the point of confusing traffic flow. The ADA stalls
                no longer met the 2010 ADA Standards for stall and access-aisle
                dimensions, and the fire lane striping was no longer clearly
                legible — exposing the owner to compliance risk.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold">Our Solution</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We blacked out the old lines rather than painting over them, then
                re-striped the lot with high-solids, salt-resistant traffic paint
                using MUTCD-compliant line widths and colors. We corrected the
                ADA stalls and access aisles, re-applied ISA symbols, and
                re-marked the fire lane to Omaha Fire Department standards.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h2 className="text-xl font-bold">The Result</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The property returned to full ADA and fire-code compliance with
                clean, durable markings completed in [REPLACE: project duration,
                e.g. one business day]. [REPLACE: add a real, verifiable result —
                e.g. stalls added, inspection passed, tenant feedback]. We
                scheduled a post-winter inspection to protect the new striping.
              </p>
            </div>
          </div>

          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Blackout re-striping (no paint-over-paint)",
              "MUTCD-compliant line widths & colors",
              "ADA stalls corrected to 2010 Standards",
              "Fire lane re-marked to local code",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle
                  className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Need a similar project in Omaha?</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If your commercial lot has faded lines, worn ADA markings, or an
            unclear fire lane, we can help. Learn more about our{" "}
            <Link
              href="/parking-lot-striping-omaha"
              className="text-accent hover:underline"
            >
              Omaha parking lot striping services
            </Link>{" "}
            or request a free on-site estimate.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/parking-lot-striping-omaha#quote"
              className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
            >
              Get a Free Omaha Quote
            </Link>
            <Link
              href="/parking-lot-striping-omaha"
              className="border border-border px-6 py-3 rounded-md hover:bg-muted transition"
            >
              View Omaha Striping Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
