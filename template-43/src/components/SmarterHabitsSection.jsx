import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle2, ChevronDown, Sparkles, TrendingUp } from 'lucide-react';

export default function SmarterHabitsSection({ onStartTrial }) {
  const [spendingFilter, setSpendingFilter] = useState('Weekly');
  const [filterDropdown, setFilterDropdown] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 fill-blue-500" />
              <span>About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display max-w-xl">
              Shaping the future of finance with smarter tools
            </h2>
          </div>

          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built for everyday use.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              Useful Features
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.2]">
              Building smarter financial habits for everyday life
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              We create intuitive financial tools that help people understand, control, and grow their money with confidence.
            </p>

            {/* Key points checklist with green badges */}
            <div className="space-y-3.5 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Key points:
              </span>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Secure and easy-to-use platform
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Data-driven insights for <strong className="text-slate-900 font-bold">smarter decisions</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  Commitment to <strong className="text-slate-900 font-bold">innovation and trust</strong>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={onStartTrial}
                className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition active:scale-95"
              >
                Start Free trial
              </button>
            </div>
          </div>

          {/* Right Column: Professional Portrait + Floating Spending Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Background Desk Portrait */}
            <div className="w-full max-w-lg aspect-[4/4.5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=85"
                alt="Man using smart financial tools"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Overlaid Floating Spending Dashboard Glass Card matching mockup */}
              <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-white/80 shadow-2xl text-slate-900">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Spending</span>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setFilterDropdown(!filterDropdown)}
                      className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-full"
                    >
                      <span>{spendingFilter}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {filterDropdown && (
                      <div className="absolute right-0 mt-1 bg-white border border-slate-200 rounded-xl p-1 shadow-lg z-20 text-xs">
                        {['Daily', 'Weekly', 'Monthly'].map(f => (
                          <button
                            key={f}
                            onClick={() => {
                              setSpendingFilter(f);
                              setFilterDropdown(false);
                            }}
                            className="block w-full text-left px-2.5 py-1 rounded-md hover:bg-slate-100"
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                    $43,435.80
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    +3,435 today
                  </span>
                </div>

                {/* Subtitle & Categories */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">My Spending (Last 30 days)</span>
                    <button className="text-blue-600 hover:underline font-semibold text-[11px]">View all</button>
                  </div>

                  {/* Horizontal Segment Meter */}
                  <div className="h-2 rounded-full bg-slate-100 flex overflow-hidden gap-1">
                    <div className="h-full bg-amber-400 w-[35%]" />
                    <div className="h-full bg-orange-500 w-[25%]" />
                    <div className="h-full bg-blue-600 w-[25%]" />
                    <div className="h-full bg-emerald-500 w-[15%]" />
                  </div>

                  {/* Category Legends */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 pt-1">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>Grocery</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>Food</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>Rent</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Others</span>
                    </div>
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
