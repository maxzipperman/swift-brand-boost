import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import PackageCard from "@/components/Common/PackageCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const packages = [
    {
      title: "Website Tune-Up",
      price: "$1,500–$2,500",
      description: "Perfect for firms with decent sites that need speed and messaging improvements",
      features: [
        "1-3 page refresh and optimization",
        "Core Web Vitals performance fixes",
        "Light messaging improvements",
        "Mobile responsiveness fixes",
        "Basic SEO optimization",
        "Speed optimization (target <2s load)",
        "2-week turnaround"
      ]
    },
    {
      title: "Brand Refresh",
      price: "$2,750–$5,000",
      description: "Complete redesign with strategic messaging for growing practices",
      features: [
        "5-page complete redesign",
        "Comprehensive messaging overhaul",
        "Competitor analysis & positioning",
        "Advanced SEO optimization",
        "Contact form optimization",
        "Mobile-first responsive design",
        "4-6 week turnaround",
        "Basic analytics setup"
      ],
      recommended: true
    },
    {
      title: "Premium Brand Experience",
      price: "$5,000–$7,500",
      description: "Full-scale brand transformation for established firms ready to dominate their market",
      features: [
        "7+ page comprehensive website",
        "Full discovery & strategy session",
        "Complete competitor analysis",
        "Professional copywriting",
        "Advanced conversion optimization",
        "Blog/resource section setup",
        "Advanced analytics & tracking",
        "6-8 week turnaround",
        "3 months post-launch support"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does the typical project take?",
      answer: "Timeline depends on the package: Website Tune-Ups take 2 weeks, Brand Refresh takes 4-6 weeks, and Premium Brand Experience takes 6-8 weeks. We provide detailed project timelines during our discovery call."
    },
    {
      question: "Do you handle hosting and maintenance?",
      answer: "Yes! We can recommend hosting solutions and provide ongoing maintenance packages. However, you'll always own your code and can move to any hosting provider at any time - no lock-in contracts."
    },
    {
      question: "Will I be able to update content myself?",
      answer: "Absolutely. We build sites that are easy to update, and we provide training on how to make content changes. For more complex updates, we offer affordable maintenance packages."
    },
    {
      question: "How many revisions are included?",
      answer: "Each package includes 2 rounds of revisions. Additional revisions are available at $150/hour. We find that our thorough discovery process means most clients are happy after the first revision."
    },
    {
      question: "What if I need additional pages later?",
      answer: "No problem! Additional pages can be added for $500-$1,200 each, depending on complexity. We design our sites to grow with your practice."
    },
    {
      question: "Do you work with my existing brand guidelines?",
      answer: "Yes, we can work within your existing brand guidelines, or help refine them if needed. If you don't have brand guidelines, we can create basic brand elements as part of the project."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Website Design for Professional Services",
    "description": "Custom-coded websites for lawyers, accountants, consultants, and therapists",
    "provider": {
      "@type": "Organization",
      "name": "Position Digital"
    },
    "serviceType": "Web Design and Development",
    "offers": packages.map(pkg => ({
      "@type": "Offer",
      "name": pkg.title,
      "description": pkg.description,
      "price": pkg.price
    }))
  };

  return (
    <>
      <SEO
        title="Web Design Services for Professional Services"
        description="Custom website packages for lawyers, accountants, consultants, and therapists. From quick tune-ups to complete brand transformations."
        schema={serviceSchema}
      />
      <Header />
      
      <main>
        <Hero
          title="Website Solutions Built for Professional Services"
          subtitle="From quick performance fixes to complete brand transformations. Choose the package that fits your practice's needs and budget."
          showImage={false}
        />

        {/* Intro Section */}
        <section className="section-padding">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your website is often the first impression potential clients have of your firm. In professional services, trust is everything—and that trust starts with a website that loads quickly, looks professional, and clearly communicates your value.
            </p>
            <p className="text-lg text-muted-foreground">
              We specialize in custom-coded websites that help small professional service firms compete with the big players. No templates, no platform limitations—just fast, secure, and conversion-focused websites you'll own forever.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Choose Your Package
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether you need a quick refresh or a complete transformation, we have a solution that fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-padding">
          <div className="container space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Package Comparison</h2>
              <p className="text-muted-foreground">See what's included in each package</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-brand-neutral-50">
                    <th className="border border-border p-4 text-left">Feature</th>
                    <th className="border border-border p-4 text-center">Tune-Up</th>
                    <th className="border border-border p-4 text-center">Brand Refresh</th>
                    <th className="border border-border p-4 text-center">Premium Experience</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 font-medium">Pages Included</td>
                    <td className="border border-border p-4 text-center">1-3</td>
                    <td className="border border-border p-4 text-center">5</td>
                    <td className="border border-border p-4 text-center">7+</td>
                  </tr>
                  <tr className="bg-brand-neutral-50/50">
                    <td className="border border-border p-4 font-medium">Timeline</td>
                    <td className="border border-border p-4 text-center">2 weeks</td>
                    <td className="border border-border p-4 text-center">4-6 weeks</td>
                    <td className="border border-border p-4 text-center">6-8 weeks</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Custom Copywriting</td>
                    <td className="border border-border p-4 text-center">Light edits</td>
                    <td className="border border-border p-4 text-center">✓</td>
                    <td className="border border-border p-4 text-center">✓ Professional</td>
                  </tr>
                  <tr className="bg-brand-neutral-50/50">
                    <td className="border border-border p-4 font-medium">SEO Optimization</td>
                    <td className="border border-border p-4 text-center">Basic</td>
                    <td className="border border-border p-4 text-center">Advanced</td>
                    <td className="border border-border p-4 text-center">Comprehensive</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-medium">Post-Launch Support</td>
                    <td className="border border-border p-4 text-center">1 week</td>
                    <td className="border border-border p-4 text-center">1 month</td>
                    <td className="border border-border p-4 text-center">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our services and process.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground">
                Book a free 20-minute discovery call to discuss your needs and get a custom proposal.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium shadow-elegant">
                Book Discovery Call
              </button>
              <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 font-medium">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;