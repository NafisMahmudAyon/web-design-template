import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { agentStats } from '../data/homelyData';

export default function AgentsAndStatsSection() {
  return (
    <section id="agents" className="py-16 sm:py-24 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading + Featured Review Card (spans 6) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-syne tracking-tight leading-tight">
              {agentStats.heading}
            </h2>

            {/* Featured A-frame review card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8F9FB] rounded-3xl p-5 sm:p-6 border border-neutral-200/80 shadow-md flex flex-col sm:flex-row items-center gap-5 w-full group hover:shadow-xl transition-all duration-300"
            >
              {/* Chalet photo */}
              <div className="w-full sm:w-44 h-40 rounded-2xl overflow-hidden shrink-0 relative">
                <img
                  src={agentStats.preview.image}
                  alt="Modern architectural glass chalet"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quote details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-relaxed italic mb-4">
                  {agentStats.preview.quote}
                </p>

                <div>
                  <h4 className="text-xs sm:text-sm font-black text-neutral-900 font-syne tracking-tight">
                    {agentStats.preview.authorTag}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-xs font-bold text-neutral-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{agentStats.preview.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Paragraph + 2x2 Stats Grid (spans 6) */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-lg font-sans">
              {agentStats.subtext}
            </p>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              {agentStats.stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#F8F9FB] hover:bg-white rounded-2xl p-6 border border-neutral-200/70 transition-all duration-300 hover:shadow-lg flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-black text-neutral-900 font-syne tracking-tight">
                    {item.value.split(' ')[0]}{' '}
                    <span className="text-[#C88C48] font-bold text-xl sm:text-2xl">
                      {item.value.split(' ')[1]}
                    </span>
                  </span>
                  <p className="text-xs text-neutral-500 font-semibold mt-2 leading-relaxed">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
