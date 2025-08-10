import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaSecondary?: string;
  showImage?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = "Book Discovery Call", 
  ctaSecondary,
  showImage = true 
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-elegant">
                {ctaText}
              </Button>
              {ctaSecondary && (
                <Button variant="outline" size="lg">
                  {ctaSecondary}
                </Button>
              )}
            </div>
          </div>
          
          {showImage && (
            <div className="animate-fade-in-delay">
              <img
                src={heroImage}
                alt="Position Digital - Web Design Excellence"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;