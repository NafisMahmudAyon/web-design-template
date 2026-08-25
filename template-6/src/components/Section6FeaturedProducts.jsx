import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Heart, Eye, ShoppingBag } from 'lucide-react';
import { featuredProductsGrid } from '../data/products';

export default function Section6FeaturedProducts({ onQuickView, onAddToCart, onToggleWishlist, isWishlisted }) {
  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="px-4 md:px-8 pb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E2E2]">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight"
          >
            Featured Products
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onQuickView(featuredProductsGrid[0])}
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs md:text-sm font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* 4x2 Grid with Divider Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-[#E2E2E2] border-b border-[#E2E2E2]">
          {featuredProductsGrid.map((product, idx) => {
            const wish = isWishlisted(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className={`group relative bg-[#F5F5F5] p-6 flex flex-col justify-between hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[380px] ${
                  (idx + 1) % 4 !== 0 ? 'lg:border-r border-[#E2E2E2]' : ''
                } ${idx < 4 ? 'lg:border-b border-[#E2E2E2]' : ''}`}
              >
                {/* Top Badge & Actions */}
                <div className="flex items-center justify-between z-10">
                  <span className="bg-white border border-[#E2E2E2] text-[11px] font-semibold px-3 py-1 rounded-full text-black shadow-sm">
                    {product.badge}
                  </span>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product);
                      }}
                      className={`p-2 rounded-full transition-colors ${
                        wish ? 'text-red-500 bg-white' : 'text-[#888888] hover:text-black hover:bg-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${wish ? 'fill-red-500' : ''}`} />
                    </button>

                    <button
                      onClick={() => onQuickView(product)}
                      className="opacity-0 group-hover:opacity-100 p-2 bg-white text-black rounded-full shadow-sm hover:bg-black hover:text-white transition-all duration-300"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Image */}
                <div
                  onClick={() => onQuickView(product)}
                  className="my-6 h-48 flex items-center justify-center cursor-pointer overflow-hidden relative"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Bottom Info & Price */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3
                      onClick={() => onQuickView(product)}
                      className="text-base font-bold text-[#121212] group-hover:text-black cursor-pointer truncate pr-2"
                    >
                      {product.title}
                    </h3>
                    <span className="text-base font-extrabold text-[#121212] shrink-0">
                      ${product.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-transparent group-hover:border-[#E2E2E2]">
                    <div className="flex items-center gap-1 text-xs text-[#555555]">
                      <Star className="w-3.5 h-3.5 fill-black text-black" />
                      <span className="font-semibold text-black">{product.rating}</span>
                      <span>({product.reviews} Reviews)</span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="opacity-0 group-hover:opacity-100 text-xs font-bold uppercase tracking-wider text-black hover:underline flex items-center gap-1 transition-opacity"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add
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
