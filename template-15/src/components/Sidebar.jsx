import React from 'react';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Wallet, 
  TrendingUp, 
  FileText, 
  Layers, 
  CreditCard, 
  Headphones, 
  Settings, 
  LogOut, 
  Search, 
  ChevronsUpDown, 
  Sidebar as SidebarIcon,
  X
} from 'lucide-react';

export default function Sidebar({ 
  activeNav, 
  setActiveNav, 
  onOpenSearch, 
  onOpenSupport,
  isOpenMobile,
  onCloseMobile 
}) {
  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'spending', label: 'Spending', icon: Wallet },
    { id: 'investment', label: 'Investment', icon: TrendingUp },
  ];

  const managementsNav = [
    { id: 'financial-planning', label: 'Financial Planning', icon: FileText },
    { id: 'management', label: 'Management', icon: Layers, badge: 'New' },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between py-6 px-4 bg-white select-none">
      {/* Brand & Organization */}
      <div>
        <div className="flex items-center justify-between pb-6 px-1 border-b border-gray-100">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* WealthWise Teal Logo Glyph */}
            <div className="w-10 h-10 rounded-xl bg-[#186F65] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l4 10 4-7 4 7 4-10" />
                <circle cx="12" cy="5" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-gray-900">WealthWise</span>
              <ChevronsUpDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>
          <button 
            type="button" 
            aria-label="Toggle sidebar layout"
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <SidebarIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Search */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2.5 bg-gray-50/80 hover:bg-gray-100/80 border border-gray-200/70 rounded-xl text-sm text-gray-400 transition-all hover:border-gray-300"
          >
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500 font-normal">Search</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[11px] font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-2xs">
              ⌘ +K
            </kbd>
          </button>
        </div>

        {/* Main Menu */}
        <div className="mt-6">
          <div className="text-[11px] font-medium text-gray-400 tracking-wider mb-2.5 px-2">
            Main menu
          </div>
          <nav className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-white text-gray-900 shadow-xs border border-gray-200/80 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Managements */}
        <div className="mt-7">
          <div className="text-[11px] font-medium text-gray-400 tracking-wider mb-2.5 px-2">
            Managements
          </div>
          <nav className="space-y-1">
            {managementsNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveNav(item.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    isActive
                      ? 'bg-white text-gray-900 shadow-xs border border-gray-200/80 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gray-900' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold text-white bg-[#186F65] rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom section: Need support card + Settings & Logout */}
      <div className="mt-6 space-y-4">
        {/* Need support floating card */}
        <div className="relative p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-emerald-50/30 border border-gray-200/70">
          <button 
            type="button" 
            aria-label="Dismiss support card"
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <Headphones className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-800">Need support</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-3.5">
            Contact with one of our expert to get support.
          </p>
          <button
            type="button"
            onClick={onOpenSupport}
            className="w-full py-2 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98]"
          >
            Cal the expert
          </button>
        </div>

        {/* Footer Nav */}
        <div className="pt-2 border-t border-gray-100 space-y-1">
          <button
            type="button"
            onClick={() => setActiveNav('settings')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Settings className="w-4 h-4 text-gray-400" />
            <span>Settings</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveNav('logout')}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-rose-600 transition-colors"
          >
            <LogOut className="w-4 h-4 text-gray-400" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 h-screen sticky top-0 border-r border-gray-200/80 bg-white">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-opacity" 
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-[80vw] h-full z-10 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
