import React, { useState } from 'react';
import { FileText, DownloadCloud, Check } from 'lucide-react';

export default function MedicalReportsCard() {
  const [showInactive, setShowInactive] = useState(true);
  const [downloadedId, setDownloadedId] = useState(null);

  const reports = [
    { id: 1, title: 'Design brief. pdf', size: '1.5 MB' },
    { id: 2, title: 'Design brief. pdf', size: '1.5 MB' },
  ];

  const handleDownload = (id) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2000);
  };

  return (
    <div className="space-y-3">
      {/* Header with Switch */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-bold text-gray-900">Medical Reports</h2>

        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span>Show Inactive</span>
          <button
            type="button"
            role="switch"
            aria-checked={showInactive}
            onClick={() => setShowInactive(!showInactive)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
              showInactive ? 'bg-[#1FA075]' : 'bg-gray-200'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transition-transform ${
                showInactive ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="mediso-card p-3.5 flex items-center justify-between group hover:border-[#1FA075]/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              {/* PDF Icon */}
              <div className="w-10 h-10 rounded-xl bg-white border border-[#1FA075] flex items-center justify-center text-[#1FA075] shadow-2xs group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#1FA075] transition-colors">
                  {report.title}
                </h3>
                <span className="text-[11px] font-medium text-gray-400">
                  {report.size}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleDownload(report.id)}
              aria-label={`Download ${report.title}`}
              className="p-2 text-gray-400 hover:text-[#1FA075] hover:bg-emerald-50 rounded-xl transition-colors"
            >
              {downloadedId === report.id ? (
                <Check className="w-4 h-4 text-[#1FA075]" />
              ) : (
                <DownloadCloud className="w-4 h-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
