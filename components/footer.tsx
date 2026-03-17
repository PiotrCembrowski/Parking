import Link from "next/link"

const navigation = {
  services: [
    { name: "Parking Lot Striping", href: "#services" },
    { name: "ADA Compliance", href: "#services" },
    { name: "Layout & Design", href: "#services" },
    { name: "Seal Coating", href: "#services" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-8 bg-accent rounded-full" />
                <div className="h-2 w-8 bg-white rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">PrecisionLine</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/60 leading-relaxed">
              Professional parking lot striping and pavement marking services. 
              Serving commercial properties with precision, reliability, and over 
              15 years of experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
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

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            {`© ${currentYear} PrecisionLine Striping. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
