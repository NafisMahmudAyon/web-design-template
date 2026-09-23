import React, { useState } from 'react';
import { Bed, Bath, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../data/rentalData';

export default function MostViewedSection({ onSelectProperty }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const displayProperties = PROPERTIES.slice(0, 3);

  return (
    <section id="location" className="w-full py-16 bg-[#fafbfc] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f334c] tracking-tight mb-3">
            Most Viewed
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Discover a range of vacation homes worldwide. Book securely and get expert customer support for a stress-free stay.
          </p>
        </div>

        {/* 3 Luxury Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProperties.map((prop, idx) => (
            <div
              key={prop.id}
              onClick={() => onSelectProperty?.(prop)}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with distinctive architectural curve */}
              <div className="p-3">
                <div
                  className="w-full h-56 overflow-hidden rounded-2xl relative bg-gray-100"
                  style={{
                    clipPath: 'polygon(0 0, 85% 0, 100% 12%, 100% 100%, 0 100%)',
                  }}
                >
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0f334c]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white">
                    {prop.category}
                  </div>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="px-6 pb-6 pt-2">
                {/* Location & Amenities row */}
                <div className="flex items-center justify-between text-gray-400 text-[11px] mb-2 font-medium">
                  <span className="truncate max-w-[170px]">{prop.location}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-gray-400" />
                      <span>{prop.beds}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-gray-400" />
                      <span>{prop.baths}</span>
                    </span>
                  </div>
                </div>

                {/* Property Title */}
                <h3 className="text-base font-bold text-[#0f334c] group-hover:text-blue-600 transition-colors mb-2">
                  {prop.title}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-extrabold text-[#0f334c]">
                    {prop.price}
                  </span>
                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveSlide(dotIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === dotIndex
                  ? 'bg-[#0f334c] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
