import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { moduleHouseItems } from '../data/mockData';

export default function ModuleHouseSection({ onSelectModule }) {
  const lila = moduleHouseItems[0];
  const ella = moduleHouseItems[1];

  return (
    <section id="module-tech" className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-[1400px] mx-auto relative overflow-hidden">
      {/* Top Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
        {/* Left Sub-kicker & Dotted matrix */}
        <div className="lg:col-span-5 relative">
          <span className="text-xs sm:text-sm font-semibold text-zinc-900 tracking-wide uppercase">
            Modeler's Haven
          </span>
          {/* Subtle decorative dot pattern */}
          <div className="hidden sm:block absolute -left-6 top-8 w-32 h-32 opacity-20 dotted-city-bg pointer-events-none" />
        </div>

        {/* Right Headline */}
        <div className="lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight tracking-tight"
          >
            Module House tech's <br className="hidden sm:inline" />
            flexibility initiates complex <br className="hidden sm:inline" />
            projects from scratch.
          </motion.h2>
        </div>
      </div>

      {/* 2 Asymmetric Featured Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        {/* Card 1: Lila Bennett */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col"
        >
          <div
            onClick={() => onSelectModule(lila)}
            className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[16/12] shadow-xl cursor-pointer bg-zinc-900"
          >
            <img
              src={lila.image}
              alt={lila.name}
              className="w-full h-full object-cover zoom-img group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Top Right Arrow Button */}
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-zinc-900 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110 shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </div>

            {/* Bottom Name Label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-white font-semibold text-lg sm:text-xl tracking-tight">
                {lila.name}
              </span>
            </div>
          </div>

          {/* Subtitle Caption below Card 1 */}
          <div className="pt-5 max-w-sm">
            <p className="text-zinc-800 text-xs sm:text-sm leading-relaxed font-normal">
              Professional photos, Breeze <br />
              Verified floor plans and virtual tours <br />
              for every property.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Ella Thompson (Tall/Spacious) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <div
            onClick={() => onSelectModule(ella)}
            className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden aspect-[16/14] lg:aspect-[16/15] shadow-xl cursor-pointer bg-zinc-900"
          >
            <img
              src={ella.image}
              alt={ella.name}
              className="w-full h-full object-cover zoom-img group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Top Right Arrow Button */}
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-zinc-900 flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110 shadow-md">
              <ArrowUpRight className="w-5 h-5" />
            </div>

            {/* Bottom Name Label */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="text-white font-semibold text-lg sm:text-xl tracking-tight">
                {ella.name}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
