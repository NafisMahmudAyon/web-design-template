import React from 'react';
import { motion } from 'framer-motion';
import { investmentData } from '../data/evergreen59Data';

export const InvestmentSection = () => {
  return (
    <section id="investment" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-snug mb-4">
              {investmentData.leftTitle}
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
              {investmentData.leftDesc}
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.18]">
              {investmentData.rightTitle}
            </h2>
          </div>
        </div>

        {/* 4 Stats Grid with Divider */}
        <div className="pt-12 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y sm:divide-y-0 md:divide-x divide-slate-200">
          {investmentData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col ${
                idx !== 0 ? 'pt-4 sm:pt-0 md:pl-8' : 'md:pr-8'
              }`}
            >
              <span className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-500 font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
