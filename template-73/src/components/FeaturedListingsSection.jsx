import React, { useState } from 'react';
import { Camera, FileText, MapPin, Bed, Bath, ArrowLeft, ArrowRight } from 'lucide-react';
import { PROPERTY_CATEGORIES, LISTINGS } from '../data/casperData';

export default function FeaturedListingsSection({ onSelectListing }) {
  const [activeCategory, setActiveCategory] = useState('Best Selling');
  const [activePage, setActivePage] = useState(0);

  const filteredListings =
    activeCategory === 'Best Selling'
      ? LISTINGS
      : LISTINGS.filter((item) => item.category === activeCategory);

  const displayListings = filteredListings.length > 0 ? filteredListings : LISTINGS;

  return (
    <section id="listings" className="w-full py-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Giant Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-condensed font-black tracking-tight text-black leading-none uppercase">
            OUR FEATURED LISTINGS
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-16">
          {PROPERTY_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 6-Card Grid (2 Rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayListings.map((prop) => (
            <div
              key={prop.id}
              onClick={() => onSelectListing?.(prop)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame with badges */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900 mb-4 shadow-sm">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />

                {/* Badges in top left */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    <span>{prop.photos}</span>
                  </span>
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold text-white flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    <span>{prop.plans}</span>
                  </span>
                </div>
              </div>

              {/* Title & Price Row */}
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-base font-bold text-black group-hover:text-neutral-600 transition-colors">
                  {prop.title}
                </h3>
                <span className="text-base font-black text-black">
                  {prop.price}
                </span>
              </div>

              {/* Location & Amenities */}
              <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{prop.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5" />
                    <span>{prop.beds}</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5" />
                    <span>{prop.baths}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Navigation */}
        <div className="flex items-center justify-between max-w-xs mx-auto border-t border-gray-200 pt-6">
          <button
            onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
            className="p-2 text-gray-400 hover:text-black transition-colors"
            aria-label="Previous page"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setActivePage(dot)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activePage === dot ? 'w-6 bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Page ${dot + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActivePage((prev) => Math.min(3, prev + 1))}
            className="p-2 text-gray-400 hover:text-black transition-colors"
            aria-label="Next page"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
