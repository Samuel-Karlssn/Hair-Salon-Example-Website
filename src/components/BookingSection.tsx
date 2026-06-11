import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

// ╔══════════════════════════════════════════════════════════════╗
// ║  INSTRUKTION: Byt ut URL:en nedan mot din riktiga           ║
// ║  Calendly-länk, t.ex. "https://calendly.com/ditt-namn"     ║
// ║  Allt annat sköter sig själv – inklusive dubbelboknings-   ║
// ║  skydd som hanteras automatiskt av Calendly.                ║
// ╚══════════════════════════════════════════════════════════════╝
const CALENDLY_URL = "https://calendly.com/ÄNDRA-TILL-DIN-LÄNK";

const BookingSection = () => {
  useEffect(() => {
    // Load Calendly script once
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

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
              { icon: CalendarDays, text: "Välj tjänst" },
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

          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden border border-border mb-8"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />

          <p className="text-center text-sm text-muted-foreground">
            Du kan även ringa oss direkt på{" "}
            <a href="tel:0701234567" className="text-accent hover:underline font-medium">
              070-123 45 67
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
