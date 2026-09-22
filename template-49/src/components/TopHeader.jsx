import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  HelpCircle, 
  Mail, 
  Bell, 
  ChevronDown, 
  Share2 
} from 'lucide-react';
import { USER_PROFILE } from '../data/oripioFinData';

export const TopHeader = ({ onShare, onOpenNotifications }) => {
  return (
    <header className="h-20 px-8 bg-white border-b border-slate-200/80 flex items-center justify-between shrink-0">
      
      {/* Left Breadcrumb & Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <button
            aria-label="Back"
            className="w-8 h-8 rounded-lg border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button
            aria-label="Forward"
            className="w-8 h-8 rounded-lg border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium ml-2">
          <span>OripioFin</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Dashboard</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Help */}
        <button
          aria-label="Help"
          className="w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Messages */}
        <button
          aria-label="Messages"
          className="w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
        >
          <Mail className="w-4 h-4" />
        </button>

        {/* Notifications */}
        <button
          onClick={onOpenNotifications}
          aria-label="Notifications"
          className="w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-50 relative transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-emerald-600 absolute top-2 right-2 border-2 border-white" />
        </button>

        {/* User Profile Dropdown */}
        <div className="flex items-center gap-2 pl-2 cursor-pointer group">
          <img
            src={USER_PROFILE.avatar}
            alt={USER_PROFILE.name}
            className="w-9 h-9 rounded-xl object-cover border border-slate-200"
          />
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
        </div>

        {/* Share Button */}
        <button
          onClick={onShare}
          className="ml-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          <span>Share</span>
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>

    </header>
  );
};
