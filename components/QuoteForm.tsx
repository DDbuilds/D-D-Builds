"use client";

import { useState } from "react";

const projectTypes = [
  "Full Home Renovation",
  "Basement Finishing",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Flooring Installation",
  "Staircase Renovation",
  "Popcorn Ceiling Removal",
  "Commercial Renovation",
  "Other / Not Sure",
];

const budgets = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full bg-white border border-line px-4 py-3 text-[15px] placeholder:text-ink/35 focus:border-brass focus:outline-none transition-colors";
const labelCls = "block font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60 mb-2";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Client-side validation
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email ?? "")) errs.email = "Enter a valid email address.";
    if (!data.phone?.trim() || data.phone.replace(/\D/g, "").length < 10)
      errs.phone = "Enter a phone number with area code.";
    if (!data.projectType) errs.projectType = "Choose a project type.";
    if (!data.description?.trim() || data.description.trim().length < 10)
      errs.description = "Tell us a little about the project (a sentence or two is plenty).";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-line p-8 md:p-10 text-center">
        <p className="font-display text-2xl">Quote request received</p>
        <p className="mt-3 text-ink/70 leading-relaxed">
          Thanks — your request is in. We&apos;ll review the details and get back to you
          within one business day to arrange a site visit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-brassDeep underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white border border-line p-6 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="q-name" className={labelCls}>Name *</label>
          <input id="q-name" name="name" autoComplete="name" className={inputCls} placeholder="Jane Doe" />
          {errors.name && <p className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="q-email" className={labelCls}>Email *</label>
          <input id="q-email" name="email" type="email" autoComplete="email" className={inputCls} placeholder="jane@example.com" />
          {errors.email && <p className="mt-1.5 text-sm text-red-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="q-phone" className={labelCls}>Phone *</label>
          <input id="q-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="(416) 555-0123" />
          {errors.phone && <p className="mt-1.5 text-sm text-red-700">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="q-address" className={labelCls}>Property address</label>
          <input id="q-address" name="address" autoComplete="street-address" className={inputCls} placeholder="123 Main St, Toronto" />
        </div>
        <div>
          <label htmlFor="q-type" className={labelCls}>Project type *</label>
          <select id="q-type" name="projectType" className={inputCls} defaultValue="">
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && <p className="mt-1.5 text-sm text-red-700">{errors.projectType}</p>}
        </div>
        <div>
          <label htmlFor="q-budget" className={labelCls}>Estimated budget</label>
          <select id="q-budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="q-area" className={labelCls}>Total area (sq ft)</label>
          <input id="q-area" name="area" type="number" min="0" className={inputCls} placeholder="e.g. 800" />
        </div>
        <div>
          <label htmlFor="q-start" className={labelCls}>Preferred start date</label>
          <input id="q-start" name="startDate" type="date" className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="q-desc" className={labelCls}>Project description *</label>
          <textarea
            id="q-desc"
            name="description"
            rows={5}
            className={inputCls}
            placeholder="Tell us about the space and what you'd like to change…"
          />
          {errors.description && <p className="mt-1.5 text-sm text-red-700">{errors.description}</p>}
        </div>
        {/* Honeypot — hidden from people, catches bots */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-ink text-paper font-semibold px-8 py-3.5 hover:bg-brassDeep transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request My Free Quote"}
        </button>
        <p className="text-xs text-ink/50">
          No obligation. We respond within one business day.
        </p>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-700">
          The request couldn&apos;t be sent. Check your connection and try again, or email us directly.
        </p>
      )}
    </form>
  );
}
