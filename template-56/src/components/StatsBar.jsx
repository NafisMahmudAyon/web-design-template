import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe2, Award } from 'lucide-react';
import { statsData } from '../data/wanderlustData';

export const StatsBar = () => {
  const icons = [
    <Users className="w-5 h-5 text-brandAmber" />,
    <Globe2 className="w-5 h-5 text-emerald-400" />,
    <TrendingUp className="w-5 h-5 text-emerald-300" />,
    <Award className="w-5 h-5 text-brandAmber" />
  ];

  return (
    <section className="py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-brandForest border border-emerald-500/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brandEmerald/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brandAmber/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/40">
            {statsData.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-3 shadow-inner">
                  {icons[idx]}
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight flex items-center gap-1">
                  {stat.value.startsWith('^') ? (
                    <>
                      <TrendingUp className="w-6 h-6 text-emerald-400 inline" />
                      <span>{stat.value.replace('^', '')}</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-emerald-200/70 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
