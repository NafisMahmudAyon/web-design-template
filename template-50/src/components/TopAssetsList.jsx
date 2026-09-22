import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TOP_ASSETS } from '../data/raxonData';

export const TopAssetsList = () => {
  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-900">Top Assets</h2>
        <button
          aria-label="Options"
          className="text-slate-400 hover:text-slate-700 p-1 rounded"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-100 font-semibold">
        <span>Assets</span>
        <div className="flex items-center gap-8">
          <span>Price</span>
          <span>Dynamic</span>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {TOP_ASSETS.map((asset) => (
          <div key={asset.id} className="py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-full ${asset.color} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                {asset.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">{asset.name}</div>
                <div className="text-[10px] text-slate-400 font-mono">{asset.symbol}</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs font-bold text-slate-900">{asset.price}</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md min-w-[58px] text-right">
                {asset.dynamic}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
