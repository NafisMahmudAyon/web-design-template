import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/evergreenData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.reviews.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData.reviews[currentIndex];

  return (
    <section className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              {testimonialsData.headline}
            </h2>
          </div>

          {/* Avatar Cluster with Review Count */}
          <div className="flex items-center gap-3.5 self-start sm:self-auto">
            <div className="flex -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                alt="Client 1"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                alt="Client 2"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                alt="Client 3"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>
            <span className="text-xs font-semibold text-slate-700">
              {testimonialsData.reviewCount}
            </span>
          </div>
        </div>

        {/* Carousel Testimonial Card with Stable Zero CLS */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Client Photo with Prev Arrow */}
            <div className="lg:col-span-5 flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="hidden lg:flex w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 items-center justify-center transition-all active:scale-95 shadow-sm shrink-0"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden bg-slate-100 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.author}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Quote & Author Details with Next Arrow */}
            <div className="lg:col-span-7 flex items-center justify-between gap-4">
              <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-3xl p-8 sm:p-12 w-full shadow-sm flex flex-col justify-between min-h-[320px] sm:min-h-[380px]">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brandLime/20 text-brandLime-dark flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={current.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-2xl font-serif text-slate-800 leading-relaxed font-normal"
                    >
                      "{current.quote}"
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-serif font-bold text-slate-900">
                      {current.author}
                    </h4>
                    <span className="text-xs text-slate-500 font-sans">
                      {current.role}
                    </span>
                  </div>

                  {/* Pagination Indicator Dots */}
                  <div className="flex items-center gap-1.5">
                    {testimonialsData.reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? 'w-6 bg-brandLime-dark' : 'w-2 bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="hidden lg:flex w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 items-center justify-center transition-all active:scale-95 shadow-sm shrink-0"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Arrows Controls */}
          <div className="flex lg:hidden items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-900 bg-brandDark text-white flex items-center justify-center transition-all shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
