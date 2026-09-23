import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { athleteReview } from '../data/elevateData';

export default function TestimonialsSection() {
  const [reviewIdx, setReviewIdx] = useState(0);

  const reviews = [
    {
      quote: 'This camp completely changed my performance. The coaching is next level, where I get best time in my life and enjoy this so.',
      author: 'Olivia Martinez',
      sport: 'Tennis Collegiate Prospect',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&h=800&q=80',
    },
    {
      quote: 'The tactical positioning drills and physical resilience training elevated my match speed beyond anything I achieved in club sports.',
      author: 'Marcus Vance',
      sport: 'Varsity Soccer Captain',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&h=800&q=80',
    },
  ];

  const current = reviews[reviewIdx];

  const handlePrev = () => {
    setReviewIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setReviewIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAFDFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-bold text-[#182623] tracking-tight font-display mb-3"
          >
            What Our Athletes Say
          </motion.h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
            Join elite sports camps designed to sharpen skills, boost confidence, and elevate your game.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Large Card: Athlete Celebrating Photo with Floating Quote Box */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[480px] sm:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.author}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={current.image}
                alt={current.author}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Quote Drawer in Center/Right (Figma design detail) */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:right-10 sm:left-auto sm:max-w-md bg-[#2E5B53]/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-emerald-400/20">
              <span className="text-3xl text-emerald-300 font-serif leading-none block mb-2 opacity-60">
                “
              </span>

              <p className="text-xs sm:text-sm leading-relaxed mb-4 font-normal text-emerald-50">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-white">
                    {current.author}
                  </h4>
                  <span className="text-[11px] text-emerald-200">
                    {current.sport}
                  </span>
                </div>

                {/* Prev / Next Navigation Arrows */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous quote"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#2E5B53] flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[2]" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next quote"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#2E5B53] flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[2]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4.8/5 Rating Card + Male Coach Photo */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 h-full">
            
            {/* 4.8/5 Rating Stat Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-7 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-5xl font-black text-[#182623] tracking-tight font-display">
                    4.8
                  </span>
                  <span className="text-2xl font-bold text-gray-400">/5</span>
                </div>

                <div className="flex items-center space-x-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  More than 25000 5-Star Reviews for our Award-winning Training Events.
                </p>
              </div>
            </motion.div>

            {/* Coach Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden shadow-md h-52 sm:h-64 border border-gray-100 group"
            >
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&h=500&q=80"
                alt="Head coach smiling with racket"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs font-bold leading-tight">Coach Liam Bennett</p>
                <p className="text-[10px] text-emerald-200">Director of Racquet Development</p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
