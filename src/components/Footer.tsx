import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import logo from "@/assets/jslogo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}

          <img
            src={logo}
            alt="Logo Jeferson Santos"
            className="w-12 h-12 md:w-14 md:h-14 object-contain"
          />

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm"
          >
            {[
              { label: "Home", id: "home" },
              { label: "Sobre Mim", id: "about" },
              { label: "Tecnologias", id: "tech" },
              { label: "Projetos", id: "projects" },
              { label: "Contato", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted-foreground hover:text-secondary transition-colors relative group touch-manipulation"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/90 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-2"
          >

            <p className="text-muted-foreground text-xs">
              © {currentYear} Jeferson Santos — Front-End Developer. Todos Direitos Reservados.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-primary/10 to-transparent blur-2xl" />
    </footer>
  );
};

export default Footer;
