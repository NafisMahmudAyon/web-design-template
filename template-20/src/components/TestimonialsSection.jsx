import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#16181b] text-white relative overflow-hidden">
      {/* Subtle ambient lighting glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Rating & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Client Says
            </span>

            <div>
              <div className="text-6xl font-bold font-serif tracking-tight text-white">
                4.5
              </div>
              <div className="flex items-center gap-1 my-3 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-300">
                500+ review on Capterra & Trustpilot
              </p>
            </div>
          </div>

          {/* Right Column: Headline & Testimonial Quote Slider */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-gray-200 leading-snug">
              See how organizations use environmental intelligence to identify exposure prioritize risk and make more confident decisions.
            </h2>

            {/* Testimonial Slider Box */}
            <div className="relative bg-[#22252a] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl min-h-[260px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-lg sm:text-xl font-serif italic text-gray-100 leading-relaxed">
                    {activeTestimonial.quote}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <img
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.author}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/50"
                      />
                      <div>
                        <h4 className="font-bold text-white text-base">{activeTestimonial.author}</h4>
                        <p className="text-xs text-gray-400 font-sans">{activeTestimonial.role}</p>
                      </div>
                    </div>

                    {/* Navigation Prev / Next Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                        aria-label="Previous Testimonial"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                        aria-label="Next Testimonial"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
