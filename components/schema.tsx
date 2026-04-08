export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PrecisionLine Striping",
    description:
      "Professional parking lot striping, ADA compliant markings, and pavement solutions for commercial properties.",
    url: "https://precisionlinestriping.com",
    telephone: "+1-555-123-4567",
    areaServed: ["Tulsa", "Albuquerque", "Omaha", "Boise", "Wichita"],
    serviceType: [
      "Parking Lot Striping",
      "ADA Striping",
      "Fire Lane Striping",
      "Parking Lot Re-striping",
      "Commercial Striping",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
