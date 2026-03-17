import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-parking.jpg"
          alt="Professional parking lot striping"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-4">
            Professional Pavement Solutions
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Precision striping for every parking lot
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl">
            From small business lots to large commercial properties, we deliver 
            crisp, durable line striping that maximizes your space and ensures compliance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90" asChild>
              <Link href="#contact">
                Request a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="#services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
