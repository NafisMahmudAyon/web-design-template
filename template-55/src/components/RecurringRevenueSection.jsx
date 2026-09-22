import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { revenueBlockData } from '../data/finoraData';

const featureIcons = {
  'rev-1': RefreshCw,
  'rev-2': TrendingUp,
  'rev-3': Users,
};

export default function RecurringRevenueSection() {
  const [activeFeature, setActiveFeature] = useState('rev-1');

  return (
    <section className="py-20 sm:py-28 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 3 Feature Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight font-display text-white"
              >
                {revenueBlockData.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-lg"
              >
                {revenueBlockData.subtitle}
              </motion.p>
            </div>

            {/* 3 Interactive Feature Rows */}
            <div className="mt-8 sm:mt-10 space-y-3.5">
              {revenueBlockData.features.map((feat) => {
                const isActive = activeFeature === feat.id;
                const IconComp = featureIcons[feat.id] || RefreshCw;

                return (
                  <motion.div
                    key={feat.id}
                    onClick={() => setActiveFeature(feat.id)}
                    whileHover={{ x: 4 }}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border flex items-start gap-4 ${
                      isActive
                        ? 'bg-white/10 border-white/20 shadow-md'
                        : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/10'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-white/10 text-white flex-shrink-0 mt-0.5">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {feat.title}
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: White Analysis Earnings Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md rounded-[32px] bg-white p-6 sm:p-8 text-gray-950 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center justify-between pb-3">
                <span className="text-sm font-bold text-gray-500">{revenueBlockData.analysisCard.title}</span>
                <div className="p-1.5 rounded-full bg-gray-100 text-gray-600">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="text-xs text-gray-400 font-semibold">{revenueBlockData.analysisCard.label}</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-950 font-display mt-0.5">
                  {revenueBlockData.analysisCard.amount}
                </div>
              </div>

              {/* Bar Chart Representation */}
              <div className="mt-8 flex items-end justify-between gap-3 h-44 pt-4 border-b border-gray-100">
                {revenueBlockData.analysisCard.bars.map((bar) => {
                  const isApr = bar.active;

                  return (
                    <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      {isApr && (
                        <span className="text-[10px] font-bold text-gray-950 bg-gray-100 px-1.5 py-0.5 rounded-sm">
                          $59k
                        </span>
                      )}
                      <div
                        style={{ height: bar.height }}
                        className={`w-full max-w-[28px] rounded-t-md transition-all ${
                          isApr ? 'bg-gray-950' : 'bg-gray-200'
                        }`}
                      />
                      <span className={`text-[10px] ${isApr ? 'font-bold text-gray-950' : 'text-gray-400'}`}>
                        {bar.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
