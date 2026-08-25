import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { propertiesData } from '../data/mockData';

export default function TopPicksSection({ onSelectProperty, activeFilter }) {
  const [selectedCategory, setSelectedCategory] = useState('Top Sellers');
  const [favorites, setFavorites] = useState([1, 4]); // default liked items

  const categories = ['Top Sellers', 'Condo', 'Villa', 'Business', 'Warehouse', 'Lease'];

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Filter properties based on tab or external filter
  const filteredProperties = propertiesData.filter(item => {
    if (selectedCategory === 'Top Sellers') return true;
    return item.category === selectedCategory || item.type === selectedCategory;
  });

  return (
    <section id="picks" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto">
      {/* Top Header */}
      <div className="mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-zinc-900 tracking-normal uppercase mb-6"
        >
          Top Picks
        </motion.h2>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-2 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-zinc-700 border border-zinc-200/80 hover:border-zinc-400'
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* 6 Cards Grid (2 rows x 3 cols) */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProperties.map((property, index) => {
            const isFav = favorites.includes(property.id);
            return (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => onSelectProperty(property)}
                className="group relative rounded-[28px] sm:rounded-[34px] overflow-hidden aspect-[4/5] sm:aspect-[3.6/4.8] shadow-lg cursor-pointer bg-zinc-900"
              >
                {/* Background Property Image */}
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover zoom-card-img group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  {/* Rating Badge */}
                  <div className="glass-pill px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
                    <span>{property.rating}</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>

                  {/* Favorite Heart Button */}
                  <motion.button
                    whileTap={{ scale: 1.3 }}
                    onClick={(e) => toggleFavorite(e, property.id)}
                    className="w-9 h-9 rounded-full glass-pill flex items-center justify-center backdrop-blur-md transition-colors"
                    aria-label="Save to favorites"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-white'
                      }`}
                    />
                  </motion.button>
                </div>

                {/* Bottom Property Information */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex flex-col justify-end">
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-1.5 tracking-tight group-hover:text-amber-200 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed mb-4 line-clamp-2">
                    {property.specs}
                  </p>

                  {/* Price Pill */}
                  <div>
                    <span className="inline-block px-5 py-2 rounded-full glass-pill text-xs sm:text-sm font-semibold tracking-wide text-white border border-white/20">
                      {property.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
