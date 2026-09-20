import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StockExchangeCard() {
  // 52 week range colored ticks
  const rangeBars = [
    // Red group
    '#EF4444', '#EF4444', '#EF4444', '#EF4444',
    // Orange/Amber group
    '#F97316', '#F97316', '#F59E0B', '#F59E0B', '#F59E0B', '#EAB308',
    // Green group
    '#22C55E', '#22C55E', '#10B981', '#10B981', '#059669',
    // Neutral / Inactive white/gray group
    '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D', '#3B424D'
  ];

  return (
    <div className="bg-[#191C21] border border-[#262C34] rounded-3xl p-5 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Header */}
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wide mb-3">
          Stock exchange
        </h3>

        {/* Main Price & Movement */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-2xl lg:text-3xl font-bold text-white font-mono tracking-tight">
              8,148.77
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              04:45 pm 11/06
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold font-mono">
              <ArrowUpRight size={14} strokeWidth={2.5} />
              <span>32.13 (-1.52%)</span>
            </div>
            <span className="text-[11px] text-slate-500 block">Movement</span>
          </div>
        </div>

        {/* 3 Green Metric Pills */}
        <div className="grid grid-cols-3 gap-2 my-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-[#15171A] border border-[#262C34] rounded-xl p-2 text-center"
            >
              <span className="text-xs font-bold text-emerald-400 font-mono block">
                8180.90
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Day open
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 52 Week Range */}
      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>52 week range</span>
        </div>

        {/* Spectrum Bars */}
        <div className="flex items-center gap-1 h-3.5 mb-4">
          {rangeBars.map((color, i) => (
            <div
              key={i}
              className="flex-1 h-full rounded-sm transition-transform hover:scale-y-125"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Bottom 8 Month Return Row */}
        <div className="flex items-center justify-between pt-3 border-t border-[#242A32] text-xs">
          <div>
            <span className="block text-[10px] text-slate-400">8 Month Return</span>
            <div className="flex items-center gap-1 text-emerald-400 font-mono font-bold mt-0.5">
              <ArrowUpRight size={13} strokeWidth={2.5} />
              <span>-12.96%</span>
            </div>
          </div>

          <div className="text-right">
            <span className="block text-[10px] text-slate-400">8 Month Return</span>
            <div className="flex items-center justify-end gap-1 text-red-400 font-mono font-bold mt-0.5">
              <ArrowDownRight size={13} strokeWidth={2.5} />
              <span>-12.96%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
