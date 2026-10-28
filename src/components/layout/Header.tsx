"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services } from "@/config/content";
import { siteConfig } from "@/config/site";
import { cn, whatsappUrl } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

function isActivePath(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);

  function closeMobileMenu(restoreFocus = false) {
    restoreFocusRef.current = restoreFocus;
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileCloseRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        restoreFocusRef.current = true;
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || !mobilePanelRef.current) return;
      const focusable = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const linkBase =
    "relative py-2 text-[0.8125rem] font-medium tracking-[0.015em] transition-colors hover:text-accent-strong";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md transition-shadow duration-200">
        <div className="wrap flex h-[70px] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => {
                if (!servicesRef.current?.contains(document.activeElement)) setServicesOpen(false);
              }}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) setServicesOpen(false);
              }}
            >
              <button
                ref={servicesButtonRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                aria-haspopup="true"
                onClick={() => setServicesOpen((value) => !value)}
                className={cn(
                  linkBase,
                  "flex items-center gap-1.5 transition-colors",
                  isActivePath(pathname, "/services") ? "text-ink font-bold" : "text-ink-soft",
                )}
              >
                Services
                <ChevronDown
                  aria-hidden
                  className={cn("h-3.5 w-3.5 transition-transform duration-300", servicesOpen && "rotate-180")}
                  strokeWidth={1.75}
                />
                {isActivePath(pathname, "/services") ? (
                  <span aria-hidden className="absolute inset-x-0 -bottom-[1px] h-[2.5px] rounded-full bg-accent" />
                ) : null}
              </button>

              <AnimatePresence>
                {servicesOpen ? (
                  <motion.div
                    id="services-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 z-50 w-[640px] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-2xl border border-line bg-surface p-3 shadow-[0_24px_60px_-16px_rgba(10,17,40,0.18)]">
                      <div className="grid grid-cols-2 gap-1.5">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex flex-col gap-1 rounded-xl p-3.5 transition-all duration-200 hover:bg-paper hover:shadow-sm"
                          >
                            <span className="flex items-center justify-between gap-3 font-display text-[1.15rem] leading-tight text-ink transition-colors duration-200 group-hover:text-accent-strong">
                              {service.title}
                              <ArrowUpRight
                                aria-hidden
                                className="h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                                strokeWidth={2}
                              />
                            </span>
                            <span className="text-[0.78rem] leading-snug text-muted">{service.tagline}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-4 border-t border-line px-3.5 pt-3 pb-1">
                        <p className="text-[0.75rem] text-muted">Need a custom scope or inventory advice?</p>
                        <Link
                          href="/get-a-quote"
                          onClick={() => setServicesOpen(false)}
                          className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.08em] uppercase text-accent-strong hover:text-accent"
                        >
                          Build an estimate
                          <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {siteConfig.navigation
              .filter((link) => link.href !== "/services")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                  aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                  className={cn(
                    linkBase,
                    isActivePath(pathname, link.href) ? "text-ink font-bold" : "text-ink-soft",
                  )}
                >
                  {link.label}
                  {isActivePath(pathname, link.href) ? (
                    <span aria-hidden className="absolute inset-x-0 -bottom-[1px] h-[2.5px] rounded-full bg-accent" />
                  ) : null}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="hidden items-center gap-2 text-[0.78rem] font-semibold tracking-[0.02em] text-ink-soft transition-colors hover:text-accent-strong xl:flex"
            >
              <Phone aria-hidden className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
              {siteConfig.contact.phone}
            </a>
            <span aria-hidden className="hidden h-5 w-px bg-line xl:block" />
            <Link href="/get-a-quote" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Get a quote
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
            </Link>
            <button
              ref={mobileTriggerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all hover:border-accent hover:text-accent lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu aria-hidden className="h-5 w-5" strokeWidth={1.7} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence
        onExitComplete={() => {
          if (restoreFocusRef.current) {
            restoreFocusRef.current = false;
            mobileTriggerRef.current?.focus();
          }
        }}
      >
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            ref={mobilePanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-deep text-paper lg:hidden"
          >
            <div className="wrap flex min-h-full flex-col py-4">
              <div className="flex items-center justify-between gap-4 border-b border-paper/15 pb-4">
                <Logo light />
                <button
                  ref={mobileCloseRef}
                  type="button"
                  onClick={() => closeMobileMenu(true)}
                  className="flex h-11 w-11 items-center justify-center border border-paper/25 text-paper transition-colors hover:bg-paper hover:text-ink"
                  aria-label="Close menu"
                >
                  <X aria-hidden className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>

              <nav aria-label="Mobile primary" className="flex-1 py-8">
                <ul className="space-y-1">
                  {siteConfig.navigation
                    .filter((link) => link.href !== "/services")
                    .map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between border-b border-paper/10 py-4 font-display text-[2rem] leading-none tracking-[-0.03em] text-paper transition-colors hover:text-accent-soft"
                        >
                          {link.label}
                          <ArrowUpRight aria-hidden className="h-5 w-5 text-paper/40" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                </ul>

                <div className="mt-10">
                  <p className="label label-light">Services</p>
                  <ul className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between border-b border-paper/10 py-3 text-[0.9rem] text-paper/80 transition-colors hover:text-paper"
                        >
                          {service.title}
                          <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-paper/35" strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="border-t border-paper/15 pt-6 pb-2">
                <Link
                  href="/get-a-quote"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Build a move estimate
                  <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2} />
                </Link>
                <div className="mt-5 grid gap-3 text-[0.82rem] text-paper/70 sm:grid-cols-3">
                  <a href={siteConfig.contact.phoneHref} className="flex items-center gap-2 hover:text-paper">
                    <Phone aria-hidden className="h-3.5 w-3.5" strokeWidth={1.6} />
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={whatsappUrl("Hello Setu, I would like to discuss a move.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-paper"
                  >
                    <MessageCircle aria-hidden className="h-3.5 w-3.5" strokeWidth={1.6} />
                    WhatsApp
                  </a>
                  <a href={siteConfig.contact.emailHref} className="flex items-center gap-2 hover:text-paper">
                    <Mail aria-hidden className="h-3.5 w-3.5" strokeWidth={1.6} />
                    Email
                  </a>
                </div>
                <p className="mt-5 text-[0.7rem] leading-relaxed text-paper/40">
                  Demonstration template. Nothing you enter is sent or stored.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
