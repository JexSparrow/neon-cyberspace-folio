import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Palette,
  Brush,
  Zap,
  Atom,
  Wind,
  Server,
  Database,
  Leaf,
  Flame,
  Container,
  Plug,
  Users,
  Trello,
  Bot,
  Sparkles,
  GitBranch,
  Github,
  Figma,
  PenTool,
  Monitor,
  type LucideIcon,
  ChevronsLeftRightIcon,
  Cpu,
  Blocks,
} from "lucide-react";

interface Tech {
  name: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const slide1: Tech[] = [
    { name: "HTML5", icon: Code2, description: "Estrutura semântica e acessível", color: "text-orange-400" },
    { name: "CSS3", icon: Palette, description: "Estilização moderna e responsiva", color: "text-blue-400" },
    { name: "Styled Components", icon: Brush, description: "Estilização Css-in-JS", color: "text-pink-400" },
    { name: "Tailwind", icon: Wind, description: "Framework CSS utilitário", color: "text-cyan-400" },
    { name: "JavaScript", icon: Zap, description: "Interatividade e lógica client-side", color: "text-yellow-400" },
    { name: "React", icon: Atom, description: "Biblioteca para interfaces dinâmicas", color: "text-cyan-400" },
    { name: "Vite", icon: Blocks, description: "Build tool rápido e moderno", color: "text-purple-400" },
  ];

  const slide2: Tech[] = [
    { name: "Node.js", icon: Server, description: "JavaScript runtime server-side", color: "text-green-400" },
    { name: "PostgreSQL", icon: Database, description: "Banco de dados relacional robusto", color: "text-blue-500" },
    { name: "MongoDB", icon: Leaf, description: "Banco NoSQL flexível e escalável", color: "text-green-500" },
    { name: "Supabase", icon: Flame, description: "Backend as a Service completo", color: "text-emerald-400" },
    { name: "Docker", icon: Container, description: "Containerização de aplicações", color: "text-blue-600" },
    { name: "REST API", icon: Plug, description: "Integração de sistemas via APIs", color: "text-secondary" },
  ];

  const slide3: Tech[] = [
    { name: "Scrum", icon: Users, description: "Framework ágil para gestão", color: "text-orange-400" },
    { name: "Kanban", icon: Trello, description: "Visualização de fluxo de trabalho", color: "text-primary" },
    { name: "ChatGPT", icon: Bot, description: "IA para otimização de código", color: "text-green-400" },
    { name: "Gemini", icon: Sparkles, description: "IA do Google para desenvolvimento", color: "text-accent" },
    { name: "Git", icon: GitBranch, description: "Controle de versão distribuído", color: "text-orange-500" },
    { name: "GitHub", icon: Github, description: "Hospedagem e colaboração de código", color: "text-foreground" },
    { name: "UX/UI", icon: Monitor, description: "Design de experiência do usuário", color: "text-secondary" },
    { name: "Figma", icon: Figma, description: "Design de interfaces colaborativo", color: "text-pink-500" },
    { name: "Canva", icon: PenTool, description: "Criação de designs e artes", color: "text-cyan-400" },
  ];

  const renderTechCard = (tech: Tech, slideIndex: number, techIndex: number) => {
    const IconComponent = tech.icon;

    return (
      <div key={`${slideIndex}-${tech.name}-${techIndex}`} className="flex-shrink-0 w-[140px] md:w-[200px] mx-2 md:mx-3">
        <div className="glass-card p-3 md:p-6 rounded-xl md:rounded-2xl text-center cursor-pointer relative overflow-hidden h-full group transition-all duration-300 hover:shadow-[var(--shadow-neon-purple)]">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Neon border effect */}
          <div
            className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: "0 0 20px hsl(var(--primary-glow) / 0.5), inset 0 0 20px hsl(var(--primary-glow) / 0.1)",
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-2 md:mb-4 flex justify-center">
              <div
                className={`${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_currentColor]`}
              >
                <IconComponent className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
              </div>
            </div>

            {/* Tech Name */}
            <h3 className="text-xs md:text-sm font-orbitron font-bold text-foreground mb-1 md:mb-2">{tech.name}</h3>

            {/* Description */}
            <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed hidden md:block">{tech.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="tech" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="w-8 h-8 text-foreground"></Cpu>
            <span className="text-secondary text-2xl font-bold tracking-wider uppercase">Stack Tecnológica</span>
          </motion.div>
        </motion.div>

        {/* Slide 1 - Right to Left */}
        <div
          className="relative py-2 md:py-4 overflow-hidden mb-2 md:mb-4 slide-mask"
          onMouseEnter={() => setHoveredSlide(1)}
          onMouseLeave={() => setHoveredSlide(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                  opacity: 1,
                  x: [0, "-100%"],
                }
                : { opacity: 0 }
            }
            transition={{
              opacity: { duration: 0.6 },
              x: {
                duration: hoveredSlide === 1 ? 60 : 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex"
          >
            {[...slide1, ...slide1].map((tech, index) => renderTechCard(tech, 1, index))}
          </motion.div>
        </div>

        {/* Slide 2 - Left to Right */}
        <div
          className="relative py-2 md:py-4 overflow-hidden mb-2 md:mb-4 slide-mask"
          onMouseEnter={() => setHoveredSlide(2)}
          onMouseLeave={() => setHoveredSlide(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                  opacity: 1,
                  x: ["-100%", 0],
                }
                : { opacity: 0 }
            }
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              x: {
                duration: hoveredSlide === 2 ? 60 : 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex"
          >
            {[...slide2, ...slide2].map((tech, index) => renderTechCard(tech, 2, index))}
          </motion.div>
        </div>

        {/* Slide 3 - Right to Left */}
        <div
          className="relative py-2 md:py-4 overflow-hidden slide-mask"
          onMouseEnter={() => setHoveredSlide(3)}
          onMouseLeave={() => setHoveredSlide(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                  opacity: 1,
                  x: [0, "-100%"],
                }
                : { opacity: 0 }
            }
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: {
                duration: hoveredSlide === 3 ? 70 : 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex"
          >
            {[...slide3, ...slide3].map((tech, index) => renderTechCard(tech, 3, index))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
