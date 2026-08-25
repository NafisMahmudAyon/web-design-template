import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection({ onOpenTour, onOpenContact, onNavigate }) {
  return (
    <section id="hero" className="w-full pt-4 sm:pt-6 pb-12 px-3 sm:px-6 max-w-[1400px] mx-auto">
      {/* Outer Hero Card Container with curved border */}
      <div className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden min-h-[700px] lg:min-h-[820px] flex flex-col justify-between shadow-2xl border border-white/20 bg-zinc-900">
        {/* Background Misty Architectural Forest Villa Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
            alt="Misty Mountain Modern Concrete House"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Natural misty mountain gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-breeze-900/90 via-breeze-900/35 to-breeze-900/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-breeze-900/75 via-transparent to-breeze-900/40" />
        </div>

        {/* Top Navbar */}
        <Navbar onOpenContact={onOpenContact} onNavigate={onNavigate} />

        {/* Center Main Headline Area */}
        <div className="relative z-10 px-6 sm:px-14 lg:px-20 pt-16 pb-10 flex flex-col justify-center flex-grow">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-bold text-white leading-[1.02] tracking-tight mb-6">
              Smart Real Estate <br />
              Investment
            </h1>

            <p className="text-zinc-200 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-normal">
              On your journey to successful real estate investing, <br className="hidden sm:inline" />
              we are your reliable partner at Own Vestment.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar: Social Icons on Left & Interactive Two-Tours Card on Right */}
        <div className="relative z-20 px-6 sm:px-14 lg:px-20 pb-8 sm:pb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          {/* Left Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <a
              href="#facebook"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full glass-social-pill flex items-center justify-center text-white backdrop-blur-md shadow-md hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#twitter"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full glass-social-pill flex items-center justify-center text-white backdrop-blur-md shadow-md hover:scale-110"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#instagram"
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 rounded-full glass-social-pill flex items-center justify-center text-white backdrop-blur-md shadow-md hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Tour Card Trigger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onClick={onOpenTour}
            className="glass-card-dark rounded-[24px] p-4 sm:p-5 border border-white/20 shadow-2xl backdrop-blur-2xl cursor-pointer group hover:bg-zinc-900/80 transition-all max-w-sm"
          >
            <div className="flex items-center justify-between gap-4 mb-2.5">
              <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">
                Every week there is a <br />
                set for two-tours
              </h4>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-zinc-900 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              {/* Dual Thumbnail Avatars */}
              <div className="flex items-center -space-x-2.5 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=150&q=80"
                  alt="Tour 1"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/60 shadow"
                />
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=150&q=80"
                  alt="Tour 2"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/60 shadow"
                />
              </div>

              {/* Caption */}
              <p className="text-[11px] text-zinc-300 leading-tight">
                High-quality photos, Verified floor plans, and virtual tours for all properties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
