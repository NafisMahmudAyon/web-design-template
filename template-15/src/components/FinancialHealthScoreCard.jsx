import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal, Sparkles } from 'lucide-react';

export default function FinancialHealthScoreCard() {
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date');

  const totalTicks = 40;
  const activePercentage = 72;
  const activeCount = Math.round((totalTicks * activePercentage) / 100);

  // Generate ticks around circular gauge
  // Starting from bottom-left (-130 deg) around clockwise to bottom-right
  const ticks = Array.from({ length: totalTicks }, (_, index) => {
    // Distribute across 360 degrees or ~320 degrees
    // In design: full ring of radial ticks
    const angle = (index / totalTicks) * 360 - 90; // Start at top
    // For visual rotation matching design: active starts around 10 o'clock clockwise
    const isActive = index < activeCount;
    return {
      index,
      angle,
      isActive,
    };
  });

  return (
    <div className="wealth-card p-6 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-medium text-gray-700">AI Financial Health Score</h2>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-50 text-[10px] font-semibold text-[#186F65]">
            <Sparkles className="w-3 h-3" />
            AI Optimized
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Date Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDateMenu(!showDateMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 transition-colors shadow-2xs"
            >
              <span>{selectedDate}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>
            {showDateMenu && (
              <div className="absolute right-0 mt-1.5 w-32 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20">
                {['Today', 'This Week', 'This Month', 'All Time'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedDate(opt);
                      setShowDateMenu(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* More Options */}
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
                  Recalculate AI Score
                </button>
                <button
                  type="button"
                  onClick={() => setShowMoreMenu(false)}
                  className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
                >
                  Download Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Body: Gauge on Left, Goals on Right */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Radial Segmented Gauge Chart */}
        <div className="md:col-span-5 flex justify-center py-2">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* SVG Segmented Tick Ring */}
            <svg className="w-full h-full transform -rotate-45" viewBox="0 0 160 160">
              {ticks.map((t) => {
                const center = 80;
                const rInner = 60;
                const rOuter = 74;
                const rad = (t.angle * Math.PI) / 180;
                const x1 = center + rInner * Math.cos(rad);
                const y1 = center + rInner * Math.sin(rad);
                const x2 = center + rOuter * Math.cos(rad);
                const y2 = center + rOuter * Math.sin(rad);

                return (
                  <line
                    key={t.index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={t.isActive ? '#186F65' : '#E5E7EB'}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="transition-colors duration-300"
                  />
                );
              })}
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center select-none">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight">72%</span>
              <span className="text-xs font-medium text-gray-400 mt-0.5">Saved</span>
            </div>
          </div>
        </div>

        {/* AI Insight & Checkpoints */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-800 leading-snug">
            You're on track to reach your retirement goal 3 years early
          </h3>

          <div className="mt-4 space-y-2.5">
            {[
              'Saved money for this month',
              'Saved Money for the Retirement',
              'Good Manage of Salary',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 group cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#186F65] shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
