import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap, Coins, Sparkles, RefreshCw, ChevronDown } from 'lucide-react';

export default function HeroSection({ onOpenSignUp }) {
  const [activeTab, setActiveTab] = useState('All Time');
  const [bought, setBought] = useState(false);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00e699]/15 to-[#06b6d4]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Typography */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
        >
          Smart investing made simple and accessible
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Buy, sell, and manage crypto with confidence using a powerful platform built for both beginners and professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00e699] text-black font-bold text-sm hover:bg-[#34d399] transition-all shadow-neon-emerald group"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Hero App Showcase Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-4xl mx-auto py-12 px-4 cyber-grid rounded-3xl border border-white/10 shadow-2xl bg-[#0b0d0e]/60 backdrop-blur-md"
      >
        {/* Glowing Cyber Grid Backdrop Lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00e699]/5 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Floating Card: Bitcoin / SOL price */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full md:w-56 bg-[#121417]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /> Bitcoin BTC</span>
              <span className="text-emerald-400 font-semibold">+1.68%</span>
            </div>

            <div className="flex items-baseline justify-between mb-3">
              <div className="text-xl font-bold text-white">34,209 <span className="text-xs text-gray-400 font-normal">SOL</span></div>
              <span className="text-[10px] text-gray-500">$3,568</span>
            </div>

            {/* Mini SVG sparkline */}
            <div className="h-10 w-full mb-3">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <path d="M 0,25 Q 25,10 50,20 T 100,5" fill="none" stroke="#00e699" strokeWidth="2" />
              </svg>
            </div>

            <button
              onClick={() => setBought(!bought)}
              className={`w-full py-2 rounded-xl text-xs font-bold transition-all ${
                bought ? 'bg-emerald-500 text-black' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {bought ? '✓ Order Executed' : 'Buy SOL'}
            </button>
          </motion.div>

          {/* Central Mobile Phone Mockup */}
          <div className="w-72 sm:w-80 bg-[#0e1012] border-4 border-white/15 rounded-[40px] p-4 shadow-2xl relative overflow-hidden">
            {/* Phone Notch */}
            <div className="w-28 h-4 bg-black rounded-b-xl mx-auto mb-4" />

            {/* App Header Inside Phone */}
            <div className="flex items-center justify-between text-xs text-gray-300 mb-4 px-1">
              <div>
                <p className="text-[10px] text-gray-500">Welcome Back,</p>
                <p className="font-bold text-white">James Northam</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00e699] to-[#06b6d4] text-black font-bold text-xs flex items-center justify-center">
                JN
              </div>
            </div>

            {/* Balance Card inside Phone */}
            <div className="bg-[#181a1e] rounded-2xl p-4 border border-white/10 mb-4">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                <span>Your spendings</span>
                <span className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">All Time</span>
              </div>
              <div className="text-3xl font-bold text-white font-display">$286.9</div>

              {/* Bar graph widget */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-end justify-between h-14">
                {[40, 65, 30, 85, 55, 90, 70, 45, 80].map((h, i) => (
                  <div key={i} className="w-2 bg-white/10 rounded-t-sm relative group overflow-hidden">
                    <div
                      className="bg-gradient-to-t from-[#00e699] to-[#06b6d4] w-full rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] text-gray-400 mt-2">
                <span>$86.9</span>
                <span className="text-emerald-400 font-bold">+14.2%</span>
              </div>
            </div>

            {/* Quick action icons inside phone */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-gray-400">
              <div className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <Coins className="w-4 h-4 text-[#00e699] mx-auto mb-1" />
                <span>Buy</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <Zap className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span>Swap</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <ShieldCheck className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                <span>Stake</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <RefreshCw className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <span>Auto</span>
              </div>
            </div>
          </div>

          {/* Right Floating Cards Stack */}
          <div className="w-full md:w-60 space-y-4">
            {/* Card 1: BTC Conversion */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-[#121417]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-xs space-y-2"
            >
              <div className="flex items-center justify-between text-gray-400">
                <span>1 BTC = 74,366.04 USD</span>
                <span className="text-emerald-400 font-bold">+2.8%</span>
              </div>
              <div className="text-[11px] text-gray-500">Network Fee: <span className="text-white font-mono">0.000045 BTC</span></div>
            </motion.div>

            {/* Card 2: Spend/Receive conversion widget */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="bg-[#121417]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Spend</span>
                <div className="flex items-center gap-1 text-white font-bold">
                  <span>$2</span>
                  <span className="text-[10px] text-gray-400 font-normal">BTC</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Receive</span>
                <div className="flex items-center gap-1 text-[#00e699] font-bold">
                  <span>$3,564.00</span>
                  <span className="text-[10px] text-gray-400 font-normal">USD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
