import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info } from 'lucide-react';

export default function HeroSpotlightCard({ activeProduct, onSelectHotspot }) {
  const tags = [
    'Long-lasting',
    'Best quality',
    'dustproof',
    'Soft cushioning',
    'Elegant design',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-full min-h-[460px] lg:min-h-[540px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-[#181a20] group flex flex-col justify-between p-6"
    >
      {/* Background Main Hero Image */}
      <img 
        src={activeProduct.image} 
        alt={activeProduct.name} 
        className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 opacity-95"
      />

      {/* Dark Subtle Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

      {/* Interactive Hotspot 1: Premium Materials (Top Right on Armrest Cushion) */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        onClick={() => onSelectHotspot('premium-materials')}
        className="absolute top-[38%] right-[8%] z-20 cursor-pointer flex items-center gap-2 group/pin"
      >
        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-white animate-ping-slow absolute" />
          <span className="w-3 h-3 rounded-full bg-white ring-4 ring-white/30 shadow-lg" />
        </div>

        <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-gray-950 shadow-xl border border-white flex items-center gap-1.5 hover:bg-white transition-colors">
          <span>Premium materials</span>
        </div>
      </motion.div>

      {/* Interactive Hotspot 2: Natural Finish (Bottom Right on Wood Leg) */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        onClick={() => onSelectHotspot('natural-finish')}
        className="absolute bottom-[28%] right-[16%] z-20 cursor-pointer flex items-center gap-2 group/pin"
      >
        <div className="relative flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-white animate-ping-slow absolute" />
          <span className="w-3 h-3 rounded-full bg-white ring-4 ring-white/30 shadow-lg" />
        </div>

        <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-gray-950 shadow-xl border border-white flex items-center gap-1.5 hover:bg-white transition-colors">
          <span>Natural finish</span>
        </div>
      </motion.div>

      {/* Top Overlay Badge */}
      <div className="relative z-10 self-end">
        <span className="px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-bold text-white border border-white/20">
          Handcrafted Series
        </span>
      </div>

      {/* Bottom Pill Tags Row (Matching Screenshot Pills: Long-lasting, Best quality, dustproof, Soft cushioning, Elegant design) */}
      <div className="relative z-10 flex flex-wrap items-center justify-end gap-2 mt-auto pt-4">
        {tags.map((t, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-gray-200 border border-white/20 hover:bg-white/20 transition-colors cursor-default"
          >
            {t}
          </span>
        ))}
      </div>

    </motion.div>
  );
}
