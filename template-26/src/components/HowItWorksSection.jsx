import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';
import { TrendingUp, ShieldCheck, CreditCard } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-black uppercase text-gray-400 tracking-widest block mb-2">
              | How it works |
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#090d16]">
              Simple Steps to <em className="font-serif italic font-normal">Smarter Finance</em>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Automate your financial operations, track performance in real time, and make confident decisions backed by clear insights.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Smart Wallet Overview */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="bg-[#f6f7f9] p-5 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-black text-gray-400 uppercase">
                <span className="bg-[#b0f92b] text-[#090d16] px-2 py-0.5 rounded">Finexa Cash Main Balance</span>
                <span>• • •</span>
              </div>
              <span className="font-display text-2xl font-black text-[#090d16] block">
                $1,389.00
              </span>
              <div className="flex justify-between text-[10px] font-bold text-gray-500 pt-1">
                <span>Nispay Number: •••• 5324</span>
                <span className="text-emerald-700 font-black">+ 320 Points</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-lg font-black text-[#090d16]">
                Smart Wallet Overview
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Track balance, rewards, and transfers in one secure place.
              </p>
            </div>
          </div>

          {/* Card 2: Financial Performance Insights */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="bg-[#f6f7f9] p-5 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex justify-between items-center text-xs font-black text-[#090d16]">
                <span>Statistics</span>
                <span className="text-[10px] text-gray-400 font-bold">This Week ▾</span>
              </div>
              
              {/* Simulated Line Chart SVG */}
              <div className="h-16 w-full flex items-center justify-center">
                <svg className="w-full h-full text-[#b0f92b]" viewBox="0 0 200 60" fill="none">
                  <path d="M0 40 Q40 10 80 35 T160 15 T200 30" stroke="#090d16" strokeWidth="2.5" fill="none" />
                  <path d="M0 45 Q40 20 80 40 T160 25 T200 35" stroke="#b0f92b" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-lg font-black text-[#090d16]">
                Financial Performance Insights
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Monitor trends and make smarter financial decisions.
              </p>
            </div>
          </div>

          {/* Card 3: Flexible Pricing Plans */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="bg-[#f6f7f9] p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#b0f92b]"></span>
                  <span>Basic Package</span>
                </div>
                <span className="font-black text-[#090d16]">$48.00</span>
              </div>

              <div className="flex justify-between items-center text-xs font-bold text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#090d16]"></span>
                  <span>VIP Package</span>
                </div>
                <span className="font-black text-[#090d16]">$89.00</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-lg font-black text-[#090d16]">
                Flexible Pricing Plans
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Pick the right plan with clear, transparent pricing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
