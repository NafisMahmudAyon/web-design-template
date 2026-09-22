import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Cpu, BarChart3, ArrowRight } from 'lucide-react';
import { solutionsList } from '../data/cryptoData';

export default function SolutionsSection({ onExploreSolution }) {
  // Adheres to the "One Different Card" rule:
  // Default active is 'trading' matching the static mockup screenshot,
  // but on hover/focus ANY card dynamically transforms into the active state.
  const [activeId, setActiveId] = useState('trading');

  const iconMap = {
    Shield: Shield,
    TrendingUp: TrendingUp,
    Cpu: Cpu,
    BarChart3: BarChart3,
  };

  return (
    <section id="features" className="py-24 bg-[#F9FBFA] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200/70 text-xs font-bold text-gray-700 tracking-wide uppercase mb-3">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1A1C] tracking-tight font-display">
              Everything You Need to <br />
              Build in Web3
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              From secure wallets to smart contract automation, our platform provides powerful blockchain tools for businesses, startups, and developers.
            </p>
          </div>
        </div>

        {/* 4 Cards Row with Zero-CLS Polymorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsList.map((sol) => {
            const IconComponent = iconMap[sol.iconName] || Shield;
            const isActive = activeId === sol.id;

            return (
              <motion.div
                key={sol.id}
                onMouseEnter={() => setActiveId(sol.id)}
                onClick={() => onExploreSolution && onExploreSolution(sol.title)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between cursor-pointer min-h-[260px] transition-all duration-300 ${
                  isActive
                    ? 'bg-[#132B2E] text-white shadow-xl shadow-[#132B2E]/20 border border-[#00D287]/40'
                    : 'bg-white text-[#0B1A1C] border border-gray-200 shadow-sm hover:border-gray-300'
                }`}
              >
                {/* Top Icon with dynamic theme */}
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      isActive
                        ? 'bg-[#00D287] text-[#0B1A1C]'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-xl font-bold font-display tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[#0B1A1C]'
                    }`}
                  >
                    {sol.title}
                  </h3>
                </div>

                {/* Description at bottom */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mt-4 transition-colors duration-300 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {sol.description}
                </p>

                {/* Active Indicator Accent */}
                {isActive && (
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#00D287] animate-pulse"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
