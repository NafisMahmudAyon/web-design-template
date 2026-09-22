import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/contentData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-xs font-bold text-[#141814] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
              Confidence in Every Transaction
            </h2>
            <p className="text-xs sm:text-sm text-[#6C736A] mt-2 font-medium">
              Users share how they manage finances with clarity and control.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              title="Previous testimonial"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              title="Next testimonial"
              className="w-9 h-9 rounded-full bg-[#141814] text-white flex items-center justify-center hover:bg-black transition-colors focus:outline-none shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials 3-Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-[#F8F9F7] border border-black/[0.04] flex flex-col justify-between shadow-card hover:bg-[#F4F5F1] transition-all"
            >
              <div>
                {/* Quote Icon */}
                <div className="text-[#141814] mb-4">
                  <span className="text-4xl font-serif leading-none select-none">“</span>
                </div>

                <p className="text-sm font-bold text-[#141814] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info & Logo */}
              <div className="flex items-center justify-between pt-8 border-t border-black/[0.06] mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#141814]">{t.author}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{t.role}</p>
                  </div>
                </div>

                <span className="text-xs font-extrabold tracking-tight text-gray-700 font-display">
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
