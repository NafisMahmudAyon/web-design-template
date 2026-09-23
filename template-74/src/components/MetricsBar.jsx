import React from 'react';
import { METRICS } from '../data/skincareData';

export default function MetricsBar() {
  return (
    <section className="w-full py-16 bg-[#1a1c20] text-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {metric.value}
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
