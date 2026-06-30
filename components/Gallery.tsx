"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects, projectCategories, type Project } from "@/content/data";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (!active) return;
      const idx = filtered.findIndex((p) => p.title === active.title);
      if (e.key === "ArrowRight") setActive(filtered[(idx + 1) % filtered.length]);
      if (e.key === "ArrowLeft")
        setActive(filtered[(idx - 1 + filtered.length) % filtered.length]);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered, close]);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {["All", ...projectCategories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-sm border transition-colors ${
              filter === cat
                ? "bg-ink text-paper border-ink"
                : "border-line text-ink/70 hover:border-ink/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.button
            key={p.title}
            layout={!reduce}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            onClick={() => setActive(p)}
            className="group text-left"
            aria-label={`View ${p.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <p className="font-medium leading-snug">{p.title}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass shrink-0">
                {p.location}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              className="max-w-4xl w-full"
              initial={reduce ? false : { scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] bg-coal">
                <Image src={active.image} alt={active.title} fill className="object-contain" sizes="90vw" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-6 text-paper">
                <div>
                  <p className="font-display text-xl">{active.title}</p>
                  <p className="mt-1 text-sm text-paper/65">{active.description}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brass shrink-0 mt-1.5">
                  {active.category} · {active.location}
                </p>
              </div>
              <button
                onClick={close}
                className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-paper/60 hover:text-brass"
              >
                Close ✕ &nbsp;·&nbsp; ← → to browse
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
