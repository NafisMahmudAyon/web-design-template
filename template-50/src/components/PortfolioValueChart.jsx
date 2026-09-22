import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DAYS } from '../data/raxonData';

export const PortfolioValueChart = () => {
  const [activeFrame, setActiveFrame] = useState('7D');
  const [hoveredDay, setHoveredDay] = useState('Thursday');

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card flex flex-col justify-between">
      {/* Top Value & Timeframe Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Portfolio Value</h2>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              $83,727.90
            </span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
              <span>▲ +3.1%</span>
              <span className="text-[10px] text-slate-400 font-normal">vs Last 24 hours</span>
            </span>
          </div>
        </div>

        {/* Timeframe Controls */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200/60">
          {['12H', '2H', '1D', '7D', '1M', '1Y'].map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveFrame(tf)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                activeFrame === tf
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Chart Canvas */}
      <div className="relative pt-12 pb-2">
        {/* Subtle SVG Waveform */}
        <svg viewBox="0 0 700 200" className="w-full h-44 overflow-visible">
          {/* Subtle Gridlines */}
          <line x1="0" y1="50" x2="700" y2="50" stroke="#F1F5F9" strokeDasharray="4 4" />
          <line x1="0" y1="100" x2="700" y2="100" stroke="#F1F5F9" strokeDasharray="4 4" />
          <line x1="0" y1="150" x2="700" y2="150" stroke="#F1F5F9" strokeDasharray="4 4" />

          {/* Thursday Striped Highlight Zone */}
          <rect x="360" y="20" width="70" height="170" fill="url(#hatch)" opacity="0.45" />
          
          <defs>
            <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#FA5D29" strokeWidth="1.5" />
            </pattern>
          </defs>

          {/* Glowing Waveform Path */}
          <path
            d="M 20 140 Q 70 160, 120 120 T 220 100 T 320 130 T 400 65 T 500 110 T 600 80 T 680 120"
            fill="none"
            stroke="#FA5D29"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Active Dot on Thursday */}
          <circle cx="400" cy="65" r="5" fill="#FA5D29" stroke="#FFFFFF" strokeWidth="2.5" />
        </svg>

        {/* Floating Tooltip Card over Thursday */}
        {hoveredDay === 'Thursday' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-1/4 sm:right-1/3 p-3 rounded-2xl bg-slate-900 text-white text-xs shadow-xl z-20 pointer-events-none"
          >
            <div className="text-[10px] text-slate-400">June 2026</div>
            <div className="text-sm font-black my-0.5">44,008 <span className="text-[11px] font-medium text-slate-400">BTC</span></div>
            <div className="flex items-center gap-2 pt-1 border-t border-slate-800 text-[10px] font-bold">
              <span className="text-raxon-orange">• +23.48%</span>
              <span className="text-emerald-400">• 23.48%</span>
            </div>
          </motion.div>
        )}

        {/* Day labels */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100">
          {PORTFOLIO_DAYS.map((d) => (
            <span
              key={d.day}
              onMouseEnter={() => setHoveredDay(d.day)}
              className={`cursor-pointer transition-colors ${
                d.day === 'Thursday' ? 'text-raxon-orange font-bold' : 'hover:text-slate-700'
              }`}
            >
              {d.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
