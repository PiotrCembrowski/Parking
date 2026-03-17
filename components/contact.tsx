import { Phone, Mail, MapPin } from "lucide-react"
import { ContactForm } from "./contact-form"

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              {"Let's discuss your project"}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ready to refresh your parking lot? Contact us for a free, no-obligation 
              quote. We typically respond within 24 hours and can schedule site visits 
              at your convenience.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-background border border-border">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+15551234567" className="font-semibold hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-background border border-border">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@precisionline.com" className="font-semibold hover:underline">
                    info@precisionline.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-background border border-border">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="font-semibold">Metro Area & Surrounding Counties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h3 className="text-xl font-semibold">Request a Free Quote</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
