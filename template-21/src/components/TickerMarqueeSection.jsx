import React from 'react';
import { CRYPTO_TICKERS_ROW1, CRYPTO_TICKERS_ROW2 } from '../data/mockData';

export default function TickerMarqueeSection() {
  const row1Repeated = [...CRYPTO_TICKERS_ROW1, ...CRYPTO_TICKERS_ROW1, ...CRYPTO_TICKERS_ROW1];
  const row2Repeated = [...CRYPTO_TICKERS_ROW2, ...CRYPTO_TICKERS_ROW2, ...CRYPTO_TICKERS_ROW2];

  return (
    <section id="markets" className="py-20 bg-[#0b0d0e] border-y border-white/10 overflow-hidden space-y-12">
      <div className="text-center max-w-2xl mx-auto px-4 space-y-2">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Instantly buy and sell crypto
        </h2>
        <p className="text-sm sm:text-base text-gray-400">
          Use your preferred payment method.
        </p>
      </div>

      {/* Row 1: Marquee Left */}
      <div className="mask-fade-edges relative w-full overflow-hidden">
        <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          {row1Repeated.map((coin, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#121417] border border-white/10 hover:border-[#00e699]/50 transition-all cursor-pointer shadow-md group"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center group-hover:bg-[#00e699] group-hover:text-black transition-colors">
                {coin.symbol.slice(0, 2)}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white leading-none mb-1">{coin.name}</div>
                <div className="text-[11px] font-mono text-gray-400">{coin.symbol}</div>
              </div>
              <div className="text-right pl-2">
                <div className="text-xs font-bold text-white leading-none mb-1">{coin.price}</div>
                <div className="text-[10px] font-semibold text-emerald-400">{coin.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Marquee Right */}
      <div className="mask-fade-edges relative w-full overflow-hidden">
        <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          {row2Repeated.map((coin, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#121417] border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer shadow-md group"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 text-white font-bold text-xs flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                {coin.symbol.slice(0, 2)}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white leading-none mb-1">{coin.name}</div>
                <div className="text-[11px] font-mono text-gray-400">{coin.symbol}</div>
              </div>
              <div className="text-right pl-2">
                <div className="text-xs font-bold text-white leading-none mb-1">{coin.price}</div>
                <div className="text-[10px] font-semibold text-emerald-400">{coin.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
