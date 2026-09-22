import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIAL } from '../data/terraFarmData';

export const TestimonialsSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    TESTIMONIAL,
    {
      quote:
        "The automated irrigation scheduling and soil telemetry reduced our seasonal pumping energy by 34%. TerraFarm pays for itself tenfold every single harvest cycle.",
      author: 'Evelyn Vasquez',
      role: 'Salinas Valley, California',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
    },
    {
      quote:
        "Switching our multi-field soybean rotation to TerraFarm's satellite AI guidance gave us the highest bushel-per-acre count in our family farm's 40-year history.",
      author: 'Marcus Lindholm',
      role: 'Ames, Iowa',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    },
  ];

  const current = testimonials[activeIdx];

  const prev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-terra-cream border-t border-terra-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-terra-muted uppercase tracking-wider mb-4">
              <span>[</span>
              <span className="text-terra-forest">Testimonials</span>
              <span>]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-terra-dark leading-tight">
              Real Stories From <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-terra-forest">
                Our Farmers
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-terra-muted leading-relaxed">
              Read real experiences from farmers who grow with us, sharing trust, quality, and success from field to market.
            </p>
          </div>
        </div>

        {/* 2-Column Testimonial Layout: Left Photo + Right Quote */}
        <div className="rounded-4xl bg-white border border-terra-border p-8 sm:p-12 lg:p-16 shadow-terra-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Farmer Portrait (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative shadow-lg border border-terra-border/80">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Quote Content (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full">
            <div>
              <Quote className="w-12 h-12 text-terra-forest/20 mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-normal text-terra-dark leading-relaxed"
                >
                  "{current.quote}"
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author & Carousel Arrows */}
            <div className="mt-10 pt-8 border-t border-terra-border flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-terra-dark">{current.author}</div>
                <div className="text-xs sm:text-sm text-terra-muted">{current.role}</div>
              </div>

              {/* Navigation Controls - Rule 1B */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous story"
                  className="w-11 h-11 rounded-full border border-terra-border bg-white flex items-center justify-center text-terra-dark hover:bg-terra-forest hover:text-white hover:border-terra-forest transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next story"
                  className="w-11 h-11 rounded-full border border-terra-forest bg-terra-forest text-white flex items-center justify-center hover:bg-terra-dark transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
