import React, { useState } from 'react';
import { ChevronDown, Upload, SlidersHorizontal, Check } from 'lucide-react';

export const PageHeader = ({ onOpenExport, onOpenFilter, selectedTimeframe, onSelectTimeframe }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timeframes = ['This Week', 'This Month', 'This Quarter', 'This Year', 'All Time'];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Sales Overview
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Your current sales summary and activity
        </p>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Timeframe Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2.5 rounded-full bg-white border border-slate-200/80 hover:border-slate-300 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2 transition-all"
          >
            <span>{selectedTimeframe || 'This Month'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white border border-slate-200 shadow-xl py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
              {timeframes.map((tf) => (
                <button
                  key={tf}
                  onClick={() => {
                    onSelectTimeframe(tf);
                    setDropdownOpen(false);
                  }}
                  className="w-full px-3.5 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#5E43F3] flex items-center justify-between transition-colors"
                >
                  <span>{tf}</span>
                  {selectedTimeframe === tf && <Check className="w-3.5 h-3.5 text-[#5E43F3]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Export Button */}
        <button
          type="button"
          onClick={onOpenExport}
          className="px-4 py-2.5 rounded-full bg-white border border-slate-200/80 hover:border-slate-300 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2 hover:bg-slate-50/80 transition-all"
        >
          <Upload className="w-3.5 h-3.5 text-slate-500" />
          <span>Export</span>
        </button>

        {/* Filter Button */}
        <button
          type="button"
          onClick={onOpenFilter}
          className="px-5 py-2.5 rounded-full bg-[#5E43F3] hover:bg-[#5136E6] text-white text-xs font-semibold shadow-md shadow-[#5E43F3]/25 flex items-center gap-2 transition-all"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};
