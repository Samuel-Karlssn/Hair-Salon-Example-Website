import { Scissors, Paintbrush, Sun, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Klippning",
    description: "Professionell klippning anpassad efter din ansiktsform och stil. Vi skapar en look som passar just dig.",
    prices: [
      { label: "Dam", price: "450 kr" },
      { label: "Herr", price: "350 kr" },
      { label: "Barn (under 12 år)", price: "250 kr" },
    ],
  },
  {
    icon: Paintbrush,
    name: "Färgning",
    description: "Naturlig och hållbar färgning med skonsamma produkter. Från subtila nyanser till djärva förändringar.",
    prices: [
      { label: "Helfärgning", price: "från 950 kr" },
      { label: "Botten", price: "från 750 kr" },
    ],
  },
  {
    icon: Sun,
    name: "Slingor",
    description: "Handmålade slingor och balayage för en naturlig, solkysst look som växer ut vackert.",
    prices: [
      { label: "Folieslingor", price: "från 1 200 kr" },
      { label: "Balayage", price: "från 1 500 kr" },
    ],
  },
  {
    icon: Wind,
    name: "Styling",
    description: "Professionell styling för vardagen eller speciella tillfällen. Fön, lockar, uppsättning och mer.",
    prices: [
      { label: "Föning & styling", price: "från 350 kr" },
      { label: "Uppsättning", price: "från 600 kr" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="tjanster" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Tjänster</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Våra tjänster
          </h2>
          <p className="text-muted-foreground">
            Vi erbjuder ett brett utbud av tjänster för att möta dina behov.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <service.icon size={20} />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="ml-14 space-y-2">
                {service.prices.map((p) => (
                  <div key={p.label} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{p.label}</span>
                    <span className="font-medium text-foreground">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
