import React, { useState } from 'react';
import { ArrowRight, Play, Star, Send, Download, Repeat, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { trustedBrands } from '../data/mockData';

export default function HeroSection({ openAuthModal, openDemoModal }) {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <section id="home" className="relative pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F3FF] to-[#F8FAFC] dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-900">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#635BFF]/15 dark:bg-[#635BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#635BFF]/10 text-[#635BFF] dark:text-[#818CF8] text-xs font-extrabold border border-[#635BFF]/20">
              <span className="w-2 h-2 rounded-full bg-[#635BFF] animate-ping" />
              <span>Faster Global Payments</span>
            </div>

            {/* Main Headline matching mockup */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Your money, your goals, our technology to empower success
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Manage your finances easily with tools to track spending, set goals, and grow your wealth confidently.
            </p>

            {/* Social Proof Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                <img className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="user" />
                <img className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="user" />
                <img className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" alt="user" />
                <img className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120" alt="user" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-800 dark:text-white ml-1">4.9</span>
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  1.2K Ratings • <span className="underline">400+ Reviews</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openAuthModal('signup')}
                className="px-7 py-4 rounded-full bg-[#635BFF] hover:bg-[#4F46E5] text-white font-extrabold text-sm shadow-xl shadow-[#635BFF]/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2 group"
              >
                <span>Get Started for Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openDemoModal}
                className="px-6 py-4 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white font-extrabold text-sm border border-slate-200 dark:border-slate-700 shadow-md transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2.5"
              >
                <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[#635BFF]">
                  <Play className="w-3 h-3 fill-current translate-x-0.5" />
                </div>
                <span>Watch a Demo</span>
              </button>
            </div>

            {/* Trusted Logos Marquee */}
            <div className="pt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Trusted by 100+ Companies
              </p>
              <div className="flex items-center gap-6 sm:gap-8 overflow-hidden mask-marquee opacity-80 py-1">
                {trustedBrands.map((brand, i) => (
                  <span key={i} className="text-base sm:text-lg font-black text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {brand.logo}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Mobile App Frame Mockup matching design */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Phone Outer Shadow Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#635BFF]/40 to-indigo-500/20 rounded-[50px] blur-2xl transform rotate-3" />

              {/* iPhone Shell */}
              <div className="relative bg-slate-900 p-4 rounded-[48px] shadow-2xl border-4 border-slate-800">
                
                {/* Speaker Notch */}
                <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-950" />
                </div>

                {/* Inner Screen */}
                <div className="bg-white dark:bg-slate-950 rounded-[38px] p-4 text-slate-900 dark:text-white space-y-4">
                  
                  {/* Top Mobile Bar */}
                  <div className="flex items-center justify-between text-xs font-bold px-1">
                    <span className="text-slate-400">9:41</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-bold">My Account</span>
                      <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">
                        🔔
                      </div>
                    </div>
                  </div>

                  {/* Balance Display Card */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-5 shadow-lg relative overflow-hidden">
                    <div className="flex justify-between items-center text-xs text-slate-400 font-semibold mb-1">
                      <span>•••• 3429</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">Primary</span>
                    </div>
                    <p className="text-xs text-slate-400">Your Balance</p>
                    <h2 className="text-3xl font-black tracking-tight mt-0.5">$86,290.49</h2>
                    <p className="text-[10px] text-emerald-400 font-bold mt-1">↑ You saved $290 in last Month 1</p>
                  </div>

                  {/* 4 Quick Actions Row */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-2xl bg-[#635BFF] text-white flex items-center justify-center shadow-md shadow-[#635BFF]/30">
                        <Send className="w-4 h-4" />
                      </div>
                      <span className="mt-1 text-slate-700 dark:text-slate-300">Send</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </div>
                      <span className="mt-1 text-slate-700 dark:text-slate-300">Request</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                        <Repeat className="w-4 h-4" />
                      </div>
                      <span className="mt-1 text-slate-700 dark:text-slate-300">Exchange</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                        <MoreHorizontal className="w-4 h-4" />
                      </div>
                      <span className="mt-1 text-slate-700 dark:text-slate-300">More</span>
                    </div>
                  </div>

                  {/* Promo Banner Card */}
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 p-3 rounded-2xl flex items-center justify-between border border-amber-200/60 dark:border-amber-800/40">
                    <div>
                      <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300">Top Merchants</p>
                      <p className="text-xs font-black text-slate-900 dark:text-white">Discount Up to 80%</p>
                      <span className="text-[9px] text-amber-700 dark:text-amber-400">Festive Season Gift</span>
                    </div>
                    <span className="text-xs font-bold text-[#635BFF] bg-white dark:bg-slate-800 px-2 py-1 rounded-xl shadow-sm">
                      View all ›
                    </span>
                  </div>

                  {/* Transaction History */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-900 dark:text-white">Transaction History</span>
                      <span className="text-[10px] text-[#635BFF] hover:underline cursor-pointer">View all ›</span>
                    </div>

                    {/* Tx 1 */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                          MB
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Mikel Barle</p>
                          <p className="text-[9px] text-slate-400">10:30 AM</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-emerald-600">+$350.00</span>
                    </div>

                    {/* Tx 2 */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                          U
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Uber</p>
                          <p className="text-[9px] text-slate-400">08:15 AM</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">-$10.00</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
