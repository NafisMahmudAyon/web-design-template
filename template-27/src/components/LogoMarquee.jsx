import React from 'react';
import { LOGOS } from '../data/mockData';

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-[#f8f9fc] border-t border-b border-gray-200 overflow-hidden text-center">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">
        Trusted by fast growing companies around the world
      </p>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,_black_10%,_black_90%,transparent_100%)]">
        <div className="flex space-x-12 sm:space-x-16 animate-scroll hover:[animation-play-state:paused] w-max items-center">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="font-display text-2xl sm:text-3xl font-black text-gray-400 hover:text-[#090d16] transition-colors cursor-pointer tracking-wider"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
