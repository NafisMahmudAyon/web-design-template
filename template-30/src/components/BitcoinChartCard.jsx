import React, { useState } from 'react';
import { BarChart2, TrendingUp } from 'lucide-react';
import { btcChartDays } from '../data/mockData';

export default function BitcoinChartCard() {
  const [selectedRange, setSelectedRange] = useState('7D');
  const [chartMode, setChartMode] = useState('line'); // 'line' or 'bar'
  const [hoveredIndex, setHoveredIndex] = useState(4); // Default Thursday (index 4)

  const ranges = ['1D', '7D', '1M', '1Y'];

  const svgWidth = 600;
  const svgHeight = 180;
  const paddingX = 40;
  const paddingY = 20;

  const minVal = Math.min(...btcChartDays.map((d) => d.value));
  const maxVal = Math.max(...btcChartDays.map((d) => d.value));

  const points = btcChartDays.map((d, index) => {
    const x = paddingX + (index * (svgWidth - 2 * paddingX)) / (btcChartDays.length - 1);
    const y = svgHeight - paddingY - ((d.value - minVal) / (maxVal - minVal || 1)) * (svgHeight - 2 * paddingY);
    return { x, y, ...d, index };
  });

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
    <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[390px] relative overflow-hidden">
      
      {/* Top Header: Coin Name, Price & Range Selectors */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        
        {/* Left: Coin Badge & Price */}
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F7931A] text-white flex items-center justify-center font-black text-xs shadow-sm">
              ₿
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Bitcoin <span className="text-slate-400 font-semibold text-xs">(BTC)</span>
            </h3>
          </div>

          <div className="flex items-baseline gap-2.5 mt-1.5">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              ${activePoint ? (activePoint.value * 1.387).toLocaleString('en-US', { minimumFractionDigits: 2 }) : '67,420.15'}
            </h2>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              ▲ +3.1% <span className="text-slate-400 font-normal text-[11px] hidden sm:inline">+$7,650.32 this year</span>
            </span>
          </div>
        </div>

        {/* Right Controls: Chart Mode Icons & Range Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Chart Mode Icons */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-slate-500">
            <button
              onClick={() => setChartMode('bar')}
              className={`p-1.5 rounded-lg transition-colors ${chartMode === 'bar' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : ''}`}
            >
              <BarChart2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setChartMode('line')}
              className={`p-1.5 rounded-lg transition-colors ${chartMode === 'line' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm' : ''}`}
            >
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>

          {/* Time Range Buttons */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-bold space-x-1">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRange(r)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedRange === r
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="relative flex-1 mt-4">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="rynoxArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E65D24" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E65D24" stopOpacity="0.0" />
            </linearGradient>

            {/* Striped pattern for column highlight matching mockup */}
            <pattern id="orangeStripes" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#E65D24" strokeWidth="1.5" strokeOpacity="0.3" />
            </pattern>
          </defs>

          {/* Subtle Gridlines */}
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

          {/* Area Fill */}
          <path d={areaD} fill="url(#rynoxArea)" />

          {/* Line Path */}
          <path
            d={pathD}
            fill="none"
            stroke="#E65D24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Thursday / Active Point Column Highlight */}
          {activePoint && (
            <g>
              {/* Striped Column */}
              <rect
                x={activePoint.x - 24}
                y={0}
                width={48}
                height={svgHeight}
                fill="url(#orangeStripes)"
                rx="6"
              />

              {/* Vertical Dashed Line */}
              <line
                x1={activePoint.x}
                y1={0}
                x2={activePoint.x}
                y2={svgHeight}
                stroke="#E65D24"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />

              {/* Crosshair Point */}
              <circle
                cx={activePoint.x}
                cy={activePoint.y}
                r="6"
                fill="#E65D24"
                stroke="#FFFFFF"
                strokeWidth="3"
                className="shadow-lg"
              />
            </g>
          )}

          {/* Mouse Touch Targets */}
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

        {/* Floating Tooltip Box matching mockup */}
        {activePoint && (
          <div
            className="absolute top-2 z-20 bg-white dark:bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-200 dark:border-slate-700 text-xs w-48 transition-all duration-200 pointer-events-none"
            style={{
              left: `${Math.min(Math.max((activePoint.x / svgWidth) * 100, 25), 75)}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <p className="text-[10px] font-bold text-slate-400 mb-1.5">{activePoint.date}</p>
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Earnings:
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  ${activePoint.earnings.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                <span className="text-slate-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E65D24]" /> New Price:
                </span>
                <span className="font-extrabold text-slate-900 dark:text-white">
                  ${activePoint.value.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* X-Axis Day Labels */}
      <div className="flex justify-between items-center px-4 pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs font-semibold">
        {btcChartDays.map((d, index) => {
          const isActive = index === hoveredIndex;
          return (
            <button
              key={d.day}
              onClick={() => setHoveredIndex(index)}
              className={`transition-colors py-1 ${
                isActive
                  ? 'text-[#E65D24] font-black scale-105'
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
