export const site = {
  name: "D&D Builds",
  legalName: "D&D Builds",
  tagline: "Transforming Homes With Quality Craftsmanship",
  description:
    "D&D Builds is a full-service renovation and general contracting company serving Toronto and the GTA — full home renovations, basements, kitchens, bathrooms, flooring, staircases and commercial projects.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dndbuilds.ca",
  phone: "(647) 831-1092", // TODO: replace with your real number
  phoneHref: "tel:+16478311092",
  email: "ddbuildsnow@gmail.com", // TODO: replace with your real inbox
  address: {
    locality: "Oakville",
    region: "ON",
    country: "CA",
  },
  serviceRadiusKm: 100,
  hours: "Mon–Sat, 8:00 AM – 6:00 PM",
  social: {
    instagram: "https://instagram.com/ddbuildsnow", // TODO: replace
    facebook: "https://facebook.com/dndbuilds", // TODO: replace
    google: "https://g.page/dndbuilds", // TODO: replace with Google Business Profile link
  },
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}
