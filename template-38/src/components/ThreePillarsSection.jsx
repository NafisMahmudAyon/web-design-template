import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Zap, CheckCircle2, Download, ChevronDown, ArrowRight } from 'lucide-react';
import { threePillars } from '../data/finexaData';

export default function ThreePillarsSection({ onExchangeClick }) {
  const [fromAmount, setFromAmount] = useState('1000.00');
  const [exchangeRate] = useState(121.6065); // 1 USD = 121.6065 BDT

  const toAmount = (parseFloat(fromAmount || 0) * exchangeRate).toFixed(2);

  return (
    <section className="py-24 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 shadow-xs">
              {threePillars.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
              {threePillars.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              {threePillars.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Real-Time Conversion (Interactive Converter) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#09182A] font-display">
                Real-Time Conversion
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Live exchange rates instantly
              </p>
            </div>

            {/* Currency Converter Form Box */}
            <div className="mt-6 bg-[#F8FAFC] p-4 rounded-2xl border border-gray-200/80 space-y-3">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Currency Details
              </div>

              {/* From input */}
              <div className="bg-white p-2.5 rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-gray-400">From</div>
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="text-sm font-bold text-[#09182A] font-mono focus:outline-none w-24"
                  />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                  <span>🇺🇸</span>
                  <span>USD</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
              </div>

              {/* To input */}
              <div className="bg-white p-2.5 rounded-xl border border-gray-200 flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-gray-400">To</div>
                  <div className="text-sm font-bold text-[#09182A] font-mono">
                    {toAmount}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                  <span>🇧🇩</span>
                  <span>BDT</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </div>
              </div>

              <div className="flex justify-between text-[10px] text-gray-500 pt-1">
                <span>Network Fees</span>
                <span className="font-bold text-[#09182A]">2.59 USD</span>
              </div>

              <button
                onClick={() => onExchangeClick && onExchangeClick(fromAmount, toAmount)}
                className="w-full py-2.5 rounded-xl bg-[#09182A] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Exchange Money
              </button>
            </div>
          </motion.div>

          {/* Card 2: 30M+ Users Worldwide (Editorial Image Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#09182A] text-white rounded-3xl overflow-hidden border border-gray-800 shadow-sm flex flex-col justify-between"
          >
            <div className="p-7">
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display">
                30M+ Users Worldwide
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Send and receive money seamlessly across the globe.
              </p>
            </div>

            {/* Photo of Happy Users */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80"
                alt="30M+ Users"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09182A] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Card 3: Instant Transfers (Receipt Success Card) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#09182A] font-display">
                Instant Transfers
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Real-time payments with zero delays
              </p>
            </div>

            {/* Success Receipt Card Box */}
            <div className="mt-6 bg-[#F8FAFC] p-5 rounded-2xl border border-gray-200/80 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#09182A]">Transfer Success</h4>
                <p className="text-[10px] text-gray-400">Transfer has been successfully done</p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 space-y-1 text-left text-xs">
                <div className="flex justify-between text-gray-400 text-[10px]">
                  <span>Summary</span>
                  <span>Date: 25 DEC 2026</span>
                </div>
                <div className="flex justify-between font-mono font-bold text-[#09182A] text-sm pt-1">
                  <span>Amount</span>
                  <span>$20,000</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-[#09182A] text-white text-xs font-bold hover:bg-black transition-colors flex items-center justify-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span>Download receipt</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
