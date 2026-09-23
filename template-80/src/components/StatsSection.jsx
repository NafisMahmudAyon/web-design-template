import React from 'react';
import { SpringDoodle } from './HandDoodles';
import { tutorStats } from '../data/physicsData';

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Top Hand-drawn Doodle */}
        <div className="mb-4">
          <SpringDoodle className="text-[#548A63]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight mb-3">
          My Stats show that I've <br className="hidden sm:inline" />
          Happy Students
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto mb-16">
          And excellence partiality estimating terminated day everything.
        </p>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {tutorStats.map((stat, idx) => (
            <div key={idx} className="group">
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 group-hover:text-[#548A63] transition-colors block mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
