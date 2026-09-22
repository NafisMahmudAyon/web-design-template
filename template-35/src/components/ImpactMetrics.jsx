import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../data/contentData';

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-xs font-bold text-[#141814] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>Success</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#141814] tracking-tight leading-snug">
            Expert financial guidance, data-driven insights, <span className="text-gray-400 font-normal">and tailored solutions to build clarity, control, and sustainable growth.</span>
          </h2>
        </div>

        {/* 4 Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#141814] tracking-tight">
                {item.stat}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 max-w-[170px] leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 font-medium mt-12">
          Based on real client outcomes across startups, SMEs, and growing enterprises.
        </p>

      </div>
    </section>
  );
}
