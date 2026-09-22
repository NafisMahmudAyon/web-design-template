import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { topCollections } from '../data/treadlyData';

export default function TopCollectionSection({ onSelectCategory }) {
  const [startIndex, setStartIndex] = useState(0);
  const total = topCollections.length;
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - itemsPerPage : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= total ? 0 : prev + 1));
  };

  const visibleCollections = topCollections.slice(startIndex, startIndex + itemsPerPage);
  if (visibleCollections.length < itemsPerPage) {
    visibleCollections.push(...topCollections.slice(0, itemsPerPage - visibleCollections.length));
  }

  return (
    <section id="top-collections" className="py-16 sm:py-20 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 font-syne tracking-tight">
            Top Collection List
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
              aria-label="Previous collections"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-neutral-600 font-mono tracking-wider">
              {startIndex + 1} / {total}
            </span>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
              aria-label="Next collections"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Photographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleCollections.map((col, idx) => (
              <motion.div
                key={`${col.id}-${startIndex}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onSelectCategory?.(col.title)}
                className="group relative rounded-3xl overflow-hidden h-[380px] sm:h-[440px] border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6 sm:p-8"
              >
                {/* Background Editorial Photo */}
                <img
                  src={col.image}
                  alt={col.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for perfect typography contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Centered / Bottom Info */}
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white font-syne tracking-tight group-hover:text-amber-300 transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-300 mt-1">
                      {col.itemsCount}
                    </p>
                  </div>

                  {/* Hover Arrow Circle */}
                  <div className="w-10 h-10 rounded-full bg-white text-neutral-950 flex items-center justify-center transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
