import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star } from 'lucide-react';

const GEAR_ITEMS = [
  {
    id: 1,
    title: 'Tour Grade Pro Practice Balls',
    category: 'Balls & Accessories',
    price: '$54.00',
    rating: 4.9,
    image: '/assets/shop-balls.png',
    span: 'col-span-12 md:col-span-5',
    aspect: 'aspect-square md:aspect-[4/3]',
  },
  {
    id: 2,
    title: 'TaylorMade Milled Grind Wedges',
    category: 'Clubs & Irons',
    price: '$179.00',
    rating: 5.0,
    image: '/assets/shop-iron.jpg',
    span: 'col-span-12 md:col-span-7',
    aspect: 'aspect-square md:aspect-[16/9]',
  },
  {
    id: 3,
    title: 'Tempo Electric Fleet Golf Cart',
    category: 'Course Vehicles',
    price: '$8,450.00',
    rating: 4.95,
    image: '/assets/shop-cart.png',
    span: 'col-span-12 md:col-span-7',
    aspect: 'aspect-square md:aspect-[16/9]',
  },
  {
    id: 4,
    title: 'Signature Tour Stand Bag & Full Set',
    category: 'Bags & Sets',
    price: '$420.00',
    rating: 4.9,
    image: '/assets/shop-bag.png',
    span: 'col-span-12 md:col-span-5',
    aspect: 'aspect-square md:aspect-[4/3]',
  },
];

export default function ShopSection({ onOpenShopModal }) {
  return (
    <section className="relative bg-[#08150f] text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            A smarter, simpler way to shop, <br />
            book, and enjoy golf.
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Curated equipment, trusted courses, and effortless booking built for modern golfers.
          </p>
        </div>

        {/* 4-Item Visual Grid */}
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {GEAR_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              onClick={() => onOpenShopModal && onOpenShopModal(item)}
              className={`${item.span} relative rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-white/30 shadow-2xl transition-all duration-300 bg-[#0e2118]`}
            >
              <div className={`w-full ${item.aspect} overflow-hidden relative`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Floating Quick Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-[#E2F844] text-[#0a1711] flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title & Price Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#E2F844] transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-white/90">{item.price}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-xs text-[#E2F844] flex items-center gap-1 font-medium">
                        <Star className="w-3 h-3 fill-current" /> {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Bottom Shop Now Button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => onOpenShopModal && onOpenShopModal(GEAR_ITEMS[0])}
            className="bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold text-sm px-9 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-xl shadow-[#E2F844]/25"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
