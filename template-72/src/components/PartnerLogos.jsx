import React from 'react';
import { LENDERS_PARTNERS } from '../data/wildlingData';

export default function PartnerLogos() {
  return (
    <section className="w-full py-16 bg-white border-b border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2e1d1b]/40">
            SOME OF OUR LENDERS
          </span>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-8 sm:gap-12 opacity-80">
          {LENDERS_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="text-base sm:text-lg font-black tracking-wider text-[#2e1d1b]/60 hover:text-[#2e1d1b] transition-colors cursor-pointer"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
