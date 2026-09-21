import React, { useState } from 'react';
import { ShoppingBag, Check, Plus, Sparkles } from 'lucide-react';
import { FLAVORS } from '../data/mockData';

export default function FlavorGridSection({ onAddToCart }) {
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (flavor) => {
    onAddToCart(flavor);
    setAddedId(flavor.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="flavors" className="py-20 bg-[#eae6df] border-t border-[#0a4b5c]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#0a4b5c]/5 border border-[#0a4b5c]/10 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-script text-2xl text-[#0a4b5c] font-bold tracking-wide">
              botanical collection
            </span>
          </div>
          <h2 className="font-display-title text-4xl sm:text-6xl font-black text-[#0a4b5c] uppercase tracking-tight">
            MEET YOUR NEW FAVORITE FOUR
          </h2>
          <p className="text-sm sm:text-base text-[#0a4b5c]/80 font-medium">
            Each flavor is crafted in small batches using real pressed fruits, organic herbs, and crisp mountain spring water.
          </p>
        </div>

        {/* 4 Flavor Cards Grid - ZERO CLS FIXED HEIGHT CONTAINERS (h-[480px] sm:h-[500px]) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FLAVORS.map((flavor) => {
            const isJustAdded = addedId === flavor.id;

            return (
              <div
                key={flavor.id}
                className="group relative bg-white rounded-3xl border-2 border-[#0a4b5c] p-5 flex flex-col justify-between h-[480px] sm:h-[500px] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Top Header Badge & Price */}
                <div className="flex items-center justify-between z-10">
                  <span
                    className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full border border-[#0a4b5c] ${flavor.tagColor}`}
                  >
                    {flavor.tag}
                  </span>
                  <span className="font-display-title text-xl font-black text-[#0a4b5c]">
                    {flavor.price}
                  </span>
                </div>

                {/* Product Media Area (Flexes inside fixed container height) */}
                <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-[#eae6df]/40 border border-[#0a4b5c]/10 group-hover:bg-[#b8ff00]/10 transition-colors duration-300">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a4b5c]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <button
                      onClick={() => handleAdd(flavor)}
                      className="w-full bg-[#b8ff00] hover:bg-[#a6eb00] text-[#0a4b5c] font-black text-xs py-2.5 rounded-full border border-[#0a4b5c] flex items-center justify-center space-x-2 shadow-lg transition-transform transform active:scale-95"
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 text-[#0a4b5c]" />
                          <span>ADDED TO CART</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-[#0a4b5c]" />
                          <span>QUICK ADD ({flavor.price})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Flavor Details */}
                <div className="space-y-2 z-10 pt-1">
                  <h3 className="font-display-title text-2xl font-black text-[#0a4b5c] uppercase tracking-tight group-hover:text-emerald-800 transition-colors">
                    {flavor.name}
                  </h3>
                  
                  <p className="text-xs text-[#0a4b5c]/80 line-clamp-2 leading-relaxed">
                    {flavor.desc}
                  </p>

                  {/* Ingredient Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {flavor.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-extrabold uppercase text-[#0a4b5c]/70 bg-[#eae6df] px-2 py-0.5 rounded border border-[#0a4b5c]/10"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Primary Add Button (Visible on mobile & desktop when not hovering) */}
                  <button
                    onClick={() => handleAdd(flavor)}
                    className="w-full mt-3 bg-[#0a4b5c] hover:bg-emerald-950 text-white font-extrabold text-xs py-2.5 rounded-full flex items-center justify-center space-x-2 transition-colors duration-200"
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#b8ff00]" />
                        <span className="text-[#b8ff00]">ADDED!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-[#b8ff00]" />
                        <span>ADD TO CART</span>
                      </>
                    )}
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
