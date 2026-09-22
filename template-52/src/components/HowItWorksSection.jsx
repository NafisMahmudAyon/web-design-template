import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LayoutTemplate, Megaphone, Calendar, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/pollinateData';

export const HowItWorksSection = ({ onGetStarted }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-white" />;
      case 'layout':
        return <LayoutTemplate className="w-5 h-5 text-white" />;
      case 'megaphone':
        return <Megaphone className="w-5 h-5 text-white" />;
      case 'calendar':
        return <Calendar className="w-5 h-5 text-white" />;
      default:
        return <BarChart3 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5520]" />
            <span className="text-[11px] font-bold text-slate-700">
              How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight max-w-xl leading-tight">
            Email signature marketing on autopilot
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg">
            All-in-one platform to collect, manage, and optimize payments securely and globally.
          </p>
        </div>

        <button
          onClick={onGetStarted}
          className="px-6 py-2.5 rounded-full bg-[#0B0F15] hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm self-start md:self-auto"
        >
          Get Started
        </button>
      </div>

      {/* 2x2 Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HOW_IT_WORKS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-8 rounded-3xl bg-[#F7F8FA] border border-slate-200/70 hover:border-slate-300 hover:shadow-pollinate transition-all duration-300 group"
          >
            {/* Orange Square Icon */}
            <div className="w-12 h-12 rounded-2xl bg-[#FF5520] flex items-center justify-center shadow-md shadow-[#FF5520]/20 mb-6 group-hover:scale-105 transition-transform">
              {getIcon(item.icon)}
            </div>

            <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-[#FF5520] transition-colors">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
