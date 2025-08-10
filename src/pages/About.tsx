import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      title: "Candor",
      description: "We tell you what you need to hear, not what you want to hear. If your website isn't the problem, we'll tell you."
    },
    {
      title: "Pragmatism", 
      description: "We focus on solutions that work in the real world, with real budgets, for real businesses."
    },
    {
      title: "Craftsmanship",
      description: "Every line of code is written with intention. We take pride in building websites that perform and last."
    }
  ];

  return (
    <>
      <SEO
        title="About Position Digital - Web Design for Professional Services"
        description="Meet the team behind Position Digital. Learn about our approach to creating custom websites for lawyers, accountants, consultants, and therapists."
      />
      <Header />
      
      <main>
        <Hero
          title="Building trust through exceptional web experiences"
          subtitle="We're a boutique studio dedicated to helping professional services firms compete online with custom-coded websites that perform."
          showImage={false}
        />

        {/* Founder Story */}
        <section className="section-padding">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hi, I'm Alex Thompson
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    After 15 years of watching talented professionals struggle with websites that don't represent their expertise, I founded Position Digital to bridge that gap.
                  </p>
                  <p>
                    I've seen too many skilled lawyers, accountants, and consultants lose potential clients because their websites load slowly, look unprofessional, or fail to communicate their value clearly.
                  </p>
                  <p>
                    Small professional service firms deserve websites that compete with the big players. That's why we specialize in custom-coded solutions that you own completely—no platform limitations, no monthly fees, just results.
                  </p>
                </div>
                <Button size="lg">
                  Book a Discovery Call
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-brand-neutral-200 rounded-lg flex items-center justify-center">
                  <span className="text-brand-neutral-600 font-medium">
                    Alex Thompson<br />
                    Founder Photo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide every project and client relationship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift transition-all duration-300">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Credentials */}
        <section className="section-padding">
          <div className="container max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Experience & Expertise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 15+ years in web development</li>
                    <li>• Expert in modern web technologies</li>
                    <li>• Google PageSpeed optimization specialist</li>
                    <li>• Accessibility (WCAG 2.1) certified</li>
                    <li>• Security-first development approach</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Industry Knowledge</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 8+ years serving professional services</li>
                    <li>• Deep understanding of compliance requirements</li>
                    <li>• Expertise in professional service marketing</li>
                    <li>• Track record with 50+ firms</li>
                    <li>• Understanding of local SEO for service businesses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine technical excellence with deep industry knowledge to create websites that don't just look great—they perform. Every project benefits from our years of experience helping professional service firms grow their practices online.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Philosophy
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong>Small firms deserve big-firm quality.</strong> Just because you're not a Fortune 500 company doesn't mean your website should look or perform like an afterthought.
              </p>
              <p>
                <strong>Performance is not negotiable.</strong> In our mobile-first world, every second of load time matters. We build for speed from day one.
              </p>
              <p>
                <strong>You should own your digital presence.</strong> Platform lock-in is a tax on your future growth. Custom code means true ownership and unlimited possibilities.
              </p>
              <p>
                <strong>Clarity wins clients.</strong> Your expertise deserves to be communicated clearly. We help you articulate your value in ways that resonate with your ideal clients.
              </p>
            </div>
            
            <Button size="lg" className="mt-8">
              Start Your Project
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss how a custom website can help your practice grow. Book a free discovery call and let's see if we're a good fit.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-elegant">
                Book Discovery Call
              </Button>
              <Button variant="outline" size="lg">
                See Our Work
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;