import React, { useState } from 'react';
import { Search, Plus, Twitter, Facebook, Instagram, Check } from 'lucide-react';

export default function HeroSection({ onOpenDetail }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showHotspot, setShowHotspot] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    onOpenDetail?.({
      title: 'Empress Facial Gua Sha Oil',
      price: '$68.00',
      description: 'Cold-pressed botanical restorative facial oil infused with balm of gilead and organic rosehip.',
      image: '/assets/hero-skincare.jpg',
    });
  };

  return (
    <section id="home" className="w-full bg-[#fbeee6] pt-12 pb-24 select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#2e1d1b] lowercase">
            protecting the beauty!
          </h1>
        </div>

        {/* 3-Column Hero Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Left Column: Descriptions & Search */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <p className="text-xs text-[#2e1d1b]/80 leading-relaxed max-w-xs font-normal">
              It increases circulation and improves lymphatic function, resulting in a naturally dewy, glowing complexion.
            </p>

            <p className="text-xs text-[#2e1d1b]/80 leading-relaxed max-w-xs font-normal">
              Gua Sha can also be used to prevent and clear acne, decongesting the skin and lessening inflammation.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center max-w-xs pt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search here..."
                className="bg-white/80 border border-[#2e1d1b]/10 text-xs px-4 py-2.5 rounded-l-none text-[#2e1d1b] placeholder-[#2e1d1b]/40 focus:outline-none focus:ring-1 focus:ring-[#2e1d1b] w-full"
              />
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#2e1d1b] hover:bg-[#1e1211] text-white px-3.5 py-2.5 transition-colors shrink-0"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* View Detail CTA Button */}
            <div className="pt-2">
              <button
                onClick={() =>
                  onOpenDetail?.({
                    title: 'Empress Facial Gua Sha Oil',
                    price: '$68.00',
                    description: 'Cold-pressed botanical restorative facial oil infused with balm of gilead and organic rosehip.',
                    image: '/assets/hero-skincare.jpg',
                  })
                }
                className="px-8 py-3 bg-[#2e1d1b] hover:bg-[#1e1211] text-white text-[11px] font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
              >
                VIEW DETAIL
              </button>
            </div>
          </div>

          {/* Center Column: Framed Skincare Niche Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white/60 max-w-md w-full aspect-[4/5] bg-[#eed9cb] group">
              <img
                src="/assets/hero-skincare.jpg"
                alt="WILDLING Empress Facial Oil"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />

              {/* Interactive Hotspot Pin */}
              <div className="absolute top-[35%] right-[32%] z-20">
                <button
                  onClick={() => setShowHotspot(!showHotspot)}
                  aria-label="Product info hotspot"
                  className="w-7 h-7 rounded-full bg-rose-400/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>

                {showHotspot && (
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-[#2e1d1b]/10 text-left">
                    <p className="text-[11px] font-bold text-[#2e1d1b]">Empress Facial Oil</p>
                    <p className="text-[10px] text-[#2e1d1b]/70 mt-0.5">$68.00 • 30ml</p>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded mt-1.5 inline-block">
                      100% Certified Organic
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Decongesting Text & Social Rail */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start lg:items-end h-full py-4">
            <div className="max-w-xs text-left lg:text-right">
              <p className="text-xs text-[#2e1d1b]/80 leading-relaxed font-normal">
                It can also be used to prevent & clear acne, decongesting skin.
              </p>
            </div>

            {/* Vertical Social Icons */}
            <div className="flex lg:flex-col gap-4 text-[#2e1d1b]/60">
              <a href="#" aria-label="Twitter" className="hover:text-[#2e1d1b] transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-[#2e1d1b] transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#2e1d1b] transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
