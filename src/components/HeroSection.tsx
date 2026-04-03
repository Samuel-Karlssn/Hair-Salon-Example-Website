import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern frisörsalong i Skövde"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-5">
        <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-4 animate-fade-in-up">
          Norrmalms Frisör
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Din lokala frisör<br className="hidden md:block" /> i Skövde
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Professionell klippning och färgning i en lugn och trivsam miljö
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
            <a href="#boka">Boka tid</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 border-foreground/20 text-foreground hover:bg-foreground/5">
            <a href="#tjanster">Våra tjänster</a>
          </Button>
        </div>

        {/* Rating badge */}
        <div className="mt-12 inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < 4 ? "text-salon-gold" : "text-salon-gold/40"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">4.6 / 5</span>
          <span className="text-sm text-muted-foreground">— 26 omdömen</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
