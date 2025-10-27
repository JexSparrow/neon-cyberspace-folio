import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const technologies = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Vite", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Supabase", icon: "🔥" },
    { name: "Docker", icon: "🐳" },
    { name: "REST API", icon: "🔌" },
    { name: "Scrum", icon: "🏃" },
    { name: "Kanban", icon: "📋" },
    { name: "ChatGPT", icon: "🤖" },
    { name: "Gemini", icon: "✨" },
    { name: "Lovable", icon: "💜" },
    { name: "Git", icon: "📦" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", icon: "🎯" },
    { name: "Canva", icon: "🖌️" },
    { name: "UX/UI", icon: "🎭" },
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

        {/* Infinite Scroll */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50 * technologies.length],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex space-x-8"
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 glass-card p-6 rounded-xl w-40 text-center hover-glow cursor-pointer"
                >
                  <div className="text-5xl mb-3 animate-pulse-glow">{tech.icon}</div>
                  <p className="text-sm font-semibold text-foreground">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
