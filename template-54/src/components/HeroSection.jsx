import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Globe, ArrowRight, Plane, Hotel, Sparkles } from 'lucide-react';
import { heroData } from '../data/journeoData';

export default function HeroSection({ onSearchSubmit }) {
  const [activeTab, setActiveTab] = useState('Holiday');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('2026-12-16');
  const [endDate, setEndDate] = useState('2026-12-24');
  const [guestCount, setGuestCount] = useState(5);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit({
        tab: activeTab,
        destination: destination || 'Kyoto, Japan',
        startDate,
        endDate,
        guests: guestCount
      });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[96vh] lg:min-h-[102vh] flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden">
      {/* Background Alpine Lake & Traveler Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.heroImage}
          alt="Traveler exploring alpine lake and peaks"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Soft atmospheric gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Title & Narrative */}
          <div className="lg:col-span-7">
            {/* Top Destination Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>{heroData.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.08] font-display whitespace-pre-line"
            >
              {heroData.headline}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl"
            >
              {heroData.subtitle}
            </motion.p>
          </div>

          {/* Right Floating Booking Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-full max-w-md bg-white rounded-[32px] p-6 sm:p-7 shadow-widget border border-white/90 text-gray-900"
            >
              <h3 className="text-xl font-bold text-gray-950 font-display">
                Find the best place
              </h3>

              {/* Booking Tabs: Holiday / Flight / Hotels */}
              <div className="mt-4 flex items-center gap-1.5 p-1 rounded-full bg-gray-100 text-xs font-semibold">
                {['Holiday', 'Flight', 'Hotels'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 rounded-full transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-black text-white shadow-xs'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSearch} className="mt-5 space-y-4">
                {/* Destination Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Destination</label>
                  <div className="flex items-center px-3.5 py-3 rounded-2xl border border-gray-200 bg-[#FAFAF9] focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all">
                    <Globe className="w-4 h-4 text-gray-400 mr-2.5 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="e.g., Kyoto, Japan. Rome, Italy. Bali"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden font-normal"
                    />
                  </div>
                </div>

                {/* Date Inputs */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Date</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center px-3 py-2.5 rounded-2xl border border-gray-200 bg-[#FAFAF9]">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" />
                      <div className="text-[11px] font-medium text-gray-800">
                        Sat, 16 Dec 2026
                      </div>
                    </div>
                    <div className="flex items-center px-3 py-2.5 rounded-2xl border border-gray-200 bg-[#FAFAF9]">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 mr-2 flex-shrink-0" />
                      <div className="text-[11px] font-medium text-gray-800">
                        Mon, 24 Dec 2026
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guests Counter Dropdown */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Guests & Travelers</label>
                  <button
                    type="button"
                    onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-2xl border border-gray-200 bg-[#FAFAF9] text-xs sm:text-sm text-gray-900 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{guestCount} People</span>
                    </div>
                    <span className="text-xs text-gray-400">▾</span>
                  </button>

                  {guestDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white rounded-2xl border border-gray-200 shadow-xl z-20 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-700">Total Travelers</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-gray-900">{guestCount}</span>
                        <button
                          type="button"
                          onClick={() => setGuestCount(guestCount + 1)}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Explore Action Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
