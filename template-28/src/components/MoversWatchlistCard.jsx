import React, { useState } from 'react';
import { GAINERS, LOSERS, WATCHLIST } from '../data/mockData';
import { ChevronDown, TrendingUp, TrendingDown } from 'lucide-react';

export default function MoversWatchlistCard() {
  const [activeTab, setActiveTab] = useState('gainers'); // 'gainers' or 'losers'

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
      
      {/* Top Movers Header */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-display text-lg font-black text-[#090d16]">
            Top Movers
          </h3>
          <span className="text-[10px] font-bold text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
            Today
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex space-x-4 border-b border-gray-100 text-xs font-black pb-2 mb-3">
          <button
            onClick={() => setActiveTab('gainers')}
            className={`transition-colors ${
              activeTab === 'gainers' ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' : 'text-gray-400'
            }`}
          >
            GAINERS
          </button>
          <button
            onClick={() => setActiveTab('losers')}
            className={`transition-colors ${
              activeTab === 'losers' ? 'text-red-500 border-b-2 border-red-500 pb-1' : 'text-gray-400'
            }`}
          >
            LOSERS
          </button>
        </div>

        {/* Mover Items */}
        <div className="space-y-2">
          {(activeTab === 'gainers' ? GAINERS : LOSERS).map((item) => (
            <div
              key={item.symbol}
              className="flex justify-between items-center text-xs font-bold py-1 border-b border-gray-50 last:border-0"
            >
              <div>
                <span className="font-black text-[#090d16] block leading-none">{item.symbol}</span>
                <span className="text-[10px] text-gray-400 font-normal">{item.name}</span>
              </div>
              <span
                className={`text-[10px] font-black px-2 py-0.5 rounded ${
                  activeTab === 'gainers'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-red-50 text-red-600'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Watchlist Section */}
      <div className="pt-3 border-t border-gray-100 space-y-2">
        <span className="text-[10px] font-black uppercase text-gray-400 block tracking-wider">
          Watchlist
        </span>

        {WATCHLIST.map((w, i) => (
          <div key={i} className="flex justify-between items-center text-xs font-bold py-1">
            <div className="flex items-center space-x-2">
              <span className="text-base">{i === 0 ? '🍎' : '💚'}</span>
              <span className="font-black text-[#090d16]">{w.symbol}</span>
            </div>
            <div className="text-right">
              <span className="font-black text-[#090d16] block">{w.price}</span>
              <span className="text-[9px] text-emerald-600 font-extrabold">{w.change}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
