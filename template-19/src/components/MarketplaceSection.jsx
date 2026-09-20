import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Tag, Eye, Sparkles } from 'lucide-react';

export const MARKETPLACE_WATCHES = [
  {
    id: 'market-rolex-daytona',
    brand: 'Rolex',
    model: 'Rolex Daytona',
    ref: 'Ref. 116500LN',
    marketPrice: '$121,300',
    askPrice: '$118,500',
    delta: '-2.3% vs Market',
    deltaType: 'discount',
    image: '/assets/market-watch-1.jpg',
    condition: 'Mint / Unworn 2024',
    boxPapers: 'Full Set Complete',
    location: 'Geneva, Switzerland',
  },
  {
    id: 'market-patek-philippe',
    brand: 'Patek Philippe',
    model: 'Patek Philippe',
    ref: 'Ref. 5711/1A',
    marketPrice: '$31,420',
    askPrice: '$31,800',
    delta: '+1.2% vs Market',
    deltaType: 'premium',
    image: '/assets/market-watch-2.jpg',
    condition: 'Collector Grade 2023',
    boxPapers: 'Archive Extract Included',
    location: 'London, United Kingdom',
  },
  {
    id: 'market-ap-royaloak',
    brand: 'Audemars Piguet',
    model: 'AP Royal Oak',
    ref: 'Ref. 15500ST',
    marketPrice: '$74,500',
    askPrice: '$68,000',
    delta: '-8.7% vs Market',
    deltaType: 'discount',
    image: '/assets/market-watch-3.jpg',
    condition: 'Excellent 2022',
    boxPapers: 'Original Warranty Card',
    location: 'New York, United States',
  },
];

export default function MarketplaceSection({ onSelectWatch, onExploreMarketplace }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="marketplace" className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="font-mono text-xs text-gold-400 uppercase tracking-widest font-semibold mb-2">
              MARKETPLACE
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white tracking-tight">
              Buy With Insight. <br />
              Sell With <span className="italic font-serif text-gold-400">Confidence.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Discover exceptional timepieces backed by transparent market data and verified valuation intelligence.
            </p>

            <button
              onClick={onExploreMarketplace}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-semibold text-xs tracking-wider transition-all duration-300 shadow-gold-subtle hover:shadow-gold-glow flex items-center gap-2 flex-shrink-0"
            >
              <span>Explore Marketplace</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Marketplace Cards Grid - Zero-CLS Container Stability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MARKETPLACE_WATCHES.map((item) => {
            const isHovered = hoveredCardId === item.id;
            const isDiscount = item.deltaType === 'discount';

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onSelectWatch(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-gold-500/60 shadow-2xl shadow-gold-900/20 bg-[#0E1218]'
                    : 'border-white/[0.08] bg-[#0A0D12] shadow-lg'
                } h-[470px] sm:h-[490px]`}
                /* Zero CLS: Stable fixed height */
              >
                {/* Watch Visual Container */}
                <div className="relative w-full flex-1 flex items-center justify-center p-6 overflow-hidden">
                  <div className="relative w-48 sm:w-56 aspect-square rounded-full overflow-hidden bg-black/50 border border-white/10">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Top Right Verified Inspection Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-gray-300">
                    <ShieldCheck className="w-3 h-3 text-gold-400" />
                    <span>AUTHENTICATED</span>
                  </div>

                  {/* Quick Inspect Floating Badge on Hover */}
                  <div
                    className={`absolute bottom-6 px-4 py-1.5 rounded-full bg-[#05070A]/90 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Listing</span>
                  </div>
                </div>

                {/* Bottom Details Footer */}
                <div className="p-6 pt-4 border-t border-white/[0.08] bg-black/40 flex-shrink-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-gold-200 transition-colors">
                      {item.model}
                    </h3>
                    <span className="font-mono text-xs text-gray-500">{item.ref}</span>
                  </div>

                  <div className="flex items-baseline justify-between mt-3">
                    <div>
                      <span className="font-mono text-[10px] text-gray-500 block">
                        Market: {item.marketPrice}
                      </span>
                      <span className="font-mono text-lg font-bold text-white block">
                        {item.askPrice}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full font-bold ${
                        isDiscount
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      {item.delta}
                    </span>
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
