import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { topTickers } from '../data/mockData';

export default function TopTickerRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {topTickers.map((ticker) => {
        const isPositive = ticker.change >= 0;
        return (
          <div
            key={ticker.id}
            className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all group h-[115px] flex flex-col justify-between"
          >
            {/* Top row: Name & Pair */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight group-hover:text-[#FF5B37] transition-colors">
                  {ticker.name}
                </h3>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {ticker.pair}
                </span>
              </div>
              <div 
                className="w-2.5 h-2.5 rounded-full ring-4 ring-slate-100 dark:ring-slate-700/50"
                style={{ backgroundColor: ticker.iconColor }}
              />
            </div>

            {/* Bottom row: Price & Percentage Change Pill */}
            <div className="flex items-baseline justify-between pt-1">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                ${ticker.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>

              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className="text-slate-400 text-[11px] font-medium hidden xl:inline">
                  {ticker.period}
                </span>
                <span
                  className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-xs font-bold ${
                    isPositive
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                      : 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40'
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="w-3 h-3 stroke-[2.5]" />
                  ) : (
                    <TrendingDown className="w-3 h-3 stroke-[2.5]" />
                  )}
                  {isPositive ? `+${ticker.change}%` : `${ticker.change}%`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
