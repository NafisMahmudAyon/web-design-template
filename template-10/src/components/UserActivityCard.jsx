import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

export default function UserActivityCard() {
  const [activePoint, setActivePoint] = useState(3); // April point

  const nodes = [
    { month: 'Jan', y1: 1.2, y2: 0.8 },
    { month: 'Feb', y1: 1.5, y2: 0.9 },
    { month: 'Mar', y1: 1.8, y2: 1.1 },
    { month: 'Apr', y1: 4.0, y2: 1.0, active: true },
    { month: 'May', y1: 3.2, y2: 1.2 },
    { month: 'Jun', y1: 3.8, y2: 1.5 },
    { month: 'Aug', y1: 4.2, y2: 1.8 },
    { month: 'Sep', y1: 4.5, y2: 2.1 },
  ];

  return (
    <div className="bg-[#17191d] rounded-3xl p-5 md:p-6 border border-white/10 flex flex-col justify-between shadow-lg h-full">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-white font-display">User Activity Insights</h3>
        
        <div className="relative">
          <select className="bg-[#1c1e22] text-xs font-semibold text-gray-300 py-1.5 pl-3 pr-7 rounded-xl border border-white/10 appearance-none focus:outline-none cursor-pointer">
            <option>Last Day</option>
            <option>Last Week</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Big Stat Header: 8 h 20 m */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
        <div>
          <span className="text-xs text-gray-400 font-medium block">User Activity</span>
          <span className="text-3xl font-extrabold font-display text-white mt-0.5 block">8 h 20 m</span>
        </div>

        <button className="text-gray-500 hover:text-white p-1">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* SVG Multi-Line Chart Container */}
      <div className="relative pt-2">
        {/* Y Axis Grid lines */}
        <div className="flex flex-col justify-between h-40 text-[10px] text-gray-600 border-l border-white/5 pl-2 relative">
          <div className="border-b border-white/5 w-full pb-0.5">8h</div>
          <div className="border-b border-white/5 w-full pb-0.5">6h</div>
          <div className="border-b border-white/5 w-full pb-0.5">4h</div>
          <div className="border-b border-white/5 w-full pb-0.5">2h</div>
          <div className="border-b border-white/5 w-full pb-0.5">0</div>

          {/* Interactive Floating Tooltip (Matching Screenshot) */}
          <div className="absolute left-[45%] top-[25%] bg-[#1f2229] border border-white/15 rounded-xl p-2.5 shadow-2xl z-20 pointer-events-none">
            <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1 gap-4">
              <span>Most active</span>
              <span className="font-bold text-white">4h</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-400 gap-4">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676]" />
                Low active
              </span>
              <span className="font-bold text-white">1h</span>
            </div>
          </div>

          {/* SVG Line Graph Path */}
          <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Upper Emerald Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              d="M 5,80 L 18,75 L 30,70 L 45,45 L 60,55 L 75,48 L 88,40 L 98,35"
              fill="none"
              stroke="#00e676"
              strokeWidth="2"
            />
            {/* Lower Dark Emerald Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              d="M 5,90 L 18,88 L 30,85 L 45,80 L 60,78 L 75,70 L 88,68 L 98,60"
              fill="none"
              stroke="#009640"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* X Axis Months */}
        <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mt-4 px-2">
          {nodes.map((n, idx) => (
            <span key={idx}>{n.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
