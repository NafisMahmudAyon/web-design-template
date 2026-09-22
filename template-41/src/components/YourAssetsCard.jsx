import React from 'react';
import { RotateCw, ChevronRight } from 'lucide-react';
import CryptoIcon from './CryptoIcon';
import { YOUR_ASSETS } from '../data/coinixData';

export default function YourAssetsCard({ onSelectAsset }) {
  return (
    <div className="bg-[#12151F] border border-white/5 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-coinix">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white">
            Your assets
          </h3>
          <p className="text-xs text-slate-400">
            Live tracking your assets
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
          <span>Updated 10 sec</span>
          <RotateCw className="w-3 h-3 text-slate-400" />
        </div>
      </div>

      {/* 2x2 Asset Grid */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {YOUR_ASSETS.map((asset) => (
          <div
            key={asset.id}
            onClick={() => onSelectAsset(asset)}
            className="bg-[#181B26] hover:bg-[#1E2230] border border-white/5 rounded-2xl p-3.5 transition-all duration-150 cursor-pointer group flex flex-col justify-between"
          >
            {/* Asset Header: Icon, Name, Chevron */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <CryptoIcon type={asset.iconType} className="w-7 h-7 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-indigo-400 transition truncate">
                    {asset.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {asset.pair}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition flex-shrink-0 mt-0.5" />
            </div>

            {/* Asset Price & Change */}
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-white/5">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {asset.balance}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-400">
                {asset.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
