import React, { useState } from 'react';
import { ChevronDown, MapPin, Search, Play, Home, DollarSign, Bed } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onGetStartedClick, onWatchVideoClick }) {
  const [rentOrBuy, setRentOrBuy] = useState('Rent');
  const [locationText, setLocationText] = useState('');
  const [propertyType, setPropertyType] = useState('House');
  const [rooms, setRooms] = useState('2 Rooms');
  const [priceRange, setPriceRange] = useState(12000);
  const [resultsCount, setResultsCount] = useState(563);

  const handleSearch = (e) => {
    e.preventDefault();
    setResultsCount(Math.floor(Math.random() * 300) + 400);
  };

  return (
    <section id="home" className="relative w-full bg-white pt-10 pb-20 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid: Headline & Architecture Drawing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Headlines */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Invest in <br />
              <span className="text-gray-900">real estate</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-500 max-w-lg leading-relaxed">
              The property that suits you. Choose an apartment that suits your requirements and financial capabilities. Attractive location close to business centers provides guaranteed rental.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <button
                type="button"
                onClick={onGetStartedClick}
                className="px-8 py-3.5 rounded-full bg-[#0052ff] hover:bg-[#003ecb] text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-95"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={onWatchVideoClick}
                className="flex items-center gap-2 text-xs font-bold text-gray-800 hover:text-[#0052ff] transition-colors py-2 px-2 group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-[#0052ff]" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural House Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background soft geometric sunny halo */}
            <div className="w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#fff4a3]/60 blur-3xl absolute -z-0"></div>

            <div className="relative z-10 w-full max-w-md sm:max-w-lg">
              <img
                src="/assets/hero-house.jpg"
                alt="Modern Modular Villa Architecture"
                className="w-full h-auto object-contain drop-shadow-sm hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Floating Property Search Filter Bar */}
        <div className="w-full max-w-5xl mx-auto -mt-6 relative z-20">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-3xl sm:rounded-full p-4 sm:p-5 shadow-2xl border border-gray-100 flex flex-col gap-4"
          >
            {/* Upper and Lower Controls row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
              {/* Filter 1: Rent / Buy Dropdown */}
              <div className="lg:col-span-2 flex items-center gap-1.5 px-3 py-2 bg-gray-50 rounded-2xl border border-gray-200/60">
                <Home className="w-4 h-4 text-[#0052ff]" />
                <select
                  value={rentOrBuy}
                  onChange={(e) => setRentOrBuy(e.target.value)}
                  className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer w-full"
                >
                  <option value="Rent">Rent</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>

              {/* Filter 2: Location Input */}
              <div className="lg:col-span-4 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-200/60">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={locationText}
                  onChange={(e) => setLocationText(e.target.value)}
                  placeholder="Your desired location goes here"
                  className="bg-transparent text-xs text-gray-800 placeholder-gray-400 focus:outline-none w-full"
                />
              </div>

              {/* Filter 3: Property Type */}
              <div className="lg:col-span-2 flex items-center gap-1.5 px-3 py-2 bg-gray-50 rounded-2xl border border-gray-200/60">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent text-xs font-bold text-gray-800 focus:outline-none cursor-pointer w-full"
                >
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Office">Office</option>
                </select>
              </div>

              {/* Filter 4: Results Count Indicator */}
              <div className="lg:col-span-2 text-center hidden lg:block">
                <span className="text-base font-black text-gray-900 block leading-tight">
                  {resultsCount}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">Results</span>
              </div>

              {/* Filter 5: Search Button */}
              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#0052ff] hover:bg-[#003ecb] text-white text-xs font-bold shadow-md shadow-blue-500/25 transition-all active:scale-95"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Bottom Row: Price Range Slider & Room count */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center pt-2 border-t border-gray-100 text-xs">
              {/* Currency selector */}
              <div className="lg:col-span-2 flex items-center gap-1 text-gray-600 font-semibold px-2">
                <DollarSign className="w-3.5 h-3.5 text-[#0052ff]" />
                <span>USD</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>

              {/* Range Slider */}
              <div className="lg:col-span-6 flex items-center gap-3 px-2">
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#0052ff] text-[11px] font-bold">
                  $4,500
                </span>
                <input
                  type="range"
                  min="4500"
                  max="25000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="flex-1 accent-[#0052ff] cursor-pointer h-1.5 bg-gray-200 rounded-lg"
                />
                <span className="px-2 py-0.5 rounded-md bg-[#0052ff] text-white text-[11px] font-bold">
                  ${priceRange.toLocaleString()}
                </span>
              </div>

              {/* Rooms count */}
              <div className="lg:col-span-4 flex items-center justify-end gap-2 px-2">
                <Bed className="w-3.5 h-3.5 text-gray-400" />
                <select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  className="bg-transparent font-semibold text-gray-700 cursor-pointer focus:outline-none"
                >
                  <option value="1 Room">1 Room</option>
                  <option value="2 Rooms">2 Rooms</option>
                  <option value="3 Rooms">3 Rooms</option>
                  <option value="4+ Rooms">4+ Rooms</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
