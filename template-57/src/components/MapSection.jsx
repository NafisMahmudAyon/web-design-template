import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Navigation, Compass, Layers } from 'lucide-react';
import { mapSectionData } from '../data/evergreenData';

export const MapSection = ({ onFindNearest }) => {
  const [activePin, setActivePin] = useState(0);

  const pins = [
    { id: 1, name: 'Dream Home 😊', top: '48%', left: '46%', price: '$3.5M' },
    { id: 2, name: 'Eco Lodge 🌲', top: '28%', left: '72%', price: '$2.4M' },
    { id: 3, name: 'Lake Chalet 🌊', top: '68%', left: '26%', price: '$4.1M' }
  ];

  return (
    <section className="py-20 bg-white text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stylized Minimalist Map Card */}
          <div className="lg:col-span-7">
            <div className="relative h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border border-slate-200 bg-[#E8ECE9] shadow-lg">
              {/* Map SVG Canvas with Street Grid & Green Parkland Polygons */}
              <svg
                className="w-full h-full object-cover"
                viewBox="0 0 700 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background base */}
                <rect width="700" height="440" fill="#EBF0EC" />

                {/* Parkland Greens */}
                <path
                  d="M120 50 C180 80, 240 40, 290 90 C340 140, 260 210, 210 240 C160 270, 90 220, 60 160 Z"
                  fill="#D4E7D6"
                  opacity="0.9"
                />
                <path
                  d="M380 180 C440 160, 520 200, 570 250 C620 300, 560 380, 480 390 C400 400, 360 340, 340 280 Z"
                  fill="#D4E7D6"
                  opacity="0.8"
                />
                <path
                  d="M480 40 C540 30, 620 60, 650 110 C680 160, 630 190, 570 180 Z"
                  fill="#DFEDE1"
                  opacity="0.9"
                />

                {/* River / Waterway */}
                <path
                  d="M0 320 C120 300, 200 360, 310 330 C420 300, 540 380, 700 360"
                  stroke="#C6DCE4"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Secondary Roads */}
                <path d="M0 120 L700 120" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M0 220 L700 220" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M0 300 L700 300" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M160 0 L160 440" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M340 0 L340 440" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M520 0 L520 440" stroke="#FFFFFF" strokeWidth="5" />

                {/* Diagonal Highways */}
                <path d="M40 0 L400 440" stroke="#FDE68A" strokeWidth="7" opacity="0.85" />
                <path d="M260 0 L660 440" stroke="#F59E0B" strokeWidth="5" opacity="0.75" />
                <path d="M60 440 L500 0" stroke="#FFFFFF" strokeWidth="8" />

                {/* Subtle Area Labels */}
                <text x="90" y="100" fill="#78967D" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                  Dominos Forest Reserve
                </text>
                <text x="410" y="240" fill="#78967D" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                  Fountain Reflecting Pool
                </text>
                <text x="320" y="70" fill="#8CA391" fontSize="10" fontFamily="sans-serif">
                  North Highland Ave
                </text>
                <text x="40" y="390" fill="#8CA391" fontSize="10" fontFamily="sans-serif">
                  Carolina Science Park
                </text>
              </svg>

              {/* Interactive Pins */}
              {pins.map((pin, idx) => {
                const isActive = activePin === idx;
                return (
                  <div
                    key={pin.id}
                    style={{ top: pin.top, left: pin.left }}
                    onClick={() => setActivePin(idx)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  >
                    {/* Pulsing radar circle */}
                    {isActive && (
                      <div className="absolute inset-0 -m-3 rounded-full bg-brandLime/40 animate-ping pointer-events-none" />
                    )}

                    {/* Pin Graphic */}
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-brandDark shadow-md flex items-center justify-center text-slate-800 transition-transform group-hover:scale-110">
                        <MapPin className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                      </div>

                      {/* Pill Label */}
                      <div
                        className={`mt-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-md whitespace-nowrap transition-all duration-300 ${
                          isActive
                            ? 'bg-brandLime text-brandDark scale-105 ring-2 ring-brandDark'
                            : 'bg-white text-slate-800 border border-slate-200'
                        }`}
                      >
                        <span>{pin.name}</span>
                        {isActive && <span className="ml-1.5 text-[10px] opacity-80">({pin.price})</span>}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Map Floating Control Pill */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-white/90 backdrop-blur-md shadow border border-slate-200 text-xs">
                <button
                  onClick={() => setActivePin((prev) => (prev + 1) % pins.length)}
                  className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-colors flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3 text-brandDark" />
                  <span>Next Pin</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
              {mapSectionData.headline}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed mb-8">
              {mapSectionData.description}
            </p>
            <button
              onClick={() => onFindNearest?.()}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-brandDark hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
            >
              <span>{mapSectionData.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
