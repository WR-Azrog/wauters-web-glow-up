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
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Votre Projet de 
          <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Rénovation
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Spécialistes en chauffage, plomberie, aménagement intérieur et toiture. 
          Plus de 20 ans d'expérience à votre service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="flex items-center space-x-2 bg-primary hover:bg-primary/90">
            <Phone className="w-5 h-5" />
            <span>Appelez-nous maintenant</span>
          </Button>
          <Button variant="outline" size="lg" className="flex items-center space-x-2 border-white text-white hover:bg-white hover:text-primary">
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;