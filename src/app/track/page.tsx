import type { Metadata } from "next";
import {
  ArrowUpRight,
  Bell,
  Database,
  Lock,
  MapPin,
  Phone,
  Radio,
  Route,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DemoTag } from "@/components/ui/DemoTag";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Move Tracking — Coming Soon",
  description:
    "Move tracking is not connected in this demonstration template. See what a real tracking integration would require before it can go live.",
  path: "/track",
  noindex: true,
});

const plannedStages = [
  { label: "Booked", detail: "Move reference issued" },
  { label: "Packed & loaded", detail: "Origin crew check-in" },
  { label: "In transit", detail: "Carrier event feed" },
  { label: "Delivered", detail: "Signed handover" },
];

const requirements = [
  {
    icon: Database,
    title: "A real booking record",
    body: "A unique move reference can only exist after a confirmed booking, with a live system holding the scope, addresses and schedule.",
  },
  {
    icon: UserCheck,
    title: "Verified access",
    body: "A phone OTP or customer sign-in stops a reference number from exposing a stranger's address, inventory or delivery window.",
  },
  {
    icon: Radio,
    title: "Dispatch events",
    body: "Crews, warehouses and carriers need to send status updates at each handover. Without those events, a tracker is only decoration.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by design",
    body: "The public view should show only what a customer needs. Full addresses, phone numbers and crew notes stay behind the login.",
  },
  {
    icon: Bell,
    title: "Reliable notifications",
    body: "SMS or email updates need retries, fallbacks and a working contact path for the day the API is down and the truck is early.",
  },
  {
    icon: Route,
    title: "Honest states",
    body: "Delays should read as delays. No invented map pins and no precise arrival times that the operation cannot keep.",
  },
];

export default function TrackPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-deep/30">
        <div className="wrap pt-8 pb-12 sm:pt-10 sm:pb-16">
          <Breadcrumbs items={[{ label: "Track a move" }]} />
          <div className="mt-9 grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <p className="label">Move tracking · Not connected</p>
              <h1 className="display-xl mt-4 max-w-[14ch]">Tracking isn&rsquo;t live yet.</h1>
              <p className="lead mt-6 max-w-2xl">
                This template has no dispatch system behind it, so there is no status to look up.
                What follows is an honest preview of the connection a real tracker would need
                before it could be switched on.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Contact the office
                  <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2} />
                </ButtonLink>
                <ButtonLink href="/get-a-quote" variant="outline" className="w-full sm:w-auto">
                  Build an estimate
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-3xl border border-line bg-surface p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                  <p className="label">Connection Status</p>
                  <DemoTag>Preview mode</DemoTag>
                </div>
                <div className="pt-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper-deep text-ink shadow-xs">
                      <Lock aria-hidden className="h-5 w-5 text-accent" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-display text-[1.35rem] leading-tight tracking-[-0.02em] text-ink">
                        Not connected
                      </p>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-muted">
                        No database, dispatch feed or tracking provider is installed.
                      </p>
                    </div>
                  </div>
                  <dl className="mt-5 rounded-2xl border border-line/60 bg-paper/60 p-4 text-[0.78rem]">
                    {[
                      ["Integration", "Not installed"],
                      ["Last event", "None recorded"],
                      ["Lookup system", "Disabled in demo"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 border-b border-line/60 py-2.5 last:border-b-0"
                      >
                        <dt className="text-muted">{label}</dt>
                        <dd className="font-semibold text-ink-soft">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <p className="mt-3 text-right text-[0.68rem] text-muted">
                Status shown for transparency, not as live data.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-6">
            <div className="h-full rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="label">Lookup</p>
                  <h2 className="display-sm mt-2">Check a move reference.</h2>
                </div>
                <DemoTag>Disabled</DemoTag>
              </div>
              <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-ink-soft">
                In the finished product this is where a customer would enter the reference from
                their booking confirmation and verify their phone number.
              </p>

              <div className="mt-8">
                <label htmlFor="track-reference" className="field-label">
                  Move reference
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="track-reference"
                    type="text"
                    disabled
                    placeholder="SETU-0000-0000"
                    aria-describedby="track-reference-hint"
                    className="field font-mono tracking-[0.06em]"
                  />
                  <button type="button" disabled className="btn btn-primary shrink-0 opacity-60 cursor-not-allowed">
                    Check status
                  </button>
                </div>
                <p id="track-reference-hint" className="field-hint mt-3">
                  Lookup is switched off in this template. Any reference you type would be ignored,
                  and nothing is checked against a database.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-line/80 bg-paper-deep/60 p-4">
                <p className="text-[0.76rem] font-semibold tracking-[0.08em] uppercase text-ink">
                  What to do instead
                </p>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                  For a real move, call the office and ask for your move manager. This template
                  cannot provide a status, and the phone number on this site is a placeholder.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="h-full rounded-3xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <p className="label">Planned status model</p>
                <span className="rounded-full bg-paper px-2.5 py-1 font-mono text-[0.66rem] font-semibold uppercase text-muted">
                  Illustrative
                </span>
              </div>
              <ol className="mt-5 space-y-3">
                {plannedStages.map((stage, index) => (
                  <li
                    key={stage.label}
                    className="flex items-center gap-4 rounded-2xl border border-line/70 bg-paper/50 p-4 transition-all duration-200 hover:border-accent/30 hover:bg-surface"
                  >
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent font-mono text-[0.68rem] font-bold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="font-display text-[1.2rem] leading-tight tracking-[-0.015em] text-ink font-semibold">
                          {stage.label}
                        </p>
                        <span className="font-mono text-[0.64rem] font-medium uppercase text-muted">
                          Not connected
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.8rem] leading-relaxed text-muted">{stage.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 text-[0.74rem] leading-relaxed text-muted">
                These are the stages a tracker would display. None of them is active, recorded or
                tied to a real move in this demonstration.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="wrap section-sm">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="label">Before launch</p>
                <h2 className="display-md mt-4 max-w-[16ch]">A tracker needs an operation behind it.</h2>
              </div>
              <p className="max-w-sm text-[0.92rem] leading-[1.7] text-ink-soft md:col-span-4 md:col-start-9">
                Six things this page would need before it could honestly show a moving truck.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group h-full rounded-2xl border border-line bg-paper/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:shadow-lg">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200 shadow-xs">
                        <Icon aria-hidden className="h-4.5 w-4.5" strokeWidth={1.7} />
                      </span>
                      <span className="font-mono text-[0.65rem] tabular-nums font-semibold text-muted group-hover:text-accent transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.3rem] leading-tight tracking-[-0.02em] text-ink font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.7] text-ink-soft">{item.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-deep px-8 py-12 text-paper shadow-2xl sm:px-12 sm:py-16">
              {/* Subtle ambient coral glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="label label-light">The honest answer</p>
                  <h2 className="display-md mt-4 max-w-[17ch] text-paper">
                    Until the lights are connected, call a person.
                  </h2>
                  <p className="mt-5 max-w-lg text-[0.98rem] leading-[1.75] text-paper/70">
                    A move manager can answer &ldquo;where is the truck?&rdquo; without a dashboard.
                    On this template, the contact details are placeholders, and no real move is being
                    tracked.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start">
                  <a href={siteConfig.contact.phoneHref} className="btn btn-primary w-full justify-center sm:w-auto">
                    <Phone aria-hidden className="h-4 w-4" strokeWidth={2} />
                    {siteConfig.contact.phone}
                  </a>
                  <ButtonLink href="/contact" variant="light" className="w-full justify-center sm:w-auto">
                    Office & directions
                    <MapPin aria-hidden className="h-4 w-4" strokeWidth={1.8} />
                  </ButtonLink>
                </div>
              </div>
              <p className="relative z-10 mt-10 border-t border-paper/15 pt-4 text-[0.72rem] text-paper/40">
                Demonstration template. Tracking is not implemented and no live move data is shown.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
