import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";

const Therapy = () => {
  return (
    <>
      <SEO 
        title="Therapy Websites that Feel Safe and Welcoming"
        description="Warm, accessible therapy websites with inclusive design and simple booking flows."
      />
      <Header />
      <main>
        <Hero 
          title="Therapy Websites that Feel Safe"
          subtitle="Create a calm, welcoming experience that helps clients take the first step."
          ctaText="Book a Discovery Call"
          ctaSecondary="See Approaches"
        />
        <section className="section-padding">
          <div className="container grid gap-8 md:grid-cols-2">
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">Challenges We Solve</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Cold, clinical designs that deter inquiries</li>
                <li>Overwhelming navigation and unclear services</li>
                <li>Accessibility and inclusivity gaps</li>
              </ul>
            </article>
            <article className="space-y-4">
              <h2 className="text-2xl font-semibold">What You Get</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>Approach and modality pages that build rapport</li>
                <li>Simple booking and intake forms</li>
                <li>Friendly visuals, color, and typography systems</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Therapy;