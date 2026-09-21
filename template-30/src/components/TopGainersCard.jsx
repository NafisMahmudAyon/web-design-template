import React from 'react';
import { MoreHorizontal, ArrowUpDown, Star, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { topGainers } from '../data/mockData';

export default function TopGainersCard() {
  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[440px]">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
          Top Gainers
        </h3>
        <button className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider py-1">
        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
          <span>Coin</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
        <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-slate-600 text-center">
          <span>Cap</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
        <div className="flex items-center justify-center gap-1 cursor-pointer hover:text-slate-600 text-center">
          <span>Price</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
        <div className="flex items-center justify-end gap-1 cursor-pointer hover:text-slate-600 text-right">
          <span>Dynamic</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-2 flex-1 flex flex-col justify-around py-1">
        {topGainers.map((gainer) => (
          <div key={gainer.id} className="grid grid-cols-4 items-center group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/40 p-2 rounded-2xl transition-colors">
            
            {/* Left: Star/Zap Icon + Name */}
            <div className="flex items-center gap-2">
              {gainer.icon === 'star' ? (
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              ) : (
                <Zap className="w-4 h-4 text-[#E65D24] fill-[#E65D24]" />
              )}
              <span className="font-bold text-xs text-slate-900 dark:text-white">
                {gainer.name}
              </span>
            </div>

            {/* Cap */}
            <div className="text-center font-semibold text-xs text-slate-600 dark:text-slate-300">
              {gainer.cap}
            </div>

            {/* Price */}
            <div className="text-center font-extrabold text-xs text-slate-900 dark:text-white">
              {gainer.price}
            </div>

            {/* Dynamic % */}
            <div className="text-right flex items-center justify-end gap-0.5">
              <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
                {gainer.change}
              </span>
              {gainer.isDown ? (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronUp className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
