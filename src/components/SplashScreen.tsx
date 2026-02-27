import React from 'react';
import { motion } from 'motion/react';

export const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] -z-10" />

      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 mb-6 rounded-2xl overflow-hidden shadow-2xl shadow-pink-600/20">
            <img src="/Imagem/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-white uppercase"
          >
            TOQUE DA <span className="text-pink-500 italic">BELEZA</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent my-4"
          />
          
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-3 justify-center"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-pink-500/30">
              <img src="/Imagem/flavia.jpeg" alt="Flavia" className="w-full h-full object-cover" />
            </div>
            <p className="text-zinc-400 text-xs uppercase tracking-[0.5em] font-bold">
              Por <span className="text-white">Flavia Estética</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Loading bar at bottom */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="w-full h-full bg-pink-600"
        />
      </div>
    </motion.div>
  );
};
