"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/config/content";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative pl-9 sm:pl-16">
      {/* Background Track Line */}
      <div
        aria-hidden
        className="absolute top-4 bottom-4 left-[13px] w-[2px] bg-line sm:left-[19px]"
      />
      {/* Animated Glowing Progress Line */}
      <motion.div
        aria-hidden
        style={{ scaleY, transformOrigin: "top" }}
        className="process-progress absolute top-4 bottom-4 left-[13px] w-[2px] origin-top bg-gradient-to-b from-accent to-accent-cyan sm:left-[19px] shadow-[0_0_12px_rgba(6,182,212,0.6)]"
      />

      <ol>
        {processSteps.map((step, index) => {
          const stepNum = String(index + 1).padStart(2, "0");
          return (
            <motion.li
              key={step.title}
              data-reveal
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      x: 4,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              className="group relative pb-8 last:pb-0 sm:pb-14"
            >
              {/* Timeline Node Badge with Glow */}
              <div
                aria-hidden
                className="absolute top-1 -left-9 sm:-left-16 flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-line bg-surface text-ink font-mono text-[0.65rem] sm:text-[0.75rem] font-bold shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_16px_rgba(91,76,255,0.4)]"
              >
                <span>{stepNum}</span>
              </div>

              {/* Stage Card with Interactive Hover */}
              <div className="rounded-2xl border border-line/80 bg-surface p-4 sm:p-7 shadow-[0_4px_16px_-4px_rgba(11,19,43,0.04)] transition-all duration-300 group-hover:border-accent/60 group-hover:bg-white group-hover:shadow-[0_16px_32px_-8px_rgba(91,76,255,0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="label font-bold text-accent">{step.short}</span>
                  <span className="rounded-full bg-paper-deep px-2.5 py-0.5 text-[0.62rem] font-bold tracking-wider text-muted uppercase transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                    Stage {index + 1} of 4
                  </span>
                </div>
                <h3 className="display-sm mt-3 text-ink transition-colors duration-200 group-hover:text-accent-strong">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.75] text-ink-soft">
                  {step.body}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
