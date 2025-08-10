import { HTMLAttributes, useMemo } from "react";
import MetricCard from "@/components/Common/MetricCard";
import {
  ShieldCheck,
  ClipboardList,
  FileText,
  TrendingUp,
  Gavel,
  BadgeCheck,
  Users,
  CalendarCheck,
  Briefcase,
  Target,
  BarChart3,
  FolderOpen,
  Heart,
  MessageSquare,
  Calendar,
  Rocket,
  LineChart,
  Layers,
} from "lucide-react";
import { industryValueProps, type IndustryKey } from "@/content/industry-value-props";

const iconMap = {
  ShieldCheck,
  ClipboardList,
  FileText,
  TrendingUp,
  Gavel,
  BadgeCheck,
  Users,
  CalendarCheck,
  Briefcase,
  Target,
  BarChart3,
  FolderOpen,
  Heart,
  MessageSquare,
  Calendar,
  Rocket,
  LineChart,
  Layers,
};

interface ValuePropsSectionProps extends HTMLAttributes<HTMLElement> {
  industryKey: IndustryKey;
  headingOverride?: string;
}

const ValuePropsSection = ({ industryKey, headingOverride, className, ...rest }: ValuePropsSectionProps) => {
  const group = industryValueProps[industryKey];

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: headingOverride || group.heading,
    itemListElement: group.items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.title,
      description: item.description,
    })),
  }), [group, headingOverride]);

  return (
    <section className={"section-padding"} aria-label={group.heading} {...rest}>
      <div className="container space-y-8">
        <header className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {headingOverride || group.heading}
          </h2>
          <p className="text-muted-foreground mt-2">
            The essentials that reduce friction, build trust, and drive action.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {group.items.map((vp, i) => {
            const Icon = (iconMap as any)[vp.icon] || ShieldCheck;
            return (
              <MetricCard
                key={i}
                icon={<Icon aria-hidden size={24} />}
                title={vp.title}
                description={vp.description}
                metric={vp.metric}
              />
            );
          })}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default ValuePropsSection;
