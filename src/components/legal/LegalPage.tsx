import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DemoTag } from "@/components/ui/DemoTag";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalDocument } from "@/lib/types";

type LegalPageProps = {
  document: LegalDocument;
  crumb: string;
};

export function LegalPage({ document, crumb }: LegalPageProps) {
  return (
    <>
      <section className="border-b border-line">
        <div className="wrap pt-8 pb-10 sm:pt-10 sm:pb-14">
          <Breadcrumbs items={[{ label: crumb }]} />
          <div className="mt-9 grid items-end gap-9 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-8">
              <p className="label">{document.label}</p>
              <h1 className="display-lg mt-4 max-w-[15ch]">{document.title}</h1>
              <p className="lead mt-6 max-w-2xl">{document.intro}</p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <dl className="grid grid-cols-2 gap-5">
                  <div>
                    <dt className="label">Last updated</dt>
                    <dd className="mt-1.5 font-display text-[1.25rem] leading-tight tracking-[-0.01em] text-ink">
                      {document.updated}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Effective</dt>
                    <dd className="mt-1.5 font-display text-[1.25rem] leading-tight tracking-[-0.01em] text-ink">
                      {document.effective}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 border-t border-line pt-3 text-[0.72rem] leading-relaxed text-muted">
                  Template copy only. Have it reviewed by a qualified adviser before a live launch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <p className="label">On this page</p>
              <nav aria-label={`${crumb} sections`} className="mt-3">
                <ol className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 lg:grid-cols-1">
                  {document.sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 border-t border-line py-2.5 text-[0.8rem] leading-snug text-ink-soft transition-all duration-200 hover:translate-x-1 hover:text-ink"
                      >
                        <span className="font-mono text-[0.65rem] tabular-nums text-muted transition-colors group-hover:text-accent font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="group-hover:text-ink">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="mt-8 hidden rounded-2xl border border-line bg-surface p-5 shadow-sm lg:block">
                <DemoTag>Demo copy</DemoTag>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-ink-soft">
                  These terms describe a fictional template. No booking, quote or contract is
                  created anywhere on this site.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-[0.74rem] font-semibold tracking-[0.06em] uppercase text-accent transition-colors hover:text-accent-strong"
                >
                  Contact the demo &rarr;
                </Link>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="space-y-10">
              {document.sections.map((section, index) => {
                const number = String(index + 1).padStart(2, "0");

                if (section.demo) {
                  return (
                    <Reveal key={section.id}>
                      <section
                        id={section.id}
                        className="scroll-mt-28 rounded-3xl border border-accent/30 bg-accent-soft/40 p-6 sm:p-8 backdrop-blur-sm shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="label text-accent-strong">Read this first</p>
                          <DemoTag>Demonstration</DemoTag>
                        </div>
                        <h2 className="display-sm mt-4 max-w-[22ch]">{section.title}</h2>
                        <div className="mt-4 max-w-[64ch] space-y-4 text-[0.96rem] leading-[1.78] text-ink-soft">
                          {section.paragraphs?.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </section>
                    </Reveal>
                  );
                }

                return (
                  <Reveal key={section.id} delay={0.03}>
                    <section
                      id={section.id}
                      className="scroll-mt-28 border-t border-line pt-7 sm:pt-9"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[0.68rem] tabular-nums text-muted font-semibold">{number}</span>
                        <h2 className="display-xs text-ink">{section.title}</h2>
                      </div>
                      {section.paragraphs ? (
                        <div className="mt-4 max-w-[64ch] space-y-4 text-[0.96rem] leading-[1.78] text-ink-soft">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}
                      {section.items ? (
                        <ul className="mt-5 max-w-[60ch] space-y-2.5">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-[0.92rem] leading-[1.7] text-ink-soft"
                            >
                              <span aria-hidden className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.note ? (
                        <p className="mt-5 max-w-[60ch] rounded-r-xl border-l-2 border-accent/60 bg-paper-deep/60 py-2.5 pl-4 text-[0.84rem] leading-relaxed text-muted">
                          {section.note}
                        </p>
                      ) : null}
                    </section>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-14 flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[0.8rem] leading-relaxed text-muted">
                This page is illustrative template copy, not legal advice for your business.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink shadow-sm"
                >
                  Back to top
                  <ArrowUp aria-hidden className="h-3.5 w-3.5" strokeWidth={2} />
                </a>
                <ButtonLink href="/get-a-quote" variant="outline" size="sm">
                  Build an estimate
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
