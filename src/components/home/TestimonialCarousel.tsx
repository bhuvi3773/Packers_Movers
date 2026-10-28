"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/config/content";
import { DemoTag } from "@/components/ui/DemoTag";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = testimonials[index];

  function move(direction: number) {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  }

  return (
    <div className="relative">
      {/* Decorative Quote Mark */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -top-4 -left-3 h-16 w-16 text-accent/[0.1] -rotate-6 select-none"
      />

      <div className="relative flex items-center justify-between gap-4 border-b border-line/60 pb-4">
        <div className="flex items-center gap-3">
          <DemoTag>Client experience</DemoTag>
          <div className="flex items-center gap-0.5 text-accent" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent" />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_4px_14px_rgba(91,76,255,0.35)] active:translate-y-0"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_4px_14px_rgba(91,76,255,0.35)] active:translate-y-0"
          >
            <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mt-8 min-h-[14rem] sm:min-h-[12.5rem]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={active.name}
            initial={{ opacity: 0, x: reduce ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : -20 }}
            transition={{ duration: reduce ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <blockquote>
              <p className="font-display text-[1.55rem] leading-[1.28] tracking-[-0.02em] text-ink sm:text-[1.9rem] lg:text-[2.1rem]">
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 font-sans text-[0.8rem] font-bold tracking-[0.05em] text-accent-strong shadow-sm"
              >
                {active.initials}
              </span>
              <div>
                <span className="block text-[0.95rem] font-bold text-ink">{active.name}</span>
                <span className="block text-[0.78rem] text-muted">
                  {active.city} · <span className="text-accent-strong font-medium">{active.service}</span>
                </span>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-2 border-t border-line/60 pt-4" aria-label="Testimonial position">
        {testimonials.map((item, itemIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setIndex(itemIndex)}
            aria-label={`Show testimonial from ${item.name}`}
            aria-current={itemIndex === index ? "true" : undefined}
            className={
              itemIndex === index
                ? "h-2 w-9 rounded-full bg-accent transition-all duration-300 shadow-sm"
                : "h-2 w-3 rounded-full bg-line transition-all duration-200 hover:bg-muted"
            }
          />
        ))}
        <span className="ml-auto font-mono text-[0.72rem] tabular-nums text-muted">
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
