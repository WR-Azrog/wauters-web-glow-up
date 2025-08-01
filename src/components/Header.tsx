import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">EW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Entreprises Wauters</h1>
              <p className="text-sm text-muted-foreground">Entrepreneur Général</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0472 64 06 45</span>
            </Button>
            <Button size="sm" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;