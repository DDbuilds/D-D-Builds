import { site, absoluteUrl } from "@/lib/site";
import { cities } from "@/content/data";

// LocalBusiness / GeneralContractor schema — rendered in the root layout
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": absoluteUrl("/#business"),
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl("/og.png"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, ON`,
    })),
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: [site.social.instagram, site.social.facebook, site.social.google],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(`/services/${opts.slug}`),
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "State", name: "Ontario" },
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": absoluteUrl("/#business") },
    mainEntityOfPage: absoluteUrl(`/blog/${opts.slug}`),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
