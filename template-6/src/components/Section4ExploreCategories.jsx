import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Search } from 'lucide-react';
import { categoriesList, exploreCategoriesProducts } from '../data/products';

export default function Section4ExploreCategories({ onQuickView, onToggleWishlist, isWishlisted, onOpenSearch }) {
  const [activeTab, setActiveTab] = useState("Fashion & Clothing");

  const { featured, grid } = exploreCategoriesProducts;

  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Title Header */}
        <div className="px-4 md:px-8 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E2E2]">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight"
          >
            Explore Categories
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onQuickView(featured)}
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs md:text-sm font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>See More</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Horizontal Scrollable Filter Tabs Pill Bar */}
        <div className="border-b border-[#E2E2E2] bg-[#F5F5F5]">
          <div className="px-4 md:px-8 py-4 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {categoriesList.map((cat, idx) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-[#EDEDED] text-[#444444] hover:bg-[#E2E2E2] hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#121212] hover:bg-[#EAEAEA] rounded-full border border-[#E2E2E2] shrink-0"
              aria-label="Search category"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Asymmetric Product Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E2E2] border-b border-[#E2E2E2]">
          
          {/* Left Large Featured Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onQuickView(featured)}
            className="lg:col-span-6 bg-[#F5F5F5] p-6 md:p-10 flex flex-col justify-between cursor-pointer hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[500px] lg:min-h-[620px] group"
          >
            {/* Top Bar (Stock tag + Heart) */}
            <div className="flex items-center justify-between">
              <span className="bg-white border border-[#E2E2E2] text-xs font-semibold px-3 py-1 rounded-full shadow-sm text-black">
                {featured.badge}
              </span>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleWishlist(featured);
                }}
                className={`p-2.5 rounded-full bg-white shadow-sm border border-[#E2E2E2] transition-colors ${
                  isWishlisted(featured.id) ? 'text-red-500' : 'text-[#888888] hover:text-black'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted(featured.id) ? 'fill-red-500' : ''}`} />
              </button>
            </div>

            {/* Large Product Image */}
            <div className="my-8 flex items-center justify-center h-72 md:h-96 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Details */}
            <div className="flex items-end justify-between pt-4 border-t border-[#E2E2E2]">
              <div>
                <p className="text-xs text-[#777777] font-semibold tracking-wide">
                  • {featured.brand}
                </p>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#121212] mt-1 group-hover:text-black">
                  {featured.title}
                </h3>
              </div>

              <span className="text-2xl md:text-3xl font-extrabold text-[#121212]">
                ${featured.price}
              </span>
            </div>
          </motion.div>

          {/* Right 2x2 Product Card Grid (7 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-[#E2E2E2]">
            {grid.map((item, idx) => {
              const wish = isWishlisted(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onQuickView(item)}
                  className={`group bg-[#F5F5F5] p-6 flex flex-col justify-between cursor-pointer hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[300px] ${
                    idx % 2 === 0 ? 'sm:border-r border-[#E2E2E2]' : ''
                  } ${idx < 2 ? 'border-b border-[#E2E2E2]' : ''}`}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="bg-white border border-[#E2E2E2] text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-black">
                      {item.badge}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`p-2 rounded-full bg-white shadow-sm border border-[#E2E2E2] transition-colors ${
                        wish ? 'text-red-500' : 'text-[#888888] hover:text-black'
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${wish ? 'fill-red-500' : ''}`} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="my-4 h-40 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Info */}
                  <div className="flex items-end justify-between pt-2">
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-[#121212]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#777777] mt-0.5">
                        • {item.brand}
                      </p>
                    </div>

                    <span className="text-base font-extrabold text-[#121212]">
                      ${item.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
