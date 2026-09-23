import React from 'react';
import { FramedHeader } from './FramedHeader';
import { TrendingUp, ArrowUpRight, Check, ShieldCheck, DollarSign, ListOrdered } from 'lucide-react';

export const WhyChooseUs = ({ onExploreClick }) => {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <div className="relative mb-5">
            <div className="relative inline-block border border-neutral-300 px-8 sm:px-10 pt-4 pb-5">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 text-[11px] uppercase tracking-[0.18em] font-semibold bg-white text-neutral-500">
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
                Why <span className="italic font-normal font-serif text-neutral-800">Choose Us</span>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            At Prospecta, we believe that finding the perfect home is more than just a transaction – it's about the people and the community that make a house a home.
          </p>
        </div>

        {/* 3 Alternating Bento Rows */}
        <div className="space-y-24 md:space-y-32">
          {/* Row 1: Parisian Classic (Left) + Our Guarantee (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-neutral-100 group">
                <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
                  alt="Classic Parisian Haussmann apartment facade with ornate balconies"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <div className="relative mb-6">
                <div className="relative inline-block border border-neutral-300 px-6 sm:px-8 pt-4 pb-5">
                  <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-white text-neutral-500">
                    Guarantee
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 tracking-tight">
                    Our <span className="italic font-normal font-serif text-neutral-800">Guarantee</span>
                  </h3>
                </div>
              </div>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                We provide best services with guarantee. We are the best realtor in country and always bring best option for our customer or clients. We never compromise on guarantee. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              <button
                onClick={() => onExploreClick('Guarantee')}
                className="px-8 py-3.5 bg-[#202020] hover:bg-neutral-800 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore
              </button>
            </div>
          </div>

          {/* Row 2: Best Price (Left) + Modern Towers (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start lg:pr-6">
              <div className="relative mb-6">
                <div className="relative inline-block border border-neutral-300 px-6 sm:px-8 pt-4 pb-5">
                  <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-white text-neutral-500">
                    Guarantee
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 tracking-tight">
                    Best <span className="italic font-normal font-serif text-neutral-800">Price</span>
                  </h3>
                </div>
              </div>

              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                We provide best price with customer satisfaction. We are the best realtor in country and always bring best option for our customer or clients. We never compromise on guarantee. Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>

              <button
                onClick={() => onExploreClick('Price')}
                className="px-8 py-3.5 bg-[#202020] hover:bg-neutral-800 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-neutral-100 group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern high-rise residential towers in bright daylight"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Glass Skyscraper with Floating Stat (Left) + Our Process (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image with Floating Stats Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                  alt="Low-angle view of modern high-rise glass skyscraper against blue sky"
                  className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Metric Card matching mockup */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-white/60 p-5 rounded-xl shadow-xl max-w-[260px] animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif text-2xl font-bold text-neutral-900">
                      40,000+
                    </span>
                    <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +14%
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-600 leading-snug mb-3">
                    By average for 2 bedroom apartments in San Francisco, CA
                  </p>
                  {/* Avatar stack */}
                  <div className="flex items-center -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="User"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="User"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="User"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    <span className="w-7 h-7 rounded-full bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                      +8
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text: Our Process */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <div className="relative mb-8">
                <div className="relative inline-block border border-neutral-300 px-6 sm:px-8 pt-4 pb-5">
                  <span className="absolute -top-3 left-5 px-2.5 text-[11px] uppercase tracking-[0.16em] font-semibold bg-white text-neutral-500">
                    About Us
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-neutral-900 tracking-tight">
                    Our <span className="italic font-normal font-serif text-neutral-800">Process</span>
                  </h3>
                </div>
              </div>

              {/* Step 1 */}
              <div className="mb-6">
                <h4 className="font-semibold text-base text-neutral-900 mb-2 flex items-center gap-2">
                  <span>1. Choose your type</span>
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                  Exponent is a pixel perfect theme, that is tailor made for startups and businesses. Build your website swiftly.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-8">
                <h4 className="font-semibold text-base text-neutral-900 mb-2 flex items-center gap-2">
                  <span>2. See the property directly</span>
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-lg">
                  Exponent is a pixel perfect theme, that is tailor made for startups and businesses. Build your website swiftly.
                </p>
              </div>

              <button
                onClick={() => onExploreClick('Process')}
                className="px-8 py-3.5 bg-[#202020] hover:bg-neutral-800 text-white text-sm font-medium rounded-md shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
