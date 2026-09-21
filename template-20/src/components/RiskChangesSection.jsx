import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Flame, Sliders, ShieldCheck } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function RiskChangesSection({ onOpenDemo }) {
  const [confidencePct, setConfidencePct] = useState(95);
  const [impactLevel, setImpactLevel] = useState('High');

  return (
    <section id="risk-changes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Golden Canyon Landscape with Interactive Intelligence Insight Widget */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl border border-black/10 aspect-square flex items-center justify-center">
            {/* Background canyon image */}
            <img
              src={HERO_ASSETS.canyonGolden}
              alt="Golden Canyon Risk Landscape"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Overlay Intelligence Insight Widget Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                <span className="font-bold text-gray-900 text-base">Intelligence Insight</span>
                <button
                  onClick={onOpenDemo}
                  className="text-xs font-semibold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  <span>View Intelligence</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-4">Flood risk increased across 14 Southeast Asia assets.</p>

              {/* Radial Target Graphic */}
              <div className="flex items-center justify-center py-4 relative">
                <div className="w-36 h-36 rounded-full border-4 border-emerald-100 flex items-center justify-center relative">
                  <div className="w-28 h-28 rounded-full border-4 border-amber-100 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-4 border-red-200 bg-gradient-to-tr from-red-50 to-emerald-50 flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8 text-emerald-600 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <div>
                    <p className="text-xs font-bold text-emerald-900">{confidencePct}%</p>
                    <p className="text-[10px] text-emerald-700">Confidence</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-600" />
                  <div>
                    <p className="text-xs font-bold text-red-900">{impactLevel}</p>
                    <p className="text-[10px] text-red-700">Potential Impact</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Title & Text */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#18191c] tracking-tight leading-tight"
          >
            Risk Changes. Your Intelligence Should Too.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#525860] leading-relaxed"
          >
            Monitor changing environmental conditions and receive alerts when new risks emerge across the locations that matter most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#18191c] text-white text-base font-medium hover:bg-black transition-all shadow-md group"
            >
              <span>Explore Live Intelligence</span>
              <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#18191c] transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
