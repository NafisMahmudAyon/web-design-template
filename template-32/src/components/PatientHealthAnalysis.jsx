import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, MoreHorizontal, ArrowUpRight } from 'lucide-react';

export default function PatientHealthAnalysis({ onSelectSection }) {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#181D17] tracking-tight">
          Patient Health Analysis
        </h2>
      </div>

      {/* Main Content: Left Stats & Right Patient Flow Gauge */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        
        {/* Left Stats Column (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Critical Care Card */}
          <motion.div
            whileHover={{ y: -2 }}
            onClick={() => onSelectSection && onSelectSection('critical-care')}
            className="flex-1 bg-[#F7F8F5] rounded-2xl p-4 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#52734D]/20 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-rose-500 shadow-sm">
                <Heart className="w-5 h-5 fill-rose-50" />
              </div>
              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                ICU / Telemetry
              </span>
            </div>

            <div className="mt-3">
              <p className="text-xs font-semibold text-[#6C7568]">Critical Care</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#181D17]">8</span>
                <span className="text-xs text-[#7A8376] font-medium">Patients</span>
              </div>
            </div>
          </motion.div>

          {/* General Ward Card */}
          <motion.div
            whileHover={{ y: -2 }}
            onClick={() => onSelectSection && onSelectSection('general-ward')}
            className="flex-1 bg-[#F7F8F5] rounded-2xl p-4 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#52734D]/20 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#52734D] shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-[#52734D] bg-[#52734D]/10 px-2 py-0.5 rounded-full">
                Ward 4B
              </span>
            </div>

            <div className="mt-3">
              <p className="text-xs font-semibold text-[#6C7568]">General Ward</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold text-[#181D17]">20</span>
                <span className="text-xs font-bold text-[#52734D]">+2 new today</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Patient Flow Card with Gauge Chart (7 cols) */}
        <div className="md:col-span-7 bg-[#DCE2D8] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#181D17] tracking-tight">
              Patient Flow
            </h3>
            <button 
              title="Options"
              className="w-6 h-6 rounded-lg flex items-center justify-center text-[#4A5246] hover:bg-black/5 transition-colors"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* Donut Gauge Chart */}
          <div className="relative w-full h-44 flex items-center justify-center my-1">
            <svg 
              viewBox="0 0 240 200" 
              className="w-full h-full max-w-[220px]"
            >
              <defs>
                {/* Gold Gradient */}
                <linearGradient id="flowGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D061" />
                  <stop offset="100%" stopColor="#E5B83E" />
                </linearGradient>

                {/* Purple / Lilac Gradient */}
                <linearGradient id="flowLilac" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D8BFD8" />
                  <stop offset="100%" stopColor="#B388B3" />
                </linearGradient>

                {/* Olive Arc Gradient */}
                <linearGradient id="flowOlive" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C8D61" />
                  <stop offset="100%" stopColor="#4A6941" />
                </linearGradient>
              </defs>

              {/* Background Guide Arc */}
              <circle
                cx="120"
                cy="100"
                r="68"
                fill="none"
                stroke="#CAD2C5"
                strokeWidth="18"
                strokeDasharray="320"
                strokeDashoffset="60"
                strokeLinecap="round"
                transform="rotate(-90 120 100)"
                opacity="0.4"
              />

              {/* Top-Left Lilac Segment */}
              <circle
                cx="120"
                cy="100"
                r="68"
                fill="none"
                stroke="url(#flowLilac)"
                strokeWidth="18"
                strokeDasharray="100 327"
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-150 120 100)"
              />

              {/* Top-Right Golden Segment */}
              <circle
                cx="120"
                cy="100"
                r="68"
                fill="none"
                stroke="url(#flowGold)"
                strokeWidth="18"
                strokeDasharray="140 287"
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(-40 120 100)"
              />

              {/* Lower Green Segment */}
              <circle
                cx="120"
                cy="100"
                r="68"
                fill="none"
                stroke="url(#flowOlive)"
                strokeWidth="18"
                strokeDasharray="110 317"
                strokeDashoffset="0"
                strokeLinecap="round"
                transform="rotate(90 120 100)"
              />

              {/* Indicator Needle line */}
              <line
                x1="120"
                y1="100"
                x2="175"
                y2="55"
                stroke="#181D17"
                strokeWidth="1.5"
                opacity="0.25"
              />
            </svg>

            {/* Black Pill Badge "400" on the perimeter */}
            <div className="absolute top-5 right-7 z-10">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="px-2 py-0.5 rounded-full bg-[#181D17] text-white text-[10px] font-extrabold shadow-md cursor-pointer"
                title="Peak Hour Patient Volume: 400"
              >
                400
              </motion.div>
            </div>

            {/* Center Text inside Donut: 900 / 100% Capacity */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-3xl font-extrabold text-[#181D17] tracking-tight leading-none">
                900
              </span>
              <span className="text-[11px] font-semibold text-[#6C7568] mt-1">
                100% Capacity
              </span>
            </div>
          </div>

          {/* Bottom Legend */}
          <div className="flex items-center justify-center gap-6 text-[10px] font-bold text-[#4A5246] pt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#52734D]"></span>
              <span>Current Status</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#8CB86C]"></span>
              <span>Target Health</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
