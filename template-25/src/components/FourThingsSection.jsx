import React, { useState } from 'react';
import { CreditCard, Send, Sliders, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FourThingsSection({ onOpenTransferModal }) {
  const [sendAmount, setSendAmount] = useState('1000.00');
  const rate = 0.9184;
  const receiveAmount = (parseFloat(sendAmount || 0) * rate).toFixed(2);

  return (
    <section className="py-20 bg-[#eff1e8] border-t border-[#0b2416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#0b2416] uppercase leading-tight tracking-tight">
            FOUR THINGS WE DO <br />
            <span className="text-[#0b2416] bg-[#bef264] px-4 py-1 rounded-2xl border-2 border-[#0b2416] inline-block mt-2">
              BETTER THAN ANYONE.
            </span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1: Smart Spending */}
          <div className="bg-white rounded-3xl border-3 border-[#0b2416] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#bef264]/40 text-[#0b2416] flex items-center justify-center font-black">
                <Sliders className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#0b2416] uppercase">
                Smart Spending
              </h3>
              <p className="text-xs sm:text-sm text-[#0b2416]/80 font-medium leading-relaxed">
                Weekly limits you set. VELD nudges before you cross the line, not after.
              </p>
            </div>

            {/* Interactive Budget Mockup */}
            <div className="bg-[#eff1e8] p-4 rounded-2xl border border-[#0b2416]/20 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-gray-600">Dining budget</span>
                <span className="text-[#0b2416] font-black">$310 / $400</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white border border-gray-200 overflow-hidden">
                <div className="h-full bg-[#0b2416] w-[77.5%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                <span>$92 Groceries</span>
                <span>$41 Transit</span>
                <span className="font-black text-emerald-800">$177 Dining</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Global Transfers (Dark Container) */}
          <div className="bg-[#0b2416] text-white rounded-3xl border-3 border-[#0b2416] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-[#bef264] flex items-center justify-center font-black">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#bef264] uppercase">
                Global Transfers
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
                Mid-market rates, upfront pricing, arrival times measured in seconds.
              </p>
            </div>

            {/* Currency Converter Mockup */}
            <div className="bg-emerald-950/80 p-4 rounded-2xl border border-emerald-800/40 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/60 font-bold">You send</span>
                <span className="text-white font-mono font-bold">$ {sendAmount} USD</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-white/10 pt-2">
                <span className="text-white/60 font-bold">They receive</span>
                <span className="text-[#bef264] font-mono font-black text-base">€ {receiveAmount} EUR</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-bold flex justify-between pt-1">
                <span>Arrives in ~8 seconds · $0 fee</span>
                <span>Rate 0.9184</span>
              </div>
            </div>
          </div>

          {/* Feature 3: Custom Cards */}
          <div className="bg-white rounded-3xl border-3 border-[#0b2416] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b2416]/5 text-[#0b2416] flex items-center justify-center font-black">
                <CreditCard className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#0b2416] uppercase">
                Custom Cards
              </h3>
              <p className="text-xs sm:text-sm text-[#0b2416]/80 font-medium leading-relaxed">
                Spin up a virtual card per subscription, set a ceiling, burn it when you're done.
              </p>
            </div>

            {/* Virtual Cards Mockup */}
            <div className="space-y-2">
              <div className="bg-[#eff1e8] p-3 rounded-xl border border-[#0b2416]/10 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-[#0b2416] rounded text-[8px] text-white flex items-center justify-center">
                    4419
                  </div>
                  <div>
                    <span className="text-[#0b2416] block leading-none">Subscriptions</span>
                    <span className="text-[10px] text-gray-500 font-normal">Limit $120 / month</span>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded">
                  Active
                </span>
              </div>

              <div className="bg-[#eff1e8] p-3 rounded-xl border border-[#0b2416]/10 flex items-center justify-between text-xs font-bold">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-4 bg-[#bef264] text-[#0b2416] rounded text-[8px] flex items-center justify-center font-black">
                    5502
                  </div>
                  <div>
                    <span className="text-[#0b2416] block leading-none">Travel</span>
                    <span className="text-[10px] text-gray-500 font-normal">Limit $2,500 / trip</span>
                  </div>
                </div>
                <span className="bg-gray-200 text-gray-700 text-[10px] font-black px-2 py-0.5 rounded">
                  Frozen
                </span>
              </div>
            </div>
          </div>

          {/* Feature 4: Instant Payments */}
          <div className="bg-white rounded-3xl border-3 border-[#0b2416] p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#bef264]/40 text-[#0b2416] flex items-center justify-center font-black">
                <Zap className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-display text-2xl font-black text-[#0b2416] uppercase">
                Instant Payments
              </h3>
              <p className="text-xs sm:text-sm text-[#0b2416]/80 font-medium leading-relaxed">
                Pay anyone by handle, split a bill in a tap, get settled before you leave the table.
              </p>
            </div>

            {/* Split Bill Notification Widget */}
            <div className="bg-[#eff1e8] p-4 rounded-2xl border border-[#0b2416]/20 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Lena avatar"
                  className="w-10 h-10 rounded-full object-cover border border-[#0b2416]"
                />
                <div>
                  <h4 className="text-xs font-black text-[#0b2416]">Paid @lenaw</h4>
                  <p className="text-[10px] text-gray-500 font-bold">Dinner split · 4 people</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-display text-base font-black text-[#0b2416] block">$28.50</span>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center justify-end space-x-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                  <span>Completed</span>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
