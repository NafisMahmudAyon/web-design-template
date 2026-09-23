import React, { useState } from 'react';
import { Search, ArrowRight, MapPin, Building2, SlidersHorizontal } from 'lucide-react';
import { FramedHeader } from './FramedHeader';

export const HeroSection = ({ onExploreClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onExploreClick(searchQuery || 'Popular');
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & Search Column */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10">
            {/* Signature Framed Header */}
            <div className="relative mb-6">
              <div className="relative inline-block border border-neutral-300 px-6 sm:px-8 pt-4 pb-5">
                <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-white text-neutral-500">
                  Your Dream Home Awaits
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-neutral-900 tracking-tight">
                  Homes <br />
                  <span className="italic font-normal font-serif text-neutral-800">
                    That Match
                  </span>
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Better Homes &amp; Gardens encourages its clients to expect more from their realtor and promises they're up to the challenge.
            </p>

            {/* Property Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="w-full max-w-md flex items-center bg-white border border-neutral-200 rounded-lg p-1.5 shadow-sm hover:border-neutral-300 focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition-all duration-200"
            >
              <div className="flex items-center pl-3 flex-1 min-w-0">
                <Search className="w-4 h-4 text-neutral-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="28,890 properties are available"
                  className="w-full text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 bg-transparent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 sm:px-7 py-3 bg-[#202020] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium rounded-md shadow-sm transition-all duration-200 shrink-0 transform active:scale-95"
              >
                Explore
              </button>
            </form>

            {/* Quick Metrics Underneath */}
            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-neutral-100 w-full max-w-md">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  28,890+
                </span>
                <span className="text-[12px] text-neutral-500">Live Listings</span>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  99.4%
                </span>
                <span className="text-[12px] text-neutral-500">Client Satisfaction</span>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                  15 Yrs
                </span>
                <span className="text-[12px] text-neutral-500">Industry Trust</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Architectural Balcony Photography */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl bg-neutral-100 group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern luxury apartment balconies with warm timber louvers"
                  className="w-full h-[460px] sm:h-[560px] lg:h-[620px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphic Pill */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-lg flex items-center justify-between sm:gap-6 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center font-serif text-sm">
                      <Building2 className="w-5 h-5 text-investa-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">
                        The Manhattan Sky Residence
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        Tribeca, New York • Verified Architectural Asset
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 bg-investa-accent text-neutral-900 text-[11px] font-semibold rounded-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Background Offset Accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-neutral-200 rounded-xl -z-10 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
