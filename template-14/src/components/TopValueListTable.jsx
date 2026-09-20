import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export const STOCK_DATA = [
  { id: 1, instrument: 'BEXIMCO', lip: '130.4', pct: '130.4', value: '130.4', bars: [3, 5, 7, 9, 10] },
  { id: 2, instrument: 'FORTUNE', lip: '80.8', pct: '80.8', value: '80.8', bars: [2, 5, 8, 5] },
  { id: 3, instrument: 'LHBL', lip: '72.10', pct: '72.10', value: '72.10', bars: [4, 7, 5, 8] },
  { id: 4, instrument: 'MALEKSPIN', lip: '40.8', pct: '40.8', value: '40.8', bars: [3, 5, 6] },
  { id: 5, instrument: 'IPDC', lip: '62.8', pct: '62.8', value: '62.8', bars: [4, 6, 5] },
  { id: 6, instrument: 'BSC', lip: '120.4', pct: '120.4', value: '120.4', bars: [4, 6, 7, 9, 10] },
  { id: 7, instrument: 'KDSALTD', lip: '88.4', pct: '88.4', value: '88.4', bars: [4, 6, 8, 9] },
  { id: 8, instrument: 'KDSALTD', lip: '88.4', pct: '88.4', value: '88.4', bars: [3, 5, 7, 8] },
  { id: 9, instrument: 'BATBC', lip: '480.8', pct: '480.8', value: '480.8', bars: [5, 6, 8, 9, 10] },
];

export default function TopValueListTable({ onSelectStock }) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="bg-[#191C21] border border-[#262C34] rounded-3xl p-6 h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white tracking-wide">
          Top value list
        </h3>

        <button
          onClick={() => setFilterActive(!filterActive)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
            filterActive
              ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
              : 'border-[#2D333D] bg-[#14161A] text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <Filter size={13} />
          <span>Filters</span>
        </button>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-[#242A32] text-slate-500 font-sans text-[11px] uppercase tracking-wider">
              <th className="pb-3 font-semibold">INSTRUMENT</th>
              <th className="pb-3 font-semibold">LIP</th>
              <th className="pb-3 font-semibold">%</th>
              <th className="pb-3 font-semibold">VALUE</th>
              <th className="pb-3 font-semibold text-right">VOLUME</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#20252D]">
            {STOCK_DATA.map((stock, idx) => (
              <tr
                key={idx}
                onClick={() => onSelectStock?.(stock)}
                className="hover:bg-[#20242B] cursor-pointer transition-colors group"
              >
                {/* Instrument Name */}
                <td className="py-2.5 font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                  {stock.instrument}
                </td>

                {/* LIP */}
                <td className="py-2.5 text-slate-300">
                  {stock.lip}
                </td>

                {/* % */}
                <td className="py-2.5 text-slate-300">
                  {stock.pct}
                </td>

                {/* VALUE */}
                <td className="py-2.5 text-slate-300">
                  {stock.value}
                </td>

                {/* VOLUME (Mini Sparkline Bars in Green/Yellow) */}
                <td className="py-2.5 text-right">
                  <div className="inline-flex items-end gap-0.5 h-3.5">
                    {stock.bars.map((b, i) => (
                      <div
                        key={i}
                        className={`w-1 rounded-xs ${
                          b > 7
                            ? 'bg-emerald-400'
                            : b > 4
                            ? 'bg-amber-400'
                            : 'bg-emerald-600'
                        }`}
                        style={{ height: `${b * 10}%` }}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
