import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { FARMING_SOLUTIONS } from '../data/terraFarmData';

export const SmarterSolutionsSection = ({ onSelectSolution }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? FARMING_SOLUTIONS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev === FARMING_SOLUTIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block with Carousel Controls - Rule 1B */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terra-subtle border border-terra-border text-xs font-semibold text-terra-forest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-terra-green" />
              <span>Our Services</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
              Smarter Farming <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">
                Solutions
              </span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-terra-muted leading-relaxed">
              We follow a simple process to help farmers grow healthier crops with less effort and smarter decisions.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous service"
              className="w-11 h-11 rounded-full border border-terra-border bg-white flex items-center justify-center text-terra-dark hover:bg-terra-forest hover:text-white hover:border-terra-forest transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next service"
              className="w-11 h-11 rounded-full border border-terra-forest bg-terra-forest text-white flex items-center justify-center hover:bg-terra-dark transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Stable Geometry, Zero CLS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FARMING_SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectSolution && onSelectSolution(sol)}
              className="rounded-3xl bg-white border border-terra-border overflow-hidden flex flex-col group cursor-pointer shadow-terra-soft hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-terra-subtle">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-terra-forest shadow-xs">
                  {sol.category}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold leading-snug drop-shadow-sm group-hover:text-terra-lime transition-colors">
                    {sol.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
