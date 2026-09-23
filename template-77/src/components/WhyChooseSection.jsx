import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Building2, ArrowUpRight } from 'lucide-react';
import { whyChooseItems } from '../data/elevateData';

export default function WhyChooseSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = {
    Trophy,
    Target,
    Building2,
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-[#182623] tracking-tight font-display max-w-xl mx-auto"
          >
            Why Athletes Choose Elevate Camp
          </motion.h2>
        </div>

        {/* 3 Sage Green Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseItems.map((item, idx) => {
            const Icon = icons[item.icon] || Trophy;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                /* Zero CLS Spacing Stability */
                className={`h-[220px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#2E5B53] text-white shadow-xl -translate-y-1'
                    : 'bg-[#CDE1DC] text-[#182623] shadow-xs'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed opacity-80">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : 'opacity-40'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
