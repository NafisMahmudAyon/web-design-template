import React, { useState } from 'react';
import { MARKET_LEADERS } from '../data/raxonData';

export const MarketLeadersCard = () => {
  const [period, setPeriod] = useState('Month');

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card flex flex-col justify-between">
      <div>
        {/* Top Header Controls */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-bold text-slate-900">Market Leaders</h2>
          
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/60">
            <button
              onClick={() => setPeriod('Week')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                period === 'Week' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setPeriod('Month')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                period === 'Month' ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Month
            </button>
          </div>
        </div>

        {/* 3 Metric Chips */}
        <div className="grid grid-cols-3 gap-2 mb-2 text-center text-[11px] font-bold text-emerald-600">
          <div>▲ +3.1%</div>
          <div>▲ +2.4%</div>
          <div>▲ +1.3%</div>
        </div>

        {/* Segmented Gradient Bar */}
        <div className="flex gap-1 h-3 rounded-full overflow-hidden mb-2">
          <div className="w-[55%] bg-raxon-orange rounded-full" />
          <div className="w-[30%] bg-[#FB923C] rounded-full" />
          <div className="w-[15%] bg-[#FED7AA] rounded-full" />
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-6">
          <span>June 1</span>
          <span>June 30</span>
        </div>
      </div>

      {/* Asset Rows */}
      <div className="space-y-4 pt-2 border-t border-slate-100">
        {MARKET_LEADERS.map((leader) => (
          <div key={leader.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: leader.color }}
              />
              <span className="text-xs font-bold text-slate-900">{leader.name}</span>
            </div>

            <div className="text-right">
              <div className="text-xs font-bold text-slate-900">{leader.totalValue}</div>
              <div className="text-[10px] text-slate-400">{leader.vol24h}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
