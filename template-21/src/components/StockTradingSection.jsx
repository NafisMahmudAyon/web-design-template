import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Flag, BarChart2, TrendingUp } from 'lucide-react';

export default function StockTradingSection({ onOpenSignUp }) {
  const [hoveredCandle, setHoveredCandle] = useState(null);

  const candles = [
    { time: '13:00', open: 36.3, close: 36.5, high: 36.55, low: 36.25, isGreen: true },
    { time: '14:00', open: 36.5, close: 36.35, high: 36.52, low: 36.3, isGreen: false },
    { time: '15:00', open: 36.35, close: 36.48, high: 36.5, low: 36.32, isGreen: true },
    { time: '16:00', open: 36.48, close: 36.42, high: 36.5, low: 36.38, isGreen: false },
    { time: '17:00', open: 36.42, close: 36.58, high: 36.6, low: 36.4, isGreen: true },
    { time: '18:00', open: 36.58, close: 36.52, high: 36.62, low: 36.5, isGreen: false },
  ];

  const marketBars = [
    { label: 'BTC', total: 55, cyanPct: 60, purplePct: 40 },
    { label: 'ATOM', total: 35, cyanPct: 75, purplePct: 25 },
    { label: 'XRP', total: 48, cyanPct: 40, purplePct: 60 },
    { label: 'TRX', total: 42, cyanPct: 70, purplePct: 30 },
    { label: 'BNB', total: 60, cyanPct: 50, purplePct: 50 },
    { label: 'Other', total: 50, cyanPct: 65, purplePct: 35 },
  ];

  return (
    <section id="trade" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Feature Card 1: Traditional Stocks */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#121417] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Side: Candlestick Chart Widget */}
        <div className="lg:col-span-6 bg-[#0e1012] border border-white/10 rounded-2xl p-5 shadow-inner">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Positions</span>
              <span className="text-xl font-bold font-mono text-white">$36.5k</span>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              ▲ +2.4% NASDAQ
            </span>
          </div>

          {/* Interactive Candlesticks SVG */}
          <div className="relative h-44 w-full">
            <div className="flex justify-between items-end h-full pt-4 pb-6 px-2">
              {candles.map((c, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCandle(i)}
                  onMouseLeave={() => setHoveredCandle(null)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center h-28 w-6">
                    {/* Wick Line */}
                    <div className="w-[2px] bg-gray-500 h-full absolute" />
                    {/* Candle Body */}
                    <div
                      className={`w-3.5 rounded-sm z-10 transition-all ${
                        c.isGreen ? 'bg-[#00e699] shadow-neon-emerald' : 'bg-purple-500 shadow-neon-purple'
                      } ${hoveredCandle === i ? 'scale-125' : ''}`}
                      style={{ height: `${(c.close / 36.6) * 70}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono mt-2">{c.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="lg:col-span-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 text-blue-400 border border-blue-500/30 text-xs font-semibold">
            <Flag className="w-3.5 h-3.5" />
            <span>Only available in 🇺🇸 USA</span>
          </span>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
            Trade traditional stocks available for U.S. users only.
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed font-sans">
            U.S. clients can now invest commission-free in over 11,000 stocks and ETFs directly through the Kraken app.
          </p>

          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Feature Card 2: xStocks */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#121417] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Side: Description */}
        <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Availability: Geo restrictions apply</span>
          </span>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
            xStocks: Your direct access to U.S. markets
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed font-sans">
            With xStocks, you can trade 60 U.S. stock tokens like Apple and NVIDIA instantly. Not available to users in the U.S.
          </p>

          <button
            onClick={onOpenSignUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00e699] text-black font-bold text-xs hover:bg-[#34d399] transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Side: Stacked Bar Chart Widget */}
        <div className="lg:col-span-6 bg-[#0e1012] border border-white/10 rounded-2xl p-5 shadow-inner order-1 lg:order-2">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
            <div>
              <span className="text-xs text-gray-400 font-semibold block">Market Liquidity</span>
              <span className="text-xl font-bold font-mono text-white">$60k Total</span>
            </div>
            <button className="text-xs font-bold text-[#00e699] hover:underline">Add Asset +</button>
          </div>

          <div className="h-44 w-full flex items-end justify-between px-2 pt-4 pb-2">
            {marketBars.map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-7 bg-gray-800 rounded-t-lg overflow-hidden flex flex-col justify-end" style={{ height: `${bar.total}%` }}>
                  <div className="bg-[#00e699] w-full" style={{ height: `${bar.cyanPct}%` }} />
                  <div className="bg-purple-500 w-full" style={{ height: `${bar.purplePct}%` }} />
                </div>
                <span className="text-[10px] text-gray-400 font-mono">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
