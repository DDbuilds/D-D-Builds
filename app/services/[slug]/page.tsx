import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { services, getService } from "@/content/services";
import { JsonLd, serviceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          slug: service.slug,
        })}
      />
      <JsonLd data={faqSchema(service.faq)} />

      <Section dark>
        <Reveal>
          <Eyebrow>Service · Toronto &amp; the GTA</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg leading-relaxed">{service.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="bg-brass text-ink font-semibold px-7 py-3.5 text-center hover:bg-paper transition-colors">
              Get a Free Quote
            </Link>
            <Link href="/portfolio" className="border border-paper/30 px-7 py-3.5 text-center hover:border-brass hover:text-brass transition-colors">
              View Our Work
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <div className="space-y-5 text-[17px] leading-relaxed text-ink/80">
                {service.description.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <Eyebrow>Our process</Eyebrow>
              <h2 className="font-display text-2xl md:text-3xl">How the project runs</h2>
              <ol className="mt-7 space-y-0">
                {service.process.map((step, i) => (
                  <li key={step.title} className="relative pl-12 pb-8 last:pb-0">
                    {i < service.process.length - 1 && (
                      <span className="absolute left-[15px] top-8 bottom-0 w-px bg-line" aria-hidden="true" />
                    )}
                    <span className="absolute left-0 top-0 w-8 h-8 border border-brass text-brassDeep font-mono text-xs flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-medium text-lg leading-snug pt-1">{step.title}</p>
                    <p className="mt-1.5 text-ink/65 leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal>
              <div className="bg-mist p-7 md:p-8 border-t-2 border-brass lg:sticky lg:top-24">
                <Eyebrow>Why homeowners choose us</Eyebrow>
                <ul className="mt-2 space-y-5">
                  {service.benefits.map((b) => (
                    <li key={b.title}>
                      <p className="font-medium">{b.title}</p>
                      <p className="mt-1 text-sm text-ink/65 leading-relaxed">{b.text}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 block bg-ink text-paper text-center font-semibold px-6 py-3.5 hover:bg-brassDeep transition-colors"
                >
                  Request a Free Quote
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <LevelRule />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl">
                Common questions about {service.name.toLowerCase()}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={service.faq} />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>Related services</Eyebrow>
        <div className="mt-4 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-paper hover:bg-white transition-colors p-6">
              <p className="font-display text-lg leading-snug">{s.name}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brass">View →</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand
        title={`Planning a ${service.name.toLowerCase()} project?`}
        text="Send a few details and we'll arrange a site visit, answer your questions honestly, and deliver a free itemized quote."
      />
    </>
  );
}
