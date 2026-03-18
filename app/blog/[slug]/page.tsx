import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    readTime: string;
    content: string[];
  }
> = {
  "ada-compliance-parking-lot-guide": {
    title: "ADA Compliance Guide for Parking Lots",
    excerpt:
      "Learn the essential requirements for ADA-compliant parking spaces, including dimensions, signage, and access aisle specifications.",
    date: "March 15, 2026",
    category: "Compliance",
    image: "/images/ada-marking.jpg",
    readTime: "6 min read",
    content: [
      "The Americans with Disabilities Act (ADA) sets strict requirements for accessible parking spaces. Property owners who fail to comply can face significant fines and legal action. Understanding these requirements is essential for any commercial property.",
      "## Required Number of Accessible Spaces",
      "The number of accessible parking spaces required depends on your total lot capacity. For lots with 1-25 spaces, you need at least one accessible space. Lots with 26-50 spaces require two accessible spaces, and the requirements increase from there.",
      "## Dimensional Requirements",
      "Standard accessible spaces must be at least 8 feet wide with a 5-foot access aisle. Van-accessible spaces require 8 feet of width with an 8-foot access aisle, or 11 feet of width with a 5-foot aisle. All access aisles must connect to an accessible route.",
      "## Signage Requirements",
      "Each accessible space must have a sign mounted at least 60 inches high, measured to the bottom of the sign. The International Symbol of Accessibility must be displayed, and van-accessible spaces need an additional designation.",
      "## Surface and Slope Requirements",
      "Accessible spaces and access aisles must have slopes not exceeding 1:48 in any direction. The surface must be firm, stable, and slip-resistant. Proper drainage is essential to prevent water accumulation.",
      "## Striping and Marking",
      "Access aisles should be marked with diagonal stripes to discourage parking. The standard colors are blue for the space boundary and white or yellow for the access aisle markings. The wheelchair symbol should be painted on the pavement in addition to the sign.",
    ],
  },
  "how-often-repaint-parking-lot-lines": {
    title: "How Often Should You Restripe Your Parking Lot?",
    excerpt:
      "Discover the factors that affect striping longevity and the signs that indicate it's time for a fresh coat.",
    date: "March 8, 2026",
    category: "Maintenance",
    image: "/images/striping-work.jpg",
    readTime: "4 min read",
    content: [
      "Parking lot striping is more than just paint on asphalt—it's a critical safety feature that guides traffic flow, improves organization, and helps businesses maximize their available parking space. Clear markings help drivers navigate safely while ensuring compliance with accessibility and safety regulations. Knowing when to restripe your parking lot can save money, prevent confusion, and reduce potential liability risks.",

      "## General Timeline",
      "Most commercial parking lots need restriping every 18–24 months. However, this timeline can vary depending on several important factors. Parking lots with heavy traffic may need repainting more frequently, while low-traffic areas may keep their markings visible for longer periods. The durability of the paint and the quality of the original striping job also influence how long the lines will remain clear. Weather conditions also play a major role. Areas with intense sunlight, heavy rain, or freezing winters tend to see faster wear on painted markings.",

      "## Signs It's Time to Restripe",
      "There are several clear indicators that your parking lot may need restriping. One of the most obvious signs is faded or barely visible lines. When drivers struggle to see parking spaces, directional arrows, or loading zones, it becomes harder for them to navigate the lot safely.",
      "Other warning signs include:",
      "- chipped or peeling paint",
      "- faded handicap or accessibility symbols",
      "- customer complaints about confusing layouts",
      "- markings that no longer match current traffic patterns",
      "If visitors or employees have trouble identifying parking spaces or navigating your lot, it's a strong signal that the markings should be refreshed.",

      "## Factors That Affect Longevity",
      "Not all parking lot markings wear out at the same rate. Some areas of a parking lot experience more stress than others. High-traffic zones—such as entrances, exits, and main driving lanes—tend to fade much faster than peripheral parking spaces because they experience constant vehicle movement and turning tires.",
      "Environmental conditions also impact striping longevity. Strong sun exposure can cause paint to fade over time, while regions with harsh winters often experience damage from snow plows scraping against the surface. The condition of the asphalt surface also plays an important role, as cracked or deteriorating pavement can cause paint to chip or peel more quickly.",

      "## Cost-Saving Tips",
      "Regular maintenance can help extend the life of your parking lot striping and reduce long-term costs. For high-traffic areas, consider using thermoplastic markings instead of traditional paint. Although they cost more initially, thermoplastic materials can last three to four times longer, making them a cost-effective option over time.",
      "Timing also matters when scheduling striping work. The best results typically occur when striping is applied in optimal weather conditions—usually between 50°F and 85°F with low humidity. Proper conditions allow the paint to adhere better to the asphalt surface and last longer.",
    ],
  },
  "parking-lot-layout-maximize-spaces": {
    title: "Parking Lot Layout: Maximizing Your Available Space",
    excerpt:
      "Strategic layout design can increase your parking capacity by up to 20%. Here's how professionals approach lot design.",
    date: "February 28, 2026",
    category: "Design",
    image: "/images/hero-parking.jpg",
    readTime: "5 min read",
    content: [
      "A well-designed parking lot does more than fit cars—it creates efficient traffic flow, enhances safety, and maximizes every square foot of your property. Professional layout design can significantly increase your capacity.",
      "## Angled vs. Perpendicular Parking",
      "90-degree perpendicular parking maximizes the number of spaces but requires wider drive aisles (24 feet minimum). Angled parking (45-60 degrees) allows for narrower aisles and easier maneuvering, though it uses more linear space per car.",
      "## One-Way vs. Two-Way Traffic",
      "One-way traffic patterns allow for narrower drive aisles (12-14 feet vs. 24 feet) and work well with angled parking. Two-way patterns offer more flexibility but require more space. Consider your lot's shape and typical traffic volume.",
      "## Optimizing Irregular Lots",
      "Odd-shaped lots benefit from mixed parking angles. Use perpendicular spaces along straight edges and angled parking in curved sections. Dead corners can become landscaping islands or cart corrals.",
      "## ADA Integration",
      "Place accessible spaces closest to main entrances with direct routes to building entry points. Plan these first, then design the rest of your layout around them to ensure compliance and efficient use of space.",
    ],
  },
  "fire-lane-marking-requirements": {
    title: "Fire Lane Marking Requirements: What Property Owners Need to Know",
    excerpt:
      "Fire lane violations can result in hefty fines. Ensure your property meets local fire code requirements with proper markings.",
    date: "February 20, 2026",
    category: "Compliance",
    image: "/images/striping-work.jpg",
    readTime: "4 min read",
    content: [
      "Fire lanes are critical safety features that ensure emergency vehicles can access your building. Improper marking or obstruction can result in fines and, more importantly, delayed emergency response times.",
      "## Standard Requirements",
      "Fire lanes typically must be at least 20 feet wide and have a minimum vertical clearance of 13 feet 6 inches. They must be marked with red curbing and 'NO PARKING - FIRE LANE' signs at regular intervals.",
      "## Curb Painting",
      "Red curb paint should extend the full length of the fire lane. Some jurisdictions require white lettering painted on the curb reading 'FIRE LANE' or 'NO PARKING.' Check your local fire code for specific requirements.",
      "## Signage Specifications",
      "Signs must typically be posted every 50-100 feet along the fire lane. They should be mounted at a height visible to drivers (usually 3-7 feet). Most codes require reflective materials for nighttime visibility.",
      "## Enforcement and Fines",
      "Property owners are responsible for maintaining fire lane markings and can be held liable for obstructions. Fines vary by jurisdiction but can range from $250 to $1,000 or more per violation.",
    ],
  },
  "weather-impact-parking-lot-striping": {
    title: "How Weather Affects Parking Lot Striping Durability",
    excerpt:
      "Sun, rain, and temperature fluctuations all impact your striping. Learn how to plan maintenance around seasonal changes.",
    date: "February 12, 2026",
    category: "Maintenance",
    image: "/images/hero-parking.jpg",
    readTime: "5 min read",
    content: [
      "Weather is the single biggest factor affecting how long your parking lot striping lasts. Understanding these impacts helps you plan maintenance schedules and choose the right materials for your climate.",
      "## UV Exposure",
      "Constant sun exposure breaks down paint pigments, causing fading and chalking. South-facing lots and areas without shade deteriorate fastest. UV-resistant paints cost slightly more but offer significantly better longevity.",
      "## Rain and Moisture",
      "Water seeps into micro-cracks in the paint film, then expands when temperatures drop. This freeze-thaw cycle causes peeling and flaking. Proper surface preparation and quality sealers help prevent moisture penetration.",
      "## Temperature Extremes",
      "Asphalt expands and contracts with temperature changes, and paint must be flexible enough to move with it. Extreme heat can soften paint, making it vulnerable to tire marks and scuffing.",
      "## Optimal Application Conditions",
      "For best results, apply striping when temperatures are between 50-85°F and humidity is below 85%. Avoid application if rain is expected within 24 hours. Early morning dew must evaporate completely before starting.",
      "## Regional Considerations",
      "In the Oklahoma and Texas region, summer heat and intense UV require more frequent touch-ups. Consider scheduling major restriping in spring or fall when conditions are optimal.",
    ],
  },
  "thermoplastic-vs-paint-striping": {
    title: "Thermoplastic vs. Paint: Which Striping Material Is Right for You?",
    excerpt:
      "Compare durability, cost, and application methods to choose the best striping material for your parking lot.",
    date: "February 5, 2026",
    category: "Materials",
    image: "/images/ada-marking.jpg",
    readTime: "6 min read",
    content: [
      "Choosing the right striping material affects both your upfront costs and long-term maintenance expenses. Here's a detailed comparison to help you make an informed decision.",
      "## Traffic Paint Overview",
      "Water-based traffic paint is the most common and economical option. It's easy to apply, dries quickly (15-30 minutes), and works well for most applications. Expect 12-18 months of service life under normal conditions.",
      "## Thermoplastic Overview",
      "Thermoplastic is a durable, heat-applied material that bonds directly to asphalt. It's significantly more expensive upfront but lasts 3-5 years or longer. It's ideal for high-traffic areas and highway applications.",
      "## Cost Comparison",
      "Paint costs approximately $0.10-0.15 per linear foot for materials. Thermoplastic runs $0.50-1.00 per linear foot. However, when you factor in reapplication frequency, thermoplastic often costs less over a 5-year period.",
      "## Application Requirements",
      "Paint can be applied with relatively simple equipment and dries at ambient temperature. Thermoplastic requires specialized heating equipment and trained applicators, which increases labor costs.",
      "## Best Use Cases",
      "Use paint for low-traffic areas, temporary markings, or tight budgets. Choose thermoplastic for entrances, drive lanes, crosswalks, and any area with heavy vehicle traffic. Many lots use a combination of both.",
      "## Environmental Considerations",
      "Water-based paints have lower VOC emissions and are more environmentally friendly. Thermoplastic contains no solvents and doesn't release fumes after application, but the heating process does produce some emissions.",
    ],
  },
};

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | PrecisionLine Striping Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="pt-20">
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 bg-foreground/60" />
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover -z-10"
            priority
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 lg:py-32 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span className="mt-6 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white lg:text-5xl text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
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
        <article className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="mt-10 mb-4 text-2xl font-bold tracking-tight"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-foreground py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Need professional striping services?
            </h2>
            <p className="mt-3 text-white/70">
              Our team is ready to help with your parking lot project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-foreground hover:bg-white/90 transition-colors"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
