import { motion } from "framer-motion";
import { ChevronDown, ChevronsDown, Joystick, LucideComputer, Sparkles } from "lucide-react";
import me2 from "@/assets/me2.png";
import js from "@/assets/js.png";
import css from "@/assets/css.png";
import html from "@/assets/html.png";
import react from "@/assets/react.png";
import node from "@/assets/node.png";
import tailwind from "@/assets/tailwind.png";


const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">
                Bem-vindo ao meu portfólio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="text-5xl md:text-7xl font-orbitron font-bold leading-tight"
            >
              <span className="text-foreground text-glow-cyan">Jeferson Santos</span>
              <br />
              <span className=" text-5xl text-accent bg-gradient-to-t from-primary to-accent bg-clip-text text-transparent">
                {"< Front-End Developer />"}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl text-muted-foreground max-w-xl"
            >
              Transformando ideias em{" "}
              <span className="text-secondary font-semibold">experiências digitais modernas</span>.
              Criando interfaces interativas e responsivas com foco em UX/UI.
            </motion.p>

          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  rotate: 360, // gira continuamente
                  scale: [1, 1.15, 1], // pulsação suave
                }}
                transition={{
                  rotate: {
                    duration: 30, // tempo da rotação completa
                    repeat: Infinity,
                    ease: "linear", // rotação constante e contínua
                  },
                  scale: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut", // suaviza o vai e vem da escala
                  },
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-50 blur-2xl"
              />


              {/* Avatar Image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.05, 1], // zoom animado
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="w-auto h-96 overflow-hidden neon-border p-1">
                  <img
                    src={me2}
                    alt="Jeferson Santos"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(0, 255, 255, 0.5))",
                    }}
                  />
                </div>
              </motion.div>


              {/* CSS */}
              <motion.div
                initial={{ y: -200, x: -100, scale: 0, opacity: 0 }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 1.8, ease: "easeOut" },
                }}
                className="absolute top-10 -left-10 glass-card p-3 rounded-lg"
              >
                <img src={css} className="w-12 h-12 rounded-[8px]" />
              </motion.div>

              {/* JS */}
              <motion.div
                initial={{ y: 200, x: 150, scale: 4, opacity: 0 }}
                animate={{
                  y: [0, 10, 0],
                  x: [0, -15, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 2, ease: "easeOut", delay: 0.5 },
                }}
                className="absolute bottom-10 -right-10 glass-card p-3 rounded-lg"
              >
                <img src={js} className="w-10 h-10 rounded-[8px]" />
              </motion.div>

              {/* HTML */}
              <motion.div
                initial={{ y: -250, x: 250, scale: 3.8, opacity: 0 }}
                animate={{
                  y: [0, -8, 0],
                  x: [0, 12, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 1.8, ease: "easeOut", delay: 0.3 },
                }}
                className="absolute bottom-24 -left-16 glass-card p-3 rounded-lg"
              >
                <img src={html} className="w-12 h-12 rounded-[8px]" />
              </motion.div>

              {/* React */}
              <motion.div
                initial={{ y: -300, x: 200, scale: 2, opacity: 0 }}
                animate={{
                  y: [0, -12, 0],
                  x: [0, 15, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 2, ease: "easeOut", delay: 0.5 },
                }}
                className="absolute top-14 right-0 glass-card p-3 rounded-lg"
              >
                <img src={react} className="w-14 h-14 rounded-[8px]" />
              </motion.div>

              {/* Node */}
              <motion.div
                initial={{ y: -200, x: 550, scale: 0, opacity: 0 }}
                animate={{
                  y: [0, 10, 0],
                  x: [0, -15, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 2.2, ease: "easeOut", delay: 0.1 },
                }}
                className="absolute -top-12 right-20 glass-card p-3 rounded-lg"
              >
                <img src={node} className="w-10 h-10 rounded-[8px]" />
              </motion.div>

              {/* Tailwind */}
              <motion.div
                initial={{ y: 200, x: -200, scale: 0, opacity: 0 }}
                animate={{
                  y: [0, 8, 0],
                  x: [0, -10, 0],
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 2.4, ease: "easeOut", delay: 0.1 },
                }}
                className="absolute -bottom-8 left-20 glass-card p-3 rounded-lg"
              >
                <img src={tailwind} className="w-10 h-10 rounded-[8px]" />
              </motion.div>





            </div>
          </motion.div>


        </div>
      </div >

      {/* Scroll Indicator */}
      < motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-10 h-10 text-secondary" />

      </motion.div >
    </section >
  );
};

export default Hero;
