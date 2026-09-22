import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Calendar, Star, ArrowRight } from 'lucide-react';
import { destinationsData } from '../data/journeoData';

export default function DestinationsSection({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('Family Holidays');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filter items based on active category or display all with category highlight
  const filteredItems = destinationsData.items.filter((item) => {
    if (activeCategory === 'Family Holidays') return true;
    return item.category === activeCategory;
  });

  const displayItems = filteredItems.length > 0 ? filteredItems : destinationsData.items;

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-gray-950" />
              <span>{destinationsData.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
            >
              {destinationsData.headline}
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed max-w-md"
            >
              {destinationsData.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Filter Category Tabs (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-4 mb-10">
          {destinationsData.categories.map((cat) => {
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200/80'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6-Card Destination Grid (2 rows x 3 cols) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayItems.map((item) => {
              const isFav = !!favorites[item.id];

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  onClick={() => onSelectDestination && onSelectDestination(item)}
                  className="rounded-[28px] bg-white border border-gray-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  {/* Image with Heart Button */}
                  <div className="h-60 sm:h-64 relative overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Favorite Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(e, item.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-gray-800 shadow-md transition-transform active:scale-90"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-rose-500 text-rose-500' : 'text-gray-700'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Destination Info */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Meta Details: Location • Dates • Rating */}
                      <div className="mt-3 flex items-center flex-wrap gap-y-1.5 text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-medium text-gray-700">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {item.country}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          {item.dateRange}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="flex items-center gap-1 text-amber-600 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Pricing & CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl sm:text-2xl font-extrabold text-gray-950 font-display">
                            {item.price}
                          </span>
                          <span className="text-xs text-gray-500">{item.period}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {item.inclusion}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectDestination && onSelectDestination(item);
                        }}
                        className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-900 bg-transparent hover:bg-gray-900 hover:text-white text-xs font-semibold text-gray-800 transition-all duration-200 flex-shrink-0"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
