import React from 'react';
import { PARTNERS } from '../data/salehouseData';

export default function BrandMarquee() {
  return (
    <section className="w-full py-12 bg-white border-y border-gray-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="flex items-center justify-around flex-wrap gap-8 sm:gap-12"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          {PARTNERS.map((brand, idx) => (
            <div
              key={idx}
              className="text-gray-900 font-black tracking-widest text-lg sm:text-xl uppercase opacity-75 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <span className="group-hover:text-[#0052ff] transition-colors">
                {brand.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
