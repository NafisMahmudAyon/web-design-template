import React from 'react';
import { ArrowRight, Sun, Compass } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function OceanBannerSection({ onOpenCart }) {
  return (
    <section className="relative overflow-hidden bg-[#0a4b5c] text-white py-20 lg:py-28 border-y-4 border-[#0a4b5c]">
      {/* Background Masked Ocean Wave Image */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <img
          src={HERO_ASSETS.oceanWave}
          alt="Ocean Wave"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full">
              <Sun className="w-4 h-4 text-[#f7c948]" />
              <span className="font-script text-2xl text-[#b8ff00] font-bold tracking-wide">
                see you at the cooler
              </span>
            </div>

            <h2 className="font-display-title text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight">
              TAKE IT WHEREVER <br />
              <span className="text-[#b8ff00]">THE SUN GOES.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Made for beach days, post-surf cooldowns, mountain summits, and long afternoon pauses. Packaged in 100% infinitely recyclable aluminum cans.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCart}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-black text-sm px-8 py-4 rounded-full tracking-wider transition-all duration-200 shadow-xl transform hover:-translate-y-0.5"
              >
                <span>GET THE 4-FLAVOR VARIETY PACK ($12.50)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick stats inline */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 border-t border-white/10 text-center lg:text-left">
              <div>
                <span className="font-display-title text-2xl font-black text-[#b8ff00]">100%</span>
                <p className="text-[11px] text-white/70 font-semibold uppercase">Recyclable Can</p>
              </div>
              <div>
                <span className="font-display-title text-2xl font-black text-[#f7c948]">COLD</span>
                <p className="text-[11px] text-white/70 font-semibold uppercase">Pressed Fresh</p>
              </div>
              <div>
                <span className="font-display-title text-2xl font-black text-white">0%</span>
                <p className="text-[11px] text-white/70 font-semibold uppercase">Sugar Added</p>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden border-4 border-[#b8ff00] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85"
                  alt="Summer Ocean Vibe"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#f7c948] text-[#0a4b5c] p-4 rounded-2xl border-2 border-[#0a4b5c] shadow-xl flex items-center space-x-3 transform -rotate-3">
                <Compass className="w-8 h-8 text-[#0a4b5c]" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider block">PACK READY</span>
                  <span className="font-display-title text-lg font-black leading-none">SHIPPED COLD TO YOUR DOOR</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
