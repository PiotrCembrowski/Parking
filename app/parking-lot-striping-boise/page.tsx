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
  title: "Parking Lot Striping Boise ID | ADA & Fire Lane Marking",
  description:
    "Professional parking lot striping in Boise, ID. ADA markings, fire lanes, re-striping & new layouts for commercial properties. Free estimates. Fast 24–48 hr turnaround. Call (208) 555-0138.",
  alternates: {
    canonical: "https://www.striping.site/parking-lot-striping-boise",
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Shield,
    title: "ADA Compliant Markings",
    description:
      "All markings meet federal ADA guidelines and Boise municipal requirements, protecting your Treasure Valley property from fines and liability.",
  },
  {
    icon: Clock,
    title: "24–48 Hr Turnaround",
    description:
      "Most Boise striping projects are completed in one to two business days with minimal disruption to your tenants or customers.",
  },
  {
    icon: CheckCircle,
    title: "Idaho High Desert Paint",
    description:
      "We use UV-stabilized, high-solids acrylic traffic paint engineered for Boise's wide temperature swings — scorching high desert summers and hard-freezing Treasure Valley winters.",
  },
  {
    icon: DollarSign,
    title: "Transparent Local Pricing",
    description:
      "No hidden fees. Free on-site estimates with itemized quotes for every Boise and Treasure Valley property we service.",
  },
];

const services = [
  {
    title: "Parking Lot Line Striping",
    description:
      "New layouts and re-striping for standard parking spaces using durable white or yellow traffic paint. We maximize your lot's capacity while improving traffic flow and safety — critical for Boise's rapidly growing commercial corridors in Meridian and Eagle.",
  },
  {
    title: "ADA Handicap Striping",
    description:
      "Fully compliant accessible parking stalls including correct stall width, van-accessible spaces, diagonal-striped access aisles, ISA wheelchair symbols, and required signage per 2010 ADA Standards and Idaho municipal codes.",
  },
  {
    title: "Fire Lane Striping",
    description:
      "Red curb striping with stenciled 'FIRE LANE – NO PARKING' lettering per Boise Fire Department and Ada County requirements. Keeps emergency access routes clear and your property fully code-compliant.",
  },
  {
    title: "Re-Striping & Lot Refresh",
    description:
      "We black out old, faded lines before applying fresh markings — never paint-over-paint. Boise's high desert UV intensity and winter freeze-thaw cycles are a destructive combination for traffic paint. Most Treasure Valley lots need re-striping every 18–24 months.",
  },
  {
    title: "Directional Arrows & Stenciling",
    description:
      "Traffic flow arrows, stop bars, crosswalks, speed bump markings, reserved parking stencils, numbered spaces, and custom stenciling for any commercial property across the Boise–Meridian–Nampa metro.",
  },
  {
    title: "Warehouse & Interior Floor Marking",
    description:
      "OSHA-compliant aisle markings, safety zones, loading dock lines, and forklift lanes for Boise warehouses, tech campuses, and distribution centers across the Treasure Valley.",
  },
];

const process = [
  {
    step: "01",
    title: "Free On-Site Estimate",
    description:
      "We visit your Boise property, assess pavement condition, measure the lot, and identify any ADA or fire lane compliance gaps. You receive an itemized quote within 24 hours — no obligation.",
  },
  {
    step: "02",
    title: "Layout Planning",
    description:
      "Our team designs or reviews your lot layout to maximize parking capacity, improve traffic flow, and ensure full compliance with ADA standards and Boise municipal codes.",
  },
  {
    step: "03",
    title: "Professional Striping",
    description:
      "We prep the surface, black out old lines, and apply fresh markings using commercial-grade equipment and Idaho high-desert rated traffic paint. We schedule jobs during Boise's optimal morning hours to ensure proper curing before afternoon temperatures peak.",
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
      "We opened a new retail center on Eagle Road and needed the lot fully striped before our anchor tenant moved in. They turned it around in a day and a half — perfectly laid out, ADA stalls exactly right. Outstanding.",
    name: "Chris B.",
    business: "Commercial Developer, West Boise",
  },
  {
    quote:
      "Manage several properties across Meridian and Nampa. Every spring after the freeze-thaw season I call these guys to assess what needs re-striping. Consistent, competitively priced, and always on time.",
    name: "Sandra W.",
    business: "Property Manager, Treasure Valley",
  },
  {
    quote:
      "Our tech campus near downtown Boise needed warehouse floor markings plus the full exterior lot done. They handled both in two days. Professional crew, clean lines, and they even caught an ADA stall we were short on.",
    name: "Paul N.",
    business: "Facilities Director, Boise Tech Campus",
  },
];

const faqs = [
  {
    q: "How much does parking lot striping cost in Boise, ID?",
    a: "Most Boise commercial parking lots cost between $450 and $2,500 to re-stripe, depending on lot size, number of spaces, and the markings required — standard lines, ADA stalls, fire lanes, directional arrows, and so on. Small lots of 20–50 spaces typically run $450–$800. We provide free on-site estimates with fully itemized pricing so you know exactly what to expect before any work begins.",
  },
  {
    q: "How often does parking lot striping need to be replaced in Boise?",
    a: "Most Boise commercial lots need re-striping every 18–24 months. The Treasure Valley's climate creates a two-season problem for traffic paint: dry, intense summers with UV radiation reflecting off Boise's high desert terrain accelerate oxidation and chalking, while winter freeze-thaw cycles — temperatures regularly swing from below 20°F overnight to above freezing during the day — lift and crack paint edges from the asphalt. High-traffic properties such as grocery stores, medical offices, and drive-throughs often need attention annually.",
  },
  {
    q: "Can you complete the work without closing my parking lot?",
    a: "Yes. We work in sections so your Boise business can remain open throughout the project. For re-striping jobs, we complete each aisle independently. For full blackout re-stripes or larger commercial projects, we can schedule evening or weekend work to completely eliminate disruption to your customers or tenants.",
  },
  {
    q: "What are the ADA parking requirements for Boise commercial properties?",
    a: "Boise commercial properties must comply with the 2010 ADA Standards for Accessible Design. Requirements include a minimum number of accessible spaces based on total lot size, at least one van-accessible space per accessible parking area, a minimum 60-inch access aisle alongside each accessible stall, a 96-inch access aisle for van-accessible spaces, ISA wheelchair symbol stenciling, and compliant signage at required mounting heights. First ADA violations can result in fines starting at $75,000. We conduct a full compliance audit as part of every free estimate.",
  },
  {
    q: "How does Boise's climate affect parking lot striping?",
    a: "Boise's high desert location creates a uniquely challenging environment for traffic paint. Summers are hot and dry with intense UV radiation — the high desert elevation amplifies sun exposure compared to lower-altitude cities, causing paint to oxidize and chalk faster. Winters bring hard overnight freezes with temperatures regularly dropping below 20°F, while daytime temperatures climb above freezing — the rapid thermal cycling that causes paint edges to lift and crack. Boise also uses road sand and some salt during winter maintenance, which contributes to paint degradation. We select paint formulations specifically rated for this semi-arid, high-desert climate to maximize durability through all four Idaho seasons.",
  },
  {
    q: "Do you stripe lots for Boise's new construction developments?",
    a: "Yes. The Treasure Valley is one of the fastest-growing metro areas in the country, and we work regularly with developers and general contractors on new commercial and mixed-use developments across Boise, Meridian, Eagle, Nampa, and Caldwell. We can stripe new asphalt within 30 days of paving completion, coordinate directly with your general contractor, and handle all ADA layout planning for new lots from scratch.",
  },
  {
    q: "Do you handle fire lane striping for Boise properties?",
    a: "Yes. We stripe fire lanes to Boise Fire Department and Ada County standards, including red curb painting and 'FIRE LANE – NO PARKING' stenciling at required intervals. Incorrectly marked or missing fire lanes can result in city fines and significant liability exposure if emergency access is ever blocked. We ensure your property meets all current Boise fire code requirements before we leave the job site.",
  },
  {
    q: "What areas around Boise do you serve?",
    a: "We serve the full Treasure Valley including Meridian, Nampa, Caldwell, Eagle, Star, Middleton, Garden City, Kuna, and Mountain Home. Within Boise we cover all commercial areas including Downtown, the Bench, North End, East Boise, West Boise, South Boise, and the Airport District. We also service commercial clients in Twin Falls and along the I-84 corridor, and cover all Ada, Canyon, and Elmore County commercial properties.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function BoisePage() {
  // NOTE: Replace (208) 555-0138 with your real Boise tracking number before launch.
  const phone = "(208) 555-0138";
  const phoneTel = "tel:+12085550138";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.striping.site/parking-lot-striping-boise#business",
        name: "PrecisionLine Striping – Boise",
        image: "https://www.striping.site/images/hero-parking.jpg",
        url: "https://www.striping.site/parking-lot-striping-boise",
        telephone: "+12085550138",
        email: "boise@precisionline.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Boise",
          addressRegion: "ID",
          postalCode: "83702",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 43.615,
          longitude: -116.2023,
        },
        areaServed: [
          { "@type": "City", name: "Boise" },
          { "@type": "City", name: "Meridian" },
          { "@type": "City", name: "Nampa" },
          { "@type": "City", name: "Caldwell" },
          { "@type": "City", name: "Eagle" },
          { "@type": "City", name: "Garden City" },
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
            name: "Boise",
            item: "https://www.striping.site/parking-lot-striping-boise",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="boise-jsonld"
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
              Boise, ID
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-parking.jpg"
            alt="Commercial parking lot striping project completed in Boise Idaho"
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
                Boise, Idaho
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Parking Lot Striping Boise ID
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional parking lot striping for commercial properties across
              Boise and the greater Treasure Valley. ADA-compliant markings,
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
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Licensed & Insured",
                "Free On-Site Estimates",
                "High Desert UV-Rated Paint",
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
                Professional Parking Lot Striping in Boise, Idaho
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide professional parking lot striping for commercial
                properties throughout Boise and the Treasure Valley — from
                retail centers along Eagle Road and State Street to office
                campuses in Downtown Boise, new commercial developments in
                Meridian, warehouse facilities near the Airport District, and
                rapidly growing mixed-use properties in Nampa and Caldwell.
                Every project is handled by experienced striping technicians
                using commercial-grade equipment and Idaho-rated traffic paint.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Boise's high desert climate creates a double challenge for
                parking lot markings. Summers are hot and dry with intense UV
                radiation — high desert elevation amplifies sun exposure
                compared to lower-altitude cities, causing paint to oxidize and
                chalk faster. Winters bring hard overnight freezes with
                temperatures regularly dropping below 20°F while daytime
                temperatures climb above freezing — the rapid thermal cycling
                that causes paint edges to lift and crack from the asphalt. Most
                Treasure Valley lots need re-striping every 18–24 months to stay
                professional and compliant.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The Treasure Valley is also one of the fastest-growing metro
                areas in the country. We work regularly with developers and
                general contractors on new commercial projects across the
                Boise–Meridian–Eagle–Nampa corridor and understand the timeline
                pressures of new construction. Whether your lot needs a fresh
                layout on new asphalt, an ADA compliance re-stripe, or annual
                post-winter maintenance, we deliver results on schedule.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Retail Shopping Centers & Strip Malls",
                  "Office Buildings & Tech Campuses",
                  "Apartment & Condo Complexes",
                  "Industrial & Warehouse Facilities",
                  "Churches, Schools & Medical Centers",
                  "New Construction & Development Projects",
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
                    contact our Boise team
                  </Link>{" "}
                  for a free estimate.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/striping-work.jpg"
                  alt="Fresh parking lot line striping applied at a Boise Idaho commercial property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "500+", label: "Treasure Valley Projects" },
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

      {/* ── Services ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Boise Parking Lot Striping Services
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We handle every type of pavement marking for commercial properties
            across Boise and the Treasure Valley. All work is performed by
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
            Why Boise Businesses Choose Us
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

      {/* ── Process ── */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            How Our Boise Striping Process Works
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            From first call to finished lot — here is exactly what to expect
            when you hire us for parking lot striping in Boise.
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

      {/* ── ADA Section ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/ada-marking.jpg"
                alt="ADA compliant handicap parking space markings at a Boise Idaho commercial parking lot"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold">
                ADA Compliance Striping for Boise Properties
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every commercial parking lot open to the public in Boise must
                provide a correctly striped and signposted minimum number of
                accessible parking spaces under federal ADA law. Non-compliance
                carries fines starting at $75,000 — and Idaho's winter
                freeze-thaw cycles can fade ADA markings to the point of
                non-compliance within a single season without annual
                maintenance.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our team audits your current lot layout as part of every free
                estimate, identifies all compliance gaps, and provides a
                complete correction plan. We handle everything in a single visit
                — stall width, access aisle striping, van-accessible spaces, ISA
                stencils, and signage at correct mounting heights. For new
                Treasure Valley developments, we provide ADA layout planning
                from the ground up.
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
            Boise Parking Lot Striping Prices
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Estimated pricing ranges for common striping services in Boise, ID.
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
            your Boise property.{" "}
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
            What Boise Businesses Say
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
            Boise Parking Lot Striping — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto">
            Common questions from Boise and Treasure Valley property owners
            about striping costs, timelines, Idaho climate effects, and ADA
            compliance.
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
            Parking Lot Striping Across Boise and the Treasure Valley
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
            We serve commercial properties throughout the Treasure Valley,
            covering all Boise zip codes (83701–83709) and the full Ada and
            Canyon County service area. From Downtown Boise, the Bench, and
            North End to West Boise, the Airport District, and the booming
            Meridian and Eagle commercial corridors — we cover the entire
            southwest Idaho metro.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              "Meridian",
              "Nampa",
              "Caldwell",
              "Eagle",
              "Star",
              "Middleton",
              "Garden City",
              "Kuna",
              "Mountain Home",
              "Twin Falls",
            ].map((city) => (
              <span key={city} className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-accent" aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="quote" className="py-20 bg-foreground text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">
              Get a Free Boise Striping Quote
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Fast, no-obligation estimates for Boise and Treasure Valley
              businesses and property managers. We typically respond within a
              few hours and can schedule an on-site visit within 1–2 business
              days.
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
                  href="mailto:boise@precisionline.com"
                  className="hover:text-accent transition"
                >
                  boise@precisionline.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-white/70">
                  Serving Boise, Meridian, Nampa, Caldwell, Eagle, Garden City &
                  all of Ada, Canyon & Elmore County
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
