import React, { useState } from 'react';
import { X, FileText, Download, Check } from 'lucide-react';

export default function ExportReportModal({ isOpen, onClose }) {
  const [format, setFormat] = useState('PDF');
  const [dateRange, setDateRange] = useState('30D');
  const [isExporting, setIsExporting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Export Analytics Report</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDone ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Report Generated!</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Your {format} report for the last {dateRange} has been compiled and downloaded.
            </p>
          </div>
        ) : (
          <div className="space-y-4 mt-4">
            
            {/* Format Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Report Format
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['PDF', 'CSV', 'EXCEL'].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormat(fmt)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      format === fmt
                        ? 'bg-[#E65D24] text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                Time Period
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['7D', '30D', '90D', '1Y'].map((rng) => (
                  <button
                    key={rng}
                    onClick={() => setDateRange(rng)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      dateRange === rng
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {rng}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              onClick={handleExport}
              disabled={isExporting}
              className="w-full py-3 bg-[#E65D24] hover:bg-[#CE4E1A] text-white font-bold text-sm rounded-xl shadow-md shadow-[#E65D24]/30 transition-all flex items-center justify-center gap-2"
            >
              {isExporting ? (
                <>
                  <Download className="w-4 h-4 animate-bounce" />
                  <span>Compiling PDF Report...</span>
                </>
              ) : (
                <span>Download Report</span>
              )}
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
