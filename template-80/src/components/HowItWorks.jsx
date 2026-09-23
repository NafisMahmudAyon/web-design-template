import React, { useState } from 'react';
import { CrownDoodle } from './HandDoodles';
import { processSteps } from '../data/physicsData';

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Top Hand-drawn Zig-zag Crown Doodle */}
        <div className="mb-4">
          <CrownDoodle className="text-[#548A63]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 tracking-tight mb-3">
          How it Work
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-500 text-xs sm:text-sm max-w-lg mx-auto mb-16">
          We have been providing great flooring solutions service.
        </p>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {processSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`relative cursor-pointer p-8 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white border-neutral-200/90 shadow-xl -translate-y-1'
                    : 'bg-[#FAFBF9] border-transparent hover:bg-white hover:border-neutral-200/60'
                }`}
              >
                {/* Oversized Faint Number in Background */}
                <span className="font-display text-4xl sm:text-5xl font-black text-neutral-200/60 block mb-4 select-none">
                  {step.num}
                </span>

                {/* Step Title */}
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-neutral-500 text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-[#548A63] rounded-t-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
