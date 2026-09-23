import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingBag, Eye } from 'lucide-react';
import { featuredProducts } from '../data/casalaData';

export default function FeaturedProducts({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('Best Deals');
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  // Filter products by selected category
  const filteredProducts = featuredProducts.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory || (activeCategory === 'Most Popular' && p.isPopular)
  );

  const visibleCount = 3;
  const maxStartIndex = Math.max(0, filteredProducts.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  const displayedProducts = filteredProducts.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-serif text-[#171A1F] tracking-tight mb-4"
          >
            Our Featured Products
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[#60646C] leading-relaxed max-w-2xl mb-8"
          >
            Discover the epitome of relaxation with our Furniture. This chair boasts ergonomic design, plush cushioning, and premium upholstery for ultimate comfort.
          </motion.p>

          {/* Filter Pills + Carousel Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            {/* Category Filter Pills */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  setActiveCategory('Best Deals');
                  setStartIndex(0);
                }}
                className={`px-6 py-2.5 rounded-sm text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === 'Best Deals'
                    ? 'bg-[#565452] text-white shadow-sm'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                Best Deals
              </button>

              <button
                onClick={() => {
                  setActiveCategory('Most Popular');
                  setStartIndex(0);
                }}
                className={`px-6 py-2.5 rounded-sm text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === 'Most Popular'
                    ? 'bg-[#565452] text-white shadow-sm'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                Most Popular
              </button>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center space-x-2.5 self-end sm:self-auto">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous products"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  startIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#565452] text-white hover:bg-black hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                onClick={handleNext}
                disabled={startIndex >= maxStartIndex}
                aria-label="Next products"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  startIndex >= maxStartIndex
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#565452] text-white hover:bg-black hover:scale-105 active:scale-95'
                }`}
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid: Zero CLS Spacing Stability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => {
              const isHovered = hoveredCardId === product.id;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredCardId(product.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  /* Zero CLS Spacing Stability: Fixed container height */
                  className={`relative h-[480px] rounded-xl border bg-white flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                    isHovered
                      ? 'border-casala-teal/40 shadow-xl -translate-y-1.5'
                      : 'border-gray-100 shadow-sm'
                  }`}
                >
                  {/* Top Badge & Action Icons */}
                  <div className="p-5 flex items-center justify-between z-10">
                    <span className="text-[11px] font-semibold text-gray-600 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-sm">
                      {product.tag}
                    </span>

                    {/* Quick Action Buttons on Hover */}
                    <div
                      className={`flex items-center space-x-1.5 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <button
                        onClick={() => onQuickView && onQuickView(product)}
                        title="Quick View"
                        className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-casala-teal hover:scale-110 transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        title="Add to Cart"
                        className="w-8 h-8 rounded-full bg-casala-teal text-white shadow-md flex items-center justify-center hover:bg-black hover:scale-110 transition-all"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Media Container: Flexes gracefully within fixed bounds */}
                  <div className="relative flex-1 flex items-center justify-center p-4">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-4 bg-black/10 blur-lg rounded-full" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`max-h-[220px] max-w-full object-contain transition-transform duration-500 ${
                        isHovered ? 'scale-108 -translate-y-2' : 'scale-100'
                      }`}
                    />
                  </div>

                  {/* Bottom Information Drawer (Zero Layout Shift) */}
                  <div className="p-6 bg-white border-t border-gray-50 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-base font-bold text-[#171A1F] tracking-tight">
                        {product.name}
                      </h3>
                      {/* Color swatches */}
                      <div className="flex items-center space-x-1">
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            style={{ backgroundColor: c }}
                            className="w-2.5 h-2.5 rounded-full border border-white shadow-xs"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-[#8A8F99] mb-3">
                      {product.designer}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-base font-bold text-[#DC2626]">
                        ${product.price.toFixed(2)}
                      </span>

                      <div className="flex items-center space-x-1 text-xs text-[#6B7280]">
                        <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                        <span className="font-semibold text-gray-900">{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                    </div>

                    {/* Dynamic Action Trigger without shifting container height */}
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        className={`text-xs font-semibold tracking-wide transition-colors ${
                          isHovered ? 'text-casala-teal underline' : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        {isHovered ? 'Instant Add +$0 Ship' : 'View Configuration'}
                      </button>
                      <span className="text-[11px] text-gray-400 font-mono">EN 16139</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
