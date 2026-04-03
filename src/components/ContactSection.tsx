import { MapPin, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer så snart vi kan.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-medium tracking-[0.15em] uppercase text-accent mb-3">Kontakt</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Hitta till oss
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Adress</h3>
                <p className="text-muted-foreground text-sm">
                  Folkungagatan 20A<br />549 54 Skövde
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Telefon</h3>
                <a href="tel:0702287249" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  070-228 72 49
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground mb-1">Öppettider</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Måndag – Fredag: 09:00 – 18:00</p>
                  <p>Lördag: 10:00 – 15:00</p>
                  <p>Söndag: Stängt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Ditt namn"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Din e-post"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card"
            />
            <Textarea
              placeholder="Ditt meddelande..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
              className="bg-card resize-none"
            />
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <Send size={16} className="mr-2" /> Skicka meddelande
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
