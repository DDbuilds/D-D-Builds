// ─────────────────────────────────────────────────────────────────────────────
// SERVICES — edit this file to update service pages. No code changes needed.
// Each entry automatically generates a page at /services/<slug>.
// ─────────────────────────────────────────────────────────────────────────────

export type Service = {
  slug: string;
  name: string;
  short: string; // one-liner for cards
  metaTitle: string;
  metaDescription: string;
  intro: string; // opening paragraph on the service page
  description: string[]; // body paragraphs
  benefits: { title: string; text: string }[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "basement-finishing",
    name: "Basement Finishing",
    short:
      "Turn unused square footage into rental suites, family rooms, gyms and home offices — built dry, warm and to code.",
    metaTitle: "Basement Finishing Toronto | Basement Renovations | D&D Builds",
    metaDescription:
      "Basement finishing in Toronto and the GTA. Legal basement apartments, rec rooms, home gyms and offices — insulated, waterproofed and built to code. Free quotes.",
    intro:
      "Your basement is the cheapest square footage you'll ever add to your home. We turn cold, unfinished space into rooms your family actually uses — or a legal secondary suite that pays the mortgage.",
    description: [
      "Basements in Toronto-area homes come with specific challenges: moisture, low headroom around ductwork, older wiring, and code requirements for egress, fire separation and ceiling height — especially if you're building a rental unit. We've finished basements across the GTA and design around these constraints from day one instead of discovering them mid-project.",
      "From a warm, well-lit family room to a fully self-contained apartment with kitchen and separate entrance, we handle insulation, framing, subfloor systems, drywall, flooring, bathrooms, lighting and trim as one continuous project.",
    ],
    benefits: [
      {
        title: "Built for below grade",
        text: "Proper vapour barriers, subfloor systems and insulation so the space stays warm and dry year-round.",
      },
      {
        title: "Legal suite expertise",
        text: "Egress windows, fire separation, sound insulation and ceiling heights handled to Ontario second-suite requirements.",
      },
      {
        title: "Smart layouts for low ceilings",
        text: "Bulkheads, lighting plans and door placements that make a basement feel like a main floor.",
      },
      {
        title: "Real ROI",
        text: "A finished basement typically returns most of its cost in resale value — and a legal suite generates income immediately.",
      },
    ],
    process: [
      {
        title: "Site assessment",
        text: "We check for moisture, measure headroom, locate mechanicals, and confirm what's possible — including whether a legal suite is feasible.",
      },
      {
        title: "Layout & quote",
        text: "You get a proposed floor plan and a line-item quote covering everything from framing to final paint.",
      },
      {
        title: "Rough-in",
        text: "Framing, electrical, plumbing and HVAC rough-ins, with inspections booked where permits apply.",
      },
      {
        title: "Finishing",
        text: "Insulation, drywall, flooring, bathroom and kitchen installs, doors, trim and paint.",
      },
      {
        title: "Final walkthrough",
        text: "We test everything together and hand over a finished, ready-to-furnish space.",
      },
    ],
    faq: [
      {
        q: "How much does it cost to finish a basement in Toronto?",
        a: "Most standard basement finishes land between $45–$75 per square foot depending on layout and finishes. Adding a bathroom or a full legal suite increases the scope — we quote each project line by line so you can see exactly where the budget goes.",
      },
      {
        q: "Can you build a legal basement apartment?",
        a: "Yes. We build second suites to Ontario Building Code and municipal requirements — egress, fire-rated separation, sound attenuation, and dedicated heating where required — and coordinate the permit process.",
      },
      {
        q: "What about moisture problems?",
        a: "We assess moisture before quoting. If there's active water entry we address the source first — finishing over a wet basement is money thrown away, and we'll tell you that honestly.",
      },
      {
        q: "How long does a basement finish take?",
        a: "A typical rec-room basement takes 4–7 weeks. A full legal suite with kitchen and bathroom usually runs 8–12 weeks including inspections.",
      },
    ],
  },
  {
    slug: "flooring-installation",
    name: "Flooring Installation",
    short:
      "Hardwood, engineered, laminate, vinyl plank and tile — precision installation by crews who do floors every single day.",
    metaTitle: "Flooring Installation Toronto | Hardwood, Vinyl & Tile | D&D Builds",
    metaDescription:
      "Professional flooring installation in Toronto and the GTA. Hardwood, engineered wood, laminate, luxury vinyl plank and tile, installed flat, tight and square.",
    intro:
      "Flooring is where our company started, and it's still the trade we're known for. Flat, tight, square installations with clean transitions — the difference you can see from the doorway and feel underfoot.",
    description: [
      "We install solid hardwood, engineered wood, laminate, luxury vinyl plank and tile across the GTA, for single rooms through whole houses and multi-unit projects. Every job starts with subfloor prep, because a perfect floor over a bad subfloor doesn't stay perfect: we level, screw down squeaks, and moisture-test before the first board goes down.",
      "Stair-matching, flush vents, undercut door jambs, and tight scribes along stone and rail posts are standard on our installs — the details that separate a professional floor from a weekend job.",
    ],
    benefits: [
      {
        title: "Subfloor done right",
        text: "Levelling, squeak elimination and moisture testing before installation — the step most installers skip.",
      },
      {
        title: "All major materials",
        text: "Hardwood, engineered, laminate, LVP/LVT and tile, with honest advice on what suits Canadian seasons and your rooms.",
      },
      {
        title: "Seamless transitions",
        text: "Stair nosing, flush-mount vents and clean thresholds matched to your floor, not generic strips.",
      },
      {
        title: "Supply or install-only",
        text: "Bring your own materials or let us source contractor-priced product from our suppliers.",
      },
    ],
    process: [
      {
        title: "Measure & material advice",
        text: "We measure the space, check the subfloor, and help you choose material that fits the room, the budget and the wear it will see.",
      },
      {
        title: "Quote",
        text: "Square-foot pricing with prep, transitions and disposal itemized — no vague allowances.",
      },
      {
        title: "Prep",
        text: "Removal of old flooring, subfloor levelling and repair, and acclimatization of wood products on site.",
      },
      {
        title: "Installation",
        text: "Precision install with manufacturer-specified methods so your warranty stays valid.",
      },
      {
        title: "Detail & cleanup",
        text: "Trim, transitions and vents installed, site vacuumed and ready to live on.",
      },
    ],
    faq: [
      {
        q: "What flooring is best for Toronto homes?",
        a: "Engineered hardwood and luxury vinyl plank handle our humidity swings best. Solid hardwood is beautiful on upper floors; for basements and kitchens we usually recommend LVP or tile. We'll give you straight advice for each room.",
      },
      {
        q: "Do you remove old flooring?",
        a: "Yes — removal and disposal of carpet, laminate, hardwood or tile is itemized in your quote so you can see the cost clearly.",
      },
      {
        q: "Can you match new flooring to my stairs?",
        a: "Yes. We build matching stair treads, risers and nosing — or full staircase recladding — so the floor flows through the whole home.",
      },
      {
        q: "How soon can you start?",
        a: "Single-room and small jobs can often be scheduled within 1–2 weeks. Whole-home installs are booked 2–4 weeks out depending on season.",
      },
    ],
  },
  {
    slug: "staircase-renovations",
    name: "Staircase Renovations",
    short:
      "Recladding, new treads, modern railings and glass — the upgrade that transforms an entryway in days.",
    metaTitle: "Staircase Renovation Toronto | Stair Recladding & Railings | D&D Builds",
    metaDescription:
      "Staircase renovations in Toronto and the GTA. Oak tread recladding, carpet-to-hardwood conversions, modern spindles, handrails and glass railings.",
    intro:
      "Your staircase is the first thing guests see and the hardest-working structure in the house. Recladding worn or carpeted stairs in solid hardwood — with modern railings to match — delivers more visual impact per dollar than almost any renovation.",
    description: [
      "We specialize in converting carpeted and builder-grade stairs to solid oak and maple: new treads and risers over the existing structure, stained or finished to match your flooring exactly. Squeaks are fixed during recladding, nosings are profiled to code, and stringers and skirts are finished clean.",
      "On the railing side we install modern square spindles, wrought iron, horizontal bar and glass panel systems, along with new posts and continuous handrails — all built to Ontario Building Code heights and spacing.",
    ],
    benefits: [
      {
        title: "Massive visual impact",
        text: "An entry staircase upgrade changes how the whole main floor feels — and photographs — for resale.",
      },
      {
        title: "Done in days",
        text: "Most recladding and railing projects are complete in 2–5 days with minimal disruption.",
      },
      {
        title: "Perfect floor matching",
        text: "Treads stained and finished to match your hardwood so stairs and floors read as one design.",
      },
      {
        title: "Code-compliant builds",
        text: "Rail heights, spindle spacing and nosing profiles built to OBC so inspections and home sales go smoothly.",
      },
    ],
    process: [
      {
        title: "Assessment",
        text: "We inspect the existing structure, measure every tread, and discuss styles for treads, risers and railings.",
      },
      {
        title: "Quote & material match",
        text: "Fixed pricing with stain samples prepared against your existing flooring.",
      },
      {
        title: "Shop preparation",
        text: "Treads and components cut, sanded and pre-finished for durability before installation day.",
      },
      {
        title: "Installation",
        text: "Old surfaces removed, structure tightened, new treads, risers, posts and railings installed.",
      },
      {
        title: "Final detailing",
        text: "Caulking, touch-ups and a hardware check — then the stairs are ready for traffic.",
      },
    ],
    faq: [
      {
        q: "Can you remove carpet and convert stairs to hardwood?",
        a: "Yes — carpet-to-hardwood conversion is our most common staircase project. We remove carpet, repair the structure, and clad each step in solid hardwood treads and clean risers.",
      },
      {
        q: "Will the stairs match my floors?",
        a: "We custom-stain treads against samples of your actual flooring and won't proceed until you've approved the match.",
      },
      {
        q: "How long does a staircase renovation take?",
        a: "A standard 12–14 step staircase takes 2–3 days for recladding; add 1–2 days for a full railing replacement.",
      },
      {
        q: "Do you do glass and iron railings?",
        a: "Yes — glass panel systems, wrought iron, and modern wood-and-metal combinations, all installed to code.",
      },
    ],
  },
  {
    slug: "popcorn-ceiling-removal",
    name: "Popcorn Ceiling Removal",
    short:
      "Dust-controlled removal and Level 5 smooth finishing that instantly modernizes any room.",
    metaTitle: "Popcorn Ceiling Removal Toronto | Smooth Ceilings | D&D Builds",
    metaDescription:
      "Popcorn ceiling removal in Toronto and the GTA. Dust-controlled stucco removal, smooth Level 5 finishing, pot light installation and full repainting.",
    intro:
      "Nothing dates a home like a popcorn ceiling. Removing it is messy, technical work — but with full containment, proper skim coating and fresh paint, the result makes every room look taller, brighter and a decade newer.",
    description: [
      "Our removal process protects your home first: floors, walls and fixtures are sealed in plastic, vents are masked, and the texture is scraped wet to control dust. We then skim-coat the entire ceiling to a smooth Level 5 finish, sand, prime and paint — a true flat ceiling, not a scraped one with shadows and gouges.",
      "It's also the perfect moment to add pot lights: with the ceiling already open and being refinished, wiring and trimming LED pot lights costs a fraction of doing it later. Many clients pair removal with new lighting throughout the main floor.",
    ],
    benefits: [
      {
        title: "Full dust containment",
        text: "Sealed rooms, masked vents and wet-scrape methods keep the mess inside the work zone — and out of your furnace.",
      },
      {
        title: "Level 5 smooth finish",
        text: "Complete skim coat and sand, not just a scrape, so raking light reveals a flat ceiling rather than repairs.",
      },
      {
        title: "Perfect time for pot lights",
        text: "Add modern recessed lighting while the ceiling is being refinished and save on doing it separately.",
      },
      {
        title: "Room-by-room or whole home",
        text: "From one bedroom to every ceiling in the house, scheduled to minimize disruption.",
      },
    ],
    process: [
      {
        title: "Assessment",
        text: "We confirm ceiling condition and whether the texture is painted (which changes the removal method), and scope any lighting additions.",
      },
      {
        title: "Protection",
        text: "Floors, walls, fixtures and openings sealed with plastic and tape before any scraping starts.",
      },
      {
        title: "Removal",
        text: "Texture is wet-scraped down to the drywall; damaged seams and screw pops are repaired.",
      },
      {
        title: "Skim & sand",
        text: "Full skim coat applied and sanded to a Level 5 smooth finish.",
      },
      {
        title: "Prime & paint",
        text: "Stain-blocking primer and two coats of ceiling paint; pot lights trimmed and tested if added.",
      },
    ],
    faq: [
      {
        q: "How much does popcorn ceiling removal cost?",
        a: "In the GTA, expect roughly $3–$7 per square foot including skim coating and paint, depending on ceiling condition and whether the texture has been painted over. We quote per room with everything included.",
      },
      {
        q: "Is the dust really controlled?",
        a: "Yes. We seal each room completely, mask HVAC vents, and scrape the texture wet so it comes down in sheets instead of dust. Daily cleanup is part of the job.",
      },
      {
        q: "What about asbestos?",
        a: "Texture applied before 1990 can contain asbestos. We recommend lab testing for older ceilings before work begins and can direct you to accredited testing — safety isn't a corner we cut.",
      },
      {
        q: "How long does it take?",
        a: "A typical room takes 2–3 days including skim, sand, prime and paint. A whole main floor usually runs about a week.",
      },
    ],
  },
  {
    slug: "commercial-renovations",
    name: "Commercial Renovations",
    short:
      "Retail, office and food-service buildouts delivered on schedule — with off-hours work to protect your operations.",
    metaTitle: "Commercial Renovation Toronto | Commercial Contractors | D&D Builds",
    metaDescription:
      "Commercial renovations in Toronto and the GTA. Retail fit-outs, office renovations, restaurant buildouts and property management work, delivered on deadline.",
    intro:
      "In commercial work, the schedule is the product. Every extra week of construction is a week of lost revenue — so we plan backwards from your opening date and build to hit it.",
    description: [
      "D&D Builds delivers fit-outs and renovations for retail units, offices, restaurants and multi-unit residential properties across the GTA. We're comfortable in occupied buildings: night and weekend work, phased construction, and coordination with property managers, landlords and base-building requirements are standard parts of how we operate.",
      "Our commercial scope covers demolition, framing and drywall, flooring at scale, commercial millwork installation, ceilings, paint, and coordination of licensed mechanical, electrical and fire-protection trades — with the documentation and insurance certificates your landlord will ask for before we step on site.",
    ],
    benefits: [
      {
        title: "Deadline-driven delivery",
        text: "Schedules built backwards from your opening or lease date, with long-lead items ordered first.",
      },
      {
        title: "Occupied-space experience",
        text: "Off-hours and phased work that keeps your business — or your tenants — running during construction.",
      },
      {
        title: "Property management ready",
        text: "Unit turnovers, common-area refreshes and make-readies handled on repeatable budgets and timelines.",
      },
      {
        title: "Full documentation",
        text: "COIs, WSIB clearance and permit paperwork provided up front, not chased afterwards.",
      },
    ],
    process: [
      {
        title: "Site review & scope",
        text: "We walk the unit, review landlord requirements and drawings, and define scope and constraints.",
      },
      {
        title: "Quote & schedule",
        text: "Itemized pricing with a construction schedule mapped to your opening date.",
      },
      {
        title: "Permits & mobilization",
        text: "Building permits, landlord approvals and insurance certificates secured; materials ordered.",
      },
      {
        title: "Construction",
        text: "Phased or off-hours buildout with weekly reporting to you and your property manager.",
      },
      {
        title: "Turnover",
        text: "Deficiency list closed, space cleaned, and documentation handed over for occupancy.",
      },
    ],
    faq: [
      {
        q: "Do you work nights and weekends?",
        a: "Yes — for occupied retail, office and residential buildings we routinely schedule noisy work off-hours and coordinate quiet trades during business hours.",
      },
      {
        q: "Can you work with our property manager or landlord?",
        a: "Absolutely. We provide insurance certificates and WSIB clearance up front, follow base-building rules, and report progress in whatever format your PM requires.",
      },
      {
        q: "What size projects do you take on?",
        a: "From single-unit turnovers and small office refreshes to multi-thousand-square-foot retail and restaurant fit-outs.",
      },
      {
        q: "Are you insured?",
        a: "Yes — full commercial general liability coverage and WSIB clearance, with certificates issued to your landlord before mobilization.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
