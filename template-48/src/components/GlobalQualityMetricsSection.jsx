import React from 'react';
import { motion } from 'framer-motion';
import { QUALITY_METRICS } from '../data/terraFarmData';

export const GlobalQualityMetricsSection = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Scenic Wheat Field & Sky Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&auto=format&fit=crop&q=85"
          alt="Lush green wheat ears under blue sky"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 text-white">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-white mb-4 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-terra-lime" />
              <span>Quality & Trust</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              Delivering Global Quality <br />
              <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-white drop-shadow-lg">
                Farming Excellence
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm">
              We follow a simple process to help farmers grow healthier crops with less effort and smarter decisions.
            </p>
          </div>
        </div>

        {/* 4 Metric Pill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {QUALITY_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 sm:p-8 rounded-3xl text-center shadow-xl transition-all duration-200 ${
                metric.highlight
                  ? 'bg-terra-lime text-terra-forest font-black'
                  : 'bg-white/95 backdrop-blur-md text-terra-dark border border-white/80'
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {metric.value}
              </div>
              <div className={`mt-2 text-xs sm:text-sm font-semibold ${
                metric.highlight ? 'text-terra-forest' : 'text-terra-muted'
              }`}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
