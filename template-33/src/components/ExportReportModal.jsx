import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExportReportModal({ isOpen, onClose }) {
  const [format, setFormat] = useState('PDF');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [isExporting, setIsExporting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen) return null;

  const handleExport = (e) => {
    e.preventDefault();
    setIsExporting(true);

    setTimeout(() => {
      setIsExporting(false);
      setIsComplete(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setIsComplete(false);
        onClose();
      }, 1200);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-black/5 text-[#141814]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#B4EE58]/30 flex items-center justify-center text-[#141814]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#141814]">Export Analytics Report</h3>
                <p className="text-xs text-gray-500">Generate executive revenue summary</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body / Form */}
          {isComplete ? (
            <div className="py-8 text-center flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 text-[#16A34A] animate-bounce mb-2" />
              <h4 className="text-base font-bold">Report Ready!</h4>
              <p className="text-xs text-gray-500 mt-1">Rexora_Analytics_Summary.pdf has downloaded.</p>
            </div>
          ) : (
            <form onSubmit={handleExport} className="mt-4 space-y-4 text-xs">
              {/* File Format Selection */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Export Format</label>
                <div className="grid grid-cols-3 gap-2">
                  {['PDF', 'CSV', 'Excel'].map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setFormat(fmt)}
                      className={`py-2 rounded-xl border font-bold text-center transition-all ${
                        format === fmt 
                          ? 'border-[#141814] bg-[#141814] text-white shadow-sm' 
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Range */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Reporting Timeframe</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#141814] text-xs text-[#141814]"
                >
                  <option value="Today">Today (Real-time)</option>
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 30 Days">Last 30 Days (Recommended)</option>
                  <option value="Year to Date">Year to Date 2026</option>
                </select>
              </div>

              {/* Included Sections */}
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Include Data Blocks</label>
                <div className="space-y-2 bg-[#F4F5F2] p-3 rounded-2xl">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded accent-[#141814]" />
                    <span>Total Profit & Monthly Channels (Shopify / Amazon)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded accent-[#141814]" />
                    <span>Top 10 Selling Products & Returns</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded accent-[#141814]" />
                    <span>Country Geographic Breakdown</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isExporting}
                  className="px-5 py-2 rounded-xl bg-[#141814] hover:bg-black text-white font-bold shadow-sm transition-colors flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  {isExporting ? 'Generating...' : `Export ${format}`}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
