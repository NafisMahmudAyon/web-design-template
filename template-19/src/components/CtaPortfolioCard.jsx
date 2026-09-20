import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function CtaPortfolioCard({ onStartClick }) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#05070A] border-t border-white/[0.08] relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl sm:rounded-5xl overflow-hidden bg-gradient-to-b from-[#111722] to-[#080B10] border border-white/15 p-8 sm:p-14 md:p-16 text-center shadow-2xl">
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Headline */}
          <div className="relative z-10 max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
              Turn Your Collection Into A <br />
              High-<span className="italic font-serif text-gold-400">Performance Portfolio</span>
            </h2>
          </div>

          {/* Floating Watch Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 my-8 sm:my-10 max-w-sm sm:max-w-md mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <img
              src="/assets/cta-watch-floating.jpg"
              alt="Luxury timepiece illuminated with golden rim light"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* CTA Action Button & Caption */}
          <div className="relative z-10 max-w-xl mx-auto">
            <button
              onClick={onStartClick}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-semibold text-xs sm:text-sm tracking-wider shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <span>Start Building Your Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="mt-6 text-xs text-gray-400 font-sans leading-relaxed">
              Track market trends, manage assets, discover investment opportunities, and maximize returns with the complete luxury watch investment platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
