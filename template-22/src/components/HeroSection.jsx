import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Search, Mic, Volume2, ArrowUp, Plane, Calendar, MapPin, Share2 } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function HeroSection({ onOpenPlanTrip }) {
  const [promptInput, setPromptInput] = useState('');

  const handlePromptClick = (text) => {
    setPromptInput(text);
    onOpenPlanTrip();
  };

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Mountain Photo with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl mx-4 sm:mx-6 border border-white/10">
        <img
          src={HERO_ASSETS.heroBg}
          alt="Traveler standing on mountain peak"
          className="w-full h-full object-cover brightness-[0.75] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b131c] via-[#0b131c]/40 to-black/30" />
      </div>

      {/* Hero Typography & Top Widgets Stack */}
      <div className="relative z-10 max-w-5xl mx-auto pt-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
          {/* Left Title & CTA */}
          <div className="max-w-xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-cyan-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cutting-edge AI trip designs.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08]"
            >
              Smart & Simple Trip Planning
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={onOpenPlanTrip}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0b131c] font-bold text-sm hover:bg-gray-200 transition-all shadow-xl group"
              >
                <span>Plan Your Trip</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Top Right Floating Card: Bali Slow Travel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full sm:w-72 bg-[#0f1824]/90 border border-white/20 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl space-y-3"
          >
            <div className="relative h-32 rounded-xl overflow-hidden">
              <img src={HERO_ASSETS.baliTravel} alt="Bali Slow Travel" className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 flex gap-1">
                <span className="px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-bold">7 Days</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 text-[10px] font-bold">Natural escape</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm">Bali Slow Travel</h4>
              <p className="text-xs text-gray-300 line-clamp-1 mt-0.5 font-sans">
                A mindful itinerary blending rice terraces, wellness, and beach sunsets.
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <button
                onClick={onOpenPlanTrip}
                className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold transition-colors"
              >
                View Details
              </button>
              <Share2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Floating Stack: Flight Ticket Widget, AI Search Bar, & Global Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-12">
          {/* Flight Ticket Widget (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-[#0f1824]/90 border border-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-xs space-y-2"
          >
            <div className="flex justify-between text-gray-400 text-[10px] font-semibold">
              <span>Sun 09</span>
              <span className="text-cyan-400 font-bold">Direct Flight</span>
            </div>

            <div className="flex items-center justify-between font-mono font-bold text-white pt-1">
              <div>
                <p className="text-base text-white">DUB</p>
                <p className="text-[10px] font-normal text-gray-400">6:10 AM</p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[9px] text-gray-400 font-sans">1h 34m</span>
                <div className="flex items-center gap-1 text-cyan-400">
                  <span>- - - - -</span>
                  <Plane className="w-3 h-3 rotate-90" />
                </div>
              </div>

              <div>
                <p className="text-base text-white">LON</p>
                <p className="text-[10px] font-normal text-gray-400">9:25 AM</p>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-emerald-400 font-bold font-mono">
              <span>Verified Rate</span>
              <span className="text-sm text-white">$220</span>
            </div>
          </motion.div>

          {/* AI Prompt Search Bar (Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-6 bg-[#0f1824]/95 border border-white/25 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl space-y-3"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onOpenPlanTrip();
              }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
            >
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="+ Ask Anything..."
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                <Volume2 className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                <button
                  type="submit"
                  className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Preset Prompt Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              {[
                '✦ Inspire me where to go',
                '✦ Create new Trip',
                '✦ Find family hotels in Dubai',
              ].map((pill, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handlePromptClick(pill.replace('✦ ', ''))}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-gray-300 hover:text-white transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Worldwide Access Proof (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-3 text-xs text-gray-300 space-y-2 bg-[#0f1824]/80 border border-white/15 backdrop-blur-md rounded-2xl p-3.5"
          >
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=85"
                alt="Explorers"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-cyan-500"
              />
              <span className="font-bold text-white text-xs">Worldwide Access</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
              We bring our top-rated AI travel planning solutions to explorers across the globe.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
