import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Check, CheckCircle2, MoreHorizontal, CreditCard } from 'lucide-react';

export default function HeroSection({ onGetStarted, onWatchDemo }) {
  return (
    <section id="home" className="relative hero-cream-glow pt-12 pb-24 sm:pb-32 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBFAD2] text-[#3F6212] text-xs font-bold mb-6"
        >
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Faster Global Payments</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display max-w-4xl mx-auto leading-[1.12]"
        >
          Empowering You to Achieve <br />
          Financial Freedom
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-medium"
        >
          Perfect for fintech or consumer finance platforms aiming to simplify complex financial tasks for everyday users.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#111827] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl transition active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={onWatchDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-xs transition active:scale-95 flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-slate-800 text-slate-800" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Floating Dashboard Cards Matrix matching mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-b from-white to-[#F8FAFC] rounded-[3rem] p-6 sm:p-10 border border-slate-200/90 shadow-2xl space-y-6 text-left">
            {/* Row 1: Spending Limits, Income, Receiver */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 1: Spending Limits */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Spending Limits</span>
                  <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
                </div>
                <div className="space-y-1">
                  <div className="h-2 rounded-full bg-slate-100 flex overflow-hidden">
                    <div className="w-[68%] bg-slate-900" />
                    <div className="w-[12%] bg-[#B7F436]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold pt-1">
                    <span><strong>$6,890.00</strong> spent of $10,000.00</span>
                    <span className="font-mono text-slate-700 font-bold">20%</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Income */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Income</span>
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 font-display">
                  $8,682.00
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono bg-slate-50 px-2 py-1 rounded-lg">
                  <CreditCard className="w-3 h-3 text-slate-400" />
                  <span>Account: •••• •••• 6374</span>
                </div>
              </div>

              {/* Card 3: Receiver */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
                <span className="text-[11px] font-semibold text-slate-500 block">Receiver</span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Receiver avatar"
                      className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">Sajibur Rahman</span>
                      <span className="text-[10px] text-slate-400 font-mono">+8801701076703</span>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Finance Overview, Green VISA, Spending Limits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Card 4: Finance Overview */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">Finance Overview</span>
                  <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></button>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-900" /> Total</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Today</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500" /> This Week</span>
                </div>
              </div>

              {/* Card 5: Payment Cards VISA */}
              <div className="bg-gradient-to-tr from-[#9EE21D] to-[#B7F436] rounded-2xl p-4 text-slate-950 shadow-sm flex flex-col justify-between min-h-[90px]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider">Payment Cards</span>
                  <span className="text-xs font-mono font-bold">VISA</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono font-bold">•••• •••• 9204</span>
                  <span className="text-[10px] font-bold">08/29</span>
                </div>
              </div>

              {/* Card 6: Spending Limits */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 font-semibold block">Main balance</span>
                  <span className="text-xl font-extrabold text-slate-900 font-display">$24,930.00</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  +14.2%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
