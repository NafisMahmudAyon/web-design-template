import React, { useState } from 'react';
import { Calendar, ChevronDown, Radio } from 'lucide-react';

export default function FinancialHeader({ activeSubtab, setActiveSubtab }) {
  const [timeframe, setTimeframe] = useState('This Month');
  const [timeframeDropdown, setTimeframeDropdown] = useState(false);

  const subtabs = ['Overview', 'Transactions', 'Budgets', 'Reports'];

  return (
    <div className="pt-6 pb-4 space-y-4">
      {/* Top Title & Period Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Financial Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time financial insights to help you make informed decisions
          </p>
        </div>

        {/* Date Selector Dropdown */}
        <div className="relative self-start sm:self-auto">
          <button
            onClick={() => setTimeframeDropdown(!timeframeDropdown)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{timeframe}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {timeframeDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-xl z-30 animate-in fade-in zoom-in-95">
              {['This Month', 'Last Month', 'Q3 2026', 'This Year'].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTimeframe(t);
                    setTimeframeDropdown(false);
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

      {/* Subtoolbar: Filter Tabs & Live Update indicator */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-full">
          {subtabs.map((tab) => {
            const isActive = activeSubtab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveSubtab(tab)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150
                  ${isActive 
                    ? 'bg-white text-slate-900 shadow-2xs font-bold' 
                    : 'text-slate-500 hover:text-slate-900'
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Live Update Pulse */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
          </span>
          <span className="text-[11px] sm:text-xs">Live Update</span>
        </div>
      </div>
    </div>
  );
}
