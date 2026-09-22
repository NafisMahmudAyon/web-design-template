import React, { useState } from 'react';
import { Home, MapPin, DollarSign, ChevronDown, Play, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroData, filterOptions } from '../data/homelyData';

export default function HeroSection({ onOpenTour, onSearch, onOpenVideo }) {
  const [selectedType, setSelectedType] = useState('All House Types');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedBudget, setSelectedBudget] = useState('Select Your Budget');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ type: selectedType, location: selectedLocation, budget: selectedBudget });
  };

  return (
    <section className="bg-[#15181C] text-white pt-10 sm:pt-16 pb-20 relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C88C48]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Text Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
          {/* Left: Main Headline & Explore Button (spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black font-syne tracking-tight leading-[1.05]"
            >
              Making Your
              <br />
              Homeownership
              <br />
              Dreams{' '}
              <span className="text-[#C88C48] inline-block relative">
                Come True.
                {/* Subtle underline flare */}
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#C88C48]/40 rounded-full" />
              </span>
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onClick={() => {
                const el = document.getElementById('projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 border border-neutral-700 hover:border-neutral-500 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full hover:bg-white/5 transition-all shadow-sm active:scale-95"
            >
              Explore now
            </motion.button>
          </div>

          {/* Right: Video Thumbnail Card & Description (spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-left space-y-6"
          >
            {/* Scenic Video Thumbnail with Golden Star */}
            <div className="relative group cursor-pointer" onClick={onOpenVideo}>
              {/* Golden 8-point star icon */}
              <div className="absolute -top-4 -right-4 z-20 text-[#C88C48] animate-pulse">
                <svg className="w-9 h-9 fill-current drop-shadow-md" viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>

              <div className="w-52 sm:w-64 h-28 sm:h-32 rounded-2xl overflow-hidden relative border border-neutral-700 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <img
                  src={heroData.videoThumbnail}
                  alt="Scenic mountain estate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-md">
                    <Play className="w-4 h-4 fill-neutral-900 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-sans">
              {heroData.description}
            </p>
          </motion.div>
        </div>

        {/* Floating Property Search Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-30 mb-8 sm:mb-12"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-3xl sm:rounded-full p-2.5 sm:p-3 shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-neutral-800"
          >
            {/* Field 1: Property Type */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-neutral-200">
              <div className="w-9 h-9 rounded-full bg-amber-50 text-[#C88C48] flex items-center justify-center shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Select Type
                </span>
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-extrabold text-neutral-900 appearance-none pr-5 focus:outline-none cursor-pointer"
                  >
                    {filterOptions.houseTypes.map((t) => (
                      <option key={t} value={t} className="text-neutral-900 font-medium">
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Field 2: Location */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b sm:border-b-0 sm:border-r border-neutral-200">
              <div className="w-9 h-9 rounded-full bg-amber-50 text-[#C88C48] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Location
                </span>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-extrabold text-neutral-900 appearance-none pr-5 focus:outline-none cursor-pointer"
                  >
                    {filterOptions.locations.map((loc) => (
                      <option key={loc} value={loc} className="text-neutral-900 font-medium">
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Field 3: Budget */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2">
              <div className="w-9 h-9 rounded-full bg-amber-50 text-[#C88C48] flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                  Budget
                </span>
                <div className="relative">
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-extrabold text-neutral-900 appearance-none pr-5 focus:outline-none cursor-pointer"
                  >
                    {filterOptions.budgets.map((b) => (
                      <option key={b} value={b} className="text-neutral-900 font-medium">
                        {b}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#C88C48] hover:bg-[#B37836] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-[#C88C48]/30 active:scale-95 shrink-0"
            >
              Search Property
            </button>
          </form>
        </motion.div>

        {/* Panoramic Luxury Villa Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-neutral-800 group h-[360px] sm:h-[480px] lg:h-[540px]"
        >
          <img
            src={heroData.panoramicImage}
            alt="Luxury modern architectural residence"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />

          {/* Interactive 360° Virtual Tour Floating Badge */}
          <div
            onClick={onOpenTour}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex flex-col items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <RotateCw className="w-5 h-5 text-[#C88C48] animate-spin-slow mb-0.5" />
                <span className="text-xs sm:text-sm font-black font-syne tracking-wider">
                  360°
                </span>
                <span className="text-[9px] font-bold text-neutral-300 uppercase tracking-widest">
                  Virtual Tour
                </span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Convex bottom border transition into white content */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[40px] sm:rounded-t-[60px]" />
    </section>
  );
}
