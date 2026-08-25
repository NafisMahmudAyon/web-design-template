import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { timelessAccessoriesData } from '../data/products';

export default function Section5TimelessAccessories({ onShopCollection, onQuickView }) {
  const { headline, subtext, rightColumn, gallery } = timelessAccessoriesData;

  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E2E2]">
          
          {/* Left Column (7 Cols): Headline + Subtext + 3 Bottom Gallery Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Top Text Area */}
            <div className="p-8 md:p-14 border-b border-[#E2E2E2]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121212] tracking-tight leading-[1.1] max-w-xl"
              >
                {headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-[#666666] leading-relaxed mt-6 max-w-lg"
              >
                {subtext}
              </motion.p>
            </div>

            {/* Bottom 3-Column Image Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E2E2]">
              {gallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  onClick={() => onQuickView({
                    id: item.id,
                    title: item.title,
                    price: 89,
                    category: "Bags & Accessories",
                    image: item.image,
                    description: "Thoughtfully crafted modern lifestyle accessory."
                  })}
                  className="group bg-[#F5F5F5] p-6 h-64 md:h-72 flex items-center justify-center cursor-pointer hover:bg-[#EAEAEA] transition-colors duration-300 relative overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                    <span className="text-xs text-white font-medium bg-black/80 px-3 py-1 rounded-full">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Tall Column Card (5 Cols): Image + Text + Action Button */}
          <div className="lg:col-span-5 bg-[#F5F5F5] p-8 md:p-14 flex flex-col justify-between">
            
            {/* Top Large Editorial Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full h-80 md:h-[420px] mb-8 overflow-hidden rounded-none flex items-center justify-center bg-[#EAEAEA]"
            >
              <img
                src={rightColumn.image}
                alt={rightColumn.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Bottom Text & Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-sm text-[#555555] leading-relaxed">
                {rightColumn.description}
              </p>

              <button
                onClick={onShopCollection}
                className="inline-flex items-center gap-3 bg-black text-white px-7 py-4 text-xs uppercase tracking-widest font-bold hover:bg-neutral-800 transition-colors group cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
