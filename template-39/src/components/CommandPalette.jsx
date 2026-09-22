import React, { useState, useEffect } from 'react';
import { Search, X, Plus, Columns3, ListFilter, CalendarDays, ArrowRight, Asterisk } from 'lucide-react';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  tasks, 
  onSelectTask, 
  onCreateTask, 
  onChangeView 
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredTasks = tasks.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search tasks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1">
          <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Quick Actions
          </div>

          <button
            onClick={() => {
              onCreateTask();
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-blue-600" />
              <span>Create New Task</span>
            </div>
            <span className="text-[10px] text-slate-400">Action</span>
          </button>

          <button
            onClick={() => {
              onChangeView('kanban');
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            <div className="flex items-center gap-2">
              <Columns3 className="w-4 h-4 text-slate-500" />
              <span>Switch to Kanban View</span>
            </div>
            <span className="text-[10px] text-slate-400">View</span>
          </button>

          <button
            onClick={() => {
              onChangeView('calendar');
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
          >
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-slate-500" />
              <span>Switch to Calendar View</span>
            </div>
            <span className="text-[10px] text-slate-400">View</span>
          </button>

          {/* Filtered Tasks */}
          {filteredTasks.length > 0 && (
            <>
              <div className="px-3 pt-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Matching Tasks
              </div>
              {filteredTasks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTask(t);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-700 hover:bg-slate-50 transition text-left"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Asterisk className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="truncate font-medium">{t.title}</span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
