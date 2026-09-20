import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const INDICES = [
  { name: 'GOLD', value: '2.125.25', change: '+7.43 0.56%' },
  { name: 'DOW32', value: '32,053.74', change: '+7.43 0.56%' },
  { name: 'S$Q', value: '2.125.25', change: '+7.43 0.56%' },
  { name: 'NASDAQ', value: '2.125.25', change: '+7.43 0.56%' },
  { name: 'DOW 32', value: '2.125.25', change: '+7.43 0.56%' },
];

export default function MarketIndicesRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 w-full">
      {INDICES.map((idx, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          whileHover={{ y: -2 }}
          className="bg-[#191C21] border border-[#262C34] hover:border-[#323944] rounded-2xl p-4 flex flex-col justify-between transition-all"
        >
          <span className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase mb-1 block">
            {idx.name}
          </span>
          <span className="text-lg font-bold text-white tracking-tight font-mono">
            {idx.value}
          </span>
          <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold mt-1 font-mono">
            <ArrowUpRight size={13} strokeWidth={2.5} />
            <span>{idx.change}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
