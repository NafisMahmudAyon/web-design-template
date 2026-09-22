import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/evergreenData';

export const StatsBar = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-slate-200">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center ${
                idx !== 0 ? 'pt-4 sm:pt-0 md:px-8' : 'md:pr-8'
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
