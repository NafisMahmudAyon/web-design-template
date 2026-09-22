import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Maximize, Heart, ArrowRight } from 'lucide-react';
import { categoriesList, propertiesData } from '../data/evergreen59Data';

export const PropertiesSection = ({ onSelectProperty }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [savedItems, setSavedItems] = useState({});

  const toggleSave = (id, e) => {
    e.stopPropagation();
    setSavedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filtered = selectedCategory === 'All'
    ? propertiesData
    : propertiesData.filter((p) => p.category === selectedCategory || selectedCategory === 'Villas' || selectedCategory === 'Apartments');

  return (
    <section id="properties" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.18]">
              Explore Apartments and <br />
              Homes for Sale
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
              Each listing offers exceptional quality, unique features, and prime locations
            </p>
          </div>
        </div>

        {/* Filter Pills Horizontal Scroller */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 Listing Cards Grid (Zero-CLS Spacing Stability) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const isSaved = savedItems[item.id];

            return (
              <div
                key={item.id}
                onClick={() => onSelectProperty?.(item)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Price Badge in top left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold tracking-wide shadow-sm">
                      {item.price}
                    </span>
                  </div>

                  {/* Bookmark Heart Button */}
                  <button
                    onClick={(e) => toggleSave(item.id, e)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-rose-500 shadow-sm transition-transform active:scale-90"
                    aria-label="Save listing"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isSaved ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Card Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-brandLime-dark transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mb-4">
                    {item.address}
                  </p>

                  {/* Specs Row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span>{item.beds} Beds</span>
                    <span>•</span>
                    <span>{item.baths} Bath</span>
                    <span>•</span>
                    <span>{item.sqft}</span>
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
