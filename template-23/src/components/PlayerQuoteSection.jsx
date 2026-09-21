import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

export default function PlayerQuoteSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Side Quote (8 cols) */}
        <div className="lg:col-span-8 bg-[#080d14] border border-white/15 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85"
            alt="Alex Cresel player"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shrink-0 ring-2 ring-vantageNeon"
          />

          <div className="space-y-4">
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight leading-snug">
              “I USED TO PRACTISE UNTIL MY SHOTS LOOKED GOOD. HERE I PRACTISE UNTIL THEY HOLD UP WHEN I'M TIRED AND BEHIND.”
            </p>

            <div>
              <h4 className="font-condensed text-lg font-bold text-vantageNeon uppercase tracking-wider">
                ALEX CRESEL
              </h4>
              <p className="text-xs text-gray-400 font-sans">
                Age 17 • Apex Squad (National #24 • Regional Open finalist)
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Neon Lime Ranking Box (4 cols) */}
        <div className="lg:col-span-4 bg-vantageNeon rounded-3xl p-8 flex flex-col justify-between text-black shadow-neon-glow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest font-condensed border border-black px-3 py-1 rounded-full">
              SINCE JOINING
            </span>
            <TrendingUp className="w-6 h-6 text-black" />
          </div>

          <div>
            <div className="font-display text-6xl sm:text-7xl font-extrabold tracking-tight leading-none mb-2">
              +118
            </div>
            <div className="font-condensed text-xl font-bold uppercase tracking-wider">
              RANKING PLACES IN 18 MONTHS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
