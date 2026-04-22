import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMPORTANDO AS IMAGENS DA GALERIA - Extensão .jpeg
import foto1 from '../assets/images/galeria/foto1.jpeg';
import foto2 from '../assets/images/galeria/foto2.jpeg';
import foto3 from '../assets/images/galeria/foto3.jpeg';
import foto4 from '../assets/images/galeria/foto4.jpeg';
import foto5 from '../assets/images/galeria/foto5.jpeg';
import foto6 from '../assets/images/galeria/foto6.jpeg';

// Importando thumbnails para vídeos (use as mesmas imagens como placeholder por enquanto)
import thumb1 from '../assets/images/galeria/foto1.jpeg';
import thumb2 from '../assets/images/galeria/foto2.jpeg';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  category: string;
}

// FOTOS DA GALERIA COM IMAGENS LOCAIS
const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', type: 'image', url: foto1, title: 'Transformação Capilar', category: 'Cabelo' },
  { id: '2', type: 'image', url: foto2, title: 'Corte Moderno', category: 'Cabelo' },
  { id: '3', type: 'image', url: foto3, title: 'Manicure Profissional', category: 'Unhas' },
  { id: '4', type: 'image', url: foto4, title: 'Coloração Vibrante', category: 'Cabelo' },
  { id: '5', type: 'image', url: foto5, title: 'Cronograma Capilar', category: 'Cabelo' },
  { id: '6', type: 'image', url: foto6, title: 'Finalização de Cachos', category: 'Cabelo' },
  
  // VÍDEOS - PREPARADO PARA QUANDO VOCÊ ADICIONAR OS ARQUIVOS
  // Quando tiver os vídeos, descomente estas linhas e ajuste os imports:
  // import video1 from '../assets/videos/transformacao.mp4';
  // import video2 from '../assets/videos/brilho-intenso.mp4';
  // 
  // { id: '7', type: 'video', url: video1, thumbnail: thumb1, title: 'Transformação Real', category: 'Cabelo' },
  // { id: '8', type: 'video', url: video2, thumbnail: thumb2, title: 'Brilho Intenso', category: 'Cabelo' },
];

export const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<'Todos' | 'Cabelo' | 'Unhas' | 'Vídeos'>('Todos');

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'Todos') return true;
    if (filter === 'Vídeos') return item.type === 'video';
    return item.category === filter;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-app-bg pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="space-y-6 text-center md:text-left">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-app-muted hover:text-app-accent transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Início
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-light text-app-text leading-tight">
                Nosso <span className="text-app-accent italic">Portfólio</span>
              </h1>
              <p className="text-app-muted max-w-xl text-sm leading-relaxed">
                Explore as transformações e cuidados realizados pela Flavia Estética. Cada trabalho é único e feito com dedicação total.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-app-card p-1.5 rounded-2xl border border-app-border">
              {['Todos', 'Cabelo', 'Unhas', 'Vídeos'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${filter === f ? 'bg-app-accent text-white shadow-lg shadow-app-accent/20' : 'text-app-muted hover:text-app-text'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-app-card border border-app-border cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img 
                  src={item.type === 'video' ? item.thumbnail : item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-app-accent font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-serif">{item.title}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                      {item.type === 'video' ? (
                        <><Play className="w-3 h-3" /> Assistir Vídeo</>
                      ) : (
                        <><Maximize2 className="w-3 h-3" /> Ver Detalhes</>
                      )}
                    </div>
                  </div>
                </div>

                {/* Type Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                  {item.type === 'video' ? <Play className="w-4 h-4 fill-current" /> : <ImageIcon className="w-4 h-4" />}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full max-h-full relative rounded-3xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
              >
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.url} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain"
                  />
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-app-accent text-xs font-bold uppercase tracking-widest">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-white text-2xl font-serif mt-1">{selectedItem.title}</h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};