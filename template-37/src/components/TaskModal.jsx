import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, User, Flag, Plus, Send } from 'lucide-react';

export default function TaskModal({ isOpen, onClose, initialMode = 'task', selectedPlan = '' }) {
  const [mode, setMode] = useState(initialMode); // 'task' or 'sales'
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [priority, setPriority] = useState('High');
  const [dueDate, setDueDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialMode) setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-7 shadow-2xl border border-purple-100 z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                  {mode === 'task' ? 'Task Created!' : 'Inquiry Received!'}
                </h3>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  {mode === 'task'
                    ? `"${taskName || 'New Task'}" has been added to the Product Launch 2026 backlog.`
                    : `Our enterprise team will reach out within 15 minutes regarding ${selectedPlan || 'Flowzy'}.`}
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-[#7C3AED] text-white text-xs font-bold shadow-md"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2.5 py-1 rounded-full">
                    {mode === 'task' ? 'Quick Action' : 'Enterprise Concierge'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-1">
                  {mode === 'task' ? 'Create New Project Task' : 'Contact Flowzy Sales'}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  {mode === 'task'
                    ? 'Add a task to the live Product Launch 2026 board.'
                    : 'Get custom pricing, dedicated onboarding, and enterprise security.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      {mode === 'task' ? 'Task Title' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={mode === 'task' ? 'E.g. Setup payment gateway API...' : 'Sarah Jenkins'}
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      {mode === 'task' ? 'Task Notes & Subtasks' : 'Work Email'}
                    </label>
                    <input
                      type={mode === 'task' ? 'text' : 'email'}
                      required
                      placeholder={mode === 'task' ? 'Add subtask requirements...' : 'sarah@company.com'}
                      value={taskDesc}
                      onChange={(e) => setTaskDesc(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#7C3AED]"
                    />
                  </div>

                  {mode === 'task' ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Priority</label>
                        <select
                          value={priority}
                          onChange={(e) => setPriority(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#7C3AED]"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Due Date</label>
                        <input
                          type="date"
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#7C3AED]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">Team Size</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#7C3AED]">
                        <option>10 - 50 members</option>
                        <option>50 - 250 members</option>
                        <option>250+ members</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-3 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-purple-500/25 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{mode === 'task' ? 'Add Task to Board' : 'Submit Consultation Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
