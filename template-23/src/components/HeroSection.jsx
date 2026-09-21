import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, MapPin, Award } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function HeroSection({ onOpenJoin }) {
  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl mx-2 sm:mx-6 border border-white/10">
        <img
          src={HERO_ASSETS.heroServe}
          alt="Tennis player leaping mid-air"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b121b] via-[#0b121b]/30 to-black/40" />
      </div>

      {/* Hero Typography Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-8 space-y-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="font-display text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white uppercase leading-[0.9] text-shadow"
        >
          OWN EVERY BASELINE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Performance tennis for players who treat every point as a decision. Structure, load, and match craft — built around you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={onOpenJoin}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-vantageNeon text-black font-bold text-sm hover:bg-[#b8e600] transition-all shadow-neon-glow group"
          >
            <span>EXPLORE PROGRAMS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenJoin}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/30 transition-all shadow-md group"
          >
            <span>BOOK A TRIAL</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Bottom Info Tags Row */}
        <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#080d14]/80 border border-white/20 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 text-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-vantageNeon/10 text-vantageNeon flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block uppercase tracking-wider">EST. 2011</span>
              <span className="text-gray-400 font-sans">Larkfield Bay • Hard & Clay Courts</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#080d14]/80 border border-white/20 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 text-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-vantageBlue-500/20 text-vantageBlue-400 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block uppercase tracking-wider">RANKED PLAYERS</span>
              <span className="text-gray-400 font-sans">National • Regional • Collegiate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
