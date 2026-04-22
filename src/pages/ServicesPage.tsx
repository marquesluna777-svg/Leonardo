import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowLeft, Scissors, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  const categories = ['Cabelo', 'Unhas'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-app-bg pt-24 pb-12 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-app-muted hover:text-app-accent transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Início
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-app-text leading-tight">
              Nossos <span className="text-app-accent italic">Serviços</span>
            </h1>
            <p className="text-app-muted max-w-md text-sm leading-relaxed">
              Tratamentos exclusivos e personalizados para realçar sua beleza natural com o cuidado que você merece.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="w-24 h-24 rounded-full border border-app-accent/20 flex items-center justify-center animate-pulse">
              <Sparkles className="text-app-accent w-8 h-8 opacity-50" />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category} className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-serif text-app-text">{category}</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-app-accent/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SERVICES.filter(s => s.category === category).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-3xl bg-app-card border border-app-border hover:border-app-accent/40 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-app-accent" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-lg font-medium text-app-text group-hover:text-app-accent transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-app-accent font-bold text-sm whitespace-nowrap">
                          {service.price}
                        </span>
                      </div>
                      
                      <p className="text-app-muted text-xs leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2 flex items-center gap-2">
                        <div className="h-1 w-8 bg-app-accent/20 rounded-full group-hover:w-12 group-hover:bg-app-accent transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="p-8 rounded-[2.5rem] bg-app-accent/5 border border-app-accent/10 text-center space-y-4">
          <p className="text-app-muted text-xs italic">
            * Os valores podem variar de acordo com o comprimento e volume do cabelo. 
            Consulte-nos para um orçamento personalizado.
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-app-accent text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-app-accent/20"
          >
            Agendar via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};
