import React from 'react';
import { FramedHeader } from './FramedHeader';
import { testimonials } from '../data/investaData';
import { Star } from 'lucide-react';

export const TestimonialSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="relative mb-5">
            <div className="relative inline-block border border-neutral-300 px-8 sm:px-10 pt-4 pb-5">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 text-[11px] uppercase tracking-[0.18em] font-semibold bg-white text-neutral-500">
                Testimonial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
                <span className="italic font-normal font-serif text-neutral-800">
                  Testimonial
                </span>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla natus mollitia ipsum. Voluptatibus, perspiciatis placeat.
          </p>
        </div>

        {/* 2x2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 sm:p-10 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Avatar, Name, Location & Star Ratings */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-400 font-medium">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* 5 Warm Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-neutral-500 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
