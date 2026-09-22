import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Check, CreditCard, Coins, Wifi } from 'lucide-react';
import { heroData } from '../data/catalxgData';

export const HeroSection = ({ onOpenTrial, onLearnMore }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-[#FAFAFA] overflow-hidden text-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brandOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => onOpenTrial?.()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandOrange-light border border-brandOrange/20 text-brandOrange text-xs font-semibold cursor-pointer hover:bg-orange-100 transition-colors mb-6 shadow-sm group"
            >
              <span className="w-2 h-2 rounded-full bg-brandOrange animate-pulse" />
              <span className="font-bold text-[11px] uppercase tracking-wider">New</span>
              <span className="text-slate-700">{heroData.badge}</span>
              <ChevronRight className="w-3.5 h-3.5 text-brandOrange transition-transform group-hover:translate-x-0.5" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.12] mb-6"
            >
              {heroData.headline} <br />
              <span className="text-brandOrange">{heroData.headlineHighlight}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-sans"
            >
              {heroData.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => onOpenTrial?.()}
                className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                {heroData.ctaPrimary}
              </button>

              <button
                onClick={() => onLearnMore?.()}
                className="inline-flex items-center gap-1.5 px-5 py-3.5 text-xs font-bold text-slate-700 hover:text-brandOrange transition-colors uppercase tracking-wider group"
              >
                <span>{heroData.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                  alt="Customer 1"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                  alt="Customer 2"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                  alt="Customer 3"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {heroData.socialProofText}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition with Person & Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Person Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md h-[490px] sm:h-[530px] rounded-3xl overflow-hidden bg-gradient-to-b from-amber-50 to-orange-100/50 shadow-2xl border border-slate-200/80"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Fintech user with phone"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Floating Top Left Shield Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute top-8 left-4 sm:left-8 w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 z-20"
            >
              <Check className="w-6 h-6 stroke-[3]" />
            </motion.div>

            {/* Floating Top Right Coins */}
            <motion.div
              initial={{ scale: 0, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute top-12 right-2 sm:right-6 w-12 h-12 rounded-full bg-amber-400 text-amber-900 border-2 border-white shadow-lg flex items-center justify-center font-bold text-lg z-20 animate-bounce"
            >
              🪙
            </motion.div>

            {/* Floating Lime VISA Credit Card */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute top-28 right-0 sm:-right-4 z-30 w-44 sm:w-48 p-4 rounded-2xl bg-brandLime text-slate-900 shadow-xl border border-lime-300"
            >
              <div className="flex items-center justify-between mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-800">
                <span>Credit Card</span>
                <Wifi className="w-3.5 h-3.5 rotate-90" />
              </div>
              <div className="font-mono text-xs font-bold tracking-widest text-slate-900 mb-2">
                **** **** 8789
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-serif font-black text-sm italic tracking-tight">VISA</span>
                <div className="w-3 h-3 rounded-full bg-black/10" />
              </div>
            </motion.div>

            {/* Floating "Total Balance" Card at Bottom Left */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-4 -left-2 sm:-left-6 z-30 w-64 sm:w-72 p-5 rounded-2xl bg-white shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-500">Total Balance</span>
                <span className="text-[10px] font-semibold text-slate-600 px-2 py-0.5 rounded-full bg-slate-100">
                  All Accounts
                </span>
              </div>
              <div className="text-2xl font-extrabold font-display text-slate-900 mb-3">
                {heroData.balanceCard.amount}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Account Type</span>
                  <span className="font-medium text-slate-800 font-mono text-[11px]">
                    Credit Card **** 8789
                  </span>
                </div>
                <div className="px-2 py-1 rounded bg-slate-50 border border-slate-200 font-bold text-[10px] text-orange-600">
                  Payoneer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
