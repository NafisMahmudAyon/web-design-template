import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';
import { heroData } from '../data/wanderlustData';

export const HeroSection = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brandForestDark text-white pt-24 pb-16"
    >
      {/* Background Night Sky & Ocean Scene with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
          alt="Moonlit Tropical Bay"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-75 contrast-110"
        />
        {/* Night atmospheric overlay with starry sky and deep twilight gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brandForestDark/90 via-brandForestDark/60 to-brandForestDark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.12),transparent_70%)]" />
      </div>

      {/* Floating Constellation Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full opacity-60" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-emerald-200 rounded-full animate-pulse" />
      </div>

      {/* Left Vertical Social Media Links */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-all duration-300"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-all duration-300"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:border-brandAmber hover:bg-brandAmber/20 transition-all duration-300"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <div className="w-[1px] h-12 bg-white/20" />
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Curated Global Escapes • Season 2025</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-[1.12] text-white max-w-4xl"
        >
          {heroData.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl font-sans font-light leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => onOpenBooking?.()}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brandAmber text-brandForestDark font-bold text-base shadow-xl shadow-brandAmber/30 hover:bg-amber-400 hover:shadow-brandAmber/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{heroData.ctaText}</span>
            <div className="w-7 h-7 rounded-full bg-brandForestDark/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="w-4 h-4 text-brandForestDark" />
            </div>
          </button>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-white/80 hover:text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-sm font-semibold"
          >
            <span>Explore Itineraries</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white cursor-pointer transition-colors"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] uppercase tracking-widest font-mono">Scroll Down</span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
};
