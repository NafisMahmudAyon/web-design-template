import React from 'react';
import { LOGOS } from '../data/mockData';

export default function LogoMarquee() {
  return (
    <section className="py-8 bg-[#eff1e8] border-t border-b border-[#0b2416]/10 overflow-hidden">
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,_black_10%,_black_90%,transparent_100%)]">
        <div className="flex space-x-12 sm:space-x-16 animate-scroll hover:[animation-play-state:paused] w-max items-center">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="font-display text-2xl sm:text-3xl font-black text-[#0b2416]/40 hover:text-[#0b2416] transition-colors cursor-pointer tracking-wider"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
