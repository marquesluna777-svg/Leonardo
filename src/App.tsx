/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // 2.5 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      <div className="min-h-screen bg-app-bg text-app-text selection:bg-app-accent/30 transition-colors duration-300">
        <Header />
        <main className="max-w-5xl mx-auto px-4 pt-24 pb-12 space-y-12">
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <Services />
              <Gallery />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Booking />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}




