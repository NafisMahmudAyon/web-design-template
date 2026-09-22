import React from 'react';
import { clientLogos } from '../data/agencyData';

export default function LogosMarquee() {
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-10 border-y border-[#1B2B1F]/40 bg-[#070908] relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Infinite Marquee Track with Dual Gradient Edge Fade */}
        <div className="relative overflow-hidden edge-fade-mask">
          <div className="animate-marquee flex items-center gap-14 sm:gap-20">
            {repeatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors cursor-pointer select-none opacity-60 hover:opacity-100 group"
              >
                <span className="text-xl text-[#25E575] group-hover:scale-125 transition-transform duration-300">
                  {logo.symbol}
                </span>
                <span className="text-sm sm:text-base font-bold tracking-wider uppercase font-display">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
