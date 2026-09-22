import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';

export default function GlobalBankingBanner({ onCreateAccount }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Full-width Royal Blue Cloudscape Banner */}
        <div className="relative rounded-[36px] overflow-hidden finexa-blue-banner text-white p-8 sm:p-14 shadow-2xl">
          
          {/* Subtle Ambient Light */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Headline (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C5FF32] uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Join Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] font-display">
                Global Banking <br />
                Made Easy
              </h2>
            </div>

            {/* Center Portrait Image Card (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80"
                  alt="Global Banking"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />

                {/* Floating $8,246 Pill on Center Portrait */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/25 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-2 text-white text-center shadow-lg w-44">
                  <div className="text-xl font-black font-mono leading-none">$8,246</div>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-gray-200 mt-0.5">
                    <span>Weekly</span>
                    <ChevronDown className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Subtitle & Lime Button (4 cols) */}
            <div className="lg:col-span-4 space-y-6 text-left lg:text-right">
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built.
              </p>
              <div>
                <button
                  onClick={onCreateAccount}
                  className="px-7 py-3 rounded-full bg-[#C5FF32] hover:bg-[#b5f51e] text-[#09182A] font-extrabold text-xs tracking-wide shadow-lg shadow-[#C5FF32]/25 transition-all hover:scale-105"
                >
                  Create Account
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
