import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors size={20} />
              <span className="font-heading text-lg font-semibold">Norrmalms Frisör</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Din lokala frisör i Skövde sedan många år. Vi brinner för att skapa frisyrer som gör dig glad.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Öppettider</h4>
            <div className="text-primary-foreground/70 text-sm space-y-1.5">
              <p>Måndag – Fredag: 09:00 – 18:00</p>
              <p>Lördag: 10:00 – 15:00</p>
              <p>Söndag: Stängt</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Kontakt</h4>
            <div className="text-primary-foreground/70 text-sm space-y-1.5">
              <p>Folkungagatan 20A</p>
              <p>549 54 Skövde</p>
              <a href="tel:0702287249" className="block hover:text-primary-foreground transition-colors">
                070-228 72 49
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            Välkommen till Norrmalms Frisör — din frisör i Skövde
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
