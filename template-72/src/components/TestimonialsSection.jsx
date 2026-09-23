import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/wildlingData';

export default function TestimonialsSection() {
  const [activeCardId, setActiveCardId] = useState(2);

  return (
    <section className="w-full py-24 bg-[#fcf8f5] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2e1d1b] lowercase mb-3">
              what our customers <br />
              are saying
            </h2>
            <p className="text-xs sm:text-sm text-[#2e1d1b]/60 leading-relaxed font-normal">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCardId((prev) => (prev > 1 ? prev - 1 : 3))}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#2e1d1b]/20 hover:border-[#2e1d1b] hover:bg-[#2e1d1b] hover:text-white text-[#2e1d1b] flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveCardId((prev) => (prev < 3 ? prev + 1 : 1))}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-[#2e1d1b] text-white flex items-center justify-center shadow-md hover:bg-[#1e1211] transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => {
            const isActive = activeCardId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCardId(item.id)}
                onClick={() => setActiveCardId(item.id)}
                className={`h-[280px] p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-white shadow-xl ring-2 ring-[#2e1d1b]/10 border-transparent -translate-y-1'
                    : 'bg-white/70 hover:bg-white border-[#2e1d1b]/5 shadow-sm'
                }`}
              >
                {/* 5 Stars */}
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#f6decfa] text-[#c87a66]"
                      />
                    ))}
                  </div>

                  <p className="text-xs text-[#2e1d1b]/70 leading-relaxed font-normal line-clamp-4">
                    {item.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#2e1d1b]">{item.author}</h4>
                    <p className="text-[10px] text-[#2e1d1b]/50">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
