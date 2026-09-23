import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/skincareData';

export default function TestimonialsSection() {
  const [activeCardId, setActiveCardId] = useState(2);

  return (
    <section className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              what our customers <br />
              are saying
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCardId((prev) => (prev > 1 ? prev - 1 : 3))}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white text-gray-600 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveCardId((prev) => (prev < 3 ? prev + 1 : 1))}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-[#5b7b99] hover:bg-[#486682] text-white flex items-center justify-center shadow-md transition-all"
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
                className={`h-[280px] p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isActive
                    ? 'bg-white shadow-xl ring-2 ring-[#5b7b99]/20 border-transparent -translate-y-1'
                    : 'bg-white hover:bg-gray-50/80 border-gray-100 shadow-sm'
                }`}
              >
                {/* 5 Stars */}
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal line-clamp-4">
                    {item.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{item.author}</h4>
                    <p className="text-[10px] text-gray-400">{item.role}</p>
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
