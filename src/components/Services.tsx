import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  // Show only first 6 services on home page
  const previewServices = SERVICES.slice(0, 6);

  return (
    <section id="servicos" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-serif text-app-text">Serviços</h3>
        <Link 
          to="/servicos" 
          className="group flex items-center gap-1 text-[10px] uppercase tracking-widest text-app-accent font-bold hover:gap-2 transition-all"
        >
          Menu Completo
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previewServices.map((service) => (
          <Link
            key={service.id}
            to="/servicos"
            className="p-4 rounded-2xl bg-app-card/50 border border-app-border hover:border-app-accent/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-app-accent" />
                <h4 className="text-sm font-medium text-app-text group-hover:text-app-accent transition-colors">{service.name}</h4>
              </div>
              <span className="text-[10px] font-bold text-app-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {service.price}
              </span>
            </div>
            <p className="text-app-muted text-[11px] leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
