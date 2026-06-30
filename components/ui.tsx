import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Section({
  children,
  className = "",
  dark = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`${dark ? "bg-ink text-paper" : ""} ${className}`}>
      <div className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

export function LevelRule({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mx-auto max-w-site px-5 md:px-8" aria-hidden="true">
      <div className={`level-line ${dark ? "level-line--dark" : ""}`} />
    </div>
  );
}

/** Reusable bottom-of-page conversion band. */
export function CTABand({
  title = "Ready to start your project?",
  text = "Tell us what you're planning and we'll respond within one business day with next steps — and a free, itemized quote after a site visit.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-5 md:px-8 py-16 md:py-20">
        <div className="md:flex md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
            <p className="mt-4 text-paper/70 leading-relaxed">{text}</p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-brass text-ink font-semibold px-7 py-3.5 text-center hover:bg-paper transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              className="border border-paper/30 text-paper font-mono text-sm tracking-wider px-7 py-3.5 text-center hover:border-brass hover:text-brass transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
