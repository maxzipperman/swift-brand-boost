const LogoCloud = () => {
  const logos = [
    { name: "Legal Partners LLC", width: "w-32" },
    { name: "Smith & Associates CPA", width: "w-28" },
    { name: "Wellness Therapy Group", width: "w-36" },
    { name: "Strategic Business Consultants", width: "w-40" },
    { name: "Premier Financial Advisors", width: "w-32" },
  ];

  return (
    <section className="py-12 bg-brand-neutral-50">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by Professional Services
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-16 bg-brand-neutral-200 rounded flex items-center justify-center`}
            >
              <span className="text-xs font-medium text-brand-neutral-600 text-center px-2">
                {logo.name}
              </span>
            </div>
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