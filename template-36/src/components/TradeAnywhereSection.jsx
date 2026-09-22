import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Bell, 
  ChevronRight 
} from 'lucide-react';
import { tradeAnywhereAccordions } from '../data/cryptoData';

export default function TradeAnywhereSection() {
  const [openAccordion, setOpenAccordion] = useState('advanced-tools');
  const [timeframe, setTimeframe] = useState('6M');

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mobile Trade View (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-cyan-100 rounded-full blur-3xl pointer-events-none -z-0" />

            {/* Mobile Outer Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-[300px] sm:w-[330px] bg-[#163337] p-3 rounded-[44px] shadow-2xl shadow-[#163337]/20 border-4 border-gray-900 z-10"
            >
              <div className="bg-white rounded-[36px] p-5 overflow-hidden text-[#0B1A1C] border border-gray-100">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 mb-4 px-2">
                  <span>9:41</span>
                  <div className="w-16 h-3.5 bg-black rounded-full mx-auto"></div>
                  <span>5G 100%</span>
                </div>

                {/* Header Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400">&lt;</span>
                  <span className="text-xs font-bold text-[#0B1A1C]">Trade</span>
                  <span className="w-4"></span>
                </div>

                {/* Bitcoin Price Hero */}
                <div className="mb-4">
                  <div className="text-[11px] text-gray-400 font-medium">Bitcoin Price</div>
                  <div className="text-2xl font-black text-[#0B1A1C] font-mono mt-0.5">
                    $108,425.80
                  </div>
                  <div className="text-[10px] text-[#00D287] font-semibold flex items-center gap-0.5 mt-0.5 font-mono">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+2.34%</span>
                  </div>
                </div>

                {/* Timeframe Chips */}
                <div className="flex items-center justify-between text-[10px] bg-gray-100 p-1 rounded-xl mb-4 font-mono">
                  {['1H', '24H', '1W', '3M', '6M', '1Y', 'All'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-2 py-0.5 rounded-lg transition-all ${
                        timeframe === t
                          ? 'bg-[#0B1A1C] text-white font-bold'
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Detailed Wave Area Chart */}
                <div className="relative h-44 w-full my-2">
                  <svg viewBox="0 0 300 120" className="w-full h-full">
                    <defs>
                      <linearGradient id="tradeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D287" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#00D287" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,95 Q 40,75 80,85 T 160,50 T 220,65 T 260,35 T 300,45 L 300,120 L 0,120 Z"
                      fill="url(#tradeGradient)"
                    />
                    <path
                      d="M 0,95 Q 40,75 80,85 T 160,50 T 220,65 T 260,35 T 300,45"
                      fill="none"
                      stroke="#00D287"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                {/* Month labels */}
                <div className="flex justify-between text-[9px] text-gray-400 font-mono pt-2 border-t border-gray-100">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title & Interactive Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
                Best Experience
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
                Trade Smarter, Anytime, <br />
                Anywhere
              </h2>
            </div>

            {/* Accordion Stack */}
            <div className="space-y-3">
              {tradeAnywhereAccordions.map((item) => {
                const isOpen = openAccordion === item.id;

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#F9FBFA] border-gray-300 shadow-sm'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between p-5 text-left"
                    >
                      <span className="text-base font-bold text-[#0B1A1C] font-display">
                        {item.title}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-[#0B1A1C] text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
