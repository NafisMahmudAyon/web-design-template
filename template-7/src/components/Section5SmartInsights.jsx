import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { insightsSlides } from '../data/properties';

export default function Section5SmartInsights({ onSelectInsight }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = insightsSlides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? insightsSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === insightsSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Rounded Hero Showcase Box */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[600px] md:min-h-[700px] bg-black text-white shadow-2xl flex flex-col justify-end p-8 md:p-16 border border-gray-200">
          
          {/* Animated Background Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.bgImage}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Foreground Overlay Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
            
            {/* Left Column: 2 Thumbnail Cards */}
            <div className="md:col-span-5 flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentIndex((currentIndex + 1) % insightsSlides.length)}
                className="w-28 sm:w-36 md:w-44 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl cursor-pointer bg-black/40 backdrop-blur-sm"
              >
                <img
                  src={slide.thumb1}
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentIndex((currentIndex + 2) % insightsSlides.length)}
                className="w-28 sm:w-36 md:w-44 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl cursor-pointer bg-black/40 backdrop-blur-sm"
              >
                <img
                  src={slide.thumb2}
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Column: Title, Subtext, Counter & Navigation */}
            <div className="md:col-span-7 space-y-6 flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    {slide.title.split(" ")[0]} {slide.title.split(" ")[1]} <span className="font-italic-serif font-normal text-white">{slide.title.split(" ").slice(2).join(" ")}</span>
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl font-light">
                    {slide.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Counter & Controls Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="text-lg md:text-xl font-serif italic text-white/90">
                  {currentIndex + 1}/{insightsSlides.length}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-[#F8BA8B] hover:text-black hover:border-[#F8BA8B] transition-all duration-300 cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-[#F8BA8B] text-black border border-[#F8BA8B] flex items-center justify-center hover:bg-[#F6A870] transition-all duration-300 cursor-pointer shadow-lg shadow-[#F8BA8B]/20"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
