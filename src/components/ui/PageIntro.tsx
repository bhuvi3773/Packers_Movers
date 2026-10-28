import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: { label: string; href?: string }[];
  children?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export function PageIntro({
  label,
  title,
  intro,
  crumbs,
  children,
  aside,
  className,
  titleClassName,
}: PageIntroProps) {
  return (
    <section className={cn("border-b border-line", className)}>
      <div className="wrap pt-8 pb-12 sm:pt-10 sm:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9"}>
            {label ? <p className="label">{label}</p> : null}
            <h1 className={cn("display-lg mt-4 max-w-[17ch]", label ? "" : "mt-0", titleClassName)}>
              {title}
            </h1>
            {children}
          </div>
          <div className={cn(aside ? "lg:col-span-5" : "lg:col-span-3")}>
            {intro ? (
              <div className="border-t border-line pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
                <p className="text-[1.0625rem] leading-[1.7] text-ink-soft">{intro}</p>
              </div>
            ) : null}
            {aside}
          </div>
        </div>
      </div>
    </section>
  );
}
