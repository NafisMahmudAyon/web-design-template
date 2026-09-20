import React, { useState } from 'react';
import { SlidersHorizontal, MoreHorizontal, ArrowRight } from 'lucide-react';

export default function CashFlowCard({ onOpenFilter }) {
  const [hoveredSource, setHoveredSource] = useState(null);
  const [hoveredSink, setHoveredSink] = useState(null);

  const sources = [
    { id: 'freelance', label: 'Freelance', amount: '$2,300', y: 15, height: 18, color: '#38A39A' },
    { id: 'salary', label: 'Salary', amount: '$8,500', y: 45, height: 26, color: '#186F65' },
    { id: 'business', label: 'Business', amount: '$1,235', y: 80, height: 16, color: '#64748B' },
  ];

  const sinks = [
    { id: 'food', label: 'Food', amount: '$2,300', y: 12, height: 14, color: '#186F65' },
    { id: 'savings', label: 'Savings', amount: '$3,500', y: 32, height: 18, color: '#38A39A' },
    { id: 'rent', label: 'Rent', amount: '$5,000', y: 55, height: 22, color: '#186F65' },
    { id: 'transport', label: 'Transport', amount: '$500', y: 78, height: 10, color: '#94A3B8' },
    { id: 'entertainment', label: 'Entertainment', amount: '$735', y: 92, height: 12, color: '#64748B' },
  ];

  // Ribbon paths definition (normalized SVG coordinates 0-1000 width, 0-300 height)
  // Each connects a source to a sink
  const ribbons = [
    { id: 'f-food', source: 'freelance', sink: 'food', y1Top: 25, y1Bot: 55, y2Top: 20, y2Bot: 45, color: '#38A39A', opacity: 0.18 },
    { id: 's-savings', source: 'salary', sink: 'savings', y1Top: 110, y1Bot: 145, y2Top: 80, y2Bot: 120, color: '#186F65', opacity: 0.14 },
    { id: 's-rent', source: 'salary', sink: 'rent', y1Top: 145, y1Bot: 195, y2Top: 145, y2Bot: 195, color: '#186F65', opacity: 0.22 },
    { id: 's-food', source: 'salary', sink: 'food', y1Top: 95, y1Bot: 110, y2Top: 45, y2Bot: 60, color: '#186F65', opacity: 0.12 },
    { id: 'b-transport', source: 'business', sink: 'transport', y1Top: 225, y1Bot: 245, y2Top: 215, y2Bot: 235, color: '#64748B', opacity: 0.15 },
    { id: 'b-entertainment', source: 'business', sink: 'entertainment', y1Top: 245, y1Bot: 275, y2Top: 250, y2Bot: 280, color: '#64748B', opacity: 0.18 },
  ];

  return (
    <div className="wealth-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-base font-medium text-gray-700">Cash Flow Visualization</h2>

        <div className="flex items-center gap-4">
          {/* Legend */}
          <div className="hidden sm:flex items-center gap-3.5 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#186F65]" />
              Salary
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38A39A]" />
              Freelance
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
              Sevings
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
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
      </div>

      {/* Main Flow Stream Graphic */}
      <div className="mt-6 relative h-72 sm:h-80 w-full overflow-hidden flex items-center justify-between">
        {/* Left Side: Income Source Pills */}
        <div className="z-10 flex flex-col justify-around h-full py-2 w-32 shrink-0">
          {sources.map((src) => (
            <div
              key={src.id}
              onMouseEnter={() => setHoveredSource(src.id)}
              onMouseLeave={() => setHoveredSource(null)}
              className={`px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer border ${
                hoveredSource === src.id
                  ? 'bg-gray-100 border-gray-300 shadow-sm scale-102'
                  : 'bg-[#F1F3F5] border-transparent hover:bg-gray-100'
              }`}
            >
              <div className="text-xs font-medium text-gray-600">{src.label}</div>
              <div className="text-xs font-bold text-gray-900 mt-0.5">{src.amount}</div>
            </div>
          ))}
        </div>

        {/* Center: Interactive SVG Flow Ribbons */}
        <div className="absolute inset-0 px-28 sm:px-32 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flowTealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#186F65" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#38A39A" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#186F65" stopOpacity="0.12" />
              </linearGradient>
              <linearGradient id="flowMintGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38A39A" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#186F65" stopOpacity="0.12" />
              </linearGradient>
              <linearGradient id="flowGrayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#64748B" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            {ribbons.map((ribbon) => {
              const isHighlight =
                hoveredSource === ribbon.source || hoveredSink === ribbon.sink;
              const isDimmed =
                (hoveredSource && hoveredSource !== ribbon.source) ||
                (hoveredSink && hoveredSink !== ribbon.sink);

              // Smooth cubic bezier ribbon
              const d = `
                M 0,${ribbon.y1Top}
                C 300,${ribbon.y1Top} 300,${ribbon.y2Top} 600,${ribbon.y2Top}
                L 600,${ribbon.y2Bot}
                C 300,${ribbon.y2Bot} 300,${ribbon.y1Bot} 0,${ribbon.y1Bot}
                Z
              `;

              return (
                <path
                  key={ribbon.id}
                  d={d}
                  fill={`url(#flowTealGrad)`}
                  className="transition-all duration-300"
                  style={{
                    opacity: isHighlight ? 0.65 : isDimmed ? 0.05 : ribbon.opacity,
                  }}
                />
              );
            })}
          </svg>
        </div>

        {/* Right Side: Expense Categories Sinks */}
        <div className="z-10 flex flex-col justify-between h-full py-1 text-right w-32 shrink-0">
          {sinks.map((sink) => (
            <div
              key={sink.id}
              onMouseEnter={() => setHoveredSink(sink.id)}
              onMouseLeave={() => setHoveredSink(null)}
              className={`px-2.5 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
                hoveredSink === sink.id ? 'bg-gray-100 scale-102' : 'hover:bg-gray-50'
              }`}
            >
              <div className="text-xs font-semibold text-gray-700">{sink.label}</div>
              <div className="text-[11px] font-medium text-gray-400">{sink.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
