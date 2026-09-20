import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, BarChart3, ShieldCheck, Database, Layers, Landmark, TrendingUp } from 'lucide-react';

const FEATURES = [
  {
    num: '[01]',
    title: 'Portfolio',
    subtitle: 'Tracking',
    desc: 'Monitor performance, gains, acquisition costs, and market appreciation across your entire collection in real time.',
    icon: BarChart3,
    image: '/assets/card-rolex-daytona.jpg',
    tag: 'REAL-TIME APPRECIATION',
  },
  {
    num: '[02]',
    title: 'Market',
    subtitle: 'Intelligence',
    desc: 'Access real-time pricing trends, historical auction records, demand indicators, and secondary liquidity insights.',
    icon: TrendingUp,
    image: '/assets/card-patek-nautilus.jpg',
    tag: 'AUCTION DATA INTELLIGENCE',
  },
  {
    num: '[03]',
    title: 'Collection',
    subtitle: 'Management',
    desc: 'Organize ownership records, warranties, service history, box & papers provenance, and authenticity certificates.',
    icon: Database,
    image: '/assets/floating-watch-daytona.jpg',
    tag: 'PROVENANCE & CERTIFICATES',
  },
  {
    num: '[04]',
    title: 'Smart',
    subtitle: 'Valuation',
    desc: 'Receive algorithmic market valuations calibrated against worldwide dealer listings, private sales, and collector indices.',
    icon: Sparkles,
    image: '/assets/card-ap-royaloak.jpg',
    tag: 'AI-CALIBRATED PRICING',
  },
  {
    num: '[05]',
    title: 'Buy & Sell',
    subtitle: 'Marketplace',
    desc: 'Discover investment-grade timepieces with verified escrow and connect directly with authenticated high-net-worth collectors.',
    icon: Landmark,
    image: '/assets/market-watch-1.jpg',
    tag: 'VERIFIED COLLECTOR ESCROW',
  },
  {
    num: '[06]',
    title: 'Investment',
    subtitle: 'Analytics',
    desc: 'Analyze annualized returns, brand concentration risk, precious metal allocation, and portfolio growth projections.',
    icon: Layers,
    image: '/assets/market-watch-2.jpg',
    tag: 'ASSET DIVERSIFICATION',
  },
];

export default function PlatformFeaturesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(2); // Default to row 3 as in static mockup

  return (
    <section id="features" className="py-24 sm:py-32 bg-[#05070A] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-mono text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PLATFORM FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
            Everything You Need To Manage Watch{' '}
            <span className="italic font-serif text-gold-400">Investments</span>
          </h2>
        </div>

        {/* Features List with Interactive Floating Watch Card */}
        <div className="relative border-t border-white/[0.08]">
          {FEATURES.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative py-8 sm:py-10 border-b border-white/[0.08] transition-colors duration-300 cursor-pointer ${
                  isHovered ? 'bg-white/[0.02]' : 'bg-transparent'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Left Column: Number */}
                  <div className="md:col-span-1 font-mono text-xs sm:text-sm text-gray-500 font-semibold">
                    {item.num}
                  </div>

                  {/* Center-Left Column: Title */}
                  <div className="md:col-span-5 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif text-white font-medium">
                      {item.title}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-serif italic text-gold-300 font-light">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:col-span-6 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                    {item.desc}
                  </div>
                </div>

                {/* Floating 3D Watch Preview Card on the Hovered Row */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-[#0A0D12]/95 backdrop-blur-xl border border-gold-500/40 shadow-2xl shadow-black pointer-events-none"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/60 border border-white/10 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pr-3">
                        <span className="font-mono text-[9px] text-gold-400 uppercase font-bold tracking-wider block">
                          {item.tag}
                        </span>
                        <span className="font-serif text-xs font-bold text-white block">
                          {item.title} {item.subtitle}
                        </span>
                        <span className="font-mono text-[10px] text-gray-400">Institutional Feed</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
