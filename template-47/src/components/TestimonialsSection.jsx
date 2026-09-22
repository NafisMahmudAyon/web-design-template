import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIAL_BRANDS } from '../data/agroviaData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Determine which two items to display side by side
  const currentCard1 = TESTIMONIALS[currentIndex];
  const currentCard2 = TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-agro-cream border-t border-agro-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-agro-muted uppercase tracking-wider mb-4">
              <span>//</span>
              <span className="text-agro-forest">Testimonials</span>
              <span>//</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-agro-dark leading-tight">
              Real Stories Shared <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-agro-forest">by Our Farmers</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-agro-muted leading-relaxed">
              Hear directly from farmers who use our solutions every day and see real impact across their fields and harvests.
            </p>
          </div>
        </div>

        {/* 2 Testimonials Side-by-Side with Carousel Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[currentCard1, currentCard2].map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-agro-border p-8 sm:p-10 shadow-card-soft flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-agro-muted/30 mb-6" />
                
                <p className="text-base sm:text-lg text-agro-dark leading-relaxed font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info + Photography Pill */}
              <div className="mt-8 pt-6 border-t border-agro-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-base font-bold text-agro-dark">{item.author}</div>
                    <div className="text-xs text-agro-muted">{item.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-agro-lime/30 text-agro-forest text-xs font-bold">
                    {item.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Brands Row & Carousel Controls - Rule 1B & 1D */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-agro-border">
          
          {/* Brand tags with subtle gradient edge mask */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm font-bold text-agro-muted/70 select-none">
            {TESTIMONIAL_BRANDS.map((brand, bIdx) => (
              <span key={bIdx} className="hover:text-agro-forest transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-agro-border bg-white flex items-center justify-center text-agro-dark hover:bg-agro-forest hover:text-white hover:border-agro-forest transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-agro-forest bg-agro-forest text-white flex items-center justify-center hover:bg-agro-dark transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
