import React from 'react';

export default function MarqueeDivider({ reverse = false, text = "LETS BUILD SOMETHING GREAT" }) {
  const repeatedItems = Array(12).fill(text);

  return (
    <div className="w-full bg-[#009E96] py-3.5 sm:py-4.5 overflow-hidden select-none border-y border-teal-600 shadow-sm">
      <div className="mask-marquee w-full flex">
        <div
          className={`flex items-center gap-8 whitespace-nowrap will-change-transform ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        >
          {repeatedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 text-white font-display font-black text-sm sm:text-base md:text-lg tracking-wider uppercase"
            >
              <span>{item}</span>
              <span className="text-white/80 font-mono text-sm sm:text-base">✦</span>
              <span className="text-white/70 font-mono text-xs tracking-widest">[2026]</span>
              <span className="text-white/80 font-mono text-sm sm:text-base">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
