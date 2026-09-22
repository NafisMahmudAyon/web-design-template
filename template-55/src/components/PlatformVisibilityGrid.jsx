import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, LineChart, FileText, Blocks, LayoutDashboard, Landmark } from 'lucide-react';
import { platformVisibilityData } from '../data/finoraData';

const cardIcons = {
  'p-1': CreditCard,
  'p-2': LineChart,
  'p-3': FileText,
  'p-4': Blocks,
  'p-5': LayoutDashboard,
  'p-6': Landmark,
};

export default function PlatformVisibilityGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-gray-950" />
            <span>{platformVisibilityData.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
          >
            {platformVisibilityData.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
          >
            {platformVisibilityData.subtitle}
          </motion.p>
        </div>

        {/* 6-Card 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {platformVisibilityData.cards.map((card, idx) => {
            const IconComp = cardIcons[card.id] || CreditCard;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-7 sm:p-8 rounded-[28px] bg-white border border-gray-200/80 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 mb-6">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 tracking-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
