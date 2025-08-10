import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Scale, Calculator, Briefcase, Brain, LineChart } from "lucide-react";

const industries = [
  {
    slug: "legal",
    name: "Legal",
    description: "Websites that build trust, highlight expertise, and convert consultations.",
    Icon: Scale,
  },
  {
    slug: "accounting",
    name: "Accounting",
    description: "Clear service pages and credibility signals that turn visitors into clients.",
    Icon: Calculator,
  },
  {
    slug: "consulting",
    name: "Consulting",
    description: "Authority-driven design that showcases outcomes and drives qualified leads.",
    Icon: Briefcase,
  },
  {
    slug: "therapy",
    name: "Therapy",
    description: "Empathetic, accessible experiences that make booking feel safe and simple.",
    Icon: Brain,
  },
  {
    slug: "financial-advisory",
    name: "Financial Advisory",
    description: "Performance and clarity that instill confidence for high-stakes decisions.",
    Icon: LineChart,
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-brand-neutral-50">
      <div className="container space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Industries</h2>
          <p className="text-lg text-muted-foreground">
            We specialize in professional services. Explore tailored solutions for your field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map(({ slug, name, description, Icon }) => (
            <Card key={slug} className="h-full">
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{name}</h3>
                </div>
                <p className="text-sm text-muted-foreground flex-1">{description}</p>
                <Button asChild variant="secondary">
                  <Link to={`/industries/${slug}`}>Learn more</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;