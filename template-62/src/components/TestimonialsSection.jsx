import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { clientTestimonials } from '../data/homelyData';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(1); // Card 2 active by default as shown in mockup

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? clientTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFB] text-neutral-900 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight">
            What Our Client Says About Us
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-2.5">
            Stay ahead with up-to-date news that keeps you informed and engaged. Our real estate service is dedicated to helping you find your perfect home.
          </p>
        </div>

        {/* 3 Testimonials Cards Row with Zero CLS & Dynamic Card Polymorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {clientTestimonials.map((item, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                tabIndex={0}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer h-[440px] sm:h-[460px] ${
                  isActive
                    ? 'bg-[#C88C48] text-white shadow-2xl scale-[1.03] z-10 border border-[#B37836]'
                    : 'bg-white text-neutral-800 border border-neutral-200/80 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Header: Avatar, Name & Role */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div>
                      <h4
                        className={`text-sm sm:text-base font-extrabold font-syne tracking-tight ${
                          isActive ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-xs font-semibold ${
                          isActive ? 'text-amber-100' : 'text-neutral-500'
                        }`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isActive ? 'text-white font-medium' : 'text-neutral-600'
                    }`}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer: Rating Stars + Property Thumbnail */}
                <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(item.stars)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className={`w-3.5 h-3.5 fill-current ${
                            isActive ? 'text-white' : 'text-amber-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`text-[11px] font-bold block max-w-[140px] truncate ${
                        isActive ? 'text-amber-100' : 'text-neutral-700'
                      }`}
                    >
                      {item.project}
                    </span>
                  </div>

                  {/* Small Property Thumbnail */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm border border-white/40">
                    <img
                      src={item.thumbnail}
                      alt={item.project}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination & Arrows */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all shadow-sm active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {clientTestimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIdx(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeIdx === dotIdx ? 'w-6 bg-[#C88C48]' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#C88C48] hover:bg-[#B37836] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
