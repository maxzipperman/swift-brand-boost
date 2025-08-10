import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import accountingHero from "@/assets/industries/accounting-hero.jpg";

const Accounting = () => {
  return (
    <>
      <SEO 
        title="Accounting Websites that Instill Confidence"
        description="Clear, credible CPA and bookkeeping websites that highlight trust, compliance, and outcomes."
      />
      <Header />
      <main>
        <Hero 
          title="Accounting Websites that Instill Confidence"
          subtitle="Build trust with transparent service pages, social proof, and fast performance."
          ctaText="Book a Discovery Call"
          ctaSecondary="View Services"
          imageSrc={accountingHero}
          imageAlt="Accounting industry hero - abstract calculator and ledger"
        />
        <section className="section-padding">
          <div className="container grid gap-8 md:grid-cols-2">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges We Solve</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Generic copy that undersells expertise</li>
                <li>Confusing services and pricing structure</li>
                <li>Low-conversion contact and lead capture</li>
              </ul>
            </article>
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">What You Get</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Offer-based pages for monthly bookkeeping, tax, and advisory</li>
                <li>Trust signals: certifications, partnerships, testimonials</li>
                <li>High-performing site ready for PPC and SEO</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Accounting;