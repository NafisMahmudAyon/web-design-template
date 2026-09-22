import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { filterTabs, latestProducts } from '../data/treadlyData';

export default function LatestCollectionSection({
  selectedFilter = 'all',
  onSelectFilter,
  searchQuery = '',
  wishlist = [],
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  // Store selected size per product id
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSelectSize = (productId, size, e) => {
    e.stopPropagation();
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const filteredProducts = latestProducts.filter((product) => {
    const matchesFilter =
      selectedFilter === 'all' || product.tags.includes(selectedFilter);
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="collection" className="py-16 sm:py-20 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 font-syne tracking-tight">
            Explore Our Latest Collection
          </h2>

          {/* Filter Radio / Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectFilter(tab.id)}
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold transition-all px-3 py-1.5 rounded-full ${
                    isActive
                      ? 'text-neutral-950 font-black'
                      : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                      isActive
                        ? 'border-neutral-950'
                        : 'border-neutral-300'
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-neutral-950" />
                    )}
                  </span>
                  <span className="uppercase tracking-wider">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3x3 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => {
            const isFav = wishlist.includes(product.id);
            const currentSize = selectedSizes[product.id] || product.sizes[0];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
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

                    {/* Color Swatch Dots */}
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

                {/* Sneaker Visual - Fixed Container (Zero CLS) */}
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

                {/* Bottom Row: Sizes, Heart Toggle, Add to Bag */}
                <div className="pt-3 border-t border-neutral-200/60 flex items-center justify-between gap-2">
                  {/* Selectable Sizes */}
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

                  {/* Right Actions */}
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
        </div>
      </div>
    </section>
  );
}
