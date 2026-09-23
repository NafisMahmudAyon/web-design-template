import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { clientReviews } from '../data/casalaData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? clientReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === clientReviews.length - 1 ? 0 : prev + 1));
  };

  const review = clientReviews[currentIndex];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Subtle Pink Quotation Watermark */}
          <div className="flex justify-center mb-2">
            <span className="text-4xl text-rose-200/60 font-serif select-none">“ ”</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif text-[#171A1F] tracking-tight mb-4"
          >
            Happy Clients
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm text-[#737883] leading-relaxed max-w-lg mx-auto"
          >
            The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes
          </motion.p>
        </div>

        {/* Testimonial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Quote Text + Author Info + Navigation Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="min-h-[220px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl text-[#282D35] italic leading-relaxed mb-8 max-w-xl font-light">
                    "{review.quote}"
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#171A1F] tracking-tight">
                      {review.author}
                    </h4>
                    <p className="text-sm text-[#737883]">
                      {review.location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons (< and >) */}
            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 hover:scale-105 active:scale-95 transition-all shadow-xs"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:text-black hover:border-gray-400 hover:scale-105 active:scale-95 transition-all shadow-xs"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Right Column: Person with Geometric Polygon Fan Accent */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative max-w-[340px] sm:max-w-[380px] w-full">
              {/* Modern Pink/Purple Gradient Accent behind person (Figma detail) */}
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-gradient-to-tr from-purple-400/40 via-pink-400/40 to-rose-300/30 rounded-tl-full blur-xs pointer-events-none transform -rotate-12" />
              
              <img
                src={review.avatar}
                alt={review.author}
                className="w-full h-auto object-contain relative z-10 select-none"
              />

              {/* Bottom Line Accent */}
              <div className="w-4/5 mx-auto h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mt-1" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
