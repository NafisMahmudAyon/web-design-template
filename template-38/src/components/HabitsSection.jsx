import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import { habitsData } from '../data/finexaData';

export default function HabitsSection({ onStartTrial }) {
  return (
    <section id="about" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">
              {habitsData.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
              {habitsData.sectionTitle}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              {habitsData.sectionSubtitle}
            </p>
          </div>
        </div>

        {/* Feature Split Container */}
        <div className="bg-[#FAF9FE] rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy & Checklist (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 shadow-xs">
                {habitsData.cardBadge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#09182A] tracking-tight font-display">
                {habitsData.cardTitle}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                {habitsData.cardDesc}
              </p>

              {/* 3 Key Points */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-[#09182A]">Key points:</div>
                {habitsData.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-current text-emerald-600" />
                    </div>
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onStartTrial}
                  className="px-6 py-3 rounded-full bg-[#09182A] text-white font-bold text-xs hover:bg-black transition-all shadow-md"
                >
                  Start Free trial
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Photo + Floating Spending Card (6 cols) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                {/* Photo of young professional */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80"
                  alt="Financial Habits"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                />

                {/* Floating Spending Analytics Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-100 shadow-xl"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#09182A] mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>Spending</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <span>Weekly</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-black text-[#09182A] font-mono">
                      {habitsData.spendingAmount}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 font-mono">
                      {habitsData.spendingChange}
                    </span>
                  </div>

                  {/* Segmented Color Bar */}
                  <div className="w-full h-2 rounded-full bg-gray-100 flex overflow-hidden gap-0.5 mb-2">
                    <div className="w-[45%] h-full bg-[#1D4ED8]" />
                    <div className="w-[25%] h-full bg-amber-500" />
                    <div className="w-[20%] h-full bg-emerald-500" />
                    <div className="w-[10%] h-full bg-gray-400" />
                  </div>

                  {/* Legend */}
                  <div className="flex justify-between text-[9px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span> Grocery
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Food
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Rent
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Others
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
