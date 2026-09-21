import React from 'react';
import { DATA_PARTNERS } from '../data/mockData';

export default function DataSourcesMarquee() {
  const repeatedPartners = [...DATA_PARTNERS, ...DATA_PARTNERS, ...DATA_PARTNERS];

  return (
    <section className="py-8 bg-[#f4f5f6] border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280]">
          POWERED BY WORLD-CLASS GEOSPATIAL & CLIMATE OBSERVATION NETWORKS
        </p>
      </div>

      <div className="mask-fade-edges relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {repeatedPartners.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 border border-black/5 text-sm font-semibold text-slate-700 shadow-sm hover:scale-105 hover:bg-white transition-all cursor-default"
            >
              <span>{item.logo}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
