import React, { useState } from 'react';
import { User, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CHART_DATA = [
  { day: 'Sat', old: 18, new: 22, heightOld: '36%', heightNew: '44%' },
  { day: 'Sun', old: 24, new: 28, heightOld: '48%', heightNew: '56%' },
  { day: 'Mon', old: 40, new: 45, heightOld: '80%', heightNew: '90%', active: true },
  { day: 'Tue', old: 26, new: 22, heightOld: '52%', heightNew: '44%' },
  { day: 'Wed', old: 34, new: 30, heightOld: '68%', heightNew: '60%' },
  { day: 'Thu', old: 20, new: 24, heightOld: '40%', heightNew: '48%' },
  { day: 'Fri', old: 32, new: 36, heightOld: '64%', heightNew: '72%' },
];

export default function PatientOverviewChart() {
  const [hoveredDay, setHoveredDay] = useState(CHART_DATA[2]); // Default 'Mon'

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
      {/* Card Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <User size={16} />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-display">
            Patient Overview
          </h3>
        </div>

        <div className="flex items-center gap-4">
          {/* Legend */}
          <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-500 text-[11px]">Old Patient</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-slate-500 text-[11px]">New Patient</span>
            </div>
          </div>

          {/* Monthly Dropdown */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
            <Calendar size={13} className="text-slate-400" />
            <span>Monthly</span>
            <ChevronDown size={13} className="text-slate-400" />
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative h-64 w-full flex">
        {/* Y-Axis scale */}
        <div className="flex flex-col justify-between text-[11px] font-medium text-slate-300 pr-4 select-none pb-7">
          <span>50</span>
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>

        {/* Chart Area with Gridlines, Bars & Trendline */}
        <div className="relative flex-1 h-full pb-7">
          {/* Horizontal dotted gridlines */}
          <div className="absolute inset-x-0 top-0 h-[calc(100%-28px)] flex flex-col justify-between pointer-events-none">
            <div className="border-b border-dashed border-slate-100 w-full" />
            <div className="border-b border-dashed border-slate-100 w-full" />
            <div className="border-b border-dashed border-slate-100 w-full" />
            <div className="border-b border-dashed border-slate-100 w-full" />
            <div className="border-b border-dashed border-slate-100 w-full" />
            <div className="border-b border-slate-100 w-full" />
          </div>

          {/* Curved Trendline SVG overlay */}
          <svg
            className="absolute inset-0 w-full h-[calc(100%-28px)] pointer-events-none overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 700 200"
          >
            <path
              d="M 50 140 Q 150 110, 250 35 T 450 85 T 650 65"
              fill="none"
              stroke="#00C48C"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="opacity-70"
            />
          </svg>

          {/* Floating Tooltip Card (Positioned above Mon or hovered day) */}
          {hoveredDay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute z-20 top-2 left-1/2 -translate-x-1/2 md:left-[36%] bg-white/95 backdrop-blur-xs rounded-xl p-3 shadow-lg border border-slate-100 pointer-events-none text-xs"
            >
              <div className="text-[11px] font-bold text-slate-800 mb-1.5 border-b border-slate-100 pb-1">
                April 2024 ({hoveredDay.day})
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex items-center justify-between gap-4 text-slate-500">
                  <span>Old Patient</span>
                  <span className="font-bold text-emerald-600">{hoveredDay.old}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-slate-500">
                  <span>New Patient</span>
                  <span className="font-bold text-amber-500">{hoveredDay.new}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bar Columns Container */}
          <div className="relative h-[calc(100%-28px)] flex items-end justify-around px-2 z-10">
            {CHART_DATA.map((col) => {
              const isHovered = hoveredDay?.day === col.day;
              return (
                <div
                  key={col.day}
                  onMouseEnter={() => setHoveredDay(col)}
                  className="flex flex-col items-center h-full justify-end group cursor-pointer px-2"
                >
                  {/* Dual Bar Pair */}
                  <div className="flex items-end gap-1.5 h-full">
                    {/* Old Patient (Teal/Emerald Bar) */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: col.heightOld }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`w-3.5 sm:w-4.5 rounded-t-lg transition-all ${
                        isHovered ? 'bg-emerald-600 shadow-sm' : 'bg-emerald-500/80 group-hover:bg-emerald-600'
                      }`}
                    />

                    {/* New Patient (Amber/Yellow Bar) */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: col.heightNew }}
                      transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                      className={`w-3.5 sm:w-4.5 rounded-t-lg transition-all ${
                        isHovered ? 'bg-amber-500 shadow-sm' : 'bg-amber-400/80 group-hover:bg-amber-500'
                      }`}
                    />
                  </div>

                  {/* Day Label on X-Axis */}
                  <span className={`absolute -bottom-6 text-xs font-semibold transition-colors ${
                    isHovered ? 'text-slate-900 font-bold' : 'text-slate-400'
                  }`}>
                    {col.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
