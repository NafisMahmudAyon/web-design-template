import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import { TOP_GAINERS } from '../data/raxonData';

export const TopGainersList = ({ onSelectGainer }) => {
  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-raxon-card flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-slate-900">Top Gainers</h2>
          <button 
            type="button"
            className="text-xs font-semibold text-slate-400 hover:text-raxon-orange flex items-center gap-1 transition-colors group"
          >
            <span>See all</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
          {TOP_GAINERS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              onClick={() => onSelectGainer && onSelectGainer(item)}
              className="py-3 flex items-center justify-between hover:bg-slate-50/60 rounded-xl px-2 -mx-2 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200/60 text-raxon-orange flex items-center justify-center text-xs font-bold shadow-xs">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-raxon-orange transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {item.cap}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-xs font-bold text-slate-900 font-mono">
                  {item.price}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md min-w-[58px] text-right flex items-center justify-end gap-1 ${
                  item.isDown 
                    ? 'text-red-600 bg-red-50' 
                    : 'text-emerald-600 bg-emerald-50'
                }`}>
                  {item.isDown ? (
                    <TrendingDown className="w-3 h-3" />
                  ) : (
                    <TrendingUp className="w-3 h-3" />
                  )}
                  <span>{item.dynamic}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGainersList;
