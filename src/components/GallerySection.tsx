import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Blond klippning och styling" },
  { src: gallery2, alt: "Modern herrklippning" },
  { src: gallery3, alt: "Balayage färgning" },
  { src: gallery4, alt: "Frisörverktyg i salongen" },
  { src: gallery5, alt: "Kort bob-frisyr" },
  { src: gallery6, alt: "Salongens mysiga interiör" },
];

const GallerySection = () => {
  return (
    <section id="galleri" className="section-padding bg-salon-cream">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Galleri</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Inspiration & resultat
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${
                i === 0 || i === 5 ? "row-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
