import React from 'react';
import { motion } from 'motion/react';

const PHOTOS = [
  { id: 1, url: 'https://picsum.photos/seed/hair1/800/800', title: 'Transformação Capilar' },
  { id: 2, url: 'https://picsum.photos/seed/hair2/800/800', title: 'Corte Moderno' },
  { id: 3, url: 'https://picsum.photos/seed/nails1/800/800', title: 'Manicure Profissional' },
  { id: 4, url: 'https://picsum.photos/seed/hair3/800/800', title: 'Coloração Vibrante' },
  { id: 5, url: 'https://picsum.photos/seed/hair4/800/800', title: 'Cronograma Capilar' },
  { id: 6, url: 'https://picsum.photos/seed/hair5/800/800', title: 'Finalização de Cachos' },
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
          <div
            key={photo.id}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-app-border transition-colors duration-300"
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
