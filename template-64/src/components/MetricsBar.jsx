import React from 'react';
import { motion } from 'framer-motion';
import { metricsData } from '../data/agencyData';

export default function MetricsBar() {
  return (
    <section className="py-20 lg:py-24 border-b border-[#1B2B1F]/50 relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-xs">
              {metricsData.headline}
            </h2>
          </motion.div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {metricsData.items.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#25E575] tracking-tight font-display">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-2">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
