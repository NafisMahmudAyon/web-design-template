import React from 'react';
import { X, FileText, DownloadCloud, CheckCircle2 } from 'lucide-react';

export default function ReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-7">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#1FA075] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Clinical Patient Report</h3>
            <p className="text-xs text-gray-500">Summary period: Jan 2024 - Oct 2024</p>
          </div>
        </div>

        {/* Report Preview */}
        <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-200/80 space-y-2 text-xs">
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Patient:</span>
            <span className="font-bold text-gray-900">Leslie Alexander (MRN #92041)</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Primary Diagnosis:</span>
            <span className="font-bold text-gray-900">Kidney Stones (Calculus of Kidney)</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">Blood Pressure Mean:</span>
            <span className="font-bold text-gray-900">132 / 45 mmHg</span>
          </div>
          <div className="flex justify-between py-1 border-b border-gray-200/60">
            <span className="text-gray-500">SpO2 Oxygen Saturation:</span>
            <span className="font-bold text-gray-900">98% (Stable)</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-500">Scheduled Procedure:</span>
            <span className="font-bold text-[#1FA075]">Extracorporeal Shock Wave Lithotripsy</span>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 bg-[#1FA075] hover:bg-[#188560] text-white rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-2"
          >
            <DownloadCloud className="w-4 h-4" />
            <span>Download PDF Report</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
