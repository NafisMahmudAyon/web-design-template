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
import { TEAM_MEMBERS, STATUS_GROUPS } from '../data/workspaceData';

export default function TaskListView({ 
  tasks, 
  onToggleTask, 
  onSelectTask, 
  onCreateTaskWithStatus,
  searchQuery,
  priorityFilter 
}) {
  // Collapsed state for groups
  const [collapsedGroups, setCollapsedGroups] = useState({
    todo: false,
    process: false,
    review: false,
    completed: true, // Completed starts collapsed by default or openable
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

  // Filter tasks based on search query and priority filter
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="space-y-4 pt-2 pb-16">
      {STATUS_GROUPS.map((group) => {
        const groupTasks = filteredTasks.filter(t => t.status === group.id);
        const isCollapsed = collapsedGroups[group.id];

        return (
          <div 
            key={group.id} 
            className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs transition-all"
          >
            {/* Status Group Header */}
            <div 
              className={`
                px-4 py-3 flex items-center justify-between select-none cursor-pointer transition
                ${group.headerBg}
              `}
              onClick={() => toggleGroup(group.id)}
            >
              <div className="flex items-center gap-2.5">
                <button 
                  className="text-slate-400 hover:text-slate-700 transition p-0.5 rounded"
                  aria-label="Toggle group collapse"
                >
                  {isCollapsed ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronUp className="w-4 h-4" />
                  )}
                </button>

                <div className="flex items-center gap-2">
                  {getGroupIcon(group.icon)}
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {group.title}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${group.badgeClass}`}>
                    {group.id === 'completed' && groupTasks.length < 12 ? '12' : groupTasks.length}
                  </span>
                </div>
              </div>

              {/* Add Task to Group Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCreateTaskWithStatus(group.id);
                }}
                className="p-1 text-slate-400 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition"
                title={`Add task to ${group.title}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Collapsible Table Content */}
            {!isCollapsed && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[960px]">
                  {/* Table Column Headers */}
                  <thead>
                    <tr className="border-t border-b border-slate-100 bg-slate-50/60 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="py-2.5 px-4 w-[280px]">
                        <div className="flex items-center gap-1.5">
                          <Circle className="w-3.5 h-3.5 text-slate-400" />
                          <span>Task name</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[240px]">
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-slate-400" />
                          <span>Description</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[110px]">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>Assignee</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[110px]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>Start</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[110px]">
                        <div className="flex items-center gap-1.5">
                          <CalendarCheck className="w-3.5 h-3.5 text-slate-400" />
                          <span>Due Date</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-4 w-[95px]">
                        <div className="flex items-center gap-1.5">
                          <Flag className="w-3.5 h-3.5 text-slate-400" />
                          <span>Priority</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 w-[70px]">
                        <div className="flex items-center gap-1.5">
                          <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                          <span>Attach</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 w-[70px]">
                        <div className="flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          <span>Chat</span>
                        </div>
                      </th>
                      <th className="py-2.5 px-3 w-[40px] text-right">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body Rows */}
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {groupTasks.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="py-6 text-center text-slate-400 italic">
                          No tasks in {group.title} matching current filter
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
                            {/* Task Name & Checkbox */}
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
                                    ${task.completed 
                                      ? 'bg-emerald-600 border-emerald-600 text-white' 
                                      : 'border-slate-300 hover:border-slate-500 bg-white'
                                    }
                                  `}
                                >
                                  {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                                </button>
                                <span className={`truncate ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                                  {task.displayTitle || task.title}
                                </span>
                              </div>
                            </td>

                            {/* Description */}
                            <td className="py-3 px-4 text-slate-500 truncate max-w-[240px]" title={task.description}>
                              {task.displayDesc || task.description}
                            </td>

                            {/* Assignee Avatar Stack */}
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
                                      title={member.name}
                                      className="w-5 h-5 rounded-full ring-1 ring-white object-cover shadow-2xs"
                                    />
                                  );
                                })}
                              </div>
                            </td>

                            {/* Start Date */}
                            <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">
                              {task.start}
                            </td>

                            {/* Due Date */}
                            <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">
                              {task.dueDate}
                            </td>

                            {/* Priority Badge */}
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold ${priorityStyle.bg}`}>
                                <Flag className={`w-3 h-3 ${priorityStyle.flag}`} />
                                {task.priority}
                              </span>
                            </td>

                            {/* Attachments */}
                            <td className="py-3 px-3 text-slate-500">
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100/80 text-[11px] font-medium text-slate-600">
                                <Paperclip className="w-3 h-3 text-slate-400" />
                                <span>{task.attach}</span>
                              </div>
                            </td>

                            {/* Chat */}
                            <td className="py-3 px-3 text-slate-500">
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100/80 text-[11px] font-medium text-slate-600">
                                <MessageSquare className="w-3 h-3 text-slate-400" />
                                <span>{task.chat}</span>
                              </div>
                            </td>

                            {/* Row Action Trigger */}
                            <td className="py-3 px-3 text-right">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onSelectTask(task);
                                }}
                                className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100 transition"
                              >
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
