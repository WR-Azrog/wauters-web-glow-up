import ServiceCard from "./ServiceCard";
import { Thermometer, Wrench, Home, Construction } from "lucide-react";
import chauffageImage from "@/assets/chauffage-sanitaire.jpg";
import plomberieImage from "@/assets/plomberie.jpg";
import amenagementImage from "@/assets/amenagement-interieur.jpg";
import toitureImage from "@/assets/toiture.jpg";

const Services = () => {
  const services = [
    {
      title: "Chauffage & Sanitaire",
      description: "Installation et maintenance de systèmes de chauffage efficaces, ainsi que de solutions sanitaires modernes pour un confort optimal dans votre maison ou votre entreprise.",
      image: chauffageImage,
      icon: <Thermometer className="w-6 h-6 text-primary-foreground" />
    },
    {
      title: "Plomberie",
      description: "Installation, réparation et entretien de vos systèmes de plomberie, pour assurer un fonctionnement optimal et durable de vos installations.",
      image: plomberieImage,
      icon: <Wrench className="w-6 h-6 text-primary-foreground" />
    },
    {
      title: "Aménagement Intérieur", 
      description: "Transformez vos espaces avec notre service d'aménagement intérieur sur mesure, alliant design et fonctionnalité pour répondre à vos besoins.",
      image: amenagementImage,
      icon: <Home className="w-6 h-6 text-primary-foreground" />
    },
    {
      title: "Toiture",
      description: "Des services de toiture complets : installation, réparation et entretien pour assurer la protection de votre maison face aux intempéries et à l'usure du temps.",
      image: toitureImage,
      icon: <Construction className="w-6 h-6 text-primary-foreground" />
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Découvrez nos services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe d'experts qualifiés pour tous vos projets de rénovation et construction
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;