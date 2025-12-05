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

          {/* Logo + Nome + Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}       // começa invisível e um pouco abaixo
            whileInView={{ opacity: 1, y: 0 }}    // sobe e aparece
            viewport={{ once: true }}             // anima só 1 vez
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-col flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Logo Jeferson Santos"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-base text-center font-orbitron font-bold leading-tight"
            >
              <span className="text-foreground text-glow-cyan">Jeferson Santos</span>
              <br />
              <span className="text-xs bg-gradient-to-t from-primary to-accent bg-clip-text text-transparent">
                {"< Front-End Developer />"}
              </span>
            </motion.h1>
          </motion.div>



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
              { label: "FAQ", id: "faq" },
              { label: "Contato", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-muted-foreground hover:text-secondary hover:font-semibold transition-all relative group touch-manipulation"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </motion.div>

          {/* Divider - Borda*/}
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
              © {currentYear} <span className="text-foreground font-semibold">Jeferson Santos</span> — <span className="text-foreground font-semibold">Front-End Developer</span>. Todos Direitos Reservados.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-secondary/30 to-transparent blur-2xl" />
    </footer>
  );
};

export default Footer;
