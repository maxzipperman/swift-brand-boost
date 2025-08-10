import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import consultingHero from "@/assets/industries/consulting-hero.jpg";

const Consulting = () => {
  return (
    <>
      <SEO 
        title="Consulting Websites that Showcase Outcomes"
        description="Outcome-driven consulting websites that communicate value, process, and proof to win better clients."
      />
      <Header />
      <main>
        <Hero 
          title="Consulting Websites that Showcase Outcomes"
          subtitle="Elevate your authority with case studies, IP, and clear service offers."
          ctaText="Book a Discovery Call"
          ctaSecondary="View Case Studies"
          imageSrc={consultingHero}
          imageAlt="Consulting industry hero - abstract growth arrows and citylines"
        />
        <section className="section-padding">
          <div className="container grid gap-8 md:grid-cols-2">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges We Solve</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Abstract messaging that doesn’t convert</li>
                <li>Missing proof: before/after visuals, metrics, clients</li>
                <li>Weak positioning and unclear offers</li>
              </ul>
            </article>
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">What You Get</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Offer architecture and conversion-focused copy</li>
                <li>Case study system with repeatable layout</li>
                <li>Speed, SEO, and analytics baked in</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Consulting;