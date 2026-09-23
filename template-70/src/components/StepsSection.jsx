import React, { useState } from 'react';
import { Home, Handshake, Key } from 'lucide-react';
import { WORK_STEPS } from '../data/rentalData';

const iconMap = {
  Home: Home,
  Handshake: Handshake,
  Key: Key,
};

export default function StepsSection() {
  const [activeStepId, setActiveStepId] = useState('deal');

  return (
    <section className="w-full py-20 bg-[#fafbfc] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f334c] tracking-tight mb-3">
            Our Work In 3 Steps
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Discover a range of vacation homes worldwide. Book securely and get expert customer support for a stress-free stay.
          </p>
        </div>

        {/* 3 Step Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {WORK_STEPS.map((step) => {
            const IconComponent = iconMap[step.icon] || Home;
            const isActive = activeStepId === step.id;

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStepId(step.id)}
                onClick={() => setActiveStepId(step.id)}
                className={`h-[240px] p-8 rounded-3xl transition-all duration-300 flex flex-col justify-start cursor-pointer border ${
                  isActive
                    ? 'bg-white shadow-xl ring-2 ring-[#0f334c]/10 border-transparent -translate-y-1'
                    : 'bg-white/70 hover:bg-white border-gray-100 shadow-sm'
                }`}
              >
                {/* Icon in soft circle / rounded container */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    isActive
                      ? 'bg-[#0f334c] text-white shadow-md'
                      : 'bg-gray-100 text-[#0f334c]'
                  }`}
                >
                  <IconComponent className="w-5 h-5 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0f334c] mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
