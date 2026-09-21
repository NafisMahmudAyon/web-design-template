import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Lock, Coins } from 'lucide-react';
import { MARKET_PRICES, ZERO_FEE_FEATURES } from '../data/mockData';

export default function CommissionFreeSection({ onOpenSignUp }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Lock: Lock,
  };

  return (
    <section id="zero-fees" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Top Split Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Header */}
        <div className="lg:col-span-6 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Enjoy commission-free trading with Zypto
          </motion.h2>

          <p className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed">
            Experience zero-fee trading with Zypto. Unlock exclusive perks that make investing smarter and easier.
          </p>

          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border-2 border-[#00e699] text-[#00e699] font-bold text-sm hover:bg-[#00e699] hover:text-black transition-all shadow-neon-emerald group"
          >
            <span>Try Zypto for free</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Side Live Market Rates Box */}
        <div className="lg:col-span-6 bg-[#121417] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/10 pb-3">
            <span className="font-bold text-white uppercase tracking-wider">Top Cryptos</span>
            <span className="text-[#00e699] font-mono">Live Price Data</span>
          </div>

          {MARKET_PRICES.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center">
                  {item.symbol.slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.symbol}</h4>
                  <p className="text-xs text-gray-400">{item.name}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold font-mono text-white text-sm">{item.price}</p>
                <p className={`text-xs font-semibold ${item.isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 3 Zero Trading Fee Feature Cards - Zero CLS Polymorphism */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ZERO_FEE_FEATURES.map((card, idx) => {
          const IconComponent = iconMap[card.icon] || ShieldCheck;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={onOpenSignUp}
              /* Fixed container height prevents height jumps (Zero CLS) */
              className={`h-[240px] bg-[#121417] rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl ${
                isHovered ? 'border-[#00e699] shadow-neon-emerald -translate-y-1' : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#00e699] flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#00e699] bg-[#00e699]/10 px-2.5 py-1 rounded-full border border-[#00e699]/20">
                  {card.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
