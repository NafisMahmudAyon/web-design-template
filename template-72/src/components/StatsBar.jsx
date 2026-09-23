import React from 'react';
import { METRICS } from '../data/wildlingData';

export default function StatsBar() {
  return (
    <section className="w-full py-16 bg-[#fcf8f5] border-y border-[#2e1d1b]/5 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#2e1d1b]/10">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="pt-6 sm:pt-0 sm:px-6">
              <span className="text-3xl sm:text-4xl font-serif font-black text-[#2e1d1b] block mb-1">
                {metric.value}
              </span>
              <span className="text-xs text-[#2e1d1b]/60 font-medium tracking-wide">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
