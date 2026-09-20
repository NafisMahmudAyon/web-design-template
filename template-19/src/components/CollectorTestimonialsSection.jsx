import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function CollectorTestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      watchTag: 'Patek Philippe Nautilus',
      rating: '4.9',
      quote:
        'Finally, a platform that treats watches as collectibles and investments, offering powerful valuation insights for smarter, clearer buying and selling decisions.',
      name: 'Michael Bennett',
      title: 'Watch Collector, New York',
      avatar: '/assets/avatar-michael.jpg',
    },
    {
      watchTag: 'Rolex Daytona',
      rating: '4.9',
      quote:
        'Chronova gives me a clear view of what my collection is actually worth. I can track performance and secondary market liquidity without constantly polling dealers.',
      name: 'James Anderson',
      title: 'Private Collector, London',
      avatar: '/assets/avatar-james.jpg',
    },
    {
      watchTag: 'Audemars Piguet Royal Oak',
      rating: '4.9',
      quote:
        'I love seeing market trends and accurate valuations across my entire collection. It makes acquisition timing and private trading vastly more informed.',
      name: 'Daniel Roberts',
      title: 'Luxury Watch Investor, Zurich',
      avatar: '/assets/avatar-daniel.jpg',
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-mono text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight">
            Trusted by Serious <br className="hidden sm:block" />
            <span className="italic font-serif text-gold-400">Collectors.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            See exactly how collectors and investment offices manage their high-horology assets worldwide.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, idx) => {
            const isFeatured = activeSlide === idx;

            return (
              <div
                key={item.name}
                onClick={() => setActiveSlide(idx)}
                className={`group rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                  isFeatured
                    ? 'bg-[#0E131A] border-gold-500/50 shadow-2xl shadow-gold-900/15'
                    : 'bg-[#0A0D12] border-white/[0.08] hover:border-white/20'
                } min-h-[340px]`}
              >
                <div>
                  {/* Top Row: Watch Tag & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-sm font-semibold text-white">
                      {item.watchTag}
                    </span>
                    <div className="flex items-center gap-1 font-mono text-xs text-gold-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                {/* Bottom Row: Avatar & Collector Info */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full overflow-hidden border border-gold-500/40 bg-black/40 flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">{item.name}</h4>
                      <span className="text-[11px] text-gray-500 font-sans block">
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Quote Icon */}
                  <Quote className="w-6 h-6 text-gold-500/30" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Arrow Controls & Pagination Dots */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-white flex items-center justify-center transition-all duration-200"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-6 bg-gold-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-white flex items-center justify-center transition-all duration-200"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
