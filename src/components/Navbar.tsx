import { useState, useEffect } from "react";
import { Menu, X, Github, Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/jslogo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Sobre Mim", id: "about" },
    { label: "Tecnologias", id: "tech" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              // Framer Motion aceita strings para filter, porém alguns setups podem warn.
              // Se houver problema, remova ou substitua por shadow animado por CSS/Tailwind.
              filter: [
                "drop-shadow(0 0 12px rgba(174, 0, 255, 0.6))",
                "drop-shadow(0 0 20px rgba(0, 255, 255, 0.9))",
                "drop-shadow(0 0 16px rgba(174, 0, 255, 0.6))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
            aria-label="Ir para o topo"
          >
            <img
              src={logo}
              alt="Logo Jeferson Santos"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-secondary transition-colors duration-300 relative group font-medium"
                aria-label={`Ir para ${link.label}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon-lg"
              className="neon-border"
              onClick={() => window.open("https://github.com/JexSparrow", "_blank")}>
              <Github className="!w-8 !h-8" />
            </Button>

            <Button
              variant="outline"
              size="icon-lg"
              className="neon-border"
              onClick={() => window.open("https://linkedin.com/in/jexsantos/", "_blank")}>
              <Linkedin className="!w-8 !h-8" />
            </Button>

            <Button asChild variant="outline" size="sm" className="neon-border">
              <a href="/Jeferson-Santos.pdf" download="Jeferson-Santos.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/20 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-secondary" /> : <Menu className="w-6 h-6 text-secondary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-primary/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 px-4 hover:bg-primary/20 rounded-lg transition-colors text-foreground"
                  aria-label={`Ir para ${link.label}`}
                >
                  {link.label}
                </motion.button>
              ))}

              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="w-full neon-border"
                  onClick={() => window.open("https://github.com/JexSparrow", "_blank", "noopener,noreferrer")}
                  aria-label="Abrir GitHub"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Github
                </Button>

                <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary" aria-label="Download do currículo">
                  <a href="/Jeferson-Santos.pdf" download="Jeferson-Santos.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
