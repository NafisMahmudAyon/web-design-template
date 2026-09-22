import React from 'react';
import { TRUSTED_LOGOS } from '../data/pollinateData';

export const TrustLogosSection = () => {
  return (
    <section className="py-12 border-t border-b border-slate-100/90 bg-white/60">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          80+ Businesses Trust Our Platform
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
          80+ companies trust us to deliver better email performance—faster, easier, and smarter.
        </p>

        {/* Masked Marquee Container adhering to Rule 1D */}
        <div 
          className="mt-8 overflow-hidden relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {TRUSTED_LOGOS.map((logo, idx) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-slate-700 hover:text-[#FF5520] transition-colors cursor-pointer select-none group"
              >
                <span className="text-base font-bold text-slate-500 group-hover:text-[#FF5520] transition-colors">
                  {logo.icon}
                </span>
                <span className="text-sm font-bold tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
