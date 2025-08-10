import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

const TestimonialCard = ({ 
  content, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5 
}: TestimonialCardProps) => {
  return (
    <Card className="h-full hover-lift transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex space-x-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        <blockquote className="text-lg leading-relaxed">
          "{content}"
        </blockquote>
        
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {author.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{role}, {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;