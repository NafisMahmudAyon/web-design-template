import React from 'react';
import { motion } from 'framer-motion';
import { advantageData } from '../data/cryptoData';

export default function AdvantageSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-700 tracking-wide uppercase">
            {advantageData.badge}
          </span>
        </div>

        {/* Narrative Statement */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600 leading-snug">
            Our blockchain infrastructure helps{' '}
            <span className="text-[#0B1A1C] font-bold">businesses, investors, and developers</span>{' '}
            securely manage digital assets, automate transactions, and build scalable Web3
            experiences. From DeFi to NFTs, we provide the technology needed to grow in the
            decentralized economy.
          </h2>
        </div>

        {/* 3 Metric Stats with subtle vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
          {advantageData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2 md:border-r md:last:border-r-0 border-gray-200 md:pr-6"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0B1A1C] font-display tracking-tight">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-gray-500 max-w-xs leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
