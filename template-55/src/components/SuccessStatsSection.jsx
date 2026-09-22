import React from 'react';
import { motion } from 'framer-motion';
import { successData } from '../data/finoraData';

export default function SuccessStatsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{successData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-[36px] font-normal leading-relaxed text-gray-700 tracking-tight font-display"
          >
            {successData.statementPart1}
            <span className="font-bold text-gray-950">
              {successData.statementBold}
            </span>
          </motion.h2>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {successData.metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="text-center p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-card transition-all"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 font-display tracking-tight leading-none">
                {metric.value}
              </div>
              <div className="mt-3 text-xs sm:text-sm font-medium text-gray-600 max-w-[180px] mx-auto leading-snug">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtext */}
        <p className="mt-10 text-center text-xs text-gray-400">
          {successData.disclaimer}
        </p>

      </div>
    </section>
  );
}
