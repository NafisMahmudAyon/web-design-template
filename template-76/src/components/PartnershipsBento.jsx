import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, CheckCircle, Award } from 'lucide-react';
import { bentoStats } from '../data/saasData';

export default function PartnershipsBento({ onDiscover }) {
  const statIcons = [Users, Award, TrendingUp, CheckCircle];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Outer Lavender Bento Container */}
      <div className="rounded-[32px] sm:rounded-[44px] bg-[#F7F5FF] border border-[#ECE7FE] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xs">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200/40 blur-[100px] pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Heading + Underline + Description + CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.15] mb-5 font-display"
            >
              25,000+ Trusted <br />
              Partnerships built <br />
              on <span className="relative inline-block text-[#6D28D9]">
                Results
                {/* Purple Curved Underline Stroke (Figma design detail) */}
                <svg
                  viewBox="0 0 140 18"
                  fill="none"
                  className="absolute -bottom-2.5 left-0 w-full text-[#7C3AED]"
                >
                  <path
                    d="M3 14C35 4 105 4 137 14"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mb-8"
            >
              Trusted by over 25,000 of the world's most successful companies, we deliver reliable, high-performance solutions that drive real business results.
            </motion.p>

            {/* Discover More CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                onClick={onDiscover}
                className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white pl-6 pr-3 py-3 rounded-full text-sm font-semibold tracking-wide inline-flex items-center space-x-3 transition-all duration-300 shadow-[0_10px_25px_rgba(109,40,217,0.3)] hover:shadow-[0_14px_30px_rgba(109,40,217,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Discover more</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 2x2 Bento Stat Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {bentoStats.map((stat, idx) => {
                const Icon = statIcons[idx] || Award;

                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs border border-purple-100/60 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-3xl sm:text-4xl font-extrabold ${stat.accentColor} tracking-tight font-display`}>
                        {stat.value}
                      </span>
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-gray-700 leading-snug">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
