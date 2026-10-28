import Link from "next/link";
import { ArrowUpRight, Home, MapPin, Search } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RouteLine } from "@/components/ui/RouteLine";

const destinations = [
  { label: "Home", href: "/", detail: "Back to starting point & route pricing" },
  { label: "All services", href: "/services", detail: "Household, local, office & domestic lines" },
  { label: "Build an estimate", href: "/get-a-quote", detail: "Illustrative rate calculator in five steps" },
  { label: "Contact office", href: "/contact", detail: "Phone, WhatsApp & coordinator desk" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
      />
      <RouteLine className="absolute top-16 -right-40 hidden w-[760px] max-w-none opacity-40 md:block" />

      <div className="wrap relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-12 -left-2 font-display text-[8rem] leading-none tracking-[-0.05em] text-accent/10 select-none sm:-top-20 sm:text-[11rem]"
              >
                404
              </span>
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  Error 404 · Route Not Found
                </p>
              </div>
            </div>

            <h1 className="display-xl mt-6 max-w-[12ch]">This address moved.</h1>
            <p className="lead mt-6 max-w-xl text-[1.125rem]">
              The page you asked for is not at this URL. The link may have changed, or the carton
              was placed in a different room. The rest of the network is running on schedule.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <ButtonLink href="/" variant="primary" size="md" className="w-full sm:w-auto">
                <Home aria-hidden className="h-4 w-4" strokeWidth={2} />
                Back to home
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="md" className="w-full sm:w-auto">
                Browse services
                <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
              </ButtonLink>
            </div>

            <p className="mt-8 max-w-md text-[0.82rem] leading-relaxed text-muted">
              Need assistance? Use our coordinator contact desk to locate what you are looking for.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-surface shadow-xl overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-line bg-paper-deep px-6 py-4">
                <p className="label font-bold text-ink">Move File Status</p>
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold tracking-[0.08em] text-accent-strong uppercase">
                  MISSING_URL / 404
                </span>
              </div>

              <div className="flex flex-col items-center border-b border-line px-6 py-8 text-center bg-surface">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-accent/40 bg-accent-soft text-accent-strong">
                  <MapPin aria-hidden className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <p className="mt-4 font-mono text-[0.68rem] font-bold tracking-[0.14em] uppercase text-muted">
                  Zero inventory at this route
                </p>
                <p className="mt-2 max-w-[26ch] font-display text-[1.45rem] leading-[1.2] tracking-[-0.02em] text-ink">
                  The link may have moved with the furniture.
                </p>
              </div>

              <nav aria-label="Useful pages" className="p-3 bg-surface space-y-1">
                {destinations.map((destination) => (
                  <Link
                    key={destination.href}
                    href={destination.href}
                    className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-paper hover:shadow-xs"
                  >
                    <div>
                      <span className="block text-[0.88rem] font-bold text-ink transition-colors group-hover:text-accent-strong">
                        {destination.label}
                      </span>
                      <span className="mt-0.5 block text-[0.74rem] text-muted">
                        {destination.detail}
                      </span>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={2}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
