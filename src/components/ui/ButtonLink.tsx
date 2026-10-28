import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "dark" | "outline" | "light" | "solidLight";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  dark: "btn-dark",
  outline: "btn-outline",
  light: "btn-light",
  solidLight: "btn-solid-light",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "sm";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn("btn", variantClass[variant], size === "sm" && "btn-sm", className);

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
