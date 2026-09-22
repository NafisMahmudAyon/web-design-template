import React, { useState } from 'react';
import { Compass, Home, Leaf, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { realtorFeatures } from '../data/homelyData';

const iconMap = {
  compass: Compass,
  home: Home,
  leaf: Leaf,
  layers: Layers,
};

export default function RealtorFeaturesSection() {
  // Card Polymorphism: active/hovered card dynamically shifts without height jitter
  const [activeCardIndex, setActiveCardIndex] = useState(1); // Default to card 2 like in mockup

  return (
    <section id="features" className="py-16 sm:py-24 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight leading-tight">
            The Fastest Way To Compare The
            <br />
            Best REALTORS
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Canal-side Twin Modern Villas (spans 5) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden h-[420px] sm:h-[480px] shadow-xl border border-neutral-200/80 group"
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
              alt="Canal-side twin modern wooden villas in forest"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-xs font-extrabold px-4 py-2 rounded-full shadow-md">
                Waterfront Canal Villas
              </span>
            </div>
          </motion.div>

          {/* Right Column: 4 Feature Cards with Dynamic Card Polymorphism (spans 7) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {realtorFeatures.map((feat, idx) => {
              const IconComponent = iconMap[feat.icon] || Home;
              const isActive = activeCardIndex === idx;

              return (
                <div
                  key={feat.id}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  onFocus={() => setActiveCardIndex(idx)}
                  tabIndex={0}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border flex items-start gap-4 sm:gap-5 ${
                    isActive
                      ? 'bg-[#15181C] text-white border-neutral-800 shadow-xl -translate-y-0.5'
                      : 'bg-white text-neutral-900 border-neutral-200/70 hover:border-neutral-300 hover:shadow-md'
                  }`}
                  style={{ minHeight: '92px' }} // Zero-CLS spacing stability
                >
                  {/* Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive
                        ? 'bg-neutral-800 text-[#C88C48]'
                        : 'bg-amber-50 text-[#C88C48] group-hover:bg-amber-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-base sm:text-lg font-bold font-syne tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {feat.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 leading-relaxed transition-colors ${
                        isActive ? 'text-neutral-300' : 'text-neutral-500'
                      }`}
                    >
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
