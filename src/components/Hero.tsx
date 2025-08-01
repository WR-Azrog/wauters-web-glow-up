import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.4)'
        }}
      />
      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Rénovation & Construction
          <span className="block text-primary text-3xl md:text-4xl mt-2">
            Depuis plus de 20 ans à votre service
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Une entreprise familiale qui met son savoir-faire au service de vos projets. 
          Chauffage, plomberie, aménagement intérieur et toiture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="flex items-center space-x-2 bg-primary hover:bg-primary/90 px-8 py-3">
            <Phone className="w-5 h-5" />
            <span>Appelez Olivier maintenant</span>
          </Button>
          <Button variant="outline" size="lg" className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3">
            <span>Devis gratuit</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;