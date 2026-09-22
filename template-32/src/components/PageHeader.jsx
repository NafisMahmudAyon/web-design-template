import React from 'react';
import { Building2 } from 'lucide-react';

export default function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
      {/* Title & Description */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#181D17] tracking-tight">
          Today's Nursing
        </h1>
        <p className="text-xs sm:text-sm text-[#6C7568] mt-1.5 font-normal max-w-xl leading-relaxed">
          Manage patient care, medications, vital checks, and shift tasks from one place.
        </p>
      </div>

      {/* Facility & Date Info */}
      <div className="flex flex-col md:items-end text-left md:text-right">
        <div className="flex items-center md:justify-end gap-1.5 text-xs sm:text-sm font-semibold text-[#181D17]">
          <Building2 className="w-4 h-4 text-[#52734D]" />
          <span>St. Mary's Medical Center</span>
        </div>
        <p className="text-[11px] sm:text-xs text-[#7A8376] mt-0.5 font-medium">
          Thursday, 18 December 2026
        </p>
      </div>
    </div>
  );
}
