import React, { useState } from 'react';
import { TrendingUp, Info } from 'lucide-react';

export default function PerformanceChartCard() {
  const [hoveredMonth, setHoveredMonth] = useState('Aug');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
      
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="font-display text-lg font-black text-[#090d16]">
          Performance Vs Benchmarks
        </h3>

        {/* Badges */}
        <div className="flex items-center space-x-2 text-xs font-bold">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            Alpha +5.3%
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            Sharpe 1.24
          </span>
        </div>
      </div>

      {/* Legend Row */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-bold">
        <span className="text-[#090d16] flex items-center space-x-1 font-black">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Portfolio <span className="text-emerald-600">+4.25%</span></span>
        </span>
        <span className="text-gray-500 flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span>S&P 500 <span className="text-red-500">-1.39%</span></span>
        </span>
        <span className="text-gray-500 flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span>Nasdaq <span className="text-red-500">-1.1%</span></span>
        </span>
        <span className="text-gray-500 flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Crypto <span className="text-emerald-600">+8.9%</span></span>
        </span>
      </div>

      {/* Chart Visualizer Area */}
      <div className="relative pt-6 pb-2">
        
        {/* Floating Tooltip Mockup */}
        <div className="absolute top-0 left-[62%] -translate-x-1/2 bg-[#090d16] text-white p-3 rounded-xl shadow-xl z-10 text-[10px] space-y-1 border border-gray-700">
          <span className="text-gray-400 font-mono block">Aug 30, 10:08 PM</span>
          <div className="flex justify-between space-x-4">
            <span className="text-gray-300">Performance</span>
            <span className="text-emerald-400 font-bold">+4.9%</span>
          </div>
          <div className="flex justify-between space-x-4">
            <span className="text-gray-300">Benchmarks</span>
            <span className="text-white font-bold">+8%</span>
          </div>
        </div>

        {/* Dynamic SVG Line Charts */}
        <div className="h-44 w-full relative flex items-center">
          
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">+4%</div>
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">+3%</div>
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">+2%</div>
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">+1%</div>
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">0%</div>
            <div className="border-b border-gray-300 w-full text-[9px] text-gray-400">-1%</div>
          </div>

          <svg className="w-full h-full relative z-0 overflow-visible" viewBox="0 0 600 160">
            {/* Dashed Benchmark Line */}
            <path
              d="M0,120 Q50,110 100,105 T200,95 T300,90 T400,85 T500,80 T600,75"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
            />
            
            {/* Solid Portfolio Performance Green Line */}
            <path
              d="M0,130 Q50,100 100,80 T200,90 T300,60 T380,80 T440,30 T500,70 T600,20"
              stroke="#059669"
              strokeWidth="3"
              fill="none"
            />

            {/* Active Tooltip Pointer */}
            <circle cx="380" cy="80" r="6" className="fill-white stroke-[#090d16] stroke-[3]" />
          </svg>

        </div>

        {/* X-Axis Month Labels */}
        <div className="flex justify-between text-[10px] font-bold text-gray-400 pt-3">
          {months.map((m) => (
            <span
              key={m}
              onMouseEnter={() => setHoveredMonth(m)}
              className={`cursor-pointer transition-colors ${
                hoveredMonth === m ? 'text-[#090d16] font-black' : 'hover:text-gray-600'
              }`}
            >
              {m}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}
