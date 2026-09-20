import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const SECTORS = [
  { name: 'Textile', pct: 75, val: '15285', share: '21.04%' },
  { name: 'Miscellaneous', pct: 65, val: '15285', share: '21.04%' },
  { name: 'Engineermig', pct: 55, val: '15285', share: '21.04%' },
  { name: 'Fuel and power', pct: 45, val: '15285', share: '21.04%' },
  { name: 'Bank', pct: 60, val: '15285', share: '21.04%' },
  { name: 'life insurance', pct: 35, val: '15285', share: '21.04%' },
  { name: 'it Sector', pct: 42, val: '15285', share: '21.04%' },
  { name: 'Ceramics section', pct: 28, val: '15285', share: '21.04%' },
  { name: 'Travel &printing', pct: 20, val: '15285', share: '21.04%' },
  { name: 'Corporate bond', pct: 15, val: '15285', share: '21.04%' },
];

export default function SectorStrengthCard() {
  return (
    <div className="bg-[#191C21] border border-[#262C34] rounded-3xl p-6 h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white tracking-wide">
          Strength meter
        </h3>
        <button
          className="text-slate-500 hover:text-slate-300 transition-colors"
          title="Options"
        >
          <MoreHorizontal size={17} />
        </button>
      </div>

      {/* Sector Rows */}
      <div className="space-y-3.5 flex-1">
        {SECTORS.map((sector, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 text-xs group"
          >
            {/* Sector Name */}
            <span className="w-28 text-slate-300 font-medium truncate">
              {sector.name}
            </span>

            {/* Progress Track */}
            <div className="flex-1 h-3 bg-[#131518] rounded-full overflow-hidden p-0.5 border border-[#242A32]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${sector.pct}%` }}
                transition={{ duration: 0.8, delay: i * 0.04, ease: 'easeOut' }}
                className="h-full bg-emerald-500 rounded-full group-hover:bg-emerald-400 transition-colors"
              />
            </div>

            {/* Value & Percentage */}
            <div className="w-28 text-right font-mono text-xs">
              <span className="text-white font-semibold mr-1">{sector.val}</span>
              <span className="text-slate-500 text-[11px]">({sector.share})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
