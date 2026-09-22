import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, PARTNER_BRANDS } from '../data/logistiqoData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeReview = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block">
            // TESTIMONIALS //
          </span>

          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display uppercase">
              What Our Clients Say
            </h2>

            {/* Carousel Arrow Controls (Rule 1B) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                title="Previous client"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition active:scale-95"
                title="Next client"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Testimonial Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Metric + Label */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              Words From The <br />
              Ones Who Know Us <br />
              Best
            </span>

            <div>
              <span className="text-6xl sm:text-7xl font-extrabold text-slate-900 font-display block">
                +99%
              </span>
              <p className="text-xs font-semibold text-slate-400 mt-1">
                Achieving Excellence Every Time
              </p>
            </div>
          </div>

          {/* Right Column: Active Quote Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.25]">
                  "{activeReview.quote}"
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeReview.avatar}
                      alt={activeReview.author}
                      className="w-12 h-12 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {activeReview.author}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {activeReview.role}
                      </p>
                    </div>
                  </div>

                  {/* Social Badge */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">
                    𝕏
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Partner Brands Row matching mockup */}
        <div className="pt-12 border-t border-slate-100 space-y-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
            • Working with brands that matter
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PARTNER_BRANDS.map((brand, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl py-4 px-6 flex items-center justify-center text-slate-800 font-extrabold font-display text-sm sm:text-base hover:bg-slate-100 transition cursor-default shadow-2xs"
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
