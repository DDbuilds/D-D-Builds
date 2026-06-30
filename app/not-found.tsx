import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Section dark className="min-h-[60vh] flex items-center">
      <div>
        <Eyebrow>404 — Page not found</Eyebrow>
        <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-[1.08]">
          This page didn&apos;t pass inspection
        </h1>
        <p className="mt-6 max-w-xl text-paper/70 leading-relaxed">
          The page you&apos;re looking for has been moved or doesn&apos;t exist.
          Let&apos;s get you back to solid ground.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/"
            className="bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-brass hover:text-brass"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </Section>
  );
}
