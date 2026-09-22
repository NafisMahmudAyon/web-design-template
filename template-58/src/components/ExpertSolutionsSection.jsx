import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { expertSolutionsData } from '../data/catalxgData';

export const ExpertSolutionsSection = ({ onOpenTrial }) => {
  return (
    <section id="about" className="py-24 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Team Photo & Floating Trust Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop"
                alt="Colleagues analyzing financial analytics"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glass Trust Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -bottom-6 -right-2 sm:right-6 z-20 w-72 sm:w-80 p-5 rounded-2xl bg-white shadow-2xl border border-slate-200"
            >
              <h4 className="text-sm font-bold font-display text-slate-900 mb-1">
                {expertSolutionsData.floatingCard.title}
              </h4>
              <p className="text-xs text-slate-500 font-sans leading-relaxed mb-3">
                {expertSolutionsData.floatingCard.subtitle}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80&auto=format&fit=crop"
                    alt="Reviewer 1"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop"
                    alt="Reviewer 2"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=80&auto=format&fit=crop"
                    alt="Reviewer 3"
                    className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">
                    {expertSolutionsData.floatingCard.reviews}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy, Perks, CTA & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-brandOrange text-xs font-bold uppercase tracking-wider mb-4">
              <span>{expertSolutionsData.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.15] mb-6">
              {expertSolutionsData.headlineFirst} <br />
              <span className="text-slate-600 font-normal">{expertSolutionsData.headlineSecond}</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-sans">
              {expertSolutionsData.description}
            </p>

            {/* 4 Checkmark Perks (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {expertSolutionsData.perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brandOrange shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenTrial?.()}
              className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 mb-12"
            >
              {expertSolutionsData.cta}
            </button>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-3 gap-6 w-full pt-8 border-t border-slate-100">
              {expertSolutionsData.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                    {m.value}
                  </span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
