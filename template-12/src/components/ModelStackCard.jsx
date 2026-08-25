import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function ModelStackCard({ models, activeModelId, setActiveModelId }) {
  return (
    <div className="flex flex-col gap-3 h-full">
      
      {/* Top Search Bar (White Pill in Screenshot) */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-white text-xs font-semibold text-gray-950 placeholder-gray-500 py-3 pl-10 pr-4 rounded-full border border-black/10 shadow-md focus:outline-none"
        />
      </div>

      {/* Vertical 3D Model Stack Card Container (Cards 01, 02, 03 matching Screenshot) */}
      <div className="bg-[#121418] rounded-[32px] p-4 border border-white/10 flex flex-col justify-between flex-1 space-y-3">
        {models.map((m) => {
          const isActive = activeModelId === m.id;
          return (
            <motion.div
              key={m.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveModelId(m.id)}
              className={`relative rounded-[24px] p-3 overflow-hidden border cursor-pointer transition-all flex items-center gap-3 ${
                isActive
                  ? 'bg-white/95 text-gray-950 border-white shadow-xl ring-2 ring-white/30'
                  : 'bg-[#1a1d24] text-white border-white/10 hover:bg-[#20232b]'
              }`}
            >
              {/* Number Badge Pill (01, 02, 03) */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 ${
                isActive ? 'bg-gray-950 text-white' : 'bg-white/10 text-gray-300'
              }`}>
                {m.num}
              </div>

              {/* Graphic Preview Miniature */}
              <div className="w-14 h-14 rounded-2xl bg-[#0f1012] overflow-hidden border border-white/10 shrink-0 flex items-center justify-center">
                <svg className="w-10 h-10" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="35" fill={m.color} />
                  <circle cx="50" cy="50" r="15" fill="#ff5722" />
                </svg>
              </div>

              {/* Title & Specs */}
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold truncate leading-tight">{m.name}</h4>
                <p className={`text-[10px] truncate ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
                  {m.style}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
