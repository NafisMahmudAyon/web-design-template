import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { partnersData } from '../data/finoraData';

export default function PartnersMarquee() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  ];

  return (
    <section className="py-10 bg-[#FAFAF9] border-b border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Avatars & 4.9 Stars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {avatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Client"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
              ))}
              <div className="w-9 h-9 rounded-full bg-gray-950 text-white font-bold text-[11px] flex items-center justify-center border-2 border-white">
                {partnersData.userCount}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-800 block mt-0.5">
                {partnersData.rating}
              </span>
            </div>
          </div>

          {/* Right: Brand Logos Row */}
          <div className="flex items-center flex-wrap justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
            {partnersData.logos.map((logo) => (
              <span
                key={logo}
                className="text-base sm:text-lg font-bold text-gray-800 tracking-tight font-display hover:text-gray-950 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
