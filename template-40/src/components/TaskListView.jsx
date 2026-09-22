import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Target, 
  SunMedium, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  Users, 
  Calendar, 
  CalendarCheck, 
  Flag, 
  Paperclip, 
  MessageSquare, 
  MoreHorizontal,
  Check,
  Circle
} from 'lucide-react';
import { TEAM_MEMBERS, STATUS_COLUMNS } from '../data/kanbanData';

export default function TaskListView({ 
  tasks, 
  onToggleTask, 
  onSelectTask, 
  onCreateTaskWithStatus,
  searchQuery,
  priorityFilter 
}) {
  const [collapsedGroups, setCollapsedGroups] = useState({
    todo: false,
    process: false,
    review: false,
    completed: false,
  });

  const toggleGroup = (groupId) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

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

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="space-y-4 pt-2 pb-16">
      {STATUS_COLUMNS.map((group) => {
        const groupTasks = filteredTasks.filter(t => t.status === group.id);
        const isCollapsed = collapsedGroups[group.id];

        return (
          <div 
            key={group.id} 
            className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all"
          >
            <div 
              className={`
                px-4 py-3 flex items-center justify-between select-none cursor-pointer transition
                ${group.headerBg}
              `}
              onClick={() => toggleGroup(group.id)}
            >
              <div className="flex items-center gap-2.5">
                <button className="text-slate-400 hover:text-slate-700 transition p-0.5 rounded">
                  {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>

                <div className="flex items-center gap-2">
                  {getGroupIcon(group.icon)}
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {group.title}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${group.badgeClass}`}>
                    {groupTasks.length}
                  </span>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCreateTaskWithStatus(group.id);
                }}
                className="p-1 text-slate-400 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {!isCollapsed && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[960px]">
                  <thead>
                    <tr className="border-t border-b border-slate-100 bg-slate-50/60 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-2.5 px-4 w-[280px]">Task name</th>
                      <th className="py-2.5 px-4 w-[240px]">Description</th>
                      <th className="py-2.5 px-4 w-[110px]">Assignee</th>
                      <th className="py-2.5 px-4 w-[110px]">Start</th>
                      <th className="py-2.5 px-4 w-[110px]">Due Date</th>
                      <th className="py-2.5 px-4 w-[95px]">Priority</th>
                      <th className="py-2.5 px-3 w-[70px]">Attach</th>
                      <th className="py-2.5 px-3 w-[70px]">Chat</th>
                      <th className="py-2.5 px-3 w-[40px] text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 text-xs">
                    {groupTasks.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="py-6 text-center text-slate-400 italic">
                          No tasks in {group.title}
                        </td>
                      </tr>
                    ) : (
                      groupTasks.map((task) => {
                        const priorityStyle = getPriorityStyle(task.priority);

                        return (
                          <tr
                            key={task.id}
                            onClick={() => onSelectTask(task)}
                            className="table-row-hover group cursor-pointer"
                          >
                            <td className="py-3 px-4 font-semibold text-slate-800">
                              <div className="flex items-center gap-2.5">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleTask(task.id);
                                  }}
                                  className={`
                                    w-4 h-4 rounded-md border flex items-center justify-center transition flex-shrink-0
                                    ${task.status === 'completed' 
                                      ? 'bg-emerald-600 border-emerald-600 text-white' 
                                      : 'border-slate-300 hover:border-slate-500 bg-white'
                                    }
                                  `}
                                >
                                  {task.status === 'completed' && <Check className="w-3 h-3 stroke-[3]" />}
                                </button>
                                <span className={`truncate ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                                  {task.title}
                                </span>
                              </div>
                            </td>

                            <td className="py-3 px-4 text-slate-500 truncate max-w-[240px]">
                              {task.description}
                            </td>

                            <td className="py-3 px-4">
                              <div className="flex items-center -space-x-1.5 overflow-hidden">
                                {task.assignees.map((assigneeId, idx) => {
                                  const member = getAssignee(assigneeId);
                                  if (!member) return null;
                                  return (
                                    <img
                                      key={idx}
                                      src={member.avatar}
                                      alt={member.name}
                                      className="w-5 h-5 rounded-full ring-1 ring-white object-cover"
                                    />
                                  );
                                })}
                              </div>
                            </td>

                            <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">
                              {task.start}
                            </td>

                            <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">
                              {task.dueDate}
                            </td>

                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${priorityStyle.bg}`}>
                                <Flag className={`w-3 h-3 ${priorityStyle.flag}`} />
                                {task.priority}
                              </span>
                            </td>

                            <td className="py-3 px-3 text-slate-500">
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100/80 text-[11px] font-medium text-slate-600">
                                <Paperclip className="w-3 h-3 text-slate-400" />
                                <span>{task.attach}</span>
                              </div>
                            </td>

                            <td className="py-3 px-3 text-slate-500">
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100/80 text-[11px] font-medium text-slate-600">
                                <MessageSquare className="w-3 h-3 text-slate-400" />
                                <span>{task.chat}</span>
                              </div>
                            </td>

                            <td className="py-3 px-3 text-right">
                              <button className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
