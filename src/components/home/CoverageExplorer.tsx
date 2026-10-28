"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cities, regions } from "@/config/cities";
import { cn } from "@/lib/utils";

type Region = (typeof regions)[number];

export function CoverageExplorer() {
  const [region, setRegion] = useState<Region>("All");
  const reduce = useReducedMotion();

  const visibleCities = useMemo(
    () => (region === "All" ? cities : cities.filter((city) => city.region === region)),
    [region],
  );

  return (
    <div>
      {/* Region Filter Chips */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter cities by region">
        {regions.map((item) => {
          const isActive = region === item;
          const count = item === "All" ? cities.length : cities.filter((c) => c.region === item).length;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setRegion(item)}
              aria-pressed={isActive}
              className={cn(
                "chip text-[0.75rem] font-bold tracking-[0.04em]",
                isActive
                  ? "border-ink bg-ink text-paper shadow-md"
                  : "border-line bg-surface text-ink-soft hover:border-accent hover:text-accent-strong",
              )}
            >
              <span>{item}</span>
              <span
                className={cn(
                  "ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[0.6rem] font-bold tabular-nums",
                  isActive ? "bg-accent text-white" : "bg-paper-deep text-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Meta Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-[0.78rem] text-muted" aria-live="polite">
            Showing <strong className="font-bold text-ink">{visibleCities.length}</strong> of {cities.length} base
            operating hubs
          </p>
        </div>

        <Link
          href="/get-a-quote"
          className="group inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-accent-strong transition-all duration-200 hover:bg-accent hover:text-white"
        >
          <span>Calculate route cost</span>
          <ArrowUpRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
        </Link>
      </div>

      {/* City Items: Artone-Studio-Inspired Interactive Cards */}
      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCities.map((city, index) => (
          <motion.li
            key={city.name}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.45,
              delay: reduce ? 0 : Math.min(index * 0.025, 0.35),
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              reduce
                ? undefined
                : {
                    y: -3,
                    scale: 1.025,
                    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                  }
            }
            whileTap={{ scale: 0.98 }}
            className="group relative flex cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-xl border border-line bg-surface p-3.5 shadow-[0_2px_8px_-2px_rgba(11,19,43,0.04)] transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-[0_12px_24px_-6px_rgba(91,76,255,0.22)] active:bg-accent-surface"
          >
            {/* Hover Spotlight Glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-accent-cyan/[0.12] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="flex items-center gap-2.5 min-w-0">
              {/* Glowing Beacon Dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan/60 transition-colors duration-300 group-hover:bg-accent-cyan" />
              </span>

              <div className="truncate">
                <span className="block truncate font-sans text-[0.92rem] font-bold text-ink transition-colors duration-200 group-hover:text-accent-strong">
                  {city.name}
                </span>
                <span className="block truncate text-[0.68rem] text-muted">
                  {city.state}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="rounded-full bg-paper-deep px-2 py-0.5 text-[0.62rem] font-semibold tracking-wider text-muted uppercase transition-colors duration-200 group-hover:bg-accent-soft group-hover:text-accent-strong">
                Hub
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full text-muted/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Footer Note */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface-subtle p-3.5 text-[0.8rem] text-muted">
        <p>
          Dedicated crews in all 24 cities. Daily linehaul intercity moves nationwide.
        </p>
        <Link
          href="/contact"
          className="font-bold text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent-strong"
        >
          Check custom route →
        </Link>
      </div>
    </div>
  );
}
