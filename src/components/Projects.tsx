import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// Importações de Assets (mantidas)
import burguer from "@/assets/burguer.png";
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
import rex from "@/assets/rex.png";
import gym from "@/assets/gym.gif";
import crud from "@/assets/crud.gif";


interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrl2?: string; // NOVO: URL para o segundo repositório
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
      description: "Plataforma de e-commerce com design moderno e animações interativas. Totalmente funcional e escalável.",
      icon: burguer,
      tags: ["React", "Javascript", "Styled-Components", "Vite", "Figma", "Node.js", "MVC", "CRUD", "PostgreSQL", "MongoDB", "Docker", "API", "Hooks", "Toasts", "Projeto Educacional"],
      githubUrl: "https://github.com/JexSparrow/devburguer-interface",
      githubUrl2: "https://github.com/JexSparrow/devburguer-backend", // Exemplo real
      videoUrl: "L56P5vfA688",
      details:
        "Sistema completo de e-commerce com autenticação de usuários, carrinho, ofertas, simulação de frete com entrega. Além de um painel administrativo completo, onde podemos editar os produtos.",
    },
    {
      id: 2,
      title: "Pastelaria Kulik",
      description: "É com satisfação que apresento um projeto Freelancer desenvolvido para a Pastelaria Kulik, focado em criar uma experiência online moderna, engajadora e otimizada para o usuário.",
      icon: pastel,
      tags: ["React", "Styled-Components", "UX/UI", "Design Digital", "Framer-Motion", "Swiper.js", "Responsividade", "Atendimento ao Cliente"],
      liveUrl: "https://pastelariakulik.com.br",
      githubUrl: "https://github.com/JexSparrow/pastelaria",
      githubUrl2: "#",
      videoUrl: "DZAeVK-Xpt8",
      details: "Em resumo, o site da Pastelaria Kulik não é apenas uma vitrine online, mas uma ferramenta poderosa para engajar clientes, apresentar seus produtos de forma irresistível e fortalecer a presença digital da marca.",
    },

    {
      id: 3,
      title: "Rex Fit - Academia",
      description: "Uma landing page moderna e de alto impacto criada para destacar a identidade da academia com clareza e dinamismo. Com design responsivo para transmitir energia, confiança e movimento.",
      icon: rex,
      tags: ["React", "Typescript", "Tailwind", "Framer Motion", "UX/UI", "Design Digital", "Freelancer", "Responsividade"],
      liveUrl: "https://preview--rex-fit.lovable.app/",
      githubUrl: "#",
      githubUrl2: "#",
      videoUrl: "dQw4w9WgXcQ",
      details: "Uma landing page moderna e completa, oferecendo uma experiência visual envolvente e responsiva. O projeto destaca os serviços da academia com animações suaves, seções dinâmicas e foco total na conversão do usuário. A página foi criada para transmitir energia, movimento e profissionalismo, fortalecendo a presença digital da marca.",
    },
    {
      id: 4,
      title: "Clima Dinâmico - API",
      description: "Aplicativo de clima com dados em tempo real, animações dinâmicas. Desenvolvido para oferecer previsões precisas, visualização interativa e experiência fluida em qualquer dispositivo.",
      icon: clima,
      tags: ["JavaScript", "HTML", "CSS3", "API", "Responsividade", "UX/UI", "Projeto Educacional"],
      liveUrl: "https://climate-preview.netlify.app/",
      githubUrl: "https://github.com/JexSparrow/Previsao-Tempo",
      githubUrl2: "#",
      videoUrl: "EYDkKkEt1A",
      details:
        "Aplicativo completo que fornece informações meteorológicas em tempo real, utilizando dados precisos e atualizados conforme O usuário digita a localização. O sistema apresenta detalhes como temperatura, sensação térmica, velocidade do vento e umidade, acompanhados de animações visuais que refletem as condições climáticas atuais. ",

    },

    {
      id: 5,
      title: "Conversor de Moeda",
      description:
        "Conversor de moedas dinâmico desenvolvido com HTML, CSS e JavaScript, integrado a uma API de cotações em tempo real. Permite transformar valores entre diversas moedas globais de forma prática.",
      icon: pig,
      tags: ["HTML", "CSS", "JavaScript", "UX/UI", "API", "Responsividade", "Projeto Educacional"],
      liveUrl: "https://money-jex.netlify.app/",
      githubUrl: "https://github.com/JexSparrow/Conversor",
      githubUrl2: "#",
      videoUrl: "fn0b224EacQ",
      details: `
✅ Cotações em tempo real obtidas de uma API confiável.
✅ Suporte a várias moedas, incluindo USD, EUR, GBP, BTC, CNY e BRL.
✅ Seletores intuitivos para escolher moeda de origem e destino.
✅ Conversão instantânea, atualizada conforme o usuário digita.
✅ Informações dinâmicas, como nome, símbolo e cotação da moeda, que mudam automaticamente ao trocar as opções.
`
    },

    {
      id: 6,
      title: "C.R.U.D - API & Front End",
      description: "Este é um projeto Full-Stack desenvolvido como uma aplicação de cadastro e gerenciamento de usuários. O sistema implementa o padrão CRUD (Create, Read, Update, Delete) completo, utilizando uma arquitetura moderna e escalável baseada em JavaScript, com foco na estabilidade e comunicação eficiente entre o Front-end e o Back-end.",
      icon: crud,
      tags: ["Node.js", "Express", "Axios", "Prisma", "NPM", "MongoDB", "API", "HTML", "CSS", "JavaScript", "UX/UI"],
      liveUrl: "#",
      githubUrl: "https://github.com/JexSparrow/CRUD", // Back-end neste caso
      githubUrl2: "https://github.com/JexSparrow/CRUD-FRONTEND", // Front-end neste caso
      videoUrl: "U3yRwVCgu3Y",
      details: `O projeto oferece as seguintes funcionalidades, acessíveis através da interface React:

Cadastro (Create): Criação de novos usuários com campos de Nome, E-mail, Idade e Endereço.

Listagem (Read): Exibição de todos os usuários cadastrados no MongoDB Atlas.

Atualização (Update): Edição de dados de usuários existentes (requer implementação da rota PUT).

Exclusão (Delete): Remoção permanente de um usuário do banco de dados.`
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
            <Rocket className="w-8 h-8"></Rocket>
            <span className="text-secondary text-2xl font-bold tracking-wider uppercase">
              Principais Projetos
            </span>
          </motion.div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden hover-glow-cyan cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Icon */}
              <div className="relative h-48 bg-gradient-to-br from-accent/30 to-secondary/20 flex items-center justify-center overflow-hidden">
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
                    className="w-40 h-40 object-contain mx-auto"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-secondary text-glow-cyan font-semibold text-xl mb-2">Ver Detalhes</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-orbitron font-extrabold tracking-wide text-yellow">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-md">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 hover:bg-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap gap-3 justify-center">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  
                  {project.githubUrl2 && project.githubUrl2 !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="neon-border"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl2, "_blank");
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code 2
                    </Button>
                  )}
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
        <DialogContent className="glass-card border-primary/30 max-w-6xl max-h-[90vh] overflow-y-auto shadow-cyan">
          <DialogHeader>
            <DialogTitle className="text-4xl font-orbitron font-extrabold uppercase tracking-wide bg-gradient-to-t from-accent to-secondary bg-clip-text text-transparent">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid lg:grid-cols-2 gap-12 pt-4 items-center">
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
              <DialogDescription className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {selectedProject?.details}
              </DialogDescription>

              {/* Tags */}
              <div>
                <h4 className="text-lg font-orbitron font-semibold text-secondary uppercase tracking-wider mb-4">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full bg-primary/20 text-secondary border border-primary/30 hover:bg-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* NOVO: Action Buttons (Modal) */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {selectedProject?.liveUrl && selectedProject.liveUrl !== "#" && (
                  <Button
                    variant="outline"
                    className="neon-border flex-1 hover:bg-primary/10"
                    onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto ao Vivo
                  </Button>
                )}

                {selectedProject?.githubUrl && selectedProject.githubUrl !== "#" && (
                  <Button
                    variant="outline"
                    className="neon-border flex-1 hover:bg-primary/10"
                    onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código {selectedProject.githubUrl2 && selectedProject.githubUrl2 !== "#" ? " (Front-end)" : ""}
                  </Button>
                )}

                {selectedProject?.githubUrl2 && selectedProject.githubUrl2 !== "#" && (
                  <Button
                    variant="outline"
                    className="neon-border flex-1 hover:bg-primary/10"
                    onClick={() => window.open(selectedProject.githubUrl2, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código (Back-end)
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;