import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Eye } from 'lucide-react';
import { bestsellingEssentials } from '../data/products';

export default function Section2Bestsellers({ onQuickView, onToggleWishlist, isWishlisted }) {
  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="px-4 md:px-8 pb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E2E2]">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-tight"
          >
            Our Bestselling Essentials
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => onQuickView(bestsellingEssentials[0])}
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs md:text-sm font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* 5 Columns Grid with Vertical Divider Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E2E2] border-b border-[#E2E2E2]">
          {bestsellingEssentials.map((product, idx) => {
            const wish = isWishlisted(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#F5F5F5] p-6 flex flex-col justify-between hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[380px]"
              >
                {/* Top Actions Bar (Wishlist & Quick View) */}
                <div className="flex justify-between items-center z-10">
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

                {/* Bottom Title & Price Bar */}
                <div className="pt-4 flex items-center justify-between border-t border-transparent group-hover:border-[#E2E2E2]">
                  <span className="text-base font-bold text-[#121212] group-hover:text-black">
                    {product.title}
                  </span>
                  <span className="text-base font-extrabold text-[#121212]">
                    ${product.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
