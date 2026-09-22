import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/finoviaData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to middle/featured item

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-finovia-dark-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout Grid: Left Hero Quote Block + Right Testimonial Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Lime-Green Testimonial Banner (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#d2fc3b] to-[#b4ea1e] p-8 sm:p-10 text-finovia-dark relative overflow-hidden shadow-2xl shadow-finovia-lime/10"
          >
            <div className="absolute top-0 right-0 p-8 opacity-15">
              <Quote className="w-32 h-32 text-finovia-dark rotate-180" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-xs font-bold uppercase tracking-wider mb-6">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Client Experiences</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-finovia-dark leading-tight">
                Trusted by 100,000+ Smart Investors Worldwide
              </h2>

              <p className="mt-4 text-sm sm:text-base font-medium text-finovia-dark/80 leading-relaxed">
                See how founders, tech engineers, and modern operators simplify financial operations and accelerate wealth accumulation.
              </p>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-finovia-dark">0{currentIndex + 1}</span>
                  <span className="text-sm font-semibold text-finovia-dark/60">/ 0{TESTIMONIALS.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-finovia-dark text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-finovia-dark text-white flex items-center justify-center hover:bg-black transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Active Testimonial & Stack (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === currentIndex;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  whileHover={{ x: 4 }}
                  className={`rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-finovia-card border-finovia-lime shadow-xl shadow-finovia-lime/5'
                      : 'bg-finovia-card/50 border-white/5 hover:border-white/15 opacity-70 hover:opacity-90'
                  }`}
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.stars)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        className={`w-4 h-4 ${
                          isActive ? 'text-finovia-lime fill-finovia-lime' : 'text-amber-400 fill-amber-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className={`text-sm sm:text-base leading-relaxed ${isActive ? 'text-white font-medium' : 'text-slate-300'}`}>
                    "{item.quote}"
                  </p>

                  {/* Author Meta */}
                  <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-11 h-11 rounded-full object-cover border border-white/20"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{item.author}</div>
                      <div className="text-xs text-slate-400">{item.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
