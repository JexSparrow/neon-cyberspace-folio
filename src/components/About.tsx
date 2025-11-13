import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Bird,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Compass,
} from "lucide-react";
import meBgImage from "@/assets/me-bg.png";
import { useState } from "react";

// 🔢 Novo contador mais fluido
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, count, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplay(latest));
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-8 h-8 text-foreground" />
              <span className="text-secondary text-2xl font-bold tracking-wider uppercase">
                Sobre Mim
              </span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 md:p-12 rounded-2xl space-y-6 relative"
          >
            {/* Avatar decorativo */}
            <motion.div
              variants={{
                hidden: { x: -20, opacity: 0, scale: 1.4 },
                visible: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.5,
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="hidden md:block absolute bottom-0 -right-[198px] w-1/4 max-w-[240px] pointer-events-none z-0"
            >
              <motion.img
                src={meBgImage}
                alt="Avatar Jeferson Santos"
                className="w-full h-auto object-contain rounded-bl-2xl opacity-90"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(120, 0, 255, 0.5))",
                }}
                animate={isInView ? { y: [0, -20, 0] } : { y: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Textos */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3 py-4 border-b border-primary/20">
              <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-secondary flex-shrink-0" />
              <p className="text-base md:text-lg text-foreground leading-relaxed text-center md:text-left">
                <span className="text-xl md:text-2xl text-secondary font-semibold">
                  Um pouquinho da minha história...
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <Compass className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0 md:ml-4" />
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                Me chamo{" "}
                <span className="text-yellow font-bold">
                  Jeferson Santos
                </span>{" "}
                e estou em{" "}
                <span className="text-secondary font-semibold">
                  transição de carreira
                </span>{" "}
                para a área de tecnologia, trazendo comigo habilidades valiosas
                adquiridas ao longo da minha trajetória profissional.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <BriefcaseBusiness className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0 md:ml-8" />
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                Atualmente, atuo na{" "}
                <span className="text-yellow font-bold">@Flaterz</span>{" "}
                desenvolvendo interfaces dinâmicas e responsivas para projetos{" "}
                <span className="text-yellow font-bold">internacionais</span>.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-12">
              <Bird className="w-7 h-7 md:w-8 md:h-8 text-accent flex-shrink-0 md:ml-12" />
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">
                Como{" "}
                <span className="text-yellow font-bold">Freelancer</span> na
                área de Front-End, desenvolvo{" "}
                <span className="text-accent font-semibold">
                  interfaces modernas e responsivas
                </span>
                , sempre focado em{" "}
                <span className="text-secondary font-semibold">UX/UI</span>,{" "}
                <span className="text-secondary font-semibold">performance</span> e{" "}
                <span className="text-secondary font-semibold">boas práticas</span>.
              </p>
            </div>

            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed pt-2 text-center md:text-left">
              Meu objetivo é criar{" "}
              <span className="text-accent font-semibold">
                soluções inovadoras e funcionais
              </span>
              , garantindo que cada projeto seja bem estruturado e com atenção
              aos detalhes.
            </p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-8 border-t border-primary/20"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-yellow text-glow-yellow">
                  <AnimatedCounter value={10} />+
                </div>
                <p className="text-sm text-muted-foreground">Projetos Realizados</p>
              </div>

              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-secondary text-glow-cyan">
                  <AnimatedCounter value={15} />+
                </div>
                <p className="text-sm text-muted-foreground">Tecnologias</p>
              </div>

              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-accent text-glow-purple">
                  <AnimatedCounter value={100} />%
                </div>
                <p className="text-sm text-muted-foreground">Dedicação</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
