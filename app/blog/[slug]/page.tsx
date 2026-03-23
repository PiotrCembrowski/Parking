import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    title:
      "How Often Should You Restripe a Parking Lot? Complete Guide for Businesses",
    excerpt:
      "Parking lot striping is more than just paint on asphalt—it plays a critical role in safety, organization, and the overall functionality of a commercial property.",
    date: "March 8, 2026",
    category: "Maintenance",
    image: "/images/striping-work.jpg",
    readTime: "4 min read",
    content: [
      "Parking lot striping is more than just paint on asphalt—it plays a critical role in safety, organization, and the overall functionality of a commercial property. Clear, visible markings guide drivers, protect pedestrians, and ensure that your parking lot operates efficiently. For businesses, maintaining well-defined striping is not optional; it directly impacts customer experience, legal compliance, and even revenue.",
      "Despite its importance, many property owners and managers overlook parking lot striping until it becomes a problem. Faded lines, unclear markings, and poor layout can create confusion, reduce parking capacity, and increase the risk of accidents. Knowing when to restripe your parking lot is essential for avoiding these issues and maintaining a professional appearance.",

      "## General Timeline",
      "Most commercial parking lots require restriping every 18–24 months. This is considered a standard maintenance cycle for properties with moderate traffic and typical weather exposure. However, this timeline is not fixed and can vary significantly depending on several factors.",
      "For example, parking lots that experience heavy daily traffic—such as shopping centers, hospitals, and office complexes—may require restriping as often as once per year. On the other hand, smaller properties with limited usage may be able to extend their striping cycle beyond two years.",
      "Another important consideration is the type of paint or material used during the original striping. Higher-quality paints and thermoplastic materials tend to last longer and maintain visibility better over time. Businesses that invest in durable materials often benefit from longer intervals between maintenance cycles.",

      "## Why Parking Lot Striping Is Important",
      "Parking lot striping serves multiple purposes beyond simple visual organization. It helps define parking spaces, directs traffic flow, and ensures compliance with safety regulations. Without clear markings, drivers may park inefficiently, block access lanes, or create hazardous situations.",
      "Proper striping also maximizes the number of usable parking spaces. A poorly marked lot can reduce capacity and lead to congestion, especially during peak hours. For businesses that rely on customer traffic, this can directly impact revenue and customer satisfaction.",
      "In addition, clearly marked parking lots improve accessibility for individuals with disabilities. ADA-compliant striping ensures that accessible parking spaces are properly designated and easy to identify, helping businesses meet legal requirements and provide equal access to all visitors.",

      "## Signs It's Time to Restripe",
      "Recognizing the signs that your parking lot needs restriping can help you address issues before they become serious problems. One of the most obvious indicators is fading paint. When lines become difficult to see, drivers may struggle to park correctly or navigate the lot safely.",
      "Other signs include chipped or peeling paint, which can occur due to weather exposure, traffic wear, or poor initial application. Over time, even high-quality paint will begin to degrade, making restriping necessary.",
      "Customer feedback is another important signal. If visitors or employees report confusion about parking spaces or traffic flow, it may indicate that the markings are no longer effective. Additionally, changes in traffic patterns or property layout may require updated striping to reflect new conditions.",
      "Finally, compliance issues can arise if accessibility markings or fire lanes are no longer clearly visible. Failing to maintain these markings can result in fines or legal complications, making regular inspections essential.",

      "## Factors That Affect Longevity",
      "Several factors influence how long parking lot striping will last. Traffic volume is one of the most significant. Areas with constant vehicle movement—such as entrances, exits, and main drive lanes—experience faster wear than less frequently used spaces.",
      "Environmental conditions also play a major role. Prolonged exposure to sunlight can cause paint to fade, while rain and moisture can weaken adhesion over time. In colder climates, snow plows and de-icing chemicals can damage markings and accelerate wear.",
      "The condition of the asphalt surface is another key factor. Smooth, well-maintained pavement allows paint to adhere more effectively, while cracked or uneven surfaces can cause premature deterioration. Regular asphalt maintenance can help extend the life of your striping.",
      "Finally, the quality of materials and application techniques used during the initial striping process can significantly impact durability. Professional contractors use specialized equipment and high-quality materials to ensure long-lasting results.",

      "## Cost Considerations",
      "The cost of restriping a parking lot varies depending on the size of the property, the number of parking spaces, and the complexity of the layout. Small parking lots may cost a few hundred dollars to restripe, while larger commercial properties can require several thousand dollars.",
      "Although restriping represents an ongoing expense, it is a relatively small investment compared to the potential costs of neglecting maintenance. Poor striping can lead to inefficient use of space, increased accident risk, and potential liability issues, all of which can be far more expensive in the long run.",
      "Businesses can reduce costs by scheduling regular maintenance rather than waiting until markings are completely worn away. Preventative maintenance is typically more affordable and ensures that the parking lot remains functional and visually appealing.",

      "## Cost-Saving Tips",
      "There are several strategies businesses can use to extend the lifespan of their parking lot striping and reduce maintenance costs. One of the most effective is using thermoplastic markings in high-traffic areas. While these materials are more expensive upfront, they can last three to four times longer than standard paint.",
      "Scheduling striping during optimal weather conditions is another important factor. Ideal conditions typically range between 50°F and 85°F with low humidity. Applying paint under these conditions helps ensure proper adhesion and longer-lasting results.",
      "Regular cleaning and maintenance can also improve durability. Removing debris, oil stains, and dirt from the surface before painting allows the paint to bond more effectively with the asphalt.",

      "## Best Practices for Long-Term Maintenance",
      "To keep your parking lot in optimal condition, it is important to establish a regular maintenance schedule. Conducting periodic inspections allows property managers to identify fading or damage early and address issues before they worsen.",
      "In addition to restriping, maintaining the asphalt surface is essential. Filling cracks, repairing potholes, and sealing the pavement can help extend the life of both the surface and the striping.",
      "Working with experienced contractors ensures that striping is applied correctly and meets all necessary regulations. Professional services provide consistent results and reduce the likelihood of premature wear.",

      "## Conclusion",
      "Parking lot striping is a vital aspect of property maintenance that should not be overlooked. By understanding how often to restripe and recognizing the factors that affect durability, businesses can maintain safe, efficient, and visually appealing parking areas.",
      "Regular maintenance not only improves safety and organization but also enhances the overall customer experience. Investing in high-quality materials and professional services can help ensure long-lasting results and reduce long-term costs.",
      "Ultimately, staying proactive with parking lot striping allows businesses to protect their property, comply with regulations, and create a positive impression for every visitor.",
    ],
  },
  "parking-lot-striping-cost": {
    title: "Parking Lot Striping Cost for Businesses",
    excerpt:
      "Understanding the cost of parking lot striping is essential for businesses that want to maintain safe and professional-looking properties.",
    date: "February 28, 2026",
    category: "Design",
    image: "/images/hero-parking.jpg",
    readTime: "5 min read",
    content: [
      "Understanding the cost of parking lot striping is essential for businesses that want to maintain safe and professional-looking properties. Striping is a relatively small investment compared to other maintenance tasks, but it has a significant impact on safety, organization, and customer experience.",
      "Clear and well-maintained markings guide traffic flow, maximize parking efficiency, and ensure compliance with accessibility regulations. Without proper striping, parking lots can quickly become disorganized and unsafe.",

      "## Average Cost of Parking Lot Striping",
      "The cost of parking lot striping varies depending on several factors. Small commercial lots may cost between $300 and $1,500, while larger properties such as shopping centers or industrial facilities can cost several thousand dollars.",
      "The total cost depends on the size of the lot, the number of parking spaces, and the complexity of the markings. Basic striping jobs are relatively inexpensive, but additional features such as handicap spaces, fire lanes, and directional arrows can increase the price.",

      "## Factors That Affect Pricing",
      "Several key factors influence the final cost of a striping project. The size of the parking lot is one of the most important factors, as larger areas require more materials and labor.",
      "The number of parking spaces also affects pricing. Each space must be carefully measured and marked to ensure proper spacing and alignment.",
      "Special markings, such as ADA-compliant spaces, loading zones, and custom layouts, require additional time and expertise, which can increase costs.",
      "The condition of the asphalt surface is another factor. If the surface is damaged or requires preparation, the overall cost will be higher.",

      "## Surface Preparation",
      "Proper surface preparation is essential for achieving long-lasting results. Before applying new paint, contractors must clean the asphalt to remove dirt, oil, and debris. This ensures that the paint adheres properly.",
      "In some cases, old markings must be removed or covered before new striping is applied. This adds to the overall cost but is necessary for a clean and professional appearance.",

      "## Why Professional Striping Matters",
      "Hiring professional contractors ensures that striping is done correctly and efficiently. Professionals use specialized equipment to create straight, consistent lines that meet industry standards.",
      "Proper striping improves safety, enhances the appearance of the property, and ensures compliance with regulations. Investing in professional services can save money in the long run by reducing the need for frequent repainting.",
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
