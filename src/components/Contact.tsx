import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-muted ml-80">
      <div className="px-8">
        <div className="mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-3 font-black text-2xl mb-4">
            Pourquoi optez-vous pour « Entreprises Wauters » ?
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <p className="text-foreground">
                Vous avez le projet de <strong>rénover ou construire</strong> et vous recherchez 
                une entreprise de confiance pour vos travaux
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <p className="text-foreground">
                Vous souhaitez faire appel à une <strong>entreprise familiale</strong> avec 
                plus de 20 ans d'expérience
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <p className="text-foreground">
                Vous privilégiez la <strong>qualité</strong> et la <strong>proximité</strong> 
                dans le suivi de vos projets
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary flex items-center justify-center mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <p className="text-foreground">
                Vous recherchez un <strong>interlocuteur unique</strong> pour une 
                traçabilité et un suivi optimal
              </p>
            </div>
          </div>

          <Card className="bg-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-foreground">Contactez-nous</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">0472 64 06 45</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">info@entreprises-wauters.be</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Belgique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Lun-Ven: 8h-18h</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3">
                DEMANDE DE DEVIS GRATUIT
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;