import type { Metadata } from "next";
import { Section, Eyebrow, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Portfolio | Renovation Projects Across the GTA",
  description:
    "Browse completed D&D Builds projects — flooring, kitchens, bathrooms, basements, staircases and commercial renovations across Toronto and the GTA.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            The work speaks plainly
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 text-lg leading-relaxed">
            A selection of recent projects across Toronto and the GTA. Filter by
            category, and click any project to view it full size.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Gallery />
      </Section>

      <CTABand
        title="Want your project on this page?"
        text="Every project here started with the same step: a free site visit and an itemized quote. Yours can too."
      />
    </>
  );
}
