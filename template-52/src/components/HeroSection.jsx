import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Mail, Sparkles } from 'lucide-react';

export const HeroSection = ({ onRequestDemo, onWatchDemo }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 text-center px-4">
      {/* Background Architectural Grid / Subtle perspective lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-8"
        >
          <div className="w-5 h-5 rounded-full bg-[#FFF1ED] text-[#FF5520] flex items-center justify-center">
            <Mail className="w-3 h-3" />
          </div>
          <span className="text-xs font-semibold text-slate-700">
            Marketing in Every Email
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]"
        >
          Effortless Email Signature <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-2.5">
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF5520] text-white shadow-md shadow-[#FF5520]/30 -translate-y-1">
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span>Marketing at Scale</span>
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FBBF24] text-slate-950 font-bold text-sm shadow-sm -translate-y-1">
              ☺
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed"
        >
          All-in-one platform to collect, manage, and optimize payments securely and globally with centralized signature governance and high click-through banners.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex items-center gap-3 flex-wrap justify-center"
        >
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 rounded-full bg-[#FF5520] hover:bg-[#E84512] text-white text-xs font-bold shadow-lg shadow-[#FF5520]/25 transition-all transform hover:-translate-y-0.5"
          >
            Request A Demo
          </button>

          <button
            onClick={onWatchDemo}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-xs font-bold text-slate-800 shadow-xs flex items-center gap-2 transition-all group"
          >
            <div className="w-5 h-5 rounded-full bg-[#FFF1ED] text-[#FF5520] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-[#FF5520]" />
            </div>
            <span>Watch Demo</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
