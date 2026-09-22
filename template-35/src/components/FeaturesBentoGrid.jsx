import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { bentoFeatures } from '../data/contentData';

export default function FeaturesBentoGrid() {
  const [autoPayEnabled, setAutoPayEnabled] = useState(true);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-xs font-bold text-[#141814] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
            Powerful Finance, Zero Complexity
          </h2>
          <p className="text-sm text-[#6C736A] mt-3 font-medium">
            Clear insights and tools to manage, track, and grow your finances with confidence.
          </p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Multi-currency Global Payments */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#F8F9F7] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.03] shadow-sm"
          >
            {/* Inner Display Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.04] space-y-3 mb-6">
              {bentoFeatures[0].items.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-gray-400">{item.id}</span>
                    <span className="text-xs font-semibold text-[#10B981] bg-emerald-50 px-1.5 py-0.5 rounded">{item.currency}</span>
                    <span className="text-sm">{item.flag}</span>
                    <span className="text-xs font-bold text-[#141814]">{item.country}</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#141814]">{item.amount}</span>
                </div>
              ))}
            </div>

            {/* Description Text Below */}
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              {bentoFeatures[0].title}
            </p>
          </motion.div>

          {/* Card 2: Advanced Analytics & Reports */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#F8F9F7] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.03] shadow-sm"
          >
            {/* Inner Display Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.04] mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500">Analysis</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-extrabold text-[#141814] mb-4">{bentoFeatures[1].amount}</p>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-28 pt-2 gap-2">
                {bentoFeatures[1].bars.map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center h-full justify-end">
                    <div
                      style={{ height: `${bar.val}%` }}
                      className={`w-full rounded-t-lg transition-all ${
                        bar.isHigh ? 'bg-[#F16522]' : 'bg-gray-200'
                      }`}
                    />
                    <span className="text-[10px] font-semibold text-gray-400 mt-2">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Text Below */}
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              {bentoFeatures[1].title}
            </p>
          </motion.div>

          {/* Card 3: Income & Expenses Real-time Statistics */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#F8F9F7] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.03] shadow-sm"
          >
            {/* Inner Display Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.04] mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500">Statistics</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-gray-600 mb-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Income</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Expenses</span>
                </div>
                <div className="bg-[#141814] text-white px-2 py-0.5 rounded-full text-[10px]">
                  60% / 40%
                </div>
              </div>

              {/* Smoothed Wave Chart */}
              <div className="h-28 w-full">
                <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M 0,60 Q 50,40 100,55 T 200,30 T 300,45"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0,75 Q 50,85 100,65 T 200,80 T 300,70"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Description Text Below */}
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              {bentoFeatures[2].title}
            </p>
          </motion.div>

          {/* Card 4: Auto Pay & Invoices */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#F8F9F7] rounded-3xl p-8 flex flex-col justify-between border border-black/[0.03] shadow-sm"
          >
            {/* Inner Display Box */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.04] mb-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs font-bold text-[#141814]">Auto Pay</p>
                  <p className="text-[10px] text-gray-400">Enabled for 4 Platforms</p>
                </div>
                <button
                  onClick={() => setAutoPayEnabled(!autoPayEnabled)}
                  className={`w-10 h-6 rounded-full transition-colors relative p-0.5 ${
                    autoPayEnabled ? 'bg-[#10B981]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    autoPayEnabled ? 'translate-x-4' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <div className="space-y-2">
                {bentoFeatures[3].items.map((sub) => (
                  <div key={sub.name} className="flex items-center justify-between p-1.5 rounded-xl hover:bg-gray-50 text-xs">
                    <div>
                      <span className="font-bold text-[#141814]">{sub.name}</span>
                      <span className="text-[10px] text-gray-400 ml-1.5">{sub.amount}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      sub.status === 'Complete' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {sub.status === 'Complete' ? '✓ Complete' : '◷ Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Text Below */}
            <p className="text-sm font-semibold text-gray-800 leading-relaxed">
              {bentoFeatures[3].title}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
