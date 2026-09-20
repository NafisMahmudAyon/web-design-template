import React from 'react';
import { User, Calendar, ChevronDown, FileText, Award, Globe } from 'lucide-react';

export default function AboutDoctorCard({ doctor }) {
  if (!doctor) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <User size={16} />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-display">
            About Doctor
          </h3>
        </div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200/80 bg-slate-50/70 text-xs font-medium text-slate-600 hover:bg-slate-100 transition-colors">
          <Calendar size={13} className="text-slate-400" />
          <span>Monthly</span>
          <ChevronDown size={13} className="text-slate-400" />
        </button>
      </div>

      {/* Description */}
      <div className="mb-5">
        <h5 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Description
        </h5>
        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          {doctor.bio}
        </p>
      </div>

      {/* 3 Metric Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* NPI Box */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 shadow-2xs flex-shrink-0">
            <FileText size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[10px] font-medium text-slate-400">
              NPI
            </span>
            <span className="text-xs font-bold text-slate-900 truncate block">
              {doctor.npi}
            </span>
          </div>
        </div>

        {/* Primary Specialist Box */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 shadow-2xs flex-shrink-0">
            <Award size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[10px] font-medium text-slate-400">
              Primary Specialist
            </span>
            <span className="text-xs font-bold text-slate-900 truncate block">
              {doctor.primarySpecialist}
            </span>
          </div>
        </div>

        {/* Language Speaks Box */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 shadow-2xs flex-shrink-0">
            <Globe size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[10px] font-medium text-slate-400">
              Language Speaks
            </span>
            <span className="text-xs font-bold text-slate-900 truncate block">
              {doctor.languages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
