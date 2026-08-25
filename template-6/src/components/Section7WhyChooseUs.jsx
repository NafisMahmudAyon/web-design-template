import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { whyChooseUsReasons } from '../data/products';

export default function Section7WhyChooseUs({ onSeeMore }) {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return (
          <svg className="w-20 h-20 text-[#888888] stroke-[1]" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <path d="M20 20h8v32h-8zM36 26h8v26h-8zM24 12h4v8h-4zM40 18h4v8h-4z" />
            <path d="M12 28h8v24h-8zM16 20h2v8h-2z" />
            <circle cx="24" cy="36" r="3" />
            <circle cx="40" cy="38" r="3" />
            <circle cx="16" cy="40" r="2" />
          </svg>
        );
      case 1:
        return (
          <svg className="w-20 h-20 text-[#888888] stroke-[1]" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <path d="M32 10L10 22l22 12 22-12L32 10zM10 22v20l22 12V34L10 22zM54 22v20L32 54V34l22-12z" />
            <path d="M22 28l20-11M42 46l8-4" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-20 h-20 text-[#888888] stroke-[1]" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <rect x="16" y="14" width="32" height="14" rx="2" />
            <path d="M14 28h36v20a4 4 0 01-4 4H18a4 4 0 01-4-4V28z" />
            <path d="M24 36h16" />
          </svg>
        );
      default:
        return <ShieldCheck className="w-16 h-16 text-[#888888]" />;
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5] border-b border-[#E2E2E2] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="px-4 md:px-8 pb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E2E2]">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] tracking-tight"
          >
            Why Customers Choose ORVIA
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={onSeeMore}
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 text-xs md:text-sm font-semibold hover:bg-neutral-800 transition-colors self-start sm:self-auto group cursor-pointer"
          >
            <span>See More</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E2E2] border-b border-[#E2E2E2]">
          {whyChooseUsReasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 md:p-12 bg-[#F5F5F5] flex flex-col justify-between hover:bg-[#EAEAEA] transition-colors duration-300 min-h-[380px]"
            >
              {/* Top Number */}
              <span className="font-display text-5xl md:text-6xl font-light text-[#BEBEBE]">
                {item.num}
              </span>

              {/* Center Line Illustration Icon */}
              <div className="my-8 flex items-center justify-center">
                {getIcon(idx)}
              </div>

              {/* Bottom Title & Description */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#121212] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
