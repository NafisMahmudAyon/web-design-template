import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Wind } from 'lucide-react';

export default function HeroSection({ onOpenQuoteModal, onOpenSessionModal }) {
  return (
    <section id="home" className="relative w-full min-h-[95vh] lg:min-h-[102vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36">
      {/* Scenic Renewable Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2100&auto=format&fit=crop"
          alt="Wind turbines on lush green hills"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Soft atmospheric gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-transparent to-[#0A2016]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-sky-950/20 to-transparent" />
      </div>

      {/* Hero Top Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] font-display"
          >
            Brighter Future Begins <br />
            with Clean Power
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl"
          >
            Empower your home or business with reliable, renewable solar solutions designed to cut costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary Action Button */}
            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-3.5 rounded-full bg-brand-lime hover:bg-brand-limeHover text-gray-950 font-bold text-sm sm:text-base shadow-xl hover:shadow-brand-lime/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action Button */}
            <button
              onClick={onOpenSessionModal}
              className="px-7 py-3.5 rounded-full bg-sky-400/35 hover:bg-sky-400/50 text-white font-medium text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 opacity-90" />
              <span>Book Session</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Giant Display Typography "Greenova" */}
      <div className="relative z-10 w-full mt-auto pointer-events-none select-none pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.92, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-[17vw] lg:text-[230px] font-black tracking-tighter leading-none text-white/95 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            style={{
              fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif',
              letterSpacing: '-0.06em',
            }}
          >
            Greenova
          </motion.div>
        </div>
      </div>

      {/* Bottom transition blend into light background */}
      <div className="relative z-10 h-10 bg-gradient-to-b from-transparent to-[#FAFAF9]" />
    </section>
  );
}
