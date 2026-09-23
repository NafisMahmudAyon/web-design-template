import React from 'react';
import { Activity, MessageSquare, Sliders, Eye, RotateCw, BookOpen, MoreHorizontal } from 'lucide-react';
import { PROGRESS_TASKS } from '../data/drankData';

export default function ProgressCard() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-3.5 h-3.5 text-gray-300" />;
      case 'MessageSquare':
        return <MessageSquare className="w-3.5 h-3.5 text-gray-300" />;
      case 'Sliders':
        return <Sliders className="w-3.5 h-3.5 text-gray-300" />;
      case 'Eye':
        return <Eye className="w-3.5 h-3.5 text-gray-300" />;
      case 'RotateCw':
        return <RotateCw className="w-3.5 h-3.5 text-gray-300" />;
      case 'BookOpen':
      default:
        return <BookOpen className="w-3.5 h-3.5 text-gray-300" />;
    }
  };

  return (
    <div className="bg-[#12131a] rounded-[32px] p-5 border border-[#1f212c] shadow-lg flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white tracking-wide">Progress</h3>
        <button
          type="button"
          aria-label="Progress options"
          className="w-7 h-7 rounded-full hover:bg-[#1a1c27] text-[#6d7085] hover:text-white flex items-center justify-center transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-3">
        {PROGRESS_TASKS.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-1.5 rounded-xl hover:bg-[#181923] transition-colors group cursor-pointer"
          >
            {/* Left: Icon & Title/Hours */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#1a1c26] border border-[#242636] flex items-center justify-center group-hover:scale-105 transition-transform">
                {getIcon(task.icon)}
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">
                  {task.name}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-[#717489] mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-[#52556a]"></span>
                  <span>{task.hours} hours</span>
                </div>
              </div>
            </div>

            {/* Right: Earning Value */}
            <div className="text-right">
              <span className="text-xs font-bold text-[#7ae2a4] tracking-tight">
                +${task.amount}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
