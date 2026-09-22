import React, { useState } from 'react';
import { 
  X, 
  Flag, 
  Calendar, 
  CalendarCheck, 
  Users, 
  Paperclip, 
  MessageSquare, 
  Send, 
  Trash2, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { TEAM_MEMBERS, STATUS_GROUPS } from '../data/workspaceData';

export default function TaskDetailModal({ 
  task, 
  isOpen, 
  onClose, 
  onUpdateTask, 
  onDeleteTask 
}) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: TEAM_MEMBERS[1], text: 'Initial scoping done. Reviewing specs with team.', time: '2 hours ago' },
  ]);

  if (!isOpen || !task) return null;

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        user: TEAM_MEMBERS[0],
        text: commentText.trim(),
        time: 'Just now',
      }
    ]);
    setCommentText('');
  };

  const handleStatusChange = (newStatus) => {
    onUpdateTask({
      ...task,
      status: newStatus,
      completed: newStatus === 'completed',
    });
  };

  const handlePriorityChange = (newPriority) => {
    onUpdateTask({
      ...task,
      priority: newPriority,
    });
  };

  const getAssignee = (id) => TEAM_MEMBERS.find(m => m.id === id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Task Details</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-slate-500 uppercase">{task.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
              title="Delete task"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Title & Status Controls */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {task.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              {/* Status Selector */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400">Status:</span>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                >
                  {STATUS_GROUPS.map(g => (
                    <option key={g.id} value={g.id}>{g.title}</option>
                  ))}
                </select>
              </div>

              {/* Priority Selector */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400">Priority:</span>
                <select
                  value={task.priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Description</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {task.description}
            </p>
          </div>

          {/* Schedule & Team Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Timeline</span>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Start Date
                </span>
                <span className="font-semibold text-slate-800">{task.start}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <CalendarCheck className="w-3.5 h-3.5 text-slate-400" />
                  Due Date
                </span>
                <span className="font-semibold text-slate-800">{task.dueDate}</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Assignees</span>
              <div className="space-y-1.5">
                {task.assignees.map((id, idx) => {
                  const m = getAssignee(id);
                  if (!m) return null;
                  return (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <img src={m.avatar} alt={m.name} className="w-5 h-5 rounded-full object-cover" />
                      <span className="font-semibold text-slate-800">{m.name}</span>
                      <span className="text-[11px] text-slate-400">({m.role})</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Comments Feed */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>Activity & Comments ({comments.length})</span>
            </h4>

            <div className="space-y-3 mb-4">
              {comments.map((c) => (
                <div key={c.id} className="flex items-start gap-3 bg-slate-50/60 p-3 rounded-2xl border border-slate-100">
                  <img src={c.user.avatar} alt={c.user.name} className="w-6 h-6 rounded-full object-cover mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">{c.user.name}</span>
                      <span className="text-[10px] text-slate-400">{c.time}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="flex-1 px-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
