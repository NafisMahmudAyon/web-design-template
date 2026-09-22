import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onStartTrial, onRequestDemo }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Deep Royal Blue Banner */}
        <div className="relative rounded-[36px] overflow-hidden finexa-hero-bg text-white p-10 sm:p-16 text-center shadow-2xl">
          
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5FF32] text-[11px] font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Join Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display">
              Smarter Decisions, <br />
              Better Finance
            </h2>

            <p className="text-xs sm:text-sm text-blue-100 max-w-lg mx-auto leading-relaxed">
              Manage cash flow, track performance, and gain real time financial insights from one powerful platform.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <button
                onClick={onStartTrial}
                className="px-7 py-3.5 rounded-full bg-[#C5FF32] hover:bg-[#b5f51e] text-[#09182A] font-extrabold text-xs tracking-wide shadow-lg shadow-[#C5FF32]/25 inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Start Free trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onRequestDemo}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wide border border-white/15 transition-all hover:scale-105"
              >
                Request a Demo
              </button>
            </div>

            {/* Payment Partners strip */}
            <div className="pt-10 border-t border-white/10 mt-8">
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-4">
                Trusted by 5,000+ finance teams worldwide
              </div>
              <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap text-white/70 text-sm font-bold font-display">
                <span>Payoneer</span>
                <span>7wise</span>
                <span>stripe</span>
                <span>PayPal</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
