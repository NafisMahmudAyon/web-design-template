import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';

export default function HeroSectionCard({ onStartDetox }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full bg-[#dbead7] rounded-[36px] md:rounded-[44px] p-6 md:p-10 text-[#142015] overflow-hidden shadow-xl border border-white/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Headline & Action Column (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full z-10">
          <div>
            {/* Top Organic Badge Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-emerald-900/10 text-xs font-bold text-[#1f3820] mb-6 shadow-sm">
              <Leaf className="w-3.5 h-3.5 text-emerald-700" />
              <span>100% Organic Cold-Pressed Detox</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-[#142015] leading-[1.05] mb-4">
              Green Fuel <br />
              Smoothie
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm md:text-base font-medium text-[#2a452c]/90 max-w-md mb-8 leading-relaxed">
              A fresh blend designed to detox, hydrate & energize your day.
            </p>
          </div>

          {/* CTA Row & Rotating 7-Day Circular Badge */}
          <div className="flex flex-wrap items-center gap-6 mt-2">
            
            {/* CTA Button Duo */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05, shadow: '0 10px 25px rgba(20, 32, 21, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onStartDetox}
                className="bg-[#1b2d1c] hover:bg-[#122013] text-[#e4f2df] font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md cursor-pointer"
              >
                Start Detox
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                onClick={onStartDetox}
                className="w-12 h-12 rounded-full bg-[#1b2d1c] hover:bg-[#122013] text-[#e4f2df] flex items-center justify-center shadow-md cursor-pointer transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Continuous Rotating 7-Day Badge */}
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Rotating Circular SVG Text */}
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full text-[10px] font-bold tracking-widest uppercase text-[#253f27]"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">
                    FEEL THE DIFFERENCE IN 7 DAYS •
                  </textPath>
                </text>
              </motion.svg>

              {/* Center Number 7 Indicator */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black font-display text-[#142015] leading-none">7</span>
              </div>
            </div>

          </div>

        </div>

        {/* Right Hero Image Flat-Lay Card (lg:col-span-6) */}
        <div className="lg:col-span-6 relative">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white/90 bg-[#cde2c7] group"
          >
            <img 
              src="/assets/grov_hero_smoothie.png" 
              alt="Green Fuel Smoothie flat lay ingredients" 
              className="w-full h-auto min-h-[320px] max-h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
