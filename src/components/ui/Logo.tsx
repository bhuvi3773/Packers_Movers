import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  light?: boolean;
  className?: string;
  showDescriptor?: boolean;
  onClick?: () => void;
};

export function Logo({ light = false, className, showDescriptor = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Setu Relocation — home"
      className={cn("group inline-flex shrink-0 items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "font-display text-[1.95rem] leading-none tracking-[-0.055em]",
          light ? "text-paper" : "text-ink",
        )}
      >
        setu
      </span>
      <span aria-hidden className="mb-0.5 block h-1.5 w-1.5 bg-accent transition-transform duration-300 group-hover:rotate-45" />
      {showDescriptor ? (
        <span
          className={cn(
            "mt-1 hidden text-[8.5px] leading-[1.35] font-semibold tracking-[0.24em] uppercase sm:block",
            light ? "text-paper/60" : "text-muted",
          )}
        >
          Relocation
          <br />
          India
        </span>
      ) : null}
    </Link>
  );
}
