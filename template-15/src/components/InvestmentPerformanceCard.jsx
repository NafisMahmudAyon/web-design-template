import React, { useState } from 'react';
import { SlidersHorizontal, MoreHorizontal, ArrowUpRight } from 'lucide-react';

export default function InvestmentPerformanceCard({ onOpenFilter }) {
  const [selectedAsset, setSelectedAsset] = useState('Crypto');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // 7 Data points corresponding to 2 Jan - 8 Jan
  // Y values mapped to $0k - $6k+ (range 0 to 7000)
  const dataPoints = [
    { date: '2 Jan', value: 3450, display: '$3,450.00' },
    { date: '3 Jan', value: 4120, display: '$4,120.00' },
    { date: '4 Jan', value: 3500, display: '$3,500.00' },
    { date: '5 Jan', value: 6388.13, display: '$6,388.13', isPinned: true, subtitle: 'Apl 15, 2024' },
    { date: '6 Jan', value: 4620, display: '$4,620.00' },
    { date: '7 Jan', value: 4700, display: '$4,700.00' },
    { date: '8 Jan', value: 5900, display: '$5,900.00' },
  ];

  // Additional intermediate points to match the authentic zigzag waveform in Figma
  // (x from 0 to 600, y from 0 to 180 where 0 is $7k and 180 is $0k)
  const chartCoordinates = [
    { x: 30, y: 130 },
    { x: 75, y: 120 },
    { x: 110, y: 105 },
    { x: 130, y: 128 },
    { x: 155, y: 135 },
    { x: 180, y: 125 },
    { x: 220, y: 132 },
    { x: 245, y: 115 },
    { x: 275, y: 92 },   // Peak near 5 Jan
    { x: 300, y: 105 },
    { x: 330, y: 118 },
    { x: 355, y: 122 },
    { x: 375, y: 114 },
    { x: 395, y: 118 },
    { x: 420, y: 88 },
    { x: 445, y: 105 },
    { x: 465, y: 55 },   // High peak near 8 Jan
    { x: 485, y: 72 },
  ];

  // SVG dimensions
  const svgWidth = 520;
  const svgHeight = 180;

  // Build SVG path string from coordinates
  const pathD = chartCoordinates.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
  }, '');

  // Pinned point at (275, 92)
  const pinnedPt = chartCoordinates[8];

  return (
    <div className="wealth-card p-6 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-base font-medium text-gray-700">Investment Performance</h2>

        <div className="flex items-center gap-3">
          {/* Asset Type Toggle */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-xl text-xs font-semibold text-gray-700">
            <span className="w-2 h-2 rounded-full bg-[#186F65]" />
            <span>Crypto</span>
          </div>

          {/* Action buttons */}
          <button
            type="button"
            onClick={onOpenFilter}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 transition-colors shadow-2xs"
          >
            <span>Filter</span>
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
          </button>

          <button
            type="button"
            aria-label="More options"
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-xl transition-colors shadow-2xs"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Value & Trend */}
      <div className="mt-3 flex items-baseline gap-3">
        <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">$2,450</h3>
        <div className="flex items-center text-xs font-semibold text-emerald-600">
          <span>↑ 12%</span>
          <span className="text-gray-400 font-normal ml-1">VS Last Week</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-6 relative">
        <div className="flex">
          {/* Y Axis Labels */}
          <div className="w-9 shrink-0 flex flex-col justify-between text-[11px] font-medium text-gray-400 h-44 pb-6 select-none">
            <span>$6K</span>
            <span>$4K</span>
            <span>$2K</span>
            <span>$0K</span>
          </div>

          {/* Main Chart SVG & Plot Area */}
          <div className="relative flex-1 h-44">
            {/* Horizontal Gridlines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
              <div className="w-full border-b border-gray-100" />
              <div className="w-full border-b border-gray-100" />
              <div className="w-full border-b border-gray-100" />
              <div className="w-full border-b border-gray-100" />
            </div>

            {/* SVG Wave */}
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              preserveAspectRatio="none"
            >
              {/* Subtle Area Gradient under line */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#186F65" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#186F65" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path
                d={`${pathD} L ${chartCoordinates[chartCoordinates.length - 1].x},180 L ${chartCoordinates[0].x},180 Z`}
                fill="url(#chartGradient)"
              />

              {/* Curve Stroke */}
              <path
                d={pathD}
                fill="none"
                stroke="#186F65"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Pinned Dot Marker */}
              <circle
                cx={pinnedPt.x}
                cy={pinnedPt.y}
                r="4.5"
                fill="#186F65"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="shadow-md"
              />
            </svg>

            {/* Pinned Tooltip Overlay */}
            <div
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-full mb-2.5 z-10"
              style={{
                left: `${(pinnedPt.x / svgWidth) * 100}%`,
                top: `${(pinnedPt.y / svgHeight) * 100}%`,
              }}
            >
              <div className="bg-white border border-gray-200 px-3 py-1.5 rounded-xl shadow-lg flex flex-col items-center">
                <span className="text-xs font-bold text-gray-900 tracking-tight">$6,388.13</span>
                <span className="text-[10px] text-gray-400 font-medium">Apl 15, 2024</span>
              </div>
              {/* Tooltip triangle tail */}
              <div className="w-2.5 h-2.5 bg-white border-b border-r border-gray-200 transform rotate-45 mx-auto -mt-1.5" />
            </div>
          </div>
        </div>

        {/* X Axis Date Labels */}
        <div className="flex justify-between pl-10 pr-2 pt-2 text-[11px] font-medium text-gray-400 select-none">
          {['2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
