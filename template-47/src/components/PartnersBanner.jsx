import React from 'react';
import { motion } from 'framer-motion';
import { PARTNER_LOGOS } from '../data/agroviaData';

export const PartnersBanner = () => {
  return (
    <section id="partners" className="py-12 bg-agro-cream border-b border-agro-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Label */}
          <div className="text-xs font-semibold text-agro-muted max-w-[180px] leading-tight text-center md:text-left">
            Trusted by <span className="text-agro-dark font-bold">thousand companies</span> in the world
          </div>

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {PARTNER_LOGOS.map((partner, idx) => (
              <div
                key={idx}
                className="text-sm sm:text-base font-black tracking-widest text-agro-dark/80 hover:text-agro-forest transition-colors flex items-center gap-1.5 cursor-pointer select-none"
              >
                <span>{partner.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
