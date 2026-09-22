import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/finoraData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.testimonials.length) % testimonialsData.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-gray-950" />
              <span>{testimonialsData.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
            >
              {testimonialsData.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-sm sm:text-base text-gray-500 font-normal leading-relaxed"
            >
              {testimonialsData.subtitle}
            </motion.p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-950 hover:text-white text-gray-800 flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-gray-950 text-white hover:bg-black flex items-center justify-center transition-all duration-200 shadow-xs"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonialsData.testimonials.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-[30px] bg-white border border-gray-200/80 shadow-xs hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-gray-300 fill-current mb-6" />

                <p className="text-base sm:text-lg font-bold text-gray-950 leading-relaxed tracking-tight">
                  {test.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-950">
                      {test.author}
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      {test.role}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold text-gray-700 font-display uppercase tracking-wider">
                  {test.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dot === 0 ? 'w-6 bg-gray-950' : 'w-1.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
