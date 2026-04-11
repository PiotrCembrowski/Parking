import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "services", label: "Services" },
  { href: "blog", label: "Blog" },
  { href: "parking-lot-striping-tulsa", label: "Tulsa" },
  { href: "parking-lot-striping-wichita", label: "Wichita" },
  { href: "parking-lot-striping-boise", label: "Boise" },
  { href: "parking-lot-striping-omaha", label: "Omaha" },
  { href: "parking-lot-striping-tampa", label: "Tampa" },
  // { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-2 w-8 bg-accent rounded-full" />
            <div className="h-2 w-8 bg-foreground rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            PrecisionLine
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="text-lg font-medium py-2 hover:text-muted-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 font-medium py-2"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="#contact">Get a Quote</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
