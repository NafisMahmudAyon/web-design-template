import React from 'react';
import { X, Bell, MessageSquare, Gift, Settings, CheckCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTIFICATIONS } from '../data/calendarData';

export default function NotificationsModal({ isOpen, activeTab = 'bell', onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.18 }}
          className="w-full max-w-md bg-[#151620] border border-[#27293b] rounded-3xl p-5 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232537]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#8278f8]/20 text-[#9b8efc] flex items-center justify-center">
                {activeTab === 'chat' ? (
                  <MessageSquare className="w-4 h-4" />
                ) : activeTab === 'gift' ? (
                  <Gift className="w-4 h-4" />
                ) : activeTab === 'settings' ? (
                  <Settings className="w-4 h-4" />
                ) : (
                  <Bell className="w-4 h-4" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white capitalize">
                  {activeTab === 'chat'
                    ? 'Team Messages (53)'
                    : activeTab === 'gift'
                    ? 'Member Perks & Rewards (15)'
                    : activeTab === 'settings'
                    ? 'System Preferences (19)'
                    : 'Recent Notifications (21)'}
                </h3>
                <p className="text-[11px] text-[#7d8095]">Real-time calendar feed</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-[#20222f] hover:bg-[#2a2c3d] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* List of Notification Items */}
          <div className="flex flex-col gap-2.5 max-h-80 overflow-y-auto pr-1">
            {NOTIFICATIONS.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#1b1c27] hover:bg-[#212332] border border-[#242637] transition-all cursor-pointer group"
              >
                <div className="w-2 h-2 rounded-full bg-[#38bdf8] shrink-0 mt-1.5 shadow-sm shadow-[#38bdf8]/50"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-200 group-hover:text-white leading-snug">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#7a7e93] mt-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="pt-3 mt-3 border-t border-[#232537] flex items-center justify-between">
            <button
              type="button"
              onClick={() => alert('All notifications marked as read.')}
              className="flex items-center gap-1.5 text-xs text-[#8278f8] hover:text-[#9b8efc] font-medium transition-colors"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Mark all read</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-[#20222f] hover:bg-[#282a3a] text-xs font-medium text-gray-300"
            >
              Dismiss
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
