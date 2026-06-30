import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, Eyebrow, LevelRule, CTABand } from "@/components/ui";
import { getAllPosts, getPost } from "@/lib/blog";
import { JsonLd, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.description,
          date: post.date,
          slug: post.slug,
        })}
      />

      <Section dark>
        <Eyebrow>
          Blog · {formatDate(post.date)} · {post.author}
        </Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl max-w-3xl leading-[1.1]">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-paper/70 leading-relaxed">
          {post.description}
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article
            className="prose-dnd max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <aside className="space-y-5 lg:sticky lg:top-28 self-start">
            <div className="border border-line bg-white p-7">
              <p className="eyebrow">Free quote</p>
              <h2 className="mt-2 font-display text-xl">
                Want numbers for your home?
              </h2>
              <p className="mt-3 text-sm text-ink/65 leading-relaxed">
                Guides give ranges. A site visit gives you an itemized quote
                for your exact house — free, no pressure.
              </p>
              <Link
                href="/contact"
                className="mt-5 block bg-ink px-6 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:bg-coal"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="border border-line bg-white p-7">
              <p className="eyebrow">More guides</p>
              <ul className="mt-3 space-y-3">
                {getAllPosts()
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 4)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-sm font-medium text-brassDeep hover:underline"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <LevelRule />
      <CTABand />
    </>
  );
}
