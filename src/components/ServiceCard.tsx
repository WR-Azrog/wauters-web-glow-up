import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, image, icon }: ServiceCardProps) => {
  return (
    <div className="group overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-200">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="bg-primary text-primary-foreground px-4 py-2 font-bold text-sm mb-4 inline-block">
          {title}
        </div>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>
        <Button variant="outline" className="font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          PLUS D'INFO
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </div>
  );
};

export default ServiceCard;