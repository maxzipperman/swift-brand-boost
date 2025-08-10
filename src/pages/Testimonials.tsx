import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import TestimonialCard from "@/components/Common/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "Our new website has completely transformed our practice. We're getting higher-quality leads and clients consistently mention how professional and trustworthy our site feels. The performance improvements alone have been worth the investment.",
      author: "Sarah Mitchell",
      role: "Managing Partner",
      company: "Mitchell & Associates Law",
      rating: 5
    },
    {
      content: "The team at Position Digital understood our business immediately. Our website now clearly communicates our value and has become our best marketing tool. ROI has been exceptional.",
      author: "David Chen",
      role: "Principal",
      company: "Chen Financial Advisory",
      rating: 5
    },
    {
      content: "Finally, a website that loads instantly and looks amazing on every device. Our bounce rate dropped 40% and inquiries are up 60%. Best investment we've made in years.",
      author: "Maria Rodriguez",
      role: "Founder",
      company: "Rodriguez Therapy Center",
      rating: 5
    },
    {
      content: "Working with Position Digital was refreshingly straightforward. They delivered exactly what they promised, on time and on budget. Our new site perfectly represents our firm's expertise.",
      author: "James Wilson",
      role: "Senior Partner",
      company: "Wilson & Partners CPA",
      rating: 5
    },
    {
      content: "The strategic approach to messaging was game-changing. Our website now speaks directly to our ideal clients and we're seeing much more qualified leads coming through.",
      author: "Lisa Thompson",
      role: "Principal Consultant",
      company: "Strategic Business Solutions",
      rating: 5
    },
    {
      content: "From discovery to launch, the process was smooth and professional. The team really understood the unique needs of our accounting practice and delivered a site that drives results.",
      author: "Robert Kim",
      role: "Managing Director",
      company: "Kim & Associates CPA",
      rating: 5
    },
    {
      content: "Our old website was embarrassing compared to our competitors. Now we have a site that we're proud to share and that actually helps us win new business. Night and day difference.",
      author: "Jennifer Davis",
      role: "Partner",
      company: "Davis Legal Group",
      rating: 5
    },
    {
      content: "The performance optimization has been incredible. Our site loads faster than any of our competitors, and Google rankings have improved significantly. Technical excellence delivered.",
      author: "Michael Brown",
      role: "Founder",
      company: "Brown Consulting Services",
      rating: 5
    },
    {
      content: "Position Digital created a website that truly reflects our expertise and builds trust with potential clients. The conversion rate improvements have exceeded our expectations.",
      author: "Amanda White",
      role: "Clinical Director",
      company: "White Wellness Center",
      rating: 5
    }
  ];

  const stats = [
    { label: "Average Performance Improvement", value: "180%" },
    { label: "Client Satisfaction Rate", value: "100%" },
    { label: "Projects Delivered On Time", value: "100%" },
    { label: "Average Lead Increase", value: "85%" }
  ];

  return (
    <>
      <SEO
        title="Client Testimonials - Position Digital Success Stories"
        description="Read what lawyers, accountants, consultants, and therapists say about working with Position Digital. Real results from real professional services firms."
      />
      <Header />
      
      <main>
        <Hero
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear from the professional services firms who have transformed their online presence with custom websites."
          showImage={false}
        />

        {/* Stats */}
        <section className="py-16 bg-brand-neutral-50">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="section-padding">
          <div className="container max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center space-y-8">
                <Quote className="w-16 h-16 text-primary/20 mx-auto" />
                
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                  "Our new website has completely transformed our practice. We're getting higher-quality leads and clients consistently mention how professional and trustworthy our site feels."
                </blockquote>
                
                <div className="space-y-4">
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-lg">Sarah Mitchell</div>
                    <div className="text-muted-foreground">Managing Partner, Mitchell & Associates Law</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Testimonials */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted by Professional Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From solo practitioners to established firms, see how custom websites have helped our clients grow their practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Testimonials */}
        <section className="section-padding">
          <div className="container max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">
                What Clients Say About Our Process
              </h2>
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div className="flex-1">
                      <blockquote className="text-lg mb-3">
                        "The discovery process was thorough but efficient. They asked the right questions to understand not just our business, but our goals and challenges."
                      </blockquote>
                      <cite className="text-muted-foreground">— David Chen, Chen Financial Advisory</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div className="flex-1">
                      <blockquote className="text-lg mb-3">
                        "Communication throughout the project was excellent. We always knew where things stood and what to expect next."
                      </blockquote>
                      <cite className="text-muted-foreground">— Maria Rodriguez, Rodriguez Therapy Center</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div className="flex-1">
                      <blockquote className="text-lg mb-3">
                        "The training and handoff process was seamless. We felt confident managing our new site from day one."
                      </blockquote>
                      <cite className="text-muted-foreground">— James Wilson, Wilson & Partners CPA</cite>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl opacity-90">
                Let's discuss how a custom website can transform your practice. Book a free discovery call and see if we're a good fit.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Book Discovery Call
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Testimonials;