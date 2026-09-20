import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye, ShoppingBag, Sliders, Check } from 'lucide-react';

export const BOARDS_DATA = [
  {
    id: 'coastal-cruiser',
    name: 'Coastal Cruiser',
    category: 'Longboards',
    price: 620,
    dimensions: `9'2" x 23" x 3.1"`,
    volume: '71.5 Liters',
    finSetup: 'Single Fin Box + 9.5" Fiberglass Fin',
    description: 'Classic nose rider crafted with 50/50 rails and rolled bottom for buttery smooth trim on peeling point breaks.',
    image: '/assets/board-arch-cruiser.jpg',
    tag: 'Classic Nose Rider',
    badge: 'Best Seller',
  },
  {
    id: 'white-drift',
    name: 'White Drift',
    category: 'Performance',
    price: 360,
    dimensions: `5'10" x 20.5" x 2.45"`,
    volume: '34.2 Liters',
    finSetup: 'Futures Quad or Twin + Trailer',
    description: 'Deep double concave through the tail with bevel swallow cut. Built for explosive drive and skatey pocket agility.',
    image: '/assets/board-white-drift.jpg',
    tag: 'Quad Speed Fish',
    badge: 'Summer 2026',
  },
  {
    id: 'sunset-twin',
    name: 'Sunset Twin',
    category: 'Custom Series',
    price: 480,
    dimensions: `6'2" x 20.25" x 2.6"`,
    volume: '37.8 Liters',
    finSetup: 'Hand-foiled Keel Fins Glassed-On',
    description: 'A modern revival of the 70s San Diego keel twin. Smooth down-the-line projection with high-line speed.',
    image: '/assets/board-sunset-twin.jpg',
    tag: 'Retro Keel Twin',
    badge: 'Artisan Glass',
  },
  {
    id: 'ocean-voyager',
    name: 'Ocean Voyager',
    category: 'New Arrivals',
    price: 430,
    dimensions: `7'0" x 21.25" x 2.75"`,
    volume: '46.0 Liters',
    finSetup: '2+1 Single Box with Side Bites',
    description: 'The ultimate quiver killer. Paddles like a mini-malibu but maneuvers with the responsive drive of a shortboard.',
    image: '/assets/board-ocean-voyager.jpg',
    tag: 'Mid-Length Hybrid',
    badge: 'Quiver Killer',
  },
];

export default function BoardShowcaseSection({ onOpenModal, onAddToCart }) {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [addedItem, setAddedItem] = useState(null);

  const tabs = ['All', 'New Arrivals', 'Longboards', 'Performance', 'Custom Series'];

  const filteredBoards = activeTab === 'All'
    ? BOARDS_DATA
    : BOARDS_DATA.filter((b) => b.category === activeTab);

  const handleAdd = (board, e) => {
    e.stopPropagation();
    onAddToCart(board);
    setAddedItem(board.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section id="boards" className="py-24 sm:py-32 bg-white border-b border-[#0F1E1B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#009E96] uppercase tracking-widest mb-2">
              <span>(SERIES 26) // PRODUCTION MODELS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0F1E1B] tracking-tight">
              Featured Surfboards
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#009E96] text-white shadow-teal-subtle'
                    : 'bg-[#F5F6F3] text-[#5B6B67] hover:text-[#0F1E1B] hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid - Zero-CLS Fixed Container Stability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBoards.map((board) => {
            const isHovered = hoveredCardId === board.id;
            const isJustAdded = addedItem === board.id;

            return (
              <div
                key={board.id}
                onMouseEnter={() => setHoveredCardId(board.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onOpenModal(board)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#009E96] shadow-xl bg-[#FCFCFA]'
                    : 'border-black/10 bg-[#FAFAF7] shadow-sm'
                } h-[470px] sm:h-[490px]`}
                /* Fixed height ensures ZERO CLS: layout never jumps or fluctuates */
              >
                {/* Upper Area: Image Container with flexible ratio */}
                <div className="relative w-full flex-1 overflow-hidden bg-[#EAECE6] rounded-t-3xl min-h-[260px]">
                  <img
                    src={board.image}
                    alt={board.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border border-white/20">
                      {board.badge}
                    </span>
                  </div>

                  {/* Top Right Quick View Indicator */}
                  <div
                    className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#0F1E1B] flex items-center justify-center transition-all duration-200 shadow-md ${
                      isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                    }`}
                  >
                    <Eye className="w-4 h-4 text-[#009E96]" />
                  </div>

                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Lower Area: Content Drawer with fixed internal budget */}
                <div className="p-5 flex flex-col justify-between flex-shrink-0 bg-white border-t border-black/5">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-mono text-[11px] font-bold text-[#009E96] uppercase tracking-wider">
                        {board.tag}
                      </span>
                      <span className="font-display font-extrabold text-base text-[#0F1E1B]">
                        ${board.price}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0F1E1B] group-hover:text-[#009E96] transition-colors leading-tight">
                      {board.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#5B6B67] line-clamp-1">
                      {board.dimensions} • {board.volume}
                    </p>
                  </div>

                  {/* Interactive Action Row */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => handleAdd(board, e)}
                      className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : isHovered
                          ? 'bg-[#009E96] hover:bg-[#028B84] text-white shadow-teal-subtle'
                          : 'bg-[#F5F6F3] text-[#0F1E1B] hover:bg-[#009E96] hover:text-white'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add To Bag</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenModal(board)}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0F1E1B] transition-colors"
                      title="View Board Specs"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Custom Shaper Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F5F6F3] border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#009E96]/10 text-[#009E96] flex items-center justify-center flex-shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#0F1E1B]">
                Need Custom Dimensions Or Tint Resin?
              </h4>
              <p className="text-xs text-[#5B6B67]">
                We shape customized rockers, volume profiles, and tint abstractions tailored to your height and home break.
              </p>
            </div>
          </div>

          <a
            href="#footer"
            className="px-6 py-2.5 rounded-full bg-[#0F1E1B] text-white hover:bg-[#009E96] text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap shadow-md"
          >
            ORDER CUSTOM BLANK
          </a>
        </div>
      </div>
    </section>
  );
}
