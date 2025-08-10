import apexLegal from "@/assets/logos/apex-legal.svg";
import sterlingCpa from "@/assets/logos/sterling-cpa.svg";
import wellnessTherapy from "@/assets/logos/wellness-therapy.svg";
import strataConsult from "@/assets/logos/strataconsult.svg";
import premierFinancial from "@/assets/logos/premier-financial.svg";

const LogoCloud = () => {
  const logos = [
    { name: "Apex Legal", src: apexLegal, width: "w-36" },
    { name: "Sterling CPA", src: sterlingCpa, width: "w-36" },
    { name: "Wellness Therapy", src: wellnessTherapy, width: "w-36" },
    { name: "StrataConsult", src: strataConsult, width: "w-36" },
    { name: "Premier Financial", src: premierFinancial, width: "w-36" },
  ];

  return (
    <section className="py-12 bg-brand-neutral-50" aria-labelledby="trusted-by-heading">
      <div className="container">
        <div className="text-center mb-8">
          <p id="trusted-by-heading" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by Professional Services
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={`${logo.name} logo - trusted by professional services`}
              className={`${logo.width} h-12 object-contain`}
              loading="lazy"
              height={48}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">
              35+ years combined design & development experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;