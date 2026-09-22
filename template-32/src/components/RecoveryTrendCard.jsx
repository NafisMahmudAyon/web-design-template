import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export default function RecoveryTrendCard() {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-[180px]">
      
      {/* Top Row: Big 86% Stat & Legend */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-3xl font-extrabold text-[#181D17] tracking-tight">
            86%
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2.5 text-[11px] font-semibold text-[#6C7568]">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52734D]"></span>
            <span>Recovery</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A1C7]"></span>
            <span>Target</span>
          </div>
        </div>
      </div>

      {/* Middle: Smoothed SVG Wave Chart with Dark Trend Pin */}
      <div className="relative w-full h-16 flex items-center justify-center my-1 overflow-visible">
        <svg 
          viewBox="0 0 200 60" 
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Recovery Green Gradient */}
            <linearGradient id="recoveryGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#52734D" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#52734D" stopOpacity="0.0" />
            </linearGradient>
            {/* Target Purple Gradient */}
            <linearGradient id="targetGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C7A1C7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C7A1C7" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Target wave path */}
          <path
            d="M 0,38 Q 30,45 60,35 T 120,38 T 170,30 T 200,34 L 200,60 L 0,60 Z"
            fill="url(#targetGrad)"
          />
          <path
            d="M 0,38 Q 30,45 60,35 T 120,38 T 170,30 T 200,34"
            fill="none"
            stroke="#C7A1C7"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Recovery wave path */}
          <path
            d="M 0,42 Q 35,50 70,30 T 130,22 T 180,36 T 200,28 L 200,60 L 0,60 Z"
            fill="url(#recoveryGrad)"
          />
          <path
            d="M 0,42 Q 35,50 70,30 T 130,22 T 180,36 T 200,28"
            fill="none"
            stroke="#52734D"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Vertical Pin Line at peak (X ~ 100) */}
          <line
            x1="100"
            y1="6"
            x2="100"
            y2="55"
            stroke="#181D17"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            opacity="0.3"
          />
          <circle cx="100" cy="55" r="2.5" fill="#181D17" />
        </svg>

        {/* The Dark Floating Pin with Upward Trend */}
        <div className="absolute left-[50%] -translate-x-1/2 top-0 z-10">
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-7 h-5 rounded-full bg-[#181D17] text-white flex items-center justify-center shadow-md cursor-pointer"
            title="Current Recovery Rate: 86% (+12% vs last week)"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#8CB86C]" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Label */}
      <div>
        <p className="text-xs font-bold text-[#181D17]">
          Recovery progress trend
        </p>
      </div>

    </div>
  );
}
