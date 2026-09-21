import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenAccount }) {
  return (
    <section className="relative overflow-hidden bg-[#eff1e8] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#0b2416] text-[#bef264] rounded-full px-4 py-1.5 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse"></span>
              <span>NO FEES ON THE FIRST 3 MONTHS!</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#0b2416] leading-[0.92] tracking-tight">
              MAKE EVERY <br />
              DOLLAR <br className="hidden sm:block" />
              <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl inline-block mt-2 border-2 border-[#0b2416]">
                MOVE FASTER.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#0b2416]/80 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              One account for spending, saving and sending across 150 markets. Real rates, instant transfers, and a clear view of where your money actually goes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenAccount}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#bef264] hover:bg-[#aef043] text-[#0b2416] font-extrabold text-sm px-8 py-4 rounded-full tracking-wide transition-all duration-200 shadow-md hover:shadow-lg border-2 border-[#0b2416] transform hover:-translate-y-0.5"
              >
                <span>Open Your Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#0b2416] text-white hover:bg-[#123822] font-bold text-sm px-8 py-4 rounded-full tracking-wide transition-all shadow-sm"
              >
                <span>Explore Features</span>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0b2416] font-bold border-t border-[#0b2416]/10">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <span className="font-display text-lg font-black block leading-none text-[#0b2416]">10M+</span>
                  <span className="text-[10px] text-[#0b2416]/70 uppercase tracking-wide">Customers worldwide</span>
                </div>
              </div>

              <div className="h-8 w-px bg-black/10 hidden sm:block"></div>

              <div className="flex items-center space-x-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-[#0b2416]">4.9</span>
                <span className="text-[#0b2416]/60">(128,400 verified reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Dark Container Frame with Portrait Photo */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0b2416] p-4 border-4 border-[#0b2416] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
                  alt="VELD Banking Portrait"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top rounded-2xl filter grayscale contrast-125"
                />

                {/* Overlaid Neon Lime VELD Card */}
                <div className="absolute top-8 right-6 bg-[#bef264] text-[#0b2416] p-5 rounded-2xl shadow-2xl border-2 border-[#0b2416] w-64 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-display text-sm font-black tracking-widest">VELD</span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#0b2416] text-white">
                      PHYSICAL
                    </span>
                  </div>
                  <p className="font-mono text-sm tracking-widest font-black mb-4">
                    4419 •••• •••• 2078
                  </p>
                  <div className="flex justify-between items-end text-[10px] font-extrabold">
                    <span>A. RIVERA</span>
                    <span>08/29</span>
                  </div>
                </div>

                {/* Floating Total Balance Widget at Bottom */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-[#0b2416] p-4 rounded-2xl shadow-xl border border-black/10 space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-gray-500 tracking-wider block">
                        TOTAL BALANCE
                      </span>
                      <span className="font-display text-2xl font-black">
                        $ 18,420.60
                      </span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-full flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+6.2%</span>
                    </span>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-[10px]">
                        ✓
                      </div>
                      <span>Payment From Studio Norte</span>
                    </div>
                    <span className="text-emerald-700 font-extrabold">+$1,250</span>
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
