import React, { useState } from 'react';
import { ArrowRight, Search, ChevronDown, MapPin, Building, DollarSign } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection({ onSearchSubmit, onTryNowClick }) {
  const [cityStreet, setCityStreet] = useState('123Street');
  const [propertyType, setPropertyType] = useState('Villa');
  const [priceRange, setPriceRange] = useState('€ 950.000,00');
  const [quickSearch, setQuickSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchSubmit?.({ cityStreet, propertyType, priceRange });
  };

  return (
    <section id="home" className="relative w-full pt-4 pb-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Large Rounded Hero Banner with Twilight Villa */}
        <div className="relative w-full rounded-[36px] sm:rounded-[44px] overflow-hidden min-h-[580px] sm:min-h-[640px] shadow-2xl flex flex-col justify-between">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/hero-villa.jpg"
              alt="Luxury Twilight Villa"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlays for optimal text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e2e]/90 via-[#0a1e2e]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2e]/80 via-transparent to-[#0a1e2e]/40" />
          </div>

          {/* Integrated Navbar */}
          <Navbar onTryNowClick={onTryNowClick} />

          {/* Hero Content (Left-aligned) */}
          <div className="relative z-10 px-6 sm:px-14 py-12 max-w-2xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6">
              Finding Your New <br />
              Home Is Simple
            </h1>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg mb-8">
              RentHomes.com is your go to destination for finding the perfect rental home to suit your needs. With thousands of property listings across the United States, and Europe.
            </p>

            {/* Quick Glass Search Pill */}
            <form
              onSubmit={handleSearch}
              className="relative max-w-xs sm:max-w-sm flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full pl-5 pr-2 py-2 shadow-lg"
            >
              <input
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-xs text-white placeholder-white/60 focus:outline-none w-full"
              />
              <button
                type="submit"
                aria-label="Search"
                className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 text-white flex items-center justify-center transition-all shrink-0 ml-2"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Bottom spacer for overlap */}
          <div className="h-10" />
        </div>

        {/* Floating Property Search Filter Bar (overlapping bottom edge) */}
        <div className="relative z-20 max-w-4xl mx-auto -mt-10 sm:-mt-12 px-4">
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl sm:rounded-full p-3 sm:p-4 shadow-2xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center"
          >
            {/* Filter 1: City Street */}
            <div className="lg:col-span-3 px-4 py-2 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                City Street
              </label>
              <div className="flex items-center justify-between">
                <select
                  value={cityStreet}
                  onChange={(e) => setCityStreet(e.target.value)}
                  className="bg-transparent text-xs font-bold text-[#0f334c] focus:outline-none cursor-pointer w-full appearance-none"
                >
                  <option value="123Street">123Street</option>
                  <option value="Anytown, CA">Anytown, CA</option>
                  <option value="New York, NY">New York, NY</option>
                  <option value="Los Angeles, CA">Los Angeles, CA</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-gray-200" />

            {/* Filter 2: Tipology of Rent */}
            <div className="lg:col-span-3 px-4 py-2 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                Tipology of rent
              </label>
              <div className="flex items-center justify-between">
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="bg-transparent text-xs font-bold text-[#0f334c] focus:outline-none cursor-pointer w-full appearance-none"
                >
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Cottage">Cottage</option>
                  <option value="Apartment">Apartment</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              </div>
            </div>

            <div className="hidden lg:block w-px h-8 bg-gray-200" />

            {/* Filter 3: Price */}
            <div className="lg:col-span-3 px-4 py-2 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                Price
              </label>
              <div className="flex items-center justify-between">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="bg-transparent text-xs font-bold text-[#0f334c] focus:outline-none cursor-pointer w-full appearance-none"
                >
                  <option value="€ 950.000,00">€ 950.000,00</option>
                  <option value="€ 750.000,00">€ 750.000,00</option>
                  <option value="€ 540.000,00">€ 540.000,00</option>
                  <option value="€ 1.200.000,00">€ 1.200.000,00</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0 pointer-events-none" />
              </div>
            </div>

            {/* Filter 4: Search Button */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-5 rounded-full bg-[#0f334c] hover:bg-[#0a2334] text-white text-xs font-bold shadow-lg shadow-navy-900/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
