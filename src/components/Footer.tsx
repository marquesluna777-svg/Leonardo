import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-app-bg border-t border-app-border pt-12 pb-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/Imagem/flavia.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-serif font-bold tracking-tight text-app-text uppercase">Toque da Beleza</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-app-muted">
                <MapPin className="w-5 h-5 text-app-accent shrink-0 mt-0.5" />
                <div className="text-sm leading-relaxed">
                  <p className="text-app-text font-medium">Nosso Endereço</p>
                  <p>Rua das Flores, 123 • Bairro Estética</p>
                  <p>São Paulo, SP • CEP 01234-567</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-app-muted">
                <Phone className="w-5 h-5 text-app-accent shrink-0" />
                <p className="text-sm">(11) 99999-9999</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-app-muted">Redes Sociais</h4>
            <div className="flex flex-wrap gap-3">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-app-card border border-app-border rounded-full text-app-muted hover:border-app-accent hover:text-app-accent transition-all group"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-app-card border border-app-border rounded-full text-app-muted hover:border-green-500 hover:text-green-500 transition-all group"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-app-card border border-app-border rounded-full text-app-muted hover:border-blue-500 hover:text-blue-500 transition-all group"
              >
                <Facebook className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Facebook</span>
              </motion.a>
            </div>
            <p className="text-app-muted text-xs leading-relaxed">
              Siga-nos para acompanhar as últimas transformações e promoções exclusivas da Flavia.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-app-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-app-muted text-[10px] uppercase tracking-widest">
            © 2024 • Toque da Beleza • Flavia Estética
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-app-muted hover:text-app-text text-[10px] uppercase tracking-widest transition-colors">Privacidade</a>
            <a href="#" className="text-app-muted hover:text-app-text text-[10px] uppercase tracking-widest transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

