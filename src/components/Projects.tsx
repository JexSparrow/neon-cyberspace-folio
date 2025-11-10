import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import burguer from "@/assets/Logo.svg";
import apple from "@/assets/apple.png";
import clima from "@/assets/clima.png";
import dado from "@/assets/dado1.png";
import instagram from "@/assets/instagram.png";
import mario from "@/assets/mario.png";
import pastel from "@/assets/pastel.png";
import netflix from "@/assets/netflix.png";
import starbucks from "@/assets/starbucks.png";
import spock from "@/assets/tesla3.png";
import pig from "@/assets/pig.gif";



interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  details: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dev Burguer - Full Stack",
      description: "Plataforma de e-commerce com design moderno e animações interativas. Totalmente funcional",
      icon: burguer,
      tags: ["React", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "#",
      githubUrl: "#",
      videoUrl: "dQw4w9WgXcQ",
      details:
        "Sistema completo de e-commerce com carrinho, checkout, autenticação de usuários e painel administrativo. Inclui integração com gateway de pagamento e sistema de notificações em tempo real.",
    },
    {
      id: 2,
      title: "Pastelaria Kulik",
      description: "Dashboard interativo com gráficos e métricas em tempo real",
      icon: pastel,
      tags: ["React", "Charts.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://pastelariakulik.com.br",
      githubUrl: "#",
      videoUrl: "DZAeVK-Xpt8",
      details:
        "Dashboard completo com visualização de dados em tempo real, gráficos interativos, filtros avançados e exportação de relatórios. Integrado com API REST para busca de dados.",
    },

    {
      id: 3,
      title: "Portfolio Criativo",
      description: "Site portfolio com animações 3D e efeitos de scroll",
      icon: mario,
      tags: ["React", "Framer Motion", "Three.js", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      videoUrl: "dQw4w9WgXcQ",
      details:
        "Portfolio interativo com animações 3D, efeitos parallax, scroll reveal e transições suaves. Design responsivo e otimizado para performance.",
    },
    {
      id: 4,
      title: "App de Delivery",
      description: "Aplicativo para pedidos online com rastreamento em tempo real",
      icon: clima,
      tags: ["React Native", "Firebase", "Maps API", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      videoUrl: "dQw4w9WgXcQ",
      details:
        "Aplicativo mobile para delivery com rastreamento GPS, pagamentos integrados, notificações push e sistema de avaliações. Interface intuitiva e responsiva.",
    },
    {
      id: 5,
      title: "Sistema de Blog",
      description: "CMS completo para criação e gestão de conteúdo",
      icon: pig,
      tags: ["Next.js", "MongoDB", "Markdown", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      videoUrl: "dQw4w9WgXcQ",
      details:
        "Plataforma de blog com editor Markdown, SEO otimizado, sistema de comentários, categorias, tags e busca avançada. Painel admin completo para gestão de conteúdo.",
    },
    {
      id: 6,
      title: "API RESTful",
      description: "Backend escalável com documentação completa",
      icon: spock,
      tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      videoUrl: "dQw4w9WgXcQ",
      details:
        "API REST completa com autenticação JWT, validação de dados, rate limiting, documentação Swagger e testes automatizados. Arquitetura limpa e escalável.",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
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
            <span className="text-2xl">🚀</span>
            <span className="text-secondary text-sm font-medium tracking-wider uppercase">
              Principais Projetos
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-glow-cyan">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden hover-glow cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(120,0,255,0.5)]"
                >
                  <img
                    src={project.icon}
                    alt={`${project.title} logo`}
                    className="w-36 h-36 object-contain mx-auto"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-semibold">Ver Detalhes</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="neon-border flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, "_blank");
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="neon-border flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="glass-card neon-border hover-glow px-8 py-6 text-lg font-orbitron"
            >
              {showAll ? "Mostrar Menos" : "Mostrar Mais Projetos"}
              <motion.span
                animate={{ y: showAll ? [0, -3, 0] : [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-2"
              >
                {showAll ? "↑" : "↓"}
              </motion.span>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card border-primary/30 max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-orbitron text-foreground">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid lg:grid-cols-2 gap-6 pt-4">
            {/* Video Section */}
            <div className="space-y-4">
              {selectedProject?.videoUrl && (
                <div className="relative w-full rounded-xl overflow-hidden glass-card border border-primary/30">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedProject.videoUrl}`}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                {selectedProject?.details}
              </DialogDescription>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-orbitron font-semibold text-secondary mb-3">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-primary/20 text-secondary border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-neon-purple transition-shadow flex-1"
                  onClick={() => window.open(selectedProject?.liveUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver Projeto ao Vivo
                </Button>
                <Button
                  variant="outline"
                  className="neon-border flex-1 hover:bg-primary/10"
                  onClick={() => window.open(selectedProject?.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Ver Código
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
