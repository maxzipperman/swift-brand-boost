import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmType: "",
    website: "",
    goals: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      firmType: "",
      website: "",
      goals: "",
      budget: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEO
        title="Contact Position Digital - Get Your Custom Website Quote"
        description="Ready to transform your professional services website? Contact Position Digital for a free consultation and custom quote."
      />
      <Header />
      
      <main>
        <Hero
          title="Let's Build Your Perfect Website"
          subtitle="Ready to transform your online presence? Tell us about your project and we'll get back to you within 24 hours."
          showImage={false}
        />

        <section className="section-padding">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="firmType">Type of Practice *</Label>
                        <Select value={formData.firmType} onValueChange={(value) => handleInputChange("firmType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your practice type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="law">Law Firm</SelectItem>
                            <SelectItem value="accounting">Accounting/CPA</SelectItem>
                            <SelectItem value="consulting">Business Consulting</SelectItem>
                            <SelectItem value="therapy">Therapy/Counseling</SelectItem>
                            <SelectItem value="financial">Financial Advisory</SelectItem>
                            <SelectItem value="other">Other Professional Service</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Current Website (if any)</Label>
                        <Input
                          id="website"
                          type="url"
                          placeholder="https://yourwebsite.com"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="goals">Project Goals *</Label>
                        <Textarea
                          id="goals"
                          placeholder="Tell us about your goals. What do you want your new website to achieve? What problems are you trying to solve?"
                          value={formData.goals}
                          onChange={(e) => handleInputChange("goals", e.target.value)}
                          required
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1500-2500">$1,500 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="5000-7500">$5,000 - $7,500</SelectItem>
                            <SelectItem value="7500+">$7,500+</SelectItem>
                            <SelectItem value="unsure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We'll get back to you within 24 hours with next steps.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & Process */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">1. We Review Your Request</h3>
                        <p className="text-muted-foreground">
                          We'll carefully review your project details and requirements to understand your needs.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">2. Schedule Discovery Call</h3>
                        <p className="text-muted-foreground">
                          We'll send you a calendar link to book a 20-minute discovery call to discuss your project in detail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">3. Custom Proposal</h3>
                        <p className="text-muted-foreground">
                          Within 48 hours of our call, you'll receive a detailed proposal with timeline and pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Prefer to Email?</h3>
                    <p className="text-muted-foreground mb-4">
                      You can also reach us directly at:
                    </p>
                    <a 
                      href="mailto:hello@positiondigital.com"
                      className="text-primary font-medium hover:underline"
                    >
                      hello@positiondigital.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Not Ready for a Full Project?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get our free guide: "3 Website Fixes That Boost Leads" and start improving your site today.
                    </p>
                    <Button variant="outline" className="w-full">
                      Download Free Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Common Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How long does a typical project take?</h3>
                  <p className="text-muted-foreground">
                    2-8 weeks depending on the package. We provide detailed timelines during our discovery call.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
                  <p className="text-muted-foreground">
                    Yes! We offer 50% down and 50% at launch for all projects over $2,500.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;