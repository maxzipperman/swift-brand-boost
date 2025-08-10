import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";

const FinancialAdvisory = () => {
  return (
    <>
      <SEO 
        title="Financial Advisory Websites that Inspire Confidence"
        description="High-performance advisory websites with compliance-friendly layouts and clear calls to action."
      />
      <Header />
      <main>
        <Hero 
          title="Financial Advisory Websites that Inspire Confidence"
          subtitle="Clarity, credibility, and speed for decisions that matter."
          ctaText="Book a Discovery Call"
          ctaSecondary="View Services"
        />
        <section className="section-padding">
          <div className="container grid gap-8 md:grid-cols-2">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges We Solve</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Compliance constraints limiting design</li>
                <li>Complex offer structures and user journeys</li>
                <li>Low trust on mobile and first impression</li>
              </ul>
            </article>
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">What You Get</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Compliance-aware layouts and components</li>
                <li>Performance engineered for Core Web Vitals</li>
                <li>Messaging and proof that moves prospects forward</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FinancialAdvisory;