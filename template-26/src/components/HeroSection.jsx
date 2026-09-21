import React from 'react';
import { ArrowUpRight, Star, Plus, Send, Search, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/mockData';

export default function HeroSection({ onOpenSignUp, onOpenTransfer }) {
  return (
    <section className="relative pt-6 pb-20 lg:pt-10 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#0ea5e9] via-[#0284c7] to-[#0369a1] text-white">
      
      {/* Decorative Cloud/Gradient Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-300/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Award Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 text-xs font-extrabold text-white shadow-md mb-8">
          <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
          <span>Award-Winning Financial Solutions</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto">
          Manage Your <em className="font-serif italic font-normal text-[#b0f92b]">Money Smarter,</em> <br />
          Powered By Real Insights
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
          Plan, schedule, and analyze social media content from one dashboard. Grow faster with data-driven insights and automated performance tracking.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSignUp}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#b0f92b] hover:bg-[#a0eb1b] text-[#090d16] font-black text-sm px-8 py-4 rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 border border-[#090d16]/20"
          >
            <span>Start Free Trial</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>

          <button
            onClick={onOpenTransfer}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-8 py-4 rounded-full backdrop-blur-md transition-all"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Mockups Interactive Display */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          
          {/* Main Center Mobile Phone Mockup */}
          <div className="relative mx-auto w-72 sm:w-80 bg-slate-900 border-4 border-slate-800 rounded-[44px] shadow-2xl p-4 text-left text-white transform hover:scale-[1.01] transition-transform">
            
            {/* Phone Notch */}
            <div className="w-28 h-5 bg-black rounded-b-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-[9px] text-gray-500 font-mono">9:41</span>
            </div>

            {/* Header user info */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-[10px] text-gray-400 font-bold block">Good morning!</span>
                <span className="text-xs font-black text-white">Oripio Sajibur</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs border border-sky-400/30">
                OS
              </div>
            </div>

            {/* Total Balance Card */}
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 p-4 rounded-2xl space-y-3 shadow-lg">
              <span className="text-[10px] text-sky-200 font-bold uppercase tracking-wider block">
                Total Balance
              </span>
              <span className="font-display text-2xl font-black block">
                {HERO_DATA.totalBalance}
              </span>
              <p className="text-[10px] font-mono text-sky-100 font-bold">
                •••• •••• 2329
              </p>

              {/* Action Pills */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={onOpenTransfer}
                  className="flex-1 bg-white text-[#090d16] text-[11px] font-extrabold py-2 rounded-xl flex items-center justify-center space-x-1"
                >
                  <Plus className="w-3 h-3" />
                  <span>Deposit</span>
                </button>
                <button
                  onClick={onOpenTransfer}
                  className="flex-1 bg-white/20 text-white text-[11px] font-extrabold py-2 rounded-xl flex items-center justify-center space-x-1 hover:bg-white/30 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>Transfer</span>
                </button>
              </div>
            </div>

            {/* Recent Contacts Horizontal Row */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-[11px] font-bold text-gray-300">
                <span>Recent Contacts</span>
                <span className="text-sky-400 cursor-pointer">See all &gt;</span>
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-1">
                {HERO_DATA.contacts.map((c, idx) => (
                  <div key={idx} className="flex-shrink-0 text-center space-y-1">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-9 h-9 rounded-full object-cover border border-sky-400/40 mx-auto"
                    />
                    <span className="text-[9px] font-bold text-gray-400 block">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Left Floating Card: My Savings Plan */}
          <div className="hidden lg:block absolute top-12 left-4 w-72 bg-white text-[#090d16] p-5 rounded-2xl shadow-2xl border border-gray-200 text-left transform -rotate-3 hover:rotate-0 transition-transform">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black uppercase text-[#090d16]">MY SAVINGS PLAN</span>
              <span className="text-[10px] font-bold text-gray-400">•••</span>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-600 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Investment Goal</span>
                  </span>
                  <span className="font-black">62%</span>
                </div>
                <div className="text-[11px] text-gray-500 font-extrabold">{HERO_DATA.savingsGoal}</div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[62%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-600 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Emergency Fund</span>
                  </span>
                  <span className="font-black">60%</span>
                </div>
                <div className="text-[11px] text-gray-500 font-extrabold">{HERO_DATA.emergencyFund}</div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full bg-amber-500 w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Card: Transaction History */}
          <div className="hidden lg:block absolute top-16 right-4 w-72 bg-white text-[#090d16] p-5 rounded-2xl shadow-2xl border border-gray-200 text-left transform rotate-3 hover:rotate-0 transition-transform">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black uppercase text-[#090d16]">TRANSACTION HISTORY</span>
              <Search className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-3">
              {HERO_DATA.recentTransactions.map((t, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs font-bold">
                  <div>
                    <span className="block font-black text-[#090d16]">{t.name}</span>
                    <span className="text-[10px] text-gray-400 font-normal">{t.date}</span>
                  </div>
                  <span className={t.isIncome ? 'text-emerald-600 font-black' : 'text-gray-700 font-bold'}>
                    {t.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
