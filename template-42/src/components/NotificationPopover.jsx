import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, X, ArrowDownLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function NotificationPopover({ 
  isOpen, 
  onClose, 
  notifications, 
  onMarkAllRead, 
  onMarkAsRead 
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 sm:pt-20">
        {/* Backdrop for closing */}
        <div 
          onClick={onClose} 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-600">
                <Bell className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Notifications</h4>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onMarkAllRead}
                className="text-[11px] font-bold text-orange-600 hover:text-orange-700 px-2 py-1 rounded-lg hover:bg-orange-50 transition"
              >
                Mark all read
              </button>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400">
                No notifications right now.
              </div>
            ) : (
              notifications.map((item) => {
                const isIncoming = item.amount?.startsWith('+');
                return (
                  <div
                    key={item.id}
                    onClick={() => onMarkAsRead(item.id)}
                    className={`p-4 transition cursor-pointer flex items-start gap-3 ${
                      item.unread ? 'bg-orange-50/20 hover:bg-orange-50/40' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2 rounded-xl flex-shrink-0 ${
                      isIncoming 
                        ? 'bg-emerald-50 text-emerald-600' 
                        : 'bg-orange-50 text-orange-600'
                    }`}>
                      {isIncoming ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <p className={`text-xs ${item.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'} truncate`}>
                          {item.title}
                        </p>
                        {item.unread && (
                          <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-xs font-mono font-bold ${
                          isIncoming ? 'text-emerald-600' : 'text-slate-700'
                        }`}>
                          {item.amount}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
