import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { heroProducts, brandLogos } from '../data/products';

export default function Section1Hero({ onQuickView, onShopNow }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2]">
      {/* Top Hero Text Header Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12 md:pb-16 border-b border-[#E2E2E2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Title Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#121212] tracking-tight leading-[1.08] max-w-4xl">
              Discover Products Designed For Modern Life
            </h1>
          </motion.div>

          {/* Right Subtitle & Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between items-start lg:items-start space-y-6"
          >
            <p className="text-sm md:text-base text-[#666666] leading-relaxed max-w-md">
              Explore authentic electronics, fashion, self-care, groceries, and accessories carefully selected for quality, value, and convenience.
            </p>
            <button
              onClick={onShopNow}
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-all duration-300 group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Now</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* 3 Featured Products Showcase Grid */}
      <div className="max-w-[1440px] mx-auto border-b border-[#E2E2E2]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E2E2]"
        >
          {heroProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onClick={() => onQuickView(product)}
              className="group relative bg-[#F5F5F5] p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[420px] lg:min-h-[480px]"
            >
              {/* Top Badge (if any) */}
              <div className="flex justify-end h-8">
                {product.badge && (
                  <span className="inline-block bg-white border border-[#E2E2E2] text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Image */}
              <div className="my-6 flex items-center justify-center h-56 lg:h-64 overflow-hidden relative">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Bottom Label & Action Arrow */}
              <div className="flex items-end justify-between pt-4 border-t border-transparent group-hover:border-[#E2E2E2] transition-colors">
                <div>
                  <h3 className="text-lg font-bold text-[#121212] group-hover:text-black">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#777777] mt-1 font-medium">
                    • {product.sublabel}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#D0D0D0] flex items-center justify-center bg-white group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Brand Logos Marquee Grid Bar */}
      <div className="w-full bg-[#F5F5F5] overflow-hidden py-8 border-b border-[#E2E2E2]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-around flex-wrap gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {brandLogos.map((brand, idx) => (
              <span
                key={idx}
                className={`text-xl md:text-2xl text-[#121212] select-none hover:scale-110 transition-transform cursor-pointer ${brand.font}`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
