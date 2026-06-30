import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Renovation Services in Toronto & the GTA",
  description:
    "Full home renovations, basement finishing, kitchens, bathrooms, flooring, staircases, popcorn ceiling removal and commercial renovations across Toronto and the GTA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            One company. Every trade your home needs.
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg leading-relaxed">
            From single-room updates to whole-home transformations and commercial
            buildouts, we plan, schedule and deliver the entire project — with our own
            finishing crews and licensed mechanical partners.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-10 md:gap-y-16 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min((i % 2) * 0.08, 0.2)}>
              <article className="border-t-2 border-brass pt-6 h-full flex flex-col">
                <h2 className="font-display text-2xl md:text-3xl">
                  <Link href={`/services/${s.slug}`} className="hover:text-brassDeep transition-colors">
                    {s.name}
                  </Link>
                </h2>
                <p className="mt-3 text-ink/70 leading-relaxed">{s.intro}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.slice(0, 3).map((b) => (
                    <li key={b.title} className="flex gap-3 text-sm text-ink/75">
                      <span className="text-brass mt-0.5" aria-hidden="true">—</span>
                      <span><span className="font-medium text-ink">{b.title}.</span> {b.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-2 mt-auto">
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-brassDeep hover:text-ink"
                  >
                    {s.name} details →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Not sure which service fits?"
        text="Describe the project in plain words — we'll tell you what it involves, what it roughly costs, and whether it needs a permit. No jargon, no pressure."
      />
    </>
  );
}
