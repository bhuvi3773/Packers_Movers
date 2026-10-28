import Link from "next/link";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  light?: boolean;
  className?: string;
};

export function Breadcrumbs({ items, light = false, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-[0.72rem] tracking-[0.06em]", className)}>
      <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-1", light ? "text-paper/55" : "text-muted")}>
        <li>
          <Link href="/" className={cn("transition-colors", light ? "hover:text-paper" : "hover:text-ink")}>
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span aria-hidden className={light ? "text-paper/30" : "text-line"}>
                /
              </span>
              {item.href && !last ? (
                <Link href={item.href} className={cn("transition-colors", light ? "hover:text-paper" : "hover:text-ink")}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={light ? "text-paper/85" : "text-ink"}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
