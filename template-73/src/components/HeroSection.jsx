import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

export default function HeroSection({ onDiscoverClick }) {
  const [purpose, setPurpose] = useState('Rent');
  const [city, setCity] = useState('New York');
  const [location, setLocation] = useState('Manhattan');
  const [propertyType, setPropertyType] = useState('Villa');
  const [price, setPrice] = useState('$50k - $100k');
  const [beds, setBeds] = useState('4 Beds');
  const [baths, setBaths] = useState('3 Baths');

  return (
    <section id="home" className="w-full pt-10 pb-24 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Letter-Spaced Kicker */}
        <div className="text-center mb-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.4em] text-neutral-800 uppercase">
            D I S C O V E R &nbsp; Y O U R
          </span>
        </div>

        {/* Giant Headline */}
        <div className="text-center mb-10">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-condensed font-black tracking-tight text-black leading-none uppercase">
            DREAM HOME
          </h1>
        </div>

        {/* Hero Architectural Image Frame with Integrated Filter Overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 min-h-[460px] sm:min-h-[540px] flex flex-col justify-end bg-neutral-900 group">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Modern Luxury Glass Architecture In Nature"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />

          {/* Semi-transparent dark filter bar across bottom of image */}
          <div className="relative z-10 p-4 sm:p-6 bg-black/60 backdrop-blur-md border-t border-white/10 m-4 rounded-xl">
            {/* Row 1 Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-3 border-b border-white/10">
              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Purpose
                </label>
                <div className="relative">
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="Rent">Rent</option>
                    <option className="bg-neutral-900" value="Buy">Buy</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  City
                </label>
                <div className="relative">
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="New York">New York</option>
                    <option className="bg-neutral-900" value="Los Angeles">Los Angeles</option>
                    <option className="bg-neutral-900" value="Miami">Miami</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="Manhattan">Manhattan</option>
                    <option className="bg-neutral-900" value="Brooklyn">Brooklyn</option>
                    <option className="bg-neutral-900" value="Beverly Hills">Beverly Hills</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="Villa">Villa</option>
                    <option className="bg-neutral-900" value="House">House</option>
                    <option className="bg-neutral-900" value="Apartment">Apartment</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Status
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4">
                    <option className="bg-neutral-900" value="Available">Available</option>
                    <option className="bg-neutral-900" value="Pre-launch">Pre-launch</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2 Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Price
                </label>
                <div className="relative">
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="$50k - $100k">$50k - $100k</option>
                    <option className="bg-neutral-900" value="$100k - $250k">$100k - $250k</option>
                    <option className="bg-neutral-900" value="$250k+">$250k+</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Beds
                </label>
                <div className="relative">
                  <select
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="2 Beds">2 Beds</option>
                    <option className="bg-neutral-900" value="4 Beds">4 Beds</option>
                    <option className="bg-neutral-900" value="6+ Beds">6+ Beds</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Baths
                </label>
                <div className="relative">
                  <select
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4"
                  >
                    <option className="bg-neutral-900" value="2 Baths">2 Baths</option>
                    <option className="bg-neutral-900" value="3 Baths">3 Baths</option>
                    <option className="bg-neutral-900" value="4+ Baths">4+ Baths</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  More Option
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none appearance-none cursor-pointer pr-4">
                    <option className="bg-neutral-900" value="Pool & Garage">Pool & Garage</option>
                    <option className="bg-neutral-900" value="Penthouse View">Penthouse View</option>
                  </select>
                  <ChevronDown className="w-3 h-3 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Welcome text + Discover button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl leading-relaxed">
            Welcome to Casper, where your dream home is just a click away. Whether you're buying, selling, or investing in real estate, our dedicated team is here to make your property journey seamless and rewarding.
          </p>

          <button
            onClick={onDiscoverClick}
            className="px-10 py-3.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shrink-0"
          >
            Discover
          </button>
        </div>
      </div>
    </section>
  );
}
