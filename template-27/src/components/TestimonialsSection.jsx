import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#f8f9fc] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-gray-200 px-3.5 py-1 rounded-full text-xs font-bold text-gray-700 mb-3">
              <span>⚙ Customer Review</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black text-[#090d16] uppercase leading-tight tracking-tight">
              Trusted by Millions <br />
              Around the World
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Discover why individuals and businesses rely on our secure platform for fast payments, seamless transfers, and smarter financial management.
          </p>
        </div>

        {/* 3 Review Cards Stack - STRICT ZERO CLS FIXED HEIGHT CONTAINERS (h-[200px] sm:h-[220px]) */}
        <div className="space-y-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center justify-between h-[200px] sm:h-[220px] hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-sky-100">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 flex-1 min-w-0">
                <Quote className="w-6 h-6 text-gray-400 opacity-40" />
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#090d16] italic line-clamp-2">
                  {t.quote}
                </p>
                <div className="flex justify-between items-center pt-1 border-t border-gray-100">
                  <div>
                    <h4 className="font-display text-sm font-black text-[#090d16]">
                      {t.author}
                    </h4>
                    <p className="text-[10px] text-gray-500 font-bold">
                      {t.role}
                    </p>
                  </div>
                  <span className="font-display text-xs font-black text-gray-400 tracking-wider">
                    {t.companyLogo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
