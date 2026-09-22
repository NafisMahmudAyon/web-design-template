import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ctaBannerData } from '../data/journeoData';

export default function CTABanner({ onOpenBookingModal }) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] overflow-hidden min-h-[440px] sm:min-h-[500px] flex items-center justify-between p-8 sm:p-16 shadow-2xl border border-gray-200/80 group"
        >
          {/* Background Scenic Trail Hiker */}
          <div className="absolute inset-0 z-0 bg-emerald-950">
            <img
              src={ctaBannerData.bgImage}
              alt="Hiker exploring lush mountain trail"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 max-w-xl text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.08] font-display whitespace-pre-line"
            >
              {ctaBannerData.headline}
            </motion.h2>

            <div className="mt-8">
              <span className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider block">
                {ctaBannerData.offerTag}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display mt-1">
                {ctaBannerData.discountText}
              </div>
            </div>
          </div>

          {/* Right Action: Big Circular Blue Arrow Button */}
          <div className="relative z-10 self-end sm:self-center">
            <motion.button
              type="button"
              onClick={onOpenBookingModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-2xl transition-colors group-hover:ring-8 group-hover:ring-blue-500/20"
              aria-label="Discover destinations"
            >
              <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
