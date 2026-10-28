"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: FAQ[];
  className?: string;
  light?: boolean;
  idPrefix?: string;
};

export function Accordion({ items, className, light = false, idPrefix = "faq" }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const reduce = useReducedMotion();

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const id = `${idPrefix}-${index}`;
        const open = openIds.has(id);
        return (
          <div
            key={id}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-300",
              light
                ? "border-paper/20 bg-paper/5 hover:border-paper/40"
                : open
                  ? "border-accent/60 bg-surface shadow-[0_8px_24px_-4px_rgba(91,76,255,0.18)]"
                  : "border-line bg-surface hover:border-line-strong hover:shadow-sm",
            )}
          >
            <h3>
              <button
                type="button"
                id={`${id}-trigger`}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
                onClick={() => toggle(id)}
                className={cn(
                  "group flex w-full cursor-pointer list-none items-center justify-between gap-6 p-5 text-left transition-colors sm:p-6",
                  light ? "text-paper" : "text-ink",
                )}
              >
                <span className="font-display text-[1.2rem] leading-[1.3] tracking-[-0.015em] transition-colors duration-200 group-hover:text-accent-strong sm:text-[1.35rem]">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    open
                      ? "border-accent bg-accent text-white shadow-[0_0_12px_rgba(6,182,212,0.45)]"
                      : light
                        ? "border-paper/30 text-paper/80 group-hover:border-paper"
                        : "border-line text-muted bg-paper-deep group-hover:border-accent group-hover:text-accent-strong",
                  )}
                >
                  <Plus
                    aria-hidden
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      open && "rotate-45",
                    )}
                    strokeWidth={2.2}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-trigger`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "px-5 pb-6 text-[0.95rem] leading-[1.75] sm:px-6 sm:pb-7",
                      light ? "text-paper/75" : "text-ink-soft",
                    )}
                  >
                    <div className="border-t border-line/60 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
