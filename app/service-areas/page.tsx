import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { cities } from "@/content/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Renovation Contractor in Toronto & the GTA",
  description:
    "D&D Builds serves Toronto, Mississauga, Burlington, Kitchener, Scarborough, Richmond Hill and communities within 100 km of downtown Toronto.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>Service Areas</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            One crew standard, across the GTA
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 leading-relaxed">
            Based in Oakville, we run projects across the Greater Toronto Area
            and communities within roughly {site.serviceRadiusKm} km of downtown
            Toronto. Same project managers, same finishing crews, same standard
            — wherever the job site is.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl max-w-2xl">
            Choose your city
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/service-areas/${c.slug}`}
                className="group block h-full border border-line bg-white p-7 transition-colors hover:border-brass"
              >
                <p className="eyebrow">Ontario</p>
                <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                  {c.metaDescription}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-brassDeep group-hover:underline">
                  Renovations in {c.name} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-2xl text-ink/65 leading-relaxed">
            Not listed? We regularly take on projects in Oakville, Milton,
            Brampton, Vaughan, Markham, Hamilton, Guelph and Cambridge as well.{" "}
            <Link href="/contact" className="text-brassDeep underline">
              Send us your address
            </Link>{" "}
            and we&apos;ll confirm availability within one business day.
          </p>
        </Reveal>
      </Section>

      <LevelRule />
      <CTABand />
    </>
  );
}
