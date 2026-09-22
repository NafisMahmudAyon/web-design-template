import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, BarChart2, FileText, GitMerge, Layout, Shield } from 'lucide-react';
import { platformFeatures } from '../data/contentData';

export default function PlatformGrid() {
  const getIcon = (type) => {
    switch (type) {
      case 'credit-card':
        return <CreditCard className="w-5 h-5 text-[#141814]" />;
      case 'bar-chart-2':
        return <BarChart2 className="w-5 h-5 text-[#141814]" />;
      case 'file-text':
        return <FileText className="w-5 h-5 text-[#141814]" />;
      case 'git-merge':
        return <GitMerge className="w-5 h-5 text-[#141814]" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-[#141814]" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-[#141814]" />;
      default:
        return <CreditCard className="w-5 h-5 text-[#141814]" />;
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-100 text-xs font-bold text-[#141814] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            <span>Smarter Financial Control</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141814] tracking-tight">
            One Platform. Total Financial Visibility.
          </h2>
          <p className="text-sm text-[#6C736A] mt-3 font-medium">
            See your numbers clearly, automate daily tasks, and stay in control as you scale.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeatures.map((f, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-7 rounded-3xl bg-[#F8F9F7] border border-black/[0.04] hover:bg-[#F3F5F1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-5">
                  {getIcon(f.icon)}
                </div>
                <h3 className="text-base font-bold text-[#141814] mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-[#6C736A] leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
