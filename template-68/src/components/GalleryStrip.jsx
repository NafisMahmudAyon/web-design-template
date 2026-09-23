import React from 'react';
import { GALLERY_IMAGES } from '../data/groceryData';

export default function GalleryStrip() {
  return (
    <section className="w-full bg-white select-none">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="relative h-48 sm:h-56 overflow-hidden group cursor-pointer"
          >
            <img
              src={img}
              alt="Grocery Shopper"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0c6b3e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-bold text-xs">
              <span>#GroceryFresh</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
