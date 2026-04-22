import React from 'react';
import { Instagram, Moon, Sun, Heart, List, Camera, Calendar } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import logoImg from '../assets/images/logo.jpeg'; // <-- IMPORTANDO A IMAGEM

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-app-bg/80 backdrop-blur-md border-b border-app-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="Toque da Beleza Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-serif font-bold tracking-tight text-app-text">
              TOQUE DA <span className="text-app-accent">BELEZA</span>
            </span>
          </Link>
          
          <nav className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 bg-app-card/50 p-1 rounded-2xl border border-app-border">
              <Link 
                to="/servicos" 
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${location.pathname === '/servicos' ? 'bg-app-accent text-white shadow-lg shadow-app-accent/20' : 'text-app-muted hover:text-app-text hover:bg-app-bg'}`}
              >
                <List className="w-3 h-3" />
                <span className="hidden xs:inline">Serviços</span>
              </Link>

              <Link 
                to="/galeria" 
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${location.pathname === '/galeria' ? 'bg-app-accent text-white shadow-lg shadow-app-accent/20' : 'text-app-muted hover:text-app-text hover:bg-app-bg'}`}
              >
                <Camera className="w-3 h-3" />
                <span className="hidden xs:inline">Galeria</span>
              </Link>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-app-accent text-white rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-app-accent/20 hover:brightness-110 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Agendar</span>
            </motion.a>

            <div className="h-8 w-px bg-app-border mx-1 hidden sm:block" />

            <div className="flex items-center bg-app-card rounded-full p-1 border border-app-border">
              <button 
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-app-accent text-white' : 'text-app-muted hover:text-app-text'}`}
                title="Tema Claro"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-app-accent text-white' : 'text-app-muted hover:text-app-text'}`}
                title="Tema Escuro"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => setTheme('feminine')}
                className={`p-1.5 rounded-full transition-all ${theme === 'feminine' ? 'bg-app-accent text-white' : 'text-app-muted hover:text-app-text'}`}
                title="Tema Feminino"
              >
                <Heart className="w-3.5 h-3.5" />
              </button>
            </div>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-app-muted hover:text-app-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};