import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';
import { heroData } from '../data/finexaData';

export default function HeroSection({ onStartTrial }) {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden finexa-hero-bg text-white">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & Action (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] font-display uppercase"
            >
              Fast, Easy Global <br />
              Money Transfers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed font-normal"
            >
              {heroData.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2"
            >
              <button
                onClick={onStartTrial}
                className="px-7 py-3.5 rounded-full bg-[#C5FF32] hover:bg-[#b5f51e] text-[#09182A] font-extrabold text-xs tracking-wide shadow-lg shadow-[#C5FF32]/25 transition-all hover:scale-105"
              >
                {heroData.ctaText}
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-12 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-400 uppercase cursor-pointer hover:text-white"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
              }}
            >
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Scroll</span>
            </motion.div>
          </div>

          {/* Right Column: Outdoor Cloudscape Photo + Floating Cards (6 cols) */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* Main Rounded Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-[340px] sm:w-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              {/* Clean Editorial Photo: Young man outdoors looking at phone with sky */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80"
                alt="Finexa Customer"
                className="w-full h-[480px] sm:h-[520px] object-cover object-top"
              />

              {/* Gradient overlay on photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09182A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card 1: Balance Pill (Top Right on image) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-10 left-8 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white shadow-xl"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight">
                  {heroData.balance}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-gray-200 mt-0.5">
                  <span>{heroData.balancePeriod}</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </motion.div>

              {/* Floating Card 2: Earning Money Pill (Bottom Center on image) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 text-[#09182A] flex items-center justify-between shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-[#09182A]">Earning Money</div>
                    <div className="text-[10px] text-gray-500">{heroData.earningName}</div>
                  </div>
                </div>
                <div className="text-xs font-black font-mono text-emerald-600">
                  {heroData.earningAmount}
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
