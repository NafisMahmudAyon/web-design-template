import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, MapPin, DollarSign, Home, BedDouble } from 'lucide-react';
import { heroData } from '../data/evergreenData';

export const HeroSection = ({ onSearch, activeFilter, onFilterChange }) => {
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('All');
  const [location, setLocation] = useState('All');
  const [rooms, setRooms] = useState('2 Bed rooms');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch?.({
      type: propertyType,
      price: priceRange,
      location,
      rooms,
      category: activeFilter
    });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brandDark text-white">
      {/* Background Image with Forest Architectural Retreat */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.bgImage}
          alt="Modern Architectural Forest Villa"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-105"
        />
        {/* Subtle vignette gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brandDark via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(159,232,112,0.1),transparent_60%)]" />
      </div>

      {/* Main Hero Header Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        {/* Top Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          {heroData.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterChange?.(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-white text-brandDark shadow-md'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Headline & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.08] max-w-3xl">
              {heroData.headline}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed border-l-2 border-brandLime/60 pl-4">
              {heroData.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Floating Property Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-800 border border-slate-100/80"
        >
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900">
              Find the best place
            </h3>
          </div>

          <form onSubmit={handleSearchSubmit}>
            {/* 4 Search Inputs Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Looking for */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Looking for
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    placeholder="Enter type"
                    className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brandDark transition-colors"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Price
                </label>
                <div className="relative">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-brandDark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="All">Price</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-3m">$1M - $3M</option>
                    <option value="above-3m">Above $3M</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Locations */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Locations
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-brandDark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="All">Location</option>
                    <option value="New York">New York</option>
                    <option value="Denver, CO">Denver, CO</option>
                    <option value="Austin, TX">Austin, TX</option>
                    <option value="Colorado">Colorado</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Number of rooms */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Number of rooms
                </label>
                <div className="relative">
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-brandDark transition-colors appearance-none cursor-pointer"
                  >
                    <option value="1 Bed room">1 Bed room</option>
                    <option value="2 Bed rooms">2 Bed rooms</option>
                    <option value="3 Bed rooms">3 Bed rooms</option>
                    <option value="5+ Bed rooms">5+ Bed rooms</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Bottom Filter Pills & Submit Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 mr-1">Filter:</span>
                {heroData.filters.map((fil) => {
                  const isSelected = activeFilter === fil;
                  return (
                    <button
                      key={fil}
                      type="button"
                      onClick={() => onFilterChange?.(fil)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-brandDark text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {fil}
                    </button>
                  );
                })}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-brandDark hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Search Properties</span>
                <Search className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
