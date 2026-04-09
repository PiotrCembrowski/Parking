import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema } from "@/components/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.striping.site/"),

  title: {
    default: "Parking Lot Striping Services | PrecisionLine Striping",
    template: "%s | PrecisionLine Striping",
  },

  description:
    "Professional parking lot striping, ADA compliant markings, fire lane striping, and pavement marking services across major US cities. Fast turnaround and commercial specialists.",

  keywords: [
    "parking lot striping",
    "parking lot striping near me",
    "line striping services",
    "ADA parking lot striping",
    "commercial parking lot striping",
    "fire lane striping",
    "parking lot repainting",
    "parking lot restriping",
    "pavement marking services",
  ],

  authors: [{ name: "PrecisionLine Striping" }],
  creator: "PrecisionLine Striping",
  publisher: "PrecisionLine Striping",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.striping.site/",
    siteName: "PrecisionLine Striping",
    title:
      "Professional Parking Lot Striping Services | PrecisionLine Striping",
    description:
      "Commercial parking lot striping, ADA compliance, fire lanes, and pavement markings. Serving multiple US cities with fast turnaround.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrecisionLine Parking Lot Striping",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PrecisionLine Striping",
    description:
      "Professional parking lot striping services for commercial properties.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  alternates: {
    canonical: "https://www.striping.site/",
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
