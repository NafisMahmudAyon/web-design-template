import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-[#f6f7f9] text-[#090d16] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-black uppercase text-gray-400 tracking-widest block mb-2">
              | Testimonials |
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#090d16]">
              Real Stories Shared <br />
              <em className="font-serif italic font-normal">by Our Customers</em>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md font-medium leading-relaxed">
            Hear directly from investors, traders, and professionals who use our platform daily to manage finances, grow wealth.
          </p>
        </div>

        {/* Testimonials Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-8">
          {TESTIMONIALS.map((t, idx) => {
            const isVisible = idx === currentIndex || idx === (currentIndex + 1) % TESTIMONIALS.length;
            if (!isVisible) return null;

            return (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4 flex-1">
                  <Quote className="w-8 h-8 text-[#090d16] opacity-30" />
                  <p className="text-sm font-medium leading-relaxed text-[#090d16] italic">
                    {t.quote}
                  </p>
                  <div>
                    <h4 className="font-display text-base font-black text-[#090d16]">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-bold">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-44 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-sky-100">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Control Bar & Partner Logos */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-gray-200">
          
          {/* Sponsor list */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-black text-gray-400 uppercase tracking-wider">
            <span>Retail Fino</span>
            <span>Adobe</span>
            <span>TerraFinance</span>
            <span>FinLogic</span>
            <span>FinanceSync</span>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border-2 border-[#090d16] text-[#090d16] hover:bg-[#090d16] hover:text-white transition-colors"
              aria-label="Previous story"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border-2 border-[#090d16] text-[#090d16] hover:bg-[#090d16] hover:text-white transition-colors"
              aria-label="Next story"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
