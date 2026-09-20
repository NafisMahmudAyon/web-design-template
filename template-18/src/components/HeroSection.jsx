import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, Waves } from 'lucide-react';

export default function HeroSection({ onExploreClick }) {
  return (
    <section id="hero" className="pt-20 sm:pt-24 px-3 sm:px-6 md:px-8 pb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full rounded-3xl sm:rounded-5xl overflow-hidden min-h-[580px] sm:min-h-[660px] md:min-h-[740px] flex flex-col justify-between p-6 sm:p-10 md:p-14 text-white shadow-2xl">
          {/* Background Photography with subtle zoom effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              src="/assets/hero-surfer-hands.jpg"
              alt="Surfer gripping surfboard leash at dawn"
              className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.05]"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            />
            {/* Atmospheric Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041E1C]/90 via-[#041E1C]/40 to-black/30" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/50" />
          </div>

          {/* Top Row: Coordinates & Floating Collection Badge */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Technical Stamp */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15"
            >
              <span className="w-2 h-2 rounded-full bg-[#009E96] animate-pulse" />
              <span className="font-mono text-xs tracking-wider text-teal-200">
                (1021) // 33.7490° N, 118.0410° W
              </span>
            </motion.div>

            {/* Floating Top-Right Feature Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 bg-white/90 backdrop-blur-md text-[#0F1E1B] p-2 pr-4 rounded-2xl border border-white/40 shadow-xl max-w-xs group cursor-pointer hover:bg-white transition-colors"
              onClick={onExploreClick}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img
                  src="/assets/hero-mini-board.jpg"
                  alt="Tideline Surfboard Mini"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#009E96]">
                    [Summer 2026]
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">v26.4</span>
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1">
                  Custom Fish & Twin Shapes
                </span>
                <span className="text-[10px] text-gray-500 font-medium">
                  Available in limited studio runs
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center-Left Main Headline & Circular CTA */}
          <div className="relative z-10 my-auto py-10 sm:py-16 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#009E96]/20 border border-[#009E96]/40 backdrop-blur-sm">
                <Waves className="w-3.5 h-3.5 text-[#009E96]" />
                <span className="text-xs font-mono font-medium tracking-wide uppercase text-teal-200">
                  Precision Hydrodynamics
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.03] text-white">
                Ride Every{' '}
                <span className="inline-flex items-center gap-1 text-[#009E96] drop-shadow-md">
                  ✦
                </span>{' '}
                <span className="inline-block hover:rotate-12 transition-transform duration-300">
                  🏄
                </span>{' '}
                Wave With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-[#009E96]">
                  Confidence
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-teal-100/80 max-w-xl font-light leading-relaxed">
                Handcrafted high-performance boards designed with aerospace precision and shaped
                with artisan soul for point breaks, beach barrels, and open ocean flow.
              </p>
            </motion.div>

            {/* Circular CTA Button & Specs Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <button
                onClick={onExploreClick}
                className="group relative flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#009E96] hover:bg-[#028B84] text-white font-semibold text-sm tracking-wide shadow-teal-glow hover:shadow-teal-glow transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>SHOP COLLECTION</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>

              <div className="flex items-center gap-4 text-xs font-mono text-teal-200/90 border-l border-white/20 pl-4 py-1">
                <div>
                  <div className="text-white font-bold text-sm">38.5L - 48L</div>
                  <div className="text-teal-300/70 text-[10px]">Optimized Volume</div>
                </div>
                <div className="w-px h-6 bg-white/20" />
                <div>
                  <div className="text-white font-bold text-sm">100% Bio-Epoxy</div>
                  <div className="text-teal-300/70 text-[10px]">Sustainable Resin</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Giant Watermark & Footer Metadata */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex items-center gap-6 text-[11px] font-mono tracking-widest text-teal-100/60 uppercase">
              <span>EST. 2017</span>
              <span>•</span>
              <span>CALIFORNIA / AUSTRALIA</span>
              <span>•</span>
              <span>SERIES 26</span>
            </div>

            {/* Giant Translucent Brand Watermark */}
            <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white/10 tracking-tighter select-none pointer-events-none">
              TIDELINE ©
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
