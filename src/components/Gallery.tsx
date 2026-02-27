import React from 'react';
import { motion } from 'motion/react';

// IMPORTANDO AS IMAGENS DA GALERIA - Extensão .jpeg
import foto1 from '../assets/images/galeria/foto1.jpeg';
import foto2 from '../assets/images/galeria/foto2.jpeg';
import foto3 from '../assets/images/galeria/foto3.jpeg';
import foto4 from '../assets/images/galeria/foto4.jpeg';
import foto5 from '../assets/images/galeria/foto5.jpeg';
import foto6 from '../assets/images/galeria/foto6.jpeg';

const PHOTOS = [
  { id: 1, url: foto1, title: 'Transformação Capilar' },
  { id: 2, url: foto2, title: 'Corte Moderno' },
  { id: 3, url: foto3, title: 'Manicure Profissional' },
  { id: 4, url: foto4, title: 'Coloração Vibrante' },
  { id: 5, url: foto5, title: 'Cronograma Capilar' },
  { id: 6, url: foto6, title: 'Finalização de Cachos' },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-serif text-app-text">Galeria</h3>
        <span className="text-[10px] uppercase tracking-widest text-app-muted font-bold">Trabalhos Recentes</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-app-border transition-colors duration-300"
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay com título (opcional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-xs font-bold uppercase tracking-widest">{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};