import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/finexaData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAFCFF] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Trusted by Growing Businesses
            </h2>
          </div>

          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Trusted by startups and enterprises for secure, intelligent financial management.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white border border-slate-200/90 rounded-[3rem] p-6 sm:p-12 shadow-xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center"
            >
              {/* Author Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-100">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.author}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Company Logo & Quote */}
              <div className="lg:col-span-8 space-y-6">
                {/* Brand Emblem */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md border-2 border-slate-900 flex items-center justify-center p-1">
                    <div className="w-2.5 h-2.5 bg-slate-900 rounded-xs" />
                  </div>
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                    {activeTestimonial.company}
                  </span>
                </div>

                {/* Big Quote */}
                <blockquote className="text-xl sm:text-2xl xl:text-3xl font-bold text-slate-900 leading-snug tracking-tight font-display">
                  "{activeTestimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Company Selector Strip and Carousel Controls */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Company Tabs */}
            <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto pb-2 sm:pb-0">
              {TESTIMONIALS.map((item, index) => {
                const isActive = currentIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                      isActive ? 'text-slate-950 font-extrabold border-b-2 border-slate-950 pb-1' : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                title="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
