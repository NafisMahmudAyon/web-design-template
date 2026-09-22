import React, { useState } from 'react';
import { 
  BarChart2, 
  Search, 
  ChevronDown 
} from 'lucide-react';
import { RECENT_TRANSACTIONS } from '../data/raxonData';

export const RecentTransactionsTable = () => {
  const [activeRange, setActiveRange] = useState('1Y');
  const [search, setSearch] = useState('');

  const renderSparkline = (points, isPositive) => {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const width = 80;
    const height = 24;

    const pathD = points
      .map((pt, i) => {
        const x = (i / (points.length - 1)) * width;
        const y = height - ((pt - min) / range) * (height - 6) - 3;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');

    return (
      <svg width={width} height={height} className="overflow-visible">
        <path
          d={pathD}
          fill="none"
          stroke={isPositive ? '#10B981' : '#EF4444'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const filtered = RECENT_TRANSACTIONS.filter((tx) =>
    tx.name.toLowerCase().includes(search.toLowerCase()) ||
    tx.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Recent transactions</h2>
            <p className="text-[11px] text-slate-400">Keep track of all transactions here</p>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="py-1.5 pl-8 pr-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-raxon-orange w-36 sm:w-44 transition-colors"
            />
          </div>

          {/* Timeframe pills */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200/60 text-xs">
            {['1D', '7D', '1M', '1Y'].map((range) => (
              <button
                key={range}
                onClick={() => setActiveRange(range)}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                  activeRange === range ? 'bg-white text-slate-900 shadow-xs font-bold' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* 24H Dropdown */}
          <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-300 flex items-center gap-1 shadow-xs transition-colors">
            <span>24H</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider font-semibold">
              <th className="py-3 px-2 w-6">
                <input type="checkbox" className="rounded border-slate-300 text-raxon-orange focus:ring-raxon-orange" />
              </th>
              <th className="py-3 px-3">Assets</th>
              <th className="py-3 px-3">Price</th>
              <th className="py-3 px-3">24h Change</th>
              <th className="py-3 px-3">7d Change</th>
              <th className="py-3 px-3">Volume (24h)</th>
              <th className="py-3 px-3">24h Trend</th>
              <th className="py-3 px-3 text-right">Market Cap</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="py-3.5 px-2">
                  <input type="checkbox" className="rounded border-slate-300 text-raxon-orange focus:ring-raxon-orange" />
                </td>

                <td className="py-3.5 px-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full ${row.iconColor} flex items-center justify-center font-bold text-xs shadow-xs`}>
                      {row.icon}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{row.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{row.symbol}</div>
                    </div>
                  </div>
                </td>

                <td className="py-3.5 px-3 font-bold text-slate-900">{row.price}</td>

                <td className="py-3.5 px-3">
                  <span className={`font-semibold ${row.isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {row.change24h}
                  </span>
                </td>

                <td className="py-3.5 px-3">
                  <span className={`font-semibold ${row.isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
                    {row.change7d}
                  </span>
                </td>

                <td className="py-3.5 px-3 text-slate-600">{row.vol24h}</td>

                <td className="py-3.5 px-3">
                  {renderSparkline(row.trend, row.isPositive)}
                </td>

                <td className="py-3.5 px-3 text-right font-bold text-slate-900">
                  {row.marketCap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
