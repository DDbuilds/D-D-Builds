import type { Metadata } from "next";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Craftsmanship, Reliability & Straight Answers",
  description:
    "D&D Builds is a GTA renovation company built on craftsmanship, reliable scheduling and transparent communication. Learn how we work and what we stand for.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Craftsmanship",
    text: "The last 5% of a renovation — the scribes, the silicone, the level lines — is what you live with for twenty years. We staff finishing crews who treat that 5% as the whole point.",
  },
  {
    title: "Reliability",
    text: "We show up when we said we would, in the order we said we would. Schedules are written down, materials are ordered before demolition, and 'we'll be there Tuesday' means Tuesday.",
  },
  {
    title: "Communication",
    text: "Weekly written updates, same-day responses, and photos when you can't be on site. Silence is where renovation anxiety lives — so we never leave you in it.",
  },
  {
    title: "Honesty",
    text: "If a wall shouldn't come down, if finishing a wet basement would waste your money, if a cheaper material will perform just as well — we say so, even when it costs us scope.",
  },
  {
    title: "Attention to detail",
    text: "Flush vents. Tight mitres. Stair treads stained to match the floor exactly. Details aren't extras on our jobs; they're the standard the quote was written around.",
  },
  {
    title: "Respect for your home",
    text: "Dust barriers, floor protection, masked vents and a daily cleanup. You're living your life around our work — the least we can do is keep the site civilized.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>About D&amp;D Builds</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            A renovation company built around the things that usually go wrong
          </h1>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <div className="space-y-5 text-[17px] leading-relaxed text-ink/80">
                <p>
                  D&amp;D Builds started the way most good trades companies do: on the
                  tools. Our roots are in finishing work — flooring, staircases, tile
                  and bathrooms — the trades where there&apos;s nowhere to hide, because
                  every cut and every line is visible the moment you walk in the door.
                </p>
                <p>
                  Working as the finishing crew on other contractors&apos; projects, we
                  saw the same pattern over and over. The work itself was rarely the
                  problem. The problems were everything around it: quotes that hid more
                  than they showed, schedules nobody believed, homeowners left guessing
                  for days about what was happening in their own house.
                </p>
                <p>
                  So when we grew from a finishing crew into a full-service renovation
                  company, we built it around a simple idea: <em>run the project the way
                  homeowners wish projects were run.</em> Itemized quotes you can actually
                  read. A written schedule. A weekly update whether or not anything
                  dramatic happened. And finishing-trade standards applied to every
                  stage of the job — because a company that obsesses over a stair
                  nosing isn&apos;t going to get sloppy behind your drywall.
                </p>
                <p>
                  Today we deliver full home renovations, basements, kitchens,
                  bathrooms, flooring and commercial projects across Toronto and
                  communities within roughly 100&nbsp;km of the city — for homeowners,
                  businesses and property managers. The company is bigger; the standard
                  hasn&apos;t moved.
                </p>
              </div>
            </Reveal>
          </div>
          <aside className="lg:col-span-5">
            <Reveal>
              <div className="bg-mist border-t-2 border-brass p-7 md:p-8 lg:sticky lg:top-24">
                <Eyebrow>How we work</Eyebrow>
                <ul className="mt-2 space-y-4 text-[15px] text-ink/75 leading-relaxed">
                  <li><span className="font-medium text-ink">In-house finishing crews</span> for flooring, stairs, tile, bathrooms, drywall and paint.</li>
                  <li><span className="font-medium text-ink">Licensed partners</span> for electrical, plumbing and HVAC — the same trusted trades on every job.</li>
                  <li><span className="font-medium text-ink">Itemized quotes</span> with written change orders. No verbal extras, ever.</li>
                  <li><span className="font-medium text-ink">Fully insured</span> with commercial general liability and WSIB clearance, available in writing.</li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <LevelRule />

      <Section>
        <Reveal>
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl">Company values</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="bg-white border border-line p-7 h-full">
                <p className="font-display text-xl">{v.title}</p>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Work with a team that runs projects properly"
        text="The best way to evaluate a contractor is to ask hard questions and watch how they answer. Try us."
      />
    </>
  );
}
