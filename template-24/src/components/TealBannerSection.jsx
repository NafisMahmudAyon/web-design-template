import React from 'react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';

export default function TealBannerSection({ onOpenCart }) {
  return (
    <section className="bg-[#0a4b5c] text-white py-16 lg:py-24 relative overflow-hidden border-y-4 border-[#0a4b5c]">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#b8ff00]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#f7c948]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
          <Zap className="w-4 h-4 text-[#b8ff00]" />
          <span className="font-script text-2xl text-[#b8ff00] font-bold tracking-wide">
            daily botanical boost
          </span>
        </div>

        <h2 className="font-display-title text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-tight">
          POUR A LITTLE <span className="text-[#b8ff00]">GOOD ENERGY</span> INTO YOUR AFTERNOON.
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mt-4 font-medium">
          Whether you need a mid-day refresh, a post-workout recovery sip, or an elevated non-alcoholic evening drink, VERDA is always ready.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenCart}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-black text-sm px-8 py-4 rounded-full tracking-wider transition-all duration-200 shadow-xl transform hover:-translate-y-0.5"
          >
            <span>BUILD YOUR CUSTOM 12-PACK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
