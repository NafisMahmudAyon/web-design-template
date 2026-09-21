import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, BarChart3, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export default function BuiltOnSimplicitySection({ onOpenSignUp }) {
  const [activeTab, setActiveTab] = useState('Month');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          Built on simplicity, designed to deliver powerful results.
        </h2>
      </div>

      {/* Main Grid Layout with Central Phone & Callout Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Column Callout */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#121417] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#00e699]/50 transition-all shadow-xl group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#00e699]/10 text-[#00e699] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Automatically invest
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Create disciplined, recurring buys that help your money work smarter and compound steadily.
            </p>
          </motion.div>
        </div>

        {/* Central Column: Mobile App Feature Ring Mockup */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-80 bg-[#0e1012] border-4 border-white/15 rounded-[44px] p-5 shadow-2xl relative overflow-hidden"
          >
            {/* Top Time Range Selector inside phone */}
            <div className="flex items-center justify-center gap-2 bg-white/5 p-1 rounded-full text-[11px] mb-4">
              {['Week', 'Month', 'Year'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-full font-semibold transition-colors ${
                    activeTab === tab ? 'bg-[#00e699] text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Top Spent Coin */}
            <div className="bg-[#181a1e] rounded-2xl p-3 mb-4 flex items-center justify-between text-xs border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-black font-bold text-[10px] flex items-center justify-center">
                  ₿
                </div>
                <div>
                  <p className="font-bold text-white text-[11px]">BTC Bitcoin</p>
                  <p className="text-[9px] text-gray-400">Top Spent Coin</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">$504.79</p>
                <p className="text-[10px] text-emerald-400 font-bold">▲ 3.66%</p>
              </div>
            </div>

            {/* Earnings / Spending metric row */}
            <div className="grid grid-cols-2 gap-2 text-center text-xs mb-4">
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-2">
                <span className="text-[10px] text-gray-400 block">Earnings</span>
                <span className="font-bold text-emerald-400">$2,375 <span className="text-[9px] text-emerald-300">62%</span></span>
              </div>
              <div className="bg-red-950/40 border border-red-500/20 rounded-xl p-2">
                <span className="text-[10px] text-gray-400 block">Spending</span>
                <span className="font-bold text-red-400">$1,120 <span className="text-[9px] text-red-300">38%</span></span>
              </div>
            </div>

            {/* Central Ring Gauge Graphic */}
            <div className="relative flex items-center justify-center py-6">
              <div className="w-40 h-40 rounded-full border-8 border-emerald-500/20 border-t-[#00e699] border-r-cyan-400 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold font-display text-white">82%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Gains Realized</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column Callouts */}
        <div className="lg:col-span-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#121417] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all shadow-xl group"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Your portfolio at a glance
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Manage, track, and grow all your investments seamlessly from a single, unified platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#121417] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-purple-400/50 transition-all shadow-xl group"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-400/10 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Take control of the market
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              Set your preferred price and let custom orders automatically handle your buy and sell trades.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtitle & Learn More Button */}
      <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
        <p className="text-sm text-gray-400">
          Stay fully in control with a seamless mobile app that keeps your portfolio secure, updated, and accessible anytime.
        </p>
        <button
          onClick={onOpenSignUp}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#00e699] hover:underline"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
