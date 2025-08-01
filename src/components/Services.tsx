import ServiceCard from "./ServiceCard";
import { Hammer, Droplets, Home, Shield } from "lucide-react";
import chauffageImage from "@/assets/chauffage-sanitaire.jpg";
import plomberieImage from "@/assets/plomberie.jpg";
import amenagementImage from "@/assets/amenagement-interieur.jpg";
import toitureImage from "@/assets/toiture.jpg";

const Services = () => {
  const services = [
    {
      title: "CHAUFFAGE & SANITAIRE",
      description: "Installation et maintenance de systèmes de chauffage, chaudières, radiateurs et installations sanitaires complètes.",
      image: chauffageImage,
      icon: <Droplets className="w-6 h-6 text-white" />
    },
    {
      title: "PLOMBERIE",
      description: "Réparation, installation et dépannage de tous types de canalisations, robinetterie et équipements sanitaires.",
      image: plomberieImage,
      icon: <Hammer className="w-6 h-6 text-white" />
    },
    {
      title: "AMÉNAGEMENT INTÉRIEUR",
      description: "Rénovation complète d'intérieurs, cloisons, sols, peinture et aménagements sur mesure pour votre confort.",
      image: amenagementImage,
      icon: <Home className="w-6 h-6 text-white" />
    },
    {
      title: "TOITURE",
      description: "Réfection, réparation et entretien de toitures. Expertise en couverture traditionnelle et moderne.",
      image: toitureImage,
      icon: <Shield className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section className="py-16 bg-background ml-80">
      <div className="px-8">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-3 font-black text-2xl mb-4">
            Services
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;