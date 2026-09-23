import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { CrownDoodle } from './HandDoodles';
import { studentReviews } from '../data/physicsData';

export const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % studentReviews.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
  };

  const visibleReviews = [
    studentReviews[startIndex],
    studentReviews[(startIndex + 1) % studentReviews.length],
    studentReviews[(startIndex + 2) % studentReviews.length],
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header with Title and Slider Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex items-start gap-3">
            <CrownDoodle className="text-[#548A63] mt-1 shrink-0" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight leading-tight max-w-xl">
              Reviews From Students <br />
              Who Completed Course
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-[#FAFBF9] border border-neutral-200/70 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900 mb-3">
                  {review.title}
                </h3>

                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {review.comment}
                </p>
              </div>

              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <div className="pt-3 border-t border-neutral-200/60">
                  <p className="text-xs font-bold text-neutral-900">
                    {review.author}
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
