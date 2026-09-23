import React, { useState } from 'react';
import { Bed, Maximize2, MapPin, ArrowRight, Eye, Heart } from 'lucide-react';
import { FramedHeader } from './FramedHeader';
import { propertyCategories, propertyListings } from '../data/investaData';

export const PropertiesSection = ({ onSelectProperty }) => {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [likedIds, setLikedIds] = useState({});

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProperties =
    activeCategory === 'Explore All'
      ? propertyListings
      : propertyListings.filter(
          (p) => p.category === activeCategory || activeCategory === 'Popular'
        );

  return (
    <section id="properties" className="py-20 md:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="relative mb-4">
              <div className="relative inline-block border border-neutral-300 px-6 sm:px-8 pt-4 pb-5">
                <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-white text-neutral-500">
                  Our Properties
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
                  Our <span className="italic font-normal font-serif text-neutral-800">Properties</span>
                </h2>
              </div>
            </div>
            <p className="text-neutral-500 text-sm sm:text-base max-w-xl">
              Better Homes &amp; Gardens encourages its clients to expect more from their realtor and promises they're up to the challenge.
            </p>
          </div>

          <div>
            <button
              onClick={() => setActiveCategory('Explore All')}
              className="px-8 py-3.5 bg-[#202020] hover:bg-neutral-800 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-10 overflow-x-auto no-scrollbar gap-6">
          <div className="flex items-center space-x-6 sm:space-x-8 shrink-0">
            {propertyCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium transition-colors relative pb-2 ${
                  activeCategory === cat
                    ? 'text-neutral-950 font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 animate-fadeIn" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setActiveCategory('Explore All')}
            className="text-xs font-semibold text-neutral-900 hover:text-investa-red transition-colors shrink-0 uppercase tracking-wider hidden sm:block"
          >
            Explore All &rarr;
          </button>
        </div>

        {/* Properties Grid - Strict Zero CLS fixed container height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 3).map((property) => (
            <div
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="group cursor-pointer bg-white border border-neutral-200/90 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[480px] sm:h-[500px]"
            >
              {/* Media Container with Fixed Aspect Ratio */}
              <div className="relative h-[310px] w-full overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Price Tag Pill Top Left */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-md shadow-sm border border-white/60">
                  <span className="font-serif text-sm sm:text-base font-bold text-neutral-900">
                    {property.price}
                  </span>
                </div>

                {/* Wishlist Like Button Top Right */}
                <button
                  onClick={(e) => toggleLike(property.id, e)}
                  className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
                    likedIds[property.id]
                      ? 'bg-investa-red text-white border-investa-red'
                      : 'bg-white/80 text-neutral-700 hover:bg-white border-white/50'
                  }`}
                  aria-label="Save to favorites"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedIds[property.id] ? 'fill-current' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Card Content Footer Container */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-investa-red transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 shrink-0 pt-1">
                      {property.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  {/* Bed & Area Specs */}
                  <div className="flex items-center space-x-4 text-xs text-neutral-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-neutral-400" />
                      {property.beds} Beds
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                      {property.area}
                    </span>
                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty(property);
                    }}
                    className="px-5 py-2 bg-[#202020] hover:bg-neutral-800 text-white text-xs font-medium rounded-md shadow-sm transition-all duration-200 transform group-hover:translate-x-0.5"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
