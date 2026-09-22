import React from 'react';
import { 
  Plus, 
  CalendarCheck, 
  Flag, 
  Paperclip, 
  MessageSquare, 
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  SunMedium,
  AlertCircle
} from 'lucide-react';
import { TEAM_MEMBERS, STATUS_GROUPS } from '../data/workspaceData';

export default function TaskKanbanView({ 
  tasks, 
  onSelectTask, 
  onCreateTaskWithStatus, 
  onMoveTaskStatus 
}) {
  const getAssignee = (id) => TEAM_MEMBERS.find(m => m.id === id);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-50 text-red-600 border border-red-100';
      case 'Medium':
        return 'bg-amber-50 text-amber-600 border border-amber-100';
      case 'Low':
      default:
        return 'bg-blue-50 text-blue-600 border border-blue-100';
    }
  };

  const getGroupIcon = (iconName) => {
    switch (iconName) {
      case 'target':
        return <Target className="w-4 h-4 text-blue-600" />;
      case 'sun':
        return <SunMedium className="w-4 h-4 text-amber-500" />;
      case 'alert':
        return <AlertCircle className="w-4 h-4 text-rose-500" />;
      case 'check':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      default:
        return null;
    }
  };

  const nextStatusMap = {
    todo: 'process',
    process: 'review',
    review: 'completed',
    completed: 'todo',
  };

  const prevStatusMap = {
    todo: 'completed',
    process: 'todo',
    review: 'process',
    completed: 'review',
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 pb-16">
      {STATUS_GROUPS.map((group) => {
        const columnTasks = tasks.filter(t => t.status === group.id);

        return (
          <div 
            key={group.id} 
            className="flex flex-col bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3 min-h-[500px]"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between pb-3 px-1 border-b border-slate-200/60 mb-3">
              <div className="flex items-center gap-2">
                {getGroupIcon(group.icon)}
                <span className="text-xs font-bold text-slate-900">{group.title}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${group.badgeClass}`}>
                  {columnTasks.length}
                </span>
              </div>

              <button
                onClick={() => onCreateTaskWithStatus(group.id)}
                className="p-1 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition shadow-2xs"
                title={`Add task to ${group.title}`}
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Task Card Stack */}
            <div className="space-y-2.5 flex-1">
              {columnTasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onSelectTask(task)}
                  className="bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs hover:shadow-sm hover:border-slate-300 transition cursor-pointer group"
                >
                  {/* Priority & Move buttons */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold ${getPriorityStyle(task.priority)}`}>
                      <Flag className="w-2.5 h-2.5" />
                      {task.priority}
                    </span>

                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => onMoveTaskStatus(task.id, prevStatusMap[task.status])}
                        title="Move to previous column"
                        className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded"
                      >
                        <ArrowLeft className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onMoveTaskStatus(task.id, nextStatusMap[task.status])}
                        title="Move to next column"
                        className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded"
                      >
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Task Title */}
                  <h4 className="text-xs font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition line-clamp-2">
                    {task.title}
                  </h4>

                  {/* Description snippet */}
                  <p className="text-[11px] text-slate-500 mb-3 line-clamp-2">
                    {task.description}
                  </p>

                  {/* Card Bottom Meta */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                    <div className="flex items-center gap-1">
                      <CalendarCheck className="w-3 h-3 text-slate-400" />
                      <span>{task.dueDate}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <Paperclip className="w-3 h-3" />
                        <span>{task.attach}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <MessageSquare className="w-3 h-3" />
                        <span>{task.chat}</span>
                      </div>
                      <div className="flex items-center -space-x-1 pl-1">
                        {task.assignees.map((id, idx) => {
                          const m = getAssignee(id);
                          if (!m) return null;
                          return (
                            <img
                              key={idx}
                              src={m.avatar}
                              alt={m.name}
                              className="w-4 h-4 rounded-full ring-1 ring-white object-cover"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
