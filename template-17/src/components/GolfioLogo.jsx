import React from 'react';

export default function GolfioLogo({ className = "h-8", variant = "default" }) {
  return (
    <div className={`flex items-center gap-2 select-none cursor-pointer group ${className}`}>
      {/* Dynamic Stylized Golfio Logo */}
      <div className="relative flex items-center">
        <svg className="h-8 w-auto" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Planetary Golf Orbit Ring */}
          <ellipse cx="28" cy="24" rx="20" ry="12" stroke="#E2F844" strokeWidth="2.5" transform="rotate(-25 28 24)" className="transition-all duration-300 group-hover:scale-105" />
          {/* Golf Ball Core */}
          <circle cx="28" cy="24" r="10" fill="#E2F844" fillOpacity="0.2" stroke="#E2F844" strokeWidth="2" />
          <circle cx="25" cy="22" r="1.5" fill="#E2F844" />
          <circle cx="31" cy="21" r="1.5" fill="#E2F844" />
          <circle cx="27" cy="26" r="1.5" fill="#E2F844" />
          {/* Outer Swoosh */}
          <path d="M 8 32 C 14 38, 38 40, 48 30" stroke="#E2F844" strokeWidth="3" strokeLinecap="round" />
          
          {/* "Golfio" Wordmark */}
          <text x="56" y="32" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="28" fill="#E2F844" fontStyle="italic" letterSpacing="-0.5">
            Golf
          </text>
          
          {/* Flag on the 'i' */}
          <path d="M 121 12 L 132 15 L 121 19 Z" fill="#E2F844" />
          <line x1="121" y1="12" x2="121" y2="33" stroke="#E2F844" strokeWidth="2.5" strokeLinecap="round" />

          {/* Letter 'o' */}
          <text x="127" y="32" fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="28" fill="#E2F844" fontStyle="italic" letterSpacing="-0.5">
            o
          </text>
        </svg>
      </div>
    </div>
  );
}
