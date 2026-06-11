import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Omdömen", href: "#omdomen" },
  { label: "Galleri", href: "#galleri" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <a href="#" className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            Frisörsidan
          </a>
          <span className="hidden sm:inline-block text-[10px] md:text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-full">
            Inte en riktigt frisör, endast exempel sida
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#boka">Boka tid</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full mt-2">
              <a href="#boka" onClick={() => setIsOpen(false)}>Boka tid</a>
            </Button>
            <a href="tel:0701234567" className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
              <Phone size={16} /> 070-123 45 67
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
