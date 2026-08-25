import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal, ChevronDown, Zap } from 'lucide-react';

export default function SalesChartCard() {
  const [hoveredBar, setHoveredBar] = useState(null);

  const monthsData = [
    { month: 'Jan', green: 120, orange: 160 },
    { month: 'Feb', green: 90, orange: 100 },
    { month: 'Mar', green: 140, orange: 130 },
    { month: 'Apr', green: 80, orange: 90 },
    { month: 'May', green: 300, orange: 230 },
    { month: 'Jun', green: 110, orange: 110 },
    { month: 'Jul', green: 75, orange: 85 },
    { month: 'Aug', green: 190, orange: 80 },
    { month: 'Sep', green: 220, orange: 170 },
    { month: 'Oct', green: 140, orange: 160 },
  ];

  return (
    <div className="bg-[#17191d] rounded-3xl p-5 md:p-6 border border-white/10 flex flex-col justify-between shadow-lg h-full">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-white font-display">Sales Chart</h3>
        
        <div className="relative">
          <select className="bg-[#1c1e22] text-xs font-semibold text-gray-300 py-1.5 pl-3 pr-7 rounded-xl border border-white/10 appearance-none focus:outline-none cursor-pointer">
            <option>Last Month</option>
            <option>This Quarter</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Subcard Header: Big Stat 12.4k & 7 Winning Streak Badge */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
        <div>
          <span className="text-xs text-gray-400 font-medium block">Sales Report</span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-3xl font-extrabold font-display text-white">12.4k</span>
            <span className="text-xs font-bold text-[#00e676]">+10.7% last mo</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Vibrant Orange Pill Badge: ⚡ 7 Winning Streak */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ff5722] text-white text-xs font-bold shadow-md animate-pulse">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>7 Winning Streak</span>
          </div>

          <button className="text-gray-500 hover:text-white p-1">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vertical Dual Bar Chart */}
      <div className="relative pt-4">
        {/* Y Axis Grid lines */}
        <div className="absolute inset-x-0 top-0 text-[10px] text-gray-600 border-b border-white/5 pb-1">400</div>
        <div className="absolute inset-x-0 top-12 text-[10px] text-gray-600 border-b border-white/5 pb-1">300</div>
        <div className="absolute inset-x-0 top-24 text-[10px] text-gray-600 border-b border-white/5 pb-1">200</div>
        <div className="absolute inset-x-0 top-36 text-[10px] text-gray-600 border-b border-white/5 pb-1">100</div>

        {/* Bars Container */}
        <div className="flex items-end justify-between h-44 pt-6 px-2 relative z-10">
          {monthsData.map((d, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredBar(i)}
              onMouseLeave={() => setHoveredBar(null)}
              className="flex flex-col items-center gap-1 group relative cursor-pointer"
            >
              {/* Tooltip on hover */}
              {hoveredBar === i && (
                <div className="absolute -top-12 bg-[#252830] text-white text-[10px] px-2.5 py-1 rounded-md shadow-xl border border-white/10 whitespace-nowrap z-20">
                  <div className="font-bold text-[#00e676]">Green: ${d.green}k</div>
                  <div className="font-bold text-[#ff5722]">Orange: ${d.orange}k</div>
                </div>
              )}

              <div className="flex items-end gap-1">
                {/* Orange Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.orange / 400) * 140}px` }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="w-2.5 sm:w-3 bg-[#ff5722] rounded-t-sm group-hover:brightness-125 transition-all"
                />
                {/* Green Bar */}
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.green / 400) * 140}px` }}
                  transition={{ duration: 0.6, delay: i * 0.05 + 0.1 }}
                  className="w-2.5 sm:w-3 bg-[#00e676] rounded-t-sm group-hover:brightness-125 transition-all"
                />
              </div>

              <span className="text-[10px] font-mono text-gray-500 mt-2">{d.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
