import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Facebook, Instagram, Linkedin, Info } from 'lucide-react';
import { heroHotspots } from '../data/properties';

export default function Section1Hero({ onExplore, onBookNow }) {
  const [activeHotspot, setActiveHotspot] = useState(1);

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 pb-12">
      
      {/* Background Hero Villa Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
          alt="Housen Luxury Villa"
          className="w-full h-full object-cover object-center opacity-85 brightness-95 scale-105 transition-transform duration-1000"
        />
        {/* Soft subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Giant Semi-Transparent Top Watermark: HOUSEN */}
      <div className="relative z-10 w-full pt-4 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black tracking-tighter leading-none text-white/30 text-center font-display uppercase w-full">
          HOUSEN
        </h1>
      </div>

      {/* Interactive Hotspot Pins Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none max-w-[1440px] mx-auto">
        {heroHotspots.map((spot) => {
          const isOpen = activeHotspot === spot.id;
          return (
            <div
              key={spot.id}
              className="absolute pointer-events-auto transition-transform duration-300"
              style={{ top: spot.top, left: spot.left }}
            >
              {/* Pulsing Hotspot Button */}
              <button
                onClick={() => setActiveHotspot(isOpen ? null : spot.id)}
                className={`relative group w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isOpen ? 'bg-[#F8BA8B] scale-125' : 'bg-white/80 hover:bg-white'
                }`}
              >
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full bg-white/50 animate-pulse-ring" />
                <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-black' : 'bg-black/80'}`} />
              </button>

              {/* Connecting Line + Translucent Glass Info Box */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute z-30 left-6 bottom-6 w-72 md:w-80 glass-card rounded-2xl p-5 text-white shadow-2xl border border-white/40"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#F8BA8B] font-semibold uppercase tracking-wider">
                        <Info className="w-3.5 h-3.5" />
                        <span>Architectural Detail</span>
                      </div>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-white/60 hover:text-white p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light">
                      {spot.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Main Hero Foreground Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between pt-8 pb-4">
        
        {/* Top Action Callout */}
        <div className="flex items-center justify-start">
          <button
            onClick={onExplore}
            className="group flex items-center gap-2 text-white font-medium text-sm md:text-base border-b border-white/60 pb-1 hover:border-[#F8BA8B] hover:text-[#F8BA8B] transition-colors cursor-pointer"
          >
            <span>Explore Properties</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Hero Controls & Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-24">
          
          {/* Bottom Left Statement */}
          <div className="md:col-span-6 space-y-1">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/90 leading-tight">
              WE BUILD <br />
              MODERN <br />
              HOUSES <br />
              IN USA
            </h2>
          </div>

          {/* Bottom Right Social Outline Buttons */}
          <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: (props) => <span className="font-bold text-xs">X</span>, label: 'Twitter X' },
              { icon: Linkedin, label: 'LinkedIn' }
            ].map((social, idx) => {
              const IconComp = social.icon;
              return (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/30 bg-black/30 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-black hover:bg-[#F8BA8B] hover:border-[#F8BA8B] transition-all duration-300"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
