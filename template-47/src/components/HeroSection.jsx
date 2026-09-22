import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, ChevronDown, Users, Sparkles } from 'lucide-react';

export const HeroSection = ({ onStartInvesting, onMeetFarmers }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      {/* High-Resolution Agricultural Wheat Field Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=2000&auto=format&fit=crop&q=85"
          alt="Lush green wheat field"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft natural vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-agro-forest/20 mix-blend-multiply" />
      </div>

      {/* Spacer to push content to center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 my-auto py-16">
        <div className="max-w-3xl">
          {/* Main Headline with Serif Italic 'Generations' */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Smart Farming for <br />
            Future <span className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal text-white drop-shadow-md">Generations</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/90 max-w-xl font-normal leading-relaxed drop-shadow-sm"
          >
            Send, receive, and track your finances in one secure platform built for speed, clarity, and everyday financial control.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onStartInvesting}
              className="px-8 py-4 rounded-full bg-agro-lime text-agro-forest text-sm font-extrabold hover:bg-agro-lime-hover hover:scale-105 transition-all duration-200 shadow-xl flex items-center gap-2 group"
            >
              <span>Start Investing</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onMeetFarmers}
              className="px-7 py-4 rounded-full glass-pill text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Meet the Farmers
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="flex items-center justify-between pt-6 border-t border-white/20 text-white text-xs">
          
          {/* Scroll Down Prompt */}
          <a
            href="#partners"
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>

          {/* Social Proof Star Pill */}
          <div className="flex items-center gap-3 glass-pill px-4 py-2 rounded-full border border-white/20 shadow-lg">
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>4.9</span>
            </div>

            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 1"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 2"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                alt="Farmer 3"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            </div>

            <span className="font-semibold text-white/90">10k+ Farmers</span>
          </div>

        </div>
      </div>
    </section>
  );
};
