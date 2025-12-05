import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github, Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import crud2 from "@/assets/crud.png";
import amazon from "@/assets/amazon.png";
import netflix2 from "@/assets/netflix2.png";
import netflix3 from "@/assets/netflix3.png";
import netflix4 from "@/assets/netflix4.png";
import starbucks2 from "@/assets/starbucks2.png";


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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const PROJECTS_PER_LOAD = 3;

  // Desktop: 3 projetos, Tablet (768px-1024px): 4 projetos
  const getInitialProjects = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width >= 768 && width < 1024) return 4; // Tablet
    return 3; // Desktop e Mobile
  };

  const [projectsToShow, setProjectsToShow] = useState(getInitialProjects);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768 && width < 1024) {
        setProjectsToShow(prev => prev < 4 ? 4 : prev);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Dev Burguer - Full Stack",
      description: "Plataforma de e-commerce com design moderno e animações interativas. Totalmente funcional e escalável.",
      icon: burguer,
      tags: ["React", "Javascript", "Styled-Components", "Vite", "Figma", "Node.js", "MVC", "CRUD", "PostgreSQL", "MongoDB", "Docker", "API", "Hooks", "Toasts", "Projeto Educacional"],
      githubUrl: "https://github.com/JexSparrow/devburguer-interface",
      githubUrl2: "https://github.com/JexSparrow/devburger-api",
      videoUrl: "L56P5vfA688",
      details: `
♻️ Componentes reutilizáveis para construir a interface de forma modular. Hooks e Context API para gerenciar o estado e compartilhar dados.
🌐 Roteamento para permitir a navegação entre diferentes seções.
🎨 Styled-Components para definir os estilos da aplicação.
⚙️ Vite foi utilizado como ferramenta de desenvolvimento e build.
      `
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
      tags: ["React", "Typescript", "Tailwind CSS", "Framer Motion", "UX/UI", "Design Digital", "Freelancer", "Responsividade"],
      liveUrl: "https://rexfit.netlify.app",
      githubUrl: "#",
      githubUrl2: "#",
      videoUrl: "UiVjCaem9Ag",
      details: `
        O site foi desenvolvido como uma Single Page Application (SPA) com design moderno, agressivo e esportivo, utilizando uma identidade visual marcante.
      
        🏆 Apresentar a marca e seus valores
        🛠️ Mostrar os serviços oferecidos
        🏠 Exibir as instalações e ambiente
        📍 Facilitar o contato com múltiplas unidades
        💰 Converter visitantes em clientes através de CTAs estratégicos
      `,
    },
    {
      id: 4,
      title: "C.R.U.D - API & Front End",
      description: "Este é um projeto Full-Stack desenvolvido como uma aplicação de cadastro e gerenciamento de usuários. O sistema implementa o padrão CRUD (Create, Read, Update, Delete) completo, utilizando uma arquitetura moderna e escalável baseada em JavaScript, com foco na estabilidade e comunicação eficiente entre o Front-end e o Back-end.",
      icon: crud2,
      tags: ["Node.js", "Express", "Axios", "Prisma", "NPM", "MongoDB", "API", "HTML", "CSS", "JavaScript", "UX/UI"],
      liveUrl: "#",
      githubUrl: "https://github.com/JexSparrow/CRUD-FRONTEND",
      githubUrl2: "https://github.com/JexSparrow/CRUD",
      videoUrl: "U3yRwVCgu3Y",
      details: `
➕ Cadastro (Create): Criação de novos usuários com campos de Nome, E-mail, Idade e Endereço.
🔍 Listagem (Read): Exibição de todos os usuários cadastrados no MongoDB Atlas.
✏️ Atualização (Update): Edição de dados de usuários existentes (requer implementação da rota PUT).
❌ Exclusão (Delete): Remoção permanente de um usuário do banco de dados.`
    },
    {
      id: 5,
      title: "Clima Dinâmico - API",
      description: "Aplicativo de clima com dados em tempo real, animações dinâmicas. Desenvolvido para oferecer previsões precisas, visualização interativa e experiência fluida em qualquer dispositivo.",
      icon: clima,
      tags: ["JavaScript", "HTML", "CSS3", "API", "Responsividade", "UX/UI", "Projeto Educacional"],
      liveUrl: "https://climate-preview.netlify.app/",
      githubUrl: "https://github.com/JexSparrow/Previsao-Tempo",
      githubUrl2: "#",
      videoUrl: "-EYDkKkEt1A",
      details:
        "Aplicativo completo que fornece informações meteorológicas em tempo real, utilizando dados precisos e atualizados conforme O usuário digita a localização. O sistema apresenta detalhes como temperatura, sensação térmica, velocidade do vento e umidade, acompanhados de animações visuais que refletem as condições climáticas atuais. ",

    },

    {
      id: 6,
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
⚡ Cotações em tempo real obtidas de uma API confiável.
💱 Suporte a várias moedas, incluindo USD, EUR, GBP, BTC, CNY e BRL.
✨ Seletores intuitivos para escolher moeda de origem e destino.
🚀 Conversão instantânea, atualizada conforme o usuário digita.
📊 Informações dinâmicas, como nome, símbolo e cotação da moeda, que mudam automaticamente ao trocar as opções.
`
    },
    {
      id: 7,
      title: "Amazon Scraper - API & Front End",
      description: " O projeto é uma aplicação Full-Stack desenvolvida para extrair dados de produtos da Amazon com base em uma palavra-chave fornecida pelo usuário.",
      icon: amazon,
      tags: ["Full Stack", "TypeScript", "HTML", "CSS", "JavaScript", "API", "Desafio Técnico"],
      githubUrl: "https://github.com/JexSparrow/AMAZON-SCRAPER",
      githubUrl2: "#",
      videoUrl: "MMVZ0qwG8Xc",
      details: `
      🎯 Desenvolvimento de uma solução Full-Stack para extrair dados em tempo real da Amazon, buscando produtos com base em palavras-chave.
      ⚡️ Construído com Express.js e TypeScript, executado no runtime de alta performance Bun, para processar requisições.
      ✨ Interface de usuário (HTML/CSS/JS) para input de busca e visualização dinâmica dos resultados da API.
      🚀 Projeto Educacional feito para um Desafio Técnico.
      `
    },
    {
      id: 8,
      title: "Netflix - Landing Page",
      description: "Prepare-se para ser fisgado desde o primeiro instante! Esta landing page te convida a explorar o universo Netflix de uma maneira totalmente nova.",
      icon: netflix4,
      tags: ["JavaScript", "HTML", "CSS", "Animações", "Responsividade", "Projeto Educacional", "Tudum"],
      liveUrl: "https://flixnet-landing-page.netlify.app/",
      githubUrl: "https://github.com/JexSparrow/Netflix",
      githubUrl2: "#",
      videoUrl: "G9AlWxAKwC0",
      details: `
      🎬 Um vídeo de fundo de "Stranger Things" te transporta para a ação.
      📚 Um botão "Mais Informações" abre uma janela modal sofisticada, revelando sinopses detalhadas.
      🆕 Um carrossel dinâmico apresenta os principais lançamentos, despertando sua curiosidade para a próxima sessão.
      📱 Adaptável a Tudo: A experiência se adapta perfeitamente a qualquer tela, do computador à palma da sua mão.
      `

    },

    {
      id: 9,
      title: "Starbucks - Landing Page",
      description: "Este projeto consiste na criação de uma landing page temática da Starbucks, desenvolvida para fins de portfólio no Dev Club. O objetivo principal é ilustrar o poder da interatividade no Front-end usando JavaScript, HTML e CSS.",
      icon: starbucks2,
      tags: ["JavaScript", "HTML", "CSS", "Responsividade", "Projeto Educacional"],
      liveUrl: "https://buckstar-landing-page.netlify.app/",
      githubUrl: "#https://github.com/JexSparrow/Starbucks",
      githubUrl2: "#",
      videoUrl: "L37G1UPGVag",
      details: `
      🎯 Uma landing page interativa inspirada na Starbucks!
      🎨 Personalização Dinâmica: Usuários podem personalizar visualmente sua bebida, alterando cores da interface e a imagem do copo em tempo real.
      💡 Foco: Destacar a interatividade do JavaScript, enriquecendo a experiência do usuário e a identidade visual da marca.
      🎓 Realização: Projeto desenvolvido no Dev Club.  
      `
    },
    {
      id: 10,
      title: "Super Mario Bros",
      description: "Prepare-se para uma viagem no tempo inesquecível! Esta landing page te transporta diretamente para o universo vibrante e divertido de Mario e Luigi, com uma dose extra de profissionalismo encanador!",
      icon: mario,
      tags: ["JavaScript", "CSS", "HTML", "CTA", "Responsividade", "Projeto Educacional",],
      liveUrl: "https://mario-landing-page-jex.netlify.app/",
      githubUrl: "https://github.com/JexSparrow/Mario",
      githubUrl2: "#",
      videoUrl: "deo4fPfZ_cw",
      details: `
        🎬  Um vídeo de fundo nostálgico para transportar o usuário diretamente para o universo de Mario e Luigi.
        ✍️ Formulário Deslizante: Um botão de contato aciona um formulário amigável que se apresenta na tela com uma animação, facilitando a solicitação de serviço.
        ⚡️ Acesso Rápido: Inclui um atalho direto para o WhatsApp para garantir um contato imediato e eficiente.
        📱 Responsividade: Design totalmente adaptável a dispositivos móveis, assegurando uma experiência perfeita em qualquer tela.
      `},


  ];

  const displayedProjects = projects.slice(0, projectsToShow);
  const totalProjects = projects.length;
  const hasMore = displayedProjects.length < totalProjects;

  // NOVO: Função para rolar até o topo da seção de projetos
  const scrollToProjects = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLoadMore = () => {
    if (hasMore) {
      // Lógica de "Mostrar Mais" (Carrega o próximo lote)
      setProjectsToShow((prev) => Math.min(prev + PROJECTS_PER_LOAD, totalProjects));
    } else {
      // Lógica de "Mostrar Menos" (Volta para valor inicial baseado na tela)
      setProjectsToShow(getInitialProjects());

      // CHAMADA DA FUNÇÃO DE ROLAGEM
      scrollToProjects();
    }
  };


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
              Projetos Principais
            </span>
          </motion.div>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden hover-glow-cyan cursor-pointer group hover:border-b-4 hover:border-cyan-400/90 transition-all/500"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Icon */}
              <div className="relative h-32 lg:h-48 bg-gradient-to-br from-accent/30 to-secondary/20 flex items-center justify-center overflow-hidden">
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
                    className="w-28 h-28 lg:w-40 lg:h-40 object-contain mx-auto"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <span className="text-secondary text-glow-cyan font-semibold text-xl mb-2">Ver Detalhes</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl text-center lg:text-2xl lg:text-start font-orbitron font-extrabold tracking-wide text-yellow">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-md">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs lg:text-sm px-2 lg:px-3 py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 hover:bg-primary/50 transition-colors"
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
                      Code ( Back-end )
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {/* Exibe o botão se houver mais projetos para carregar ou se estiver mostrando mais que o inicial */}
        {totalProjects > PROJECTS_PER_LOAD && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={handleLoadMore}
              className="glass-card neon-border hover-glow px-8 py-6 text-lg font-orbitron tracking-wider"
            >
              {hasMore
                ? `Mostrar +${Math.min(PROJECTS_PER_LOAD, totalProjects - displayedProjects.length)}`
                : "Mostrar Menos"}
              <motion.span
                animate={{ y: hasMore ? [0, 3, 0] : [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                {hasMore ? "🔻" : "🔺"}
              </motion.span>
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal - Custom Responsivo e Tecnológico */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <motion.div 
              className="absolute inset-0 bg-background/85 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Modal Content */}
            <motion.div
              className="
                relative w-full max-w-[94%] sm:max-w-xl md:max-w-3xl lg:max-w-5xl
                max-h-[85vh] overflow-y-auto overflow-x-hidden
                bg-card/95 backdrop-blur-xl border-2 border-primary/40 rounded-xl
                shadow-[0_0_40px_hsl(var(--primary)/0.4),0_0_80px_hsl(var(--accent)/0.2)]
                p-4 sm:p-5 md:p-6 lg:p-8
              "
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ 
                type: "spring", 
                stiffness: 350, 
                damping: 30,
                mass: 0.8
              }}
            >
              {/* Close Button - Tecnológico com animação */}
              <motion.button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar modal"
                className="
                  absolute top-3 right-3 sm:top-4 sm:right-4 z-50
                  w-8 h-8 sm:w-10 sm:h-10
                  flex items-center justify-center
                  rounded-lg
                  bg-gradient-to-br from-primary/90 to-accent/70
                  border border-secondary/50
                  shadow-[0_0_15px_hsl(var(--primary)/0.5)]
                  backdrop-blur-sm
                  group
                "
                whileHover={{ 
                  scale: 1.15,
                  boxShadow: "0 0 30px hsl(var(--secondary)/0.9)",
                  rotate: 90
                }}
                whileTap={{ scale: 0.85 }}
                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 180, scale: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-background group-hover:text-secondary transition-colors duration-200" />
              </motion.button>

              {/* Header */}
              <motion.div 
                className="mb-3 sm:mb-4 pr-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-orbitron font-extrabold uppercase tracking-wide bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                  {selectedProject.title}
                </h2>
                {/* Linha decorativa animada */}
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-primary via-secondary to-transparent mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-start">
                {/* Video / Media Section */}
                <motion.div 
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  {selectedProject.videoUrl ? (
                    <div className="relative w-full rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
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
                  ) : (
                    <div className="w-full h-40 sm:h-48 md:h-56 bg-background/30 rounded-lg flex items-center justify-center border border-primary/20">
                      <span className="text-xs sm:text-sm text-muted-foreground">Mídia não disponível</span>
                    </div>
                  )}
                </motion.div>

                {/* Info Section */}
                <motion.div 
                  className="w-full space-y-3 sm:space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                    {selectedProject.details}
                  </p>

                  {/* Tags */}
                  <div>
                    <h4 className="text-xs sm:text-sm font-orbitron font-semibold text-secondary uppercase tracking-wider mb-2">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/20 text-secondary border border-primary/30 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="neon-border w-full sm:flex-1 hover:bg-primary/10 text-xs sm:text-sm h-9"
                        onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Ver Projeto
                      </Button>
                    )}

                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="neon-border w-full sm:flex-1 hover:bg-primary/10 text-xs sm:text-sm h-9"
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        {selectedProject.githubUrl2 && selectedProject.githubUrl2 !== "#" ? "Front-end" : "Código"}
                      </Button>
                    )}

                    {selectedProject.githubUrl2 && selectedProject.githubUrl2 !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="neon-border w-full sm:flex-1 hover:bg-primary/10 text-xs sm:text-sm h-9"
                        onClick={() => window.open(selectedProject.githubUrl2, "_blank")}
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Back-end
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </section>
  );
};

export default Projects;