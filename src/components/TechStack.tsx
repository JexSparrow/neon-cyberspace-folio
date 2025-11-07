import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code2, 
  Palette, 
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
  Heart, 
  GitBranch, 
  Github, 
  Figma, 
  PenTool, 
  Monitor,
  LucideIcon
} from "lucide-react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies: Array<{
    name: string;
    icon: LucideIcon;
    description: string;
    color: string;
  }> = [
    { name: "HTML5", icon: Code2, description: "Estrutura semântica e acessível", color: "text-orange-400" },
    { name: "CSS3", icon: Palette, description: "Estilização moderna e responsiva", color: "text-blue-400" },
    { name: "JavaScript", icon: Zap, description: "Interatividade e lógica client-side", color: "text-yellow-400" },
    { name: "React", icon: Atom, description: "Biblioteca para interfaces dinâmicas", color: "text-cyan-400" },
    { name: "Vite", icon: Wind, description: "Build tool rápido e moderno", color: "text-purple-400" },
    { name: "Node.js", icon: Server, description: "JavaScript runtime server-side", color: "text-green-400" },
    { name: "PostgreSQL", icon: Database, description: "Banco de dados relacional robusto", color: "text-blue-500" },
    { name: "MongoDB", icon: Leaf, description: "Banco NoSQL flexível e escalável", color: "text-green-500" },
    { name: "Supabase", icon: Flame, description: "Backend as a Service completo", color: "text-emerald-400" },
    { name: "Docker", icon: Container, description: "Containerização de aplicações", color: "text-blue-600" },
    { name: "REST API", icon: Plug, description: "Integração de sistemas via APIs", color: "text-secondary" },
    { name: "Scrum", icon: Users, description: "Framework ágil para gestão", color: "text-orange-400" },
    { name: "Kanban", icon: Trello, description: "Visualização de fluxo de trabalho", color: "text-primary" },
    { name: "ChatGPT", icon: Bot, description: "IA para otimização de código", color: "text-green-400" },
    { name: "Gemini", icon: Sparkles, description: "IA do Google para desenvolvimento", color: "text-accent" },
    { name: "Lovable", icon: Heart, description: "Plataforma de desenvolvimento visual", color: "text-pink-400" },
    { name: "Git", icon: GitBranch, description: "Controle de versão distribuído", color: "text-orange-500" },
    { name: "GitHub", icon: Github, description: "Hospedagem e colaboração de código", color: "text-foreground" },
    { name: "Figma", icon: Figma, description: "Design de interfaces colaborativo", color: "text-pink-500" },
    { name: "Canva", icon: PenTool, description: "Criação de designs e artes", color: "text-cyan-400" },
    { name: "UX/UI", icon: Monitor, description: "Design de experiência do usuário", color: "text-secondary" },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="tech" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4 glass-card px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">⚙️</span>
            <span className="text-secondary text-sm font-medium tracking-wider uppercase">
              Stack Tecnológica
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-glow-purple">
            Tecnologias que <span className="text-secondary">Utilizo</span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="glass-card p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden h-full"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Neon border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ 
                         boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.5), inset 0 0 20px hsl(var(--primary-glow) / 0.1)' 
                       }} 
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="mb-4 flex justify-center"
                    >
                      <div className={`${tech.color} transition-all duration-300 group-hover:drop-shadow-[0_0_12px_currentColor]`}>
                        <IconComponent size={48} strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    
                    {/* Tech Name */}
                    <h3 className="text-sm font-orbitron font-bold text-foreground mb-2">
                      {tech.name}
                    </h3>
                    
                    {/* Description on hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        height: isHovered ? 'auto' : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
