import React, { useState } from 'react';
import { portfolioDays } from '../data/mockData';

export default function PortfolioChartCard() {
  const [selectedRange, setSelectedRange] = useState('7D');
  const [hoveredIndex, setHoveredIndex] = useState(4); // Default to Thursday (index 4)

  const ranges = ['12H', '2H', '1D', '7D', '1M', '1Y'];

  // Calculate SVG curve path points
  // Container dimensions: width = 540, height = 180
  const svgWidth = 540;
  const svgHeight = 160;
  const paddingX = 40;
  const paddingY = 20;

  const minVal = Math.min(...portfolioDays.map((d) => d.value));
  const maxVal = Math.max(...portfolioDays.map((d) => d.value));

  const points = portfolioDays.map((d, index) => {
    const x = paddingX + (index * (svgWidth - 2 * paddingX)) / (portfolioDays.length - 1);
    const y = svgHeight - paddingY - ((d.value - minVal) / (maxVal - minVal || 1)) * (svgHeight - 2 * paddingY);
    return { x, y, ...d, index };
  });

  // Construct smooth SVG cubic bezier path string
  const pathD = points.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x},${pt.y}`;
    const prev = arr[i - 1];
    const cx1 = prev.x + (pt.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (pt.x - prev.x) / 2;
    const cy2 = pt.y;
    return `${acc} C ${cx1},${cy1} ${cx2},${cy2} ${pt.x},${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${svgHeight} L ${points[0].x},${svgHeight} Z`;

  const activePoint = points[hoveredIndex] || points[4];

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[360px] relative overflow-hidden">
      
      {/* Top Bar: Title, Value & Time Range Selectors */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-slate-400">Portfolio Value</span>
          <div className="flex items-baseline gap-2.5 mt-0.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              ${activePoint.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h2>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              ▲ +3.1% <span className="text-slate-400 font-normal text-[11px] hidden sm:inline">vs Last 24 hours</span>
            </span>
          </div>
        </div>

        {/* Range Buttons */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-bold space-x-1">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRange(r)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                selectedRange === r
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Chart Canvas Area */}
      <div className="relative flex-1 mt-4">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible">
          <defs>
            {/* Area Fill Gradient */}
            <linearGradient id="coralArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF5B37" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FF5B37" stopOpacity="0.0" />
            </linearGradient>

            {/* Shaded Column Highlight Pattern matching Dribbble Mockup */}
            <pattern id="stripePattern" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#FF5B37" strokeWidth="1.5" strokeOpacity="0.25" />
            </pattern>
          </defs>

          {/* Grid lines */}
          {[0.2, 0.5, 0.8].map((ratio, i) => (
            <line
              key={i}
              x1="20"
              y1={svgHeight * ratio}
              x2={svgWidth - 20}
              y2={svgHeight * ratio}
              stroke="currentColor"
              className="text-slate-100 dark:text-slate-700/50"
              strokeDasharray="4 4"
            />
          ))}

          {/* Gradient Area under curve */}
          <path d={areaD} fill="url(#coralArea)" />

          {/* Line Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#FF5B37"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Vertical Shaded Column Highlight for Active Day */}
          {activePoint && (
            <g>
              {/* Shaded Striped Column */}
              <rect
                x={activePoint.x - 22}
                y={0}
                width={44}
                height={svgHeight}
                fill="url(#stripePattern)"
                rx="4"
              />

              {/* Vertical Dashed Guideline */}
              <line
                x1={activePoint.x}
                y1={0}
                x2={activePoint.x}
                y2={svgHeight}
                stroke="#FF5B37"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />

              {/* Crosshair Node Ring */}
              <circle
                cx={activePoint.x}
                cy={activePoint.y}
                r="6"
                fill="#FF5B37"
                stroke="#FFFFFF"
                strokeWidth="3"
                className="shadow-md"
              />
            </g>
          )}

          {/* Invisible Hover Rects over each point for touch/mouse target */}
          {points.map((pt) => (
            <rect
              key={pt.day}
              x={pt.x - (svgWidth / points.length) / 2}
              y={0}
              width={svgWidth / points.length}
              height={svgHeight}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(pt.index)}
            />
          ))}
        </svg>

        {/* Floating Tooltip Box matching mockup exact design */}
        {activePoint && (
          <div
            className="absolute top-2 z-20 bg-slate-900 text-white rounded-xl px-3.5 py-2.5 shadow-xl border border-slate-700/80 pointer-events-none transition-all duration-200 text-xs w-44"
            style={{
              left: `${Math.min(Math.max((activePoint.x / svgWidth) * 100, 20), 80)}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1 font-semibold">
              <span>June 2026</span>
            </div>
            <div className="font-extrabold text-sm text-white tracking-tight flex items-baseline justify-between">
              <span>{activePoint.btc}</span>
              <span className="text-[10px] text-slate-300 font-semibold">BTC</span>
            </div>
            <div className="flex items-center gap-2 mt-1 pt-1 border-t border-slate-800 text-[10px] font-bold">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> +23.48%
              </span>
              <span className="text-amber-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> 23.48%
              </span>
            </div>
          </div>
        )}
      </div>

      {/* X-Axis Day Labels */}
      <div className="flex justify-between items-center px-4 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs font-semibold">
        {portfolioDays.map((d, index) => {
          const isActive = index === hoveredIndex;
          return (
            <button
              key={d.day}
              onClick={() => setHoveredIndex(index)}
              className={`transition-colors py-1 ${
                isActive
                  ? 'text-[#FF5B37] font-extrabold scale-105'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {d.day}
            </button>
          );
        })}
      </div>

    </div>
  );
}
