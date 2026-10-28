import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { cities } from "@/config/cities";
import { siteConfig } from "@/config/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Relocation services",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Setu Relocation — packers and movers in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F0F4F8",
  colorScheme: "light",
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  description: siteConfig.description,
  disambiguatingDescription:
    "Demonstration website template. The company, prices and testimonials are illustrative.",
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 2, 18 Turner Road, Bandra West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400050",
    addressCountry: "IN",
  },
  areaServed: cities.map((city) => ({
    "@type": "City",
    name: city.name,
  })),
  openingHours: "Mo-Sa 08:00-20:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${newsreader.variable} ${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <div id="top" className="relative z-[60] bg-deep text-paper border-b border-paper/10">
          <div className="wrap flex min-h-9 items-center justify-between gap-4 py-2">
            <p className="text-[0.65rem] leading-snug font-bold tracking-[0.14em] uppercase text-paper/80 flex items-center">
              <span aria-hidden className="mr-2.5 inline-block h-2 w-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span>Demonstration template</span>
              <span className="hidden sm:inline text-paper/50 font-normal"> — sample content and illustrative pricing</span>
            </p>
            <Link
              href="/terms-and-conditions#demo"
              className="shrink-0 text-[0.625rem] font-bold tracking-[0.12em] uppercase text-paper/70 underline decoration-accent/60 underline-offset-4 transition-colors hover:text-white hover:decoration-accent"
            >
              What is illustrative?
            </Link>
          </div>
        </div>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
      </body>
    </html>
  );
}
