import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { testimonialsData } from '../data/mockData';

export default function TestimonialsSection() {
  const [activeTestimonialId, setActiveTestimonialId] = useState(5); // Default Samir Rahman (id 5)
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonialsData : testimonialsData.slice(0, 6);

  return (
    <section className="py-20 bg-[#F8FAFC] dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-[#635BFF] uppercase tracking-wider bg-[#635BFF]/10 px-3 py-1 rounded-full">
            • Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Experience the Future of Global Payments
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Design a financial operating system that works for your business and streamlined cash flow management.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleTestimonials.map((t) => {
            const isActive = activeTestimonialId === t.id;
            return (
              <div
                key={t.id}
                onMouseEnter={() => setActiveTestimonialId(t.id)}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#635BFF] text-white border-[#635BFF] shadow-xl scale-[1.02] z-10'
                    : 'bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-200/80 dark:border-slate-700/80 hover:border-[#635BFF]/40'
                }`}
              >
                <div>
                  <Quote className={`w-8 h-8 mb-4 ${isActive ? 'text-white/40' : 'text-slate-300 dark:text-slate-700'}`} />
                  <p className={`text-xs sm:text-sm font-medium leading-relaxed mb-6 ${isActive ? 'text-purple-50' : 'text-slate-600 dark:text-slate-300'}`}>
                    {t.quote}
                  </p>
                </div>

                {/* Author Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-current opacity-20">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50"
                  />
                  <div>
                    <h4 className={`text-xs font-extrabold ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {t.author}
                    </h4>
                    <p className={`text-[10px] font-semibold ${isActive ? 'text-purple-200' : 'text-slate-400'}`}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#635BFF] hover:bg-[#4F46E5] text-white font-extrabold text-xs shadow-lg transition-all"
          >
            <span>{showAll ? 'Show Less' : 'See More'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
