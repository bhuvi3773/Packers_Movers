"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ClientProject = {
  name: string;
  detail: string;
  scope: string;
  project: string;
  outcome: string;
  image: string;
  imageAlt: string;
  metrics: string;
  serviceType: string;
};

const clientProjects: ClientProject[] = [
  {
    name: "Halcyon Group",
    detail: "Office relocations",
    scope: "Mumbai · Pune",
    project: "42 Workstations + IT Server Lab Transit",
    outcome: "Full floor packed Friday 6 PM, fully operational in Pune Monday 8 AM with zero downtime.",
    image: "/images/office-team.jpg",
    imageAlt: "Corporate office relocation team setting up modern ergonomic workstations",
    metrics: "48h Handover",
    serviceType: "Corporate Relocation",
  },
  {
    name: "Meridian Homes",
    detail: "Family villa moves",
    scope: "Bengaluru · Hyderabad",
    project: "4 BHK Penthouse & Custom Teakwood Furniture",
    outcome: "Room-by-room inventory labelling, fragile porcelain crating, and day-one wardrobe setup.",
    image: "/images/home-family.jpg",
    imageAlt: "Happy family enjoying their settled living room after a smooth move",
    metrics: "100% Zero Damage",
    serviceType: "Household Shifting",
  },
  {
    name: "Aster & Pine",
    detail: "Intercity highway transit",
    scope: "Delhi NCR · Jaipur",
    project: "Direct 280km Highway Container Linehaul",
    outcome: "GPS-monitored direct sealed truck without intermediate hub unloads or cargo re-handling.",
    image: "/images/truck-highway.jpg",
    imageAlt: "Linehaul container truck travelling smoothly along an open highway",
    metrics: "Same-Day Linehaul",
    serviceType: "Domestic Relocation",
  },
  {
    name: "Fjord & Co.",
    detail: "Fragile art & antique protection",
    scope: "Chennai · Kochi",
    project: "Triple-Layer Crating for Sculptures & Paintings",
    outcome: "180 customized wooden crates with thermal insulation, humidity buffers, and barcode flags.",
    image: "/images/packing-room.jpg",
    imageAlt: "Movers carefully bubble-wrapping and crating delicate household items",
    metrics: "180 Crates Sealed",
    serviceType: "Fine Art Packing",
  },
  {
    name: "Orion Studios",
    detail: "Creative studio gear",
    scope: "Kolkata · Delhi NCR",
    project: "Cinema Rigging, Acoustic Panels & Sound Gear",
    outcome: "Shock-insulated hard cases, laser-leveled lighting grid dismantling, and signed sound check.",
    image: "/images/about-studio.jpg",
    imageAlt: "Professional studio setup completed by specialized moving crews",
    metrics: "Calibrated Audio Rig",
    serviceType: "Specialized Equipment",
  },
  {
    name: "Kestrel Legal",
    detail: "Corporate & archive shift",
    scope: "Ahmedabad · Mumbai",
    project: "Confidential Legal Library & 1,400 Case Files",
    outcome: "Tamper-evident locked security containers, indexed archive retrieval, and chain-of-custody log.",
    image: "/images/mover-loading.jpg",
    imageAlt: "Professional crew loading sealed security cartons into moving vehicle",
    metrics: "Chain of Custody",
    serviceType: "Confidential Relocation",
  },
];

export function ClientLogos({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();
  const activeClient = clientProjects[activeIndex];

  return (
    <div className={cn("relative space-y-6", className)}>
      {/* 1. Client Interactive Grid / Selector */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {clientProjects.map((client, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.button
              key={client.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: reduce ? 0 : index * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.025,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300",
                isActive
                  ? "border-accent bg-surface shadow-[0_16px_36px_-8px_rgba(91,76,255,0.24)] ring-2 ring-accent/30"
                  : "border-line bg-surface/90 hover:border-accent/60 hover:bg-surface hover:shadow-md",
              )}
            >
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2">
                <span className="relative flex h-2 w-2">
                  <span
                    className={cn(
                      "absolute inline-flex h-full w-full rounded-full bg-accent-cyan transition-opacity duration-300",
                      isActive ? "animate-ping opacity-75" : "opacity-0 group-hover:opacity-60",
                    )}
                  />
                  <span
                    className={cn(
                      "relative inline-flex h-2 w-2 rounded-full transition-colors duration-300",
                      isActive ? "bg-accent-cyan" : "bg-muted/40 group-hover:bg-accent",
                    )}
                  />
                </span>
                <span
                  className={cn(
                    "font-mono text-[0.62rem] font-bold tracking-wider uppercase transition-colors duration-200",
                    isActive ? "text-accent font-semibold" : "text-muted group-hover:text-ink",
                  )}
                >
                  {client.scope.split("·")[0].trim()}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="my-3">
                <span
                  className={cn(
                    "block font-display text-[1.2rem] leading-tight tracking-[-0.02em] transition-colors duration-200 sm:text-[1.3rem]",
                    isActive ? "text-accent font-bold" : "text-ink group-hover:text-accent",
                  )}
                >
                  {client.name}
                </span>
                <span className="mt-1 block text-[0.72rem] leading-snug text-muted">
                  {client.detail}
                </span>
              </div>

              {/* Bottom Work Preview Indicator */}
              <div className="flex items-center justify-between border-t border-line/60 pt-2 text-[0.65rem]">
                <span
                  className={cn(
                    "font-medium transition-colors",
                    isActive ? "text-accent font-bold" : "text-muted group-hover:text-ink-soft",
                  )}
                >
                  {isActive ? "Viewing Work" : "Hover to view"}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-bold transition-all",
                    isActive
                      ? "bg-accent-emerald/15 text-accent-emerald"
                      : "text-muted group-hover:text-accent-emerald",
                  )}
                >
                  <Star className="h-2.5 w-2.5 fill-current" />
                  5.0
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* 2. Artone-Style Live Work Done Showcase Panel (Hover & Touch Activated) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeClient.name}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-[0_12px_36px_-10px_rgba(11,19,43,0.08)] sm:p-7 lg:p-8"
        >
          {/* Subtle vibrant background glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl"
          />

          <div className="grid gap-6 md:grid-cols-12 md:items-center lg:gap-10">
            {/* Left Column: High-Res Work Done Image */}
            <div className="md:col-span-5 lg:col-span-5">
              <div className="group relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-line shadow-md">
                <Image
                  src={activeClient.image}
                  alt={activeClient.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 35vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />

                {/* Overlaid Verified Work Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-deep/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-wider uppercase text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  Work Done For {activeClient.name}
                </div>

                {/* Bottom Route Bar */}
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-xl bg-deep/85 px-3 py-2 text-paper backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-accent-cyan shrink-0" />
                    <span className="text-[0.75rem] font-bold">{activeClient.scope}</span>
                  </div>
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[0.62rem] font-bold text-white uppercase">
                    {activeClient.metrics}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Work Details, Scope & Outcome */}
            <div className="md:col-span-7 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-accent">
                  <Sparkles className="h-3 w-3" />
                  {activeClient.serviceType}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-paper-deep px-3 py-1 font-mono text-[0.68rem] font-medium text-muted uppercase">
                  Verified Relocation Case Study
                </span>
              </div>

              <h3 className="display-sm mt-3.5 text-ink font-bold">
                {activeClient.project}
              </h3>

              <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-soft">
                {activeClient.outcome}
              </p>

              {/* Value checklist */}
              <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-line/70 pt-4 sm:grid-cols-2 text-[0.8rem] text-ink-soft">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium">Direct crew, zero subcontracting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent-cyan shrink-0" />
                  <span className="font-medium">Scheduled arrival window guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent-emerald shrink-0" />
                  <span className="font-medium">Signed handover inventory report</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500 shrink-0" />
                  <span className="font-medium">5.0 Star verified client review</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
