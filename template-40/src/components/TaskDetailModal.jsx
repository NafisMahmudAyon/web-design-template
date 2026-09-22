import React, { useState } from 'react';
import { 
  X, 
  Flag, 
  Calendar, 
  Clock, 
  Users, 
  ListTodo, 
  Paperclip, 
  MessageSquare, 
  Send, 
  Trash2 
} from 'lucide-react';
import { TEAM_MEMBERS, STATUS_COLUMNS } from '../data/kanbanData';

export default function TaskDetailModal({ 
  task, 
  isOpen, 
  onClose, 
  onUpdateTask, 
  onDeleteTask 
}) {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: TEAM_MEMBERS[1], text: 'Milestone checks updated. All assets compiled.', time: '1 hour ago' },
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
      milestoneCompleted: newStatus === 'completed' ? task.milestoneTotal : task.milestoneCompleted,
    });
  };

  const handlePriorityChange = (newPriority) => {
    onUpdateTask({
      ...task,
      priority: newPriority,
    });
  };

  const handleMilestoneIncrement = () => {
    if (task.milestoneCompleted < task.milestoneTotal) {
      onUpdateTask({
        ...task,
        milestoneCompleted: task.milestoneCompleted + 1,
      });
    }
  };

  const getAssignee = (id) => TEAM_MEMBERS.find(m => m.id === id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">Card Inspector</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-slate-500 uppercase">{task.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onDeleteTask(task.id)}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
              title="Delete card"
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

        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              {task.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-400">Status:</span>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-white"
                >
                  {STATUS_COLUMNS.map(g => (
                    <option key={g.id} value={g.id}>{g.title}</option>
                  ))}
                </select>
              </div>

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

          <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Description</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {task.description}
            </p>
          </div>

          {/* Milestones & Progress */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <ListTodo className="w-4 h-4 text-blue-600" />
                Milestone Progress ({task.milestoneCompleted} of {task.milestoneTotal} completed)
              </span>
              <button
                onClick={handleMilestoneIncrement}
                className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold hover:bg-blue-100 transition"
              >
                + Complete Step
              </button>
            </div>

            <div className="flex items-center gap-1 pt-1">
              {Array.from({ length: task.milestoneTotal }).map((_, idx) => {
                const isCompleted = idx < task.milestoneCompleted;
                return (
                  <div
                    key={idx}
                    className={`h-2 flex-1 rounded-full transition ${isCompleted ? 'bg-emerald-500' : 'bg-slate-200'}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Timeline & Assignees */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 border border-slate-200 rounded-2xl space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Due Date</span>
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {task.due}
              </span>
            </div>

            <div className="p-3.5 border border-slate-200 rounded-2xl space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Assigned For</span>
              <div className="flex items-center -space-x-1 pt-0.5">
                {task.assignees.map((id, idx) => {
                  const m = getAssignee(id);
                  if (!m) return null;
                  return (
                    <img key={idx} src={m.avatar} alt={m.name} title={m.name} className="w-5 h-5 rounded-full ring-1 ring-white object-cover" />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Comments */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              <span>Comments & Activity ({comments.length})</span>
            </h4>

            <div className="space-y-2 mb-3">
              {comments.map((c) => (
                <div key={c.id} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <img src={c.user.avatar} alt={c.user.name} className="w-5 h-5 rounded-full object-cover mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">{c.user.name}</span>
                      <span className="text-[10px] text-slate-400">{c.time}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">{c.text}</p>
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
                className="flex-1 px-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 transition"
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
