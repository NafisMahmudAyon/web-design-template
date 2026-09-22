import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';

export default function GlobalBankingBanner({ onCreateAccount }) {
  const [filter, setFilter] = useState('Weekly');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-[3rem] bg-gradient-to-b from-[#1242B3] via-[#1A57DC] to-[#256BF5] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Cloud ambient background overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>

          {/* Top Header Row */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-4">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                <span>JOIN US</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white max-w-lg leading-tight">
                Global Banking <br />
                Made Easy
              </h2>
            </div>

            <div className="md:max-w-sm space-y-4">
              <p className="text-sm text-white/85 leading-relaxed font-medium">
                Track spending, plan budgets, and manage your money effortlessly with intelligent financial tools built.
              </p>

              <div>
                <button
                  onClick={onCreateAccount}
                  className="px-6 py-3 rounded-full bg-[#B5F52C] hover:bg-[#A4EB1B] text-slate-950 text-xs sm:text-sm font-extrabold shadow-lime-glow hover:shadow-lg transition active:scale-95"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Visual Arched Frame in Center with Smiling Young Man & Floating $8,246 */}
          <div className="relative z-10 flex justify-center pt-4">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Arched Photo Container */}
              <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white/25 shadow-2xl bg-gradient-to-b from-blue-300/40 to-blue-900/80 aspect-[3/3.8] relative">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=85"
                  alt="Young professional banking easily"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A57DC]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Glass Pill: $8,246 Weekly */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-white/80 px-6 py-3 rounded-2xl shadow-xl text-slate-900 flex flex-col items-center gap-1 z-20 min-w-[170px]"
              >
                <span className="text-2xl font-extrabold tracking-tight font-display text-slate-900">
                  $8,246
                </span>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-full"
                  >
                    <span>{filter}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-1 bg-white border border-slate-200 rounded-xl p-1 shadow-lg z-30 text-xs">
                      {['Daily', 'Weekly', 'Monthly'].map(f => (
                        <button
                          key={f}
                          onClick={() => {
                            setFilter(f);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-center px-3 py-1 rounded-md hover:bg-slate-100"
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
