import React from 'react';
import { Apple, Play, Sparkles } from 'lucide-react';

export default function DownloadAppSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-[#0369a1] text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-sky-200 block">
              | Download App For Free |
            </span>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Achieve Your Financial <br />
              Goals With Confidence
            </h2>

            <p className="text-base text-white/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Plan, schedule, and analyze social media content from one dashboard. Grow faster with data-driven insights.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-slate-900 transition-all"
              >
                <Apple className="w-6 h-6 fill-white" />
                <div className="text-left">
                  <span className="text-[9px] font-bold text-gray-400 block uppercase leading-none">Download on the</span>
                  <span className="font-display text-sm font-black leading-none">App Store</span>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-2xl border border-white/20 shadow-xl hover:bg-slate-900 transition-all"
              >
                <Play className="w-6 h-6 fill-white text-white" />
                <div className="text-left">
                  <span className="text-[9px] font-bold text-gray-400 block uppercase leading-none">GET IT ON</span>
                  <span className="font-display text-sm font-black leading-none">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Mobile App Visual */}
          <div className="lg:col-span-5 relative">
            <div className="mx-auto max-w-sm bg-slate-900 rounded-[40px] border-4 border-slate-800 shadow-2xl p-4 text-left text-white transform rotate-3 hover:rotate-0 transition-transform">
              <div className="w-24 h-4 bg-black rounded-b-xl mx-auto mb-3"></div>
              
              <div className="bg-sky-600 p-4 rounded-2xl space-y-2">
                <span className="text-[10px] font-bold text-sky-200 uppercase">RIGHT NOW</span>
                <div className="flex justify-between items-baseline font-display text-2xl font-black">
                  <span>289k+</span>
                  <span className="text-xs text-sky-200">Active Users</span>
                </div>
                <div className="flex space-x-2 pt-1 text-[10px]">
                  <span className="bg-white/20 px-2 py-0.5 rounded">43% New Visitor</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded">57% Returning Visitor</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
