import React from 'react';
import { Radio, PieChart, Sparkles, Bell, ArrowUpRight, TrendingUp } from 'lucide-react';

export default function BentoFeaturesSection() {
  return (
    <section id="bento" className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
            EVERYTHING YOUR MONEY ASKS FOR, <br />
            <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
              IN ONE PLACE.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#0b2416]/80 font-medium">
            Balances, transfers, savings goals and card controls live on a single screen. No tabs to hunt through, no statements to decode.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Large Lifestyle Visual (5 cols) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-white border-3 border-[#0b2416] p-6 shadow-md flex flex-col justify-between min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85"
              alt="Live banking mobile app"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2416]/80 via-transparent to-transparent"></div>

            {/* Overlaid Notification Pill */}
            <div className="relative z-10 self-start bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border-2 border-[#0b2416] shadow-xl flex items-center space-x-3 max-w-xs transform hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl bg-[#bef264] text-[#0b2416] flex items-center justify-center font-bold">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#0b2416]">Card Used In Oslo</h4>
                <p className="text-[10px] text-gray-500 font-bold">2 seconds ago · $42.50 Coffee</p>
              </div>
            </div>

            <div className="relative z-10 text-white space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-[#bef264] tracking-widest block">
                INSTANT VISIBILITY
              </span>
              <h3 className="font-display text-2xl font-black">
                REAL-TIME INSIGHTS ON EVERY TAP
              </h3>
            </div>
          </div>

          {/* Right Bento Cards Container (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Card 2: Live Balances */}
            <div className="bg-white rounded-3xl border-3 border-[#0b2416] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0b2416]/5 text-[#0b2416] flex items-center justify-center font-black mb-4">
                <Radio className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-[#0b2416] mb-2 uppercase">
                  Live Balances
                </h3>
                <p className="text-xs text-[#0b2416]/80 font-medium leading-relaxed">
                  Every transaction lands in under a second, with merchant, category and location attached.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-800">
                <span>0.4s Sync Speed</span>
                <ArrowUpRight className="w-4 h-4 text-[#0b2416]" />
              </div>
            </div>

            {/* Card 3: Auto-Sorted Spending (Dark Card) */}
            <div className="bg-[#0b2416] text-white rounded-3xl border-3 border-[#0b2416] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-[#bef264] flex items-center justify-center font-black mb-4">
                <PieChart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-[#bef264] mb-2 uppercase">
                  Auto-Sorted Spending
                </h3>
                <p className="text-xs text-white/80 font-medium leading-relaxed">
                  Rent, groceries, travel — categorised the moment they hit, no spreadsheets required.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#bef264]">
                <span>100% Automated</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Card 4: Savings That Move On Their Own (Full Width inside 7 col) */}
            <div className="sm:col-span-2 bg-white rounded-3xl border-3 border-[#0b2416] p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-all">
              <div className="space-y-2 flex-1">
                <div className="w-10 h-10 rounded-xl bg-[#bef264]/40 text-[#0b2416] flex items-center justify-center font-black">
                  <TrendingUp className="w-5 h-5 text-emerald-800" />
                </div>
                <h3 className="font-display text-xl font-black text-[#0b2416] uppercase">
                  Savings That Move On Their Own
                </h3>
                <p className="text-xs text-[#0b2416]/80 font-medium leading-relaxed max-w-sm">
                  Round-ups, salary splits and goal rules run quietly in the background at 4.1% APY.
                </p>
              </div>

              {/* Bar Graph Mockup */}
              <div className="w-full sm:w-48 bg-[#eff1e8] p-4 rounded-2xl border border-[#0b2416]/20 space-y-2">
                <span className="text-[10px] font-extrabold uppercase text-gray-500 block">
                  SAVED THIS MONTH
                </span>
                <span className="font-display text-xl font-black text-[#0b2416] block">
                  $642.18
                </span>
                <div className="flex items-end space-x-1.5 h-12 pt-2">
                  <div className="flex-1 bg-[#bef264] h-[50%] rounded-t border border-[#0b2416]/30"></div>
                  <div className="flex-1 bg-[#bef264] h-[70%] rounded-t border border-[#0b2416]/30"></div>
                  <div className="flex-1 bg-[#bef264] h-[40%] rounded-t border border-[#0b2416]/30"></div>
                  <div className="flex-1 bg-[#0b2416] h-[95%] rounded-t"></div>
                  <div className="flex-1 bg-[#bef264] h-[80%] rounded-t border border-[#0b2416]/30"></div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
