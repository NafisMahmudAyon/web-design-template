import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { SALARY_DATA } from '../data/drankData';
import { motion } from 'framer-motion';

export default function SalaryChart() {
  const [activeTimeframe, setActiveTimeframe] = useState('All');
  const [hoveredMonth, setHoveredMonth] = useState('Aug'); // Default active highlight in mockup

  const timeframes = ['7D', '1D', '1M', '1Y', 'All'];

  const activeDataPoint =
    SALARY_DATA.find((d) => d.month === hoveredMonth) ||
    SALARY_DATA.find((d) => d.isHighlight) ||
    SALARY_DATA[7];

  return (
    <div className="bg-[#12131a] rounded-[32px] p-5 border border-[#1f212c] shadow-lg flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        {/* Left: Title, Annual Total & Growth */}
        <div>
          <h3 className="text-sm font-bold text-white tracking-wide">Salary</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-[#717489]">Jan-Dec • $45 989</span>
            <span className="text-xs font-semibold text-[#7ae2a4]">+12,00%</span>
          </div>
        </div>

        {/* Right: Timeframe Switcher & More Button */}
        <div className="flex items-center gap-1.5 bg-[#0e0f15] p-1 rounded-xl border border-[#1d1f2b]">
          {timeframes.map((tf) => {
            const isActive = activeTimeframe === tf;
            return (
              <button
                key={tf}
                type="button"
                onClick={() => setActiveTimeframe(tf)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1e202d] text-white shadow-sm'
                    : 'text-[#65687d] hover:text-white'
                }`}
              >
                {tf}
              </button>
            );
          })}
          <button
            type="button"
            aria-label="More chart options"
            className="w-6 h-6 rounded-lg text-[#65687d] hover:text-white flex items-center justify-center transition-colors"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative h-44 flex items-end justify-between gap-2 px-1 pt-12 pb-2">
        {/* Floating Tooltip Indicator for Active / Hovered Month */}
        {activeDataPoint && (
          <div
            className="absolute top-0 pointer-events-none transition-all duration-300 z-10 flex flex-col items-center"
            style={{
              left: `${
                (SALARY_DATA.findIndex((d) => d.month === activeDataPoint.month) /
                  (SALARY_DATA.length - 1)) *
                  90 +
                3
              }%`,
              transform: 'translateX(-50%)',
            }}
          >
            {/* Tooltip Badge */}
            <div className="bg-[#181a24] border border-[#2c2f42] rounded-xl px-2.5 py-1 text-center shadow-xl">
              <p className="text-[10px] font-medium text-gray-400">
                {activeDataPoint.month}
              </p>
              <p className="text-xs font-bold text-white tracking-tight">
                ${activeDataPoint.amount}
              </p>
            </div>
            {/* Dashed connector line */}
            <div className="w-[1px] h-6 border-l border-dashed border-[#7ae2a4]/80 mt-1"></div>
          </div>
        )}

        {/* Vertical Bars */}
        {SALARY_DATA.map((item) => {
          const isSelected = item.month === hoveredMonth;
          const isAug = item.month === 'Aug';

          return (
            <div
              key={item.month}
              className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              onMouseEnter={() => setHoveredMonth(item.month)}
            >
              {/* Bar */}
              <div className="w-full flex justify-center items-end h-28">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${item.height}%` }}
                  transition={{ duration: 0.4 }}
                  className={`w-full max-w-[28px] rounded-lg transition-all duration-200 ${
                    isSelected || isAug
                      ? 'bg-[#7ae2a4] shadow-md shadow-[#7ae2a4]/30'
                      : 'bg-[#1b1d27] group-hover:bg-[#252837]'
                  }`}
                />
              </div>

              {/* Month Label */}
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isSelected || isAug
                    ? 'text-white font-bold'
                    : 'text-[#62657a] group-hover:text-gray-300'
                }`}
              >
                {item.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
