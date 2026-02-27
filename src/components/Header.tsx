import React from 'react';
import { Instagram, Moon, Sun, Heart } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-app-bg/80 backdrop-blur-md border-b border-app-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/Imagem/logo.jpeg" alt="Toque da Beleza Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-serif font-bold tracking-tight text-app-text">
              TOQUE DA <span className="text-app-accent">BELEZA</span>
            </span>
          </div>
          
          <nav className="flex items-center gap-4 sm:gap-6">
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
