import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { whatsappUrl } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="label label-light font-bold text-paper/90">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-[0.875rem] leading-snug text-paper/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
            >
              <span>{link.label}</span>
              <ArrowUpRight
                aria-hidden
                className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-accent"
                strokeWidth={2}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep text-paper border-t border-paper/10">
      {/* Ambient gradient glow in the dark footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="wrap relative">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-[19ch] font-display text-[1.85rem] leading-[1.1] tracking-[-0.03em] text-paper">
              A better way between homes.
            </p>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-paper/60">
              Household and office relocation across India. One move manager, one written plan,
              and a packing standard we can explain.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/get-a-quote" className="btn btn-primary btn-sm">
                Get a quote
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
              </Link>
              <a
                href={whatsappUrl("Hello Setu, I would like to plan a move.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-sm"
              >
                <MessageCircle aria-hidden className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Move" links={siteConfig.footerNavigation.move} />
            <FooterColumn title="Company" links={siteConfig.footerNavigation.company} />
            <FooterColumn title="Support" links={siteConfig.footerNavigation.support} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="label label-light font-bold text-paper/90">The office</h2>
            <address className="mt-5 space-y-4 text-[0.875rem] leading-relaxed text-paper/70 not-italic">
              <p className="flex gap-2.5">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                <span>
                  {siteConfig.contact.address}
                  <span className="mt-1 block text-paper/40 text-[0.72rem]">Demonstration address</span>
                </span>
              </p>
              <p className="flex gap-2.5">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                <a href={siteConfig.contact.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex gap-2.5">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                <a href={siteConfig.contact.emailHref} className="break-all hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </address>
            <p className="mt-5 text-[0.75rem] text-paper/45">{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="border-t border-paper/15 py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-paper/60">
                <span aria-hidden className="mt-[0.38rem] h-2 w-2 rounded-full shrink-0 bg-accent animate-pulse" />
                <span>
                  <strong className="font-semibold text-paper/85">Demonstration template.</strong>{" "}
                  Company details, prices, testimonials and tracking are illustrative. Forms do not
                  transmit or store data.{" "}
                  <Link href="/terms-and-conditions#demo" className="underline decoration-accent/60 underline-offset-4 hover:text-white hover:decoration-accent">
                    Read the demo note
                  </Link>
                  .
                </span>
              </p>
            </div>
            <a
              href="#top"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-paper/20 bg-paper/5 px-4 py-2 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-paper/70 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md"
            >
              <span>Back to top</span>
              <ArrowUp aria-hidden className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[0.72rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
            <p>Photography from Pexels, used under the Pexels licence. Demonstration website.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
