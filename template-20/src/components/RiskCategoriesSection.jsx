import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Shield, Layers, Eye, CheckCircle2, X } from 'lucide-react';
import { RISK_CATEGORIES } from '../data/mockData';

export default function RiskCategoriesSection({ onOpenDemo }) {
  const [activeCardId, setActiveCardId] = useState(null);
  const [selectedModalCard, setSelectedModalCard] = useState(null);

  return (
    <section id="risk-categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#18191c] tracking-tight leading-tight"
          >
            A Clearer View of Environmental Risk.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#525860]"
          >
            Identify the environmental factors that could impact your operations, assets, and long-term decisions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#18191c] text-white text-sm font-medium hover:bg-black transition-all shadow-md group shrink-0"
          >
            <span>Explore Intelligence</span>
            <span className="w-5 h-5 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#18191c] transition-all">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* 4 Cards Grid - Card Polymorphism & Zero CLS Fixed Container Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RISK_CATEGORIES.map((card) => {
          const isActive = activeCardId === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCardId(card.id)}
              onMouseLeave={() => setActiveCardId(null)}
              onClick={() => setSelectedModalCard(card)}
              /* Fixed container height prevents layout shift (Zero CLS) */
              className="relative h-[440px] sm:h-[460px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-md hover:shadow-2xl border border-black/10 flex flex-col justify-end"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.75]'
                  }`}
                />
                {/* Gradient Overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100'
                      : 'bg-gradient-to-t from-black/80 via-black/30 to-black/10 opacity-90'
                  }`}
                />
              </div>

              {/* Active Badge Tag on top-right */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-white text-[#18191c] shadow-lg scale-105'
                      : 'bg-black/50 text-white/90 backdrop-blur-md border border-white/20'
                  }`}
                >
                  {card.badge}
                </span>
              </div>

              {/* Card Content Stack */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Polymorphic Content Drawer (reveals details on active hover without changing card container height) */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>{card.monitoredCount}</span>
                    <span className="font-bold text-emerald-400">Risk: {card.highRiskPct}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/80 group-hover:text-white flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inspect Category</span>
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-white text-[#18191c] translate-x-1' : 'bg-white/20 text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Risk Inspection Modal */}
      <AnimatePresence>
        {selectedModalCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalCard(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#16181b] text-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
              >
                {/* Header Image banner */}
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                  <img src={selectedModalCard.image} alt={selectedModalCard.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16181b] via-[#16181b]/50 to-transparent" />
                  <button
                    onClick={() => setSelectedModalCard(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 sm:left-8">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#22c55e] text-black">
                      {selectedModalCard.badge}
                    </span>
                    <h3 className="font-serif text-3xl font-bold mt-1">{selectedModalCard.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {selectedModalCard.description}
                </p>

                <div className="bg-white/5 rounded-2xl p-4 space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-gray-400">Telemetry Monitoring</span>
                    <span className="font-bold text-white">{selectedModalCard.monitoredCount}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                    <span className="text-gray-400">Baseline Exposure</span>
                    <span className="font-bold text-emerald-400">{selectedModalCard.highRiskPct} High Sensitivity</span>
                  </div>
                  <p className="text-xs text-gray-400 italic pt-1">
                    {selectedModalCard.details}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedModalCard(null);
                      onOpenDemo();
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Simulate Asset Risk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedModalCard(null)}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
