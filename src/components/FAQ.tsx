import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ChevronDown, 
  Code2, 
  Clock, 
  Headphones, 
  Workflow, 
  Briefcase, 
  User, 
  Rocket,
  LucideIcon 
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: LucideIcon;
}

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Quais tecnologias você utiliza nos projetos?",
      answer: "Trabalho principalmente com React, JavaScript, TypeScript, HTML, CSS, Styled-Components, Tailwind CSS e Node.js. Também tenho experiência com bancos de dados como PostgreSQL e MongoDB, além de ferramentas como Docker e Git/Github para versionamento e deploy.",
      icon: Code2,
    },
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O tempo varia conforme a complexidade do projeto. Uma landing page simples pode levar de 1 a 2 semanas, enquanto aplicações mais complexas podem levar de 1 a 3 meses. Sempre faço uma análise detalhada antes de estimar prazos.",
      icon: Clock,
    },
    {
      question: "Você oferece suporte após a entrega do projeto?",
      answer: "Sim! Ofereço suporte técnico e manutenção após a entrega. Acredito que um bom relacionamento com o cliente não termina na entrega do projeto, e estou sempre disponível para ajustes e melhorias.",
      icon: Headphones,
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "O processo começa com uma reunião para entender suas necessidades. Depois, elaboro um escopo detalhado e um cronograma. Durante o desenvolvimento, mantenho comunicação constante e apresento versões parciais para feedback.",
      icon: Workflow,
    },
    {
      question: "Você trabalha com projetos de qualquer tamanho?",
      answer: "Sim! Atendo desde pequenos projetos pessoais até aplicações empresariais maiores. Cada projeto é único e recebe a mesma dedicação e atenção aos detalhes, independentemente do tamanho.",
      icon: Briefcase,
    },
    {
      question: "Me conte um pouco sobre você",
      answer: "Tenho 32 anos e sou apaixonado por tecnologia e Desenvolvimento Web. Moro em Curitiba-PR e atuo como Desenvolvedor Front-End, realizando projetos freelance e contribuindo na @Flaterz (Inglaterra), onde colaboro com o time no desenvolvimento de aplicações para clientes internacionais.",
      icon: User,
    },
    {
      question: "Como entrou no Mundo da Programação?",
      answer: "Sempre fui apaixonado por criar, especialmente desenhar, minha forma favorita de expressar idéias e dar vida à imaginação. Na programação, descobri uma maneira de unir essa criatividade com lógica, transformando conceitos em experiências digitais. Iniciei a faculdade de Design Digital na PUC-PR em 2013, mas não concluí. Já em 2023, decidi mergulhar de vez na tecnologia ao começar o curso de Programação Full Stack - Dev Club, onde aprendi HTML, CSS, JavaScript e React. Desde então, sigo me aprofundando cada vez mais nesse universo fascinante.",
      icon: Rocket,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-glow-purple">
            Ficou Alguma Dúvida <span className="text-secondary">?</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Confira as perguntas mais comuns sobre meus serviços e processo de trabalho.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index
                  ? "border border-secondary/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                  : "border border-transparent hover:border-primary/30"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 360 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-lg transition-colors duration-300 ${openIndex === index ? "bg-secondary/20" : "bg-primary/20"
                        }`}
                    >
                      <faq.icon
                        className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? "text-secondary" : "text-primary"
                          }`}
                      />
                    </motion.div>
                    <span className="text-foreground font-medium text-sm md:text-base pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 p-1 rounded-full transition-colors duration-300 ${openIndex === index ? "bg-secondary/20" : "bg-muted/50"
                      }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? "text-secondary" : "text-muted-foreground"
                        }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                        <div className="pl-14 border-l-2 border-secondary/30 ml-2">
                          <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Não encontrou sua dúvida?{" "}
            <a
              href="#contact"
              className="text-secondary hover:text-secondary/80 transition-colors underline underline-offset-4"
            >
              Entre em contato
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;