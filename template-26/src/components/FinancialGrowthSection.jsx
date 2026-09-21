import React, { useState } from 'react';
import { ArrowRightLeft, Calendar, Globe, Send, CheckCircle2 } from 'lucide-react';

export default function FinancialGrowthSection({ onOpenTransfer }) {
  const [fromAmount, setFromAmount] = useState('1000.00');
  const bdtRate = 121.6065;
  const convertedBDT = (parseFloat(fromAmount || 0) * bdtRate).toFixed(2);

  return (
    <section id="growth" className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-black uppercase text-gray-400 tracking-widest block">
            | Financial Growth |
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#090d16]">
            Achieve Your Financial <em className="font-serif italic font-normal">Goals</em> <br />
            With Confidence
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Monitor progress, forecast future expenses, and make informed decisions using real-time analytics powered by AI.
          </p>
        </div>

        {/* 2 Column Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Real-Time Currency Conversion Widget */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <h3 className="font-display text-xl font-black text-[#090d16]">
                Real-Time Conversion
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Live exchange rates instantly
              </p>
            </div>

            {/* Currency Inputs */}
            <div className="space-y-3">
              <div className="bg-[#f6f7f9] p-3.5 rounded-2xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">From</span>
                <div className="flex justify-between items-center mt-1">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="bg-transparent font-display text-xl font-black text-[#090d16] focus:outline-none w-full"
                  />
                  <span className="bg-white text-xs font-black px-2.5 py-1 rounded-lg border border-gray-300 flex items-center space-x-1">
                    <span>🇺🇸</span>
                    <span>USD</span>
                  </span>
                </div>
              </div>

              <div className="bg-[#f6f7f9] p-3.5 rounded-2xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">To</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="font-display text-xl font-black text-emerald-700">
                    {convertedBDT}
                  </span>
                  <span className="bg-white text-xs font-black px-2.5 py-1 rounded-lg border border-gray-300 flex items-center space-x-1">
                    <span>🇧🇩</span>
                    <span>BDT</span>
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-gray-500 font-bold px-1">
                <span>Network Fees</span>
                <span>2.59 USD</span>
              </div>
            </div>

            <button
              onClick={onOpenTransfer}
              className="w-full bg-[#090d16] hover:bg-black text-white font-black text-xs py-3.5 rounded-full shadow-md transition-all"
            >
              Exchange Money
            </button>
          </div>

          {/* Right Column: Active Users & Payment Schedule */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Top Stat Highlight */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase block">Daily active users</span>
                <span className="font-display text-4xl font-black text-[#090d16]">450M+</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#b0f92b] text-[#090d16] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5 text-[#090d16]" />
              </div>
            </div>

            {/* Calendar Schedule List */}
            <div className="bg-[#f6f7f9] p-5 rounded-2xl border border-gray-200 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-display text-sm font-black text-[#090d16]">Schedule</h4>
                  <p className="text-[10px] text-gray-500 font-bold">Employee salary, payments</p>
                </div>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>

              {/* Day Pills */}
              <div className="flex justify-between text-[10px] text-gray-500 font-bold border-b border-gray-200 pb-2">
                <span>Sun 02</span>
                <span>Mon 03</span>
                <span className="bg-[#090d16] text-[#b0f92b] px-2 py-0.5 rounded-full">Wed 05</span>
                <span>Thu 06</span>
                <span>Fri 07</span>
                <span>Sat 08</span>
              </div>

              {/* Scheduled Items */}
              <div className="space-y-2 text-xs font-bold">
                <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="text-[#090d16] block leading-none">Send to Kamal</span>
                      <span className="text-[10px] text-gray-400 font-normal">Dec 6, 2026 · 9:40 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="text-[#090d16] block leading-none">Receive Sajibur</span>
                      <span className="text-[10px] text-gray-400 font-normal">Dec 6, 2026 · 10:30 PM</span>
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
