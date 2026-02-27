import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Services = () => {
  return (
    <section id="servicos" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-serif text-app-text">Serviços</h3>
        <span className="text-[10px] uppercase tracking-widest text-app-muted font-bold">Menu Completo</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="p-4 rounded-2xl bg-app-card/50 border border-app-border hover:border-app-accent/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-app-accent" />
              <h4 className="text-sm font-medium text-app-text">{service.name}</h4>
            </div>
            <p className="text-app-muted text-[11px] leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
