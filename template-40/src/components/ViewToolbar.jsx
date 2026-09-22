import React, { useState } from 'react';
import { 
  Columns3, 
  ListFilter, 
  CalendarDays, 
  Search, 
  SlidersHorizontal, 
  Plus,
  Check
} from 'lucide-react';

export default function ViewToolbar({ 
  currentView, 
  setCurrentView, 
  searchQuery, 
  setSearchQuery, 
  priorityFilter, 
  setPriorityFilter, 
  onCreateTask,
  onOpenCommandPalette 
}) {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const views = [
    { id: 'kanban', label: 'Kanban View', icon: Columns3 },
    { id: 'list', label: 'List View', icon: ListFilter },
    { id: 'calendar', label: 'Calendar View', icon: CalendarDays },
  ];

  const priorities = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 pb-4 border-b border-slate-200/80">
      {/* View Switchers */}
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {views.map((v) => {
          const Icon = v.icon;
          const isActive = currentView === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setCurrentView(v.id)}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition whitespace-nowrap
                ${isActive 
                  ? 'bg-slate-100 text-slate-900 shadow-2xs border-b-2 border-blue-600 rounded-b-none' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }
              `}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>{v.label}</span>
            </button>
          );
        })}
      </div>

      {/* Controls: Search, Filter, Create Task */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap">
        <div className="relative flex-1 sm:w-60 md:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-14 py-1.5 bg-white border border-slate-200/90 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          />
          <button
            onClick={onOpenCommandPalette}
            title="Open Command Palette (⌘ K)"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition"
          >
            ⌘ K
          </button>
        </div>

        {/* Filter Popover */}
        <div className="relative">
          <button
            onClick={() => setFilterMenuOpen(!filterMenuOpen)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition
              ${priorityFilter !== 'All' 
                ? 'bg-blue-50 border-blue-200 text-blue-700' 
                : 'bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50'
              }
            `}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
            <span>Filter</span>
            {priorityFilter !== 'All' && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5" />
            )}
          </button>

          {filterMenuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-40 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Filter by Priority
              </div>
              {priorities.map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPriorityFilter(p);
                    setFilterMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition text-left"
                >
                  <span>{p} Priority</span>
                  {priorityFilter === p && (
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Create Task Button */}
        <button
          onClick={onCreateTask}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-xs font-semibold shadow-xs transition duration-150 flex-shrink-0"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Create Task</span>
        </button>
      </div>
    </div>
  );
}
