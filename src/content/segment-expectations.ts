export type SegmentKey = "professional" | "local" | "creators" | "nonprofits";

export interface SegmentData {
  title: string;
  mustHaves: string[];
  packaging: {
    name: string;
    summary: string;
  }[];
}

export const segmentExpectations: Record<SegmentKey, SegmentData> = {
  professional: {
    title: "Professional Services",
    mustHaves: [
      "Proof elements: testimonials and case work",
      "Crystal-clear who/for/why messaging",
      "Fast mobile performance (Core Web Vitals)",
      "Local SEO schema and on-page basics",
      "Compliant forms and privacy",
      "Calendar scheduling (Calendly)"
    ],
    packaging: [
      {
        name: "Strategy Sprint (2 weeks)",
        summary: "Brand voice, homepage wire, CTA map, SEO outline. Paid upfront and anchors the premium build."
      },
      {
        name: "Launch Build (3–5 pages)",
        summary: "Hand-coded, speed-first site with copy included. Priced at the custom tier your research recommends."
      },
      {
        name: "Care & Content",
        summary: "Light maintenance with quarterly updates, analytics checks, and incremental improvements."
      }
    ]
  },
  local: {
    title: "Local Businesses",
    mustHaves: [
      "Mobile-first speed and clear CTAs (tap-to-call)",
      "Maps, hours, and service area pages",
      "Reviews and before/after proof",
      "Simple booking or estimate forms",
      "Local SEO schema (Service, LocalBusiness)",
      "Clear ROI framing (calls, bookings, orders)"
    ],
    packaging: [
      { name: "Strategy Sprint (2 weeks)", summary: "Offer clarity, homepage wire, CTA map, local SEO checklist." },
      { name: "Launch Build (3–5 pages)", summary: "Lightning-fast site that drives calls and bookings; copy included." },
      { name: "Care & Content", summary: "Seasonal updates, review embeds, service area expansions." }
    ]
  },
  creators: {
    title: "Creators & Experts",
    mustHaves: [
      "Content-first layouts and fast performance",
      "Email capture and simple lead magnets",
      "Social proof and media features",
      "Clear services or productized offers",
      "Analytics and conversion tracking",
      "Simple, distraction-free booking/contact"
    ],
    packaging: [
      { name: "Strategy Sprint (2 weeks)", summary: "Audience, offer map, homepage wire, opt-in strategy." },
      { name: "Launch Build (3–5 pages)", summary: "Hand-coded site with offer pages and optimized content flows." },
      { name: "Care & Content", summary: "Quarterly content drops, landing pages, conversion tests." }
    ]
  },
  nonprofits: {
    title: "Nonprofits & Organizations",
    mustHaves: [
      "Clear mission, impact, and credibility",
      "Donation flows and program pages",
      "Accessibility (WCAG/ADA) and inclusive design",
      "Volunteer forms and event pages",
      "Fast, mobile-first navigation",
      "Structured data for Organization/Events"
    ],
    packaging: [
      { name: "Strategy Sprint (2 weeks)", summary: "Messaging alignment, sitemap, homepage wire, donation UX notes." },
      { name: "Launch Build (3–5 pages)", summary: "Lightweight, fast site with programs, donate, and story pages." },
      { name: "Care & Content", summary: "Quarterly updates, campaign pages, accessibility checks." }
    ]
  }
};
