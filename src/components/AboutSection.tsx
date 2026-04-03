import { Heart, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personlig service",
    description: "Vi lyssnar på dina önskemål och ger rådgivning anpassad efter just ditt hår och din stil.",
  },
  {
    icon: Users,
    title: "Lojala kunder",
    description: "Många av våra kunder har kommit tillbaka i flera år – det bästa beviset på kvalitet.",
  },
  {
    icon: Sparkles,
    title: "Hög kvalitet",
    description: "Vi använder produkter av högsta kvalitet och håller oss uppdaterade med de senaste teknikerna.",
  },
];

const AboutSection = () => {
  return (
    <section id="om-oss" className="section-padding bg-salon-cream">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Om oss</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Välkommen till din frisör i Skövde
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            På Norrmalms Frisör handlar allt om dig. Med lång erfarenhet och en genuin passion för hår 
            skapar vi resultat som får dig att känna dig som bäst. Vår salong på Folkungagatan är en 
            lugn oas där du kan slappna av medan vi tar hand om ditt hår med omsorg och precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-5 group-hover:bg-accent/20 transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
