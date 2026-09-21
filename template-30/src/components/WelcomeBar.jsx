import React from 'react';
import { Upload } from 'lucide-react';

export default function WelcomeBar({ openModal }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>Welcome, Oripio</span>
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          An overview of user behavior, trading activity, and crypto revenue analytics.
        </p>
      </div>

      <button
        onClick={() => openModal('export')}
        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-extrabold text-xs border border-slate-200/80 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] self-start sm:self-auto"
      >
        <Upload className="w-4 h-4 text-slate-500 dark:text-slate-300" />
        <span>Export Report</span>
      </button>
    </div>
  );
}
