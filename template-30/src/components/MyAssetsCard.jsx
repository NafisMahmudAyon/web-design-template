import React from 'react';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { myAssets } from '../data/mockData';

export default function MyAssetsCard() {
  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between h-[440px]">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
          My Assets
        </h3>
        <button className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Table Headers */}
      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider py-1">
        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
          <span>Assets</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
          <span>Price</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600 text-right">
          <span>Dynamic</span>
          <ArrowUpDown className="w-3 h-3" />
        </div>
      </div>

      {/* Assets Rows */}
      <div className="space-y-3 flex-1 flex flex-col justify-around py-1">
        {myAssets.map((asset) => (
          <div key={asset.id} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/40 p-2 rounded-2xl transition-colors">
            
            {/* Left: Icon & Coin Name */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm group-hover:scale-105 transition-transform"
                style={{ backgroundColor: asset.color }}
              >
                {asset.symbol.slice(0, 2)}
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
                  {asset.name}
                </p>
                <p className="text-[10px] text-slate-400 font-semibold">{asset.symbol}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-center font-extrabold text-xs text-slate-900 dark:text-white">
              {asset.price}
            </div>

            {/* Dynamic % */}
            <div className="text-right">
              <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                {asset.change}
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
