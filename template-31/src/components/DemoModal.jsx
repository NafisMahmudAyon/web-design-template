import React from 'react';
import { X, Play } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-700 relative">
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h3 className="text-sm font-bold text-white">Finvesto Product Tour Demo</h3>
          <button onClick={onClose} className="p-1.5 rounded-xl text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="aspect-video bg-slate-950 flex flex-col items-center justify-center relative p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#635BFF] text-white flex items-center justify-center shadow-xl shadow-[#635BFF]/40 animate-pulse">
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </div>
          <h4 className="text-xl font-bold text-white">Finvesto Platform Walkthrough</h4>
          <p className="text-xs text-slate-400 max-w-md">
            Watch how global payment gateways, bank integrations, and automated goal tracking streamline your financial workflows in under 3 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
