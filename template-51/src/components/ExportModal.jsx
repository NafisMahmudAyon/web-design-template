import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileSpreadsheet, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export default function ExportModal({ isOpen, onClose }) {
  const [format, setFormat] = useState('csv');
  const [includeCustomerData, setIncludeCustomerData] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleExport = (e) => {
    e.preventDefault();
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-[#5E43F3] flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Export Sales Report
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {success ? (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                Report Exported!
              </h4>
              <p className="text-xs text-slate-500 max-w-xs">
                Your sales report in <span className="font-semibold uppercase">{format}</span> format has been compiled and downloaded.
              </p>
            </div>
          ) : (
            <form onSubmit={handleExport} className="mt-5 space-y-4">
              {/* Format selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">
                  Select Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'csv', label: 'CSV File', desc: 'Raw data' },
                    { id: 'excel', label: 'Excel (XLSX)', desc: 'Formatted sheets' },
                    { id: 'pdf', label: 'PDF Document', desc: 'Presentation' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormat(item.id)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        format === item.id
                          ? 'border-[#5E43F3] bg-indigo-50/60 text-[#5E43F3]'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle option */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-800">
                    Include Customer Details
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Names, email addresses, and shipping locations
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includeCustomerData}
                  onChange={(e) => setIncludeCustomerData(e.target.checked)}
                  className="rounded border-slate-300 text-[#5E43F3] focus:ring-[#5E43F3] w-4 h-4"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isExporting}
                  className="flex-1 py-2.5 rounded-full bg-[#5E43F3] hover:bg-[#5136E6] text-xs font-semibold text-white shadow-md shadow-[#5E43F3]/25 transition-all disabled:opacity-50"
                >
                  {isExporting ? 'Generating Report...' : 'Download Report'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
