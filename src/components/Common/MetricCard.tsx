import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  metric?: string;
}

const MetricCard = ({ icon, title, description, metric }: MetricCardProps) => {
  return (
    <Card className="hover-lift transition-all duration-300">
      <CardContent className="p-6 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        {metric && (
          <div className="text-2xl font-bold text-primary">{metric}</div>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;