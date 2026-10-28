import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { aboutValues, processSteps } from "@/config/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Setu",
  description:
    "Setu is a demonstration relocation brand built around one written move plan, trained packing crews and a single accountable move manager.",
  path: "/about",
});

const stats = [
  { value: "24", label: "Base Cities" },
  { value: "6", label: "Service Lines" },
  { value: "4", label: "Move Stages" },
  { value: "1", label: "Move Manager" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Breadcrumbs items={[{ label: "About" }]} />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  The Setu Philosophy
                </p>
              </div>

              <h1 className="display-xl mt-4 max-w-[12ch]">
                A bridge between two front doors.
              </h1>
              <p className="lead mt-6 max-w-2xl text-[1.15rem]">
                <em className="font-display text-[1.2em] italic text-accent font-normal">Setu</em> means bridge.
                That is the whole idea: one accountable span between the home you are leaving and the one you
                are stepping into.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <ButtonLink href="/get-a-quote" variant="primary" size="md" className="w-full sm:w-auto">
                  <span>Build an estimate</span>
                  <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                </ButtonLink>
                <ButtonLink href="/services" variant="outline" size="md" className="w-full sm:w-auto">
                  Explore services
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="group">
                <div className="image-frame relative aspect-[3/4] rounded-3xl border border-line shadow-2xl overflow-hidden">
                  <Image
                    src="/images/about-team.jpg"
                    alt="A relocation team reviewing a move plan together"
                    fill
                    priority
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-paper/20 bg-deep/85 p-3.5 text-paper backdrop-blur-md">
                    <p className="font-display text-[1.2rem] leading-tight">One Team, One Manager</p>
                    <p className="text-[0.68rem] text-paper/70 font-mono">End-to-end accountability</p>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Position Section + Stats */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="label font-bold text-accent-strong">Our position</p>
                  <h2 className="display-md mt-4 max-w-[11ch]">
                    Moves are ordinary. The handling shouldn&rsquo;t be.
                  </h2>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-xs space-y-5 text-[1.05rem] leading-[1.78] text-ink-soft">
                  <p>
                    Most people do not move often. That is exactly why the industry gets away with
                    vague quotes, rushed packing and a different crew at every stage. The customer
                    cannot compare what they cannot see.
                  </p>
                  <p>
                    We built the opposite: a move that can be read. A survey that records the
                    access. A quote that lists the scope. A packing standard a crew can follow. A
                    joint handover you sign before we leave.
                  </p>
                  <p className="font-medium text-ink">
                    This website is a template, and the company details are illustrative. The
                    operating idea is not: fewer handoffs, clearer decisions, and a paper trail that
                    belongs to you.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Upgraded Stat Cards */}
          <Reveal className="mt-14 sm:mt-18">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-line bg-surface p-6 sm:p-8 text-center shadow-xs transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1"
                >
                  <dd className="font-display text-[2.8rem] leading-none tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-accent-strong sm:text-[3.5rem]">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles ("What we believe") */}
      <section className="section border-y border-line bg-surface">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="label font-bold text-accent-strong">What we believe</p>
                <h2 className="display-lg mt-3 max-w-[14ch]">Care is a method, not a mood.</h2>
              </div>
              <p className="lead max-w-sm text-[0.95rem]">
                Four operational principles that decide how a move is staffed, packed and closed.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {aboutValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <div className="group h-full rounded-2xl border border-line bg-paper p-6 sm:p-8 transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft font-mono text-[0.75rem] font-bold text-accent-strong group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                      0{index + 1}
                    </span>
                    <span className="text-[0.65rem] font-bold tracking-wider uppercase text-muted">
                      Principle
                    </span>
                  </div>
                  <h3 className="display-xs mt-4 text-ink transition-colors duration-200 group-hover:text-accent-strong">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.72] text-ink-soft">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Crew Standards */}
      <section className="section bg-paper">
        <div className="wrap">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl lg:grid lg:grid-cols-12">
              <div className="relative aspect-[16/10] lg:col-span-8 lg:aspect-[16/8]">
                <Image
                  src="/images/about-studio.jpg"
                  alt="A relocation team planning a move in a studio"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 bg-deep p-8 text-paper sm:p-12 lg:col-span-4">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <div>
                  <p className="font-display text-[1.55rem] leading-[1.25] tracking-[-0.02em] sm:text-[1.8rem]">
                    &ldquo;The crew that packs your home is responsible for how it arrives. That
                    simple rule shapes how we staff every move.&rdquo;
                  </p>
                  <p className="mt-5 text-[0.72rem] tracking-[0.06em] text-paper/60 uppercase font-mono">
                    The Setu Operating Rule
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <div className="image-frame relative aspect-[4/5] rounded-3xl border border-line shadow-xl overflow-hidden">
                <Image
                  src="/images/mover-loading.jpg"
                  alt="A mover loading protected furniture into a truck"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="label font-bold text-accent-strong">The crew</p>
                <h2 className="display-lg mt-4 max-w-[12ch]">Trained crews, not day labour.</h2>
                <p className="lead mt-5 max-w-lg">
                  Packing is a craft and a discipline. Crews work to a room-by-room checklist,
                  with the same rigorous protection standard for a rented studio and a four-bedroom villa.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "A named move manager from pre-move survey to final room placement",
                    "High-grade corrugated cartons and bubble wrap delivered in advance",
                    "Furniture blanket-wrapped and edge-protected before leaving the room",
                    "A joint handover inspection checklist signed before the truck departs",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-line/80 bg-surface p-3.5 text-[0.88rem] leading-relaxed text-ink-soft shadow-xs"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
