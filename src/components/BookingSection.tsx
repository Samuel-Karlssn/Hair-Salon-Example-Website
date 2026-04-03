import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingSection = () => {
  return (
    <section id="boka" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Bokning</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Boka din tid enkelt
            </h2>
            <p className="text-muted-foreground text-lg">
              Välj en tid som passar dig – det tar bara en minut.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {[
              { icon: CalendarDays, text: "Välj datum" },
              { icon: Clock, text: "Välj tid" },
              { icon: CheckCircle2, text: "Klart!" },
            ].map((step, i) => (
              <div key={step.text} className="flex items-center gap-3">
                {i > 0 && <div className="hidden sm:block w-8 h-px bg-border" />}
                <div className="flex items-center gap-2 text-muted-foreground">
                  <step.icon size={20} className="text-accent" />
                  <span className="text-sm font-medium">{step.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Calendly placeholder */}
          <div className="bg-card border border-border rounded-lg p-12 text-center mb-8">
            <CalendarDays size={48} className="mx-auto text-accent/30 mb-4" />
            <p className="text-muted-foreground mb-2">Bokningssystem laddas här</p>
            <p className="text-xs text-muted-foreground/60 mb-6">
              Plats för Calendly-widget eller annat bokningssystem
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-10">
              <a href="tel:0702287249">Ring för att boka: 070-228 72 49</a>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Du kan även ringa oss direkt på{" "}
            <a href="tel:0702287249" className="text-accent hover:underline font-medium">
              070-228 72 49
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
