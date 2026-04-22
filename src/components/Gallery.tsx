import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMPORTANDO AS IMAGENS DA GALERIA
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
  // Pegando apenas as 3 primeiras fotos para mostrar na página inicial
  const previewPhotos = PHOTOS.slice(0, 3);

  return (
    <section id="galeria" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-serif text-app-text">Galeria</h3>
        <Link 
          to="/galeria" 
          className="group flex items-center gap-1 text-[10px] uppercase tracking-widest text-app-accent font-bold hover:gap-2 transition-all"
        >
          Ver Tudo
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {previewPhotos.map((photo) => (
          <Link
            key={photo.id}
            to="/galeria"
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border border-app-border transition-colors duration-300"
          >
            <img 
              src={photo.url} 
              alt={photo.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};