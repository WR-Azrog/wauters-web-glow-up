import { Button } from "@/components/ui/button";
import { Phone, Home, Wrench, Hammer, Droplets, Shield, ShowerHead } from "lucide-react";

const Sidebar = () => {
  const services = [
    { icon: <Home className="w-5 h-5" />, name: "ENTREPRISES WAUTERS", isTitle: true },
    { icon: <Hammer className="w-4 h-4" />, name: "CHARPENTE" },
    { icon: <Shield className="w-4 h-4" />, name: "TOITURE" },
    { icon: <Droplets className="w-4 h-4" />, name: "PLOMBERIE" },
    { icon: <ShowerHead className="w-4 h-4" />, name: "CHAUFFAGE & SANITAIRE" },
    { icon: <Wrench className="w-4 h-4" />, name: "AMÉNAGEMENT INTÉRIEUR" },
    { icon: <Phone className="w-4 h-4" />, name: "CONTACT" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-secondary text-secondary-foreground shadow-lg z-40 overflow-y-auto">
      <div className="p-6">
        {/* Logo and phone */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground font-black text-xl flex items-center justify-center">
              EW
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">ENTREPRISES</h1>
              <h1 className="text-white font-bold text-lg">WAUTERS</h1>
            </div>
          </div>
          
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            0472 64 06 45
          </Button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {services.map((service, index) => (
            <div key={index}>
              {service.isTitle ? (
                <div className="flex items-center space-x-3 py-4 px-3 bg-primary text-primary-foreground font-bold">
                  {service.icon}
                  <span>{service.name}</span>
                </div>
              ) : (
                <button className="w-full flex items-center space-x-3 py-3 px-3 text-left hover:bg-secondary/80 text-white border-b border-white/10">
                  {service.icon}
                  <span className="font-medium">{service.name}</span>
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;