import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative py-12 px-8 rounded-[2.5rem] bg-app-card border border-app-border overflow-hidden transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-app-accent/10 blur-[80px] -z-10" />
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-3 px-2 py-1 rounded-full bg-app-accent/10 border border-app-accent/20 mb-4">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-app-accent/20">
              <img src="/flavia.jpg" alt="Flavia" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-app-accent pr-1">Profissional Flavia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-app-text leading-tight mb-4">
            Beleza com <span className="text-app-accent italic">propósito.</span>
          </h1>
          <p className="text-app-muted text-sm max-w-sm leading-relaxed mb-6">
            Especialista em tratamentos capilares personalizados para realçar sua beleza natural no Toque da Beleza.
          </p>
          
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/10 border border-green-600/20 rounded-xl text-green-600 hover:bg-green-600 hover:text-white transition-all group"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Falar no WhatsApp</span>
          </a>
        </div>
        
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-app-border shrink-0">
          <img 
            src="/Imagem/flavia.jpeg" 
            alt="Flavia" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.section>
  );
};

