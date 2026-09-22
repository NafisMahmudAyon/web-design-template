import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import { impactMetrics } from '../data/finexaData';

export default function MetricImpactSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: +90% Premium Analysis Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full max-w-sm bg-[#FAF9FE] rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4"
            >
              {/* Year badge & +90% stat */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#C5FF32] text-[#09182A] text-xs font-bold font-mono">
                  2026
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#09182A] font-mono">
                  +90%
                </span>
              </div>

              {/* Dark Embedded Analysis Widget */}
              <div className="bg-[#09182A] rounded-2xl p-4 text-white space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-gray-400">
                  <div>
                    <span className="text-white font-bold block">Users</span>
                    <span className="text-[9px]">Jan - Dec</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-blue-600/30 text-blue-400 font-bold text-[10px]">
                    +60%
                  </span>
                </div>

                {/* Simulated Wave SVG */}
                <div className="relative h-20 w-full">
                  <svg viewBox="0 0 300 70" className="w-full h-full">
                    <defs>
                      <linearGradient id="impactWave" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,55 Q 50,20 100,45 T 200,15 T 300,30 L 300,70 L 0,70 Z"
                      fill="url(#impactWave)"
                    />
                    <path
                      d="M 0,55 Q 50,20 100,45 T 200,15 T 300,30"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <div className="text-center pt-1 text-xs font-bold text-[#09182A] uppercase tracking-wider">
                Premium Analysis
              </div>
            </motion.div>
          </div>

          {/* Right Column: Headline, Description & 3 Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wide mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{impactMetrics.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight leading-[1.15] font-display">
                {impactMetrics.headline}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mt-4 leading-relaxed max-w-xl">
                {impactMetrics.description}
              </p>
            </div>

            {/* 3 Large Stats Columns */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {impactMetrics.stats.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-[#09182A] font-mono tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Partner Brands Row */}
        <div className="pt-10 border-t border-gray-100 flex items-center justify-between gap-8 flex-wrap text-gray-400 font-display">
          {impactMetrics.partners.map((partner) => (
            <span
              key={partner}
              className="text-lg sm:text-xl font-black tracking-tight hover:text-[#09182A] transition-colors cursor-pointer"
            >
              {partner}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
