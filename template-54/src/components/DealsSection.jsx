import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Tag, Percent } from 'lucide-react';
import { dealsData } from '../data/journeoData';

export default function DealsSection({ onSelectDeal }) {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 tracking-tight font-display"
          >
            {dealsData.headline}
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => onSelectDeal && onSelectDeal(dealsData.deals[0])}
            className="px-4 py-2 rounded-full border border-dashed border-gray-400 bg-white hover:bg-gray-50 text-xs sm:text-sm font-semibold text-gray-800 shadow-xs flex items-center gap-1.5 transition-colors"
          >
            <span>{dealsData.seeAllText}</span>
          </motion.button>
        </div>

        {/* 2 Deal Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {dealsData.deals.map((deal, idx) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectDeal && onSelectDeal(deal)}
              className="h-[280px] sm:h-[320px] rounded-[30px] overflow-hidden relative shadow-card hover:shadow-card-hover border border-gray-200/80 cursor-pointer group bg-gray-900"
            >
              {/* Background Media */}
              <img
                src={deal.image}
                alt={deal.description}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

              {/* Deal Card Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                {/* Top Badge */}
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    {deal.tag}
                  </span>
                </div>

                {/* Bottom Content & Discount */}
                <div>
                  <p className="text-xs sm:text-sm text-white/90 max-w-sm leading-relaxed mb-3">
                    {deal.description}
                  </p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-extrabold text-amber-400 tracking-tight font-display drop-shadow-md">
                      {deal.discount}
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      {deal.discountLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
