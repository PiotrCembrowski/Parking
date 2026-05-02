import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import Script from "next/script";
import {
  CheckCircle,
  Clock,
  Shield,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Parking Lot Striping Omaha NE | ADA & Fire Lane Marking",
  description:
    "Professional parking lot striping in Omaha, NE. ADA markings, fire lanes, re-striping & new layouts for commercial properties. Free estimates. Fast 24–48 hr turnaround. Call (402) 555-0161.",
  alternates: {
    canonical: "https://www.striping.site/parking-lot-striping-omaha",
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant Markings",
    description:
      "All markings meet federal ADA guidelines and Omaha municipal requirements, protecting your property from fines and liability.",
  },
  {
    icon: Clock,
    title: "24–48 Hr Turnaround",
    description:
      "Most Omaha striping projects are completed in one to two business days with minimal disruption to your tenants or customers.",
  },
  {
    icon: CheckCircle,
    title: "Nebraska-Grade Traffic Paint",
    description:
      "We use high-solids acrylic traffic paint engineered to survive Omaha's freeze-thaw cycles, heavy road salt applications, and humid summer heat.",
  },
  {
    icon: DollarSign,
    title: "Transparent Local Pricing",
    description:
      "No hidden fees. Free on-site estimates with itemized quotes for every Omaha property we service.",
  },
];

const services = [
  {
    title: "Parking Lot Line Striping",
    description:
      "New layouts and re-striping for standard parking spaces using durable white or yellow traffic paint. We maximize your lot's parking capacity while improving traffic flow and overall safety for Omaha's busy commercial corridors.",
  },
  {
    title: "ADA Handicap Striping",
    description:
      "Fully compliant accessible parking stalls including correct stall width, van-accessible spaces, diagonal-striped access aisles, ISA wheelchair symbols, and required signage per 2010 ADA Standards.",
  },
  {
    title: "Fire Lane Striping",
    description:
      "Red curb striping with stenciled 'FIRE LANE – NO PARKING' lettering per Omaha Fire Department requirements. Keeps emergency access routes clear and your property fully code-compliant year-round.",
  },
  {
    title: "Re-Striping & Lot Refresh",
    description:
      "We black out old, faded lines before applying fresh markings — never paint-over-paint. Nebraska's harsh winters dump road salt that actively strips traffic paint from asphalt, and freeze-thaw cycles cause paint edges to lift and peel. Most Omaha lots need re-striping every 18–24 months.",
  },
  {
    title: "Directional Arrows & Stenciling",
    description:
      "Traffic flow arrows, stop bars, crosswalks, speed bump markings, reserved parking stencils, numbered spaces, and custom stenciling for any commercial property across the greater Omaha–Council Bluffs metro.",
  },
  {
    title: "Warehouse & Interior Floor Marking",
    description:
      "OSHA-compliant aisle markings, safety zones, loading dock lines, and forklift lanes for Omaha warehouses, distribution centers, and industrial facilities across Douglas and Sarpy County.",
  },
];

const process = [
  {
    step: "01",
    title: "Free On-Site Estimate",
    description:
      "We visit your Omaha property, assess pavement condition, measure the lot, and identify any ADA or fire lane compliance gaps. You receive an itemized quote within 24 hours — no obligation.",
  },
  {
    step: "02",
    title: "Layout Planning",
    description:
      "Our team designs or reviews your lot layout to maximize parking capacity, improve traffic flow, and ensure full compliance with ADA standards and Omaha municipal codes.",
  },
  {
    step: "03",
    title: "Professional Striping",
    description:
      "We prep the surface, black out old lines, and apply fresh markings using commercial-grade equipment and Nebraska-rated traffic paint. We schedule around weather windows to ensure proper curing conditions — critical in Omaha's variable spring and fall climate.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "Before we leave, we walk the property with you, review all markings, and confirm every line meets your specifications and all applicable compliance requirements.",
  },
];

const pricingItems = [
  {
    service: "Parking Lot Line Striping",
    price: "$0.20 – $0.35",
    unit: "per linear foot",
    description: "White or yellow standard parking lines",
  },
  {
    service: "ADA Handicap Stall",
    price: "$175 – $325",
    unit: "per stall",
    description: "Includes symbol, border, and access aisle",
  },
  {
    service: "Fire Lane Striping",
    price: "$2.50 – $4.50",
    unit: "per linear foot",
    description: "Red curb with stenciled lettering",
  },
  {
    service: "Directional Arrows",
    price: "$35 – $75",
    unit: "each",
    description: "Traffic flow arrows and turn indicators",
  },
  {
    service: "Parking Space Numbering",
    price: "$20 – $40",
    unit: "each",
    description: "Number or letter stencils",
  },
  {
    service: "Full Lot Re-Striping",
    price: "$450 – $2,500+",
    unit: "per lot",
    description: "Based on size, condition, and service count",
  },
];

const testimonials = [
  {
    quote:
      "Our lot on West Dodge Road looked terrible after last winter — salt damage had destroyed the lines in the high-traffic lanes. They blacked everything out and re-striped the whole lot in one morning. Looks brand new.",
    name: "Jim K.",
    business: "Retail Center Owner, West Omaha",
  },
  {
    quote:
      "I manage several commercial properties near Aksarben Village and use them every spring for re-striping after the winter salt season. Always reliable, always on time, and the pricing is consistently fair.",
    name: "Rachel T.",
    business: "Commercial Property Manager, Midtown Omaha",
  },
  {
    quote:
      "Our distribution facility near the Missouri River needed OSHA-compliant floor markings throughout. They handled the complete layout in a single day. Very organized crew and the lines came out perfectly straight.",
    name: "Steve M.",
    business: "Warehouse Operations Manager, North Omaha",
  },
];

const faqs = [
  {
    q: "How much does parking lot striping cost in Omaha, NE?",
    a: "Most Omaha commercial parking lots cost between $450 and $2,500 to re-stripe, depending on lot size, number of spaces, and the markings required — standard lines, ADA stalls, fire lanes, directional arrows, and so on. Small lots of 20–50 spaces typically run $450–$800. We provide free on-site estimates with fully itemized pricing so you know exactly what to expect before any work begins.",
  },
  {
    q: "How often does parking lot striping need to be replaced in Omaha?",
    a: "Most Omaha commercial lots need re-striping every 18–24 months — and sometimes annually if the lot sees heavy winter maintenance. Nebraska winters are particularly destructive to traffic paint: road salt is applied heavily throughout the season and actively breaks down the bond between paint and asphalt, while freeze-thaw cycles cause paint edges to lift and peel. Hot, humid summers then accelerate oxidation of whatever paint remains. We recommend a post-winter inspection every spring to assess damage before it becomes a liability or compliance issue.",
  },
  {
    q: "Can you complete the work without closing my parking lot?",
    a: "Yes. We work in sections so your Omaha business can remain open throughout the project. For re-striping jobs, we complete each aisle independently. For full blackout re-stripes or larger commercial projects, we can schedule evening or weekend work to completely eliminate disruption to your customers or tenants.",
  },
  {
    q: "What are the ADA parking requirements for Omaha commercial properties?",
    a: "Omaha follows the 2010 ADA Standards for Accessible Design. Requirements include a minimum number of accessible spaces based on total lot size, at least one van-accessible space per accessible parking area, a minimum 60-inch access aisle alongside each accessible stall, a 96-inch access aisle for van-accessible spaces, ISA wheelchair symbol stenciling, and compliant signage at required mounting heights. First ADA violations can result in fines starting at $75,000. We conduct a full compliance audit as part of every free estimate.",
  },
  {
    q: "How does Nebraska's winter weather affect parking lot striping?",
    a: "Nebraska winters are among the harshest for pavement markings in the Midwest. Omaha averages over 28 inches of snow per year and uses road salt heavily from November through March. Salt is particularly damaging because it chemically weakens the bond between traffic paint and asphalt, causing paint to flake and peel far faster than UV or wear alone would. Freeze-thaw cycles compound the problem — water penetrates the paint film, freezes, expands, and lifts paint edges from the surface. Property owners who don't re-stripe annually after winter often find their lots significantly degraded by late spring.",
  },
  {
    q: "Do you handle fire lane striping for Omaha properties?",
    a: "Yes. We stripe fire lanes to Omaha Fire Department standards, including red curb painting and 'FIRE LANE – NO PARKING' stenciling at required intervals. Incorrectly marked or missing fire lanes can result in city fines and serious liability exposure if emergency access is ever blocked. We ensure your property meets all current Omaha fire code requirements before we leave.",
  },
  {
    q: "Do you stripe new lots as well as re-stripe existing ones?",
    a: "Yes. We handle both new lot layouts from scratch and re-striping over existing pavement. For new layouts, we work from your blueprints or create a custom design to maximize parking capacity while meeting all local codes. For re-striping, we always black out old lines first — painting over faded lines creates an unprofessional double-line appearance and is not an acceptable professional standard.",
  },
  {
    q: "What areas around Omaha do you serve?",
    a: "We serve the full Omaha–Council Bluffs metro area including Bellevue, Papillion, La Vista, Gretna, Ralston, Millard, Elkhorn, Bennington, and Council Bluffs, Iowa. Within Omaha we cover all commercial corridors including West Dodge Road, Maple Street, 72nd Street, South 84th Street, North 30th Street, the Old Market, Aksarben Village, and Midtown. We serve all Douglas, Sarpy, and Washington County properties.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function OmahaPage() {
  // NOTE: Replace (402) 555-0161 with your real Omaha tracking number before launch.
  const phone = "(402) 555-0161";
  const phoneTel = "tel:+14025550161";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.striping.site/parking-lot-striping-omaha#business",
        name: "PrecisionLine Striping – Omaha",
        image: "https://www.striping.site/images/hero-parking.jpg",
        url: "https://www.striping.site/parking-lot-striping-omaha",
        telephone: "+14025550161",
        email: "omaha@precisionline.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Omaha",
          addressRegion: "NE",
          postalCode: "68102",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.2565,
          longitude: -95.9345,
        },
        areaServed: [
          { "@type": "City", name: "Omaha" },
          { "@type": "City", name: "Bellevue" },
          { "@type": "City", name: "Papillion" },
          { "@type": "City", name: "La Vista" },
          { "@type": "City", name: "Elkhorn" },
          { "@type": "City", name: "Council Bluffs" },
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "08:00",
            closes: "14:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Parking Lot Striping Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Parking Lot Line Striping",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "ADA Handicap Striping",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Fire Lane Striping" },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Parking Lot Re-Striping",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Directional Arrows & Stenciling",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Warehouse Floor Marking",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
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
            name: "Locations",
            item: "https://www.striping.site/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Omaha",
            item: "https://www.striping.site/parking-lot-striping-omaha",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <Script
        id="omaha-jsonld"
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
                href="/locations"
                className="hover:text-foreground transition"
              >
                Locations
              </Link>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li aria-current="page" className="text-foreground font-medium">
              Omaha, NE
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Commercial parking lot striping project completed in Omaha Nebraska"
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
                Omaha, Nebraska
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parking Lot Striping Omaha NE
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional parking lot striping for commercial properties across
              Omaha and the greater Nebraska–Iowa metro. ADA-compliant markings,
              fire lane striping, re-striping, and new layouts — completed in
              24–48 hours with minimal disruption to your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#quote"
                className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
              >
                Get Free Quote
              </Link>
              <a
                href={phoneTel}
                className="border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition"
              >
                Call {phone}
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Licensed & Insured",
                "Free On-Site Estimates",
                "Salt & Freeze-Thaw Resistant Paint",
                "ADA Compliance Guaranteed",
              ].map((trust) => (
                <div key={trust} className="flex items-center gap-2">
                  <CheckCircle
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-white/80">{trust}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Description ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold">
                Professional Parking Lot Striping in Omaha, Nebraska
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide professional parking lot striping for commercial
                properties throughout Omaha — from retail centers along West
                Dodge Road and Maple Street to office parks near Aksarben
                Village, warehouse facilities in North Omaha, and apartment
                communities expanding across Papillion and La Vista. Every
                project is handled by experienced striping technicians using
                commercial-grade equipment and Nebraska-rated traffic paint.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nebraska winters are among the most destructive forces for
                parking lot markings in the Midwest. Omaha averages more than 28
                inches of snow annually and applies road salt heavily from
                November through March. Salt chemically weakens the adhesion
                between traffic paint and asphalt — causing paint to flake and
                peel faster than heat or UV alone ever would. Freeze-thaw cycles
                compound the damage: water penetrates the paint film, freezes,
                expands, and pries edges from the surface. We use high-solids
                acrylic traffic paint specifically selected for Nebraska's
                winter conditions to maximize durability across every season.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you need a post-winter re-stripe to restore a
                salt-damaged lot, new ADA handicap spaces to bring your property
                into compliance, or fire lane markings to satisfy Omaha Fire
                Department requirements, our team delivers clean, precise,
                long-lasting results every time.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Retail Shopping Centers & Strip Malls",
                  "Office Buildings & Business Parks",
                  "Apartment & Condo Complexes",
                  "Industrial & Warehouse Facilities",
                  "Churches, Schools & Medical Centers",
                  "Hotels, Restaurants & Hospitality",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle
                      className="h-4 w-4 text-accent flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-2 text-sm">
                <p>
                  View our full{" "}
                  <Link
                    href="/services"
                    className="text-accent hover:underline"
                  >
                    parking lot striping services
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="text-accent hover:underline">
                    contact our Omaha team
                  </Link>{" "}
                  for a free estimate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/striping-work.jpg"
                  alt="Fresh parking lot line striping applied at an Omaha commercial property"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "450+", label: "Omaha Projects" },
                  { num: "98%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent">
                      {stat.num}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Omaha Parking Lot Striping Services
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We handle every type of pavement marking for commercial properties
            across Omaha, Council Bluffs, and the surrounding metro. All work is
            performed by licensed, insured professionals using commercial-grade
            equipment.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-background rounded-xl p-6 border border-border hover:border-accent transition"
              >
                <h3 className="font-semibold text-base">{svc.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Why Omaha Businesses Choose Us
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-muted p-6 rounded-xl">
                <b.icon
                  className="h-6 w-6 text-accent mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-base">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            How Our Omaha Striping Process Works
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            From first call to finished lot — here is exactly what to expect
            when you hire us for parking lot striping in Omaha.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="text-3xl font-bold text-accent/30 mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-base">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADA Compliance Section ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/ada-marking.jpg"
                alt="ADA compliant handicap parking space markings at an Omaha commercial parking lot"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">
                ADA Compliance Striping for Omaha Properties
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Under federal ADA regulations, every commercial parking lot open
                to the public in Omaha must provide a correctly striped and
                signposted minimum number of accessible parking spaces.
                Non-compliance can result in fines starting at $75,000 — and
                because Nebraska winters accelerate the fading of ADA markings
                faster than almost anywhere else, many Omaha properties fall out
                of compliance without realizing it after a single harsh winter
                season.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team audits your current lot layout as part of every free
                estimate, identifies all compliance gaps, and provides a
                complete correction plan. We handle everything in a single visit
                — from stall width and access aisle striping to van-accessible
                spaces and signage at correct mounting heights.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Correct number of accessible spaces per lot size",
                  "Minimum 96-inch wide accessible stalls",
                  "Van-accessible spaces with 96-inch access aisles",
                  "Diagonal-striped no-parking access aisles",
                  "International Symbol of Accessibility (ISA) stencils",
                  "Compliant signage at required mounting heights",
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
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Omaha Parking Lot Striping Prices
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Estimated pricing ranges for common striping services in Omaha, NE.
            Exact pricing depends on lot size, surface condition, and project
            scope. All estimates are free with no obligation.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingItems.map((item) => (
              <div
                key={item.service}
                className="bg-background border border-border rounded-xl p-6 hover:border-accent transition"
              >
                <h3 className="font-semibold text-base">{item.service}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{item.price}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.unit}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prices are estimates only. Contact us for a free, exact quote for
            your Omaha property.{" "}
            <Link href="/services" className="text-accent hover:underline">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            What Omaha Businesses Say
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-muted rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 fill-accent"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Omaha Parking Lot Striping — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Common questions from Omaha property owners and managers about
            striping costs, timelines, Nebraska winter damage, and ADA
            compliance requirements.
          </p>

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-base">{faq.q}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center">
            Parking Lot Striping Across Omaha and the Metro Area
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We serve commercial properties throughout the Omaha–Council Bluffs
            metro, covering all Omaha zip codes (68101–68164) and surrounding
            communities. From West Dodge Road and Maple Street to 72nd Street,
            South Omaha, North Omaha, Midtown, and Aksarben Village — we cover
            all of Douglas, Sarpy, and Washington County, plus Council Bluffs
            and the Iowa side of the metro.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "Bellevue",
              "Papillion",
              "La Vista",
              "Gretna",
              "Ralston",
              "Millard",
              "Elkhorn",
              "Bennington",
              "Council Bluffs",
              "Carter Lake",
            ].map((city) => (
              <span key={city} className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-accent" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section id="quote" className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">
              Get a Free Omaha Striping Quote
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Fast, no-obligation estimates for Omaha businesses and property
              managers. We typically respond within a few hours and can schedule
              an on-site visit within 1–2 business days.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone
                  className="h-5 w-5 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <a href={phoneTel} className="hover:text-accent transition">
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  className="h-5 w-5 text-accent flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:omaha@precisionline.com"
                  className="hover:text-accent transition"
                >
                  omaha@precisionline.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/70">
                  Serving Omaha, Bellevue, Papillion, La Vista, Elkhorn, Council
                  Bluffs & all of Douglas, Sarpy & Washington County
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50">
                Mon–Fri 7am–6pm · Sat 8am–2pm · Evening & weekend scheduling
                available for large projects
              </p>
            </div>
          </div>

          <div className="bg-background text-foreground rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
