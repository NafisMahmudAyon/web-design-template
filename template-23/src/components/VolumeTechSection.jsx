import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video } from 'lucide-react';

export default function VolumeTechSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase leading-tight">
          BUILT FOR VOLUME, TUNED FOR DETAIL.
        </h2>
      </div>

      {/* Tech Collage Grid */}
      <div className="grid grid-cols-12 gap-4 items-stretch">
        {/* Top Left Big Photo */}
        <div className="col-span-12 md:col-span-8 h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/15 relative shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85"
            alt="Player diving on court"
            className="w-full h-full object-cover brightness-90"
          />
        </div>

        {/* Top Right Yellow Balls Stack */}
        <div className="col-span-12 md:col-span-4 h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/15 relative shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=85"
            alt="Tennis balls stack"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Row: Footwork action, Neon Highlight Box, Racket Action */}
        <div className="col-span-6 md:col-span-3 h-48 sm:h-56 rounded-3xl overflow-hidden border border-white/15 relative shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=600&q=85"
            alt="Footwork action"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-6 md:col-span-3 h-48 sm:h-56 rounded-3xl overflow-hidden border border-white/15 relative shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1617083934555-ac7d4fed8824?auto=format&fit=crop&w=600&q=85"
            alt="Court camera setups"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Highlighted Neon Box */}
        <div className="col-span-12 md:col-span-6 bg-vantageNeon rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-black shadow-neon-glow">
          <div className="flex items-center justify-between">
            <Camera className="w-8 h-8 text-black" />
            <span className="font-condensed font-bold text-xs uppercase tracking-widest border border-black px-3 py-1 rounded-full">
              HD AI REPLAY
            </span>
          </div>

          <div>
            <h3 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight leading-none mb-1">
              4 CAMERA ANGLES PER COURT
            </h3>
            <p className="text-xs font-bold font-sans">
              Instant slow-motion replay & stroke breakdown directly on court monitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
