import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Check, MapPin, Building, DollarSign, Key } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection({ onFilterSearch, onOpenContact, onNavigate }) {
  const [category, setCategory] = useState('Rent or Purchase');
  const [location, setLocation] = useState('New York City');
  const [type, setType] = useState('Property');
  const [price, setPrice] = useState('USD per Month');

  const [openDropdown, setOpenDropdown] = useState(null);

  const categoryOptions = ['Rent or Purchase', 'For Sale', 'For Rent', 'Exclusive Lease', 'Off-Market'];
  const locationOptions = ['New York City', 'San Francisco', 'Miami', 'Los Angeles', 'Austin', 'Seattle'];
  const typeOptions = ['Property', 'Luxury Villa', 'Oceanfront Condo', 'Penthouse', 'Modern Townhouse'];
  const priceOptions = ['USD per Month', 'Under $1M', '$1M - $1.5M', '$1.5M - $2M', '$2M+'];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setOpenDropdown(null);
    onFilterSearch({ category, location, type, price });
  };

  return (
    <section id="hero" className="w-full pt-4 sm:pt-6 pb-12 px-3 sm:px-6 max-w-[1400px] mx-auto">
      {/* Outer Hero Card with curved border */}
      <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden min-h-[720px] lg:min-h-[820px] flex flex-col justify-between shadow-2xl border border-white/10">
        {/* Background Architectural Mansion Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90"
            alt="Luxury Architectural Residence"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Subtle cinematic gradient overlays for pristine readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
        </div>

        {/* Top Navbar */}
        <Navbar onOpenContact={onOpenContact} onNavigate={onNavigate} />

        {/* Center Main Content Area */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 pt-12 pb-6 flex flex-col justify-center flex-grow">
          {/* Top Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-zinc-300 italic font-sans text-sm sm:text-base mb-3 max-w-xl tracking-wide"
          >
            Explore a diverse selection of premium listings
          </motion.p>

          {/* Main Huge Condensed Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-white leading-[0.92] tracking-normal uppercase max-w-5xl mb-6 drop-shadow-md"
          >
            Discover the top real estate options <br className="hidden sm:inline" />
            and turn your vision into reality
          </motion.h1>

          {/* Subtitle Right Side Text & Kicker */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300/90 font-sans">
                Collaborate with the top agent
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md md:text-right"
            >
              <p className="text-zinc-300/90 italic text-sm sm:text-base leading-relaxed">
                Elevate your lifestyle with our luxury residences. <br />
                Experience unmatched comfort and sophistication in each home.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Filter Bar */}
        <div className="relative z-20 px-4 sm:px-10 pb-8 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-panel-dark rounded-[24px] sm:rounded-[30px] p-3 sm:p-4 border border-white/20 shadow-2xl backdrop-blur-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 items-center">
              {/* Category Dropdown */}
              <div className="relative">
                <div
                  onClick={() => toggleDropdown('category')}
                  className="glass-input-card rounded-2xl px-4 py-3 cursor-pointer flex flex-col justify-center"
                >
                  <span className="text-[11px] font-medium text-zinc-400">Category</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-white text-sm font-medium truncate">{category}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform duration-200 ${openDropdown === 'category' ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {openDropdown === 'category' && (
                  <div className="absolute bottom-full mb-2 left-0 w-full z-50 rounded-xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-xl">
                    {categoryOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setCategory(opt); setOpenDropdown(null); }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between ${
                          category === opt ? 'bg-white/20 text-white font-semibold' : 'text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        <span>{opt}</span>
                        {category === opt && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <div
                  onClick={() => toggleDropdown('location')}
                  className="glass-input-card rounded-2xl px-4 py-3 cursor-pointer flex flex-col justify-center"
                >
                  <span className="text-[11px] font-medium text-zinc-400">Location</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-white text-sm font-medium truncate">{location}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform duration-200 ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {openDropdown === 'location' && (
                  <div className="absolute bottom-full mb-2 left-0 w-full z-50 rounded-xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-xl">
                    {locationOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setLocation(opt); setOpenDropdown(null); }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between ${
                          location === opt ? 'bg-white/20 text-white font-semibold' : 'text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        <span>{opt}</span>
                        {location === opt && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Dropdown */}
              <div className="relative">
                <div
                  onClick={() => toggleDropdown('type')}
                  className="glass-input-card rounded-2xl px-4 py-3 cursor-pointer flex flex-col justify-center"
                >
                  <span className="text-[11px] font-medium text-zinc-400">Type</span>
                  <div className="flex items-center justify-between mt-0.5">
                    <span className="text-white text-sm font-medium truncate">{type}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform duration-200 ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {openDropdown === 'type' && (
                  <div className="absolute bottom-full mb-2 left-0 w-full z-50 rounded-xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-xl">
                    {typeOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setType(opt); setOpenDropdown(null); }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between ${
                          type === opt ? 'bg-white/20 text-white font-semibold' : 'text-zinc-300 hover:bg-white/10'
                        }`}
                      >
                        <span>{opt}</span>
                        {type === opt && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Dropdown + Search Button */}
              <div className="flex items-center gap-2 relative">
                <div className="flex-1 relative">
                  <div
                    onClick={() => toggleDropdown('price')}
                    className="glass-input-card rounded-2xl px-4 py-3 cursor-pointer flex flex-col justify-center"
                  >
                    <span className="text-[11px] font-medium text-zinc-400">Price</span>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="text-white text-sm font-medium truncate">{price}</span>
                      <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform duration-200 ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {openDropdown === 'price' && (
                    <div className="absolute bottom-full mb-2 left-0 w-full z-50 rounded-xl bg-zinc-900/95 border border-white/20 p-2 shadow-2xl backdrop-blur-xl">
                      {priceOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { setPrice(opt); setOpenDropdown(null); }}
                          className={`w-full text-left px-3 py-2 text-xs rounded-lg flex items-center justify-between ${
                            price === opt ? 'bg-white/20 text-white font-semibold' : 'text-zinc-300 hover:bg-white/10'
                          }`}
                        >
                          <span>{opt}</span>
                          {price === opt && <Check className="w-3.5 h-3.5 text-white" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleSearchSubmit}
                  className="w-14 h-14 rounded-2xl bg-white text-zinc-900 flex items-center justify-center shadow-xl hover:bg-zinc-100 transition-colors flex-shrink-0"
                  aria-label="Search properties"
                >
                  <Search className="w-5 h-5 text-zinc-900 stroke-[2.5]" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
