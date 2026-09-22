import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { PAYMENT_PARTNERS } from '../data/finexaData';

export default function CtaBanner({ onStartTrial, onRequestDemo }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-[3.5rem] bg-gradient-to-b from-[#091530] via-[#0E275E] to-[#1644A6] text-white p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Ambient lighting glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-white text-white" />
              <span>JOIN US</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
              Smarter Decisions, Better Finance
            </h2>

            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-medium">
              Manage cash flow, track performance, and gain real time financial insights from one powerful platform.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onStartTrial}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B5F52C] hover:bg-[#A4EB1B] text-slate-950 text-xs sm:text-sm font-extrabold shadow-lime-glow hover:shadow-xl transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Start Free trial</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold border border-white/20 backdrop-blur-sm transition active:scale-95"
              >
                Request a Demo
              </button>
            </div>

            {/* Trusted by 5,000+ finance teams worldwide */}
            <div className="pt-12 border-t border-white/15 mt-10">
              <span className="text-xs font-semibold text-white/60 block mb-6 uppercase tracking-wider">
                Trusted by 5,000+ finance teams worldwide
              </span>

              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
                {PAYMENT_PARTNERS.map(partner => (
                  <span key={partner.name} className="text-lg sm:text-xl font-extrabold tracking-tight font-display text-white/90">
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
