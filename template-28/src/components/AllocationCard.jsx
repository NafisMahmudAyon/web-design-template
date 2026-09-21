import React from 'react';
import { ChevronDown, TrendingUp } from 'lucide-react';

export default function AllocationCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-display text-lg font-black text-[#090d16]">
          Allocation
        </h3>
        <button className="flex items-center space-x-1 text-xs font-bold text-gray-500 hover:text-[#090d16] bg-gray-50 border border-gray-200 px-3 py-1 rounded-lg">
          <span>This Week</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </button>
      </div>

      {/* Main Allocation Display */}
      <div className="space-y-1">
        <span className="font-display text-3xl font-black text-[#090d16]">
          $45,878.00
        </span>
      </div>

      {/* Area Chart Graphic with Active Pointer Pill */}
      <div className="relative h-28 w-full flex items-end overflow-hidden bg-gradient-to-b from-emerald-500/10 to-transparent rounded-xl border-b border-gray-200">
        <svg className="w-full h-full text-emerald-600" viewBox="0 0 300 80" fill="none">
          <path
            d="M0,60 Q50,40 100,50 T200,30 T300,20 L300,80 L0,80 Z"
            fill="url(#emeraldGradient)"
            opacity="0.3"
          />
          <path
            d="M0,60 Q50,40 100,50 T200,30 T300,20"
            stroke="#059669"
            strokeWidth="2.5"
            fill="none"
          />
          <defs>
            <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pointer Pin & Badge */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-md">
            12.45%
          </span>
          <div className="w-0.5 h-10 bg-[#090d16]"></div>
        </div>
      </div>

      {/* 3 Metric Pills Bottom Row */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">Volatility</span>
          <span className="font-display text-sm font-black text-[#090d16]">14.2%</span>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">Market Cap</span>
          <span className="font-display text-sm font-black text-[#090d16]">$1.2B</span>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
          <span className="text-[10px] text-gray-400 font-bold uppercase block">Sortino</span>
          <span className="font-display text-sm font-black text-[#090d16]">1.87</span>
        </div>
      </div>

    </div>
  );
}
