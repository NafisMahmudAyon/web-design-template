import React, { useState } from 'react';
import { MoreHorizontal, ChevronsUpDown } from 'lucide-react';
import CryptoIcon from './CryptoIcon';
import { TOP_ASSETS } from '../data/coinixData';

export default function TopAssetsCard({ onSelectAsset }) {
  const [assets, setAssets] = useState(TOP_ASSETS);
  const [sortField, setSortField] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true;
    setSortField(field);
    setSortAsc(isAsc);

    const sorted = [...assets].sort((a, b) => {
      if (field === 'price') {
        const pA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const pB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return isAsc ? pA - pB : pB - pA;
      }
      if (field === 'dynamic') {
        const dA = parseFloat(a.dynamic.replace('%', ''));
        const dB = parseFloat(b.dynamic.replace('%', ''));
        return isAsc ? dA - dB : dB - dA;
      }
      return isAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
    setAssets(sorted);
  };

  return (
    <div className="bg-[#12151F] border border-white/5 rounded-3xl p-5 sm:p-6 shadow-coinix flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm sm:text-base font-bold text-white">
          Top Assets
        </h3>
        <button className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Subheader Column Sorters */}
      <div className="grid grid-cols-3 text-[11px] font-semibold text-slate-400 pb-2.5 border-b border-white/5 select-none">
        <button 
          onClick={() => handleSort('name')}
          className="flex items-center gap-1 hover:text-white transition text-left"
        >
          <span>Assets</span>
          <ChevronsUpDown className="w-3 h-3 text-slate-500" />
        </button>

        <button 
          onClick={() => handleSort('price')}
          className="flex items-center justify-center gap-1 hover:text-white transition"
        >
          <span>Price</span>
          <ChevronsUpDown className="w-3 h-3 text-slate-500" />
        </button>

        <button 
          onClick={() => handleSort('dynamic')}
          className="flex items-center justify-end gap-1 hover:text-white transition text-right"
        >
          <span>Dynamic</span>
          <ChevronsUpDown className="w-3 h-3 text-slate-500" />
        </button>
      </div>

      {/* Asset Rows */}
      <div className="divide-y divide-white/5 flex-1">
        {assets.map((asset) => (
          <div
            key={asset.id}
            onClick={() => onSelectAsset(asset)}
            className="grid grid-cols-3 items-center py-3 hover:bg-white/5 px-1 rounded-xl transition cursor-pointer group"
          >
            {/* Asset Name & Icon */}
            <div className="flex items-center gap-2.5 min-w-0">
              <CryptoIcon type={asset.iconType} className="w-7 h-7 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold text-white group-hover:text-indigo-400 transition truncate">
                  {asset.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {asset.symbol}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-center text-xs font-semibold text-slate-200">
              {asset.price}
            </div>

            {/* Dynamic % change */}
            <div className="text-right">
              <span className={`text-xs font-bold ${asset.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {asset.dynamic}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
