import React, { useState } from 'react';
import { Search, MoreHorizontal, Check } from 'lucide-react';
import CryptoIcon from './CryptoIcon';
import { TRANSACTIONS_HISTORY } from '../data/coinixData';

export default function TransactionsHistoryCard({ onSelectTransaction }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState('1Y'); // '1D' | '7D' | '1M' | '1Y'
  const [selectedRows, setSelectedRows] = useState([]);

  const timeframes = ['1D', '7D', '1M', '1Y'];

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(r => r !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const filteredHistory = TRANSACTIONS_HISTORY.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#12151F] border border-white/5 rounded-3xl p-5 sm:p-6 shadow-coinix flex flex-col justify-between">
      {/* Header with Search and Timeframe Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <h3 className="text-sm sm:text-base font-bold text-white">
          Transactions History
        </h3>

        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative w-40 sm:w-48">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 bg-[#181B26] border border-white/5 rounded-full text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Timeframe Pills */}
          <div className="flex items-center bg-[#181B26] p-0.5 rounded-full border border-white/5">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`
                  px-2.5 py-1 rounded-full text-[11px] font-semibold transition
                  ${timeframe === tf 
                    ? 'bg-white/10 text-white font-bold' 
                    : 'text-slate-400 hover:text-slate-200'
                  }
                `}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b border-white/5 text-[11px] font-semibold text-slate-400 pb-2">
              <th className="py-2.5 px-3 w-10">
                <input 
                  type="checkbox"
                  className="rounded bg-white/5 border-white/10 text-indigo-600 focus:ring-0 w-3.5 h-3.5"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(TRANSACTIONS_HISTORY.map(t => t.id));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                />
              </th>
              <th className="py-2.5 px-3">Assets</th>
              <th className="py-2.5 px-3">Price</th>
              <th className="py-2.5 px-3">Market Cap</th>
              <th className="py-2.5 px-3">Volume 24h</th>
              <th className="py-2.5 px-3 text-center">Price Graph</th>
              <th className="py-2.5 px-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/5 text-xs">
            {filteredHistory.map((item) => {
              const isSelected = selectedRows.includes(item.id);

              return (
                <tr
                  key={item.id}
                  onClick={() => onSelectTransaction(item)}
                  className="hover:bg-white/5 transition cursor-pointer group"
                >
                  {/* Row Checkbox */}
                  <td className="py-3 px-3" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleRow(item.id)}
                      className="rounded bg-white/5 border-white/10 text-indigo-600 focus:ring-0 w-3.5 h-3.5"
                    />
                  </td>

                  {/* Asset */}
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2.5">
                      <CryptoIcon type={item.iconType} className="w-7 h-7 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-white group-hover:text-indigo-400 transition">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">
                          {item.symbol}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-3 px-3 font-semibold text-slate-200">
                    {item.price}
                  </td>

                  {/* Market Cap */}
                  <td className="py-3 px-3 text-slate-300">
                    {item.marketCap}
                  </td>

                  {/* Volume 24h */}
                  <td className="py-3 px-3 text-slate-300">
                    {item.volume24h}
                  </td>

                  {/* Live SVG Sparkline Wave Graph */}
                  <td className="py-3 px-3">
                    <div className="w-28 h-7 mx-auto flex items-center justify-center">
                      <svg viewBox="0 0 120 32" className="w-full h-full overflow-visible">
                        <path
                          d={item.sparkline}
                          fill="none"
                          stroke={item.isPositive ? '#10B981' : '#EF4444'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </td>

                  {/* Action Menu Trigger */}
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTransaction(item);
                      }}
                      className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
