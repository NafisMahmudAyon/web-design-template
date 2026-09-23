import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = ({ onShopAllClick, onSelectProduct }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0E4334] text-white overflow-hidden">
      {/* Decorative Background Geometric Starburst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none">
          <line x1="100" y1="10" x2="100" y2="190" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="white" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="36" y1="36" x2="164" y2="164" stroke="white" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="36" y1="164" x2="164" y2="36" stroke="white" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="4" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Button, and Mini Arch with Rotating Badge */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Main Headline with Star Pill Badge */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6">
                Unleash Your{' '}
                <span className="inline-flex items-center justify-center align-middle px-3 py-1 rounded-full border border-white/40 text-xs sm:text-sm tracking-normal font-sans mx-1">
                  <Sparkles className="w-3.5 h-3.5 text-furn-gold" />
                </span>
                <br />
                Home's Potential
                <br />
                <span className="italic font-normal font-serif text-white/90">
                  with Our Furniture
                </span>
              </h1>

              {/* Shop All CTA Button */}
              <div className="mb-14">
                <button
                  onClick={onShopAllClick}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-neutral-100 text-[#0E4334] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Shop all</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lower Composition: Small Arch Chair + Rotating Badge + Philosophy Text */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              {/* Arch Chair Cutout Box */}
              <div className="relative w-36 h-44 rounded-t-full bg-[#E5DDCF] overflow-hidden flex items-end justify-center p-2 shrink-0 shadow-lg border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1580481077191-4b10705a6828?auto=format&fit=crop&w=400&q=85"
                  alt="Modern minimalist armchair"
                  className="w-full h-full object-cover rounded-t-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Rotating "Explore More" Badge */}
              <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="textPathExplore"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9px] uppercase tracking-[0.22em] fill-white/80 font-medium">
                      <textPath href="#textPathExplore" startOffset="0%">
                        • Explore More • Explore More
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-furn-orange flex items-center justify-center text-white shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                </div>
              </div>

              {/* Natural objects quote */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs">
                People have been using natural objects, such as tree stumps, rocks and moss, as furniture.
              </p>
            </div>
          </div>

          {/* Right Column: Grand Arch Frame with Luxury Designer Armchair */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* Large Arch Shape Container */}
              <div className="relative w-full h-[460px] sm:h-[540px] rounded-t-full bg-[#EFE9DF] overflow-hidden shadow-2xl border-4 border-white/20 flex items-center justify-center p-6">
                <img
                  src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85"
                  alt="Visionnaire Whitney Designer Luxury Armchair"
                  className="w-full h-full object-cover rounded-t-full hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Product Price Pill */}
                <div
                  onClick={() =>
                    onSelectProduct({
                      name: 'Visionnaire Whitney',
                      price: 110.0,
                      category: 'Chair',
                      image:
                        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=85',
                      description:
                        'Sculptural modernist armchair with ergonomic lumbar curvature, ribbed acoustic upholstery, and walnut structural legs.',
                      dimensions: 'W 85cm x D 80cm x H 92cm',
                      material: 'Handwoven Bouclé & Walnut',
                    })
                  }
                  className="absolute bottom-16 left-6 sm:left-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-xl border border-white/80 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-neutral-100 overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=100&q=80"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-neutral-900 leading-none">
                      Visionnaire Whitney
                    </p>
                    <p className="text-[10px] text-furn-gold font-semibold mt-0.5">
                      $1,10.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Curved SVG Text around the lower outer edge of the Arch */}
              <div className="absolute -bottom-10 right-0 sm:-right-6 w-56 h-56 pointer-events-none hidden sm:block">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    id="arcCollections"
                    d="M 180,100 A 80,80 0 0,1 20,100"
                    fill="none"
                  />
                  <text className="text-[11px] uppercase tracking-[0.24em] fill-white/80 font-serif font-medium">
                    <textPath href="#arcCollections" startOffset="10%">
                      Elegant Furniture Collections
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
