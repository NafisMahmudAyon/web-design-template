import React from 'react';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';

export const SalesOverviewGauge = ({ onOpenDetails }) => {
  // 18 ticks distributed across a 180-degree semi-circle
  const totalTicks = 18;
  const activeTicksCount = Math.round(totalTicks * 0.708); // 13 ticks

  // Color palette for the orange gradient arc
  const activeColors = [
    '#EA580C', // 1
    '#EA580C', // 2
    '#F97316', // 3
    '#F97316', // 4
    '#FB923C', // 5
    '#FB923C', // 6
    '#FB923C', // 7
    '#FBA257', // 8
    '#FCAE6B', // 9
    '#FDBA74', // 10
    '#FDC88E', // 11
    '#FED7AA', // 12
    '#FEE1BD', // 13
  ];

  return (
    <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-boltshift flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900">
          Sales Overview
        </h2>

        <button
          type="button"
          onClick={onOpenDetails}
          aria-label="More options"
          className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Radial Gauge Meter */}
      <div className="relative flex flex-col items-center justify-center pt-2 pb-6">
        <div className="relative w-64 h-36 flex items-center justify-center overflow-visible">
          <svg viewBox="0 0 260 140" className="w-full h-full overflow-visible">
            {Array.from({ length: totalTicks }).map((_, i) => {
              // Angle from 180 deg (left) to 0 deg (right)
              const angleDeg = 185 - (i * (190 / (totalTicks - 1)));
              const angleRad = (angleDeg * Math.PI) / 180;

              const rInner = 88;
              const rOuter = 118;

              const cx = 130;
              const cy = 132;

              const x1 = cx + rInner * Math.cos(angleRad);
              const y1 = cy - rInner * Math.sin(angleRad);
              const x2 = cx + rOuter * Math.cos(angleRad);
              const y2 = cy - rOuter * Math.sin(angleRad);

              const isActive = i < activeTicksCount;
              const color = isActive ? (activeColors[i] || '#F97316') : '#F1F5F9';

              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth="11"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Value Display in Inner Arch */}
          <div className="absolute bottom-1 flex flex-col items-center justify-center text-center">
            <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              70.8%
            </span>
            <span className="text-xs font-semibold text-slate-400 mt-0.5">
              Sales Growth
            </span>
          </div>
        </div>
      </div>

      {/* Bottom 2 Mini KPI Tiles */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
        {/* Number of Sales */}
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-slate-400">
            Number of Sales
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-lg font-black text-slate-900">
              2,343
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center gap-0.5">
              <span>4.5%</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-slate-400">
            Total Revenue
          </span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-lg font-black text-slate-900">
              $30.9k
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-white flex items-center gap-0.5">
              <span>4.5%</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
