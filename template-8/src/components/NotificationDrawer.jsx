import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Check, MessageSquare, Award, Sparkles } from 'lucide-react';

export default function NotificationDrawer({ isOpen, onClose }) {
  const notifications = [
    {
      id: 1,
      type: 'review',
      title: 'Mentor Feedback Received',
      desc: 'Ronda Williams left a pro review on your Figma header project.',
      time: '10 mins ago',
      unread: true,
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Chapter Completed!',
      desc: 'You completed "Creating Flow" chapter. +50 XP earned.',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'system',
      title: 'AI Assistant Update',
      desc: 'AI Mentor is now capable of inspecting Figma autolayout tokens.',
      time: '1 day ago',
      unread: false,
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-sm glass-panel bg-white/95 backdrop-blur-2xl shadow-2xl p-6 border-l border-white/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-gray-900" />
                  <h2 className="text-lg font-bold text-gray-900 font-display">Notifications</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {notifications.map((n) => (
                  <motion.div
                    key={n.id}
                    whileHover={{ x: 3 }}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      n.unread 
                        ? 'bg-amber-50/60 border-amber-200/80 shadow-sm' 
                        : 'bg-gray-50/80 border-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                        {n.type === 'review' && <MessageSquare className="w-3.5 h-3.5 text-purple-600" />}
                        {n.type === 'achievement' && <Award className="w-3.5 h-3.5 text-amber-600" />}
                        {n.type === 'system' && <Sparkles className="w-3.5 h-3.5 text-emerald-600" />}
                        {n.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-mono">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{n.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-black text-white text-xs font-bold hover:bg-gray-800 transition-colors shadow-md mt-6"
            >
              Mark All as Read
            </button>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
