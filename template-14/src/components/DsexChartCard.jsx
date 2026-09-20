import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function DsexChartCard() {
  const [activeTab, setActiveTab] = useState('DSEX');

  return (
    <div className="bg-[#191C21] border border-[#262C34] rounded-3xl p-5 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Top Selector Tabs */}
      <div className="flex items-center gap-2 mb-3">
        {['DSEX', 'DSES', 'DS30'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              activeTab === tab
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-[#141619] text-slate-400 hover:text-white border border-[#262B32]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Canvas */}
      <div className="relative h-36 w-full flex my-1">
        {/* Y-axis Labels */}
        <div className="flex flex-col justify-between text-[10px] font-mono text-slate-500 pr-2 pb-5">
          <span>430</span>
          <span>625</span>
          <span>620</span>
          <span>424</span>
        </div>

        {/* Graph Area */}
        <div className="relative flex-1 h-full pb-5">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 300 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="dsexGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Dotted grid lines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="#252A32" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="300" y2="50" stroke="#252A32" strokeDasharray="3 3" />
            <line x1="0" y1="80" x2="300" y2="80" stroke="#252A32" strokeDasharray="3 3" />

            {/* Area fill */}
            <path
              d="M 0 80 Q 50 65, 80 40 T 130 20 T 170 35 T 220 50 T 270 65 L 300 70 L 300 100 L 0 100 Z"
              fill="url(#dsexGradient)"
            />

            {/* Line curve */}
            <motion.path
              d="M 0 80 Q 50 65, 80 40 T 130 20 T 170 35 T 220 50 T 270 65 L 300 70"
              fill="none"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>

          {/* X-axis Timestamps */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
            <span>11.00</span>
            <span>12.00</span>
            <span>13.00</span>
            <span>13.00</span>
          </div>
        </div>
      </div>

      {/* Bottom Trade & Volume Data Table */}
      <div className="pt-2 border-t border-[#242A32] space-y-1.5 text-xs font-mono">
        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-[11px]">Total trade</span>
          <div className="flex items-center gap-4 text-slate-200">
            <span>4,124.77</span>
            <span className="text-slate-400">1,14,448</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400 text-[11px]">Total volume</span>
          <div className="flex items-center gap-4 text-slate-200">
            <span>16,02,478</span>
            <span className="text-red-400">-4214</span>
          </div>
        </div>
      </div>
    </div>
  );
}
