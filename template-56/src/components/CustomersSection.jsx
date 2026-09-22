import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Heart } from 'lucide-react';
import { customersData } from '../data/wanderlustData';

export const CustomersSection = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  const reviews = [
    {
      ...customersData.travelers[0],
      quote: 'Wanderlust planned our Japanese cultural trek flawlessly. From Kyoto tea masters to mountain ryokans, every single detail was extraordinary.'
    },
    {
      ...customersData.travelers[1],
      quote: 'The alpine expedition in the Dolomites exceeded every expectation. Our mountain guide was seasoned, warm, and took us to untouched ridges.'
    },
    {
      ...customersData.travelers[2],
      quote: 'Booking our African safari and coastal retreat was seamless. 24/7 concierge handled flight re-routes without us lifting a finger.'
    },
    {
      ...customersData.travelers[3],
      quote: 'The most authentic travel experience of my life. Transparent pricing, bespoke local itineraries, and memories that will last forever.'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-brandAmber fill-brandAmber" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            {customersData.headline}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-light leading-relaxed">
            {customersData.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid - Zero CLS Spacing Stability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {reviews.map((traveler) => {
            const isHighlighted = activeCardId === traveler.id;

            return (
              <div
                key={traveler.id}
                onMouseEnter={() => setActiveCardId(traveler.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`h-[380px] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                  isHighlighted
                    ? 'bg-white border-brandAmber shadow-xl shadow-amber-500/10 -translate-y-1.5'
                    : 'bg-white/80 border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Top Section: Avatar & Rating */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      <img
                        src={traveler.image}
                        alt={traveler.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-brandEmerald/20 shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brandEmerald text-white flex items-center justify-center text-[10px]">
                        ✓
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-brandAmber text-brandAmber" />
                      <span>{traveler.rating}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-0.5">
                    {traveler.name}
                  </h3>
                  <span className="text-xs font-sans text-brandEmerald font-medium uppercase tracking-wider block mb-4">
                    {traveler.role}
                  </span>

                  {/* Quote content */}
                  <div className="relative">
                    <Quote className="w-4 h-4 text-slate-300 mb-1" />
                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-4">
                      "{traveler.quote}"
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-slate-600 text-xs">
                  <span>Verified Booking</span>
                  <span className="text-brandAmber font-serif font-medium">★★★★★</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
