import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anna L.",
    text: "Alltid lika nöjd! Har gått hit i flera år och tänker inte byta. Bästa frisören i Skövde.",
    rating: 5,
  },
  {
    name: "Erik S.",
    text: "Väldigt trevligt bemötande och professionellt resultat. Salongen är mysig och lugn, precis som man vill ha det.",
    rating: 5,
  },
  {
    name: "Maria K.",
    text: "Prisvärt och hög kvalitet. Min färgning blev precis som jag ville ha den, helt naturlig och fin.",
    rating: 5,
  },
  {
    name: "Johan H.",
    text: "Snabb och noggrann klippning. Lyssnar verkligen på vad man vill ha. Rekommenderar starkt!",
    rating: 4,
  },
];

const ReviewsSection = () => {
  return (
    <section id="omdomen" className="section-padding bg-salon-cream">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Omdömen</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Vad våra kunder säger
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < 5 ? "text-salon-gold fill-salon-gold" : "text-border"} />
              ))}
            </div>
            <span className="text-foreground font-medium">4.6 / 5</span>
            <span className="text-muted-foreground text-sm">baserat på 26 omdömen</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div key={review.name} className="bg-background rounded-lg border border-border p-7 relative">
              <Quote size={28} className="text-accent/15 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? "text-salon-gold fill-salon-gold" : "text-border"} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 text-sm">"{review.text}"</p>
              <p className="font-medium text-sm text-muted-foreground">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
