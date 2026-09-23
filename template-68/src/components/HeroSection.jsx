import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ onShopNowClick }) {
  const customerAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="relative w-full bg-[#f6faf7] overflow-hidden py-12 md:py-20 border-b border-[#e5efe8]">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Headlines & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-xs font-bold text-emerald-800">
            <span className="text-sm">🌿</span>
            <span>The Best Online Grocery Store</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.12]">
            Your One-Stop Shop <br />
            for <span className="text-[#0c6b3e]">Quality Groceries</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Fresh organic fruits, farm-picked vegetables, artisan bakery items, and household essentials delivered safely to your doorstep within 30 minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onShopNowClick}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0c6b3e] hover:bg-[#085430] text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition-all hover:gap-3.5 active:scale-95"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#products"
              className="text-sm font-bold text-gray-800 hover:text-[#0c6b3e] underline underline-offset-4 transition-colors px-2 py-2"
            >
              View All Products
            </a>
          </div>

          {/* Social Proof / Rating */}
          <div className="flex items-center gap-4 pt-4 border-t border-emerald-900/10 w-full max-w-md">
            {/* Avatars Stack */}
            <div className="flex -space-x-2">
              {customerAvatars.map((av, idx) => (
                <img
                  key={idx}
                  src={av}
                  alt="Customer"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-[#fed700] text-gray-900 font-bold text-xs flex items-center justify-center ring-2 ring-white shadow-sm">
                +
              </div>
            </div>

            {/* Rating text */}
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black text-gray-900">4.8 Ratings+</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                </div>
              </div>
              <p className="text-xs text-gray-500 font-medium">Trusted by 75k+ Customers</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Pills */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Circular pastel backdrop disc */}
          <div className="w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#e3f4ea] absolute -z-0"></div>

          {/* Main Hero Photo */}
          <div className="relative z-10 w-72 sm:w-88 md:w-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/assets/hero-woman.jpg"
              alt="Fresh Quality Groceries"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Pill 1: Secure Payment */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-8 -right-2 sm:right-2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl border border-gray-100"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#0c6b3e] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-gray-800">Secure Payment</span>
          </motion.div>

          {/* Floating Pill 2: Fast Delivery */}
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-6 -left-2 sm:left-2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl border border-gray-100"
          >
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
              <Zap className="w-4 h-4 fill-amber-700" />
            </div>
            <span className="text-xs font-bold text-gray-800">Fast Delivery</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
