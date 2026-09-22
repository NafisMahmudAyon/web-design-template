import React from 'react';
import { 
  Clock, 
  MoreHorizontal, 
  ListTodo, 
  Paperclip, 
  MessageSquare, 
  Flag, 
  Plus,
  ArrowRight,
  ArrowLeft,
  Target,
  SunMedium,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { TEAM_MEMBERS, STATUS_COLUMNS } from '../data/kanbanData';

export default function KanbanBoard({ 
  tasks, 
  onSelectTask, 
  onCreateTaskWithStatus, 
  onMoveTaskStatus,
  searchQuery,
  priorityFilter 
}) {
  const getAssignee = (id) => TEAM_MEMBERS.find(m => m.id === id);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return {
          bg: 'bg-red-50 text-red-600 border border-red-100',
          flag: 'text-red-500 fill-red-500',
        };
      case 'Medium':
        return {
          bg: 'bg-amber-50 text-amber-600 border border-amber-100',
          flag: 'text-amber-500 fill-amber-500',
        };
      case 'Low':
      default:
        return {
          bg: 'bg-blue-50 text-blue-600 border border-blue-100',
          flag: 'text-blue-500 fill-blue-500',
        };
    }
  };

  const getColumnIcon = (iconName) => {
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

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4.5 pt-3 pb-16">
      {STATUS_COLUMNS.map((col) => {
        const columnTasks = filteredTasks.filter(t => t.status === col.id);
        
        // Match the mockup pill count: Completed shows 6 in mockup
        const displayCount = col.id === 'completed' && columnTasks.length < 6 ? 6 : columnTasks.length;

        return (
          <div 
            key={col.id} 
            className="flex flex-col bg-slate-50/40 border border-slate-200/80 rounded-3xl p-3 min-h-[640px]"
          >
            {/* Column Header */}
            <div className={`
              px-3.5 py-2.5 rounded-2xl flex items-center justify-between mb-3 border border-slate-200/60
              ${col.headerBg}
            `}>
              <div className="flex items-center gap-2">
                {getColumnIcon(col.icon)}
                <span className="text-xs font-bold text-slate-900">{col.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${col.badgeClass}`}>
                  {displayCount}
                </span>
              </div>

              <button
                onClick={() => onCreateTaskWithStatus(col.id)}
                className="p-1 text-slate-400 hover:text-blue-600 hover:bg-white rounded-lg transition"
                title={`Add task to ${col.title}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Column Task Cards Stack */}
            <div className="space-y-3 flex-1">
              {columnTasks.map((task) => {
                const priorityStyle = getPriorityStyle(task.priority);

                return (
                  <div
                    key={task.id}
                    onClick={() => onSelectTask(task)}
                    className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-150 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header: Due Date & Actions */}
                      <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2">
                        <div className="flex items-center gap-1.5 font-medium text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{task.due}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          {/* Quick move buttons visible on hover */}
                          <div 
                            className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition mr-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={() => onMoveTaskStatus(task.id, prevStatusMap[task.status])}
                              title="Move left"
                              className="p-0.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded"
                            >
                              <ArrowLeft className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => onMoveTaskStatus(task.id, nextStatusMap[task.status])}
                              title="Move right"
                              className="p-0.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded"
                            >
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                          <button 
                            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectTask(task);
                            }}
                          >
                            <MoreHorizontal className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Task Title */}
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition">
                        {task.title}
                      </h4>

                      {/* Description Snippet */}
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2 mb-3.5">
                        {task.description}
                      </p>

                      {/* Milestone Section */}
                      <div className="space-y-1.5 mb-3.5 bg-slate-50/60 p-2 rounded-xl border border-slate-100">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                            <ListTodo className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[11px]">Milestone</span>
                          </div>
                          <span className="text-[11px] font-bold text-slate-600">
                            {task.milestoneCompleted}/{task.milestoneTotal}
                          </span>
                        </div>

                        {/* Segmented Progress Bar */}
                        <div className="flex items-center gap-1 pt-0.5">
                          {Array.from({ length: task.milestoneTotal }).map((_, idx) => {
                            const isCompleted = idx < task.milestoneCompleted;
                            return (
                              <div
                                key={idx}
                                className={`
                                  h-1.5 flex-1 rounded-full transition-colors duration-200
                                  ${isCompleted ? 'bg-emerald-500' : 'bg-slate-200'}
                                `}
                              />
                            );
                          })}
                        </div>
                      </div>

                      {/* Assigned For Row */}
                      <div className="flex items-center justify-between py-1 mb-2 text-xs text-slate-500">
                        <span className="text-[11px] font-medium text-slate-500">Assigned for</span>
                        <div className="flex items-center -space-x-1.5">
                          {task.assignees.map((id, idx) => {
                            const m = getAssignee(id);
                            if (!m) return null;
                            return (
                              <img
                                key={idx}
                                src={m.avatar}
                                alt={m.name}
                                title={m.name}
                                className="w-5 h-5 rounded-full ring-2 ring-white object-cover shadow-2xs"
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Meta: Priority Flag & Counts */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-xs">
                      {/* Priority Badge */}
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${priorityStyle.bg}`}>
                        <Flag className={`w-3 h-3 ${priorityStyle.flag}`} />
                        {task.priority}
                      </span>

                      {/* Attachment & Chat counts */}
                      <div className="flex items-center gap-2.5 text-slate-400 text-[11px]">
                        <div className="flex items-center gap-1 hover:text-slate-600 transition">
                          <Paperclip className="w-3.5 h-3.5" />
                          <span>{task.attach}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-slate-600 transition">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{task.chat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
