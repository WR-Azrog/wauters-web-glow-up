import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">EW</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Entreprises Wauters</h1>
              <p className="text-muted-foreground">Entrepreneur Général - Entreprise Familiale</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="default" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0472 64 06 45</span>
            </Button>
            <Button size="default" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Devis gratuit</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;