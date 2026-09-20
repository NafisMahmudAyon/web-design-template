import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onExploreClick }) {
  const brandLogos = [
    'Cartier',
    'IWC Schaffhausen',
    'Rolex',
    'Breguet',
    'Patek Philippe',
    'Omega',
    'Audemars Piguet',
  ];

  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Gold Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Main Serif Luxury Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight text-white select-none">
            Luxury Watch{' '}
            <span className="text-2xl sm:text-4xl md:text-5xl font-mono align-top text-gold-400 font-light ml-1">
              ®
            </span>
          </h1>
        </motion.div>

        {/* 3 Pillars & Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 border-t border-b border-white/[0.08] py-8"
        >
          <div className="md:col-span-7 grid grid-cols-3 gap-4">
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-gold-400 uppercase tracking-widest block font-bold mb-1">
                TRACK YOUR
              </span>
              <span className="font-serif text-sm sm:text-base text-white tracking-wide">
                PORTFOLIO
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-gold-400 uppercase tracking-widest block font-bold mb-1">
                DISCOVER RARE
              </span>
              <span className="font-serif text-sm sm:text-base text-white tracking-wide">
                TIMEPIECES
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] sm:text-xs text-gold-400 uppercase tracking-widest block font-bold mb-1">
                GROW YOUR
              </span>
              <span className="font-serif text-sm sm:text-base text-white tracking-wide">
                WEALTH
              </span>
            </div>
          </div>

          <div className="md:col-span-5 text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
            Track collections, monitor real-time market performance, receive AI-powered valuations,
            and buy or sell investment-grade luxury watches with institutional-grade provenance.
          </div>
        </motion.div>

        {/* Macro Dial Centerpiece with Overlapping Floating Cards */}
        <div className="relative w-full max-w-4xl mx-auto my-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative rounded-full aspect-square max-w-[560px] sm:max-w-[620px] mx-auto p-3 sm:p-4 bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-2xl shadow-black/80 group"
          >
            {/* Watch Bezel Outer Ring */}
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner-gold">
              <img
                src="/assets/hero-watch-macro.jpg"
                alt="Rolex Daytona Cosmograph luxury macro chronograph dial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.9] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>

            {/* Floating Glass Card 1: Bottom-Left Asset Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 sm:bottom-8 -left-4 sm:-left-12 bg-[#0A0D12]/90 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-xs cursor-pointer hover:border-gold-500/50 transition-colors"
              onClick={onExploreClick}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex-shrink-0">
                <img
                  src="/assets/floating-watch-daytona.jpg"
                  alt="Rolex Daytona Mini"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white leading-tight">Rolex Daytona</h4>
                <span className="font-sans text-[11px] text-gray-400 block">Cosmograph Daytona</span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-xs font-bold text-white">$38,500</span>
                  <span className="font-mono text-[10px] font-bold text-emerald-400 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-0.5" />
                    +8.4%
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2: Top-Right Portfolio Metric */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -top-4 sm:top-6 -right-4 sm:-right-10 bg-[#0A0D12]/90 backdrop-blur-xl border border-white/15 p-4 rounded-2xl shadow-2xl text-right max-w-[200px]"
            >
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest block">
                Market Value
              </span>
              <div className="font-mono font-bold text-xl sm:text-2xl text-white my-0.5">
                $38,500
              </div>
              <span className="font-mono text-[10px] text-emerald-400 font-medium block">
                Portfolio Value <span className="font-bold">+12.8%</span> This Year
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Luxury Watchmaker Monogram Bar */}
        <div className="mt-20 pt-10 border-t border-white/[0.08]">
          <div className="text-center font-mono text-[10px] text-gold-400/80 uppercase tracking-widest mb-6">
            INSTITUTIONAL GRADE HOROLOGY DATA FOR PRESTIGE MAISONS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
            {brandLogos.map((brand) => (
              <span
                key={brand}
                className="font-serif text-sm sm:text-base md:text-lg text-gray-300 hover:text-gold-400 transition-colors cursor-default tracking-wider"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
