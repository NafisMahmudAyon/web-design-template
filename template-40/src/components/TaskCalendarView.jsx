import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export default function TaskCalendarView({ tasks, onSelectTask }) {
  const [currentMonth] = useState('December 2026');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const paddingDays = [null, null]; // Dec 1, 2026 starts on Tuesday
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const calendarCells = [...paddingDays, ...daysInMonth];

  const getTasksForDay = (day) => {
    if (!day) return [];
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const pattern = `${formattedDay} Dec 2026`;
    return tasks.filter(t => t.dueDate === pattern || t.due.includes(`${day} Dec`));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'todo': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'process': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'review': return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="pt-4 pb-16">
      <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900">{currentMonth}</h3>
          </div>

          <div className="flex items-center gap-1.5">
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/70 text-center py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {daysOfWeek.map((day, idx) => (
            <div key={idx}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 min-h-[500px]">
          {calendarCells.map((day, idx) => {
            if (day === null) {
              return <div key={idx} className="bg-slate-50/30 p-2 min-h-[90px]" />;
            }

            const dayTasks = getTasksForDay(day);

            return (
              <div 
                key={idx} 
                className="p-2 min-h-[90px] flex flex-col justify-between hover:bg-slate-50/50 transition group"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold ${day === 8 ? 'w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold' : 'text-slate-700'}`}>
                    {day}
                  </span>
                  {dayTasks.length > 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  )}
                </div>

                <div className="space-y-1 mt-1 flex-1">
                  {dayTasks.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => onSelectTask(t)}
                      className={`w-full text-left px-1.5 py-0.5 rounded border text-[10px] font-medium truncate block ${getStatusColor(t.status)}`}
                    >
                      {t.title}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
