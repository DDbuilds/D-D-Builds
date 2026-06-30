import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { cities, getCity } from "@/content/data";
import { services } from "@/content/services";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: { title: city.metaTitle, description: city.metaDescription },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const featured = services.slice(0, 6);

  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>Service Area · {city.name}, Ontario</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            {city.headline}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-brass hover:text-brass"
            >
              View Our Work
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <Eyebrow>Renovating in {city.name}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl">
              Local knowledge, premium finish
            </h2>
            <div className="mt-6 space-y-5 max-w-2xl text-ink/75 leading-relaxed">
              {city.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="border border-line bg-white p-7 lg:sticky lg:top-28">
              <p className="eyebrow">Most requested in {city.name}</p>
              <ul className="mt-4 space-y-3">
                {city.popular.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink/80"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 block bg-ink px-6 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-coal"
              >
                Request a quote in {city.name}
              </Link>
            </aside>
          </Reveal>
        </div>
      </Section>

      <LevelRule />

      <Section>
        <Reveal>
          <Eyebrow>Services in {city.name}</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl">
            What we build in {city.name}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full border border-line bg-white p-7 transition-colors hover:border-brass"
              >
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                  {s.short}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-brassDeep group-hover:underline">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title={`Planning a renovation in ${city.name}?`}
        text={`Tell us about your ${city.name} project and we'll respond within one business day — with a free, itemized quote after a site visit.`}
      />
    </>
  );
}
