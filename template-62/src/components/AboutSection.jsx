import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/homelyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Text & Checkpoints (spans 6) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold tracking-widest text-[#C88C48] uppercase mb-3">
              {aboutData.label}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight leading-tight mb-6">
              {aboutData.title}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-sans">
              {aboutData.paragraph1}
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8 font-sans">
              {aboutData.paragraph2}
            </p>

            {/* Checkpoint list */}
            <div className="space-y-3.5 w-full">
              {aboutData.checkpoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C88C48] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-neutral-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Craftsman Home Visual (spans 6) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden h-[380px] sm:h-[460px] shadow-2xl border border-neutral-200/80 group"
          >
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury cedar craftsman architectural home"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-extrabold px-4 py-2 rounded-full shadow-md">
                Craftsman Timber Residence
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
