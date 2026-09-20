import React from 'react';
import { User, Calendar, FileText } from 'lucide-react';

export default function AboutPatientCard() {
  return (
    <div className="mediso-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
            <User className="w-4 h-4" />
          </div>
          <h2 className="text-sm font-bold text-gray-900">About Patient</h2>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 shadow-2xs"
        >
          <Calendar className="w-3.5 h-3.5 text-gray-400" />
          <span>Monthly</span>
        </button>
      </div>

      {/* Grid of Details */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
        {/* Patient Complaint */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Patient Complaint</span>
            <span className="text-xs font-bold text-gray-900 mt-0.5 block">
              Pain in Abdominal region
            </span>
          </div>
        </div>

        {/* Flore/Ward */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Flore/Ward</span>
            <span className="text-xs font-bold text-gray-900 mt-0.5 block">
              Floor 32, Ward 11
            </span>
          </div>
        </div>

        {/* Admission Date */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Admission Date</span>
            <span className="text-xs font-bold text-gray-900 mt-0.5 block">
              24/10/2023
            </span>
          </div>
        </div>

        {/* Potential Release Date */}
        <div className="flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Potential release date</span>
            <span className="text-xs font-bold text-gray-900 mt-0.5 block">
              Unknown
            </span>
          </div>
        </div>

        {/* Doctor's Diagnosis */}
        <div className="flex items-start gap-2.5 sm:col-span-2">
          <div className="p-1.5 rounded-lg bg-gray-50 text-gray-400 shrink-0 mt-0.5">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Doctor's Diagnosis</span>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <span className="text-xs font-bold text-gray-900">Kidney stones</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-[#1FA075] border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1FA075]" />
                Requires Surgery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
