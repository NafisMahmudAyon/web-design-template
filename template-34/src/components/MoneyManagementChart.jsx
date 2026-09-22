import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
import { monthlyFlowData } from '../data/mockFinanceData';

export default function MoneyManagementChart() {
  const [activeMonthIdx, setActiveMonthIdx] = useState(7); // August is index 7
  const [timeframe, setTimeframe] = useState('Yearly');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeData = monthlyFlowData[activeMonthIdx];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header with Title, Info Icon & Timeframe Dropdown */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h2 className="text-base sm:text-lg font-bold text-[#141814] tracking-tight">
              Money Management Overview
            </h2>
            <button 
              title="Overview info"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Timeframe Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/[0.06] bg-[#F8F9F7] text-xs font-bold text-[#141814] hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <span>{timeframe}</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-28 rounded-xl bg-white p-1 shadow-lg border border-black/5 z-20 text-xs">
                {['Monthly', 'Quarterly', 'Yearly'].map((tf) => (
                  <button
                    key={tf}
                    onClick={() => { setTimeframe(tf); setDropdownOpen(false); }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-gray-50 font-medium text-gray-800"
                  >
                    {tf}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Net Changes Subheading */}
        <div className="mt-3">
          <p className="text-xs font-semibold text-[#6C736A]">
            Net changes this year
          </p>
          <div className="flex flex-wrap items-baseline gap-2 mt-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight">
              -$342,323.44
            </h3>
            <p className="text-xs font-medium text-gray-500">
              vs, <span className="font-bold text-rose-500">$80,899.00</span> last year
            </p>
          </div>
        </div>
      </div>

      {/* Main Dual Line/Area Chart with Vertical Background Ticks */}
      <div className="relative w-full h-52 sm:h-56 my-4 flex items-end">
        
        {/* Background Vertical Tick Lines (Jan to Dec) */}
        <div className="absolute inset-0 flex justify-between px-3 pointer-events-none">
          {monthlyFlowData.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end items-center h-full">
              <div className="w-[1px] h-full bg-gray-100/80" />
            </div>
          ))}
        </div>

        {/* SVG Dual Wave Curves */}
        <svg
          viewBox="0 0 600 200"
          className="w-full h-full overflow-visible z-10"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Green gradient */}
            <linearGradient id="moneyInGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
            {/* Red gradient */}
            <linearGradient id="moneyOutGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Green Line (Money In) Area */}
          <path
            d="M 0,90 Q 50,110 100,80 T 200,90 T 300,50 T 400,30 T 500,45 T 600,40 L 600,200 L 0,200 Z"
            fill="url(#moneyInGrad)"
          />
          <path
            d="M 0,90 Q 50,110 100,80 T 200,90 T 300,50 T 400,30 T 500,45 T 600,40"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Red Line (Money Out) Area */}
          <path
            d="M 0,140 Q 50,160 100,130 T 200,150 T 300,120 T 400,90 T 500,110 T 600,120 L 600,200 L 0,200 Z"
            fill="url(#moneyOutGrad)"
          />
          <path
            d="M 0,140 Q 50,160 100,130 T 200,150 T 300,120 T 400,90 T 500,110 T 600,120"
            fill="none"
            stroke="#EF4444"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating Dark Tooltip in Active Month (August) */}
        <div 
          style={{ left: `${(activeMonthIdx / 11) * 80 + 10}%` }}
          className="absolute top-8 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300"
        >
          <div className="bg-[#141814] text-white rounded-2xl p-2.5 shadow-2xl border border-white/10 min-w-[155px]">
            {/* Money In */}
            <div className="flex items-center justify-between gap-2 pb-1 border-b border-white/10 text-xs font-bold">
              <div className="flex items-center gap-1 text-[#34D399]">
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Money In</span>
              </div>
              <span className="text-[#34D399]">+$12,123.00</span>
            </div>
            {/* Money Out */}
            <div className="flex items-center justify-between gap-2 pt-1 text-xs font-bold">
              <div className="flex items-center gap-1 text-[#F87171]">
                <ArrowDown className="w-3.5 h-3.5" />
                <span>Money Out</span>
              </div>
              <span className="text-[#F87171]">-$12,123.00</span>
            </div>
          </div>
        </div>

        {/* Interactive Hover Columns for each month */}
        <div className="absolute inset-0 flex justify-between z-10">
          {monthlyFlowData.map((d, idx) => (
            <div
              key={d.month}
              onMouseEnter={() => setActiveMonthIdx(idx)}
              className="flex-1 cursor-pointer hover:bg-black/[0.015] transition-colors"
            />
          ))}
        </div>

      </div>

      {/* X-Axis Months Labels & Bottom Legend */}
      <div>
        {/* Months */}
        <div className="flex justify-between px-1 text-[11px] font-semibold text-gray-400">
          {monthlyFlowData.map((d, idx) => (
            <span 
              key={d.month} 
              className={activeMonthIdx === idx ? 'text-[#141814] font-bold' : ''}
            >
              {d.month}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-3 border-t border-black/[0.04] text-xs font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
            <span className="text-gray-700">Money In</span>
            <span className="text-[#10B981]">+$80,899.00</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
            <span className="text-gray-700">Money Out</span>
            <span className="text-[#EF4444]">-$60,899.00</span>
          </div>
        </div>
      </div>

    </div>
  );
}
