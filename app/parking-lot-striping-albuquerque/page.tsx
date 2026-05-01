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
// Title kept under 60 chars. Primary keyword + city + state explicit.
export const metadata: Metadata = {
  title: "Parking Lot Striping Albuquerque NM | ADA & Fire Lane Marking",
  description:
    "Professional parking lot striping in Albuquerque, NM. ADA markings, fire lanes, re-striping & new layouts for commercial properties. Free estimates. Fast 24–48 hr turnaround. Call (505) 555-0193.",
  alternates: {
    canonical: "https://www.striping.site/parking-lot-striping-albuquerque",
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant Markings",
    description:
      "All markings meet federal ADA guidelines and New Mexico accessibility standards, protecting your property from costly fines.",
  },
  {
    icon: Clock,
    title: "24–48 Hr Turnaround",
    description:
      "Most Albuquerque striping projects are completed in one to two business days with minimal disruption to your tenants or customers.",
  },
  {
    icon: CheckCircle,
    title: "High-Desert Grade Paint",
    description:
      "We use UV-stabilized, high-solids acrylic traffic paint engineered for Albuquerque's intense sun, extreme heat, and monsoon moisture.",
  },
  {
    icon: DollarSign,
    title: "Transparent Local Pricing",
    description:
      "No hidden fees. Free on-site estimates with itemized quotes for every Albuquerque property we service.",
  },
];

const services = [
  {
    title: "Parking Lot Line Striping",
    description:
      "New layouts and re-striping for standard parking spaces using durable white or yellow traffic paint. We maximize your lot capacity while improving traffic flow and safety.",
  },
  {
    title: "ADA Handicap Striping",
    description:
      "Fully compliant accessible parking stalls including proper width, van-accessible spaces, diagonal-striped access aisles, ISA wheelchair symbols, and required signage.",
  },
  {
    title: "Fire Lane Striping",
    description:
      "Red curb striping with stenciled 'FIRE LANE – NO PARKING' lettering per Albuquerque Fire Rescue requirements. Keeps emergency access routes unobstructed and code-compliant.",
  },
  {
    title: "Re-Striping & Lot Refresh",
    description:
      "We black out old, faded lines before applying fresh markings — never paint-over-paint. Albuquerque's high-altitude UV index accelerates fading, meaning most lots need re-striping every 12–18 months.",
  },
  {
    title: "Directional Arrows & Stenciling",
    description:
      "Traffic flow arrows, stop bars, crosswalks, speed bump markings, reserved parking stencils, numbered spaces, and custom stenciling for any commercial property in the ABQ metro.",
  },
  {
    title: "Warehouse & Interior Floor Marking",
    description:
      "OSHA-compliant aisle markings, safety zones, loading dock lines, and forklift lanes for Albuquerque warehouses, distribution centers, and industrial facilities.",
  },
];

const process = [
  {
    step: "01",
    title: "Free On-Site Estimate",
    description:
      "We visit your Albuquerque property, assess pavement condition, measure the lot, and identify any ADA or fire lane compliance gaps. You receive a detailed, itemized quote within 24 hours.",
  },
  {
    step: "02",
    title: "Layout Planning",
    description:
      "Our team designs or reviews your lot layout to maximize parking capacity, improve traffic flow, and ensure full compliance with ADA standards and Albuquerque municipal codes.",
  },
  {
    step: "03",
    title: "Professional Striping",
    description:
      "We prep the surface, black out old lines, and apply fresh markings using commercial-grade equipment and UV-resistant traffic paint rated for New Mexico's high desert conditions.",
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
      "We had three failed ADA inspections at our Northeast Heights property before we called these guys. They did a full compliance audit, re-striped everything correctly, and we passed on the next inspection without any issues.",
    name: "Carlos M.",
    business: "Commercial Property Owner, Northeast Heights",
  },
  {
    quote:
      "Manage a strip mall on Central Ave and the lot was embarrassingly faded. They blacked out the old lines and had fresh striping down the next morning. Looks brand new and the whole job took less than four hours.",
    name: "Linda T.",
    business: "Property Manager, Central Albuquerque",
  },
  {
    quote:
      "Our warehouse on the West Side needed full OSHA floor markings. They handled everything — aisle lines, loading zones, pedestrian walkways. Fair price, professional crew, done on schedule.",
    name: "Robert G.",
    business: "Operations Director, Albuquerque Distribution Center",
  },
];

const faqs = [
  {
    q: "How much does parking lot striping cost in Albuquerque, NM?",
    a: "Most Albuquerque commercial parking lots cost between $450 and $2,500 to re-stripe, depending on lot size, number of spaces, and the types of markings required — standard lines, ADA stalls, fire lanes, directional arrows, and so on. Small lots of 20–50 spaces typically run $450–$800. We provide free on-site estimates with full itemized pricing so there are no surprises.",
  },
  {
    q: "How often does parking lot striping need to be replaced in Albuquerque?",
    a: "More often than most property owners expect. Albuquerque sits at over 5,300 feet elevation, which means the UV index is significantly higher than at sea level — UV radiation is one of the primary causes of traffic paint breakdown. Combined with summer temperatures regularly exceeding 100°F and monsoon moisture from July through September, most Albuquerque lots need re-striping every 12–18 months. High-traffic properties like grocery stores or restaurants may need attention annually.",
  },
  {
    q: "Can you stripe my lot without closing it to customers?",
    a: "Yes. We work in sections so your business can remain open during the project. For re-striping jobs, we complete each aisle independently and allow paint to dry before moving to the next section. For full blackout re-stripes or large commercial projects, we can schedule evening or weekend work to ensure zero disruption to your Albuquerque customers.",
  },
  {
    q: "What are the ADA parking requirements for Albuquerque commercial properties?",
    a: "Albuquerque follows the 2010 ADA Standards for Accessible Design. Requirements include a minimum number of accessible spaces based on total lot size, at least one van-accessible space per accessible parking area, a minimum 60-inch access aisle adjacent to each accessible stall, a 96-inch access aisle for van-accessible spaces, International Symbol of Accessibility (ISA) stenciling, and compliant signage mounted at required heights. ADA fines start at $75,000 for a first violation. We conduct a compliance audit as part of every free estimate.",
  },
  {
    q: "Does Albuquerque's altitude or climate affect parking lot striping?",
    a: "Significantly. At 5,300+ feet, Albuquerque receives roughly 30% more UV radiation than sea-level cities — this is the single biggest factor accelerating paint fading in the ABQ metro. Summer heat above 100°F can affect how quickly paint cures, and the monsoon season (July–September) requires careful scheduling to avoid applying paint during or after heavy rain. We account for all of these conditions when selecting materials and scheduling your project.",
  },
  {
    q: "Do you handle fire lane striping for Albuquerque properties?",
    a: "Yes. We stripe fire lanes to Albuquerque Fire Rescue standards, including red curb painting and 'FIRE LANE – NO PARKING' stenciling at required intervals. Improperly marked or missing fire lanes can result in municipal fines and significant liability if emergency access is ever obstructed. We ensure your property meets all current ABQ fire code requirements.",
  },
  {
    q: "Do you stripe new lots as well as re-stripe existing ones?",
    a: "Yes. We handle both new lot layouts from scratch and re-striping over existing pavement. For new layouts, we work from your blueprints or create a custom design to maximize parking capacity while meeting all local codes. For re-striping, we always black out old lines first — painting over faded lines creates a cluttered double-line appearance and doesn't meet professional standards.",
  },
  {
    q: "What areas around Albuquerque do you serve?",
    a: "We serve the entire Albuquerque metro area including Rio Rancho, Corrales, Bernalillo, Los Lunas, Bosque Farms, Edgewood, and Tijeras. Within Albuquerque we cover all neighborhoods including Northeast Heights, Nob Hill, Old Town, the North Valley, South Valley, Kirtland/Ridgecrest, Westside, and Downtown. We also service commercial clients in Santa Fe and along the I-25 corridor.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AlbuquerquePage() {
  // NOTE: Replace (505) 555-0193 with your real Albuquerque tracking number before launch.
  const phone = "(505) 555-0193";
  const phoneTel = "tel:+15055550193";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id":
          "https://www.striping.site/parking-lot-striping-albuquerque#business",
        name: "PrecisionLine Striping – Albuquerque",
        image: "https://www.striping.site/images/hero-parking.jpg",
        url: "https://www.striping.site/parking-lot-striping-albuquerque",
        telephone: "+15055550193",
        email: "albuquerque@precisionline.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Albuquerque",
          addressRegion: "NM",
          postalCode: "87102",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 35.0844,
          longitude: -106.6504,
        },
        areaServed: [
          { "@type": "City", name: "Albuquerque" },
          { "@type": "City", name: "Rio Rancho" },
          { "@type": "City", name: "Bernalillo" },
          { "@type": "City", name: "Corrales" },
          { "@type": "City", name: "Los Lunas" },
          { "@type": "City", name: "Edgewood" },
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
            name: "Albuquerque",
            item: "https://www.striping.site/parking-lot-striping-albuquerque",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ── JSON-LD Structured Data ── */}
      <Script
        id="albuquerque-jsonld"
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
              Albuquerque, NM
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Commercial parking lot striping project completed in Albuquerque New Mexico"
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
                Albuquerque, New Mexico
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parking Lot Striping Albuquerque NM
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional parking lot striping for commercial properties across
              Albuquerque and the greater Bernalillo County area. ADA-compliant
              markings, fire lane striping, re-striping, and new layouts —
              completed in 24–48 hours with zero disruption to your business.
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
                "UV-Resistant Paint for NM Climate",
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
                Professional Parking Lot Striping in Albuquerque, New Mexico
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide professional parking lot striping for commercial
                properties throughout Albuquerque — from retail centers on
                Central Avenue and shopping plazas in the Northeast Heights to
                warehouses on the Westside and industrial facilities near the
                airport. Every project is handled by experienced striping
                technicians using commercial-grade equipment and high-quality
                traffic paint.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Albuquerque presents a unique challenge for parking lot
                striping. At over 5,300 feet above sea level, the city receives
                significantly more UV radiation than lower-elevation cities —
                the single biggest factor driving paint fading. Add summer
                temperatures that regularly exceed 100°F and the intense monsoon
                moisture of July through September, and most ABQ lots need
                re-striping every 12–18 months. We use UV-stabilized,
                high-solids acrylic traffic paint specifically chosen for New
                Mexico's high desert conditions.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you need a full re-stripe of a sun-bleached lot, new ADA
                handicap spaces to bring your property into compliance, or fire
                lane markings to satisfy Albuquerque Fire Rescue requirements,
                our team delivers clean, precise, long-lasting results.
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
                    contact our Albuquerque team
                  </Link>{" "}
                  for a free estimate.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/striping-work.jpg"
                  alt="Fresh parking lot line striping applied at an Albuquerque commercial property"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "400+", label: "ABQ Projects" },
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
            Albuquerque Parking Lot Striping Services
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We handle every type of pavement marking for commercial properties
            across Albuquerque and Bernalillo County. All work is performed by
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
            Why Albuquerque Businesses Choose Us
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
            How Our Albuquerque Striping Process Works
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            From first call to finished lot — here is exactly what to expect
            when you hire us for parking lot striping in Albuquerque.
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
                alt="ADA compliant handicap parking space markings at an Albuquerque commercial parking lot"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">
                ADA Compliance Striping for Albuquerque Properties
              </h2>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Under federal ADA regulations, every commercial parking lot open
                to the public in Albuquerque must provide a minimum number of
                correctly striped accessible parking spaces. Non-compliance can
                result in fines starting at $75,000 for a first violation — and
                re-striping is one of the most cost-effective ways to achieve
                and maintain compliance.
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team audits your current lot layout as part of every free
                estimate, identifies compliance gaps, and provides a complete
                correction plan. We handle proper stall width and access aisle
                striping through to van-accessible spaces and compliant signage
                — all in a single visit.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Correct number of accessible spaces per lot size",
                  "Minimum 96-inch wide accessible stalls",
                  "Van-accessible spaces with 96-inch access aisles",
                  "Diagonal-striped no-parking access aisles",
                  "International Symbol of Accessibility (ISA) stencils",
                  "Compliant signage at required heights",
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
            Albuquerque Parking Lot Striping Prices
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Estimated pricing ranges for common striping services in
            Albuquerque, NM. Exact pricing depends on lot size, surface
            condition, and project scope. All estimates are free with no
            obligation.
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
            your Albuquerque property.{" "}
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
            What Albuquerque Businesses Say
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
            Albuquerque Parking Lot Striping — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Common questions from Albuquerque property owners and managers about
            striping costs, timelines, New Mexico climate effects, and
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
            Parking Lot Striping Across Albuquerque and Bernalillo County
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We serve commercial properties throughout the Albuquerque metro
            area, covering all ABQ zip codes (87101–87123) and surrounding
            communities. From the Northeast Heights and Nob Hill to the
            Westside, North Valley, South Valley, and Downtown — we cover the
            entire Bernalillo County service area and beyond.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "Rio Rancho",
              "Corrales",
              "Bernalillo",
              "Los Lunas",
              "Bosque Farms",
              "Edgewood",
              "Tijeras",
              "Belen",
              "Moriarty",
              "Santa Fe",
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
              Get a Free Albuquerque Striping Quote
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Fast, no-obligation estimates for Albuquerque businesses and
              property managers. We typically respond within a few hours and can
              schedule an on-site visit within 1–2 business days.
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
                  href="mailto:albuquerque@precisionline.com"
                  className="hover:text-accent transition"
                >
                  albuquerque@precisionline.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/70">
                  Serving Albuquerque, Rio Rancho, Corrales, Bernalillo, Los
                  Lunas & all Bernalillo County
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
