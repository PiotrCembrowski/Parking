import Link from "next/link";

const navigation = {
  services: [
    { name: "Parking Lot Striping", href: "/services" },
    { name: "ADA Compliance Striping", href: "/services" },
    { name: "Fire Lane Striping", href: "/services" },
    { name: "Warehouse Striping", href: "/services" },
    { name: "Parking Lot Re-Striping", href: "/services" },
  ],
  locations: [
    { name: "Tampa Striping", href: "/parking-lot-striping-tampa" },
    { name: "Boise Striping", href: "/parking-lot-striping-boise" },
    { name: "Omaha Striping", href: "/parking-lot-striping-omaha" },
    { name: "Wichita Striping", href: "/parking-lot-striping-wichita" },
    { name: "Tulsa Striping", href: "/parking-lot-striping-tulsa" },
    { name: "Albuquerque Striping", href: "/parking-lot-striping-albuquerque" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Get Quote", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-8 bg-accent rounded-full" />
                <div className="h-2 w-8 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Striping.Site
              </span>
            </Link>

            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Professional parking lot striping, ADA compliance, and pavement
              marking services for commercial properties. We connect businesses
              with trusted striping contractors nationwide.
            </p>

            <p className="mt-4 text-sm text-white/40">
              Serving Tampa, Orlando, Dallas, Phoenix, Tulsa and surrounding
              areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Striping Services
            </h3>

            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-white">Service Areas</h3>

            <ul className="mt-4 space-y-3">
              {navigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 max-w-4xl">
            Parking lot striping services including ADA compliant striping, fire
            lane striping, warehouse striping, and commercial parking lot
            marking. Get fast quotes for professional striping contractors in
            your area.
          </p>

          <p className="text-sm text-white/30 mt-4">
            {`© ${currentYear} Striping.Site. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
