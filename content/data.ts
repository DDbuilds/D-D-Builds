// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO — to add a project photo:
//   1. Drop the image into /public/projects/  (e.g. /public/projects/king-st-kitchen-1.jpg)
//   2. Add an entry below with the same path.
// That's it — the gallery, filters and lightbox update automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const projectCategories = [
  "Flooring",
  "Kitchens",
  "Bathrooms",
  "Basements",
  "Staircases",
  "Commercial",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  title: string;
  category: ProjectCategory;
  location: string;
  image: string; // path under /public
  description: string;
};

export const projects: Project[] = [
  {
    title: "Engineered Oak, Whole Main Floor",
    category: "Flooring",
    location: "Oakville",
    image: "/projects/PHOTO-2025-06-11-14-42-27.JPG",
    description:
      "1,400 sq ft of wide-plank engineered oak with flush vents and matching stair nosing.",
  },
  {
    title: "Herringbone LVP Condo Install",
    category: "Flooring",
    location: "Toronto",
    image: "/projects/flooring-2.svg",
    description:
      "Herringbone luxury vinyl plank over levelled concrete in a downtown condo.",
  },
  {
    title: "Open-Concept Kitchen Rebuild",
    category: "Kitchens",
    location: "Mississauga",
    image: "/projects/kitchen-1.svg",
    description:
      "Load-bearing wall removed, 9-ft island added, quartz counters and full-height backsplash.",
  },
  {
    title: "Two-Tone Shaker Kitchen",
    category: "Kitchens",
    location: "Richmond Hill",
    image: "/projects/kitchen-2.svg",
    description:
      "Full gut renovation with two-tone shaker cabinetry, pot lighting and porcelain tile.",
  },
  {
    title: "Spa Ensuite with Curbless Shower",
    category: "Bathrooms",
    location: "Burlington",
    image: "/projects/bathroom-1.svg",
    description:
      "Curbless walk-in shower, heated porcelain floor, freestanding tub and double vanity.",
  },
  {
    title: "Family Bathroom Full Gut",
    category: "Bathrooms",
    location: "Scarborough",
    image: "/projects/bathroom-2.svg",
    description:
      "Complete renovation with large-format tile, custom niche and new ventilation.",
  },
  {
    title: "Legal Basement Suite",
    category: "Basements",
    location: "Kitchener",
    image: "/projects/basement-1.svg",
    description:
      "Self-contained one-bedroom suite with kitchen, egress windows and fire separation.",
  },
  {
    title: "Basement Family Room & Gym",
    category: "Basements",
    location: "Toronto",
    image: "/projects/basement-2.svg",
    description:
      "Warm rec room with feature wall, rubber-floor gym zone and built-in storage.",
  },
  {
    title: "Carpet-to-Oak Staircase Conversion",
    category: "Staircases",
    location: "Oakville",
    image: "/projects/staircase-1.svg",
    description:
      "Solid oak treads stained to match main-floor hardwood, with modern square spindles.",
  },
  {
    title: "Glass Railing Entry Staircase",
    category: "Staircases",
    location: "Mississauga",
    image: "/projects/staircase-2.svg",
    description:
      "Recladding plus frameless glass panels and a continuous oak handrail.",
  },
  {
    title: "Retail Unit Fit-Out",
    category: "Commercial",
    location: "Toronto",
    image: "/projects/commercial-1.svg",
    description:
      "3,200 sq ft retail buildout delivered in six weeks for a fixed opening date.",
  },
  {
    title: "Restaurant Front-of-House Renovation",
    category: "Commercial",
    location: "Barrie",
    image: "/projects/commercial-2.svg",
    description:
      "Phased night-shift renovation that kept the restaurant open through construction.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS — replace these placeholders with real client reviews.
// Keep them specific: project type, city, and one concrete detail convert best.
// ─────────────────────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string;
  name: string;
  detail: string; // project + city
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They quoted line by line, started when they said they would, and the stairs match our floors so well you'd think they were original. Best money we've spent on this house.",
    name: "Priya & Mark T.",
    detail: "Flooring & staircase — Oakville",
  },
  {
    quote:
      "Our basement went from storage dungeon to a legal suite that rents for $1,900 a month. They handled the permits and inspections completely — we didn't chase a single thing.",
    name: "Daniel K.",
    detail: "Legal basement suite — Toronto",
  },
  {
    quote:
      "Three other contractors ghosted us after quoting. D&D answered every message within hours, sent photos at the end of each day, and finished the bathroom two days early.",
    name: "Stephanie R.",
    detail: "Bathroom renovation — Mississauga",
  },
  {
    quote:
      "We lived in the house through a main-floor renovation with two kids and a dog. The dust barriers and daily cleanup honestly saved our sanity.",
    name: "Amrit & Sonia G.",
    detail: "Main floor renovation — Richmond Hill",
  },
  {
    quote:
      "They renovated our unit turnovers across two buildings on a fixed per-unit price and never missed a move-in date. Exactly what a property manager needs.",
    name: "J. Castellano",
    detail: "Property management — Scarborough",
  },
  {
    quote:
      "Popcorn ceilings gone, pot lights in, whole main floor painted — one week, no dust in the vents. The house looks ten years newer.",
    name: "Helen W.",
    detail: "Ceilings & lighting — Burlington",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE AREAS — each city gets a localized landing page at /service-areas/<slug>
// ─────────────────────────────────────────────────────────────────────────────

export type City = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  body: string[];
  popular: string[]; // most-requested services in this city
};

export const cities: City[] = [
  {
    slug: "toronto",
    name: "Toronto",
    metaTitle: "Renovation Contractor Toronto | General Contractor | D&D Builds",
    metaDescription:
      "Trusted renovation contractor in Toronto. Home renovations, basement finishing, kitchens, bathrooms and flooring across every Toronto neighbourhood.",
    headline: "Renovation contractor for Toronto homes — from semis to condos",
    body: [
      "Toronto housing is unlike anywhere else in the country: century semis in Riverdale and the Junction, post-war bungalows in East York, slab-on-grade condos downtown. Each comes with its own quirks — knob-and-tube discoveries, party walls, condo board rules, laneway parking for bins and deliveries. We renovate across all of them, and we plan for the realities of working in the city: tight sites, permit parking and neighbours close enough to hear a hammer.",
      "Our most-requested Toronto projects are basement suites (the city's second-suite framework makes them a strong investment), kitchen and bathroom gut renovations in older homes, and flooring and staircase upgrades that modernize a house before sale.",
    ],
    popular: [
      "Basement apartments & finishing",
      "Kitchen renovations",
      "Bathroom renovations",
      "Hardwood & vinyl flooring",
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    metaTitle: "Renovation Contractor Mississauga | D&D Builds",
    metaDescription:
      "Renovation contractor in Mississauga. Kitchens, bathrooms, basement finishing, flooring and full home renovations across Mississauga and Peel Region.",
    headline: "Renovations across Mississauga's family neighbourhoods",
    body: [
      "From 1970s side-splits in Erin Mills to newer builds in Churchill Meadows, Mississauga homes are at the age where original kitchens, bathrooms and flooring are due for replacement. We help homeowners modernize without moving — open-concept main floors, finished basements for growing families, and the kitchen the house should have had from the start.",
      "We're minutes away, our crews are in Mississauga weekly, and our quotes account for City of Mississauga permit requirements from day one.",
    ],
    popular: [
      "Open-concept main floor renovations",
      "Kitchen renovations",
      "Basement finishing",
      "Staircase recladding",
    ],
  },
  {
    slug: "burlington",
    name: "Burlington",
    metaTitle: "Renovation Contractor Burlington | D&D Builds",
    metaDescription:
      "Renovation contractor in Burlington. Premium kitchens, bathrooms, flooring and whole-home renovations in Burlington and Halton Region.",
    headline: "Premium renovations for Burlington and Halton homes",
    body: [
      "Burlington homeowners invest in their homes for the long term, and the renovation standard here reflects it. We deliver the finish level the area expects — custom ensuites, engineered hardwood throughout, staircases with glass and iron, and whole-home updates that respect what makes established neighbourhoods like Roseland and Aldershot desirable.",
      "Based in neighbouring Oakville, Burlington is home turf for us: fast site visits, easy scheduling and crews who know Halton's permit process well.",
    ],
    popular: [
      "Spa bathrooms & ensuites",
      "Whole-home renovations",
      "Hardwood flooring",
      "Staircases & railings",
    ],
  },
  {
    slug: "kitchener",
    name: "Kitchener",
    metaTitle: "Renovation Contractor Kitchener-Waterloo | D&D Builds",
    metaDescription:
      "Renovation contractor serving Kitchener and Waterloo Region. Basement finishing, kitchens, bathrooms, flooring and investment property renovations.",
    headline: "Serving Kitchener-Waterloo's growing housing market",
    body: [
      "Kitchener-Waterloo's growth has made it one of Ontario's most active renovation markets — investors converting basements into legal duplex units, new owners updating older Victoria Park and Stanley Park homes, and families finishing basements for space they can't yet afford to buy.",
      "We take on Kitchener projects of all sizes and schedule them in efficient blocks, so travelling crews deliver the same daily progress you'd get from a local shop — with GTA-level finishing standards.",
    ],
    popular: [
      "Duplex conversions & basement suites",
      "Investment property renovations",
      "Kitchen & bathroom updates",
      "Flooring installation",
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    metaTitle: "Renovation Contractor Scarborough | D&D Builds",
    metaDescription:
      "Renovation contractor in Scarborough. Basement apartments, kitchens, bathrooms, flooring and multi-unit renovation work across Scarborough.",
    headline: "Renovations and basement suites across Scarborough",
    body: [
      "Scarborough's bungalows and back-splits are perfectly suited to secondary suites — separate side entrances, full-height basements and lot sizes that make legal apartments achievable. It's our single most requested project in the area, alongside kitchen and bathroom renovations in homes being updated for the next generation of the family.",
      "We also support Scarborough landlords and property managers with unit turnovers and multi-unit refresh work on predictable budgets.",
    ],
    popular: [
      "Legal basement apartments",
      "Kitchen renovations",
      "Bathroom renovations",
      "Rental unit turnovers",
    ],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    metaTitle: "Renovation Contractor Richmond Hill | D&D Builds",
    metaDescription:
      "Renovation contractor in Richmond Hill. Premium kitchens, bathrooms, flooring, staircases and whole-home renovations in Richmond Hill and York Region.",
    headline: "High-end renovations for Richmond Hill and York Region",
    body: [
      "Richmond Hill homes are larger, newer and finished to a higher standard — and renovations here need to match. Our York Region projects centre on premium kitchens with stone and custom millwork, hotel-style ensuites, wide-plank hardwood throughout, and staircase showpieces with glass or iron railings.",
      "We coordinate with the Town of Richmond Hill on permits where structural or plumbing changes are involved, and our finishing crews are chosen specifically for detail-heavy, high-spec work.",
    ],
    popular: [
      "Luxury kitchen renovations",
      "Primary ensuites",
      "Wide-plank hardwood flooring",
      "Glass & iron staircases",
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
