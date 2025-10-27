import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Target } from "lucide-react";

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-5 h-5 text-secondary" />
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">
                Sobre Mim
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="text-foreground">Jeferson Santos</span>
              <br />
              <span className="text-glow-cyan text-secondary">{"< Front-End Developer />"}</span>
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-secondary font-semibold">Olá! Tudo bom? Sejam Bem-Vindos!</span>
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Me chamo <span className="text-foreground font-semibold">Jeferson</span> e estou em{" "}
              <span className="text-secondary font-semibold">transição de carreira</span> para a área de tecnologia,
              trazendo comigo habilidades valiosas adquiridas ao longo da minha trajetória profissional.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente, estou me especializando em{" "}
              <span className="text-secondary font-semibold">desenvolvimento web</span> por meio da formação{" "}
              <span className="text-primary font-semibold">DevClub</span>, onde realizo projetos práticos utilizando{" "}
              <span className="text-secondary">HTML</span>, <span className="text-secondary">CSS</span>,{" "}
              <span className="text-secondary">JavaScript</span>, <span className="text-secondary">React</span>,{" "}
              <span className="text-secondary">Node.js</span>, <span className="text-secondary">PostgreSQL</span> e{" "}
              <span className="text-secondary">MongoDB</span>.
            </p>

            <div className="flex items-start space-x-3">
              <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como <span className="text-primary font-semibold">Freelancer</span> na área de Front-End, desenvolvo{" "}
                <span className="text-foreground font-semibold">interfaces modernas e responsivas</span>, sempre focado
                em <span className="text-secondary">UX/UI</span>, <span className="text-secondary">performance</span> e{" "}
                <span className="text-secondary">boas práticas</span>.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu objetivo é criar <span className="text-primary font-semibold">soluções inovadoras e funcionais</span>,
              garantindo que cada projeto seja bem estruturado e com atenção aos detalhes.
            </p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-primary/20"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-primary text-glow-purple">10+</div>
                <p className="text-sm text-muted-foreground">Projetos Realizados</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-secondary text-glow-cyan">15+</div>
                <p className="text-sm text-muted-foreground">Tecnologias</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-accent">100%</div>
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
