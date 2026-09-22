import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CASH_FLOW_BARS } from '../data/oripioFinData';

export const CashFlowAnalytics = () => {
  const [viewMode, setViewMode] = useState('Yearly');
  const [hoveredMonth, setHoveredMonth] = useState('Mar');

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-fin-card flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-xs font-semibold text-slate-500">Cash Flow</h2>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
            $342,323.44
          </div>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/70">
          <button
            onClick={() => setViewMode('Monthly')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'Monthly'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setViewMode('Yearly')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'Yearly'
                ? 'bg-emerald-800 text-white shadow-xs font-bold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Yearly</span>
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative pt-8 pb-2">
        {/* Y-axis gridlines */}
        <div className="absolute inset-x-0 top-8 bottom-8 flex flex-col justify-between pointer-events-none opacity-40">
          {['50k', '40k', '30k', '20k', '10k', '0k'].map((label, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[10px] text-slate-400 font-mono w-6 text-right shrink-0">{label}</span>
              <div className="flex-1 border-b border-dashed border-slate-200" />
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="pl-10 pr-2 h-44 flex items-end justify-between gap-3 relative z-10">
          {CASH_FLOW_BARS.map((bar) => {
            const isSelected = hoveredMonth === bar.month || (!hoveredMonth && bar.isFeatured);

            return (
              <div
                key={bar.month}
                onMouseEnter={() => setHoveredMonth(bar.month)}
                className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative"
              >
                {/* Tooltip on Active/Hovered Bar */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 z-30 p-2.5 rounded-xl bg-slate-900 text-white text-[11px] shadow-xl whitespace-nowrap pointer-events-none"
                  >
                    <div className="text-[10px] text-slate-400 mb-0.5">July 23, 2026</div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-300">Cashflow</span>
                      <span className="font-bold text-white">$33,847.00</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-red-400">
                      <span>Inflow</span>
                      <span className="font-bold">-$7,456.00</span>
                    </div>
                  </motion.div>
                )}

                {/* The Bar */}
                <div
                  style={{ height: `${bar.height}%` }}
                  className={`w-full max-w-[42px] rounded-t-xl transition-all duration-300 relative ${
                    bar.month === 'Mar'
                      ? 'bg-gradient-to-t from-emerald-800 to-emerald-600 shadow-md shadow-emerald-700/20'
                      : 'bg-emerald-100/60 group-hover:bg-emerald-200/80'
                  }`}
                >
                  {/* Highlight Dot on March */}
                  {bar.month === 'Mar' && (
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-600 border-2 border-white shadow-xs" />
                  )}
                </div>

                {/* X-axis Month Label */}
                <span className={`text-[11px] font-semibold mt-3 ${
                  bar.month === 'Mar' ? 'text-emerald-800 font-bold' : 'text-slate-400'
                }`}>
                  {bar.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
