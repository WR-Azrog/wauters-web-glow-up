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
    <Card className="group overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200" />
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded flex items-center justify-center shadow-sm">
          {icon}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80 flex items-center space-x-2">
          <span>En savoir plus</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;