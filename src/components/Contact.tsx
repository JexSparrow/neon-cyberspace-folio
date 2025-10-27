import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageSquare, Send, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jeferson@exemplo.com");
    setCopied(true);
    toast({
      title: "E-mail copiado!",
      description: "O endereço de e-mail foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá Jeferson! Me chamo ${formData.name}.\n\n${formData.message}`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
            <MessageSquare className="w-5 h-5 text-secondary" />
            <span className="text-secondary text-sm font-medium tracking-wider uppercase">
              Entre em Contato
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-glow-purple">
            Vamos Conversar<span className="text-secondary">?</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Informações de Contato
              </h3>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-4 bg-primary/10 rounded-lg neon-border cursor-pointer"
                onClick={handleCopyEmail}
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="text-foreground font-medium">jeferson@exemplo.com</p>
                  </div>
                </div>
                {copied ? (
                  <CheckCircle className="w-5 h-5 text-neon-green" />
                ) : (
                  <Copy className="w-5 h-5 text-secondary" />
                )}
              </motion.div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-neon-green hover:bg-neon-green/90 text-background text-lg py-6 animate-pulse-glow"
                size="lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                📞 Chamar no WhatsApp
              </Button>

              {/* Social Links */}
              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-4">Me siga nas redes:</p>
                <div className="flex gap-3">
                  {[
                    { icon: "🐙", label: "GitHub", url: "#" },
                    { icon: "💼", label: "LinkedIn", url: "#" },
                    { icon: "📸", label: "Instagram", url: "#" },
                  ].map((social) => (
                    <motion.button
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glass-card p-3 rounded-lg hover-glow text-2xl"
                      onClick={() => window.open(social.url, "_blank")}
                    >
                      {social.icon}
                    </motion.button>
                  ))}
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
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Nome</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="neon-border bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">E-mail</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="neon-border bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-me sobre seu projeto..."
                  required
                  rows={5}
                  className="neon-border bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
