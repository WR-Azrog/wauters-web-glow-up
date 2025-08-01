const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">EW</span>
              </div>
              <div>
                <h3 className="font-bold">Entreprises Wauters</h3>
                <p className="text-sm opacity-80">Entrepreneur Général</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de rénovation et construction.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Chauffage & Sanitaire</li>
              <li>Plomberie</li>
              <li>Aménagement Intérieur</li>
              <li>Toiture</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>📞 0472 64 06 45</p>
              <p>✉️ info@entreprises-wauters.be</p>
              <p>🕒 Lun-Ven: 8h-18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Entreprises Wauters. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;