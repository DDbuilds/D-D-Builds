import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, Eyebrow, LevelRule } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { services } from "@/content/services";
import { projects, testimonials, cities } from "@/content/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "D&D Builds | Home Renovations & General Contracting in Toronto & the GTA",
  description:
    "Premium home renovations across Toronto and the GTA — basements, kitchens, bathrooms, flooring, staircases and commercial projects. Transparent quotes, quality craftsmanship. Get a free quote.",
  alternates: { canonical: "/" },
};

const whyUs = [
  {
    title: "Itemized, honest quotes",
    text: "Every quote is broken down line by line — labour, materials, allowances — so you can see exactly where your budget goes and compare scope, not just totals.",
  },
  {
    title: "One accountable team",
    text: "Our own crews handle the finishing trades; long-standing licensed partners handle mechanical and electrical. One schedule, one point of contact, one company responsible.",
  },
  {
    title: "Communication you can set a watch by",
    text: "Weekly progress updates, same-day responses, and photos when you're not on site. You'll never wonder what happened at your house today.",
  },
  {
    title: "Craftsmanship in the details",
    text: "Tight scribes, level lines, flush transitions and clean silicone. The last 5% of a renovation is what you look at for the next twenty years — it's the part we obsess over.",
  },
];

const steps = [
  { k: "01", title: "Site visit", text: "We walk the space, measure and listen." },
  { k: "02", title: "Itemized quote", text: "Fixed pricing, line by line, in writing." },
  { k: "03", title: "Build", text: "On schedule, with weekly updates." },
  { k: "04", title: "Walkthrough", text: "Done when you say it's done." },
];

export default function HomePage() {
  const featured = projects.slice(0, 6);
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="mx-auto max-w-site px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-28">
          <Reveal>
            <p className="eyebrow">Renovation &amp; General Contracting · Toronto &amp; the GTA</p>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[64px] leading-[1.05] max-w-4xl">
              Transforming Homes With Quality&nbsp;Craftsmanship
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-paper/70 leading-relaxed">
              Full-service renovations, flooring, basements, kitchens, bathrooms, and
              custom projects across the GTA.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-brass text-ink font-semibold px-8 py-4 text-center hover:bg-paper transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border border-paper/30 px-8 py-4 text-center hover:border-brass hover:text-brass transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 md:mt-24 grid grid-cols-3 gap-6 max-w-2xl border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl md:text-4xl text-brass">100<span className="text-xl">km</span></p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">Service radius</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-brass">3</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">Sectors: res · com · pm</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-brass">1</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">Point of contact</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <div className="md:flex md:items-end md:justify-between gap-10">
            <h2 className="font-display text-3xl md:text-5xl max-w-xl">
              Every trade your renovation needs, under one roof
            </h2>
            <Link
              href="/services"
              className="hidden md:inline-block font-mono text-xs uppercase tracking-[0.2em] text-brassDeep hover:text-ink shrink-0 mb-2"
            >
              All services →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px bg-line border border-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.3)}>
              <Link
                href={`/services/${s.slug}`}
                className="group block bg-paper p-6 md:p-7 h-full hover:bg-white transition-colors"
              >
                <p className="font-display text-xl leading-snug group-hover:text-brassDeep transition-colors">
                  {s.name}
                </p>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.short}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
                  Learn more →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link
          href="/services"
          className="md:hidden mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brassDeep"
        >
          All services →
        </Link>
      </Section>

      <LevelRule />

      {/* ── Why choose us ────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Why D&amp;D Builds</Eyebrow>
              <h2 className="font-display text-3xl md:text-5xl">
                Built like we&apos;d build it for our own family
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed">
                Most renovation horror stories aren&apos;t about bad work — they&apos;re
                about vanished contractors, vague quotes and projects that drift for
                months. We built this company around fixing exactly that.
              </p>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-y-6 gap-x-4">
                {steps.map((s) => (
                  <div key={s.k}>
                    <p className="font-mono text-[11px] tracking-[0.2em] text-brass">{s.k}</p>
                    <p className="mt-1 font-medium">{s.title}</p>
                    <p className="text-sm text-ink/60">{s.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={Math.min(i * 0.06, 0.25)}>
                <div className="bg-mist p-7 h-full border-t-2 border-brass">
                  <p className="font-display text-xl">{w.title}</p>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Featured projects ────────────────────────────────────────────── */}
      <Section dark>
        <Reveal>
          <Eyebrow>Featured projects</Eyebrow>
          <div className="md:flex md:items-end md:justify-between gap-10">
            <h2 className="font-display text-3xl md:text-5xl max-w-xl">Recent work across the GTA</h2>
            <Link
              href="/portfolio"
              className="hidden md:inline-block font-mono text-xs uppercase tracking-[0.2em] text-brass hover:text-paper shrink-0 mb-2"
            >
              Full portfolio →
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 0.05, 0.25)}>
              <Link href="/portfolio" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-coal">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3">
                  <p className="font-medium text-paper leading-snug">{p.title}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass shrink-0">
                    {p.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="md:hidden mt-8 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brass"
        >
          Full portfolio →
        </Link>
      </Section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl">
            The reviews we work for
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={Math.min(i * 0.05, 0.25)}>
              <figure className="bg-white border border-line p-7 h-full flex flex-col">
                <p className="font-mono text-brass text-sm tracking-[0.3em]" aria-label="5 out of 5 stars">★★★★★</p>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/80 flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-line">
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50 mt-0.5">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <LevelRule />

      {/* ── Service areas ────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Where we work</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl">
                Toronto and everywhere within 100&nbsp;km
              </h2>
              <p className="mt-5 text-ink/70 leading-relaxed">
                Based in {site.address.locality}, our crews work across the Greater Toronto
                Area every week — from downtown condos to Kitchener-Waterloo investment
                properties.
              </p>
              <Link
                href="/service-areas"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-brassDeep hover:text-ink"
              >
                All service areas →
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-px bg-line border border-line">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="bg-paper hover:bg-white transition-colors p-5"
              >
                <p className="font-display text-lg">{c.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass mt-1">
                  View services →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Quote form ───────────────────────────────────────────────────── */}
      <Section dark id="quote" className="scroll-mt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Free quote</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl">
                Tell us about your project
              </h2>
              <p className="mt-5 text-paper/70 leading-relaxed">
                Share a few details and we&apos;ll respond within one business day to
                arrange a site visit — then deliver a free, itemized quote with real
                numbers.
              </p>
              <div className="mt-7 space-y-2 font-mono text-xs tracking-wide text-paper/60">
                <p>Prefer to talk? <a href={site.phoneHref} className="text-brass hover:text-paper">{site.phone}</a></p>
                <p>Or email <a href={`mailto:${site.email}`} className="text-brass hover:text-paper">{site.email}</a></p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8 text-ink">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
