import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { feedbackList } from '../data/mockData';

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = feedbackList[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbackList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === feedbackList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="feedback" className="w-full py-16 sm:py-24 max-w-[1400px] mx-auto">
      {/* Top Main Feedback Grid */}
      <div className="px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start mb-16 sm:mb-20">
        {/* Left Headline */}
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight max-w-md"
          >
            Explore the feedback from our customers about our products!
          </motion.h2>
        </div>

        {/* Right Testimonial Quote & Controls */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Yellow Brush Highlight Accent */}
              <div className="relative">
                <svg className="w-12 h-6 text-amber-400 mb-1" viewBox="0 0 100 40" fill="none">
                  <path d="M5,25 Q35,5 60,30 T95,15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  {current.quote}
                </p>
              </div>

              {/* Author Row & Carousel Arrows */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-11 h-11 rounded-full object-cover shadow-sm border border-zinc-200"
                  />
                  <div>
                    <h4 className="text-zinc-900 font-semibold text-sm sm:text-base leading-tight">
                      {current.name}
                    </h4>
                    <span className="text-zinc-500 text-xs font-normal">
                      {current.role}
                    </span>
                  </div>
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-2.5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white border border-zinc-300 text-zinc-800 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-sm"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white border border-zinc-300 text-zinc-800 flex items-center justify-center hover:bg-zinc-100 transition-colors shadow-sm"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Brand Partner Logos Banner */}
      <div className="w-full bg-[#E5EDF3]/70 border-y border-zinc-300/40 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8 opacity-45 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-extrabold text-2xl sm:text-3xl tracking-widest text-zinc-700 italic">VISA</span>
          <span className="font-bold text-2xl sm:text-3xl tracking-tight text-zinc-700">stripe</span>
          <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-zinc-700">Skrill</span>
          <span className="font-bold text-2xl sm:text-3xl tracking-tight text-zinc-700">PayPal</span>
          <span className="font-bold text-2xl sm:text-3xl tracking-tight text-zinc-700 flex items-center gap-1">
            Pay
          </span>
        </div>
      </div>
    </section>
  );
}
