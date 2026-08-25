import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function GetInspiredCard({ onOpenInspiration }) {
  return (
    <div className="bg-white text-gray-950 rounded-[32px] p-5 shadow-xl border border-black/10 flex flex-col justify-between h-full group">
      
      {/* Top Header Row with Expand Circle Button ◯ */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-extrabold uppercase tracking-widest font-display text-gray-950">
          Get Inspired
        </h3>

        <button 
          onClick={onOpenInspiration}
          className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center text-gray-800 hover:bg-gray-950 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-xs font-bold">◯</span>
        </button>
      </div>

      {/* Stacked Preview Art Cards */}
      <div 
        onClick={onOpenInspiration}
        className="relative h-28 rounded-2xl overflow-hidden bg-gray-900 border border-gray-200 cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5722] via-[#2196f3] to-[#4caf50] opacity-80 group-hover:scale-105 transition-transform duration-500" />
        
        <div className="absolute inset-0 p-3 flex flex-col justify-end bg-black/40">
          <span className="text-[10px] font-bold uppercase text-white tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" /> Community Trending
          </span>
          <p className="text-xs font-bold text-white truncate">Neon Cyberpunk Sentinel 4K</p>
        </div>
      </div>

    </div>
  );
}
