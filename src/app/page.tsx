import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CheckCircle2, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { CoverageExplorer } from "@/components/home/CoverageExplorer";
import { FinalCta } from "@/components/home/FinalCta";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { QuickEstimate } from "@/components/home/QuickEstimate";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { Accordion } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DemoTag } from "@/components/ui/DemoTag";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClientLogos } from "@/components/home/ClientLogos";
import { coverageNote, homeFaqs, packingStandards, services, whyPoints } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Packers & Movers in India — Setu Relocation",
  description:
    "Household and office relocation across India. Build an illustrative online estimate, then plan a survey, packing scope and written quote with one move manager.",
  path: "/",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        {/* Soft atmospheric background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-3.5 py-1.5 shadow-xs backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <p className="label text-[0.68rem] tracking-[0.14em] font-bold text-ink">
                    Packers &amp; Movers · India
                  </p>
                  <span aria-hidden className="h-3 w-px bg-line" />
                  <p className="text-[0.68rem] font-semibold text-muted">24 Base Cities Active</p>
                </div>

                <h1 className="display-xl mt-6 text-ink">
                  <span className="block">The move,</span>
                  <span className="block">
                    <em className="font-display italic text-accent font-normal">planned</em> before
                  </span>
                  <span className="block">the first box.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-7 max-w-[48ch] text-[1.125rem] leading-[1.68] text-ink-soft sm:text-[1.18rem]">
                  A household or office move, packed to a room list and delivered by one
                  accountable team. Start with an instant route estimate, then plan the details
                  with a dedicated move manager.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                  <ButtonLink href="/get-a-quote" variant="primary" size="md" className="w-full sm:w-auto">
                    <span>Build your estimate</span>
                    <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                  </ButtonLink>
                  <ButtonLink href="/#process" variant="outline" size="md" className="w-full sm:w-auto">
                    <span>How a move works</span>
                  </ButtonLink>
                </div>

                <ul className="mt-9 grid grid-cols-1 gap-x-5 gap-y-2.5 border-t border-line pt-6 text-[0.84rem] text-muted sm:grid-cols-3">
                  {[
                    "One dedicated move manager",
                    "A binding written move plan",
                    "Trained in-house packing crews",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 font-medium text-ink-soft">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <figure className="group">
                  <div className="image-frame relative aspect-[4/3] rounded-2xl border border-line shadow-2xl">
                    <Image
                      src="/images/mover-portrait.jpg"
                      alt="A professional mover carrying stacked moving boxes"
                      fill
                      priority
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-transparent to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-5 text-paper">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2 py-0.5 text-[0.62rem] font-bold text-accent uppercase tracking-wider">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Active Move Route
                          </div>
                          <p className="mt-1.5 font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-white">
                            Mumbai → Pune
                          </p>
                        </div>
                        <p className="text-right text-[0.7rem] leading-tight text-paper/70 font-mono">
                          3 BHK household
                          <br />
                          Packing · transit · placement
                        </p>
                      </div>
                    </figcaption>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-4 text-[0.72rem] text-muted">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                      Verified move standard
                    </span>
                    <span>One accountable team, start to handover</span>
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* Quick Route Estimator */}
          <Reveal delay={0.22} className="mt-12 lg:mt-16">
            <div className="mb-3.5 flex flex-wrap items-end justify-between gap-2">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-accent" />
                <p className="label font-bold text-ink">Start with a route</p>
              </div>
              <p className="text-[0.75rem] font-medium text-muted">A 30-second estimate. No sign-up required.</p>
            </div>
            <QuickEstimate />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          2. CLIENTS WHO TRUSTED US (ARTONE-INSPIRED)
          ============================================================ */}
      <section className="section border-b border-line bg-surface" aria-labelledby="clients-heading">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="label font-bold text-accent-strong">Trusted by teams and families</p>
                <h2 id="clients-heading" className="display-lg mt-3 max-w-[15ch]">
                  Clients who trusted us with the move.
                </h2>
              </div>
              <p className="lead max-w-md text-[1rem]">
                Corporate teams, studios, and families who handed over the keys. Hover to inspect route history.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 sm:mt-12">
            <ClientLogos />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          3. WHY SETU (CLOSING THE GAPS)
          ============================================================ */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="label font-bold text-accent-strong">Why Setu</p>
                  <h2 className="display-lg mt-4 max-w-[11ch]">Most moves fail in the gaps.</h2>
                  <p className="lead mt-6 max-w-md">
                    Between the survey and the crew, the packing list and the truck, the promise and
                    the handover. We close those gaps with one written file and one person who owns it.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/about"
                      className="group inline-flex items-center gap-2 rounded-full border border-ink bg-transparent px-5 py-2.5 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-ink transition-all duration-200 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md"
                    >
                      <span>Read our approach</span>
                      <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Stagger className="space-y-4">
                {whyPoints.map((point, index) => (
                  <StaggerItem
                    key={point.title}
                    className="group rounded-2xl border border-line bg-surface p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[0.75rem] font-bold text-accent-strong group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="display-xs text-ink transition-colors duration-200 group-hover:text-accent-strong">
                          {point.title}
                        </h3>
                        <p className="mt-2.5 max-w-xl text-[0.94rem] leading-[1.72] text-ink-soft">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>

          {/* Editorial Feature Banner */}
          <Reveal className="mt-14 sm:mt-20">
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl lg:grid lg:grid-cols-12">
              <div className="relative aspect-[16/10] lg:col-span-8 lg:aspect-[16/8]">
                <Image
                  src="/images/hero-pack.jpg"
                  alt="Movers packing and protecting furniture in a bright home"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 bg-deep p-8 text-paper sm:p-12 lg:col-span-4">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-accent">
                    The Packing Protocol
                  </span>
                </div>
                <div>
                  <p className="font-display text-[1.65rem] leading-[1.25] tracking-[-0.02em] text-paper sm:text-[1.85rem]">
                    &ldquo;Care is not a promise on a brochure. It is a checklist, a material and a
                    second pair of hands.&rdquo;
                  </p>
                  <p className="mt-6 text-[0.75rem] tracking-[0.06em] text-paper/60 uppercase font-mono">
                    The Setu Relocation Standard
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          4. SERVICES (SIX WAYS TO MOVE)
          ============================================================ */}
      <section className="section border-t border-line bg-surface">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              label="Moving Services"
              title="Six ways to move."
              intro="A full home, a single room, an office floor or an intercity car. Every service is scoped, packed and handed over the exact same way."
              action={
                <ButtonLink href="/services" variant="outline" size="sm">
                  <span>Explore all services</span>
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </ButtonLink>
              }
            />
          </Reveal>

          {/* Interactive Service Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <Reveal key={service.slug} delay={index * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-[0_20px_40px_-12px_rgba(91,76,255,0.22)] hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Image Thumbnail with Zoom */}
                      <div className="image-frame relative aspect-[16/10] w-full rounded-xl border border-line/60">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 rounded-full bg-deep/80 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-white backdrop-blur-sm">
                          {num}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-5">
                        <span className="text-[0.68rem] font-bold tracking-wider text-accent uppercase">
                          {service.tagline}
                        </span>
                        <h3 className="font-display text-[1.45rem] leading-tight tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent-strong mt-1">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-[0.88rem] leading-[1.65] text-muted">
                          {service.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer link indicator */}
                    <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-3 text-[0.75rem] font-bold uppercase tracking-wider text-ink transition-colors group-hover:text-accent-strong">
                      <span>View Scope &amp; Rates</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          5. PACKING STANDARD
          ============================================================ */}
      <section className="section border-y border-line bg-paper-deep">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="image-frame relative aspect-[4/5] rounded-2xl border border-line shadow-xl">
                  <Image
                    src="/images/packing-label.jpg"
                    alt="A mover labelling a packed carton by room"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-paper/20 bg-deep/80 p-3.5 text-paper backdrop-blur-md">
                    <p className="font-display text-[1.2rem] leading-tight">Box-by-Box Labelling</p>
                    <p className="mt-1 text-[0.72rem] text-paper/70">
                      Room tags, fragility flags &amp; inventory barcodes.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="label font-bold text-accent-strong">Packing standard</p>
                <h2 className="display-lg mt-4 max-w-[12ch]">The box is the promise.</h2>
                <p className="lead mt-5 max-w-lg">
                  Most damage is decided before the truck arrives. We treat packing as the
                  protection layer, not the wrapping-up at the end.
                </p>
              </Reveal>

              <Stagger className="mt-8 space-y-3.5">
                {packingStandards.map((standard) => (
                  <StaggerItem
                    key={standard.title}
                    className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-xs transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                  >
                    <h3 className="font-display text-[1.35rem] leading-tight tracking-[-0.018em] text-ink">
                      {standard.title}
                    </h3>
                    <p className="mt-2 text-[0.92rem] leading-[1.7] text-ink-soft">
                      {standard.body}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal className="mt-8">
                <ButtonLink href="/services/packing-and-unpacking" variant="outline" size="sm">
                  <span>See packing &amp; unpacking</span>
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          6. HOW IT WORKS (THE MOVE FILE IN 4 STAGES)
          ============================================================ */}
      <section id="process" className="section scroll-mt-24 bg-paper">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="label font-bold text-accent-strong">How it works</p>
                  <h2 className="display-lg mt-4 max-w-[10ch]">The move file, in four stages.</h2>
                  <p className="lead mt-5 max-w-sm">
                    A move is a sequence, not a single chaotic day. Each stage closes a decision before the
                    next one begins.
                  </p>
                  <div className="mt-8">
                    <ButtonLink href="/get-a-quote" variant="primary" size="sm">
                      <span>Start your file</span>
                      <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. COVERAGE SECTION (BALANCED + ARTONE-INSPIRED HOVER)
          ============================================================ */}
      <section id="coverage" className="scroll-mt-24 border-y border-line bg-paper-deep">
        <div className="wrap section">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
            {/* Left Column: Balanced Overview Card with Image & Metrics */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                      Pan-India Linehaul Network
                    </p>
                  </div>

                  <h2 className="display-lg mt-4 max-w-[10ch]">24 base cities.</h2>
                  <p className="mt-4 text-[0.95rem] leading-[1.7] text-ink-soft">
                    {coverageNote}
                  </p>

                  {/* Truck Image with Status Badge */}
                  <div className="group image-frame relative mt-6 aspect-[16/10] rounded-xl border border-line shadow-md">
                    <Image
                      src="/images/coverage-truck.jpg"
                      alt="A moving truck being loaded in a city"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg bg-deep/80 p-2.5 text-paper backdrop-blur-sm">
                      <span className="text-[0.72rem] font-bold">Pan-India Fleet</span>
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[0.62rem] font-bold text-white uppercase">
                        24/24 Hubs Active
                      </span>
                    </div>
                  </div>

                  {/* Operational Metrics Checklist */}
                  <ul className="mt-6 space-y-2.5 border-t border-line/60 pt-5 text-[0.82rem] text-ink-soft">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Dedicated warehouse and packing hubs in each base city</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Daily linehaul schedules between top metro corridors</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>Zero subcontracting — verified Setu crews handle both ends</span>
                    </li>
                  </ul>

                  <div className="mt-7 pt-4 border-t border-line/60">
                    <ButtonLink href="/get-a-quote" variant="primary" size="sm" className="w-full">
                      <span>Calculate route cost for your city</span>
                      <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Artone-Studio-Style Interactive City Cards */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <CoverageExplorer />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          8. TESTIMONIALS
          ============================================================ */}
      <section className="section border-b border-line bg-surface">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-center">
            <Reveal className="lg:col-span-5">
              <p className="label font-bold text-accent-strong">Client Reviews</p>
              <h2 className="display-lg mt-4 max-w-[10ch]">Moved, then settled.</h2>
              <p className="lead mt-5 max-w-sm">
                What a good move should feel like from the other side of the checklist. Verified
                experiences across our 24 hubs.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-ink transition-all hover:border-accent hover:text-accent-strong"
                >
                  <span>About our crew standards</span>
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="rounded-3xl border border-line bg-paper p-6 sm:p-9 lg:p-10 shadow-lg">
                <TestimonialCarousel />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. FAQ SECTION
          ============================================================ */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="label font-bold text-accent-strong">Questions &amp; Answers</p>
                  <h2 className="display-lg mt-4 max-w-[9ch]">Before you book.</h2>
                  <p className="lead mt-5 max-w-sm">
                    Clear answers to the things people ask before a survey.
                  </p>

                  <div className="mt-8 rounded-2xl border border-line bg-surface p-6 shadow-sm">
                    <p className="text-[0.88rem] font-semibold text-ink">
                      Still unsure about your route or scope?
                    </p>
                    <p className="mt-1 text-[0.8rem] text-muted">
                      Talk directly with a move coordinator.
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="inline-flex items-center gap-2.5 text-[0.84rem] font-bold text-ink hover:text-accent-strong transition-colors"
                      >
                        <Phone aria-hidden className="h-4 w-4 text-accent" strokeWidth={2} />
                        {siteConfig.contact.phone}
                      </a>
                      <a
                        href={whatsappUrl("Hello Setu, I have a question before booking a move.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-[0.84rem] font-bold text-accent hover:text-accent-strong transition-colors"
                      >
                        Ask on WhatsApp
                        <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <DemoTag>Frequently Asked</DemoTag>
                  <Link
                    href="/contact"
                    className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-accent-strong transition-colors hover:text-accent"
                  >
                    Ask something else →
                  </Link>
                </div>
                <Accordion items={homeFaqs} idPrefix="home-faq" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          10. FINAL CTA
          ============================================================ */}
      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
