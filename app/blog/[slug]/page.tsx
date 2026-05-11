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

  "how-often-repaint-parking-lot-lines": {
    title: "How Often Should Parking Lot Lines Be Repainted?",
    excerpt:
      "Parking lot striping fades over time. Learn typical repainting intervals and warning signs that it is time to restripe.",
    image: "/images/striping-work.jpg",
    date: "March 8, 2026",
    readTime: "6 min read",
    content: `
Knowing when to repaint parking lot lines helps keep your property safe, organized, and compliant.

## Typical Repainting Schedule

Most lots should be repainted every 12 to 24 months, depending on traffic volume and weather.

## Signs It Is Time To Repaint

Common warning signs include:

- Faded or hard-to-see lines
- Worn ADA symbols
- Cracking or peeling paint
- Confusing traffic flow

## Factors That Affect Lifespan

Striping wears faster with:

- Heavy vehicle traffic
- Snow plowing
- Intense UV exposure
- Frequent rain and standing water

## Best Time of Year To Restripe

Dry, mild weather provides the best results. Many property owners schedule striping during spring or early fall.

## Why Routine Repainting Matters

Fresh striping improves:

- Driver safety
- Property appearance
- ADA compliance
- Overall traffic organization
`,
  },

  "parking-lot-maintenance": {
    title: "Fire Lane Marking Requirements: What Property Owners Need to Know",
    excerpt:
      "Understand common fire lane striping rules, signage requirements, and maintenance best practices for commercial properties.",
    image: "/images/striping-work.jpg",
    date: "February 20, 2026",
    readTime: "7 min read",
    content: `
Fire lane markings are essential for emergency access and public safety.

## Why Fire Lane Markings Matter

Clearly marked fire lanes help emergency responders access buildings quickly during critical situations.

## Common Fire Lane Requirements

Local codes vary, but many jurisdictions require:

- Red curb or red painted lane boundaries
- "FIRE LANE - NO PARKING" stenciling
- Reflective or visible signage
- Continuous visibility and maintenance

## How Often Should Fire Lanes Be Repainted

Inspect markings at least annually and repaint whenever markings become faded or difficult to read.

## Compliance Risks

Unclear fire lane markings can lead to:

- Code violations
- Fines
- Increased liability
- Slower emergency response

## Professional Striping Helps

Professional crews can ensure your fire lanes meet local code requirements and remain highly visible year-round.
`,
  },

  "signs-your-parking-lot-needs-new-striping": {
    title: "How Weather Affects Parking Lot Striping Durability",
    excerpt:
      "Sun, rain, and temperature fluctuations all impact your striping. Learn how to plan maintenance around seasonal changes.",
    image: "/images/hero-parking.jpg",
    date: "February 12, 2026",
    readTime: "5 min read",
    content: `
Weather has a major impact on how long parking lot striping remains visible and effective.

## Sun and UV Exposure

Strong sunlight can fade paint quickly, especially in open lots with no shade.

## Rain and Moisture

Frequent rain and standing water can wear down striping and reduce adhesion over time.

## Temperature Swings

Freeze-thaw cycles and extreme heat can cause pavement movement that accelerates line wear.

## Snow and Ice Removal

Plows and de-icing chemicals can abrade or damage striping during winter months.

## Maintenance Tips

To improve durability:

- Use quality traffic paint or thermoplastic
- Repaint before markings become severely faded
- Schedule regular inspections
- Address drainage issues to limit standing water
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

  // ─── NEW POST ─────────────────────────────────────────────────────────────
  "how-to-choose-parking-lot-striping-contractor": {
    title:
      "How to Choose a Parking Lot Striping Contractor (Without Getting Burned)",
    excerpt:
      "Not all striping contractors are equal. Learn the seven questions every property owner should ask before hiring — and the red flags that signal a contractor to avoid.",
    image: "/images/striping-work.jpg",
    date: "April 14, 2026",
    readTime: "9 min read",
    content: `
Hiring the wrong parking lot striping contractor is a mistake that costs more than you expect. Bad workmanship fades in months, not years. Incorrect ADA layouts expose you to five-figure fines. Uninsured crews leave you liable for on-site injuries. And because most property owners only think about striping when the lot already looks embarrassing, they end up hiring in a hurry — which is exactly when bad decisions happen.

This guide walks you through exactly how to evaluate and hire a professional striping contractor, what questions to ask, what answers to listen for, and which red flags to walk away from.

## Why Contractor Quality Varies So Much

The parking lot striping industry has one of the lowest barriers to entry of any commercial service. A used line-striper machine costs $2,000–$6,000. A few gallons of traffic paint, a pickup truck, and a contractor can be in business by next week.

That means the market includes everything from 30-year operators with a fleet of commercial equipment and ADA-certified crews — to someone who bought a machine last month and is learning on your lot.

The finished product looks almost identical on day one. By month six, the difference is obvious. By month twelve, the cut-rate job looks like it was never done.

## What to Look for in a Striping Contractor

### Professional Equipment

Commercial parking lot striping requires self-propelled or ride-on airless striping machines that apply paint at a consistent film thickness and line width. These machines produce sharp, clean edges and consistent coverage across the entire lot.

Walk-behind hand-push stripers are acceptable for small touch-up work or tight interior areas. What is not acceptable is brush application, roller application, or consumer-grade paint sprayers — all of which produce uneven coverage, poor adhesion, and significantly shorter lifespan.

Ask any contractor: what equipment do you use for a standard commercial re-stripe? If the answer is vague or they cannot name the machine, probe further or move on.

### Commercial-Grade Paint

Not all traffic paint is the same. Professional contractors use high-solids waterborne acrylic traffic paint with a solids content of 55% or higher. Higher solids content means more actual pigment and binder per gallon, which translates directly to better coverage, brighter color, and longer lifespan.

Budget operators often use low-solids paint that costs significantly less per gallon. It applies easily, dries fast, and looks fine on day one. Within six months it starts to chalk, fade, and flake because there simply was not enough material applied to the surface to withstand traffic and weather.

Ask the contractor: what brand and product do you use, and what is the solids content? A contractor who cannot answer that question is not specifying paint — they are buying whatever is cheapest at the supply house that week.

### Blackout Process for Re-Striping

This is the single clearest indicator of professional versus amateur work. When re-striping an existing lot, old lines must be blacked out — covered with black traffic paint — before new lines are applied. Painting new lines directly over faded old ones creates ghost lines, double lines, and a cluttered appearance that confuses drivers and looks unprofessional within months.

Ask specifically: do you black out old lines before re-striping? If the answer is that blackout is not necessary or that they paint over old lines, that contractor is not meeting professional standards. Walk away.

### ADA Knowledge and Compliance Audit

Federal ADA law requires a specific number of correctly dimensioned and marked accessible parking spaces in every commercial lot. The requirements involve minimum stall widths, access aisle dimensions, van-accessible space ratios, signage height, and surface conditions.

A professional striping contractor should be able to:

- Determine how many ADA spaces your lot is required to provide based on total space count
- Identify whether your current accessible stalls meet dimensional requirements
- Recognize when van-accessible spaces are missing or incorrectly sized
- Know the signage requirements and flag when signs need to be added or relocated

Ask the contractor: will you audit my current lot for ADA compliance as part of the estimate? A confident yes — followed by a description of what they check — indicates a contractor who takes compliance seriously. Vagueness on this question is a meaningful warning sign.

### Proof of Insurance

Before any contractor steps onto your property, verify two things: general liability insurance and workers' compensation coverage. Ask for certificates of insurance naming your property as an additionally insured party.

General liability covers property damage if the contractor's equipment or operations damage your pavement, vehicles, or building. Workers' compensation covers crew injuries on your property — without it, an injured worker may have grounds to pursue a claim directly against you as the property owner.

An uninsured or underinsured contractor is not a bargain. They are a liability transfer.

### References From Similar Properties

Ask for references from commercial properties similar to yours in size and type — retail centers, office parks, medical facilities, apartment complexes, warehouses. Call those references and ask specific questions: Did the lines hold up? Were they on time? Did they blackout old lines? Were there any ADA issues after the job?

A contractor who hesitates to provide references, provides only residential references, or gives you references who cannot be reached is showing you something important.

### Itemized Written Quote

A professional contractor provides a written, itemized quote that breaks down the cost of every element: line striping per linear foot, ADA stalls each, fire lane striping per linear foot, directional arrows each, blackout work, and any other scope items. This document protects both parties and makes it easy to compare quotes from multiple contractors on an apples-to-apples basis.

A single total number with no breakdown is a red flag. It makes it impossible to evaluate whether you are being charged fairly for each element, and it gives the contractor flexibility to skip scope items you assumed were included.

## Red Flags That Signal a Contractor to Avoid

These are patterns that experienced property managers learn to recognize quickly.

**No written quote.** Verbal pricing is a recipe for disputes. Any reputable contractor will put the scope and price in writing before work begins.

**Unusually low price with no explanation.** A quote that is 40–50% below other bids is almost always explained by one or more of: lower-quality paint, no blackout process, no insurance, or a misunderstanding of the scope. Ask specifically what is and is not included.

**Cannot explain their paint product.** If a contractor cannot tell you what paint they use and why it is appropriate for your climate and traffic conditions, they are not specifying materials — they are buying whatever is cheapest.

**No ADA discussion.** Any professional re-stripe of a commercial lot should include at minimum a visual check of ADA compliance. A contractor who does not raise the topic at all is not protecting you from a significant liability.

**Pressure to decide immediately.** "I have a crew available today, but only today" is a sales tactic, not a professional scheduling practice. Legitimate contractors schedule in advance.

**No physical business presence.** A contractor with no website, no Google Business Profile, no verifiable address, and reviews that cannot be cross-referenced is a meaningful risk. You need to be able to reach them after the job is done.

## Questions to Ask Every Contractor Before Hiring

Use this checklist when evaluating bids:

- What striping machine do you use for commercial lots?
- What paint product and solids content do you specify?
- Do you black out old lines before re-striping? What is your blackout process?
- Will you audit my lot for ADA compliance as part of the estimate?
- Do you carry general liability and workers' compensation insurance? Can you provide certificates?
- Can you provide references from similar commercial properties?
- Will you provide a written, itemized quote before work begins?
- How do you handle scheduling around weather? What happens if it rains?
- What is your warranty or callback policy if there are quality issues?

A contractor who answers these questions confidently, specifically, and consistently is worth hiring. A contractor who deflects, generalizes, or seems unfamiliar with the questions is telling you something important about how they operate.

## How to Compare Multiple Quotes

Get at least three quotes for any striping project of meaningful size. When comparing them, look beyond the total price and evaluate:

**Scope alignment.** Do all three quotes include the same elements — blackout, ADA, fire lanes, arrows? If one quote is significantly lower, identify what is missing rather than assuming it is a better price.

**Paint specification.** If contractors specify different paint products, research the specifications. A higher price using a higher-solids paint may be the better long-term value.

**Timeline.** How far out is each contractor scheduled? Availability is not inherently a quality signal, but a contractor who can start tomorrow on a large commercial job may be underbooked for a reason.

**Professionalism of the quote itself.** A detailed, clearly formatted written quote with line items and terms reflects how the contractor runs their business. A handwritten number on a business card reflects the same.

## The Value of a Long-Term Relationship

The property managers who get consistently good results from striping are not the ones who re-bid the job to the cheapest option every cycle. They find a contractor they trust, establish a maintenance schedule, and treat striping as a managed service rather than a one-time transaction.

A contractor who knows your property, understands your traffic patterns, and has records of what was done and when will serve you significantly better than an anonymous low bidder who has never seen your lot before showing up with a machine.

Establish that relationship early, communicate clearly, and you will spend less time managing striping problems and more time on everything else.

## Get a Free Professional Estimate

If your parking lot lines are faded, your ADA stalls are questionable, or you simply cannot remember the last time the lot was properly maintained, the first step is a professional on-site assessment. A qualified striping contractor can evaluate your current markings, identify compliance gaps, and provide an itemized quote with no obligation.

That conversation costs you nothing and gives you the information you need to make a smart decision.
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
    .filter(([relatedSlug]) => relatedSlug !== slug)
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
