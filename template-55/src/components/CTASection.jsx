import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ctaBannerData } from '../data/finoraData';

export default function CTASection({ onOpenGetStarted }) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] overflow-hidden min-h-[440px] sm:min-h-[480px] flex flex-col items-center justify-center text-center p-8 sm:p-14 shadow-xl border border-sky-200/60 bg-gradient-to-b from-[#BAE6FD] via-[#E0F2FE] to-[#D1FAE5]"
        >
          {/* Subtle Floating Sparkles */}
          <span className="absolute top-10 left-12 text-2xl text-sky-500 opacity-60">✦</span>
          <span className="absolute top-20 right-16 text-3xl text-emerald-500 opacity-50">✦</span>

          {/* Centered Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/90 text-xs font-semibold text-gray-800 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <span>{ctaBannerData.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-gray-950 tracking-tight leading-[1.1] font-display whitespace-pre-line">
              {ctaBannerData.headline}
            </h2>

            <p className="mt-4 text-xs sm:text-base text-gray-700 font-normal max-w-lg leading-relaxed">
              {ctaBannerData.subtitle}
            </p>

            <button
              onClick={onOpenGetStarted}
              className="mt-8 px-8 py-3.5 rounded-full bg-gray-950 hover:bg-black text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom Flower Meadow */}
          <div className="absolute inset-x-0 bottom-0 h-28 overflow-hidden pointer-events-none opacity-60">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
              alt="Meadow foreground"
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
