import React from 'react';
import { Star } from 'lucide-react';
import { testimonialsRow1, testimonialsRow2 } from '../data/flowzyData';

export default function DualTestimonialMarquee() {
  return (
    <section id="testimonials" className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center mb-16">
        
        {/* Section Header */}
        <div className="flex justify-center mb-4">
          <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
          Trusted by Teams Around the World
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal max-w-xl mx-auto">
          See how businesses improve collaboration, streamline workflows, and deliver projects faster with our platform.
        </p>
      </div>

      {/* Dual Edge-Masked Marquees */}
      <div className="space-y-6 mask-gradient-x">
        
        {/* Row 1: Leftward scrolling */}
        <div className="animate-marquee gap-6">
          {[...testimonialsRow1, ...testimonialsRow1].map((review, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[360px] bg-[#FAF9FE] rounded-3xl p-6 border border-purple-100/70 shadow-xs flex flex-col justify-between flex-shrink-0 text-left"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-purple-100/50">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-9 h-9 rounded-full object-cover border border-purple-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">{review.name}</h4>
                  <p className="text-[10px] text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Rightward scrolling */}
        <div className="animate-marquee-reverse gap-6">
          {[...testimonialsRow2, ...testimonialsRow2].map((review, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[360px] bg-[#FAF9FE] rounded-3xl p-6 border border-purple-100/70 shadow-xs flex flex-col justify-between flex-shrink-0 text-left"
            >
              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-purple-100/50">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-9 h-9 rounded-full object-cover border border-purple-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">{review.name}</h4>
                  <p className="text-[10px] text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
