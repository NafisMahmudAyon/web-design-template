import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Linkedin, Instagram, Twitter } from 'lucide-react';
import { testimonialsList } from '../data/cryptoData';

export default function TestimonialsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(2); // Daniel Rodriguez is index 2

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const currentFeatured = testimonialsList[featuredIndex];

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
              User Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
              Trusted by Thousands of <br />
              Crypto Traders
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              See how investors, traders, and businesses use our platform to manage digital assets with confidence.
            </p>
          </div>
        </div>

        {/* 3-Column Layout Matching Design Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (4 cols): 2 Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 1: Alina Pattel */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#F9FBFA] rounded-3xl p-7 border border-gray-200 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <span className="text-3xl font-serif text-gray-400 font-bold block mb-2 leading-none">“</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {testimonialsList[0].content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={testimonialsList[0].avatar}
                    alt={testimonialsList[0].name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1A1C]">{testimonialsList[0].name}</h4>
                    <p className="text-[10px] text-gray-400">{testimonialsList[0].role}</p>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Michael Thompson */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#F9FBFA] rounded-3xl p-7 border border-gray-200 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <span className="text-3xl font-serif text-gray-400 font-bold block mb-2 leading-none">“</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {testimonialsList[1].content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={testimonialsList[1].avatar}
                    alt={testimonialsList[1].name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1A1C]">{testimonialsList[1].name}</h4>
                    <p className="text-[10px] text-gray-400">{testimonialsList[1].role}</p>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-pink-600">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Featured Card (4 cols): High-Impact Portrait + Controls */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-[#163337] text-white flex-1 flex flex-col justify-between shadow-xl border border-white/10">
              
              {/* Top Photo Image */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-gradient-to-t from-[#163337] to-transparent">
                <img
                  src={currentFeatured.avatar}
                  alt={currentFeatured.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163337] via-[#163337]/30 to-transparent" />
              </div>

              {/* Bottom Testimonial Quote */}
              <div className="p-7 relative z-10 -mt-10">
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">
                  "{currentFeatured.content}"
                </p>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold text-white">{currentFeatured.name}</h4>
                    <p className="text-[11px] text-[#00D287]">{currentFeatured.role}</p>
                  </div>
                  <div className="text-white/60">
                    <Twitter className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next Pagination Controls below Featured Card */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#0B1A1C] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-[#0B1A1C] text-white hover:bg-[#163337] flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (4 cols): 2 Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 4: Sophia Nguyen */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#F9FBFA] rounded-3xl p-7 border border-gray-200 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <span className="text-3xl font-serif text-gray-400 font-bold block mb-2 leading-none">“</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {testimonialsList[3].content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={testimonialsList[3].avatar}
                    alt={testimonialsList[3].name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1A1C]">{testimonialsList[3].name}</h4>
                    <p className="text-[10px] text-gray-400">{testimonialsList[3].role}</p>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-black">
                  <span className="text-xs font-bold font-mono">𝕏</span>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Emily Carter */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#F9FBFA] rounded-3xl p-7 border border-gray-200 flex flex-col justify-between flex-1 shadow-sm"
            >
              <div>
                <span className="text-3xl font-serif text-gray-400 font-bold block mb-2 leading-none">“</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {testimonialsList[4].content}
                </p>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src={testimonialsList[4].avatar}
                    alt={testimonialsList[4].name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1A1C]">{testimonialsList[4].name}</h4>
                    <p className="text-[10px] text-gray-400">{testimonialsList[4].role}</p>
                  </div>
                </div>
                <div className="text-gray-400 hover:text-pink-600">
                  <Instagram className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
