import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { condoProperties } from '../data/mockData';

export default function DeluxeCondosSection({ onSelectCondo }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? condoProperties.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= condoProperties.length - 2 ? 0 : prev + 1));
  };

  const currentPair = [
    condoProperties[startIndex % condoProperties.length],
    condoProperties[(startIndex + 1) % condoProperties.length]
  ];

  return (
    <section id="deluxe-condos" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      {/* Top Header Row with Title & Slider Arrows */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight max-w-xl"
        >
          Buy a deluxe condo with a <br className="hidden sm:inline" />
          private terrace, walk-in <br className="hidden sm:inline" />
          wardrobe, and laundry area.
        </motion.h2>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-zinc-300 text-zinc-800 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-md"
            aria-label="Previous condos"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-zinc-300 text-zinc-800 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-md"
            aria-label="Next condos"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* 2 Large Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <AnimatePresence mode="wait">
          {currentPair.map((condo, idx) => (
            <motion.div
              key={`${condo.id}-${startIndex}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectCondo && onSelectCondo(condo)}
              className="flex flex-col cursor-pointer group"
            >
              {/* Card Image */}
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[16/13] shadow-xl bg-zinc-900">
                <img
                  src={condo.image}
                  alt={condo.title}
                  className="w-full h-full object-cover zoom-img group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Card Footer Info: Title on Left, Description on Right */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pt-5 px-1">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight group-hover:text-breeze-600 transition-colors">
                  {condo.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed max-w-xs sm:text-right font-normal">
                  {condo.specs}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
