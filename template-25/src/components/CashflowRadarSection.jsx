import React, { useState } from 'react';
import { CASHFLOW_MONTHS } from '../data/mockData';
import { BarChart2, Filter, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function CashflowRadarSection() {
  const [timeframe, setTimeframe] = useState('Month');
  const [activeTab, setActiveTab] = useState('forecast');

  return (
    <section className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
              KNOW WHERE IT ALL <br />
              <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
                GOES.
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#0b2416]/80 font-medium leading-relaxed">
              A clear picture of income, outgoings and what's left — updated the second money moves, not at the end of the month.
            </p>

            {/* Filter Toggle Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab('forecast')}
                className={`w-full p-3.5 rounded-2xl border-2 font-extrabold text-xs text-left transition-all flex items-center justify-between ${
                  activeTab === 'forecast'
                    ? 'bg-[#0b2416] text-[#bef264] border-[#0b2416]'
                    : 'bg-white text-[#0b2416] border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>Cashflow forecast</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('subscription')}
                className={`w-full p-3.5 rounded-2xl border-2 font-extrabold text-xs text-left transition-all flex items-center justify-between ${
                  activeTab === 'subscription'
                    ? 'bg-[#0b2416] text-[#bef264] border-[#0b2416]'
                    : 'bg-white text-[#0b2416] border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>Subscription radar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('category')}
                className={`w-full p-3.5 rounded-2xl border-2 font-extrabold text-xs text-left transition-all flex items-center justify-between ${
                  activeTab === 'category'
                    ? 'bg-[#0b2416] text-[#bef264] border-[#0b2416]'
                    : 'bg-white text-[#0b2416] border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>Category rules</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Dashboard Visualization Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-3 border-[#0b2416] p-6 sm:p-8 shadow-lg space-y-6">
            
            {/* Header Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider block">
                  NET POSITION · THIS MONTH
                </span>
                <span className="font-display text-3xl font-black text-[#0b2416]">
                  +$4,318.24
                </span>
              </div>

              {/* Timeframe selector */}
              <div className="flex items-center space-x-1 bg-[#eff1e8] p-1 rounded-xl border border-[#0b2416]/10">
                {['Week', 'Month', 'Year'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                      timeframe === tf
                        ? 'bg-[#0b2416] text-white'
                        : 'text-[#0b2416]/70 hover:text-[#0b2416]'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Bar Chart Graphics */}
            <div className="space-y-2">
              <div className="h-44 flex items-end justify-between space-x-2 pt-4 px-2">
                {CASHFLOW_MONTHS.map((item, i) => {
                  const heightPercent = (item.income / 10000) * 100;
                  const isAug = item.month === 'Aug';
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div className="w-full bg-[#eff1e8] rounded-t-lg overflow-hidden flex items-end h-32 relative">
                        <div
                          className={`w-full transition-all duration-500 ${
                            isAug ? 'bg-[#0b2416]' : 'bg-[#bef264]'
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        ></div>
                      </div>
                      <span className={`text-[10px] font-black uppercase ${isAug ? 'text-[#0b2416]' : 'text-gray-400'}`}>
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Summary Stats Row */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100 text-center">
                <div className="bg-[#eff1e8] p-3 rounded-xl">
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">Incomes</span>
                  <span className="font-display text-lg font-black text-[#0b2416]">$9,240</span>
                </div>
                <div className="bg-[#eff1e8] p-3 rounded-xl">
                  <span className="text-[10px] text-gray-500 font-bold uppercase block">Expenses</span>
                  <span className="font-display text-lg font-black text-[#0b2416]">$4,922</span>
                </div>
                <div className="bg-[#0b2416] text-[#bef264] p-3 rounded-xl">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase block">Saved</span>
                  <span className="font-display text-lg font-black">$2,150</span>
                </div>
              </div>
            </div>

            {/* Category Breakdown Progress */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-black uppercase text-[#0b2416] block">
                WHERE IT WENT
              </span>
              
              {[
                { label: 'Housing', amount: '$1,080', pct: '65%', color: 'bg-[#0b2416]' },
                { label: 'Food & dining', amount: '$846', pct: '50%', color: 'bg-[#bef264]' },
                { label: 'Travel', amount: '$612', pct: '35%', color: 'bg-emerald-700' },
                { label: 'Subscriptions', amount: '$184', pct: '18%', color: 'bg-[#0b2416]' },
              ].map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-gray-700">
                    <span>{cat.label}</span>
                    <span className="font-black text-[#0b2416]">{cat.amount}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#eff1e8] overflow-hidden">
                    <div className={`h-full ${cat.color}`} style={{ width: cat.pct }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
