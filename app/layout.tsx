import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { JsonLd, localBusinessSchema } from "@/lib/schema";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "D&D Builds | Home Renovations & General Contracting in Toronto & the GTA",
    template: "%s | D&D Builds",
  },
  description: site.description,
  keywords: [
    "home renovation Toronto",
    "basement finishing Toronto",
    "flooring installation Toronto",
    "bathroom renovation Toronto",
    "kitchen renovation Toronto",
    "general contractor Toronto",
    "renovation contractor GTA",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: "D&D Builds | Home Renovations & General Contracting in the GTA",
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "D&D Builds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "D&D Builds | Renovations Across Toronto & the GTA",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
