import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, Droplets, Leaf } from 'lucide-react';
import { HERO_ASSETS } from '../data/mockData';

export default function HeroSection({ onExploreFlavors, onAddToCart }) {
  return (
    <section className="relative overflow-hidden bg-[#eae6df] pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Decorative background SVG elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#b8ff00]/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#f7c948]/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Script Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
              <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide transform -rotate-3">
                pick a mood
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8ff00]"></span>
              <span className="text-xs font-bold text-[#0a4b5c]/80 uppercase tracking-widest">100% ORGANIC BOTANICALS</span>
            </div>

            {/* Headline */}
            <h1 className="font-display-title text-5xl sm:text-7xl lg:text-8xl font-black text-[#0a4b5c] uppercase leading-[0.9] tracking-tight">
              LIGHT ON ITS FEET. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a4b5c] via-emerald-800 to-[#0a4b5c]">
                LOUD ON FLAVOR.
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg text-[#0a4b5c]/80 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Botanical sparkling drinks pressed from real organic fruit, wild garden herbs and cold mountain spring water. Zero added sugar. 100% natural crispness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#flavors"
                onClick={onExploreFlavors}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-extrabold text-sm px-8 py-4 rounded-full tracking-wider transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-[#0a4b5c]/20"
              >
                <span>EXPLORE FLAVORS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#0a4b5c]/5 text-[#0a4b5c] border-2 border-[#0a4b5c]/20 font-bold text-sm px-8 py-3.5 rounded-full tracking-wider transition-all"
              >
                <span>OUR STORY</span>
              </a>
            </div>

            {/* Social Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#0a4b5c]/80 font-bold border-t border-[#0a4b5c]/10">
              <div className="flex items-center space-x-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-[#0a4b5c]">4.8 / 5.0</span>
                <span className="text-[#0a4b5c]/60">(1,420+ sips)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Zero Artificial Sweeteners</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0a4b5c] bg-[#0a4b5c]/5 group">
                <img
                  src={HERO_ASSETS.heroDrink}
                  alt="VERDA Botanical Drink"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a4b5c]/70 via-transparent to-transparent"></div>

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4 bg-[#b8ff00] text-[#0a4b5c] text-xs font-black px-3 py-1.5 rounded-full shadow-md tracking-wider border border-[#0a4b5c]">
                  FRESH PRESSED BATCH #08
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#b8ff00] block mb-1">
                    SEASONAL HIGHLIGHT
                  </span>
                  <h3 className="font-display-title text-2xl font-bold tracking-tight">
                    PEACH & ROOT GINGER SPARKLING
                  </h3>
                </div>
              </div>

              {/* Floating Product Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border-2 border-[#0a4b5c] max-w-[240px] flex items-center space-x-3 transform -rotate-2 hover:rotate-0 transition-transform">
                <img
                  src={HERO_ASSETS.greenHourCan}
                  alt="Green Hour Can"
                  className="w-14 h-16 object-cover rounded-lg border border-gray-200"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    GOLDEN HOUR
                  </span>
                  <h4 className="text-xs font-black text-[#0a4b5c]">PEACH & GINGER</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#0a4b5c]">$3.40</span>
                    <button
                      onClick={() => onAddToCart({ id: 'golden-hour', name: 'GOLDEN HOUR', price: '$3.40' })}
                      className="bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] text-[10px] font-black px-2.5 py-1 rounded-full border border-[#0a4b5c] transition-colors"
                    >
                      + ADD
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Circle */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#f7c948] border-2 border-[#0a4b5c] flex items-center justify-center text-center p-2 shadow-lg transform rotate-12">
                <span className="font-script text-lg font-bold text-[#0a4b5c] leading-none">
                  cold & crisp!
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Feature Stats Banner */}
        <div className="mt-16 bg-[#0a4b5c] text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-lg">
          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-0">
            <div className="p-3 rounded-xl bg-white/10 text-[#b8ff00]">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display-title text-xl font-bold tracking-tight">0G ADDED SUGARS</h4>
              <p className="text-xs text-white/70">Pure natural sweetness from cold-pressed fruits.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-white/10 text-[#f7c948]">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display-title text-xl font-bold tracking-tight">100% REAL BOTANICALS</h4>
              <p className="text-xs text-white/70">Steeped whole herbs and cold mountain water.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 rounded-xl bg-white/10 text-[#b8ff00]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display-title text-xl font-bold tracking-tight">15 CALORIES PER CAN</h4>
              <p className="text-xs text-white/70">Light on your body, zero heavy aftertaste.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
