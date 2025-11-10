import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bird, Book, BookOpen, BriefcaseBusiness, Code2, Compass, PackagePlus, Sparkles, SquareCheck, Target, User } from "lucide-react";
import meBgImage from "@/assets/me-bg.png";

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
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8
      },
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
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 col-span-1 lg:col-span-2">
            <motion.div
              className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-8 h-8 text-foreground" />
              <span className="text-secondary text-2xl font-bold tracking-wider uppercase">Sobre Mim</span>
            </motion.div>
          </motion.div>

          {/* Grid Layout: Image + Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div 
              variants={imageVariants}
              className="relative max-w-sm mx-auto lg:max-w-none lg:translate-x-8"
            >
              <div className="about-image-holder">
                <img 
                  src={meBgImage} 
                  alt="Jeferson Santos" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Right Column - Card */}
            <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 rounded-2xl space-y-6">


            <div className="flex items-center justify-center space-x-3 py-4 border-b border-primary/20 ">
              <BookOpen className="w-8 h-8 text-secondary flex-shrink-0" />
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-xl text-secondary font-semibold">Um pouquinho da minha história ... </span>
              </p>
            </div>


            <div className="flex items-center space-x-4">

              <Compass className="w-8 h-8 text-accent flex-shrink-0 ml-4" />

              <p className="text-lg text-muted-foreground leading-relaxed">
                Me chamo <span className="text-foreground font-semibold">Jeferson Santos</span> e estou em{" "}
                <span className="text-secondary font-semibold">transição de carreira</span> para a área de tecnologia,
                trazendo comigo habilidades valiosas adquiridas ao longo da minha trajetória profissional.
              </p>


            </div>

            <div className="flex items-center space-x-8">

              <BriefcaseBusiness className="w-8 h-8 text-accent flex-shrink-0 ml-8" />

              <p className="text-lg text-muted-foreground leading-relaxed">
                Atualmente, atuo na {" "}
                <span className="text-secondary font-semibold">@Flaterz</span> desenvolvendo interfaces dinâmicas e responsivas para projetos {" "}
                <span className="text-accent">internacionais</span>, participando de reuniões com o time e apresentando resultados diretamente aos clientes.


              </p>


            </div>





            <div className="flex items-center  space-x-12">
              <Bird className="w-8 h-8 text-accent flex-shrink-0 ml-12" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como <span className="text-primary font-semibold">Freelancer</span> na área de Front-End, desenvolvo{" "}
                <span className="text-foreground font-semibold">interfaces modernas e responsivas</span>, sempre focado
                em <span className="text-secondary">UX/UI</span>, <span className="text-secondary">performance</span> e{" "}
                <span className="text-secondary">boas práticas</span>.
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed pt-2">
              Meu objetivo é criar <span className="text-primary font-semibold">soluções inovadoras e funcionais</span>,
              garantindo que cada projeto seja bem estruturado e com atenção aos detalhes.
            </p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-8 border-t border-primary/20"
            >
              <div className="text-center space-y-2">
                <div className="text-4xl font-orbitron font-bold text-yellow-400">10+</div>
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
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default About;
