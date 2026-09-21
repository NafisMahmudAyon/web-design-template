import React, { useState } from 'react';
import { marketLeadersData } from '../data/mockData';

export default function MarketLeadersCard() {
  const [timeframe, setTimeframe] = useState('Month');

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[440px]">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
          Market Leaders
        </h3>

        {/* Time Filters */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-full text-xs font-semibold">
          {['Week', 'Month'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-full transition-all ${
                timeframe === tf
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Bar Breakdown matching mockup */}
      <div className="my-2">
        {/* Percentage Badges */}
        <div className="flex items-center gap-2 mb-2 text-xs font-bold">
          <span className="text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +3.1%
          </span>
          <span className="text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +2.4%
          </span>
          <span className="text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +1.3%
          </span>
        </div>

        {/* 3 distinct visual bars matching Dribbble mockup */}
        <div className="grid grid-cols-12 gap-2 h-14 items-center">
          
          {/* Bar 1: Solid Dark Orange */}
          <div className="col-span-5 h-full bg-[#E65D24] rounded-2xl shadow-sm flex items-center justify-center transition-transform hover:scale-[1.02]" />

          {/* Bar 2: Striped Diagonal Orange */}
          <div className="col-span-4 h-full bg-gradient-to-r from-[#F07A48] to-[#E65D24] rounded-2xl shadow-sm relative overflow-hidden transition-transform hover:scale-[1.02]">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 4px, transparent 0, transparent 8px)'
              }}
            />
          </div>

          {/* Bar 3: Light Warm Orange */}
          <div className="col-span-3 h-full bg-[#FBBF9E] dark:bg-[#F07A48]/50 rounded-2xl shadow-sm transition-transform hover:scale-[1.02]" />

        </div>

        {/* Date Markers */}
        <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400 mt-2 px-1">
          <span>Aug 1</span>
          <span>Aug 30</span>
        </div>
      </div>

      {/* Asset Breakdown list */}
      <div className="space-y-4 pt-3 border-t border-slate-100 dark:border-slate-700/60">
        {marketLeadersData.map((item) => (
          <div key={item.name} className="flex items-center justify-between group">
            
            {/* Dot & Name */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-slate-800"
                style={{ backgroundColor: item.dotColor }}
              />
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>

            {/* Total Value */}
            <div className="text-right">
              <p className="font-black text-xs text-slate-900 dark:text-white">
                {item.total}
              </p>
            </div>

            {/* 24h Volume */}
            <div className="text-right">
              <p className="text-[11px] font-semibold text-slate-400">
                24h: <span className="font-bold text-slate-600 dark:text-slate-300">{item.change24h}</span>
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
