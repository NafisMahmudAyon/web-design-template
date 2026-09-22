import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Sprout } from 'lucide-react';
import { SMART_SOLUTIONS } from '../data/agroviaData';

export const SmartSolutionsCardsSection = ({ onSelectSolution }) => {
  return (
    <section className="py-24 sm:py-32 bg-agro-cream border-t border-agro-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agro-subtle border border-agro-border text-xs font-semibold text-agro-forest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-agro-green" />
              <span>Smart Farming</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-agro-dark leading-tight">
              Smart Solutions for <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-agro-forest">Modern Farming</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-agro-muted leading-relaxed">
              We empower farmers with intelligent tools and data-driven insights to increase yields, reduce costs, and build a more sustainable agricultural future.
            </p>
          </div>
        </div>

        {/* 3 Large Cards Grid - Adhering to Rule 1A with Stable Height and Zero CLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SMART_SOLUTIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectSolution && onSelectSolution(item)}
              className="rounded-3xl bg-white border border-agro-border overflow-hidden flex flex-col group cursor-pointer shadow-card-soft hover:shadow-xl transition-all duration-300"
            >
              {/* Card Media Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-agro-subtle">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Tag Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-agro-dark border border-white/40 shadow-sm">
                  <Sprout className="w-3 h-3 text-agro-forest" />
                  <span>{item.tag}</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-agro-dark group-hover:text-agro-forest transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-agro-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-agro-border flex items-center justify-between text-xs font-bold text-agro-forest group-hover:text-agro-green transition-colors">
                  <span>Explore Feature</span>
                  <div className="w-8 h-8 rounded-full bg-agro-subtle flex items-center justify-center text-agro-forest group-hover:bg-agro-lime group-hover:text-agro-forest transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
