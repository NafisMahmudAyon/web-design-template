import React from 'react';
import { motion } from 'framer-motion';

export const WorldMapImpactSection = () => {
  const pinLocations = [
    { top: '34%', left: '22%' }, // US West
    { top: '38%', left: '32%' }, // US East
    { top: '30%', left: '50%' }, // UK / Europe
    { top: '48%', left: '52%' }, // Mediterranean
    { top: '42%', left: '72%' }, // East Asia
    { top: '56%', left: '78%' }, // Southeast Asia
    { top: '75%', left: '85%' }, // Australia
    { top: '70%', left: '35%' }, // South America
  ];

  return (
    <section className="py-24 bg-[#0D1117] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-300">Who we are?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Collaboration is the key to success.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            We work closely with our clients to understand their unique needs, goals, and challenges.
          </p>
        </div>

        {/* World Map with Dotted Pattern & Glowing Pins */}
        <div className="relative w-full h-80 sm:h-96 my-8 rounded-3xl overflow-hidden flex items-center justify-center">
          {/* Subtle World Map SVG Silhouette */}
          <svg viewBox="0 0 1000 500" className="w-full h-full object-contain opacity-25">
            <path
              d="M150,120 Q180,90 240,110 T320,130 T360,180 T300,240 T240,210 T180,180 Z
                 M250,260 Q270,250 290,290 T300,380 T260,440 T230,360 Z
                 M450,110 Q500,80 560,95 T620,130 T580,190 T500,180 T460,140 Z
                 M480,210 Q540,200 560,260 T580,360 T510,380 T470,280 Z
                 M620,100 Q750,80 840,120 T900,190 T840,250 T750,240 T650,180 Z
                 M750,300 Q840,300 880,360 T830,420 T760,400 T730,340 Z"
              fill="#FFFFFF"
            />
          </svg>

          {/* Dotted Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1.2px,transparent_1.2px)] [background-size:18px_18px] opacity-20 pointer-events-none" />

          {/* Glowing Orange Location Pins */}
          {pinLocations.map((pin, i) => (
            <div
              key={i}
              className="absolute"
              style={{ top: pin.top, left: pin.left }}
            >
              <div className="relative flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-[#FF5520] relative z-10" />
                <span className="w-6 h-6 rounded-full bg-[#FF5520]/30 absolute animate-ping" />
                <span className="w-10 h-10 rounded-full bg-[#FF5520]/15 absolute blur-xs" />
              </div>
            </div>
          ))}
        </div>

        {/* 3 Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 text-center sm:text-left">
          <div>
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
              1500+
            </div>
            <div className="text-xs font-semibold text-slate-400">
              Project Done
            </div>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
              1000+
            </div>
            <div className="text-xs font-semibold text-slate-400">
              Happy Client
            </div>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
              100+
            </div>
            <div className="text-xs font-semibold text-slate-400">
              Employee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
