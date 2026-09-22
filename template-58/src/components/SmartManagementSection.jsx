import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, ChevronRight } from 'lucide-react';
import { managementSolutionsData } from '../data/catalxgData';

export const SmartManagementSection = () => {
  const [activeTab, setActiveTab] = useState('01');

  return (
    <section id="management" className="py-24 bg-[#FAFAFA] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brandOrange text-xs font-bold uppercase tracking-wider mb-4">
              <span>{managementSolutionsData.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.18]">
              {managementSolutionsData.headline}
            </h2>
          </div>

          <div className="lg:col-span-5 flex items-center h-full pt-2">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              {managementSolutionsData.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Left Interactive List vs Right Showcase Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 4-Item List */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-slate-200">
            {managementSolutionsData.items.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`py-6 cursor-pointer transition-colors ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight">
                      {item.title}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'bg-transparent text-slate-400 group-hover:text-slate-800'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-sans pr-6">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Photo Card with Awards Badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Executive with awards"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Awards Badge Pill on Bottom Left */}
              <div className="absolute bottom-6 left-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 text-white">
                <div className="w-8 h-8 rounded-xl bg-brandOrange text-white flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-extrabold text-base font-display block leading-tight">
                    {managementSolutionsData.awardsBadge.split(' ')[0]}
                  </span>
                  <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">
                    Awards Winning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
