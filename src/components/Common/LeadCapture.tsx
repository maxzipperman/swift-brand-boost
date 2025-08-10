import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Thanks for subscribing! Check your email for the free guide.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get Our Free Guide
          </h2>
          <p className="text-xl opacity-90">
            "3 Website Fixes That Boost Leads" - Download our actionable guide and start seeing results today.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-foreground"
          />
          <Button 
            type="submit" 
            variant="secondary"
            disabled={isLoading}
            className="whitespace-nowrap"
          >
            {isLoading ? "Sending..." : "Get Free Guide"}
          </Button>
        </form>
        
        <p className="text-sm opacity-75">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default LeadCapture;