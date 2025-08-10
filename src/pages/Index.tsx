import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import LogoCloud from "@/components/Common/LogoCloud";
import MetricCard from "@/components/Common/MetricCard";
import Stepper from "@/components/Common/Stepper";
import TestimonialCard from "@/components/Common/TestimonialCard";
import LeadCapture from "@/components/Common/LeadCapture";
import IndustriesSection from "@/components/Common/IndustriesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Shield, Users, Target, ArrowRight } from "lucide-react";

console.log("Index page is loading..."); // Force rebuild

const Index = () => {
  console.log("Index component rendering...");
  const valueProps = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Performance",
      description: "Core Web Vitals optimized sites that load in under 2 seconds. Google loves fast sites, and so do your clients.",
      metric: "<2s load"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Level Security",
      description: "Minimal dependencies, custom code, and security-first architecture protect your firm's reputation.",
      metric: "99.9% uptime"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "True Ownership",
      description: "No platform lock-in. You own your code, your content, and your future. Move hosting anytime.",
      metric: "100% owned"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Messaging",
      description: "Clear, compelling copy that speaks directly to your ideal clients and drives qualified leads.",
      metric: "Higher conversion"
    }
  ];

  const processSteps = [
    {
      title: "Audit & Discovery",
      description: "We analyze your current site, competitors, and ideal client journey to identify opportunities for improvement."
    },
    {
      title: "Strategy & Design",
      description: "Custom messaging strategy and visual design that positions your firm as the obvious choice for your ideal clients."
    },
    {
      title: "Build & Optimize",
      description: "Hand-coded development with performance optimization, SEO setup, and conversion rate optimization built-in."
    },
    {
      title: "Launch & Support",
      description: "Smooth launch process with training, documentation, and ongoing support to ensure your success."
    }
  ];

  const testimonials = [
    {
      content: "Our new website has completely transformed our practice. We're getting higher-quality leads and clients consistently mention how professional and trustworthy our site feels.",
      author: "Sarah Mitchell",
      role: "Managing Partner",
      company: "Mitchell & Associates Law"
    },
    {
      content: "The team at Position Digital understood our business immediately. Our website now clearly communicates our value and has become our best marketing tool.",
      author: "David Chen",
      role: "Principal",
      company: "Chen Financial Advisory"
    },
    {
      content: "Finally, a website that loads instantly and looks amazing on every device. Our bounce rate dropped 40% and inquiries are up 60%.",
      author: "Maria Rodriguez",
      role: "Founder",
      company: "Rodriguez Therapy Center"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Position Digital",
    "description": "Custom-coded websites for professional services",
    "url": "https://positiondigital.com",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@positiondigital.com",
      "contactType": "customer service"
    }
  };

  console.log("About to render Index component");

  return (
    <>
      <SEO schema={organizationSchema} />
      <Header />
      
      <main>
        {/* Industries Section (Top) */}
        <IndustriesSection />

        {/* Hero Section */}
        <Hero
          title="Custom-coded websites that win trust and drive results"
          subtitle="Blazing-fast, brand-driven websites for lawyers, accountants, consultants, and therapists. No templates. No platform lock-in. Just results."
          ctaSecondary="View Our Work"
        />

        {/* Trust Strip */}
        <LogoCloud />

        {/* Value Propositions */}
        <section className="section-padding">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Professional Services Choose Custom Code
              </h2>
              <p className="text-xl text-muted-foreground">
                Your clients expect excellence. Your website should deliver it from the first click.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => (
                <MetricCard key={index} {...prop} />
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Case Study Teaser */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                See the Difference Performance Makes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-red-600 font-semibold">Before</div>
                    <div className="bg-red-50 p-4 rounded">
                      <div className="text-2xl font-bold text-red-600">4.2s</div>
                      <div className="text-sm text-red-600">Page Load Time</div>
                    </div>
                    <ul className="text-sm text-left space-y-1">
                      <li>• High bounce rate (68%)</li>
                      <li>• Poor mobile experience</li>
                      <li>• Unclear messaging</li>
                      <li>• Low search rankings</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-green-600 font-semibold">After</div>
                    <div className="bg-green-50 p-4 rounded">
                      <div className="text-2xl font-bold text-green-600">1.8s</div>
                      <div className="text-sm text-green-600">Page Load Time</div>
                    </div>
                    <ul className="text-sm text-left space-y-1">
                      <li>• Reduced bounce rate (32%)</li>
                      <li>• Perfect mobile scores</li>
                      <li>• Clear value proposition</li>
                      <li>• Page 1 Google rankings</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Button asChild size="lg" className="group">
                <Link to="/case-studies">
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our Proven Process
                </h2>
                <p className="text-xl text-muted-foreground">
                  From strategy to launch, we handle every detail so you can focus on serving your clients.
                </p>
              </div>
              
              <div>
                <Stepper steps={processSteps} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional services firms trust us to represent their brand online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <LeadCapture />

        {/* Final CTA */}
        <section className="section-padding">
          <div className="container text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your clients are judging your website
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's make it work for you. Book a 20-minute discovery call and see how a custom website can transform your practice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="shadow-elegant">
                <Link to="/contact">Book Discovery Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;