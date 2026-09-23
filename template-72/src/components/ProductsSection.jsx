import React from 'react';
import { FEATURED_PRODUCTS } from '../data/wildlingData';

export default function ProductsSection({ onAddToCart, onBuyNow }) {
  return (
    <section id="packaging" className="w-full py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#2e1d1b] lowercase mb-3">
            products
          </h2>
          <p className="text-xs sm:text-sm text-[#2e1d1b]/70 leading-relaxed font-normal">
            Improves lymphatic function, resulting in a naturally dewy, glowing complexion.
          </p>
        </div>

        {/* 2-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {FEATURED_PRODUCTS.map((prod) => (
            <div key={prod.id} className="flex flex-col justify-between group">
              {/* Product Still Life Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#faf4ef] shadow-md mb-8">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2e1d1b] lowercase mb-4">
                  {prod.title}
                </h3>

                <p className="text-xs text-[#2e1d1b]/70 leading-relaxed mb-8 font-normal">
                  {prod.description}
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-4 pb-8 mb-8 border-b border-gray-100">
                  {prod.stats.map((stat, idx) => (
                    <div key={idx}>
                      <span className="text-xl sm:text-2xl font-black text-[#2e1d1b] block">
                        {stat.value}
                      </span>
                      <span className="text-[10px] text-[#2e1d1b]/60 font-medium">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onBuyNow?.(prod)}
                    className="px-8 py-3 bg-[#2e1d1b] hover:bg-[#1e1211] text-white text-[11px] font-bold tracking-widest uppercase transition-all shadow-md active:scale-95"
                  >
                    BUY NOW
                  </button>

                  <button
                    onClick={() => onAddToCart?.(prod)}
                    className="px-8 py-3 border border-[#2e1d1b]/30 hover:border-[#2e1d1b] text-[#2e1d1b] text-[11px] font-bold tracking-widest uppercase transition-all active:scale-95"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
