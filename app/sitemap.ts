import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://striping.site";

  // Other city entries are left as-is intentionally (out of scope for this change).
  const cities = ["tulsa", "albuquerque", "boise", "wichita"];

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityPages,
    {
      // Omaha service page (corrected to the real route).
      url: `${baseUrl}/parking-lot-striping-omaha`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      // Omaha case study — funnels link equity to the Omaha service page.
      url: `${baseUrl}/projects/omaha-commercial-restripe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      // Omaha striping guide (blog post).
      url: `${baseUrl}/blog/parking-lot-striping-omaha-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      // Omaha new-construction striping guide (blog post).
      url: `${baseUrl}/blog/omaha-new-construction-parking-lot-striping`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      // Omaha striping cost breakdown (blog post).
      url: `${baseUrl}/blog/parking-lot-striping-omaha-cost`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
