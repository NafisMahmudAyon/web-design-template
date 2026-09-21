import React, { useState } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  TrendingUp, 
  TrendingDown, 
  SlidersHorizontal,
  ChevronDown,
  Activity
} from 'lucide-react';
import { recentTransactions } from '../data/mockData';

export default function RecentTransactionsTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimeframe, setSelectedTimeframe] = useState('1Y');
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const timeframes = ['1D', '7D', '1M', '1Y'];

  const toggleSelectAll = () => {
    if (selectedRows.length === recentTransactions.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(recentTransactions.map(t => t.id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rId => rId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const filteredTransactions = recentTransactions.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
      
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#FF5B37]" />
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              Recent transactions
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Keep track of all transactions here
          </p>
        </div>

        {/* Filters Right Bar */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="bg-slate-100 dark:bg-slate-700/60 text-slate-900 dark:text-white text-xs pl-8 pr-3 py-1.5 rounded-xl border border-transparent focus:border-[#FF5B37]/50 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-all placeholder:text-slate-400 w-36 sm:w-44"
            />
          </div>

          {/* Time Pills */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-semibold">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedTimeframe === tf
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>

          {/* 24H Dropdown */}
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span>24H</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

        </div>
      </div>

      {/* Transactions Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-700/60 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
              <th className="py-3 px-3 w-10">
                <input
                  type="checkbox"
                  checked={selectedRows.length === recentTransactions.length && recentTransactions.length > 0}
                  onChange={toggleSelectAll}
                  className="rounded border-slate-300 text-[#FF5B37] focus:ring-[#FF5B37] cursor-pointer"
                />
              </th>
              <th className="py-3 px-3">Assets</th>
              <th className="py-3 px-3">Price</th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">
                <div className="flex items-center gap-1">
                  <span>24h Change</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">
                <div className="flex items-center gap-1">
                  <span>7d Change</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">
                <div className="flex items-center gap-1">
                  <span>Volume (24h)</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3 px-3">24h Trend</th>
              <th className="py-3 px-3 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200 text-right">
                <div className="flex items-center justify-end gap-1">
                  <span>Market Cap</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700/40 text-xs">
            {filteredTransactions.map((tx) => {
              const isSelected = selectedRows.includes(tx.id);
              
              // Sparkline path generator
              const pts = tx.trendPoints;
              const maxP = Math.max(...pts);
              const minP = Math.min(...pts);
              const width = 100;
              const height = 28;
              const pathStr = pts.reduce((acc, val, idx) => {
                const x = (idx / (pts.length - 1)) * width;
                const y = height - ((val - minP) / (maxP - minP || 1)) * (height - 6) - 3;
                return `${acc} ${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
              }, '');

              return (
                <tr
                  key={tx.id}
                  className={`hover:bg-slate-50/80 dark:hover:bg-slate-700/40 transition-colors ${
                    isSelected ? 'bg-orange-50/50 dark:bg-slate-700/60' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="py-3.5 px-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelectRow(tx.id)}
                      className="rounded border-slate-300 text-[#FF5B37] focus:ring-[#FF5B37] cursor-pointer"
                    />
                  </td>

                  {/* Asset Icon & Symbol */}
                  <td className="py-3.5 px-3 font-semibold">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm"
                        style={{ backgroundColor: tx.color }}
                      >
                        {tx.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-tight">{tx.name}</p>
                        <p className="text-[10px] text-slate-400 font-semibold">{tx.symbol}</p>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-3.5 px-3 font-extrabold text-slate-900 dark:text-white">
                    {tx.price}
                  </td>

                  {/* 24h Change */}
                  <td className="py-3.5 px-3 font-bold">
                    <span className={`inline-flex items-center gap-1 ${
                      tx.isPositive24h ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {tx.isPositive24h ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {tx.change24h}
                    </span>
                  </td>

                  {/* 7d Change */}
                  <td className="py-3.5 px-3 font-bold">
                    <span className={`inline-flex items-center gap-1 ${
                      tx.isPositive7d ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                    }`}>
                      {tx.isPositive7d ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                      {tx.change7d}
                    </span>
                  </td>

                  {/* Volume (24h) */}
                  <td className="py-3.5 px-3 font-semibold text-slate-700 dark:text-slate-300">
                    {tx.volume}
                  </td>

                  {/* 24h Trend Sparkline */}
                  <td className="py-3.5 px-3">
                    <svg width="100" height="28" className="overflow-visible">
                      <path
                        d={pathStr}
                        fill="none"
                        stroke={tx.isPositive24h ? '#10B981' : '#EF4444'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </td>

                  {/* Market Cap */}
                  <td className="py-3.5 px-3 font-extrabold text-slate-900 dark:text-white text-right">
                    {tx.marketCap}
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
