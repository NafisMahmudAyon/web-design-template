import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmployeeSpotlight({ employee }) {
  const [activeTags, setActiveTags] = useState(['User Experience', 'Design System']);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="w-full lg:w-72 xl:w-80 flex flex-col gap-3.5 shrink-0 select-none">
      {/* 1. Main Spotlight Profile Card */}
      <motion.div
        key={employee.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-[#12131a] rounded-[32px] p-3 border border-[#1f212c] shadow-lg flex flex-col justify-between overflow-hidden group"
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-3 px-1">
          {/* Online status */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181a23] border border-[#232635] text-[10px] font-semibold text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{employee.online ? 'ONLINE' : 'OFFLINE'}</span>
          </div>

          {/* Years of work */}
          <div className="px-2.5 py-1 rounded-full bg-[#181a23] border border-[#232635] text-[10px] font-medium text-[#7d8095]">
            {employee.experience}
          </div>
        </div>

        {/* Portrait Image Container */}
        <div className="w-full h-56 rounded-2xl overflow-hidden relative bg-[#0b0c10] border border-[#1d1f2b]">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Bottom Profile Name & Title */}
        <div className="flex items-center justify-between pt-3 px-1">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight leading-snug">
              {employee.name}
            </h3>
            <p className="text-xs text-[#74778b] mt-0.5">{employee.role}</p>
          </div>

          <button
            type="button"
            aria-label="View full portfolio"
            className="w-8 h-8 rounded-full bg-[#1b1d28] hover:bg-[#252838] border border-[#252838] text-gray-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 2. Mini Metrics (Days in company & Done projects) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Days in Company */}
        <div className="bg-[#12131a] rounded-[24px] p-4 border border-[#1f212c] shadow-sm">
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {employee.daysInCompany}
          </p>
          <p className="text-xs text-[#74778b] mt-1 font-medium">Days in company</p>
        </div>

        {/* Done Projects */}
        <div className="bg-[#12131a] rounded-[24px] p-4 border border-[#1f212c] shadow-sm">
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {employee.doneProjects}
          </p>
          <p className="text-xs text-[#74778b] mt-1 font-medium">Done projects</p>
        </div>
      </div>

      {/* 3. Skill & Competency Tag Cloud */}
      <div className="bg-[#12131a] rounded-[28px] p-4 border border-[#1f212c] shadow-sm relative">
        {/* Expand Arrow Button */}
        <button
          type="button"
          aria-label="Expand skills"
          className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-[#181a24] hover:bg-[#212433] text-[#74778b] hover:text-white flex items-center justify-center transition-colors"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Cloud Tags */}
        <div className="flex flex-wrap gap-2 pt-4 pb-2 pr-6">
          {employee.skills.map((skill) => {
            const isSelected = activeTags.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleTag(skill)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-150 border ${
                  isSelected
                    ? 'bg-[#1e202d] text-white border-[#3b3e52] shadow-sm scale-105'
                    : 'bg-[#151620] text-[#7f8399] hover:text-gray-200 border-[#222432]'
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>

        {/* Bottom Bronze Dot Accent */}
        <div className="flex justify-center pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9c7a5c]"></span>
        </div>
      </div>
    </div>
  );
}
