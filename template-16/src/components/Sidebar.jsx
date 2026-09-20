import React from 'react';
import { 
  LayoutGrid, 
  Stethoscope, 
  User, 
  Calendar, 
  Building2, 
  FileBarChart, 
  Contact, 
  Settings, 
  Puzzle, 
  HelpCircle, 
  Search, 
  ChevronLeft,
  X
} from 'lucide-react';

export default function Sidebar({ 
  activeNav, 
  setActiveNav, 
  isOpenMobile, 
  onCloseMobile 
}) {
  const mainMenu = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'doctor', label: 'Doctor', icon: Stethoscope },
    { id: 'patient', label: 'Patient', icon: User },
    { id: 'appointment', label: 'Appointment', icon: Calendar },
    { id: 'departments', label: 'Departments', icon: Building2 },
  ];

  const recordMenu = [
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'contacts', label: 'Contacts', icon: Contact },
  ];

  const bottomMenu = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'integrations', label: 'Integrations', icon: Puzzle },
    { id: 'help', label: 'Help Center', icon: HelpCircle },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between py-6 px-4 bg-white select-none">
      <div>
        {/* Logo & Brand Header */}
        <div className="flex items-center justify-between pb-6 px-1 border-b border-gray-100">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            {/* Mediso Green Pill Glyph */}
            <div className="w-8 h-8 rounded-xl bg-[#1FA075] flex items-center justify-center text-white shadow-xs">
              <span className="font-extrabold text-base tracking-tighter">M</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-[#1FA075]">
              Mediso
            </span>
          </div>

          <button 
            type="button" 
            aria-label="Collapse navigation"
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-400">
            <div className="flex items-center gap-2.5">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-24 sm:w-28 text-xs text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            <kbd className="px-1.5 py-0.5 text-[11px] font-medium text-gray-400 bg-gray-50 border border-gray-200 rounded">
              ⌘ K
            </kbd>
          </div>
        </div>

        {/* Main Menu */}
        <div className="mt-6">
          <div className="text-[11px] font-medium text-gray-400 mb-2 px-2">
            Main Menu
          </div>
          <nav className="space-y-1">
            {mainMenu.map((item) => {
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
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left relative ${
                    isActive
                      ? 'bg-[#EBF8F2] text-[#1FA075] font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#1FA075] rounded-r-full" />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#1FA075]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Record Menu */}
        <div className="mt-6">
          <div className="text-[11px] font-medium text-gray-400 mb-2 px-2">
            Record
          </div>
          <nav className="space-y-1">
            {recordMenu.map((item) => {
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
                      ? 'bg-[#EBF8F2] text-[#1FA075] font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#1FA075]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="mt-6">
        <div className="text-[11px] font-medium text-gray-400 mb-2 px-2">
          Record
        </div>
        <nav className="space-y-1">
          {bottomMenu.map((item) => {
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
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors text-left ${
                  isActive
                    ? 'text-[#1FA075] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 text-gray-400" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-60 shrink-0 h-screen sticky top-0 border-r border-gray-200/80 bg-white">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-xs" 
            onClick={onCloseMobile} 
          />
          <div className="relative w-64 max-w-[80vw] h-full z-10 shadow-2xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
