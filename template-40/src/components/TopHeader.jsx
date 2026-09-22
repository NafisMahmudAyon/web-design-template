import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Share2, 
  Bell, 
  Menu,
  Check
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/kanbanData';

export default function TopHeader({ 
  onToggleSidebar, 
  onOpenNotifications, 
  notificationCount,
  activeProject = 'Product Launch 2026'
}) {
  const [isStarred, setIsStarred] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    setCopiedShare(true);
    navigator.clipboard?.writeText?.(window.location.href);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const currentUser = TEAM_MEMBERS[0];

  return (
    <header className="h-16 bg-white border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3 sm:gap-4">
        <button 
          onClick={onToggleSidebar}
          className="lg:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-1 text-slate-400">
          <button className="p-1.5 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Go back">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:text-slate-700 hover:bg-slate-100 rounded-md transition" title="Go forward">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs sm:text-sm">
          <span className="text-slate-400 font-normal">Projects</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
            {activeProject}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button 
          onClick={() => setIsStarred(!isStarred)}
          className={`p-2 rounded-xl transition ${
            isStarred 
              ? 'text-amber-500 bg-amber-50 hover:bg-amber-100' 
              : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
          }`}
          title={isStarred ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-500' : ''}`} />
        </button>

        <button 
          onClick={handleShare}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition relative"
          title="Share project link"
        >
          {copiedShare ? (
            <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in-50" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
        </button>

        <button 
          onClick={onOpenNotifications}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition relative"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          {notificationCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
              {notificationCount}
            </span>
          )}
        </button>

        <div className="relative pl-1 sm:pl-2">
          <button className="flex items-center gap-2 focus:outline-none">
            <div className="relative">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name} 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-100 shadow-xs" 
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
