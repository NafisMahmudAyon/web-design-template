import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

export default function TestimonialsSection({ onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        {/* Left Column: Testimonial Story & Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pr-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 leading-snug tracking-tight">
                {current.title}
              </h2>

              <p className="text-zinc-600 text-xs sm:text-sm sm:leading-relaxed italic">
                {current.quote}
              </p>

              {/* Client Profile Card */}
              <div className="flex items-center gap-4 pt-2">
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-white ring-1 ring-zinc-200"
                />
                <div>
                  <h4 className="text-zinc-900 font-semibold text-sm sm:text-base">
                    {current.clientName}
                  </h4>
                  <span className="text-zinc-500 text-xs font-normal">
                    {current.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-10 sm:mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-md"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-zinc-300 text-zinc-900 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-md"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Right Column: Hero Architecture Photograph */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[16/11] shadow-2xl cursor-pointer bg-zinc-200"
              onClick={() => onImageClick && onImageClick(current.image, "Luxury Coastal Architecture")}
            >
              <img
                src={current.image}
                alt="Modern luxury cliffside estate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
