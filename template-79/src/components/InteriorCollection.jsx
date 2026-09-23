import React from 'react';
import { ArrowRight } from 'lucide-react';

export const InteriorCollection = ({ onViewMore }) => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Tall Arch Photo with Floor Lamp & Pink Armchair */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xs sm:max-w-sm h-[440px] sm:h-[500px] rounded-t-full overflow-hidden shadow-xl bg-neutral-100 group border-4 border-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=85"
                alt="Editorial pink armchair with brass floor lamp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Center Column: Text & CTA Button */}
          <div className="lg:col-span-4 flex flex-col items-start px-2 lg:px-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight text-neutral-900 tracking-tight mb-6">
              We Provide the <br />
              <span className="italic font-normal font-serif text-neutral-800">
                Best Interior
              </span>{' '}
              <br />
              Collection
            </h2>

            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-8">
              The first items created for household use were made of stone, as wood was not readily available during the time period. Dressers, cupboards, and beds were among the first forms of furniture. One particular issue of fixtures.
            </p>

            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-neutral-800 hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Multi-Arch Photo Composition */}
          <div className="lg:col-span-4 flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
            {/* Top Row: 2 Small Arches */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-44 sm:h-52 rounded-t-full overflow-hidden shadow-md bg-neutral-100 group border-2 border-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
                  alt="Living room yellow couch"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-44 sm:h-52 rounded-t-full overflow-hidden shadow-md bg-neutral-100 group border-2 border-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=500&q=80"
                  alt="Sunlit wood dining table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Row: Large Arch Dining Room */}
            <div className="h-56 sm:h-64 rounded-b-full overflow-hidden shadow-md bg-neutral-100 group border-2 border-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85"
                alt="Luxury dining room set with dark circular table"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
