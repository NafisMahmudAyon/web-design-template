import React from 'react';
import { ShieldCheck, ArrowRight, Play, CheckCircle2, CreditCard, Send } from 'lucide-react';

export default function HeroSection({ onOpenGetStarted, onOpenTransfer }) {
  return (
    <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 bg-[#f8f9fc] text-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Pill */}
        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-xs font-bold text-gray-700 shadow-sm mb-8">
          <ShieldCheck className="w-4 h-4 text-sky-500" />
          <span>Secure · Fast · No Hidden Fees</span>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-[#090d16] leading-[1.05] tracking-tight max-w-5xl mx-auto">
          The Modern Way to Save, <br />
          Spend & Grow Your Money.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Take control of your finances with one secure platform. Send money, track spending, manage cards, and monitor your balance in real time, anytime, anywhere.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenGetStarted}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#090d16] hover:bg-black text-white font-black text-sm px-8 py-4 rounded-full shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Get Started Free</span>
          </button>

          <button
            onClick={onOpenTransfer}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-[#090d16] border border-gray-300 font-bold text-sm px-8 py-4 rounded-full shadow-sm transition-all"
          >
            <span>See How It Works</span>
          </button>
        </div>

        {/* Hero Mockups Container (Left Photo + Right Wallet Card) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto text-left">
          
          {/* Left Editorial Photo Card (5 cols) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-sky-500 p-4 border-4 border-white shadow-2xl h-[400px] flex flex-col justify-between group">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85"
              alt="Smiling user"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Overlaid Transaction Pills */}
            <div className="relative z-10 space-y-2 self-start mt-4">
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-lg flex items-center justify-between w-60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-black text-xs">
                    HJ
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#090d16]">Henry James</h4>
                    <p className="text-[9px] text-gray-500 font-bold">10:30 AM</p>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-600">+$450.00</span>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-lg flex items-center justify-between w-60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs">
                    CM
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#090d16]">Chris Michael</h4>
                    <p className="text-[9px] text-gray-500 font-bold">10:00 AM</p>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-600">+$250.00</span>
              </div>
            </div>
          </div>

          {/* Right Wallet Interface Card (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 p-8 rounded-3xl shadow-2xl text-white space-y-6 relative overflow-hidden min-h-[400px]">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-black text-xs">
                  N
                </div>
                <span className="font-display text-lg font-black">NexoWallet</span>
              </div>
              <span className="text-xs font-bold text-white/80 bg-white/10 px-3 py-1 rounded-full">
                Monthly ▾
              </span>
            </div>

            {/* Total Balance */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-sky-100 uppercase tracking-wider block">
                Total Balance
              </span>
              <span className="font-display text-4xl font-black block">
                $20,000.00
              </span>
            </div>

            {/* Action Bar */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
              <div className="bg-white/15 hover:bg-white/25 p-3 rounded-xl cursor-pointer transition-colors">
                <Send className="w-5 h-5 mx-auto mb-1 text-sky-200" />
                <span>Top Up</span>
              </div>
              <div className="bg-white/15 hover:bg-white/25 p-3 rounded-xl cursor-pointer transition-colors">
                <Send className="w-5 h-5 mx-auto mb-1 text-sky-200 transform rotate-45" />
                <span>Send</span>
              </div>
              <div className="bg-white/15 hover:bg-white/25 p-3 rounded-xl cursor-pointer transition-colors">
                <CreditCard className="w-5 h-5 mx-auto mb-1 text-sky-200" />
                <span>Pay</span>
              </div>
              <div className="bg-white/15 hover:bg-white/25 p-3 rounded-xl cursor-pointer transition-colors">
                <span className="text-base font-black leading-none block mb-1">•••</span>
                <span>More</span>
              </div>
            </div>

            {/* Spending Limit Indicator */}
            <div className="bg-white text-[#090d16] p-4 rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-gray-500 block">
                  MONTHLY SPENDING LIMIT
                </span>
                <span className="text-xs font-black text-[#090d16]">
                  $1,400.00 <span className="font-normal text-gray-500">spent out of $5,500.00</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-gray-500 block uppercase">Outcome</span>
                <span className="text-xs font-black text-emerald-600">$20,000.00</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
