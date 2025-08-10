import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

// Force rebuild - fix Link reference error
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaSecondary?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  visualOnly?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = "Book Discovery Call", 
  ctaSecondary,
  showImage = true,
  imageSrc,
  imageAlt,
  visualOnly = false,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container section-padding">
        {visualOnly ? (
          <div className="animate-fade-in-delay">
            <img
              src={imageSrc ?? heroImage}
              alt={imageAlt ?? `${title} - Position Digital`}
              className="rounded-lg shadow-card w-full h-auto"
              loading="eager"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="shadow-elegant">
                  <Link to="/contact">{ctaText}</Link>
                </Button>
                {ctaSecondary && (
                  <Button asChild variant="outline" size="lg">
                    <Link to="/case-studies">{ctaSecondary}</Link>
                  </Button>
                )}
              </div>
            </div>
            
            {showImage && (
              <div className="animate-fade-in-delay">
                <img
                  src={imageSrc ?? heroImage}
                  alt={imageAlt ?? `${title} - Position Digital`}
                  className="rounded-lg shadow-card w-full h-auto"
                  loading="eager"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;