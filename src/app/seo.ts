// Lightweight client-side SEO: per-route <title> + meta description + canonical
// + Open Graph/Twitter overrides. This SPA has no SSR, so social crawlers (which
// do not run JS) read the STATIC tags in index.html — those cover the brand for
// any shared link. This module additionally keeps the browser tab, accessibility
// tree, and JS-rendering crawlers (e.g. Googlebot) correct per page. Per-page
// social previews would require prerendering/SSR — a later enhancement.

export const SITE = {
  name: "Utkrisht Alliance",
  url: "https://utkrishtalliance.com",
  defaultTitle: "Utkrisht Alliance — Curating Elite Global Experiences",
  defaultDescription:
    "Utkrisht Alliance — a premier media & events company connecting luxury brands with high-value audiences worldwide. Canada-based, operating globally.",
  ogImage: "https://utkrishtalliance.com/og-image.jpg",
};

type Meta = { title: string; description: string };

// Keyed by exact pathname. Titles follow "<Page> — Utkrisht Alliance".
const PAGE_META: Record<string, Meta> = {
  "/": {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  "/about": {
    title: "About — Utkrisht Alliance",
    description:
      "The vision behind Utkrisht Alliance — a new luxury media & events house built for high-value South Asian, NRI and global audiences.",
  },
  "/services": {
    title: "Services — Utkrisht Alliance",
    description:
      "Brand strategy, experiential events, exhibitions, media production, PR and more — end-to-end solutions for luxury brands.",
  },
  "/events": {
    title: "Events — Utkrisht Alliance",
    description:
      "Our founding season: a curated calendar of luxury events across fashion, real estate, spirits, art and private networking.",
  },
  "/partner": {
    title: "Partner With Us — Utkrisht Alliance",
    description:
      "Founding-season partnership and sponsorship positions for brands seeking Canada's South Asian and NRI luxury audience.",
  },
  "/insights": {
    title: "Insights — Utkrisht Alliance",
    description:
      "Perspectives on luxury, culture and the audiences that matter, from the Utkrisht Alliance team.",
  },
  "/creators": {
    title: "Creators — Utkrisht Alliance",
    description:
      "An invitation for content creators and influencers to collaborate with Utkrisht Alliance on curated assignments.",
  },
  "/contact": {
    title: "Contact — Utkrisht Alliance",
    description:
      "Get in touch with Utkrisht Alliance to discuss partnerships, exhibiting, or bringing your brand to our founding season.",
  },
  "/brand-showcases": {
    title: "Brand Showcases — Utkrisht Alliance",
    description:
      "Immersive brand showcases and activations staged before a curated South Asian and NRI luxury audience.",
  },
  "/fashion-shows": {
    title: "Fashion Shows — Utkrisht Alliance",
    description:
      "Curated runway showcases for couture houses, emerging designers, and jewellery and lifestyle labels.",
  },
  "/arts-architecture": {
    title: "Arts & Architecture — Utkrisht Alliance",
    description:
      "A curated stage for fine art, design and luxury living — for painters, designers and the luxury-home world.",
  },
  "/luxury-real-estate": {
    title: "Luxury Real Estate — Utkrisht Alliance",
    description:
      "Curated property expositions presenting exceptional residences to qualified HNI and NRI buyers.",
  },
  "/whisky-spirits": {
    title: "Whisky & Spirits Salons — Utkrisht Alliance",
    description:
      "Intimate curated salons of rare single malts and small-batch spirits for collectors and connoisseurs.",
  },
  "/networking-events": {
    title: "Invite-Only Networking — Utkrisht Alliance",
    description:
      "Private, invitation-only evenings for a vetted circle of HNI and NRI guests, hosted with discretion.",
  },
  "/privacy": {
    title: "Privacy Policy — Utkrisht Alliance",
    description:
      "How Utkrisht Alliance collects, uses and protects the personal information you share with us.",
  },
  "/terms": {
    title: "Terms of Use — Utkrisht Alliance",
    description: "The terms governing your use of the Utkrisht Alliance website.",
  },
};

export function metaFor(pathname: string): Meta & { canonical: string } {
  const meta =
    PAGE_META[pathname] ??
    (pathname.startsWith("/insights/")
      ? {
          title: "Insights — Utkrisht Alliance",
          description: SITE.defaultDescription,
        }
      : { title: SITE.defaultTitle, description: SITE.defaultDescription });
  return { ...meta, canonical: SITE.url + pathname };
}

// Sets/updates a <meta> (by name or property) in <head>, creating it if absent.
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyPageMeta(pathname: string) {
  const { title, description, canonical } = metaFor(pathname);
  document.title = title;
  setMeta("name", "description", description);
  setCanonical(canonical);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", canonical);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
}
