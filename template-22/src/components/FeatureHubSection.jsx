import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageSquare, Users, ShieldCheck, X } from 'lucide-react';
import { AI_FEATURES } from '../data/mockData';

export default function FeatureHubSection({ onOpenPlanTrip }) {
  const [activeCardId, setActiveCardId] = useState('budget-tracker');
  const [selectedModalFeature, setSelectedModalFeature] = useState(null);

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Our AI simplifies every step of travel planning allowing you.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed"
          >
            Our AI-driven platform analyzes millions of data points to craft personalized itineraries that fit your time budget and interests making travel planning effortless and accurate.
          </motion.p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenPlanTrip}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0b131c] font-bold text-sm hover:bg-gray-200 transition-all shadow-md group"
          >
            <span>View All</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={onOpenPlanTrip}
            className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>✦ Learn More</span>
          </button>
        </div>
      </div>

      {/* 4 Feature Cards Grid - Card Polymorphism & Zero CLS Fixed Container Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AI_FEATURES.map((card) => {
          const isActive = activeCardId === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCardId(card.id)}
              onClick={() => setSelectedModalFeature(card)}
              /* Fixed container height prevents layout shift (Zero CLS) */
              className={`relative h-[440px] rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 shadow-xl border flex flex-col justify-end ${
                isActive ? 'border-cyan-400 shadow-cyan-glow' : 'border-white/10 hover:border-white/30'
              }`}
            >
              {/* Background Photo */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.7]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b131c] via-[#0b131c]/60 to-transparent" />
              </div>

              {/* Top Badge Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-black shadow-lg scale-105'
                      : 'bg-black/60 text-white/90 backdrop-blur-md border border-white/20'
                  }`}
                >
                  {card.badge}
                </span>
              </div>

              {/* Card Content Stack */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Polymorphic Content Drawer */}
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs">
                  <span className="text-gray-300 font-medium">Explore Feature</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-cyan-500 text-black translate-x-1' : 'bg-white/20 text-white'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedModalFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModalFeature(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f1824] text-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden">
                  <img src={selectedModalFeature.image} alt={selectedModalFeature.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1824] via-[#0f1824]/50 to-transparent" />
                  <button
                    onClick={() => setSelectedModalFeature(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 sm:left-8">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500 text-black">
                      {selectedModalFeature.badge}
                    </span>
                    <h3 className="font-display text-3xl font-bold mt-1">{selectedModalFeature.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                  {selectedModalFeature.description}
                </p>

                <div className="bg-white/5 rounded-2xl p-4 text-xs text-gray-300 mb-6 space-y-2">
                  <span className="font-bold text-white block uppercase tracking-wider">AI Platform Engine:</span>
                  <p>{selectedModalFeature.details}</p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedModalFeature(null);
                      onOpenPlanTrip();
                    }}
                    className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Launch AI Feature</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedModalFeature(null)}
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
