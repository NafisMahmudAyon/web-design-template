import React, { useState } from 'react';
import { X, Plus, Calendar, Flag, User, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEAM_MEMBERS, STATUS_GROUPS } from '../data/workspaceData';

export default function CreateTaskModal({ 
  isOpen, 
  onClose, 
  onAddTask, 
  initialStatus = 'todo' 
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(initialStatus);
  const [priority, setPriority] = useState('Medium');
  const [startDate, setStartDate] = useState('01 Dec 2026');
  const [dueDate, setDueDate] = useState('15 Dec 2026');
  const [selectedAssignees, setSelectedAssignees] = useState(['user-1']);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      displayTitle: title.trim().length > 30 ? title.trim().slice(0, 30) + '...' : title.trim(),
      description: description.trim() || 'No description provided.',
      displayDesc: description.trim().length > 25 ? description.trim().slice(0, 25) + '...' : description.trim(),
      assignees: selectedAssignees,
      start: startDate,
      dueDate: dueDate,
      priority: priority,
      attach: 1,
      chat: 0,
      status: status,
      completed: status === 'completed',
    };

    onAddTask(newTask);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    onClose();
  };

  const toggleAssignee = (id) => {
    if (selectedAssignees.includes(id)) {
      if (selectedAssignees.length > 1) {
        setSelectedAssignees(selectedAssignees.filter(a => a !== id));
      }
    } else {
      setSelectedAssignees([...selectedAssignees, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">Create New Task</h3>
          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Task Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Design Onboarding Experience"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Description</label>
            <textarea
              rows={3}
              placeholder="Provide context, deliverables, and acceptance criteria..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Status Group</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              >
                {STATUS_GROUPS.map((g) => (
                  <option key={g.id} value={g.id}>{g.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Start Date</label>
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Due Date</label>
              <input
                type="text"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">Assign Team Members</label>
            <div className="flex flex-wrap gap-2">
              {TEAM_MEMBERS.map((m) => {
                const isSelected = selectedAssignees.includes(m.id);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleAssignee(m.id)}
                    className={`
                      flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-medium transition
                      ${isSelected 
                        ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }
                    `}
                  >
                    <img src={m.avatar} alt={m.name} className="w-4 h-4 rounded-full object-cover" />
                    <span>{m.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
