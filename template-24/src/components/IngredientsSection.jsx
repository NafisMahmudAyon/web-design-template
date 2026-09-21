import React from 'react';
import { INGREDIENTS_LIST, INGREDIENT_PHOTOS } from '../data/mockData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 bg-[#eae6df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
              what's inside
            </span>
          </div>
          <h2 className="font-display-title text-4xl sm:text-6xl font-black text-[#0a4b5c] uppercase tracking-tight">
            SHORT LIST. LONG FLAVOR.
          </h2>
          <p className="text-sm sm:text-base text-[#0a4b5c]/80 font-medium">
            We never use artificial concentrates, mystery natural flavors, or stevia aftertaste. Just real ingredients you can pronounce and point to in a garden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-5 space-y-4">
            {INGREDIENTS_LIST.map((item) => (
              <div
                key={item.num}
                className="group bg-white p-5 rounded-2xl border-2 border-[#0a4b5c] shadow-sm hover:shadow-md hover:border-emerald-700 transition-all duration-300 flex items-center space-x-4"
              >
                <span className="font-display-title text-3xl font-black text-[#0a4b5c] bg-[#b8ff00] w-12 h-12 rounded-xl flex items-center justify-center border border-[#0a4b5c] group-hover:bg-[#f7c948] transition-colors">
                  {item.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-display-title text-lg font-black text-[#0a4b5c] uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-800 font-bold mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Sourced directly from organic farms</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 5 Photo Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {INGREDIENT_PHOTOS.map((photo, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden border-2 border-[#0a4b5c] group h-44 ${
                  index === 0 ? 'sm:col-span-2 sm:h-44' : ''
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4b5c]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#b8ff00] bg-[#0a4b5c] px-2.5 py-1 rounded-md border border-[#b8ff00]/40 inline-block">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
