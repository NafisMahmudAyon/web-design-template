import React from 'react';
import { MARKET_INTELLIGENCE } from '../data/mockData';
import { Sparkles, Globe, ArrowUpRight } from 'lucide-react';

export default function MarketIntelligenceCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <h3 className="font-display text-lg font-black text-[#090d16]">
            Market Intelligence
          </h3>
        </div>
        <span className="text-[10px] font-bold text-gray-400">
          2h Ago
        </span>
      </div>

      {/* Briefings List */}
      <div className="space-y-3">
        {MARKET_INTELLIGENCE.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors space-y-1.5 cursor-pointer group"
          >
            <span className="text-[9px] font-black uppercase text-purple-600 tracking-wider block">
              {item.tag}
            </span>
            <p className="text-xs font-bold text-[#090d16] group-hover:text-purple-700 transition-colors leading-snug">
              {item.headline}
            </p>
          </div>
        ))}
      </div>

      <a
        href="#markets"
        className="inline-flex items-center justify-center space-x-1 text-xs font-black text-purple-600 hover:text-purple-800 pt-1"
      >
        <span>Explore Full Market Feed</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>

    </div>
  );
}
