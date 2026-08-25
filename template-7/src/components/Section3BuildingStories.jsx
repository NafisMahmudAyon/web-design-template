import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { buildingStats } from '../data/properties';

export default function Section3BuildingStories({ onReadMore }) {
  return (
    <section id="stories" className="w-full bg-black text-white py-28 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#F8BA8B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto space-y-20 relative z-10">
        
        {/* Section Headline */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Building Spaces <br />
            <span className="font-italic-serif font-normal text-white">That Tell Stories.</span>
          </h2>
        </div>

        {/* 4 Stat Cards + Right Bottom Callout Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          
          {/* Stat Cards Grid (8 Cols) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {buildingStats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-white/20 transition-all duration-300 space-y-6 group"
              >
                <div className="text-5xl md:text-6xl font-serif italic text-white group-hover:text-[#F8BA8B] transition-colors">
                  {stat.value}
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white tracking-wide">
                    {stat.title}
                  </h4>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Bottom Statement & CTA (4 Cols) */}
          <div className="md:col-span-4 p-8 space-y-6 flex flex-col justify-end">
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              We blend design, technology, and trust to connect people with spaces they'll love.
            </p>

            <div>
              <button
                onClick={onReadMore}
                className="bg-[#F8BA8B] hover:bg-[#F6A870] text-black font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer group"
              >
                <span>Read More</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
