import React from 'react';
import { Heart, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NewArrivalsSection({
  products,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onQuickView
}) {
  return (
    <section id="arrivals" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 font-syne tracking-tight leading-tight">
              Redefine Your Style
              <br />
              with New Arrivals!
            </h2>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('accent-banner');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-200 shadow-sm group"
          >
            <span>Explore More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 9-Card 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => {
            const isFav = wishlist.includes(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
                className="group relative bg-[#F9FAFB] hover:bg-white rounded-3xl border border-neutral-100 hover:border-neutral-300/80 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl h-[440px]"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      onClick={() => onQuickView?.(product)}
                      className="text-base sm:text-lg font-bold text-neutral-900 font-syne tracking-tight group-hover:text-emerald-900 cursor-pointer transition-colors"
                    >
                      {product.name}
                    </h3>
                    <p className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mt-0.5">
                      {product.colorVariant}
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label="Wishlist toggle"
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isFav
                        ? 'bg-rose-50 border-rose-200 text-rose-500 shadow-sm'
                        : 'bg-white border-neutral-200 text-neutral-400 hover:text-rose-500 hover:border-rose-200'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Sneaker Visual - Fixed Container (Zero CLS) */}
                <div
                  onClick={() => onQuickView?.(product)}
                  className="flex-1 my-4 flex items-center justify-center cursor-pointer overflow-hidden p-2"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="max-h-48 w-auto object-contain transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 filter drop-shadow-md"
                  />
                </div>

                {/* Footer Controls */}
                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-bold text-neutral-900">
                      {product.priceDisplay}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-neutral-700">{product.rating}</span>
                      <span className="text-neutral-400">({product.reviews})</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="inline-flex items-center justify-center bg-neutral-200/80 hover:bg-neutral-900 hover:text-white text-neutral-800 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
