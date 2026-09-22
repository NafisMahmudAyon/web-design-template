import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';

export default function CustomerOrdersChart() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg font-bold text-[#141814] tracking-tight">
            Customer Orders
          </h2>
          <button 
            title="Options"
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-[#7A8376] font-medium mb-3">
          1 Jan - 12 Dec 2026
        </p>

        {/* Big Stat & Badges */}
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
            456,370
          </span>
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-[#B4EE58] text-[#141814] text-xs font-bold flex items-center gap-0.5">
              +9.4%
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </span>
            <span className="text-xs font-bold text-gray-500">+245 today</span>
          </div>
        </div>
      </div>

      {/* Smoothed Wave Chart with Floating Peak Pin */}
      <div className="relative w-full h-36 mt-4 flex items-end overflow-visible">
        <svg 
          viewBox="0 0 300 100" 
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Lavender / Purple Gradient */}
            <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Area Fill */}
          <path
            d="M 0,90 Q 40,95 70,82 T 130,75 T 190,40 T 240,70 T 300,60 L 300,100 L 0,100 Z"
            fill="url(#ordersGrad)"
          />

          {/* Line Stroke */}
          <path
            d="M 0,90 Q 40,95 70,82 T 130,75 T 190,40 T 240,70 T 300,60"
            fill="none"
            stroke="#9065F6"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Peak Vertical Stem at X=190 */}
          <line
            x1="190"
            y1="40"
            x2="190"
            y2="98"
            stroke="#9065F6"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.5"
          />
          <circle cx="190" cy="40" r="4.5" fill="#9065F6" stroke="#FFFFFF" strokeWidth="2.5" />
        </svg>

        {/* Floating Peak Badge "2,345" */}
        <div className="absolute left-[63%] -translate-x-1/2 top-1 z-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="px-2.5 py-1 rounded-full bg-white shadow-card border border-black/[0.06] text-xs font-extrabold text-[#141814] flex items-center gap-1 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9065F6]"></span>
            <span>2,345</span>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
