import React, { useState } from 'react';
import { User, MoreVertical } from 'lucide-react';

export default function BloodPressureCard() {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Systolic line waveform (green) normalized 0 to 600 width, 0 to 120 height
  const systolicPts = [
    { x: 10, y: 55 },
    { x: 30, y: 58 },
    { x: 50, y: 48 },
    { x: 80, y: 55 },
    { x: 110, y: 40 },
    { x: 130, y: 58 },
    { x: 140, y: 35 },
    { x: 160, y: 55 },
    { x: 175, y: 42 },
    { x: 190, y: 60 },
    { x: 210, y: 38 },
    { x: 235, y: 60 },
    { x: 250, y: 48 },
    { x: 275, y: 60 },
    { x: 300, y: 45 },
    { x: 330, y: 58 },
    { x: 360, y: 32 },
    { x: 385, y: 58 },
    { x: 400, y: 38 },
    { x: 420, y: 58 },
    { x: 450, y: 40 },
    { x: 475, y: 62 },
    { x: 500, y: 42 },
    { x: 520, y: 60 },
    { x: 535, y: 45 },
  ];

  // Diastolic line waveform (amber)
  const diastolicPts = [
    { x: 10, y: 95 },
    { x: 35, y: 92 },
    { x: 60, y: 102 },
    { x: 85, y: 98 },
    { x: 120, y: 95 },
    { x: 140, y: 82 },
    { x: 155, y: 98 },
    { x: 175, y: 88 },
    { x: 190, y: 98 },
    { x: 215, y: 92 },
    { x: 240, y: 100 },
    { x: 270, y: 95 },
    { x: 295, y: 104 },
    { x: 320, y: 96 },
    { x: 355, y: 78 },
    { x: 375, y: 98 },
    { x: 395, y: 85 },
    { x: 420, y: 96 },
    { x: 440, y: 90 },
    { x: 470, y: 102 },
    { x: 500, y: 98 },
    { x: 535, y: 80 },
  ];

  const buildPath = (pts) =>
    pts.reduce((acc, p, idx) => (idx === 0 ? `M ${p.x},${p.y}` : `${acc} L ${p.x},${p.y}`), '');

  return (
    <div className="mediso-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
            <User className="w-4 h-4" />
          </div>
          <h2 className="text-sm font-bold text-gray-900">Blood Pressure</h2>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1FA075]" />
              Systolic Pressure
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              Diastolic Pressure
            </span>
          </div>

          <button
            type="button"
            aria-label="More options"
            className="p-1 text-gray-400 hover:text-gray-600 rounded"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Metric Value */}
      <div className="mt-3 flex items-baseline gap-2">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">132/45</h3>
        <span className="text-xs font-medium text-gray-400">mmHg</span>
      </div>

      {/* Dual Waveform Chart */}
      <div className="mt-4 relative">
        <div className="flex">
          {/* Main SVG Graph */}
          <div className="flex-1 h-32 relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 550 120"
              preserveAspectRatio="none"
            >
              {/* Systolic Green Wave */}
              <path
                d={buildPath(systolicPts)}
                fill="none"
                stroke="#1FA075"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Diastolic Amber Wave */}
              <path
                d={buildPath(diastolicPts)}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Y-Axis Values */}
          <div className="w-8 shrink-0 flex flex-col justify-between items-end text-[11px] font-medium text-gray-400 pl-2 pb-2">
            <span>132</span>
            <span>45</span>
          </div>
        </div>

        {/* X-Axis Month Labels */}
        <div className="flex justify-between pr-8 pt-2 text-[11px] font-medium text-gray-400">
          <span>Jun</span>
          <span>Sep</span>
          <span>Dec</span>
        </div>
      </div>
    </div>
  );
}
