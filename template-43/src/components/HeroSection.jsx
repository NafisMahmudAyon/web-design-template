import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, ChevronDown } from 'lucide-react';

export default function HeroSection({ onStartTrial }) {
  const [weeklyFilter, setWeeklyFilter] = useState('Weekly');
  const [filterDropdown, setFilterDropdown] = useState(false);

  return (
    <section id="home" className="relative hero-sky-bg text-white pt-6 pb-20 sm:pb-32 overflow-hidden">
      {/* Ambient cloud lighting effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 sm:pt-14">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 z-10"
          >
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display leading-[1.08] uppercase text-white drop-shadow-sm">
              Fast, Easy Global <br />
              <span className="text-white">Money Transfers</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed font-medium">
              Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built for everyday use.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onStartTrial}
                className="px-8 py-4 rounded-full bg-[#B5F52C] hover:bg-[#A4EB1B] text-slate-950 text-sm font-extrabold shadow-lime-glow hover:shadow-xl hover:scale-[1.02] transition active:scale-95"
              >
                Start Free trial
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 sm:pt-20 flex items-center gap-2 text-xs font-bold text-white/75 tracking-wider uppercase">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              <span>Scroll</span>
            </div>
          </motion.div>

          {/* Right Hero Visual: Professional Man with Phone & Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Main Portrait Frame with arch rounded styling */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-b from-blue-400/30 to-blue-900/60">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85"
                alt="Finexa global user"
                className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition duration-700"
              />
              {/* Soft gradient edge */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Card 1: $8,24 Weekly */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-8 bg-white/90 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-xl text-slate-900 z-20 min-w-[150px]"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-2xl font-extrabold tracking-tight font-display">
                  $8,24
                </span>
              </div>
              <div className="relative">
                <button
                  onClick={() => setFilterDropdown(!filterDropdown)}
                  className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-slate-100/80 px-2 py-0.5 rounded-full"
                >
                  <span>{weeklyFilter}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {filterDropdown && (
                  <div className="absolute left-0 mt-1 bg-white border border-slate-200 rounded-xl p-1 shadow-lg z-30 text-xs">
                    {['Daily', 'Weekly', 'Monthly'].map(f => (
                      <button
                        key={f}
                        onClick={() => {
                          setWeeklyFilter(f);
                          setFilterDropdown(false);
                        }}
                        className="block w-full text-left px-2 py-1 rounded-md hover:bg-slate-100"
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Floating Glass Card 2: Earning Money - Web Design +$7.65 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-xl border border-white/70 px-4 py-3 rounded-2xl shadow-xl text-slate-900 z-20 flex items-center gap-3 min-w-[210px]"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] font-bold text-slate-900 block truncate">
                  Earning Money
                </span>
                <span className="text-[10px] text-slate-400 block truncate">
                  Web Design
                </span>
              </div>
              <span className="text-xs font-extrabold text-emerald-600 flex-shrink-0">
                + $7.65
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
