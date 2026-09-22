import React from 'react';
import { partnerBrands } from '../data/cryptoData';

export default function PartnersMarquee() {
  return (
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading <span className="text-[#0B1A1C] font-bold lowercase">companies</span> worldwide
        </p>

        {/* Dual Gradient Edge-Masked Marquee */}
        <div className="relative w-full overflow-hidden mask-gradient-x">
          <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee">
            {[...partnerBrands, ...partnerBrands, ...partnerBrands].map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-gray-400 hover:text-[#0B1A1C] transition-colors cursor-pointer"
              >
                <span className="text-lg sm:text-xl font-black font-display tracking-tight">
                  {brand.symbol}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
