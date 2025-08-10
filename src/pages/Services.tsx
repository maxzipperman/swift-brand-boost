import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import PackageCard from "@/components/Common/PackageCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SegmentExpectations from "@/components/Services/SegmentExpectations";

const Services = () => {
  const packages = [
    {
      title: "Strategy Sprint",
      price: "$1,500–$2,500",
      description: "2-week sprint: brand voice, homepage wire, CTA map, and SEO outline. Paid upfront; anchors the premium build.",
      features: [
        "Brand voice starter and messaging clarity",
        "Homepage wireframe and section map",
        "CTA and inquiry path mapping",
        "SEO outline (keywords, structure, schema)",
        "2-week turnaround, stakeholder review",
        "Deliverables you keep regardless of build"
      ]
    },
    {
      title: "Launch Build",
      price: "$6,000–$9,500",
      description: "3–5 page hand-coded, speed-first site with conversion copy. No templates. You own the code.",
      features: [
        "3–5 key pages (Home, Services, About, Contact, Optional: Case/Blog)",
        "Custom copy included (from Sprint outputs)",
        "Performance engineered for Core Web Vitals",
        "Local SEO basics + structured data",
        "Compliant forms + Calendly integration",
        "Analytics + privacy-friendly tracking",
        "Typical timeline: 3–6 weeks"
      ],
      recommended: true
    },
    {
      title: "Care & Content",
      price: "$250–$600/mo",
      description: "Light maintenance + quarterly updates. Keep performance high and pages current.",
      features: [
        "Quarterly content/design updates",
        "Speed, accessibility, and SEO checks",
        "Small enhancements and experiments",
        "Optional landing pages for campaigns",
        "Priority support window",
        "Cancel anytime — no platform lock-in"
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
        title="Strategy Sprint, Launch Build, Care Plans"
        description="Three-offer architecture for trust-driven pros: sprint, hand-coded launch, and ongoing care. Premium-accessible pricing."
        schema={serviceSchema}
      />
      <Header />
      
      <main>
        <Hero
          title="Website Solutions Built for Professional Services"
          subtitle="From quick performance fixes to complete brand transformations. Choose the package that fits your practice's needs and budget."
          showImage={false}
        />

        {/* Segment Expectations */}
        <SegmentExpectations />

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
                Our 3-offer architecture
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategy Sprint, Launch Build, and Care & Content — a simple path from clarity to launch to steady improvements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Offer architecture emphasises clarity over feature matrices */}

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
              <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 font-medium shadow-elegant text-center">
                Book on Calendly
              </a>
              <a href="/contact?audit=1" className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 font-medium text-center">
                Request Loom Mini‑Audit
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;