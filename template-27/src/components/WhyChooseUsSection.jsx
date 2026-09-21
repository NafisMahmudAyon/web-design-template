import React, { useState } from 'react';
import { ArrowRightLeft, Users, Zap, CheckCircle2, Download } from 'lucide-react';

export default function WhyChooseUsSection({ onOpenTransfer }) {
  const [amount, setAmount] = useState('1000.00');
  const bdtRate = 121.6065;
  const converted = (parseFloat(amount || 0) * bdtRate).toFixed(2);

  return (
    <section className="py-20 bg-[#f8f9fc] text-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700">
            <span>⚙ Why Choose Us</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
            Everything for Smarter Banking
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Manage your money with speed, security, and confidence.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Real-Time Conversion */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                <ArrowRightLeft className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-black text-[#090d16]">
                Real-Time Conversion
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Live exchange rates instantly
              </p>
            </div>

            <div className="bg-[#f8f9fc] p-4 rounded-2xl border border-gray-200 space-y-3">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase block">From</span>
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="font-display text-base font-black">{amount}</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">🇺🇸 USD</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">To</span>
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="font-display text-base font-black text-emerald-600">{converted}</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">🇧🇩 BDT</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTransfer}
              className="w-full bg-[#090d16] hover:bg-black text-white text-xs font-black py-3 rounded-full transition-colors"
            >
              Exchange Money
            </button>
          </div>

          {/* Card 2: 30M+ Users Worldwide */}
          <div className="bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6 relative overflow-hidden min-h-[380px] group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85"
              alt="Happy user"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent"></div>

            <div className="relative z-10 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-black">
              <Users className="w-5 h-5" />
            </div>

            <div className="relative z-10 space-y-1">
              <h3 className="font-display text-3xl font-black">
                30M+ Users Worldwide
              </h3>
              <p className="text-xs text-sky-100 font-medium leading-relaxed">
                Send and receive money seamlessly across the globe.
              </p>
            </div>
          </div>

          {/* Card 3: Instant Transfers */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-black text-[#090d16]">
                Instant Transfers
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Real-time payments with zero delays
              </p>
            </div>

            <div className="bg-[#f8f9fc] p-4 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-600 text-xs font-black">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transfer Success</span>
              </div>

              <p className="text-[10px] text-gray-500 font-bold">
                Transfer has been successfully done
              </p>

              <div className="space-y-1 text-xs font-bold border-t border-gray-200 pt-2 text-gray-700">
                <div className="flex justify-between text-[11px]">
                  <span>Date:</span>
                  <span className="text-[#090d16]">25 DEC 2026</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>Amount:</span>
                  <span className="text-[#090d16] font-black">$20,000</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Receipt downloaded!')}
              className="w-full border border-gray-300 hover:border-gray-400 text-[#090d16] text-xs font-black py-3 rounded-full flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download receipt</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
