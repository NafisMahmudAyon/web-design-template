import React from 'react';
import { HOLDINGS } from '../data/mockData';
import { ArrowRight, Layers } from 'lucide-react';

export default function HoldingsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-display text-lg font-black text-[#090d16]">
          Holdings
        </h3>
        <a
          href="#holdings"
          className="text-xs font-bold text-gray-500 hover:text-[#090d16] flex items-center space-x-1 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 text-[10px] font-black uppercase text-gray-400 border-b border-gray-100 pb-2">
        <div className="col-span-5">Asset</div>
        <div className="col-span-3 text-right">Price</div>
        <div className="col-span-2 text-center">Weight</div>
        <div className="col-span-2 text-right">P/L</div>
      </div>

      {/* Holdings Items */}
      <div className="space-y-3">
        {HOLDINGS.map((h) => (
          <div
            key={h.symbol}
            className="grid grid-cols-12 items-center text-xs font-bold py-1.5 hover:bg-gray-50 rounded-xl px-1 transition-colors"
          >
            {/* Asset info */}
            <div className="col-span-5 flex items-center space-x-2.5">
              <div className={`w-8 h-8 rounded-full ${h.color} text-white flex items-center justify-center font-black text-[10px] shadow-sm`}>
                {h.symbol.slice(0, 2)}
              </div>
              <div>
                <span className="font-black text-[#090d16] block leading-tight">{h.symbol}</span>
                <span className="text-[10px] text-gray-400 font-normal block leading-tight">{h.name}</span>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-3 text-right font-black text-[#090d16]">
              {h.price}
            </div>

            {/* Weight Bar */}
            <div className="col-span-2 px-2">
              <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 rounded-full"
                  style={{ width: `${h.weightPct}%` }}
                ></div>
              </div>
              <span className="text-[9px] text-gray-400 font-bold block text-center mt-0.5">{h.weight}</span>
            </div>

            {/* P/L Badge */}
            <div className="col-span-2 text-right">
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded">
                {h.pl}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
