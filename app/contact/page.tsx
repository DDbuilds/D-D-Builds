import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Get a Free Renovation Quote",
  description:
    "Request a free, itemized renovation quote from D&D Builds. Serving Toronto, Mississauga, Burlington, Kitchener, Scarborough, Richmond Hill and the GTA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            Get your free quote
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg leading-relaxed">
            Tell us about the project. We respond within one business day, arrange a
            site visit at a time that suits you, and deliver an itemized quote — free,
            and yours to keep whoever you hire.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>
          <aside className="lg:col-span-4">
            <div className="bg-mist border-t-2 border-brass p-7 md:p-8 lg:sticky lg:top-24">
              <Eyebrow>Reach us directly</Eyebrow>
              <div className="mt-3 space-y-5 text-[15px]">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Phone</p>
                  <a href={site.phoneHref} className="font-display text-xl hover:text-brassDeep">{site.phone}</a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Email</p>
                  <a href={`mailto:${site.email}`} className="font-display text-xl hover:text-brassDeep break-all">{site.email}</a>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Hours</p>
                  <p>{site.hours}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">Service area</p>
                  <p>
                    Toronto, Mississauga, Burlington, Kitchener, Scarborough, Richmond
                    Hill and surrounding communities within ~100&nbsp;km of downtown
                    Toronto.
                  </p>
                </div>
              </div>
              <div className="mt-7 pt-6 border-t border-line text-sm text-ink/65 leading-relaxed">
                <p className="font-medium text-ink mb-2">What happens after you submit?</p>
                <p>
                  1. We reply within one business day.<br />
                  2. We book a site visit and walk the space with you.<br />
                  3. You receive an itemized quote with a proposed schedule.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
