import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { trustReasons } from '../data/properties';

export default function Section4WhyClientsTrustUs({ onSeeAll }) {
  return (
    <section id="why-us" className="w-full bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#121212]">
              Why <span className="font-italic-serif font-normal text-[#121212]">Clients</span> Trust Us
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-sm md:text-base text-[#666666] max-w-md leading-relaxed">
              Our mission is simple make your property journey transparent efficient and enjoyable.
            </p>

            <button
              onClick={onSeeAll}
              className="shrink-0 bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-105 cursor-pointer group"
            >
              <span>See All</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Feature Cards Layout matching exact staggered design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1 (3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 flex flex-col space-y-6 group"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md">
              <img
                src={trustReasons[0].image}
                alt={trustReasons[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
                  {trustReasons[0].title}
                </h3>
                <span className="text-base font-serif italic text-gray-400 font-bold">
                  {trustReasons[0].id}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#666666] leading-relaxed font-light">
                {trustReasons[0].desc}
              </p>
            </div>
          </motion.div>

          {/* Card 2 (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 flex flex-col space-y-6 group pt-0 md:pt-12"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md">
              <img
                src={trustReasons[1].image}
                alt={trustReasons[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
                  {trustReasons[1].title}
                </h3>
                <span className="text-base font-serif italic text-gray-400 font-bold">
                  {trustReasons[1].id}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#666666] leading-relaxed font-light">
                {trustReasons[1].desc}
              </p>
            </div>
          </motion.div>

          {/* Card 3 (4 Cols - Large Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 flex flex-col space-y-6 group"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md">
              <img
                src={trustReasons[2].image}
                alt={trustReasons[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl md:text-2xl font-bold text-[#121212]">
                  {trustReasons[2].title}
                </h3>
                <span className="text-base font-serif italic text-gray-400 font-bold">
                  {trustReasons[2].id}
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#666666] leading-relaxed font-light">
                {trustReasons[2].desc}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
