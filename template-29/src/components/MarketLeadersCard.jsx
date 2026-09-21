import React, { useState } from 'react';
import { marketLeadersData } from '../data/mockData';

export default function MarketLeadersCard() {
  const [timeframe, setTimeframe] = useState('Month');

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[360px]">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-900 dark:text-white text-base">
          Market Leaders
        </h3>

        {/* Time Filter Pills */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-semibold">
          {['Week', 'Month'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeframe === tf
                  ? 'bg-[#FF5B37] text-white shadow-sm font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Bar Graph breakdown */}
      <div className="my-3">
        {/* Percentage labels above bars */}
        <div className="flex items-center gap-2 mb-2 text-xs font-bold">
          <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +3.1%
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +2.4%
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md flex items-center gap-0.5">
            ▲ +1.3%
          </span>
        </div>

        {/* Multi-segment stacked bar */}
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden flex gap-1 p-0.5">
          <div className="h-full bg-[#FF5B37] rounded-md transition-all duration-500" style={{ width: '48%' }} title="Bitcoin 48%" />
          <div className="h-full bg-[#FF886E] rounded-md transition-all duration-500" style={{ width: '32%' }} title="Ethereum 32%" />
          <div className="h-full bg-[#FFC2B4] dark:bg-[#FF886E]/40 rounded-md transition-all duration-500" style={{ width: '20%' }} title="Litecoin 20%" />
        </div>

        {/* Date Markers */}
        <div className="flex justify-between items-center text-[11px] font-semibold text-slate-400 mt-2 px-0.5">
          <span>June 1</span>
          <span>June 30</span>
        </div>
      </div>

      {/* Asset Row Breakdown */}
      <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        {marketLeadersData.map((item) => (
          <div key={item.name} className="flex items-center justify-between group">
            
            {/* Left: Dot & Name */}
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-slate-800"
                style={{ backgroundColor: item.dotColor }}
              />
              <span className="font-semibold text-xs text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>

            {/* Center: Total Value */}
            <div className="text-right">
              <p className="font-bold text-xs text-slate-900 dark:text-white">
                {item.total}
              </p>
            </div>

            {/* Right: 24h volume/change */}
            <div className="text-right">
              <p className="text-[11px] font-medium text-slate-400">
                24h: <span className="font-semibold text-slate-600 dark:text-slate-300">{item.change24h}</span>
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
