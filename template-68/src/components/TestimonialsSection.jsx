import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/groceryData';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="w-full py-20 bg-[#fafcfa] border-y border-emerald-900/10 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        {/* Title */}
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          Testimonials
        </p>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-8">
          Testimonials from <span className="text-[#0c6b3e]">Our Loyal Customers</span>
        </h2>

        {/* Customer Avatars Row */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          {TESTIMONIALS.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-16 h-16 ring-4 ring-[#fed700] ring-offset-2 scale-110 shadow-lg'
                    : 'w-11 h-11 opacity-50 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </button>
            );
          })}
        </div>

        {/* Quote Content with Slide Animation */}
        <div className="relative min-h-[160px] flex items-center justify-center px-4 sm:px-12 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium italic max-w-2xl"
            >
              "{current.quote}"
            </motion.p>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevReview}
            aria-label="Previous Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gray-900 hover:bg-black text-white flex items-center justify-center shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextReview}
            aria-label="Next Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white flex items-center justify-center shadow-md transition-all active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Rating Stars & Author */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
            <span className="text-xs font-bold text-gray-800 ml-1.5">
              {current.rating.toFixed(1)}
            </span>
          </div>

          <h3 className="text-base font-black text-gray-900 mt-1">
            {current.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium">{current.role}</p>
        </div>
      </div>
    </section>
  );
}
