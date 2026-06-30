"use client";

import { useState } from "react";

export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-start justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-[17px] leading-snug">{item.q}</span>
              <span
                className={`font-mono text-brass text-lg leading-none mt-0.5 transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 pr-10 text-ink/70 leading-relaxed">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
