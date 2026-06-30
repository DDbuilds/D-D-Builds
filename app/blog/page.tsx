import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Renovation Blog | Costs, Guides & Permits for GTA Homeowners",
  description:
    "Practical renovation guides for Toronto and GTA homeowners — basement costs, flooring options, kitchen and bathroom planning, and Ontario permits.",
  alternates: { canonical: "/blog" },
};

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Section dark>
        <Reveal>
          <Eyebrow>The D&amp;D Builds Blog</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
            Renovation advice, written from the job site
          </h1>
          <p className="mt-6 max-w-2xl text-paper/70 leading-relaxed">
            Honest numbers, realistic timelines and the details Toronto and GTA
            homeowners actually ask us about — no fluff.
          </p>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full border border-line bg-white p-7 transition-colors hover:border-brass"
              >
                <p className="eyebrow">{formatDate(post.date)}</p>
                <h2 className="mt-3 font-display text-2xl leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                  {post.description}
                </p>
                <span className="mt-5 inline-block text-sm font-medium text-brassDeep group-hover:underline">
                  Read the guide →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <LevelRule />
      <CTABand
        title="Have a project in mind?"
        text="Reading is a good start — a site visit is better. Tell us what you're planning and we'll give you real numbers for your home."
      />
    </>
  );
}
