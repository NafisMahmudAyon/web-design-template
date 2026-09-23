import React from 'react';
import {
  Salad,
  Apple,
  Milk,
  Croissant,
  Sparkles,
  Nut,
  Coffee,
  ArrowRight,
} from 'lucide-react';
import { CATEGORIES } from '../data/groceryData';

export default function CategoriesSection({ onCategoryClick, onShopNowClick }) {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Salad':
        return <Salad className="w-6 h-6 text-[#0c6b3e]" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#ea580c]" />;
      case 'Milk':
        return <Milk className="w-6 h-6 text-[#0284c7]" />;
      case 'Croissant':
        return <Croissant className="w-6 h-6 text-[#d97706]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#7c3aed]" />;
      case 'Nut':
        return <Nut className="w-6 h-6 text-[#b45309]" />;
      case 'Coffee':
      default:
        return <Coffee className="w-6 h-6 text-[#e11d48]" />;
    }
  };

  return (
    <section id="categories" className="w-full py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-md mx-auto mb-10">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
            Categories
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Featured <span className="text-[#0c6b3e]">Categories</span>
          </h2>
        </div>

        {/* Categories Horizontal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-14">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onCategoryClick && onCategoryClick(cat)}
              className="flex flex-col items-center p-4 rounded-3xl transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg cursor-pointer group text-center border border-gray-100"
              style={{ backgroundColor: cat.bg }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>

              {/* Title & Product Count */}
              <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#0c6b3e] transition-colors leading-tight">
                {cat.name}
              </h3>
              <p className="text-[11px] text-gray-500 font-medium mt-1">
                {cat.count}
              </p>
            </div>
          ))}
        </div>

        {/* Promotional Hero Banners (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1: Purely Fresh Vegetables */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-[#fbf8f2] border border-[#f0ebd8] overflow-hidden shadow-sm flex flex-col justify-between group">
            <div className="max-w-xs relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#fed700] text-gray-900 text-[11px] font-black tracking-wide uppercase mb-3">
                Flat 20% Discount
              </span>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
                Purely Fresh Vegetables
              </h3>
              <p className="text-xs text-gray-600 mt-2 mb-6 leading-relaxed">
                Crisp farm carrots, bell peppers, fresh greens and organic tomatoes delivered daily.
              </p>
              <button
                type="button"
                onClick={onShopNowClick}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-md transition-all group-hover:gap-3 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Image Artwork */}
            <div className="absolute right-0 bottom-0 w-52 sm:w-64 h-52 sm:h-64 pointer-events-none">
              <img
                src="/assets/promo-vegetables.jpg"
                alt="Fresh Vegetables in Crate"
                className="w-full h-full object-contain object-bottom-right group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Banner 2: Fresh Fruits, Pure Quality */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#fed700] to-[#f9be00] text-gray-900 overflow-hidden shadow-md flex flex-col justify-between group">
            <div className="max-w-xs relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-gray-900 text-[11px] font-black tracking-wide uppercase mb-3 shadow-sm">
                Flat 25% Discount
              </span>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">
                Fresh Fruits, Pure Quality
              </h3>
              <p className="text-xs text-gray-800 mt-2 mb-6 leading-relaxed">
                Sweet strawberries, tropical mangoes, juicy kiwis and antioxidant-rich citrus.
              </p>
              <button
                type="button"
                onClick={onShopNowClick}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white text-xs font-bold shadow-md transition-all group-hover:gap-3 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Image Artwork */}
            <div className="absolute right-0 bottom-0 w-52 sm:w-64 h-52 sm:h-64 pointer-events-none">
              <img
                src="/assets/promo-fruits.jpg"
                alt="Fresh Sliced Fruits Platter"
                className="w-full h-full object-contain object-bottom-right group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
