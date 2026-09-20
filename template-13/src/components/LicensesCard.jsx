import React, { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LicensesCard({ doctor }) {
  const [showInactive, setShowInactive] = useState(false);

  const licenses = doctor?.licenses || [
    { id: '#068455 2008 2024', region: 'Maryland', active: true },
    { id: '#563655 8455 2026', region: 'Australia', active: true },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
      {/* Header with Show Inactive Toggle */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-900 font-display">
          Licenses
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">
            Show Inactive
          </span>
          <button
            onClick={() => setShowInactive(!showInactive)}
            className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none flex items-center ${
              showInactive ? 'bg-emerald-500' : 'bg-slate-200'
            }`}
          >
            <motion.div
              layout
              className="w-4 h-4 rounded-full bg-white shadow-xs"
              animate={{ x: showInactive ? 16 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      {/* Licenses List */}
      <div className="space-y-3">
        {licenses.map((lic, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-colors"
          >
            <div>
              <h4 className="text-xs font-bold text-slate-900 tracking-tight">
                {lic.id}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                {lic.region}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                Active
              </span>
              <button
                className="w-7 h-7 rounded-lg border border-slate-200/60 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 hover:border-slate-300 transition-colors shadow-2xs"
                title="Download or view certificate"
              >
                <Download size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
