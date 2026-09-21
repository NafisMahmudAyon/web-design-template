import React from 'react';
import { Instagram, Sparkles } from 'lucide-react';
import { INSTAGRAM_PHOTOS } from '../data/mockData';

export default function InstagramGridSection() {
  return (
    <section className="py-16 bg-[#eae6df] border-t border-[#0a4b5c]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5 mb-3">
          <Instagram className="w-4 h-4 text-emerald-800" />
          <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
            community gallery
          </span>
        </div>
        <h2 className="font-display-title text-3xl sm:text-5xl font-black text-[#0a4b5c] uppercase tracking-tight">
          FOLLOW THE FRESH @VERDADRINKS
        </h2>
      </div>

      {/* Infinite Horizontal Gallery with Faded Edges Masking */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,_black_10%,_black_90%,transparent_100%)]">
        <div className="flex space-x-6 animate-scroll hover:[animation-play-state:paused] w-max">
          {[...INSTAGRAM_PHOTOS, ...INSTAGRAM_PHOTOS].map((photo, i) => (
            <div
              key={i}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-[#0a4b5c] flex-shrink-0 group cursor-pointer shadow-md"
            >
              <img
                src={photo}
                alt={`Instagram highlight ${i}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0a4b5c]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram className="w-8 h-8 text-[#b8ff00] transform group-hover:scale-110 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
