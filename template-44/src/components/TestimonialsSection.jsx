import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_ROW_1, TESTIMONIALS_ROW_2 } from '../data/flowzyData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
              <Star className="w-4 h-4 fill-purple-600" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Trusted by Teams Around the World
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            See how businesses improve collaboration, streamline workflows, and deliver projects faster with our platform.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 with Dual Gradient Mask */}
      <div className="marquee-mask mb-6">
        <div className="flex gap-6 w-max animate-none hover:pause">
          {TESTIMONIALS_ROW_1.map((item) => (
            <div
              key={item.id}
              className="w-80 sm:w-96 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-flowzy-card flex flex-col justify-between flex-shrink-0 hover:shadow-lg transition"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-slate-900">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-900 text-slate-900" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 with Dual Gradient Mask */}
      <div className="marquee-mask">
        <div className="flex gap-6 w-max pl-16">
          {TESTIMONIALS_ROW_2.map((item) => (
            <div
              key={item.id}
              className="w-80 sm:w-96 bg-white border border-slate-200/90 rounded-3xl p-6 shadow-flowzy-card flex flex-col justify-between flex-shrink-0 hover:shadow-lg transition"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3 text-slate-900">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-slate-900 text-slate-900" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
