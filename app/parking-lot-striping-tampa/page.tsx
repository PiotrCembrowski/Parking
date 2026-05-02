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
  title: "Parking Lot Striping Tampa FL | ADA & Fire Lane Marking",
  description:
    "Professional parking lot striping in Tampa, FL. ADA markings, fire lanes, re-striping & new layouts for commercial properties. Free estimates. Fast 24–48 hr turnaround. Call (813) 555-0174.",
  alternates: {
    canonical: "https://www.striping.site/parking-lot-striping-tampa",
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant Markings",
    description:
      "All markings meet federal ADA guidelines and Florida accessibility standards, protecting your Tampa property from fines and legal exposure.",
  },
  {
    icon: Clock,
    title: "24–48 Hr Turnaround",
    description:
      "Most Tampa striping projects are completed in one to two business days, scheduled around Florida's afternoon rain pattern to protect your fresh markings.",
  },
  {
    icon: CheckCircle,
    title: "Florida-Rated Traffic Paint",
    description:
      "We use UV-stabilized, water-resistant acrylic traffic paint engineered for Tampa's intense sun, high humidity, and heavy summer rainfall.",
  },
  {
    icon: DollarSign,
    title: "Transparent Local Pricing",
    description:
      "No hidden fees. Free on-site estimates with itemized quotes for every Tampa Bay area property we service.",
  },
];

const services = [
  {
    title: "Parking Lot Line Striping",
    description:
      "New layouts and re-striping for standard parking spaces using durable white or yellow traffic paint. We maximize your lot's capacity while improving traffic flow, safety, and curb appeal for Tampa's competitive commercial real estate market.",
  },
  {
    title: "ADA Handicap Striping",
    description:
      "Fully compliant accessible parking stalls including correct stall width, van-accessible spaces, diagonal-striped access aisles, ISA wheelchair symbols, and required signage per 2010 ADA Standards and Florida Building Code.",
  },
  {
    title: "Fire Lane Striping",
    description:
      "Red curb striping with stenciled 'FIRE LANE – NO PARKING' lettering per Tampa Fire Rescue and Hillsborough County requirements. Keeps emergency access routes clear and your property fully code-compliant.",
  },
  {
    title: "Re-Striping & Lot Refresh",
    description:
      "We black out old, faded lines before applying fresh markings — never paint-over-paint. Tampa's relentless UV index and summer monsoon rains accelerate fading significantly. Most Tampa lots need re-striping every 12–18 months to maintain a professional appearance.",
  },
  {
    title: "Directional Arrows & Stenciling",
    description:
      "Traffic flow arrows, stop bars, crosswalks, speed bump markings, reserved parking stencils, numbered spaces, and custom stenciling for any commercial property across the Tampa Bay metro area.",
  },
  {
    title: "Warehouse & Interior Floor Marking",
    description:
      "OSHA-compliant aisle markings, safety zones, loading dock lines, and forklift lanes for Tampa warehouses, Port Tampa Bay logistics facilities, and distribution centers across Hillsborough County.",
  },
];

const process = [
  {
    step: "01",
    title: "Free On-Site Estimate",
    description:
      "We visit your Tampa property, assess pavement condition, measure the lot, and identify any ADA or fire lane compliance gaps. You receive a detailed, itemized quote within 24 hours — no obligation.",
  },
  {
    step: "02",
    title: "Layout Planning",
    description:
      "Our team designs or reviews your lot layout to maximize parking capacity, improve traffic flow, and ensure full compliance with ADA standards, Florida Building Code, and Tampa municipal requirements.",
  },
  {
    step: "03",
    title: "Professional Striping",
    description:
      "We prep the surface, black out old lines, and apply fresh markings using commercial-grade equipment and Florida-rated traffic paint. We schedule around Tampa's afternoon storm pattern to ensure proper curing conditions.",
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
      "We manage a retail strip on Dale Mabry and the lot had been ignored for two years. They blacked out every ghost line, re-striped everything cleanly, and added the ADA stalls we were short on. Done before we opened.",
    name: "Maria S.",
    business: "Retail Property Manager, South Tampa",
  },
  {
    quote:
      "Our medical office complex near USF needed full ADA re-compliance after an audit. They came out the next day, assessed everything, and had it corrected within a week. Professional crew, clean work.",
    name: "Dr. Kevin L.",
    business: "Medical Office Complex Owner, New Tampa",
  },
  {
    quote:
      "Needed our warehouse near Port Tampa striped to OSHA standards. Full layout — loading zones, pedestrian aisles, forklift corridors — done in a single day. Very competitive pricing compared to the other quotes I got.",
    name: "Frank D.",
    business: "Logistics Facility Manager, Port Tampa Bay Area",
  },
];

const faqs = [
  {
    q: "How much does parking lot striping cost in Tampa, FL?",
    a: "Most Tampa commercial parking lots cost between $450 and $2,500 to re-stripe, depending on lot size, number of spaces, and the types of markings required — standard lines, ADA stalls, fire lanes, directional arrows, and so on. Small lots of 20–50 spaces typically run $450–$800. We provide free on-site estimates with fully itemized pricing so there are no surprises.",
  },
  {
    q: "How often does parking lot striping need to be replaced in Tampa?",
    a: "More often than in most U.S. cities. Tampa receives over 2,500 hours of sunshine per year and an average of 46 inches of rain — both of which accelerate paint breakdown significantly. The intense UV index bleaches and oxidizes traffic paint, while heavy summer rains lift and erode paint edges. Most Tampa commercial lots need re-striping every 12–18 months. High-traffic properties like restaurants, shopping centers, and medical offices often need attention annually to maintain a professional, code-compliant appearance.",
  },
  {
    q: "Can you stripe my lot without closing it to customers?",
    a: "Yes. We work in sections so your Tampa business can stay open throughout the project. For re-striping jobs, we complete each aisle independently. We also schedule work around Tampa's predictable afternoon thunderstorm pattern — typically working mornings to ensure paint is fully cured before afternoon rains arrive. For large commercial projects or full blackout re-stripes, we can schedule evening or weekend shifts.",
  },
  {
    q: "What are the ADA parking requirements for Tampa commercial properties?",
    a: "Tampa commercial properties must comply with both the 2010 ADA Standards for Accessible Design and the Florida Building Code, which in some areas imposes stricter requirements than federal minimums. Requirements include a minimum number of accessible spaces based on total lot size, at least one van-accessible space per accessible parking area, a 60-inch minimum access aisle alongside each accessible stall, a 96-inch access aisle for van-accessible spaces, ISA wheelchair symbol stenciling, and compliant signage at required heights. First ADA violations can result in fines starting at $75,000. We conduct a full compliance audit as part of every free estimate.",
  },
  {
    q: "How does Tampa's climate affect parking lot striping?",
    a: "Tampa's climate is one of the most demanding in the country for pavement markings. The city averages 233 sunny days per year with a UV index that regularly hits 11 (extreme) from April through October — the primary cause of paint oxidation and fading. On top of that, Tampa's wet season (June–September) brings nearly daily afternoon thunderstorms that introduce standing water, which erodes fresh and aging paint alike. We use UV-stabilized, waterproof acrylic traffic paint specifically selected for Florida coastal conditions to maximize lifespan on every project.",
  },
  {
    q: "Do you handle fire lane striping for Tampa properties?",
    a: "Yes. We stripe fire lanes to Tampa Fire Rescue and Hillsborough County standards, including red curb painting and 'FIRE LANE – NO PARKING' stenciling at required intervals. Improperly marked fire lanes can result in city fines and significant liability exposure if emergency access is ever obstructed. We ensure your property meets all current Tampa fire code requirements before we leave the job site.",
  },
  {
    q: "Do you stripe new lots as well as re-stripe existing ones?",
    a: "Yes. We handle both new lot layouts from scratch and re-striping over existing pavement. For new layouts, we work from your blueprints or create a custom design to maximize parking capacity while meeting Florida Building Code and all local Tampa requirements. For re-striping, we always black out old lines first — painting over faded markings creates an unprofessional double-line appearance and is not an acceptable professional standard.",
  },
  {
    q: "What areas around Tampa do you serve?",
    a: "We serve the entire Tampa Bay metro area including St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, Land O' Lakes, Lutz, Temple Terrace, Plant City, Lakeland, and Sarasota. Within Tampa we cover all neighborhoods including South Tampa, Hyde Park, Ybor City, New Tampa, USF area, Westchase, Town 'N' Country, and the Channelside and Harbour Island districts. We serve all Hillsborough, Pinellas, and Pasco County commercial properties.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function TampaPage() {
  // NOTE: Replace (813) 555-0174 with your real Tampa tracking number before launch.
  const phone = "(813) 555-0174";
  const phoneTel = "tel:+18135550174";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.striping.site/parking-lot-striping-tampa#business",
        name: "PrecisionLine Striping – Tampa",
        image: "https://www.striping.site/images/hero-parking.jpg",
        url: "https://www.striping.site/parking-lot-striping-tampa",
        telephone: "+18135550174",
        email: "tampa@precisionline.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tampa",
          addressRegion: "FL",
          postalCode: "33602",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.9506,
          longitude: -82.4572,
        },
        areaServed: [
          { "@type": "City", name: "Tampa" },
          { "@type": "City", name: "St. Petersburg" },
          { "@type": "City", name: "Clearwater" },
          { "@type": "City", name: "Brandon" },
          { "@type": "City", name: "Riverview" },
          { "@type": "City", name: "Wesley Chapel" },
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
            name: "Tampa",
            item: "https://www.striping.site/parking-lot-striping-tampa",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <Script
        id="tampa-jsonld"
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
              Tampa, FL
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Commercial parking lot striping project completed in Tampa Florida"
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
                Tampa, Florida
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parking Lot Striping Tampa FL
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional parking lot striping for commercial properties across
              Tampa and the greater Tampa Bay area. ADA-compliant markings, fire
              lane striping, re-striping, and new layouts — completed in 24–48
              hours with zero disruption to your business.
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
                "UV & Rain-Resistant Paint",
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
                Professional Parking Lot Striping in Tampa, Florida
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide professional parking lot striping for commercial
                properties throughout Tampa — from retail centers along Dale
                Mabry Highway and shopping plazas in Westchase to medical
                complexes near USF, logistics facilities by Port Tampa Bay, and
                apartment communities across Brandon and Riverview. Every
                project is handled by experienced striping technicians using
                commercial-grade equipment and Florida-rated traffic paint.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tampa presents a uniquely demanding environment for parking lot
                striping. The city logs over 2,500 hours of sunshine per year
                with a UV index that hits extreme levels from April through
                October — the leading cause of paint fading and oxidation. The
                wet season from June through September brings near-daily
                afternoon thunderstorms that introduce standing water, eroding
                both fresh and aging paint edges. Most Tampa commercial
                properties need re-striping every 12–18 months to maintain a
                professional appearance and remain code-compliant. We use
                UV-stabilized, waterproof acrylic traffic paint selected
                specifically for Florida coastal conditions.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you need a full re-stripe of a sun-bleached lot, new ADA
                handicap spaces to pass a Florida Building Code inspection, or
                fire lane markings to meet Tampa Fire Rescue requirements, our
                team delivers clean, precise, long-lasting results.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Retail Shopping Centers & Strip Malls",
                  "Office Buildings & Business Parks",
                  "Apartment & Condo Complexes",
                  "Industrial & Warehouse Facilities",
                  "Hospitals, Clinics & Medical Centers",
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
                    contact our Tampa team
                  </Link>{" "}
                  for a free estimate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/striping-work.jpg"
                  alt="Fresh parking lot line striping applied at a Tampa Bay area commercial property"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "600+", label: "Tampa Projects" },
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
            Tampa Parking Lot Striping Services
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We handle every type of pavement marking for commercial properties
            across Tampa and the Tampa Bay region. All work is performed by
            licensed, insured professionals using commercial-grade equipment.
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
            Why Tampa Businesses Choose Us
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
            How Our Tampa Striping Process Works
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            From first call to finished lot — here is exactly what to expect
            when you hire us for parking lot striping in Tampa.
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
                alt="ADA compliant handicap parking space markings at a Tampa commercial parking lot"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">
                ADA Compliance Striping for Tampa Properties
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tampa commercial properties must meet both federal ADA
                requirements and the Florida Building Code — and in some
                accessibility categories, Florida imposes stricter standards
                than federal minimums. Non-compliance exposes property owners to
                ADA fines starting at $75,000 for a first violation, plus
                state-level penalties and increased liability in the event of an
                incident.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team conducts a full compliance audit as part of every free
                estimate, identifies all deficiencies, and provides a correction
                plan that satisfies both ADA and Florida Building Code
                requirements. We handle the complete scope in a single visit —
                stall width, access aisles, van-accessible spaces, ISA stencils,
                and signage.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Correct number of accessible spaces per lot size",
                  "Minimum 96-inch wide accessible stalls",
                  "Van-accessible spaces with 96-inch access aisles",
                  "Diagonal-striped no-parking access aisles",
                  "International Symbol of Accessibility (ISA) stencils",
                  "Florida Building Code compliant signage",
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
            Tampa Parking Lot Striping Prices
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Estimated pricing ranges for common striping services in Tampa, FL.
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
            your Tampa property.{" "}
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
            What Tampa Businesses Say
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
            Tampa Parking Lot Striping — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Common questions from Tampa property owners and managers about
            striping costs, timelines, Florida climate effects, and ADA
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
            Parking Lot Striping Across Tampa Bay
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We serve commercial properties throughout the Tampa Bay metro,
            covering all Tampa zip codes (33601–33699) and the full
            Hillsborough, Pinellas, and Pasco County service area. From South
            Tampa and Hyde Park to Ybor City, New Tampa, Westchase, Town 'N'
            Country, and the Channelside district — we cover all of Tampa Bay.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "St. Petersburg",
              "Clearwater",
              "Brandon",
              "Riverview",
              "Wesley Chapel",
              "Land O' Lakes",
              "Lutz",
              "Temple Terrace",
              "Plant City",
              "Lakeland",
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
              Get a Free Tampa Striping Quote
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Fast, no-obligation estimates for Tampa businesses and property
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
                  href="mailto:tampa@precisionline.com"
                  className="hover:text-accent transition"
                >
                  tampa@precisionline.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/70">
                  Serving Tampa, St. Pete, Clearwater, Brandon, Riverview,
                  Wesley Chapel & all of Hillsborough, Pinellas & Pasco County
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
