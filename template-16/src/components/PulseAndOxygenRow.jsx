import React from 'react';
import { User, MoreVertical } from 'lucide-react';

export default function PulseAndOxygenRow() {
  // Heartbeat rhythm line coordinates
  const pulsePts = [
    { x: 0, y: 35 },
    { x: 25, y: 35 },
    { x: 35, y: 30 },
    { x: 45, y: 40 },
    { x: 55, y: 10 }, // QRS spike
    { x: 65, y: 45 },
    { x: 75, y: 35 },
    { x: 95, y: 35 },
    { x: 110, y: 35 },
    { x: 120, y: 22 },
    { x: 130, y: 42 },
    { x: 140, y: 12 }, // QRS spike
    { x: 150, y: 44 },
    { x: 160, y: 35 },
    { x: 180, y: 35 },
    { x: 195, y: 28 },
    { x: 205, y: 40 },
    { x: 215, y: 6 },  // QRS spike
    { x: 225, y: 44 },
    { x: 235, y: 35 },
    { x: 260, y: 35 },
  ];

  const pulsePath = pulsePts.reduce(
    (acc, p, idx) => (idx === 0 ? `M ${p.x},${p.y}` : `${acc} L ${p.x},${p.y}`),
    ''
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Pulse Rate Card */}
      <div className="mediso-card p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
              <User className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xs font-bold text-gray-900">Pulse Rate</h2>
          </div>
          <button type="button" aria-label="More" className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Big Number */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold text-gray-900">60</span>
          <span className="text-xs font-medium text-gray-400">bpm</span>
        </div>

        {/* Heartbeat ECG wave */}
        <div className="mt-3 h-14 w-full">
          <svg className="w-full h-full" viewBox="0 0 260 50" preserveAspectRatio="none">
            <path
              d={pulsePath}
              fill="none"
              stroke="#1FA075"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] font-medium text-gray-400">
          <span>beats per minute</span>
          <span className="font-semibold text-gray-700">60</span>
        </div>
      </div>

      {/* Blood Oxygen Level Card */}
      <div className="mediso-card p-5 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
              <User className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xs font-bold text-gray-900">Blood oxygen level</h2>
          </div>
          <button type="button" aria-label="More" className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Big Number */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-2xl font-extrabold text-gray-900">98%</span>
          <span className="text-xs font-medium text-gray-400">Normal</span>
        </div>

        {/* Golden Level Bar */}
        <div className="mt-4 mb-2">
          <div className="w-full h-7 bg-gray-100 rounded-lg p-0.5 flex gap-1 items-center">
            {/* Main filled progress block */}
            <div
              className="h-full rounded-md bg-gradient-to-r from-[#A39260] via-[#C9B06B] to-[#DFB94C] transition-all duration-500"
              style={{ width: '92%' }}
            />
            {/* Small trailing indicator block */}
            <div className="h-full w-2 rounded-md bg-[#DFB94C]" />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px] font-medium text-gray-400">
          <span>beats per minute</span>
          <span className="font-semibold text-gray-700">60</span>
        </div>
      </div>
    </div>
  );
}
