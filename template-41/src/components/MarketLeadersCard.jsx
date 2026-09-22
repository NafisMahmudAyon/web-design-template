import React, { useState } from 'react';
import { MARKET_LEADERS } from '../data/coinixData';

export default function MarketLeadersCard() {
  const [period, setPeriod] = useState('Month'); // 'Week' | 'Month'

  return (
    <div className="bg-[#12151F] border border-white/5 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-coinix">
      {/* Header & Period Switcher */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-bold text-white">
          Market Leaders
        </h3>

        <div className="flex items-center bg-[#181B26] p-0.5 rounded-full border border-white/5">
          {['Week', 'Month'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`
                px-3 py-1 rounded-full text-[11px] font-semibold transition
                ${period === p 
                  ? 'bg-white/10 text-white font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
                }
              `}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Striped Visual Pill Bars */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {MARKET_LEADERS.map((leader) => (
          <div key={leader.id} className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-emerald-400 mb-1.5">
              {leader.gain}
            </span>
            <div className={`w-full h-10 rounded-2xl ${leader.stripeClass} shadow-inner opacity-90 hover:opacity-100 transition cursor-pointer`} />
          </div>
        ))}
      </div>

      {/* Leader 24h Stats List */}
      <div className="space-y-2.5 pt-3 border-t border-white/5">
        {MARKET_LEADERS.map((leader) => (
          <div key={leader.id} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${leader.dotColor}`} />
              <span className="font-semibold text-white">
                {leader.name}
              </span>
              <span className="text-slate-400 text-[11px]">
                ({leader.symbol})
              </span>
            </div>

            <span className="text-slate-300 font-medium text-[11px]">
              {leader.stat}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
