import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Plus, Minus, Zap, Cpu, Layers, BatteryCharging, Network } from 'lucide-react';
import { whyItWorksData } from '../data/greenovaData';

const itemIcons = {
  'item-1': Zap,
  'item-2': Cpu,
  'item-3': Layers,
  'item-4': BatteryCharging,
  'item-5': Network,
};

export default function WhyItWorksSection() {
  const [activeId, setActiveId] = useState('item-2');

  return (
    <section id="why-it-works" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-dashed border-gray-400/80 bg-white/80 text-xs font-semibold text-gray-800 shadow-xs mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-gray-700" />
              <span>{whyItWorksData.sectionTag}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight leading-tight font-display"
            >
              {whyItWorksData.headline}
            </motion.h2>
          </div>

          <div className="lg:col-span-6 flex items-center lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg font-normal"
            >
              {whyItWorksData.description}
            </motion.p>
          </div>
        </div>

        {/* Content Layout: Left Accordion & Right Feature Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {whyItWorksData.items.map((item) => {
              const isActive = activeId === item.id;
              const IconComp = itemIcons[item.id] || Zap;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  onClick={() => setActiveId(isActive ? '' : item.id)}
                  className={`rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#F2FBDF] border-lime-300/90 shadow-sm'
                      : 'bg-white/80 hover:bg-white border-gray-200/80 hover:border-gray-300 shadow-xs'
                  }`}
                >
                  <div className="p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-brand-lime text-gray-950 shadow-xs'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-base sm:text-lg font-semibold tracking-tight ${
                          isActive ? 'text-gray-950' : 'text-gray-800'
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'border-gray-950/20 bg-white/80 text-gray-950'
                          : 'border-gray-300 text-gray-400 bg-transparent'
                      }`}
                    >
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <p className="border-t border-lime-300/50 pt-3">
                            {item.shortDesc}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-lime/80 text-gray-950 text-[11px] font-bold">
                              {item.badge}
                            </span>
                            <span className="text-[11px] text-gray-500">
                              Active Autonomous Tuning
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High-Res Solar Farm Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 h-[440px] sm:h-[490px] rounded-[32px] overflow-hidden shadow-card border border-gray-200/80 relative group bg-[#0B1A13]"
          >
            <img
              src={whyItWorksData.image}
              alt="High efficiency solar array"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            {/* Ambient Floating Status Pill */}
            <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-gray-900 border border-white/60 shadow-lg text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-time Output: 4.8 MW</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
