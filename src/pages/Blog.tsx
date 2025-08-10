import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/Layout/SEO";
import Hero from "@/components/Common/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "performance", label: "Performance" },
    { id: "seo", label: "SEO" },
    { id: "marketing", label: "Marketing" },
    { id: "business", label: "Business" }
  ];

  const blogPosts = [
    {
      title: "Why Site Speed Wins Trust (and Clients)",
      excerpt: "In professional services, trust is everything. Learn how website performance directly impacts client perception and conversion rates.",
      category: "performance",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true
    },
    {
      title: "The Psychology of Professional Service Websites",
      excerpt: "Understanding how potential clients evaluate law firms, accountants, and consultants online—and how to design for their decision-making process.",
      category: "marketing",
      readTime: "6 min read",
      date: "2024-01-08",
      featured: false
    },
    {
      title: "SEO for Professional Services: Beyond Keywords",
      excerpt: "Local SEO strategies that actually work for lawyers, accountants, and consultants. Focus on what matters for professional service rankings.",
      category: "seo",
      readTime: "10 min read",
      date: "2024-01-01",
      featured: false
    },
    {
      title: "Platform vs. Custom: The Real Cost of WordPress",
      excerpt: "Breaking down the hidden costs of WordPress, platform limitations, and why custom code might be more affordable than you think.",
      category: "business",
      readTime: "7 min read",
      date: "2023-12-20",
      featured: false
    },
    {
      title: "Converting Website Visitors into Consultations",
      excerpt: "The specific elements that turn website visitors into qualified leads for professional service firms. Based on analysis of 50+ successful sites.",
      category: "marketing",
      readTime: "9 min read",
      date: "2023-12-15",
      featured: false
    },
    {
      title: "Core Web Vitals for Professional Services",
      excerpt: "Google's Core Web Vitals explained in plain English, plus specific optimization strategies for professional service websites.",
      category: "performance",
      readTime: "5 min read",
      date: "2023-12-10",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <SEO
        title="Blog - Website Tips for Professional Services"
        description="Expert insights on web design, performance, and marketing for lawyers, accountants, consultants, and therapists. Practical tips you can implement today."
      />
      <Header />
      
      <main>
        <Hero
          title="Insights for Professional Services"
          subtitle="Practical advice on web design, performance, and marketing that you can implement today. Written specifically for lawyers, accountants, consultants, and therapists."
          showImage={false}
        />

        {/* Search and Filter */}
        <section className="py-8 bg-brand-neutral-50 border-b">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {filteredPosts.length > 0 && filteredPosts[0].featured && (
          <section className="section-padding">
            <div className="container">
              <div className="mb-8">
                <Badge className="mb-4">Featured Article</Badge>
              </div>
              
              <Card className="overflow-hidden hover-lift transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto bg-gradient-primary"></div>
                    <div className="p-8 lg:p-12 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">{filteredPosts[0].category}</Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(filteredPosts[0].date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{filteredPosts[0].readTime}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold">{filteredPosts[0].title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {filteredPosts[0].excerpt}
                        </p>
                      </div>
                      
                      <Button size="lg" className="group">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="section-padding bg-brand-neutral-50">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === "all" ? "All Articles" : `${categories.find(c => c.id === selectedCategory)?.label} Articles`}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(filteredPosts[0]?.featured ? 1 : 0).map((post, index) => (
                  <Card key={index} className="hover-lift transition-all duration-300 h-full">
                    <CardContent className="p-6 space-y-4 flex flex-col h-full">
                      <div className="h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg"></div>
                      
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-semibold line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group p-0">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding">
          <div className="container max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Stay Updated
              </h2>
              <p className="text-xl text-muted-foreground">
                Get new articles delivered to your inbox. Practical insights for professional services, no fluff.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Monthly emails. No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;