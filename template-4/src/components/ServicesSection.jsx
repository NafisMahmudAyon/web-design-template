import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/mockData';

export default function ServicesSection({ onOpenContact, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentService = servicesData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="w-full py-8 sm:py-12 px-3 sm:px-6 max-w-[1400px] mx-auto">
      {/* Dark Outer Container */}
      <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#0A0B0D] text-white p-6 sm:p-12 lg:p-16 overflow-hidden border border-white/10 shadow-2xl">
        {/* Giant Watermark DREAM HOME Text */}
        <div className="absolute -bottom-10 sm:-bottom-16 left-0 right-0 overflow-hidden pointer-events-none select-none z-0">
          <span className="font-bebas text-[140px] sm:text-[220px] lg:text-[280px] text-white/[0.04] leading-none tracking-tight block text-center whitespace-nowrap">
            DREAM HOME
          </span>
        </div>

        {/* Section Top Header */}
        <div className="relative z-10 mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-bebas text-3xl sm:text-5xl lg:text-6xl text-white tracking-normal uppercase max-w-4xl"
          >
            Refined Real Estate Strategies and Expert Advice
          </motion.h2>
        </div>

        {/* Main 2-Column Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Service Image */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/10 shadow-2xl cursor-pointer group"
                onClick={() => onImageClick && onImageClick(currentService.image, currentService.title)}
              >
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Service Narrative & Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-5"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm sm:leading-relaxed italic">
                  {currentService.description}
                </p>

                {/* Explore Further Pill */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenContact(currentService.title)}
                    className="glass-pill px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white hover:bg-white/20 inline-flex items-center gap-1.5"
                  >
                    <span>Explore Further</span>
                    <ArrowUpRight className="w-4 h-4 opacity-80" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3 mt-8 sm:mt-12 justify-start lg:justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-zinc-900 border border-white/20 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg"
                aria-label="Previous service"
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white text-zinc-900 flex items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg"
                aria-label="Next service"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
