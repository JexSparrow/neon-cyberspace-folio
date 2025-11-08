import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative inline-block">
              <span className="font-orbitron text-4xl font-bold text-primary text-glow-purple">
                JS
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-primary to-secondary" />
            </div>
            <p className="text-muted-foreground mt-4">
              {"< Front-End Developer />"}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {["Home", "Sobre Mim", "Tecnologias", "Projetos", "Contato"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .getElementById(link.toLowerCase().replace(" ", ""))
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted-foreground hover:text-secondary transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> por Jeferson Santos
            </p>
            <p className="text-muted-foreground text-xs">
              © {currentYear} Jeferson Santos — Front-End Developer
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
