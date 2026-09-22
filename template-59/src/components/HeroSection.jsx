import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowDown, Sun, Zap } from 'lucide-react';
import { heroData } from '../data/evergreen59Data';

export const HeroSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    const propSection = document.getElementById('properties');
    propSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Background Mountain Villa Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.bgImage}
          alt="Modern Villa with Solar System"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(140,227,56,0.12),transparent_70%)]" />
      </div>

      {/* Floating Top Right Solar System Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-28 sm:top-32 right-4 sm:right-12 z-20 p-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl text-slate-800 border border-white/40 max-w-[200px]"
      >
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900 mb-0.5">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>{heroData.solarBadge.hours}</span>
        </div>
        <div className="text-[10px] text-slate-500 font-medium mb-2">
          {heroData.solarBadge.system}
        </div>
        <div className="text-base font-extrabold font-display text-slate-900">
          {heroData.solarBadge.price}
        </div>
      </motion.div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight leading-[1.08] text-white max-w-4xl"
        >
          {heroData.headlineStart}{' '}
          <span className="text-brandLime">{heroData.headlineHighlight}</span> <br />
          {heroData.headlineEnd}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-sans font-light leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Search Input Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 w-full max-w-md"
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 p-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-white/20 focus-within:ring-2 focus-within:ring-brandLime transition-all"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties..."
              className="w-full pl-5 pr-2 py-2 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-brandLime hover:bg-brandLime-hover text-slate-950 flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-md"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Right Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => {
          const invSection = document.getElementById('investment');
          invSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-colors"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">Scroll Down</span>
        <div className="w-7 h-7 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
          <ArrowDown className="w-3.5 h-3.5 text-brandLime" />
        </div>
      </motion.div>
    </section>
  );
};
