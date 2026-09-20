import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

export default function NetWorthCard() {
  const [selectedDateRange, setSelectedDateRange] = useState('This Month');
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [hoveredExpenseIndex, setHoveredExpenseIndex] = useState(null);
  const [hoveredIncomeIndex, setHoveredIncomeIndex] = useState(null);

  const dateOptions = ['Today', 'This Week', 'This Month', 'Last Quarter', 'Year 2024'];

  // 7-day data points for expenses micro-slider chart
  const expenseBars = [
    { day: 'Mon', value: '$120.50', pos: 35 },
    { day: 'Tue', value: '$240.00', pos: 68 },
    { day: 'Wed', value: '$180.20', pos: 45 },
    { day: 'Thu', value: '$310.80', pos: 85 },
    { day: 'Fri', value: '$145.00', pos: 40 },
    { day: 'Sat', value: '$198.45', pos: 55 },
    { day: 'Sun', value: '$50.00', pos: 25 },
  ];

  // 7-day data points for income capsule bars
  const incomeBars = [
    { day: 'Mon', value: '$650.00', height: 42, top: 30 },
    { day: 'Tue', value: '$820.00', height: 58, top: 22 },
    { day: 'Wed', value: '$450.00', height: 35, top: 35 },
    { day: 'Thu', value: '$1,200.00', height: 75, top: 12 },
    { day: 'Fri', value: '$580.00', height: 48, top: 28 },
    { day: 'Sat', value: '$380.00', height: 32, top: 38 },
    { day: 'Sun', value: '$498.00', height: 40, top: 32 },
  ];

  return (
    <div className="wealth-card p-6 relative">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium text-gray-700">Net Worth</h2>
        <div className="flex items-center gap-2">
          {/* Date Selector Pill */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDateMenu(!showDateMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 transition-colors shadow-2xs"
            >
              <span>Date</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
            {showDateMenu && (
              <div className="absolute right-0 mt-1.5 w-36 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20">
                {dateOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedDateRange(opt);
                      setShowDateMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs ${
                      selectedDateRange === opt ? 'font-semibold text-[#186F65] bg-emerald-50/60' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* More Options Button */}
          <div className="relative">
            <button
              type="button"
              aria-label="More options"
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors shadow-2xs"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
            {showMoreMenu && (
              <div className="absolute right-0 mt-1.5 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20">
                <button
                  type="button"
                  onClick={() => setShowMoreMenu(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                >
                  Export Statement
                </button>
                <button
                  type="button"
                  onClick={() => setShowMoreMenu(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                >
                  Sync Bank Accounts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Net Worth Value */}
      <div className="mt-3">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          $342,847
        </h3>
      </div>

      {/* Sub Cards: Expences & Incomes */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Expences Sub Card */}
        <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">Expences</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
              +4,8%
            </span>
          </div>
          <div className="mt-1">
            <span className="text-lg font-bold text-gray-900 tracking-tight">$1254,95</span>
          </div>

          {/* Micro Sliders Visual */}
          <div className="mt-5 h-16 flex items-center justify-between px-1">
            {expenseBars.map((bar, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center h-full w-4 group cursor-pointer"
                onMouseEnter={() => setHoveredExpenseIndex(i)}
                onMouseLeave={() => setHoveredExpenseIndex(null)}
              >
                {/* Track Line */}
                <div className="w-1 h-full bg-gray-200/80 rounded-full relative overflow-hidden" />
                
                {/* Pill Dot Indicator */}
                <div
                  className="absolute w-3 h-5 rounded-full bg-[#186F65] shadow-xs transition-all duration-200 group-hover:scale-110"
                  style={{ bottom: `${bar.pos}%`, transform: 'translateY(50%)' }}
                />

                {/* Tooltip on Hover */}
                {hoveredExpenseIndex === i && (
                  <div className="absolute -top-7 px-1.5 py-0.5 bg-gray-900 text-white text-[10px] font-medium rounded shadow-md whitespace-nowrap z-10 pointer-events-none">
                    {bar.day}: {bar.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Incomes Sub Card */}
        <div className="p-4 rounded-2xl bg-[#FAFBFC] border border-gray-100 hover:border-gray-200 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-400">Incomes</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
              +3,2%
            </span>
          </div>
          <div className="mt-1">
            <span className="text-lg font-bold text-gray-900 tracking-tight">$4578,00</span>
          </div>

          {/* Micro Pill Capsule Bars Visual */}
          <div className="mt-5 h-16 flex items-center justify-between px-1">
            {incomeBars.map((bar, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center h-full w-4 group cursor-pointer"
                onMouseEnter={() => setHoveredIncomeIndex(i)}
                onMouseLeave={() => setHoveredIncomeIndex(null)}
              >
                {/* Background Guide Line */}
                <div className="w-1 h-full bg-gray-200/50 rounded-full" />

                {/* Capsule Shape */}
                <div
                  className="absolute w-2.5 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 group-hover:from-[#186F65] group-hover:to-[#186F65] transition-all duration-200"
                  style={{ height: `${bar.height}%`, top: `${bar.top}%` }}
                />

                {/* Tooltip on Hover */}
                {hoveredIncomeIndex === i && (
                  <div className="absolute -top-7 px-1.5 py-0.5 bg-gray-900 text-white text-[10px] font-medium rounded shadow-md whitespace-nowrap z-10 pointer-events-none">
                    {bar.day}: {bar.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
