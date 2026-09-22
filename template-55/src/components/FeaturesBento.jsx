import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { bentoFeaturesData } from '../data/finoraData';

export default function FeaturesBento() {
  const [activeMonth, setActiveMonth] = useState('Apr');
  const [autoPayEnabled, setAutoPayEnabled] = useState(true);

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{bentoFeaturesData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-950 tracking-tight leading-tight font-display"
          >
            {bentoFeaturesData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
          >
            {bentoFeaturesData.subtitle}
          </motion.p>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Multi-Currency Global Payments */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAFAF9] border border-gray-200/70 space-y-3">
              {bentoFeaturesData.cards.multiCurrency.invoices.map((inv) => (
                <div key={inv.code} className="p-3.5 rounded-xl bg-white border border-gray-100 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{inv.flag}</span>
                    <div>
                      <span className="text-xs font-bold text-gray-950 block">{inv.country}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{inv.code} • {inv.currency}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-950 font-display">{inv.amount}</span>
                </div>
              ))}
            </div>

            {/* Caption */}
            <p className="mt-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {bentoFeaturesData.cards.multiCurrency.caption}
            </p>
          </motion.div>

          {/* Card 2: Advanced Analytics & Reports (Bar Chart) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAFAF9] border border-gray-200/70">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-gray-400">Analysis Amount</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-950 font-display">
                    {bentoFeaturesData.cards.analytics.amount}
                  </div>
                </div>
                <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bar Chart Representation */}
              <div className="mt-8 flex items-end justify-between gap-3 h-36 pt-4 border-b border-gray-200">
                {bentoFeaturesData.cards.analytics.bars.map((bar) => {
                  const isApr = bar.month === 'Apr';

                  return (
                    <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      {isApr && (
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1 rounded-sm">
                          $59k
                        </span>
                      )}
                      <div
                        style={{ height: bar.height }}
                        className={`w-full max-w-[28px] rounded-t-md transition-all ${
                          isApr ? 'bg-orange-500' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      />
                      <span className={`text-[10px] ${isApr ? 'font-bold text-gray-950' : 'text-gray-400'}`}>
                        {bar.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {bentoFeaturesData.cards.analytics.caption}
            </p>
          </motion.div>

          {/* Card 3: Income vs Expenses Statistics (Line Chart Simulation) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAFAF9] border border-gray-200/70">
              <div className="flex items-center justify-between pb-3">
                <span className="text-sm font-bold text-gray-950">Statistics</span>
                <div className="p-2 rounded-full bg-gray-100 text-gray-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold mb-4">
                <span className="flex items-center gap-1.5 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Income
                </span>
                <span className="flex items-center gap-1.5 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Expenses
                </span>
              </div>

              {/* Styled SVG Line Chart with Tooltip */}
              <div className="relative h-28 w-full flex items-center justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                  {/* Income Line */}
                  <path
                    d="M 10 60 Q 75 10, 150 40 T 290 20"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Expense Line */}
                  <path
                    d="M 10 40 Q 75 65, 150 35 T 290 60"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Floating Ratio Tooltip */}
                <div className="absolute top-2 right-12 px-2.5 py-1 rounded-full bg-gray-950 text-white text-[10px] font-bold shadow-lg">
                  60% • 40%
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-200">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {bentoFeaturesData.cards.statistics.caption}
            </p>
          </motion.div>

          {/* Card 4: Auto Pay Subscriptions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="rounded-[32px] bg-white border border-gray-200/80 p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FAFAF9] border border-gray-200/70">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div>
                  <span className="text-sm font-bold text-gray-950 block">Auto Pay</span>
                  <span className="text-[10px] text-gray-400 font-medium">Enabled for 4 Platforms</span>
                </div>

                {/* Switch Toggle */}
                <button
                  type="button"
                  onClick={() => setAutoPayEnabled(!autoPayEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                    autoPayEnabled ? 'bg-emerald-500 justify-end' : 'bg-gray-300 justify-start'
                  }`}
                >
                  <motion.div layout className="w-5 h-5 rounded-full bg-white shadow-xs" />
                </button>
              </div>

              {/* Subscription Rows */}
              <div className="mt-3 space-y-2">
                {bentoFeaturesData.cards.autoPay.subscriptions.map((sub) => (
                  <div key={sub.name} className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 text-xs">
                    <div>
                      <span className="font-bold text-gray-900 block">{sub.name}</span>
                      <span className="text-[10px] text-gray-400">Monthly: {sub.cost}</span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ${
                        sub.status === 'Complete'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {sub.status === 'Complete' ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {sub.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              {bentoFeaturesData.cards.autoPay.caption}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
