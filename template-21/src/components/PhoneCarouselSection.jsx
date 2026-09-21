import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Apple, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { CAROUSEL_PHONES } from '../data/mockData';

export default function PhoneCarouselSection({ onOpenSignUp }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_PHONES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_PHONES.length) % CAROUSEL_PHONES.length);
  };

  const activePhone = CAROUSEL_PHONES[activeIndex];

  return (
    <section id="carousel" className="py-24 bg-[#0b0d0e] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            A smarter, simpler way to manage your investments.
          </h2>
        </div>

        {/* 5-Phone Horizontal Slider Track */}
        <div className="relative py-8 flex items-center justify-center min-h-[420px]">
          <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
            {CAROUSEL_PHONES.map((phone, idx) => {
              const isFeatured = idx === activeIndex;
              const distance = Math.abs(idx - activeIndex);

              return (
                <motion.div
                  key={phone.id}
                  onClick={() => setActiveIndex(idx)}
                  animate={{
                    scale: isFeatured ? 1 : 0.82,
                    opacity: isFeatured ? 1 : Math.max(0.3, 0.7 - distance * 0.2),
                    y: isFeatured ? 0 : 20,
                  }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  /* Fixed width keeps track geometry completely stable on hover */
                  className={`w-64 sm:w-72 bg-[#0e1012] border-4 ${
                    isFeatured ? 'border-[#00e699] shadow-neon-emerald z-20' : 'border-white/15 z-10 cursor-pointer hover:border-white/40'
                  } rounded-[40px] p-5 shadow-2xl relative overflow-hidden shrink-0 flex flex-col justify-between h-[380px] sm:h-[400px]`}
                >
                  {/* Phone Notch */}
                  <div className="w-24 h-3.5 bg-black rounded-b-xl mx-auto mb-3" />

                  {/* Phone Screen Header */}
                  <div className="flex items-center justify-between text-xs text-gray-300 border-b border-white/10 pb-2">
                    <span className="font-bold text-white text-[11px]">{phone.screenType}</span>
                    <span className="text-[10px] text-[#00e699] font-bold">Zypto App</span>
                  </div>

                  {/* Balance Showcase */}
                  <div className="my-auto py-4 text-center space-y-2">
                    <span className="text-[11px] text-gray-400 block font-mono">Current Balance</span>
                    <span className="font-display text-3xl font-bold text-white tracking-tight">{phone.balance}</span>
                    <span className="inline-block text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                      {phone.change}
                    </span>
                  </div>

                  {/* Phone Screen Buttons */}
                  <div className="grid grid-cols-2 gap-2 text-center text-[10px] pt-3 border-t border-white/10">
                    <div className="py-2 rounded-xl bg-white/10 text-white font-bold">Cash Flow</div>
                    <div className="py-2 rounded-xl bg-[#00e699] text-black font-bold">Credit Score</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Subtitle & Carousel Navigation Arrow Buttons */}
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-sm sm:text-base text-gray-400 font-sans">
            {activePhone.subtitle}
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus:outline-none"
              aria-label="Previous Phone Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-gray-400">
              0{activeIndex + 1} / 0{CAROUSEL_PHONES.length}
            </span>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus:outline-none"
              aria-label="Next Phone Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* App Store Download Badges */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenSignUp}
              className="px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
            >
              <Apple className="w-4 h-4 fill-white" />
              <span>Download on App Store</span>
            </button>
            <button
              onClick={onOpenSignUp}
              className="px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
