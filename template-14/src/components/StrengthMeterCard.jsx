import React from 'react';
import { HelpCircle, ArrowUpRight, ArrowDownRight, MoveHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StrengthMeterCard() {
  return (
    <div className="bg-[#191C21] border border-[#262C34] rounded-3xl p-5 flex flex-col justify-between h-full shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-white tracking-wide">
          Strength meter
        </h3>
        <button
          className="text-slate-500 hover:text-slate-300 transition-colors"
          title="Information"
        >
          <HelpCircle size={15} />
        </button>
      </div>

      {/* Radial Semi-Circle Gauge */}
      <div className="relative flex flex-col items-center justify-center my-3">
        <svg
          className="w-48 h-28 overflow-visible"
          viewBox="0 0 200 110"
        >
          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#262C34"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Active Green Arc */}
          <motion.path
            d="M 20 100 A 80 80 0 0 1 145 35"
            fill="none"
            stroke="#22C55E"
            strokeWidth="14"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>

        {/* Center Text inside gauge */}
        <div className="absolute top-12 text-center">
          <span className="block text-sm font-medium text-slate-300">Desk</span>
          <span className="block text-base font-bold text-white tracking-tight">
            Strength
          </span>
        </div>
      </div>

      {/* 2x3 Metric Grid with Arrows */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#242A32] text-xs font-mono">
        {/* Row 1 */}
        <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>28</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </div>
        <div className="flex items-center justify-center gap-1 text-red-400 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>4.28</span>
          <ArrowDownRight size={13} strokeWidth={2.5} />
        </div>
        <div className="flex items-center justify-center gap-1 text-slate-300 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>74</span>
          <MoveHorizontal size={13} strokeWidth={2.5} />
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>2.74</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </div>
        <div className="flex items-center justify-center gap-1 text-red-400 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>78.4</span>
          <ArrowDownRight size={13} strokeWidth={2.5} />
        </div>
        <div className="flex items-center justify-center gap-1 text-slate-300 font-bold py-1 bg-[#15171A] rounded-lg border border-[#22272E]">
          <span>24.54</span>
          <MoveHorizontal size={13} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
