import React from 'react';
import { motion } from 'framer-motion';
import { Plus, CheckCircle2 } from 'lucide-react';
import { HERO_ASSETS, METRICS } from '../data/mockData';

export default function MethodSection({ onOpenJoin }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Top Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.95] uppercase"
          >
            BUILD THE COMPETITOR, NOT JUST THE TECHNIQUE.
          </motion.h2>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            A cleaner swing path is easy to teach. Holding it together at 4-all in the third is another job entirely. Every block at Vantage pairs technical work with pressure — timed drills, scoreboard sets, and film review the same afternoon.
          </p>

          <button
            onClick={onOpenJoin}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vantageNeon hover:underline"
          >
            <span>OUR METHOD</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Photos & 20 Years of Development Stat Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Photo 1 (Left 6 cols) */}
        <div className="md:col-span-6 rounded-3xl overflow-hidden h-96 sm:h-[480px] relative border border-white/10 shadow-2xl">
          <img
            src={HERO_ASSETS.methodBall}
            alt="Tennis player focused on ball"
            className="w-full h-full object-cover brightness-[0.9]"
          />
        </div>

        {/* Right Stack (6 cols): Photo 2 & 20 Years Stat Card */}
        <div className="md:col-span-6 flex flex-col justify-between gap-6">
          <div className="rounded-3xl overflow-hidden h-48 sm:h-56 relative border border-white/10 shadow-xl">
            <img
              src={HERO_ASSETS.methodRacket}
              alt="Tennis racket strings"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-[#080d14] border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="font-display text-6xl sm:text-7xl font-bold text-white tracking-tight mb-2">
              20
            </div>
            <div className="font-condensed text-lg font-bold text-vantageNeon uppercase tracking-wider mb-4">
              YEARS OF DEVELOPMENT
            </div>
            <ul className="space-y-2 text-xs text-gray-300 font-sans">
              <li className="flex items-center gap-2">• Season-long squad coaching</li>
              <li className="flex items-center gap-2">• Match data on every set</li>
              <li className="flex items-center gap-2">• Individual physical plans</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4 Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
        {METRICS.map((m, idx) => (
          <div key={idx} className="space-y-1">
            <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {m.val}
            </div>
            <div className="text-[11px] font-bold text-gray-400 font-condensed tracking-wider uppercase">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
