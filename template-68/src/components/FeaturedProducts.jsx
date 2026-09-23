import React from 'react';
import { Heart, Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/groceryData';

export default function FeaturedProducts({ onAddToCart, onToggleWishlist, wishlistItems = [] }) {
  return (
    <section id="products" className="w-full py-14 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Products
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Featured <span className="text-[#0c6b3e]">Products</span>
            </h2>
          </div>

          <button
            type="button"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((prod) => {
            const isWishlisted = wishlistItems.includes(prod.id);
            return (
              <div
                key={prod.id}
                className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 h-[380px] flex flex-col justify-between group"
              >
                {/* Top Badges Row */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0c6b3e] text-white text-[10px] font-bold tracking-wide">
                    {prod.discount}
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(prod.id)}
                    aria-label="Add to Wishlist"
                    className="w-8 h-8 rounded-full bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-500 flex items-center justify-center transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isWishlisted ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image */}
                <div className="w-full h-40 flex items-center justify-center overflow-hidden my-1">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="font-medium text-emerald-800">{prod.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-amber-500" />
                      <span>{prod.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0c6b3e] transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">{prod.weight}</p>
                </div>

                {/* Price & Add to Cart Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-black text-gray-900">
                      ${prod.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ${prod.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onAddToCart(prod)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-600/30 text-[#0c6b3e] hover:bg-[#0c6b3e] hover:text-white text-xs font-bold transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
