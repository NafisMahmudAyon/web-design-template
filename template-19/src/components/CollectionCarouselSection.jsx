import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye, TrendingUp, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const WATCH_COLLECTION = [
  {
    id: 'rolex-daytona-116500',
    brand: 'Rolex',
    model: 'Rolex Daytona',
    ref: 'Ref. 116500LN',
    purchased: '$22,400',
    current: '$31,420',
    returnRate: '+40.3%',
    image: '/assets/card-rolex-daytona.jpg',
    dial: 'Cerachrom Black Dial',
    case: '40mm Oystersteel',
    movement: 'Calibre 4130',
    status: 'Vault Secured',
  },
  {
    id: 'patek-nautilus-5711',
    brand: 'Patek Philippe',
    model: 'Omega Nautilus',
    ref: 'Ref. 5711/1A',
    purchased: '$28,600',
    current: '$94,200',
    returnRate: '+229.3%',
    image: '/assets/card-patek-nautilus.jpg',
    dial: 'Gradated Blue-Black',
    case: '40mm Stainless Steel',
    movement: 'Calibre 26-330 S C',
    status: 'Vault Secured',
  },
  {
    id: 'ap-royaloak-15500',
    brand: 'Audemars Piguet',
    model: 'Royal Oak',
    ref: 'Ref. 15500ST',
    purchased: '$24,100',
    current: '$42,800',
    returnRate: '+77.6%',
    image: '/assets/card-ap-royaloak.jpg',
    dial: 'Grande Tapisserie Slate',
    case: '41mm Stainless Steel',
    movement: 'Calibre 4302',
    status: 'Vault Secured',
  },
  {
    id: 'rolex-submariner-126610',
    brand: 'Rolex',
    model: 'Submariner Date',
    ref: 'Ref. 126610LV',
    purchased: '$10,600',
    current: '$14,900',
    returnRate: '+40.5%',
    image: '/assets/market-watch-1.jpg',
    dial: 'Green Cerachrom Bezel',
    case: '41mm Oystersteel',
    movement: 'Calibre 3235',
    status: 'In Transit',
  },
];

export default function CollectionCarouselSection({ onSelectWatch }) {
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? WATCH_COLLECTION.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= WATCH_COLLECTION.length - 3 ? 0 : prev + 1));
  };

  const visibleWatches = WATCH_COLLECTION.slice(startIndex, startIndex + 3);

  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Carousel Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
              COLLECTION
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Every Timepiece. One <br className="hidden sm:block" />
              Private <span className="italic font-serif text-gold-400">Collection.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Build a beautifully organized digital vault for every watch you own, from acquisition to
              current market value.
            </p>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-white flex items-center justify-center transition-all duration-200"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-white flex items-center justify-center transition-all duration-200"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Watch Cards Grid - Zero-CLS Fixed Container Stability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleWatches.map((watch) => {
            const isHovered = hoveredId === watch.id;

            return (
              <div
                key={watch.id}
                onMouseEnter={() => setHoveredId(watch.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectWatch(watch)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-gold-500/60 shadow-2xl shadow-gold-900/20 bg-[#0E1218]'
                    : 'border-white/[0.08] bg-[#0A0D12] shadow-lg'
                } h-[470px] sm:h-[490px]`}
                /* Fixed height ensures zero CLS jitter on hover */
              >
                {/* Header Information Inside Card */}
                <div className="p-6 pb-2 flex items-baseline justify-between z-10">
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold-200 transition-colors">
                    {watch.model}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 font-medium">
                    {watch.ref}
                  </span>
                </div>

                {/* Central Watch Image Container with Flexible Budget */}
                <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden p-6">
                  <div className="relative w-48 sm:w-56 aspect-square rounded-full overflow-hidden bg-black/40 border border-white/10 shadow-inner">
                    <img
                      src={watch.image}
                      alt={watch.model}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Quick Inspect Floating Badge on Hover */}
                  <div
                    className={`absolute bottom-8 px-4 py-1.5 rounded-full bg-[#05070A]/90 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Provenance</span>
                  </div>
                </div>

                {/* 3 Metrics Footer Bar with Fixed Height Budget */}
                <div className="p-6 pt-4 border-t border-white/[0.08] bg-black/30 flex-shrink-0">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Purchased
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-gray-200 font-bold block mt-0.5">
                        {watch.purchased}
                      </span>
                    </div>

                    <div className="border-x border-white/10">
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Current
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-white font-bold block mt-0.5">
                        {watch.current}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">
                        Return
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold block mt-0.5">
                        {watch.returnRate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
