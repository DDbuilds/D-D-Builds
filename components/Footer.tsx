import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { cities } from "@/content/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-5 md:px-8 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-3xl">
              D<span className="text-brass">&amp;</span>D Builds
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/65 max-w-sm">
              Full-service renovations, flooring, basements, kitchens, bathrooms and
              commercial projects — serving Toronto and communities within 100&nbsp;km
              of the city.
            </p>
            <div className="mt-6 space-y-1.5 font-mono text-xs tracking-wide text-paper/70">
              <p>
                <a href={site.phoneHref} className="hover:text-brass">{site.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a>
              </p>
              <p>{site.hours}</p>
              <p>Based in {site.address.locality}, {site.address.region} · Serving the GTA</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-paper/75 hover:text-paper">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Service Areas</p>
            <ul className="space-y-2.5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-areas/${c.slug}`} className="text-sm text-paper/75 hover:text-paper">
                    Renovations in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-paper/75 hover:text-paper">About</Link></li>
              <li><Link href="/portfolio" className="text-sm text-paper/75 hover:text-paper">Portfolio</Link></li>
              <li><Link href="/blog" className="text-sm text-paper/75 hover:text-paper">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-paper/75 hover:text-paper">Contact</Link></li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-block bg-brass text-ink text-sm font-semibold px-5 py-2.5 hover:bg-paper transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="level-line level-line--dark mt-14" aria-hidden="true" />

        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-paper/45 font-mono tracking-wide">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed &amp; insured · WSIB compliant · Serving the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
