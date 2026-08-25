import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function ReviewsCarouselSection() {
  const reviews = [
    {
      id: 1,
      name: 'Sophia Martinez',
      role: 'Fitness Coach & Nutritionist',
      text: 'Grov is hands down the cleanest green smoothie on the market. Zero chalky aftertaste, creamy avocado richness, and genuine 7-day energy!',
      rating: 5,
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Software Architect',
      text: 'Replacing my morning coffee with Green Fuel gave me steady focus without the afternoon crash. The cucumber hydrator is super refreshing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Wellness Enthusiast',
      text: 'My skin noticeably cleared up by day 5! I love that there are no added sugars or artificial sweeteners.',
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <section id="reviews" className="relative w-full my-6">
      <div className="bg-[#dbead7] rounded-[36px] md:rounded-[44px] p-6 md:p-8 text-[#142015] border border-white/80 shadow-xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#bdcca7]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#355237] block mb-1">Community Reviews</span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-[#142015]">
              Loved By 10,000+ Health Advocates
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Review Card */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 p-6 md:p-8 rounded-[28px] shadow-sm border border-white flex flex-col justify-between"
        >
          <div className="flex items-center gap-1 text-amber-400 mb-4">
            {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <p className="text-sm md:text-base text-gray-800 font-medium italic leading-relaxed mb-6">
            "{reviews[currentIndex].text}"
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div>
              <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
                {reviews[currentIndex].name}
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </h4>
              <p className="text-xs text-gray-500 font-medium">{reviews[currentIndex].role}</p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Buyer
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
