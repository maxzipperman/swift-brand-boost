import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Mitchell & Associates Law",
      category: "Legal Services",
      description: "Complete brand transformation for a growing personal injury law firm",
      challenge: "Outdated website with 68% bounce rate and unclear messaging",
      solution: "Custom-coded site with strategic messaging and performance optimization",
      results: [
        { metric: "Bounce Rate", before: "68%", after: "32%", improvement: "-53%" },
        { metric: "Page Load Time", before: "4.2s", after: "1.8s", improvement: "-57%" },
        { metric: "Qualified Leads", before: "12/month", after: "28/month", improvement: "+133%" },
        { metric: "Mobile Score", before: "45", after: "98", improvement: "+118%" }
      ],
      testimonial: "Our new website has completely transformed our practice. We're getting higher-quality leads and clients consistently mention how professional and trustworthy our site feels.",
      author: "Sarah Mitchell, Managing Partner",
      timeline: "6 weeks",
      package: "Premium Brand Experience"
    },
    {
      title: "Chen Financial Advisory",
      category: "Financial Services", 
      description: "Brand refresh for established financial planning practice",
      challenge: "Professional but generic website that didn't differentiate from competitors",
      solution: "Strategic messaging overhaul with clear value proposition and client-focused content",
      results: [
        { metric: "Consultation Requests", before: "8/month", after: "18/month", improvement: "+125%" },
        { metric: "Average Session Duration", before: "1:32", after: "3:47", improvement: "+142%" },
        { metric: "Contact Form Completion", before: "2.3%", after: "5.8%", improvement: "+152%" },
        { metric: "Search Rankings", before: "Page 3", after: "Page 1", improvement: "Top 3" }
      ],
      testimonial: "The team at Position Digital understood our business immediately. Our website now clearly communicates our value and has become our best marketing tool.",
      author: "David Chen, Principal",
      timeline: "4 weeks",
      package: "Brand Refresh"
    }
  ];

  return (
    <>
      <SEO
        title="Case Studies - Website Success Stories for Professional Services"
        description="See how Position Digital has helped lawyers, accountants, and consultants transform their online presence with custom websites that drive results."
      />
      <Header />
      
      <main>
        <Hero
          title="Real Results for Real Businesses"
          subtitle="See how we've helped professional services firms transform their online presence and grow their practices with custom websites."
          showImage={false}
        />

        {/* Case Studies */}
        <section className="section-padding">
          <div className="container space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Project Details */}
                    <div className="p-8 lg:p-12 space-y-6">
                      <div className="space-y-4">
                        <Badge variant="secondary">{study.category}</Badge>
                        <h2 className="text-3xl font-bold">{study.title}</h2>
                        <p className="text-lg text-muted-foreground">{study.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-red-600 mb-2">Challenge</h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold text-primary mb-2">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span>{study.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{study.package}</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-brand-neutral-50 p-8 lg:p-12">
                      <h3 className="text-2xl font-bold mb-6 flex items-center">
                        <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                        Results
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-sm text-muted-foreground mb-1">{result.metric}</div>
                            <div className="text-xs text-red-600 mb-1">Before: {result.before}</div>
                            <div className="text-xs text-green-600 mb-2">After: {result.after}</div>
                            <div className="text-lg font-bold text-green-600">{result.improvement}</div>
                          </div>
                        ))}
                      </div>

                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-medium">— {study.author}</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Overview */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground">
                Every successful project follows the same strategic approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Audit</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze current performance and identify opportunities
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop messaging and design strategy based on your goals
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Build</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom code development with performance optimization
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Launch</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy, monitor, and optimize for continued success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-muted-foreground">
                Every successful project starts with a conversation. Let's discuss how we can help transform your practice.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-elegant group">
                Book Discovery Call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudies;