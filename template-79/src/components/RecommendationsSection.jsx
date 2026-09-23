import React, { useState } from 'react';
import { recommendationsData } from '../data/furnData';
import { ChevronRight } from 'lucide-react';

export const RecommendationsSection = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState('Living Room');
  const activeData = recommendationsData[activeTab] || recommendationsData['Living Room'];

  const tabList = ['Living Room', 'Private workspace', 'Gaming room', 'Patio'];

  return (
    <section id="recommendations" className="py-20 md:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight mb-10">
              Our Best <br />
              <span className="italic font-normal font-serif text-neutral-800">
                Recommendation
              </span>
            </h2>

            {/* Tabs List */}
            <div className="space-y-4 max-w-md">
              {tabList.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-white p-6 shadow-md border border-neutral-200/80'
                        : 'p-4 hover:bg-white/60 text-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-serif text-base sm:text-lg ${
                          isActive
                            ? 'font-bold text-neutral-900'
                            : 'font-medium text-neutral-600'
                        }`}
                      >
                        {tab}
                      </h3>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-furn-forest" />
                      )}
                    </div>

                    {/* Expandable text for active item matching design */}
                    {isActive && (
                      <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed animate-fadeIn">
                        {activeData.subtitle}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Grand Arch Frame with Modern Interior */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Grand Arch */}
              <div className="relative w-full h-[460px] sm:h-[520px] rounded-t-full overflow-hidden shadow-2xl bg-neutral-200 group border-4 border-white">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating pill badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-xs font-semibold text-neutral-900">
                  {activeData.tag} &bull; Curated Aesthetics
                </div>
              </div>

              {/* Offset Wireframe Border Accent behind Arch */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-t-full border border-neutral-300 -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
