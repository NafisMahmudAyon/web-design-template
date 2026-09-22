import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, DollarSign } from 'lucide-react';

export default function CtaBanner({ onGetStarted }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* The Meadow Floating Banner */}
        <div className="relative rounded-3xl overflow-hidden py-20 px-6 sm:px-12 text-center hero-cta-bg shadow-2xl">
          
          {/* Floating Currency Illustration Notes */}
          <div className="absolute -left-6 bottom-4 w-32 h-20 opacity-80 rotate-12 pointer-events-none hidden sm:block">
            <div className="w-full h-full rounded-xl bg-emerald-800/80 text-emerald-100 p-2 border border-emerald-400/40 shadow-xl flex items-center justify-between">
              <span className="text-xs font-bold font-mono">$100</span>
              <DollarSign className="w-8 h-8 opacity-40" />
            </div>
          </div>

          <div className="absolute -right-6 top-8 w-36 h-20 opacity-80 -rotate-12 pointer-events-none hidden sm:block">
            <div className="w-full h-full rounded-xl bg-emerald-800/80 text-emerald-100 p-2 border border-emerald-400/40 shadow-xl flex items-center justify-between">
              <span className="text-xs font-bold font-mono">$100</span>
              <DollarSign className="w-8 h-8 opacity-40" />
            </div>
          </div>

          {/* Sparkles */}
          <div className="absolute top-8 left-[20%] text-white/80 animate-pulse">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-8 right-[25%] text-white/70 animate-pulse">
            <Sparkles className="w-5 h-5" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/40 text-xs font-bold text-[#141814] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              <span>Start Growing Today</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141814] tracking-tight leading-tight">
              Grow Your Money with Confidence
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-800 mt-3 max-w-lg mx-auto font-medium leading-relaxed">
              Smart tools to save more, invest smarter, and stay in control of your money.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#141814] text-white text-xs font-bold shadow-xl hover:bg-black transition-all focus:outline-none"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </motion.button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
