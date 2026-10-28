import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { QuoteCalculator } from "@/components/quote/QuoteCalculator";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";
import { pricingConfig } from "@/config/pricing";
import { buildMetadata } from "@/lib/metadata";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Get a Moving Estimate",
  description:
    "Build an illustrative packers and movers estimate in five steps: route, home size, access, services and an itemised range. No contact details required to start.",
  path: "/get-a-quote",
});

type QuotePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const quoteFaqs: FAQ[] = [
  {
    question: "Is this the final price?",
    answer:
      "No. It is an illustrative estimate built from sample rates. A final quote follows a survey of your inventory, access, packing scope and preferred dates.",
  },
  {
    question: "Why does the range change when I add a service?",
    answer:
      "Each add-on adds a line to the estimate: packing is priced against the size of the move, unpacking against the packing scope, and fixed services such as furniture assembly or vehicle transport have a set sample rate.",
  },
  {
    question: "Why is there a weekend surcharge?",
    answer:
      "Saturday and Sunday moves can need different crew scheduling. The template applies a 5% sample surcharge when the selected date falls on a weekend. A real company may price weekends differently.",
  },
  {
    question: "What happens after I submit the demo form?",
    answer:
      "Nothing is transmitted. The template creates a demo reference in your browser so you can see the success state. A live deployment would connect this form to a CRM or email workflow.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: quoteFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function GetAQuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const from = firstValue(params.from);
  const to = firstValue(params.to);
  const size = firstValue(params.size);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        />

        <div className="wrap pt-8 pb-12 sm:pt-12 sm:pb-16">
          <Breadcrumbs items={[{ label: "Get a quote" }]} />

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <p className="label text-[0.65rem] font-bold text-accent-strong tracking-wider">
                  Interactive Route Pricing Tool
                </p>
              </div>

              <h1 className="display-lg mt-4 max-w-[15ch]">
                Build the estimate before the move.
              </h1>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <p className="text-[1rem] leading-[1.7] text-ink-soft">
                  Five steps. No phone number or sign-up required to calculate. You will inspect an
                  itemised range and linehaul breakdown before deciding whether to share details.
                </p>
                <p className="mt-3 text-[0.75rem] font-medium text-muted">
                  Illustrative only · Final binding quote follows an inventory survey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="section-sm bg-paper">
        <div className="wrap">
          <QuoteCalculator initialFrom={from} initialTo={to} initialSize={size} />
        </div>
      </section>

      {/* What Happens Next */}
      <section className="border-y border-line bg-surface">
        <div className="wrap section-sm">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="label font-bold text-accent-strong">After the estimate</p>
                <h2 className="display-md mt-4 max-w-[10ch]">What happens next.</h2>
                <p className="mt-4 max-w-sm text-[0.95rem] leading-[1.7] text-ink-soft">
                  The online estimate is the start of a clear conversation, not a high-pressure sales pitch.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
              {[
                {
                  title: "Inventory Survey",
                  body: "We verify the room list, access route, parking restrictions and any fragile pieces — over video or at home.",
                },
                {
                  title: "Binding Move File",
                  body: "You receive an itemised written quotation, exact packing materials scope, transit dates and your move manager's direct contact.",
                },
                {
                  title: "Move Day Execution",
                  body: "Our trained crew packs to the checklist, coordinates transport, and conducts a joint room-by-room inspection before departing.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-accent hover:bg-white hover:shadow-lg hover:-translate-y-1">
                    <span className="font-mono text-[0.75rem] font-bold text-accent">0{index + 1}</span>
                    <h3 className="mt-3 font-display text-[1.4rem] leading-tight text-ink transition-colors group-hover:text-accent-strong">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[0.85rem] leading-relaxed text-muted">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimate FAQs */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="label font-bold text-accent-strong">Estimate FAQs</p>
                <h2 className="display-md mt-4 max-w-[12ch]">The pricing terms, in plain English.</h2>
                <p className="lead mt-4 max-w-xs text-[0.92rem]">
                  {pricingConfig.shortDisclaimer}
                </p>
                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center gap-2.5 text-[0.84rem] font-bold text-ink hover:text-accent-strong transition-colors"
                  >
                    <Phone aria-hidden className="h-4 w-4 text-accent" strokeWidth={2} />
                    {siteConfig.contact.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[0.84rem] font-bold text-accent hover:text-accent-strong transition-colors"
                  >
                    <span>Send a custom question</span>
                    <ArrowUpRight aria-hidden className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <Accordion items={quoteFaqs} idPrefix="quote-faq" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
