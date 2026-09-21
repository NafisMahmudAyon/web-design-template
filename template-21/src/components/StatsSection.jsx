import React from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../data/mockData';

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00e699]">
          TRUSTED
        </span>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
          Global Reach Proven Reliability
        </h2>

        <p className="text-base sm:text-lg text-gray-400 font-sans">
          Trusted worldwide, delivering consistent results everywhere.
        </p>
      </div>

      {/* 2x2 Grid for Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STATS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#121417] border border-white/10 rounded-3xl p-8 text-center hover:border-[#00e699]/50 transition-all group shadow-xl"
          >
            <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight group-hover:text-[#00e699] transition-colors mb-2">
              {item.number}
            </div>
            <div className="text-sm font-semibold text-gray-200 mb-2">{item.label}</div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
