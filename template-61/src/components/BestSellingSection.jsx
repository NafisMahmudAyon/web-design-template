import React, { useState } from 'react';
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bestSellingProducts } from '../data/treadlyData';

export default function BestSellingSection({
  wishlist = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedSizes, setSelectedSizes] = useState({});

  const total = bestSellingProducts.length;
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - itemsPerPage : Math.max(0, prev - 1)));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= total ? 0 : prev + 1));
  };

  const handleSelectSize = (productId, size, e) => {
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  // Get current visible 3 products
  const visibleProducts = bestSellingProducts.slice(startIndex, startIndex + itemsPerPage);
  // Wrap around if needed
  if (visibleProducts.length < itemsPerPage) {
    visibleProducts.push(...bestSellingProducts.slice(0, itemsPerPage - visibleProducts.length));
  }

  return (
    <section id="best-selling" className="py-16 sm:py-20 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 font-syne tracking-tight">
            Best Selling Shoes
          </h2>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-neutral-600 font-mono tracking-wider">
              {startIndex + 1} / {total}
            </span>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white hover:bg-neutral-950 hover:text-white border border-neutral-200 flex items-center justify-center text-neutral-800 transition-all shadow-sm active:scale-95"
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Track */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, idx) => {
              const isFav = wishlist.includes(product.id);
              const currentSize = selectedSizes[product.id] || product.sizes[0];

              return (
                <motion.div
                  key={`${product.id}-${startIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group relative bg-[#F9FAFB] hover:bg-white rounded-3xl border border-neutral-100 hover:border-neutral-300/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl h-[440px]"
                >
                  {/* Top Info Bar */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
                        {product.category}
                      </span>
                      <h3
                        onClick={() => onQuickView?.(product)}
                        className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight cursor-pointer hover:text-emerald-800 transition-colors mt-0.5"
                      >
                        {product.name}
                      </h3>

                      {/* Color Dots */}
                      <div className="flex items-center gap-1.5 mt-2">
                        {product.colorDots.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            className="w-2.5 h-2.5 rounded-full shadow-xs border border-white"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <span className="text-base sm:text-lg font-black text-neutral-950 font-syne">
                      {product.priceDisplay}
                    </span>
                  </div>

                  {/* Sneaker Visual - Fixed Container */}
                  <div
                    onClick={() => onQuickView?.(product)}
                    className="flex-1 my-3 flex items-center justify-center cursor-pointer overflow-hidden p-2"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-48 w-auto object-contain transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 filter drop-shadow-md"
                    />
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={(e) => handleSelectSize(product.id, size, e)}
                          className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border transition-all ${
                            currentSize === size
                              ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onToggleWishlist(product.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                          isFav
                            ? 'bg-rose-50 border-rose-200 text-rose-500 shadow-sm'
                            : 'bg-white border-neutral-200 text-neutral-400 hover:text-rose-500 hover:border-rose-200'
                        }`}
                        aria-label="Wishlist toggle"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                      </button>

                      <button
                        onClick={() => onAddToCart({ ...product, selectedSize: currentSize })}
                        className="inline-flex items-center gap-1.5 bg-neutral-200/80 hover:bg-neutral-950 hover:text-white text-neutral-900 text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
                      >
                        <span>Add to Bag</span>
                        <ShoppingBag className="w-3 h-3" />
                      </button>
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
