import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Star, Building, DollarSign } from 'lucide-react';
import { TRUST_LOGOS } from '../data/finexaData';

export default function StatsImpactSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card: Premium Analysis */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-sm rounded-[2.5rem] bg-[#FFFFFF] border border-slate-200/80 p-6 shadow-xl relative"
            >
              {/* Brand Label */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold tracking-tight text-slate-800">
                  Finexa
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                  2026
                </span>
              </div>

              {/* Big Growth Metric */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900 font-display">
                    +90%
                  </span>
                </div>
              </div>

              {/* Dark Embedded Chart Widget matching mockup */}
              <div className="bg-[#0B1120] rounded-2xl p-4 text-white relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-300">
                    Users
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Jan - Dec
                  </span>
                </div>

                {/* SVG Glowing Line Graph */}
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 65 Q 40 40, 80 50 T 140 25 T 200 10 L 200 80 L 0 80 Z"
                      fill="url(#chartGlow)"
                    />
                    <path
                      d="M 0 65 Q 40 40, 80 50 T 140 25 T 200 10"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    {/* Glowing highlight point */}
                    <circle cx="200" cy="10" r="4" fill="#38BDF8" className="animate-pulse" />
                  </svg>
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[10px] font-bold text-slate-400">
                  <span className="text-emerald-400 font-mono">+60%</span>
                  <span>Active Retention</span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-slate-500">
                  Premium Analysis
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Text & 3 Big Metric Columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 fill-blue-500" />
              <span>Impacts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] font-display">
              Make smarter financial decisions with real-time <span className="text-slate-500 font-normal">insights and full</span> visibility into your growth.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
              Move beyond spreadsheets and manual tracking. Our platform centralizes your financial data so every decision is backed by clarity, accuracy, and confidence.
            </p>

            {/* 3 Metric Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                  4.9
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Customer Rating
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                  $25M
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Revenue Managed
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                  1600+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  Trusted Businesses
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos Row with Edge-Faded Gradient Mask (Rule 1D) */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="marquee-mask overflow-hidden py-4">
            <div className="flex items-center justify-around gap-8 opacity-60 hover:opacity-100 transition duration-300">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo.name} className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition">
                  <span className="text-base sm:text-xl font-extrabold tracking-tight font-display">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
