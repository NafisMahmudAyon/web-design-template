import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Bed, Bath, Maximize2, Heart } from 'lucide-react';
import { featuredProperties } from '../data/properties';

export default function Section2FeaturedProperties({ onSelectProperty, onToggleSave, savedSet }) {
  return (
    <section id="featured" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#121212]">
              Featured <span className="font-italic-serif font-normal text-[#121212]">Properties</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-sm md:text-base text-[#666666] max-w-md leading-relaxed">
              We blend design, technology, and trust to connect people with spaces they’ll love.
            </p>

            <button
              onClick={() => onSelectProperty(featuredProperties[0])}
              className="shrink-0 bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer group"
            >
              <span>View All</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.slice(0, 3).map((property, index) => {
            const isSaved = savedSet?.has(property.id);
            return (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => onSelectProperty(property)}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#F6F6F4] border border-gray-200/60 flex flex-col justify-end min-h-[520px] cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                </div>

                {/* Top Badge & Save Heart */}
                <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between pointer-events-auto">
                  <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {property.tag}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(property);
                    }}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </div>

                {/* Bottom Property Info overlay */}
                <div className="relative z-10 p-8 text-white space-y-4">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#F8BA8B] transition-colors">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-extrabold text-white">
                      {property.price}
                    </span>
                  </div>

                  {/* Specs Row */}
                  <div className="flex items-center space-x-4 text-xs font-semibold text-white/80 pt-2 border-t border-white/20">
                    <span>{property.beds} Bed</span>
                    <span className="text-white/40">|</span>
                    <span>{property.baths} Bath</span>
                    <span className="text-white/40">|</span>
                    <span>{property.sqft}</span>
                  </div>

                  {/* Location Row */}
                  <div className="flex items-center text-xs text-white/70 gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F8BA8B]" />
                    <span>{property.location}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
