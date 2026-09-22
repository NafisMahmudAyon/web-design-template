import React from 'react';
import { motion } from 'framer-motion';
import { TOP_TICKERS } from '../data/raxonData';

export const PriceTickersRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {TOP_TICKERS.map((ticker, idx) => (
        <motion.div
          key={ticker.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
          whileHover={{ y: -2 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-raxon-card hover:shadow-raxon-hover transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-slate-900">{ticker.name}</span>
              <span className="text-[10px] text-slate-400 block font-mono">{ticker.pair}</span>
            </div>
          </div>

          <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight my-1">
            {ticker.price}
          </div>

          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
            <span className="text-slate-400">vs Last Week</span>
            <span
              className={`font-bold inline-flex items-center gap-0.5 ${
                ticker.isPositive ? 'text-emerald-600' : 'text-rose-500'
              }`}
            >
              <span>{ticker.isPositive ? '▲' : '▼'}</span>
              <span>{ticker.change}</span>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
