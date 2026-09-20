import React from 'react';
import { Calendar, UploadCloud, FileText } from 'lucide-react';

export default function ActionBar({ onExportCSV, onGenerateReport }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      {/* Date Pill */}
      <div className="flex items-center gap-2 px-3.5 py-2 bg-white border border-gray-200/80 rounded-xl text-xs font-medium text-gray-700 shadow-2xs">
        <Calendar className="w-3.5 h-3.5 text-gray-500" />
        <span>Last Update: Jan 2024-Oct 2024</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onExportCSV}
          className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs transition-all active:scale-[0.98]"
        >
          <UploadCloud className="w-3.5 h-3.5 text-gray-500" />
          <span>Export to CSV</span>
        </button>

        <button
          type="button"
          onClick={onGenerateReport}
          className="flex items-center gap-2 px-4 py-2 bg-[#1FA075] hover:bg-[#188560] text-white rounded-xl text-xs font-semibold shadow-xs transition-all active:scale-[0.98]"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Generate Report</span>
        </button>
      </div>
    </div>
  );
}
