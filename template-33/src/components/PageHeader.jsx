import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

export default function PageHeader({ onExportClick }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#141814] tracking-tight">
          Welcome, Sajibur👋
        </h1>
        <p className="text-xs sm:text-sm text-[#6C736A] mt-1 font-medium">
          An overview of customer insights, sales performance, and revenue analytics.
        </p>
      </div>

      {/* Export Report Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onExportClick}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/[0.06] text-xs font-bold text-[#141814] shadow-sm hover:bg-gray-50 transition-all focus:outline-none self-start sm:self-auto"
      >
        <Upload className="w-3.5 h-3.5 stroke-[2.2] text-[#141814]" />
        <span>Export Report</span>
      </motion.button>

    </div>
  );
}
