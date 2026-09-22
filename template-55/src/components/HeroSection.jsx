import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CreditCard, CheckCircle2, DollarSign, Wallet, Shield } from 'lucide-react';
import { heroData } from '../data/finoraData';

export default function HeroSection({ onOpenTransferModal }) {
  const [transferAmount, setTransferAmount] = useState('2,640');
  const [toggleActive, setToggleActive] = useState(true);

  return (
    <section id="home" className="relative w-full min-h-[96vh] lg:min-h-[104vh] flex flex-col justify-between pt-28 sm:pt-36 overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#F0FDF4]/70 to-[#FAFAF9]">
      
      {/* Ambient Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <span className="absolute top-32 left-[12%] text-2xl text-sky-400 opacity-60 animate-pulse">✦</span>
        <span className="absolute top-48 right-[15%] text-xl text-sky-500 opacity-70 animate-pulse delay-700">✦</span>
        <span className="absolute top-72 left-[8%] text-3xl text-emerald-400 opacity-40">✦</span>
        <span className="absolute top-80 right-[10%] text-2xl text-sky-300 opacity-50">✦</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8">
        
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-xs font-semibold text-gray-800 shadow-xs mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-500" />
          <span>{heroData.badge}</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-[66px] font-bold text-gray-950 tracking-tight leading-[1.08] font-display whitespace-pre-line"
        >
          {heroData.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl mx-auto"
        >
          {heroData.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={onOpenTransferModal}
            className="px-8 py-3.5 rounded-full bg-gray-950 hover:bg-black text-white font-bold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>{heroData.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Financial Glass Cards Over Meadow */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full mt-10 sm:mt-14 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
          
          {/* Card 1: Saving (This Month) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-[28px] bg-white/95 backdrop-blur-xl border border-white/80 shadow-float-widget text-gray-900"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-950">{heroData.savingCard.title}</span>
              <span className="text-xs text-gray-400 font-medium">{heroData.savingCard.period}</span>
            </div>

            <div className="mt-4 space-y-3">
              {heroData.savingCard.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between p-2.5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs font-semibold text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-950 font-display">{item.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Quick Transfer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-[28px] bg-white/95 backdrop-blur-xl border border-white/80 shadow-float-widget text-gray-900"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm font-bold text-gray-950">{heroData.transferCard.title}</span>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-gray-400" />
                <span>{heroData.transferCard.cardType}</span>
                <span className="font-bold text-gray-900 ml-1">{heroData.transferCard.balance}</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Enter amount</span>
                <div className="text-xl font-extrabold text-gray-950 font-display flex items-baseline">
                  <span>$</span>
                  <input
                    type="text"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="w-24 bg-transparent font-extrabold text-gray-950 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Interactive Switch Toggle */}
              <button
                type="button"
                onClick={() => setToggleActive(!toggleActive)}
                className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                  toggleActive ? 'bg-sky-500 justify-end' : 'bg-gray-300 justify-start'
                }`}
              >
                <motion.div layout className="w-5 h-5 rounded-full bg-white shadow-sm" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Flower Meadow Bottom Foreground */}
      <div className="relative w-full h-36 sm:h-48 mt-auto overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          alt="Lush green meadow with bright daisies"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent" />
      </div>

    </section>
  );
}
