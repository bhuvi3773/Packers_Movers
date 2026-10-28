import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  label?: string;
  action?: React.ReactNode;
  size?: "lg" | "md";
  light?: boolean;
  align?: "left" | "center";
  className?: string;
  headingClassName?: string;
};

export function SectionHeading({
  title,
  intro,
  label,
  action,
  size = "md",
  light = false,
  align = "left",
  className,
  headingClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {label ? (
          <p className={cn("label", light && "label-light")}>{label}</p>
        ) : null}
        <h2
          className={cn(
            size === "lg" ? "display-lg" : "display-md",
            label && "mt-4",
            light ? "text-paper" : "text-ink",
            headingClassName,
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p className={cn("mt-5 max-w-2xl text-[1rem] leading-[1.7]", light ? "text-paper/70" : "text-muted")}>
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
