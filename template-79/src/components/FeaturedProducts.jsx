import React, { useState } from 'react';
import { ShoppingBag, Heart, Check } from 'lucide-react';
import { productCategories, products } from '../data/furnData';

export const FeaturedProducts = ({ onAddToCart, onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [likedMap, setLikedMap] = useState({ 1: true, 3: true });
  const [addedMap, setAddedMap] = useState({});

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const filtered =
    activeTab === 'All'
      ? products
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header and Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
              Our Featured <br />
              <span className="italic font-normal font-serif text-neutral-800">
                Products
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar pb-2">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shrink-0 ${
                  activeTab === cat
                    ? 'bg-[#141716] text-white shadow-sm'
                    : 'bg-transparent border border-neutral-300 text-neutral-700 hover:border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid - Zero CLS fixed container height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#F4EFEA] border border-neutral-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-[420px] sm:h-[440px]"
            >
              {/* Media Container */}
              <div className="relative flex-1 w-full p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Heart Wishlist Button */}
                <button
                  onClick={(e) => toggleLike(product.id, e)}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center text-neutral-400 hover:text-rose-500 transition-colors"
                  aria-label="Wishlist"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      likedMap[product.id]
                        ? 'text-amber-500 fill-amber-500'
                        : 'text-neutral-400'
                    }`}
                  />
                </button>
              </div>

              {/* Dark Emerald Footer Banner */}
              <div className="bg-[#0A3327] px-5 py-4 flex items-center justify-between text-white shrink-0">
                <div>
                  <h3 className="font-serif text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-furn-gold transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-white/80 mt-0.5">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Shopping Bag Button */}
                <button
                  onClick={(e) => handleAdd(product, e)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    addedMap[product.id]
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  aria-label="Add to cart"
                >
                  {addedMap[product.id] ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ShoppingBag className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
