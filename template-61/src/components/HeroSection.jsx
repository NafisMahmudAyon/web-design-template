import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '../data/treadlyData';

export default function HeroSection({ onStartShopping }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = heroSlides[slideIndex];

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-6 sm:py-8 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#EFEFEF] overflow-hidden p-6 sm:p-12 lg:p-16 min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between shadow-sm border border-neutral-200/50">
          {/* Subtle radial lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/70 rounded-full blur-3xl pointer-events-none" />

          {/* Massive Faint Watermark Text: OWN THE WALK */}
          <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
            <span className="text-6xl sm:text-9xl lg:text-[150px] font-black text-white/90 tracking-tighter uppercase whitespace-nowrap leading-none drop-shadow-sm font-syne">
              {slide.watermark}
            </span>
          </div>

          {/* Top Section: Category Tag List */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex flex-col space-y-1">
              <span className="text-xs sm:text-sm font-black tracking-wider text-neutral-950 uppercase">
                {slide.categoryBadge}
              </span>
              {slide.subtitleList.map((sub, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase hover:text-neutral-700 cursor-pointer transition-colors"
                >
                  {sub}
                </span>
              ))}
            </div>

            {/* Quick Slide Indicator */}
            <div className="hidden sm:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-neutral-200 text-xs font-bold text-neutral-600">
              <span>0{slideIndex + 1}</span>
              <span className="text-neutral-300">/</span>
              <span>0{heroSlides.length}</span>
            </div>
          </div>

          {/* Center Stage: Huge Title + Overlapping Sneaker Visual */}
          <div className="relative z-10 my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
            {/* Massive Heading Behind/Around Shoe */}
            <div className="text-center select-none">
              <h1 className="text-4xl sm:text-7xl lg:text-[92px] font-black text-neutral-950 font-syne tracking-tight leading-[0.9] uppercase">
                {slide.titlePart1}
                <br />
                <span className="relative inline-block">
                  {slide.titlePart2}
                </span>
              </h1>
            </div>

            {/* Prominent Angled Hero Sneaker */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -15, y: 30 }}
                animate={{ opacity: 1, scale: 1, rotate: -12, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: -5, y: -20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                whileHover={{ scale: 1.06, rotate: -8, y: -8 }}
                className="relative z-20 -mt-16 sm:-mt-24 lg:-mt-32 max-w-sm sm:max-w-md lg:max-w-lg cursor-pointer"
              >
                <img
                  src={slide.sneakerImage}
                  alt={slide.titlePart2}
                  className="w-full h-auto object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Year on Left, Description & Controls on Right */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4">
            {/* Left: Year Marker */}
            <div className="text-xs sm:text-sm font-bold text-neutral-500 tracking-widest uppercase font-mono">
              {slide.year}
            </div>

            {/* Right: Carousel Controls, Paragraph & CTA */}
            <div className="flex flex-col items-start sm:items-end text-left sm:text-right gap-3.5 max-w-md">
              {/* Carousel Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xs font-sans">
                {slide.description}
              </p>

              <button
                onClick={onStartShopping}
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-neutral-950 text-neutral-950 hover:text-white border border-neutral-950 text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-sm active:scale-95"
              >
                <span>Start Shopping</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
