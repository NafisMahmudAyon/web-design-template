import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Waves, Anchor } from 'lucide-react';

export default function ManifestoSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7] border-b border-[#0F1E1B]/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Technical Top Mark */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-[#0F1E1B]/10 shadow-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#009E96]" />
          <span className="font-mono text-xs text-[#0F1E1B] font-semibold tracking-widest uppercase">
            [TIDELINE MANIFESTO // 2026]
          </span>
          <span className="font-mono text-xs text-[#009E96] font-bold">(20 26)</span>
        </motion.div>

        {/* Large Display Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F1E1B] tracking-tight leading-[1.18] max-w-4xl mx-auto"
        >
          "We don't just shape surfboards; we curate the{' '}
          <span className="text-[#009E96] underline decoration-wavy decoration-[#009E96]/30 underline-offset-8">
            seamless connection
          </span>{' '}
          between human momentum and oceanic energy."
        </motion.h2>

        {/* Subtitle & Triple Pillars */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-[#5B6B67] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Each Tideline hull is born from the union of computational wave dynamics and the tactile
          feel of hand-sanded glasswork. Built to last generations of salt and sunlight.
        </motion.p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-6 rounded-2xl bg-white border border-[#0F1E1B]/5 shadow-sm hover:border-[#009E96]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#009E96]/10 text-[#009E96] flex items-center justify-center mb-4">
              <Waves className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0F1E1B]">Adaptive Flow</h4>
            <p className="mt-1 text-xs text-[#5B6B67] leading-relaxed">
              Rocker lines configured to trim through flat sections and bite on steep, pitching drops.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#0F1E1B]/5 shadow-sm hover:border-[#009E96]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#009E96]/10 text-[#009E96] flex items-center justify-center mb-4">
              <Anchor className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0F1E1B]">Bio-Composite Core</h4>
            <p className="mt-1 text-xs text-[#5B6B67] leading-relaxed">
              Recycled EPS blanks laminated with plant-derived bio-resins for optimal flex memory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#0F1E1B]/5 shadow-sm hover:border-[#009E96]/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-[#009E96]/10 text-[#009E96] flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-base text-[#0F1E1B]">Precision Glassing</h4>
            <p className="mt-1 text-xs text-[#5B6B67] leading-relaxed">
              Hand-feathered 4oz + 6oz S-glass layups providing dent resistance without deadening feel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
