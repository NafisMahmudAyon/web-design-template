import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';
import { COACHES } from '../data/mockData';

export default function CoachesSection({ onOpenJoin }) {
  return (
    <section id="coaches" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight"
          >
            THE PEOPLE ON YOUR COURT.
          </motion.h2>
        </div>

        <p className="text-sm sm:text-base text-gray-300 max-w-md font-sans leading-relaxed">
          Certified performance coaches with tour, collegiate and federation backgrounds. Each squad keeps the same lead coach for the full season.
        </p>
      </div>

      {/* 4 Coaches Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COACHES.map((coach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#080d14] border border-white/15 rounded-3xl p-4 flex flex-col justify-between shadow-xl group hover:border-vantageNeon transition-all"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-slate-900">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-transparent to-transparent opacity-80" />
            </div>

            <div className="space-y-1 text-left px-2 mb-2">
              <h3 className="font-condensed text-xl font-bold uppercase tracking-wider text-white group-hover:text-vantageNeon transition-colors">
                {coach.name}
              </h3>
              <p className="text-xs text-gray-400 font-sans">{coach.role}</p>
              <p className="text-[11px] text-gray-500 font-sans line-clamp-2 pt-1">{coach.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meet Coaching Team Button */}
      <div className="text-left">
        <button
          onClick={onOpenJoin}
          className="inline-flex items-center gap-2 text-xs font-bold font-condensed tracking-wider uppercase text-gray-400 hover:text-white transition-colors border-b border-gray-600 pb-1"
        >
          <span>MEET THE COACHING TEAM</span>
          <ArrowRight className="w-4 h-4 text-vantageNeon" />
        </button>
      </div>
    </section>
  );
}
