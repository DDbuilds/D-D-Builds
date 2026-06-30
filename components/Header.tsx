"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper border-b border-white/10">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-baseline gap-2 group" aria-label="D&D Builds home">
            <span className="font-display text-2xl tracking-tight">
              D<span className="text-brass">&amp;</span>D
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/70 group-hover:text-brass transition-colors">
              Builds
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  pathname.startsWith(item.href)
                    ? "text-brass"
                    : "text-paper/80 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="font-mono text-xs tracking-wider text-paper/70 hover:text-brass transition-colors"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="bg-brass text-ink text-sm font-semibold px-5 py-2.5 hover:bg-paper transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="block w-6 space-y-1.5">
              <span
                className={`block h-px bg-paper transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
              />
              <span className={`block h-px bg-paper ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-px bg-paper transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 bg-ink" aria-label="Mobile">
          <div className="px-5 py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-paper/90 border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="bg-brass text-ink text-center font-semibold px-5 py-3"
              >
                Get a Free Quote
              </Link>
              <a href={site.phoneHref} className="text-center font-mono text-sm text-paper/70 py-2">
                Call {site.phone}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
