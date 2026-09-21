import React from 'react';
import { CheckCircle2, Globe2, ArrowRight } from 'lucide-react';

export default function GlobalBorderSection({ onOpenTransferModal }) {
  return (
    <section className="py-20 bg-[#eff1e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#0b2416] text-white rounded-3xl border-3 border-[#0b2416] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#bef264]/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-900/60 border border-emerald-700/50 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#bef264]">
                <Globe2 className="w-4 h-4" />
                <span>GLOBAL FINANCIAL RAILS</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase leading-tight tracking-tight">
                ONE ACCOUNT. <br />
                <span className="text-[#bef264]">EVERY BORDER.</span>
              </h2>

              <p className="text-base text-white/80 font-medium leading-relaxed">
                Hold 32 currencies, get local account details in 9 regions, and convert at the real interbank rate whenever you like.
              </p>

              <div className="space-y-3 pt-2 text-sm font-bold text-white/90">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#bef264]" />
                  <span>Multi-currency wallets with instant zero-fee conversion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#bef264]" />
                  <span>Real-time interbank FX exchange rate transparency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#bef264]" />
                  <span>Local payment rails in 150+ global markets</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenTransferModal}
                  className="inline-flex items-center space-x-2 bg-[#bef264] hover:bg-[#aef043] text-[#0b2416] font-extrabold text-xs px-7 py-3.5 rounded-full shadow-md transition-all"
                >
                  <span>CALCULATE TRANSFER RATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Map Graphic Column */}
            <div className="lg:col-span-6">
              <div className="relative bg-emerald-950/60 border border-emerald-800/40 rounded-2xl p-6 sm:p-8 space-y-6">
                
                {/* Simulated World Map Graphic */}
                <div className="relative h-48 sm:h-56 w-full flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-950 to-[#0b2416] border border-emerald-800/30">
                  <svg className="w-full h-full opacity-30 text-emerald-400" fill="currentColor" viewBox="0 0 400 200">
                    <path d="M50 40 Q70 20 100 50 T150 70 T200 40 T250 80 T300 40 T350 70" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M40 100 Q80 140 120 100 T220 120 T320 100 T380 130" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="100" cy="50" r="4" className="animate-ping fill-[#bef264]" />
                    <circle cx="200" cy="80" r="4" className="animate-ping fill-[#bef264]" />
                    <circle cx="300" cy="60" r="4" className="animate-ping fill-[#bef264]" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-xl sm:text-2xl font-black text-[#bef264] tracking-wider uppercase text-center px-4">
                      150+ MARKETS CONNECTED
                    </span>
                  </div>
                </div>

                {/* 4 Counter boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#0b2416] p-3.5 rounded-xl border border-emerald-800/40">
                    <span className="font-display text-xl font-black text-[#bef264] block">32</span>
                    <span className="text-[10px] text-white/70 font-extrabold uppercase">Currencies</span>
                  </div>
                  <div className="bg-[#0b2416] p-3.5 rounded-xl border border-emerald-800/40">
                    <span className="font-display text-xl font-black text-white block">8s</span>
                    <span className="text-[10px] text-white/70 font-extrabold uppercase">Avg. transfer</span>
                  </div>
                  <div className="bg-[#0b2416] p-3.5 rounded-xl border border-emerald-800/40">
                    <span className="font-display text-xl font-black text-[#bef264] block">$0</span>
                    <span className="text-[10px] text-white/70 font-extrabold uppercase">Hidden fees</span>
                  </div>
                  <div className="bg-[#0b2416] p-3.5 rounded-xl border border-emerald-800/40">
                    <span className="font-display text-xl font-black text-white block">9</span>
                    <span className="text-[10px] text-white/70 font-extrabold uppercase">Local IBANs</span>
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
