import React from 'react';
import { motion } from 'framer-motion';
import { partnerLogos } from '../data/flowzyData';

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
        
        {/* Small colorful badge */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
        </div>

        {/* Narrative Statement */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-500 max-w-3xl mx-auto leading-relaxed">
          We simplify project management with{' '}
          <span className="text-[#0F172A] font-bold">powerful tools</span> that help teams plan,
          collaborate, and deliver work on time. Built for modern teams that value productivity and
          seamless collaboration.
        </h2>

        {/* Brand Logos Row */}
        <div className="mt-14 relative w-full overflow-hidden mask-gradient-x">
          <div className="flex items-center justify-center gap-10 sm:gap-14 flex-wrap text-gray-400">
            {partnerLogos.map((brand, idx) => (
              <div
                key={idx}
                className="text-lg sm:text-xl font-extrabold tracking-tight hover:text-[#0F172A] transition-colors cursor-pointer font-display"
              >
                {brand.text}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
