import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AccentBanner({ onStartShopping }) {
  return (
    <section id="accent-banner" className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] sm:rounded-[48px] bg-[#132E22] overflow-hidden p-8 sm:p-12 lg:p-16 min-h-[420px] sm:min-h-[480px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl border border-emerald-950/40"
        >
          {/* Subtle grid background texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Left: Dynamic Splatter Sneaker Visual */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            {/* Ambient colorful aura behind the shoe */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/20 via-pink-500/20 to-amber-500/20 blur-3xl pointer-events-none" />
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative z-10 w-full max-w-md cursor-pointer"
            >
              <img
                src="/accent-sneaker.jpg"
                alt="Elegance Craft Accent Splatter Sneaker"
                className="w-full h-auto object-contain rounded-2xl filter drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Right: Typography, Badge & CTA */}
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-syne tracking-tight leading-[1.1] mb-6">
              Elegance Craft
              <br />
              Accent <span className="text-[#FF5722]">Shoes</span>
              {/* Price Pill Badge with fine rays */}
              <span className="inline-flex items-center align-middle ml-3 sm:ml-4 -translate-y-2 sm:-translate-y-3">
                <span className="relative inline-flex items-center bg-white text-neutral-900 text-sm sm:text-base font-extrabold px-3 sm:px-4 py-1.5 rounded-full shadow-lg">
                  $899.99
                  {/* Subtle sunburst sparkle rays */}
                  <span className="absolute -top-3 -right-2 text-amber-300 text-xs select-none">
                    ✦
                  </span>
                </span>
              </span>
            </h2>

            <p className="text-emerald-100/70 text-sm sm:text-base max-w-md mb-8 leading-relaxed font-sans">
              Hand-painted collector edition fusion with aerospace-grade cushioning and reactive energy return.
            </p>

            <button
              onClick={onStartShopping}
              className="group inline-flex items-center gap-3 bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform active:scale-95"
            >
              <span>Start Shopping</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
