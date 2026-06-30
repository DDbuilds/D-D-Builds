# D&D Builds — Website

Production-ready marketing website for **D&D Builds**, a full-service renovation
and general contracting company serving Toronto and the GTA.

Built with **Next.js 15 · TypeScript · Tailwind CSS · Framer Motion**.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

---

## ⚠️ Before you launch — replace these

All business details live in **one file**: [`lib/site.ts`](lib/site.ts)

| What | Where | Current value |
|---|---|---|
| Phone number | `lib/site.ts` → `phone` / `phoneHref` | `(416) 555-0148` (placeholder) |
| Email | `lib/site.ts` → `email` | `info@dndbuilds.ca` |
| Domain | `lib/site.ts` → `url` (or `NEXT_PUBLIC_SITE_URL` env var) | `https://www.dndbuilds.ca` |
| Social links | `lib/site.ts` → `social` | placeholders |
| Project photos | `public/projects/` | grey SVG placeholders |
| Testimonials | `content/data.ts` → `testimonials` | realistic placeholders |
| OG share image | `public/og.png` | placeholder |

Change them once in `lib/site.ts` and they update everywhere — header, footer,
contact page, structured data and metadata.

---

## Folder structure

```
dnd-builds/
├── app/
│   ├── layout.tsx              # Fonts, global metadata, LocalBusiness schema
│   ├── page.tsx                # Home
│   ├── globals.css             # Design tokens, signature "level line" divider
│   ├── about/page.tsx
│   ├── contact/page.tsx        # Quote form
│   ├── portfolio/page.tsx      # Filterable gallery + lightbox
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/page.tsx     # 8 individual service pages (static)
│   ├── service-areas/
│   │   ├── page.tsx            # Areas overview
│   │   └── [city]/page.tsx     # 6 local-SEO city pages (static)
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── [slug]/page.tsx     # Markdown-driven posts (static)
│   ├── api/quote/route.ts      # Form endpoint (zod validation + Resend email)
│   ├── sitemap.ts              # Auto-generated /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   └── not-found.tsx           # Branded 404
├── components/                 # Header, Footer, QuoteForm, Gallery, FAQ, etc.
├── content/                    # ✏️  EDIT THIS FOLDER to update the site
│   ├── services.ts             # All 8 services (copy, benefits, process, FAQ)
│   ├── data.ts                 # Projects, testimonials, city pages
│   └── blog/*.md               # Blog posts (markdown + frontmatter)
├── lib/
│   ├── site.ts                 # ⭐ Business info — single source of truth
│   ├── blog.ts                 # Markdown loader
│   └── schema.tsx              # JSON-LD structured data helpers
└── public/projects/            # Project photos
```

---

## Content management (the "CMS")

The site uses a **file-based content system** — every piece of content is a
plain file in the repo. This was chosen deliberately over a hosted CMS:

- **Free forever** — no monthly CMS bill
- **Version-controlled** — every change is a git commit you can undo
- **Instant** — push to GitHub, Vercel deploys in ~60 seconds
- **No second login** to manage or get locked out of

You can edit everything below directly on **github.com** in the browser — no
code editor required. Every save auto-deploys.

### Add project photos

1. Drop the photo into `public/projects/` (e.g. `king-st-kitchen.jpg`)
2. Add an entry to the `projects` array in `content/data.ts`:

```ts
{
  title: "King St Kitchen Remodel",
  category: "Kitchens",            // Flooring | Kitchens | Bathrooms | Basements | Staircases | Commercial
  location: "Toronto",
  image: "/projects/king-st-kitchen.jpg",
  description: "Full gut renovation with quartz waterfall island.",
},
```

The gallery, category filters and lightbox update automatically. Once real
photos replace the SVG placeholders, you can delete the `images` block from
`next.config.mjs`.

### Add a testimonial

Add an entry to `testimonials` in `content/data.ts` — name, location, project
type and quote. Done.

### Add a blog post

Create `content/blog/my-new-post.md`:

```md
---
title: "How Much Does a Deck Cost in Toronto?"
description: "Real 2026 pricing for pressure-treated, cedar and composite decks."
date: "2026-06-15"
author: "D&D Builds"
---

Your post content in markdown...
```

It appears on `/blog` automatically, sorted by date, with SEO metadata and
Article structured data generated for you.

### Update a service

Edit the matching entry in `content/services.ts` — description, benefits,
process steps and FAQ are all plain text fields.

### If you outgrow files

When a non-technical team member needs to publish without GitHub, the clean
upgrade path is [Sanity](https://www.sanity.io) (generous free tier): move
`services.ts` / `data.ts` into Sanity schemas and swap the imports for GROQ
queries. The page components don't need to change.

---

## Quote form & email notifications

The contact form posts to `app/api/quote/route.ts`, which:

1. Validates every field with **zod**
2. Drops spam via a hidden **honeypot** field
3. Emails the lead to you via **[Resend](https://resend.com)** (free tier: 100
   emails/day — plenty for lead gen)
4. With no API key configured, logs leads to the server console instead, so
   local development works with zero setup

### Enable email (5 minutes)

1. Create a free account at [resend.com](https://resend.com)
2. Verify your domain (or use their `onboarding@resend.dev` sender to test)
3. Create an API key
4. Set the environment variables below

---

## Environment variables

Copy `.env.example` to `.env.local` for local dev; add the same variables in
Vercel for production.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | For email | Resend API key. If unset, leads are logged to the console. |
| `QUOTE_INBOX` | Recommended | Where lead emails are delivered (e.g. `info@dndbuilds.ca`) |
| `QUOTE_FROM` | Recommended | Verified sender, e.g. `D&D Builds <quotes@dndbuilds.ca>` |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL, e.g. `https://www.dndbuilds.ca` — used in metadata, sitemap & schema |

---

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
   (Vercel auto-detects Next.js — no configuration needed)
3. Under **Settings → Environment Variables**, add the variables above
4. Click **Deploy**
5. Under **Settings → Domains**, add `dndbuilds.ca` and `www.dndbuilds.ca`,
   then point your DNS at Vercel as instructed

Every future `git push` redeploys automatically.

### After launch

- Submit `https://www.dndbuilds.ca/sitemap.xml` in
  [Google Search Console](https://search.google.com/search-console)
- Create / link your **Google Business Profile** and update the `social.google`
  link in `lib/site.ts` — it feeds the LocalBusiness structured data

---

## SEO — what's built in

- Unique meta titles & descriptions on every page, targeting
  *Home Renovation Toronto*, *Basement Finishing Toronto*, *Flooring
  Installation Toronto*, *Bathroom/Kitchen Renovation Toronto* and
  *General Contractor Toronto*
- Open Graph + Twitter card tags with share image
- **Structured data (JSON-LD):** `GeneralContractor` local business schema
  site-wide, `Service` + `FAQPage` on every service page, `Article` on every
  blog post
- 6 dedicated local-SEO city landing pages with unique, locally-written copy
- Auto-generated `sitemap.xml` and `robots.txt`
- Static generation for every marketing page (fast Core Web Vitals)
