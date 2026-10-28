import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RouteLine } from "@/components/ui/RouteLine";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-deep text-paper">
      {/* Ambient coral glow in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />

      <RouteLine
        light
        className="absolute -right-24 -bottom-16 hidden sm:block w-[820px] max-w-none opacity-30 sm:w-[960px]"
      />

      <div className="wrap relative grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
              <p className="label label-light text-[0.65rem] tracking-[0.14em]">Start here · Instant route quote</p>
            </div>

            <h2 className="display-lg mt-5 max-w-[14ch] text-paper">
              Let&rsquo;s put the move in one file.
            </h2>
            <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.7] text-paper/75 sm:text-[1.05rem]">
              Tell us the two addresses. Start with an illustrative estimate, then plan the details
              with one move manager — survey, packing scope, dates and a written price.
            </p>

            {/* Value bullets */}
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-[0.82rem] text-paper/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-cyan shrink-0" />
                <span>Zero hidden distance charges</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-cyan shrink-0" />
                <span>Single point-of-contact manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-cyan shrink-0" />
                <span>Triple-layer protective packing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-cyan shrink-0" />
                <span>Transit insurance & joint handover</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <ButtonLink href="/get-a-quote" variant="primary" size="md" className="w-full sm:w-auto">
                Build your estimate
                <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
              </ButtonLink>
              <ButtonLink href={siteConfig.contact.phoneHref} variant="light" size="md" className="w-full sm:w-auto">
                <Phone aria-hidden className="h-4 w-4" strokeWidth={1.8} />
                Talk to a move manager
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-5 text-[0.8rem] text-paper/60">
              <a href={siteConfig.contact.phoneHref} className="hover:text-paper font-medium transition-colors">
                {siteConfig.contact.phone}
              </a>
              <a href={siteConfig.contact.emailHref} className="hover:text-paper font-medium transition-colors">
                {siteConfig.contact.email}
              </a>
              <span>{siteConfig.contact.hoursShort}</span>
            </div>
            <p className="mt-3 text-[0.7rem] text-paper/40">
              Demonstration template. No enquiry, estimate or contact detail is transmitted.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <figure className="group">
            <div className="image-frame relative aspect-[4/3] rounded-2xl border border-paper/15 shadow-2xl">
              <Image
                src="/images/truck-highway.jpg"
                alt="A moving truck travelling on an open highway"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-paper/20 bg-deep/80 p-3 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-bold text-paper">All-India Linehaul</p>
                    <p className="text-[0.65rem] text-paper/60">GPS-monitored direct trucks</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
                  Active
                </span>
              </div>
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[0.72rem] text-paper/50">
              <span>Intercity routes, planned in advance.</span>
              <span>Demo imagery · Pexels</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
