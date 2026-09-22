import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PERFORMANCE_DATA } from '../data/boltshiftData';

export const PerformanceOverviewChart = () => {
  const [selectedWeek, setSelectedWeek] = useState('This Week');
  const [activeMonth, setActiveMonth] = useState('Aug');

  const yLabels = ['40k', '30k', '20k', '10k', '5k', '0k'];

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-boltshift flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-base font-bold text-slate-900">
          Performance Overview
        </h2>

        <div className="relative">
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200/60 border border-slate-200/60 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <span>{selectedWeek}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Chart Canvas Area */}
      <div className="relative pt-6 pb-2">
        {/* Horizontal Dashed Gridlines */}
        <div className="absolute inset-x-0 top-6 bottom-10 flex flex-col justify-between pointer-events-none">
          {yLabels.map((label, idx) => (
            <div key={label} className="w-full flex items-center">
              <span className="w-8 text-[11px] font-medium text-slate-400 select-none">
                {label}
              </span>
              <div className="flex-1 border-b border-dashed border-slate-100/90 ml-2" />
            </div>
          ))}
        </div>

        {/* Bar Columns Container */}
        <div className="relative pl-10 pr-2 h-64 flex items-end justify-between gap-3 sm:gap-6">
          {PERFORMANCE_DATA.map((item) => {
            const isHovered = activeMonth === item.month;

            return (
              <div
                key={item.month}
                onMouseEnter={() => setActiveMonth(item.month)}
                className="flex-1 h-full flex flex-col items-center justify-end group cursor-pointer relative"
              >
                {/* Floating Tooltip if this month is active */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-14 sm:-top-16 z-30 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 text-xs min-w-[150px] pointer-events-none"
                  >
                    <div className="font-bold text-slate-800 mb-2">
                      {item.month === 'Aug' ? 'August 2026' : `${item.month} 2026`}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-3 text-slate-500 text-[11px]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-300" />
                          <span>Total Sales</span>
                        </span>
                        <span className="font-bold text-slate-900">{item.sales}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3 text-slate-500 text-[11px]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#5E43F3]" />
                          <span>Total Revenue</span>
                        </span>
                        <span className="font-bold text-slate-900">{item.revenue}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Bar Stack Container */}
                <div className="w-full max-w-[48px] h-full flex items-end justify-center relative">
                  {/* Background Soft Pill (Capacity / Target) */}
                  <div
                    className="w-full rounded-2xl bg-slate-100/90 transition-colors"
                    style={{ height: `${item.bgHeight}%` }}
                  />

                  {/* Foreground Actual Value Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${item.height}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`absolute bottom-0 w-full rounded-2xl transition-all ${
                      isHovered
                        ? 'bg-gradient-to-t from-[#5E43F3] to-[#816BF6] shadow-md shadow-[#5E43F3]/25'
                        : 'bg-slate-200/90 group-hover:bg-slate-300'
                    }`}
                  >
                    {/* Top Dot if active */}
                    {isHovered && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#5E43F3] ring-4 ring-white absolute -top-1.5 left-1/2 -translate-x-1/2" />
                    )}
                  </motion.div>
                </div>

                {/* X-axis Label */}
                <span className={`text-xs font-semibold mt-3 transition-colors ${
                  isHovered ? 'text-[#5E43F3] font-bold' : 'text-slate-400'
                }`}>
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
