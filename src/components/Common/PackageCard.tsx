import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const PackageCard = ({ title, price, description, features, recommended }: PackageCardProps) => {
  return (
    <Card className={`relative hover-lift transition-all duration-300 ${
      recommended ? "ring-2 ring-primary shadow-elegant" : ""
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="text-3xl font-bold text-primary">{price}</div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          variant={recommended ? "default" : "outline"}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;