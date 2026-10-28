import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Talk to a Setu move manager about a household, office, domestic or vehicle move. Phone, WhatsApp, email and a demonstration contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  Direct Coordinator Desk
                </p>
              </div>

              <h1 className="display-lg mt-4 max-w-[14ch]">Tell us what is moving.</h1>
              <p className="lead mt-4 max-w-xl text-[1.05rem]">
                One enquiry is enough to begin. Tell us the two addresses, the rough inventory size
                and anything fragile. A move coordinator will take ownership from there.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <p className="text-[0.88rem] leading-[1.7] text-ink-soft">
                  {siteConfig.contact.responseNote}
                </p>
                <div className="mt-4 flex items-center gap-4 text-[0.78rem] font-bold text-accent">
                  <span>Operating hours: {siteConfig.contact.hoursShort}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm sm:section bg-paper">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            <Reveal className="lg:col-span-7">
              <ContactForm />
            </Reveal>

            <div className="space-y-6 lg:col-span-5">
              {/* Direct Lines Dark Card with Ambient Glow */}
              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-3xl bg-deep p-5 text-paper sm:p-8 shadow-xl border border-paper/10">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/20 blur-2xl"
                  />

                  <div className="relative">
                    <p className="label label-light font-bold text-accent">Direct Regional Lines</p>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="mt-4 flex items-center gap-3 font-display text-[1.4rem] sm:text-[1.85rem] leading-tight tracking-[-0.02em] text-paper transition-colors hover:text-accent break-words"
                    >
                      <Phone aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0" strokeWidth={2} />
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                    <a
                      href={siteConfig.contact.emailHref}
                      className="mt-4 flex items-center gap-3 text-[0.92rem] text-paper/75 transition-colors hover:text-white"
                    >
                      <Mail aria-hidden className="h-4 w-4 text-accent" strokeWidth={1.8} />
                      {siteConfig.contact.email}
                    </a>
                    <a
                      href={whatsappUrl("Hello Setu, I would like to discuss a move.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm mt-7 w-full shadow-md"
                    >
                      <MessageCircle aria-hidden className="h-4 w-4" strokeWidth={2} />
                      Message on WhatsApp
                    </a>

                    <div className="mt-7 space-y-4 border-t border-paper/15 pt-6 text-[0.84rem] leading-relaxed text-paper/70">
                      <p className="flex gap-3">
                        <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                        {siteConfig.contact.hours}
                      </p>
                      <p className="flex gap-3">
                        <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                        <span>
                          {siteConfig.contact.address}
                          <span className="mt-1 block text-[0.72rem] text-paper/40">
                            Demonstration address
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Calculator Shortcut Card */}
              <Reveal delay={0.14}>
                <div className="rounded-2xl border border-line bg-surface p-6 shadow-xs transition-all hover:border-accent hover:shadow-md">
                  <p className="label font-bold text-accent-strong">Instant Estimate</p>
                  <p className="mt-1.5 font-display text-[1.25rem] text-ink">Prefer numbers first?</p>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                    Calculate an illustrative cost breakdown without entering personal details.
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="mt-4 inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-[0.08em] uppercase text-accent-strong transition-colors hover:text-accent"
                  >
                    <span>Open Quote Calculator</span>
                    <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </Reveal>

              {/* Detail Photo */}
              <Reveal delay={0.2}>
                <figure className="group">
                  <div className="image-frame relative aspect-[16/10] overflow-hidden rounded-2xl border border-line shadow-md">
                    <Image
                      src="/images/contact-detail.jpg"
                      alt="Boxes and a plant ready for a move"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Pre-Survey Tips */}
      <section className="border-t border-line bg-surface">
        <div className="wrap section-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="label font-bold text-accent-strong">Before you write</p>
              <h2 className="display-md mt-4 max-w-[15ch]">
                A few details make the first reply instant and useful.
              </h2>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                ["The Two Addresses", "Neighborhood or pincode helps us route parking and linehaul access."],
                ["Preferred Dates & Floors", "Lift availability and weekends decide crew scheduling and equipment."],
                ["Special Handling Items", "Pianos, safes, aquariums, glass chandeliers, or custom marble."],
                ["Your Preferred Call Window", "Let us know when you are free for an unhurried 10-minute briefing."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl border border-line bg-paper p-5 shadow-xs">
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="text-[0.88rem]">{title}</span>
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
