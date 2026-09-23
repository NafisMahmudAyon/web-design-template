import React from 'react';
import { Heart, Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { DEALS_OF_THE_DAY } from '../data/groceryData';

export default function DealsOfDay({ onAddToCart, onToggleWishlist, onShopNowClick }) {
  return (
    <section className="w-full py-14 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Today Deals
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Deals <span className="text-[#0c6b3e]">of the Day</span>
            </h2>
          </div>

          <p className="text-xs text-gray-500 max-w-md leading-relaxed">
            Discover limited-time exclusive discounts on premium household staples and personal care essentials.
          </p>
        </div>

        {/* 2 Deal Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {DEALS_OF_THE_DAY.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 group"
            >
              {/* Left Image with Discount Badge */}
              <div className="relative w-44 h-48 shrink-0 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden p-2">
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#0c6b3e] text-white text-[10px] font-bold">
                  {deal.discount}
                </span>
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Right Info */}
              <div className="flex-1 flex flex-col justify-between h-full py-1">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span className="font-semibold text-emerald-800">{deal.category}</span>
                    <button
                      type="button"
                      onClick={() => onToggleWishlist && onToggleWishlist(deal.id)}
                      className="text-gray-300 hover:text-rose-500 transition-colors"
                      aria-label="Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0c6b3e] transition-colors leading-snug">
                    {deal.name}
                  </h3>

                  {/* Price & Rating */}
                  <div className="flex items-baseline gap-2 my-2">
                    <span className="text-lg font-black text-gray-900">
                      ${deal.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      ${deal.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mb-2">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{deal.rating}</span>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {deal.description}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onAddToCart(deal)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-600/30 text-[#0c6b3e] hover:bg-[#0c6b3e] hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wide Banner: Unbeatable Offers / Weekly Grocery Specials */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#0c6b3e] text-white shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="max-w-md relative z-10">
            <span className="text-xs font-bold text-[#fed700] uppercase tracking-wider mb-2 block">
              Weekly Deals
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Unbeatable Offers: Your Weekly Grocery Specials
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-3 mb-6 leading-relaxed">
              Stock up your kitchen with artisan sourdough bread, farmhouse cheeses, fresh vineyard grapes, and local honey.
            </p>
            <button
              type="button"
              onClick={onShopNowClick}
              className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#fed700] hover:bg-[#ebd000] text-gray-900 text-xs font-bold shadow-lg transition-all active:scale-95 group-hover:gap-3"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Wicker Basket Artwork */}
          <div className="w-72 sm:w-96 h-56 sm:h-72 shrink-0 relative">
            <img
              src="/assets/weekly-specials-basket.jpg"
              alt="Weekly Grocery Specials Wicker Basket"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
