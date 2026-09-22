import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

export default function HeroSection({ onCollaborate, onOpenVideo }) {
  return (
    <section id="home" className="px-4 sm:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Massive Hero Photo Container */}
        <div className="relative rounded-[3rem] overflow-hidden min-h-[520px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-14 shadow-2xl">
          {/* Background Container Ship Image */}
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&auto=format&fit=crop&q=85"
            alt="Cargo container ship traversing turquoise ocean"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-105"
          />

          {/* Cinematic Blue & Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-900/40 pointer-events-none" />

          {/* Top Pill */}
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>• Best Support</span>
            </span>
          </div>

          {/* Bottom Content Row */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-20">
            {/* Headline & CTAs */}
            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.05] font-display drop-shadow-md">
                Take Your Shipping <br />
                To The Next Level
              </h1>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-lg font-medium">
                Simplify logistics, reduce costs, and deliver faster with our all-in-one shipping management platform.
              </p>

              <div className="pt-2">
                <button
                  onClick={onCollaborate}
                  className="px-7 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs sm:text-sm font-bold shadow-red-glow hover:shadow-xl transition active:scale-95 flex items-center gap-2"
                >
                  <span>Let's Collaborate</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Video Player Card (matching screenshot 01/04) */}
            <div
              onClick={onOpenVideo}
              className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-3xl p-4 sm:p-5 shadow-2xl cursor-pointer hover:scale-105 transition max-w-xs self-start lg:self-auto group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2.5">
                <span>See how we work</span>
                <span className="text-slate-400 font-mono">01/04</span>
              </div>

              {/* Video Thumbnail Frame */}
              <div className="relative w-48 sm:w-56 aspect-[16/9] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=80"
                  alt="Warehouse operations video"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
