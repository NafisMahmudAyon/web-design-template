import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

export default function NetSpendingCard() {
  const [showDateMenu, setShowDateMenu] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date');
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const categories = [
    { id: 'food', label: 'Food anddrink', percent: 30, amount: '$2,300', color: '#186F65', textAngle: 30 },
    { id: 'shopping', label: 'Shopping', percent: 23, amount: '$1,760', color: '#2E8B83', textAngle: 110 },
    { id: 'health', label: 'Health', percent: 18, amount: '$1,380', color: '#66B2AA', textAngle: 190 },
    { id: 'entertainment', label: 'Entertainment', percent: 17, amount: '$1,300', color: '#CBD5E1', textAngle: 255 },
    { id: 'internet', label: 'Internet and media', percent: 13, amount: '$995', color: '#E2E8F0', textAngle: 320 },
  ];

  // Calculate SVG stroke-dasharray & stroke-dashoffset for donut
  // Circle radius: 56 => circumference = 2 * PI * 56 ≈ 351.86
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  return (
    <div className="wealth-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-medium text-gray-700">Net Spending</h2>

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
                {['This Month', 'Last Month', 'Quarterly', 'Yearly'].map((opt) => (
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

          <button
            type="button"
            aria-label="More options"
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors shadow-2xs"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Donut Chart Visual */}
      <div className="my-auto py-3 flex items-center justify-center relative">
        <div className="relative w-52 h-52 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
            {categories.map((cat) => {
              const dashLength = (cat.percent / 100) * circumference;
              const spaceLength = circumference - dashLength;
              const offset = -((accumulatedPercent / 100) * circumference);
              accumulatedPercent += cat.percent;

              const isHovered = hoveredSegment === cat.id;

              return (
                <circle
                  key={cat.id}
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke={cat.color}
                  strokeWidth={isHovered ? '28' : '24'}
                  strokeDasharray={`${dashLength} ${spaceLength}`}
                  strokeDashoffset={offset}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredSegment(cat.id)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              );
            })}
          </svg>

          {/* Floating Percent Labels overlay */}
          <div className="absolute inset-0 pointer-events-none text-gray-700 font-semibold text-[11px]">
            {/* 30% label (approx top right) */}
            <span className="absolute top-[32%] right-[14%] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-gray-100">
              30%
            </span>
            {/* 23% label (approx bottom right) */}
            <span className="absolute bottom-[20%] right-[22%] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-gray-100">
              23%
            </span>
            {/* 18% label (approx bottom left) */}
            <span className="absolute bottom-[24%] left-[20%] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-gray-100">
              18%
            </span>
            {/* 17% label (approx mid left) */}
            <span className="absolute top-[40%] left-[12%] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-gray-100">
              17%
            </span>
            {/* 13% label (approx top left) */}
            <span className="absolute top-[18%] left-[26%] bg-white/90 px-1.5 py-0.5 rounded shadow-2xs border border-gray-100">
              13%
            </span>
          </div>

          {/* Donut Center Label on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {hoveredSegment ? (
              <div className="text-center animate-in fade-in zoom-in-90 duration-150">
                <span className="text-xs font-semibold text-gray-500 block truncate max-w-[90px]">
                  {categories.find((c) => c.id === hoveredSegment)?.label}
                </span>
                <span className="text-base font-extrabold text-gray-900 block mt-0.5">
                  {categories.find((c) => c.id === hoveredSegment)?.amount}
                </span>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-[11px] font-medium text-gray-400 block">Total</span>
                <span className="text-base font-bold text-gray-800 block">$7,735</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categories Legend */}
      <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onMouseEnter={() => setHoveredSegment(cat.id)}
            onMouseLeave={() => setHoveredSegment(null)}
            className="flex items-center gap-1.5 cursor-pointer group"
          >
            <span
              className="w-2.5 h-2.5 rounded-xs shrink-0 transition-transform group-hover:scale-125"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-gray-600 group-hover:text-gray-900 font-medium">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
