import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { heroData } from '../data/catalogData';

export const HeroSection = ({ onExploreProducts }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;

  const slides = [
    {
      id: 1,
      model: 'Nike Air VaporMax Street Edition',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#F59E0B'
    },
    {
      id: 2,
      model: 'Nike Dunk High Retro Street Prototype',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#FF5722'
    },
    {
      id: 3,
      model: 'Nike Zoom Pegasus Turbo Pulse',
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
      accentColor: '#8CE338'
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const activeSlideData = slides[(currentSlide - 1) % slides.length];

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-brandForest text-white">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Main Hero Center Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="relative flex flex-col items-center justify-center">
          {/* Giant Typography Background */}
          <div className="text-center select-none pointer-events-none">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-white/95 leading-[0.9]">
              DESIGN
            </h1>
            <span className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-white/80 block my-1">
              &
            </span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tighter text-white/95 leading-[0.9]">
              HIGH QUALITY
            </h2>
          </div>

          {/* Dynamic Diagonal Slashes with Sneaker Composite */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Diagonal Slash Ribbon 1 */}
            <div className="absolute w-[500px] sm:w-[650px] h-32 sm:h-40 bg-slate-900/60 backdrop-blur-md -rotate-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop"
                alt="Streetwear athlete"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
            </div>

            {/* Floating Dynamic Yellow/Orange Sneaker */}
            <motion.div
              key={activeSlideData.id}
              initial={{ opacity: 0, scale: 0.9, rotate: -25, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: -15, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="relative z-20 w-72 sm:w-96 md:w-[480px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] pointer-events-auto cursor-pointer"
              onClick={() => onExploreProducts?.()}
            >
              <img
                src={activeSlideData.image}
                alt={activeSlideData.model}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Left Vertical & Control Stack */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end justify-between">
        {/* Left Side: Vertical Nike label, counter, controls */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60 -rotate-90 origin-left">
              Nike
            </span>
            <div className="flex flex-col gap-2 pl-2">
              <span className="text-sm font-mono font-bold tracking-wider text-white">
                {currentSlide} <span className="text-white/40">/ {totalSlides}</span>
              </span>

              {/* Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 mt-1">
                {[...Array(totalSlides)].map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentSlide(i + 1)}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      currentSlide === i + 1 ? 'w-5 bg-brandYellow' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right Bottom Info Bar */}
        <div className="flex items-center justify-between w-full max-w-md sm:max-w-xl pl-8 border-t border-white/10 pt-4">
          <span className="text-xs sm:text-sm text-white/80 font-medium truncate">
            {activeSlideData.model}
          </span>
          <button
            onClick={() => onExploreProducts?.()}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brandYellow hover:text-white uppercase tracking-wider transition-colors shrink-0 group"
          >
            <span>View Products</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
