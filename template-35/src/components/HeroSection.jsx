import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, Send, ShieldCheck } from 'lucide-react';
import { heroData } from '../data/contentData';

export default function HeroSection({ onGetStarted }) {
  const [transferAmount, setTransferAmount] = useState('2,640');

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden hero-meadow-bg">
      
      {/* Ambient Sparkles */}
      <div className="absolute top-24 left-[15%] text-white/70 animate-pulse pointer-events-none">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-36 right-[18%] text-white/60 animate-pulse pointer-events-none">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute top-52 left-[8%] text-white/50 animate-pulse pointer-events-none">
        <Sparkles className="w-4 h-4" />
      </div>

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-xs font-bold text-[#141814] shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
          <span>{heroData.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#141814] tracking-tight max-w-4xl mx-auto leading-[1.15]">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto mt-4 leading-relaxed font-medium">
          {heroData.subtitle}
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGetStarted}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#141814] text-white text-xs font-bold shadow-xl hover:bg-black transition-all focus:outline-none"
          >
            <span>{heroData.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.button>
        </div>

        {/* Floating UI Mockup Cards on the Meadow Landscape */}
        <div className="mt-14 max-w-3xl mx-auto relative flex flex-col sm:flex-row items-center justify-center gap-6">
          
          {/* Card 1: Saving */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="w-full sm:w-72 bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-float border border-white/60 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-[#141814]">Saving</h3>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full cursor-pointer">
                <span>This month</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-2xl bg-[#F8F9F7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    $
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#141814]">Emergency Fund</p>
                    <p className="text-[9px] text-gray-400">Monthly reserve 4%</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#141814]">$1,120.50</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl bg-[#F8F9F7]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    %
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#141814]">Fixed Deposit</p>
                    <p className="text-[9px] text-gray-400">Lock-in APY 5.2%</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#141814]">$980.00</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Quick Transfer */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="w-full sm:w-72 bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-float border border-white/60 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-[#141814]">Quick Transfer</h3>
            </div>

            <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-[#F8F9F7] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                <span className="text-[11px] font-semibold text-gray-700">Debit Card</span>
              </div>
              <span className="text-xs font-bold text-[#141814]">$20,743</span>
            </div>

            <div>
              <label className="block text-[10px] text-gray-500 font-semibold mb-1">Enter amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">$</span>
                <input
                  type="text"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="w-full pl-6 pr-10 py-2 rounded-2xl border border-gray-200 text-xs font-extrabold text-[#141814] focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button 
                  onClick={() => alert(`Transferred $${transferAmount} successfully!`)}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-xl bg-[#141814] text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  <Send className="w-3.5 h-3.5 -translate-x-0.5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
