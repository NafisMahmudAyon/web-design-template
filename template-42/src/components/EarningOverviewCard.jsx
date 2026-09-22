import React, { useState } from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';
import { MONTHLY_EARNINGS } from '../data/steadiData';

export default function EarningOverviewCard() {
  const [selectedMonth, setSelectedMonth] = useState('Jul');
  const [timeframe, setTimeframe] = useState('This Year');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const activeData = MONTHLY_EARNINGS.find(m => m.month === selectedMonth) || MONTHLY_EARNINGS[6];

  return (
    <div className="bg-[#FFFFFF] border border-slate-200/90 rounded-3xl p-6 shadow-steadi-card flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-semibold text-slate-500 block mb-1">
            Earning Overview
          </span>
          <div className="flex items-center gap-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              $98,643.24
            </h3>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/60 text-xs font-bold text-orange-600">
              <TrendingUp className="w-3 h-3 stroke-[2.5]" />
              <span>+12.4% vs Last Week</span>
            </span>
          </div>
        </div>

        <div className="relative self-start sm:self-auto">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 transition"
          >
            <span>{timeframe}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-xl z-20 animate-in fade-in zoom-in-95">
              {['This Year', 'Last Year', 'All Time'].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTimeframe(t);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition"
                >
                  {t}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 12-Month Bar Chart */}
      <div className="relative pt-6">
        {/* Y-Axis Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 text-[10px] text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">100k</span>
            <div className="flex-1 border-b border-dashed border-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">80k</span>
            <div className="flex-1 border-b border-dashed border-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">60k</span>
            <div className="flex-1 border-b border-dashed border-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">40k</span>
            <div className="flex-1 border-b border-dashed border-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">20k</span>
            <div className="flex-1 border-b border-dashed border-slate-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right">0k</span>
            <div className="flex-1 border-b border-slate-200" />
          </div>
        </div>

        {/* Bars Container */}
        <div className="pl-10 grid grid-cols-12 gap-1.5 sm:gap-2.5 h-56 items-end relative z-10">
          {MONTHLY_EARNINGS.map((item) => {
            const isSelected = selectedMonth === item.month;
            const heightPercent = `${Math.min(item.value, 100)}%`;

            return (
              <div
                key={item.month}
                className="h-full flex flex-col justify-end items-center group cursor-pointer"
                onClick={() => setSelectedMonth(item.month)}
              >
                {/* Tooltip Badge on Highlighted Bar */}
                {isSelected && (
                  <div className="mb-1 text-[11px] font-bold text-orange-600 bg-white border border-orange-200 shadow-sm px-1.5 py-0.5 rounded-md whitespace-nowrap animate-in fade-in zoom-in-95">
                    {item.label}
                  </div>
                )}

                {/* Vertical Bar */}
                <div
                  style={{ height: heightPercent }}
                  className={`
                    w-full rounded-t-xl transition-all duration-300
                    ${isSelected 
                      ? 'bg-gradient-to-t from-orange-50 via-orange-100 to-orange-400 border-t-2 border-orange-500 shadow-sm' 
                      : 'bg-slate-100 group-hover:bg-slate-200'
                    }
                  `}
                />

                {/* Month Label */}
                <span className={`text-[10px] sm:text-xs font-semibold mt-2 ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-400'}`}>
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
