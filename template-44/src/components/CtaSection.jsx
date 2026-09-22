import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CtaSection({ onGetStarted, onContactSales }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-[3rem] bg-gradient-to-b from-[#E9D5FF]/60 via-[#F3E8FF]/40 to-white border border-purple-200/70 p-8 sm:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
              Bring Your Team Together & <br />
              Deliver Better Projects
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-medium">
              Plan smarter, collaborate seamlessly, and track every project from one powerful workspace.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-bold shadow-purple-glow hover:shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onContactSales}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-xs transition active:scale-95"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
