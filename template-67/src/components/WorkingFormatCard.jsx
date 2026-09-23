import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { WORKING_FORMAT_DATA } from '../data/drankData';

export default function WorkingFormatCard() {
  // Generate radial rays for the burst donut gauge
  const totalRays = 72;
  const cx = 100;
  const cy = 100;
  const innerR = 48;
  const outerR = 76;

  const rays = Array.from({ length: totalRays }).map((_, i) => {
    const angle = (i * 360) / totalRays - 90; // Start from top
    const rad = (angle * Math.PI) / 180;
    const x1 = cx + innerR * Math.cos(rad);
    const y1 = cy + innerR * Math.sin(rad);
    const x2 = cx + outerR * Math.cos(rad);
    const y2 = cy + outerR * Math.sin(rad);

    // Color gradient across the circle:
    // Left (180°-300°): Mint green -> White
    // Right (0°-180°): White -> Bronze/Amber
    let stroke = '#10b981';
    if (i < 20) {
      stroke = '#7ae2a4'; // Green / mint
    } else if (i < 42) {
      stroke = '#e5e7eb'; // Silver / white
    } else {
      stroke = '#c59d79'; // Bronze / rose
    }

    return { x1, y1, x2, y2, stroke, key: i };
  });

  return (
    <div className="bg-[#12131a] rounded-[32px] p-5 border border-[#1f212c] shadow-lg flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-white tracking-wide">Working format</h3>
        <button
          type="button"
          aria-label="Format options"
          className="w-7 h-7 rounded-full hover:bg-[#1a1c27] text-[#6d7085] hover:text-white flex items-center justify-center transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Radial Gauge Center Section */}
      <div className="relative flex items-center justify-center my-2">
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-md">
          {rays.map((ray) => (
            <line
              key={ray.key}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke={ray.stroke}
              strokeWidth="2.2"
              strokeLinecap="round"
              className="transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </svg>

        {/* 456 Days Counter placed at lower right inside the widget */}
        <div className="absolute right-4 bottom-2 text-right">
          <p className="text-lg font-bold text-white tracking-tight leading-tight">
            {WORKING_FORMAT_DATA.days}
          </p>
          <p className="text-[10px] text-[#717489] font-medium leading-none">Days</p>
        </div>
      </div>

      {/* Bottom Breakdown Table */}
      <div className="flex flex-col gap-2 pt-2 border-t border-[#1a1c26]">
        {WORKING_FORMAT_DATA.breakdown.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-xs py-1 px-1 rounded-lg hover:bg-[#171923] transition-colors"
          >
            {/* Label with colored dot */}
            <div className="flex items-center gap-2.5 w-24">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-[#a4a7bc] font-medium">{item.label}</span>
            </div>

            {/* Count */}
            <div className="text-[#74778c] text-[11px] font-mono">
              {item.count}
            </div>

            {/* Percentage */}
            <div className="text-white font-semibold text-xs text-right w-10">
              {String(item.percentage).padStart(2, '0')}%
            </div>

            {/* More */}
            <button
              type="button"
              className="text-[#5b5e72] hover:text-white transition-colors"
            >
              <MoreHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
