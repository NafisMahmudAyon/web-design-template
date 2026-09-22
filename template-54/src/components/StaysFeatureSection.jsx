import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Headset, TrendingUp, DollarSign, Star, Bed, Bath } from 'lucide-react';
import { staysFeatureData } from '../data/journeoData';

export default function StaysFeatureSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF9] border-t border-gray-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & 2 Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 bg-white text-xs font-semibold text-gray-800 shadow-xs mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-gray-950" />
                <span>{staysFeatureData.badge}</span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-950 tracking-tight leading-tight font-display"
              >
                {staysFeatureData.headline}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-lg"
              >
                {staysFeatureData.subtitle}
              </motion.p>
            </div>

            {/* 2 Key Feature Cards */}
            <div className="mt-8 sm:mt-10 flex flex-col gap-4">
              {staysFeatureData.features.map((feat, idx) => (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  whileHover={{ y: -2 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-card transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0">
                    {feat.icon === 'globe' ? (
                      <Globe className="w-5 h-5" />
                    ) : (
                      <Headset className="w-5 h-5" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-gray-950">
                      {feat.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Resort Image with Floating Statistics Cards */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[480px] sm:h-[540px] rounded-[36px] overflow-hidden shadow-card border border-gray-200/80 relative bg-gray-900 group"
            >
              <img
                src={staysFeatureData.rightImage}
                alt="Luxury resort pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

              {/* Floating Pill Card 1: Top Statistics */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/80 text-gray-900"
              >
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-700">Statistics</span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <TrendingUp className="w-3 h-3" />
                    <span>$12k Rate</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-800">
                      $
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 font-semibold uppercase">Total Profit</div>
                      <div className="text-lg font-extrabold text-gray-950 font-display">
                        $89.3k
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Pill Card 2: Bottom Sales Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/80 text-gray-900 flex items-center gap-3.5"
              >
                <img
                  src={staysFeatureData.statsPill2.thumb}
                  alt="Villa thumbnail"
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-gray-950 flex items-center justify-between">
                    <span>{staysFeatureData.statsPill2.title}</span>
                    <span className="text-xs font-extrabold text-blue-600">
                      {staysFeatureData.statsPill2.price}
                    </span>
                  </div>

                  <div className="mt-1 text-[11px] text-gray-500 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3 h-3 text-gray-400" />
                      3 Beds
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3 h-3 text-gray-400" />
                      2 Baths
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-1 text-[10px] text-amber-600 font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>40 Verified Reviews</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
