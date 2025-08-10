export type IndustryKey = "accounting" | "legal" | "consulting" | "therapy" | "financial";

export interface ValuePropItem {
  icon: string; // name of Lucide icon from the allowed map
  title: string;
  description: string;
  metric?: string;
}

export interface IndustryValuePropsGroup {
  heading: string;
  items: ValuePropItem[];
}

export const industryValueProps: Record<IndustryKey, IndustryValuePropsGroup> = {
  accounting: {
    heading: "How We Create Value for Accounting Firms",
    items: [
      {
        icon: "ShieldCheck",
        title: "Build Immediate Trust",
        description:
          "Show certifications, reviews, and recognizable partnerships above the fold to reduce hesitation.",
      },
      {
        icon: "ClipboardList",
        title: "Clarity on Services & Pricing",
        description:
          "Structured service pages with transparent pricing ranges help prospects self-qualify and convert faster.",
      },
      {
        icon: "FileText",
        title: "Compliance-Friendly Content",
        description:
          "Plain-language explanations of compliance and timelines that reassure and differentiate your firm.",
      },
      {
        icon: "CalendarCheck",
        title: "Frictionless Booking",
        description:
          "One-click consult booking and short forms lift qualified inquiries without adding admin overhead.",
      },
    ],
  },
  legal: {
    heading: "How We Create Value for Law Firms",
    items: [
      {
        icon: "Gavel",
        title: "Authority-Led Positioning",
        description:
          "Lead with practice-specific authority through outcomes, media, and recognizable credentials.",
      },
      {
        icon: "Users",
        title: "Attorney Profiles That Convert",
        description:
          "Bio pages engineered for credibility: experience, specialties, testimonials, and next steps.",
      },
      {
        icon: "FolderOpen",
        title: "Practice Area Architecture",
        description:
          "Structured, interlinked practice pages that rank and guide visitors to the right action.",
      },
      {
        icon: "BadgeCheck",
        title: "Accessibility & Compliance",
        description:
          "ADA-aware components and content patterns that meet expectations without sacrificing speed.",
      },
    ],
  },
  consulting: {
    heading: "How We Create Value for Consulting Firms",
    items: [
      {
        icon: "Target",
        title: "Offer Architecture that Sells",
        description:
          "Package services into clear outcomes with strong positioning and risk-reversal.",
      },
      {
        icon: "BarChart3",
        title: "Outcome-Focused Case Studies",
        description:
          "Repeatable layouts that tell the story: problem, approach, impact—supported by metrics.",
      },
      {
        icon: "Layers",
        title: "IP & Frameworks Library",
        description:
          "Show proprietary methods and playbooks to signal depth and de-commoditize your offers.",
      },
      {
        icon: "Rocket",
        title: "Speed, SEO, Analytics Baked In",
        description:
          "Performance budgets, schema, and dashboards to inform sales and marketing decisions.",
      },
    ],
  },
  therapy: {
    heading: "How We Create Value for Therapy Practices",
    items: [
      {
        icon: "Heart",
        title: "Warm, Inclusive Design",
        description:
          "Authentic visuals and calming typography that make reaching out feel safe and easy.",
      },
      {
        icon: "Calendar",
        title: "Simple Booking & Intake",
        description:
          "Fewer fields, clear next steps, and accessible flows reduce drop-off and anxiety.",
      },
      {
        icon: "MessageSquare",
        title: "Approach Pages that Build Rapport",
        description:
          "Explain modalities and who you help in everyday language—focused on outcomes.",
      },
      {
        icon: "ShieldCheck",
        title: "Privacy & Accessibility",
        description:
          "HIPAA-aware patterns and ADA considerations to protect clients and build trust.",
      },
    ],
  },
  financial: {
    heading: "How We Create Value for Financial Advisors",
    items: [
      {
        icon: "ShieldCheck",
        title: "Compliance-Aware Layouts",
        description:
          "Components and copy patterns that align with regulatory needs while staying persuasive.",
      },
      {
        icon: "ClipboardList",
        title: "Clarity Across Complex Offers",
        description:
          "Segmented journeys for planning, asset management, and specialized services.",
      },
      {
        icon: "Rocket",
        title: "Performance That Converts",
        description:
          "Mobile-first speed and Core Web Vitals optimization for first-impression trust.",
      },
      {
        icon: "LineChart",
        title: "Proof That Matters",
        description:
          "Relevant metrics, media, and client stories that move prospects to book a meeting.",
      },
    ],
  },
};
