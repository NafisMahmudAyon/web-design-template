import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Truck, TrendingUp } from 'lucide-react';
import { BUSINESS_IMPACT_CARDS } from '../data/mockData';

export default function BusinessImpactSection({ onOpenDemo }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="business-impact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f5e9] text-[#166534] text-xs font-bold tracking-wide uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span>BUSINESS IMPACT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#18191c] tracking-tight leading-tight"
        >
          Environmental Intelligence Built Around Your Business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-[#525860]"
        >
          Our intelligence platform brings environmental data together and transforms it into actionable insights.
        </motion.p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BUSINESS_IMPACT_CARDS.map((card) => {
          const isHovered = hoveredCardId === card.id;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCardId(card.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              onClick={onOpenDemo}
              className="relative h-[480px] rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl border border-black/10 flex flex-col justify-between transition-all duration-300"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? 'scale-110 brightness-[0.85]' : 'scale-100 brightness-[0.75]'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              </div>

              {/* Top Floating Badge (if any) */}
              {card.floatingBadge && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-md border border-white/80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{card.floatingBadge}</span>
                  </div>
                </div>
              )}

              {/* Tag on Top-Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 text-white/90 backdrop-blur-md border border-white/20">
                  {card.tag}
                </span>
              </div>

              {/* Card Bottom Content Stack */}
              <div className="relative z-10 p-6 sm:p-8 text-white flex flex-col justify-between h-full">
                <div />

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-200 line-clamp-3 leading-relaxed font-sans">
                    {card.description}
                  </p>

                  <div className="pt-4 border-t border-white/20 flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-bold font-sans text-white tracking-tight">
                        {card.statValue}
                      </div>
                      <div className="text-xs text-gray-300">{card.statLabel}</div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
