import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Square } from 'lucide-react';
import { testimonialsCompanies, testimonialsStories } from '../data/finexaData';

export default function TestimonialSection() {
  const [activeCompany, setActiveCompany] = useState('square');

  const companyKeys = testimonialsCompanies.map((c) => c.id);
  const currentIndex = companyKeys.indexOf(activeCompany);

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? companyKeys.length - 1 : currentIndex - 1;
    setActiveCompany(companyKeys[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === companyKeys.length - 1 ? 0 : currentIndex + 1;
    setActiveCompany(companyKeys[nextIdx]);
  };

  const currentStory = testimonialsStories[activeCompany] || testimonialsStories.square;

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09182A] tracking-tight font-display">
              Trusted by Growing Businesses
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
            Trusted by startups and enterprises for secure, intelligent financial management.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Portrait Photo (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src={currentStory.avatar}
                  alt={currentStory.author}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Quote & Author (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Company Logo Header */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#09182A] flex items-center justify-center text-white">
                  <Square className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-lg font-extrabold text-[#09182A] font-display">
                  {currentStory.company}
                </span>
              </div>

              {/* Big Quote */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeCompany}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#09182A] leading-snug font-display"
                >
                  "{currentStory.quote}"
                </motion.blockquote>
              </AnimatePresence>

              {/* Author & Role */}
              <div className="pt-2">
                <div className="text-sm font-bold text-[#09182A]">{currentStory.author}</div>
                <div className="text-xs text-gray-500">{currentStory.role}</div>
              </div>
            </div>

          </div>

          {/* Bottom Interactive Company Tabs & Arrow Navigation */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              {testimonialsCompanies.map((comp) => {
                const isActive = activeCompany === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setActiveCompany(comp.id)}
                    className={`text-sm font-bold transition-colors pb-1 border-b-2 ${
                      isActive
                        ? 'text-[#09182A] border-[#09182A]'
                        : 'text-gray-400 border-transparent hover:text-[#09182A]'
                    }`}
                  >
                    {comp.name}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Circular Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-400 shadow-xs transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-400 shadow-xs transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
