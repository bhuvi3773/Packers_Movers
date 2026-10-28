import { cn } from "@/lib/utils";

export function DemoTag({
  children = "Demo",
  light = false,
  className,
}: {
  children?: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.625rem] font-bold tracking-[0.14em] uppercase shadow-xs",
        light
          ? "border-paper/20 bg-paper/10 text-paper/80"
          : "border-line bg-surface text-ink-soft",
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shrink-0" />
      {children}
    </span>
  );
}
