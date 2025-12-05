import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageSquare, Send, Copy, CheckCircle, Github, Linkedin, Instagram, Phone, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

// EmailJS credentials (public keys - safe for frontend)
const EMAILJS_SERVICE_ID = "service_jodzki1";
const EMAILJS_TEMPLATE_ID = "template_26n1x3e";
const EMAILJS_PUBLIC_KEY = "oxr72OUhbHbnJzivn";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contato@jefersondev.com");
    setCopied(true);
    toast({
      title: "E-mail copiado!",
      description: "O endereço de e-mail foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };


  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá Jeferson! Me chamo ${formData.name}\n\n${formData.message}`
    );

    window.open(`https://wa.me/5541999233349?text=${message}`, "_blank");
  };




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada! 📧 ",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="pt-10 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold text-glow-purple">
            Vamos Conversar <span className="text-secondary">?</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-orbitron text-center font-bold text-foreground mb-6">
                Informações de Contato
              </h3>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-[#00f0ff]/50 shadow-[0_0_10px_rgba(0,240,255,0.3)] cursor-pointer"
                onClick={handleCopyEmail}
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-foreground font-medium">contato@jefersondev.com</p>
                  </div>
                </div>
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                ) : (
                  <Copy className="w-5 h-5 text-secondary" />
                )}
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-[#00f0ff]/50 shadow-[0_0_10px_rgba(0,240,255,0.3)] cursor-pointer"
                onClick={handleWhatsApp}
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-foreground font-medium">Chamar no WhatsApp</p>
                  </div>
                </div>
                <MessageSquare className="w-5 h-5 text-secondary" />
              </motion.div>

              {/* Social Links */}
              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-4 text-center">Me siga nas redes:</p>
                <div className="flex gap-3 justify-center">
                  {[
                    { icon: Github, label: "GitHub", url: "https://github.com/JexSparrow  " },
                    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/jexsantos/" },
                    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/jexsantos_" },
                    { icon: Mail, label: "E-mail", url: "mailto:contato@jefersondev.com" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"

                      whileHover={{ scale: 1.2, y: -5 }}
                      className="glass-card p-3 rounded-lg hover-glow group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <div className="flex gap-4 justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                  <p className="text-md font-semibold text-foreground mb-4 text-center hover:text-neon-green transition-all duration-300">Sua mensagem será respondida em até 24h</p>

                </div>

              </div>
            </div>
          </motion.div>



          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-center text-foreground mb-6">
                Envie uma Mensagem
              </h3>

              <div className="space-y-2">
                <label className="ml-2 text-sm text-secondary font-semibold">Nome</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  disabled={isLoading}
                  className={`
                    
                    bg-background/50 border border-[#00f0ff]/50 
                    shadow-[0_0_10px_rgba(0,240,255,0.3)] 
                    focus:border-[#00f0ff] 
                    focus:shadow-[0_0_50px_rgba(0,240,255,0.5)]
   
                    focus-visible:ring-0 !important
                    focus:ring-offset-0 !important
                    focus-visible:ring-offset-0 !important 
    
                    transition-all duration-300 disabled:opacity-50`}
                />
              </div>

              <div className="space-y-2">
                <label className=" ml-2 text-sm text-secondary font-semibold">E-mail</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  disabled={isLoading}
                  className={`
                    
                    bg-background/50 border border-[#00f0ff]/50 
                    shadow-[0_0_10px_rgba(0,240,255,0.3)] 
                    focus:border-[#00f0ff] 
                    focus:shadow-[0_0_30px_rgba(0,240,255,0.5)]
   
                    focus-visible:ring-0 !important
                    focus:ring-offset-0 !important
                    focus-visible:ring-offset-0 !important 
    
                    transition-all duration-300 disabled:opacity-50`}
                />
              </div>

              <div className="space-y-2">
                <label className="ml-2 text-sm text-secondary font-semibold">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-me sobre sua idéia..."
                  required
                  disabled={isLoading}
                  rows={5}
                  className={`
                    custom-scrollbar
                     bg-background/50 border border-[#00f0ff]/50 
                     shadow-[0_0_10px_rgba(0,240,255,0.3)] 
                     focus:border-[#00f0ff] focus:shadow-[0_0_40px_rgba(0,240,255,0.5)]
                     transition-all duration-300 

                     focus-visible:ring-0 !important
                    focus:ring-offset-0 !important
                    focus-visible:ring-offset-0 !important 

                     resize-none 
                     disabled:opacity-50`}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`
    w-full                     
    
    bg-gradient-to-t           
    from-primary               
    to-secondary              

    bg-[length:150%_150%]      /* aumenta o tamanho do gradiente → deixa espaço para animar */
    bg-[position:100%_100%]    /* posição inicial do gradiente (embaixo e à direita) */

    hover:bg-[position:100%_0%] /* ao passar o mouse o gradiente "sobe" suavemente */

    hover:scale-95             /* botão reduz levemente de tamanho no hover */
    hover: shadow-[0_0_20px_rgba(174,0,255,0.6)] /* sombra de neon no hover */
    
    transition-all             /* habilita animação para todas as propriedades */
    duration-700               /* duração da animação: 700ms (bem suave) */
    ease-in-out                /* suavização da animação na entrada e saída */

    text-lg 
    leading-loose
    font-orbitron                    /* tamanho do texto */
    py-6                       /* altura vertical do botão */
    
    disabled:opacity-50        /* quando desabilitado fica translúcido */
  `}
              >

                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;