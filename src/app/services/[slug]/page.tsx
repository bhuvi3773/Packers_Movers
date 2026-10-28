import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServiceBySlug, services } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The requested moving service could not be found.",
      path: `/services/${slug}`,
      noindex: true,
    });
  }
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const serviceUrl = `${siteConfig.url}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: serviceUrl,
    provider: {
      "@type": "MovingCompany",
      name: siteConfig.name,
      telephone: siteConfig.contact.phone,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  return (
    <>
      {/* Service Hero */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Breadcrumbs
            items={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  Specialized Service Line
                </p>
              </div>

              <h1 className="display-lg mt-4 max-w-[14ch]">{service.title}</h1>
              <p className="mt-3 font-display text-[1.5rem] leading-snug italic text-accent-strong sm:text-[1.8rem]">
                {service.tagline}
              </p>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-[1.72] text-ink-soft">
                {service.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <ButtonLink href="/get-a-quote" variant="primary" size="md" className="w-full sm:w-auto">
                  <span>Get an estimate</span>
                  <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="md" className="w-full sm:w-auto">
                  <span>Ask a question</span>
                </ButtonLink>
              </div>

              <dl className="mt-9 grid grid-cols-1 gap-2.5 border-t border-line pt-6 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-xl border border-line bg-surface p-3 text-left">
                  <dt className="label text-[0.6rem]">Coverage</dt>
                  <dd className="mt-1 text-[0.85rem] font-bold text-ink">24 base cities</dd>
                </div>
                <div className="rounded-xl border border-line bg-surface p-3 text-left">
                  <dt className="label text-[0.6rem]">Move Plan</dt>
                  <dd className="mt-1 text-[0.85rem] font-bold text-ink">Itemised Scope</dd>
                </div>
                <div className="rounded-xl border border-line bg-surface p-3 text-left">
                  <dt className="label text-[0.6rem]">Move Manager</dt>
                  <dd className="mt-1 text-[0.85rem] font-bold text-ink">Single Point</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <figure className="group">
                <div className="image-frame relative aspect-[4/3] rounded-3xl border border-line shadow-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-paper/20 bg-deep/85 p-3.5 text-paper backdrop-blur-md">
                    <div>
                      <p className="text-[0.75rem] font-bold">{service.shortTitle} Dedicated Unit</p>
                      <p className="text-[0.68rem] text-paper/70 font-mono">Trained handling crew</p>
                    </div>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white">
                      Verified standard
                    </span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="border-b border-line bg-paper-deep">
        <div className="wrap grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            ["Written scope guarantee", "Locked before you commit a single rupee"],
            ["Trained in-house crew", "Packed room-by-room with 3-layer protection"],
            ["Joint room-by-room handover", "Every carton accounted for before we leave"],
          ].map(([title, detail]) => (
            <div key={title} className="flex items-center gap-3 py-4 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
              <div>
                <p className="text-[0.85rem] font-bold text-ink">{title}</p>
                <p className="text-[0.72rem] text-muted">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scope Section */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="lg:sticky lg:top-28">
                  <p className="label font-bold text-accent-strong">Scope Definition</p>
                  <h2 className="display-md mt-4 max-w-[12ch]">What&rsquo;s included in this move.</h2>
                  <p className="lead mt-4 max-w-sm text-[0.95rem]">
                    The exact scope is written into your quote after a physical or video survey.
                    This is the standard scope for a {service.shortTitle.toLowerCase()} move.
                  </p>

                  <div className="mt-7 rounded-2xl border border-line bg-surface p-5 shadow-xs">
                    <p className="label text-[0.65rem] font-bold text-muted">Recommended for:</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.goodFor.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line bg-paper px-3 py-1 text-[0.75rem] font-medium text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className="group flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-xs transition-all duration-200 hover:border-accent hover:shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <p className="text-[0.88rem] leading-[1.65] text-ink-soft">{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Stages */}
      <section className="section border-y border-line bg-surface">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              label="How it runs"
              title="The same method, shaped to this move."
              intro="Four stages, each with a recorded decision and a handover. No stage begins until the previous one is verified."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-lg hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.75rem] font-bold text-accent">0{index + 1}</span>
                      <span className="rounded-full bg-paper-deep px-2 py-0.5 text-[0.62rem] font-bold text-muted uppercase">
                        Stage {index + 1}
                      </span>
                    </div>
                    <h3 className="display-xs mt-3 text-ink transition-colors group-hover:text-accent-strong">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-[1.68] text-ink-soft">
                      {stage.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/get-a-quote" variant="primary" size="sm">
              <span>Start with an estimate</span>
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
            </ButtonLink>
            <span className="text-[0.78rem] text-muted">
              Or call our desk directly at{" "}
              <a href={siteConfig.contact.phoneHref} className="font-bold text-ink underline decoration-accent underline-offset-4 hover:text-accent">
                {siteConfig.contact.phone}
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-paper">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              label="Related Services"
              title="Other ways to move."
              action={
                <ButtonLink href="/services" variant="outline" size="sm">
                  <span>All services</span>
                  <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </ButtonLink>
              }
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-4 transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="image-frame relative aspect-[16/10] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pt-4">
                    <span className="text-[0.65rem] font-bold text-accent uppercase tracking-wider">
                      {item.shortTitle}
                    </span>
                    <h3 className="mt-1 font-display text-[1.35rem] leading-tight text-ink transition-colors group-hover:text-accent-strong">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-muted">{item.tagline}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-[0.72rem] font-bold uppercase tracking-wider text-ink transition-colors group-hover:text-accent-strong">
                      <span>Explore service</span>
                      <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section border-t border-line bg-surface">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label font-bold text-accent-strong">Questions</p>
                <h2 className="display-md mt-4 max-w-[12ch]">
                  About {service.shortTitle.toLowerCase()} moves.
                </h2>
                <p className="lead mt-4 max-w-sm text-[0.95rem]">
                  Still unsure about scope, dates or access? Talk to our move coordinator before booking.
                </p>
                <div className="mt-7">
                  <ButtonLink href="/contact" variant="outline" size="sm">
                    <span>Ask a move manager</span>
                    <ArrowUpRight aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Accordion items={service.faqs} idPrefix={`${service.slug}-faq`} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
