import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import legalHero from "@/assets/industries/legal-hero.jpg";
import ValuePropsSection from "@/components/Common/ValuePropsSection";
import SegmentExpectationsCompact from "@/components/Common/SegmentExpectationsCompact";

const Legal = () => {
  return (
    <>
      <SEO 
        title="Legal Websites that Build Trust and Convert"
        description="Authority-focused law firm websites with clear practice areas, attorney bios, and trust signals that drive consultations."
      />
      <Header />
      <main>
        <Hero 
          title="Legal Websites that Build Trust"
          subtitle="Position your firm as the obvious choice with messaging clarity, proof, and performance."
          ctaText="Book a Discovery Call"
          ctaSecondary="View Case Studies"
          imageSrc={legalHero}
          imageAlt="Legal industry hero - abstract courthouse and scales"
        />
        <ValuePropsSection industryKey="legal" />
        <SegmentExpectationsCompact segmentKey="professional" />
        <section className="section-padding">
          <div className="container grid gap-8 md:grid-cols-2">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges We Solve</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Unclear positioning across practice areas</li>
                <li>Slow sites that lose referrals and rankings</li>
                <li>Poor mobile usability and ADA concerns</li>
              </ul>
            </article>
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">What You Get</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Structured practice area pages that rank</li>
                <li>Attorney profile pages that build credibility</li>
                <li>Conversion-optimized contact and booking flows</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Legal;