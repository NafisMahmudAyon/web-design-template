import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Bath, ArrowRight, Heart, MapPin, Tag } from 'lucide-react';
import { premierHousesData } from '../data/evergreenData';

export const PremierHousesSection = ({ onSelectProperty, activeCategory = 'All' }) => {
  const [savedProperties, setSavedProperties] = useState({});

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSavedProperties((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProperties = activeCategory === 'All' || activeCategory === 'House'
    ? premierHousesData.properties
    : premierHousesData.properties.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <section id="properties" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              {premierHousesData.headline}
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base font-sans leading-relaxed">
              {premierHousesData.subtitle}
            </p>
          </div>

          <button
            onClick={() => onSelectProperty?.(premierHousesData.properties[0])}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brandDark hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md self-start sm:self-auto group"
          >
            <span>{premierHousesData.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Property Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const isSaved = savedProperties[property.id];

            return (
              <div
                key={property.id}
                onClick={() => onSelectProperty?.(property)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Container with Badges */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* For Sale Pill Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-brandDark text-xs font-bold tracking-wide shadow-sm">
                      {property.tag}
                    </span>
                  </div>

                  {/* Bookmark Heart Button */}
                  <button
                    onClick={(e) => toggleSave(property.id, e)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-rose-500 shadow-sm transition-transform active:scale-90"
                    aria-label="Save property"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isSaved ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Card Info Body */}
                <div className="p-6">
                  {/* Specs Row */}
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4 text-slate-400" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span>{property.bathrooms} Bathroom</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-2">
                    {property.title}
                  </h3>

                  {/* Price & Address */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-baseline gap-2 text-xs">
                    <span className="text-sm font-bold font-serif text-slate-900">
                      {property.price}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500 font-sans truncate max-w-[200px]">
                      {property.address}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
