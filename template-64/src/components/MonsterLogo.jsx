import React from 'react';

export default function MonsterLogo({ className = 'h-8', withText = true, textClass = 'text-xl' }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Stylized Glowing Ribbon M Emblem */}
      <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(37,229,117,0.75)]"
        >
          <path
            d="M8 38C8 26 12 10 18 10C24 10 21 34 26 34C31 34 32 18 36 18C40 18 41 28 41 38"
            stroke="url(#monster-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="monster-gradient" x1="8" y1="10" x2="41" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#25E575" />
              <stop offset="0.5" stopColor="#34D399" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {withText && (
        <span className={`font-display font-extrabold tracking-tight text-white ${textClass}`}>
          monster<span className="text-[#25E575]">Devs</span>
        </span>
      )}
    </div>
  );
}
