import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative ml-80 px-8 py-20 text-white max-w-4xl">
        {/* Titre principal avec blocs orange */}
        <div className="space-y-4 mb-8">
          <div className="inline-block bg-primary px-6 py-3 font-black text-xl md:text-2xl">
            L'ENTREPRISE A 20 ANS
          </div>
          <div className="inline-block bg-primary px-6 py-3 font-black text-xl md:text-2xl">
            D'EXPÉRIENCE
          </div>
          <div className="inline-block bg-primary px-6 py-3 font-black text-xl md:text-2xl">
            DANS LA RÉNOVATION
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            ENTREPRISES WAUTERS A 20 ANS D'EXPÉRIENCE DANS LA RÉNOVATION, 
            SON SIÈGE EST BASÉ EN BELGIQUE
          </h2>
          
          <p className="text-lg opacity-90 max-w-3xl leading-relaxed">
            <strong>Entreprises Wauters</strong> intervient dans toute la Belgique. 
            Depuis sa création, notre entreprise familiale est en constante progression 
            avec une croissance maîtrisée et un savoir-faire reconnu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              DEMANDE DE DEVIS
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg">
              NOS RÉALISATIONS
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;