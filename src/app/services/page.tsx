import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { services } from "@/config/content";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Moving Services",
  description:
    "Household shifting, local moves, domestic relocation, office relocation, professional packing and vehicle transport across India. Explore scope and process for each service.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  Six Distinct Scopes · One Relocation Standard
                </p>
              </div>
              <h1 className="display-lg mt-4 max-w-[14ch]">
                Everything a move needs, in one file.
              </h1>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <p className="text-[1rem] leading-[1.7] text-ink-soft">
                  Six scopes, one standard: survey, written plan, trained crew and a joint
                  handover. Choose the shape of your move and we will build the rest around it.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/get-a-quote" variant="primary" size="sm">
                    <span>Build an estimate</span>
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="outline" size="sm">
                    Talk to a move manager
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <Reveal className="mt-10 sm:mt-12">
            <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
              <div className="group image-frame relative aspect-[16/10] overflow-hidden rounded-2xl border border-line sm:col-span-7 sm:aspect-[16/9] shadow-md">
                <Image
                  src="/images/hero-home.jpg"
                  alt="Movers preparing a home for a household move"
                  fill
                  priority
                  sizes="(min-width: 640px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-lg bg-deep/80 px-3 py-1 text-[0.72rem] font-bold text-white backdrop-blur-sm">
                  Household &amp; Intercity Relocation
                </div>
              </div>
              <div className="group image-frame relative hidden overflow-hidden rounded-2xl border border-line sm:col-span-3 sm:block shadow-md">
                <Image
                  src="/images/packing-room.jpg"
                  alt="Cartons packed and labelled by room"
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 rounded-lg bg-deep/80 px-3 py-1 text-[0.72rem] font-bold text-white backdrop-blur-sm">
                  Room-by-Room Packing
                </div>
              </div>
              <div className="group image-frame relative hidden overflow-hidden rounded-2xl border border-line sm:col-span-2 sm:block shadow-md">
                <Image
                  src="/images/keys.jpg"
                  alt="Keys handed over at the end of a move"
                  fill
                  sizes="17vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 rounded-lg bg-deep/80 px-3 py-1 text-[0.72rem] font-bold text-white backdrop-blur-sm">
                  Signed Handover
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[0.72rem] text-muted">
              <span>24 base cities · Scheduled intercity linehaul nationwide</span>
              <span className="flex items-center gap-1.5 font-medium text-ink-soft">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                Zero subcontractor guarantee
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services List with Luxury Alternating Cards */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => {
              const reversed = index % 2 === 1;
              const num = String(index + 1).padStart(2, "0");
              return (
                <Reveal key={service.slug}>
                  <article className="group rounded-3xl border border-line bg-surface p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-[0_24px_48px_-12px_rgba(91,76,255,0.22)] hover:-translate-y-1">
                    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                      <div
                        className={cn(
                          "lg:col-span-6",
                          reversed ? "lg:order-2 lg:col-start-7" : "lg:order-1",
                        )}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block"
                          aria-label={`Read about ${service.title}`}
                        >
                          <div className="image-frame relative aspect-[4/3] rounded-2xl border border-line shadow-md overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.imageAlt}
                              fill
                              sizes="(min-width: 1024px) 48vw, 100vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-deep/85 px-3 py-1 text-white backdrop-blur-sm">
                              <span className="font-mono text-[0.72rem] font-bold text-accent">{num}</span>
                              <span className="h-2 w-px bg-white/30" />
                              <span className="text-[0.68rem] font-bold tracking-wider uppercase">
                                {service.shortTitle}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div
                        className={cn(
                          "lg:col-span-5",
                          reversed ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-8",
                        )}
                      >
                        <span className="label font-bold text-accent-strong">
                          {service.shortTitle} Relocation
                        </span>
                        <h2 className="display-md mt-2">
                          <Link
                            href={`/services/${service.slug}`}
                            className="transition-colors hover:text-accent-strong"
                          >
                            {service.title}
                          </Link>
                        </h2>
                        <p className="mt-2 font-display text-[1.25rem] leading-snug italic text-accent-strong">
                          {service.tagline}
                        </p>
                        <p className="mt-4 text-[0.95rem] leading-[1.72] text-ink-soft">
                          {service.summary}
                        </p>

                        <div className="mt-6 rounded-xl border border-line/70 bg-paper p-4">
                          <p className="text-[0.7rem] font-bold tracking-wider text-muted uppercase">
                            What this service includes:
                          </p>
                          <ul className="mt-2.5 space-y-2">
                            {service.includes.slice(0, 3).map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-ink-soft"
                              >
                                <CheckCircle2
                                  aria-hidden
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-7 flex flex-wrap items-center gap-4">
                          <ButtonLink href={`/services/${service.slug}`} variant="primary" size="sm">
                            <span>Explore scope &amp; rates</span>
                            <ArrowRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
                          </ButtonLink>
                          <ButtonLink href="/get-a-quote" variant="outline" size="sm">
                            Get an estimate
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative overflow-hidden border-t border-line bg-deep text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="wrap section-sm relative">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label label-light text-[0.65rem] tracking-wider">Custom Scope Consultation</p>
              </div>
              <h2 className="display-md mt-4 max-w-[16ch] text-paper">
                Tell us what is moving. We will tailor the right file.
              </h2>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.72] text-paper/70">
                A single room, a family home, an office floor or an intercity car — the scope changes,
                the accountable standard does not.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-3.5 lg:col-span-5 lg:justify-end">
              <ButtonLink href="/get-a-quote" variant="primary">
                Build an estimate
                <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
              </ButtonLink>
              <ButtonLink href="/contact" variant="light">
                Ask a question
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
