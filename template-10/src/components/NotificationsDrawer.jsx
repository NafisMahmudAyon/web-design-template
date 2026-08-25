import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Zap, TrendingUp, UserPlus, Check } from 'lucide-react';

export default function NotificationsDrawer({ isOpen, onClose }) {
  const notifications = [
    {
      id: 1,
      title: '7-Day Streak Achieved!',
      desc: 'Sales Report generated a 7-day winning streak with 12.4k volume.',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'New Account Joined',
      desc: 'TechNova Inc integrated their Stripe billing pipeline.',
      time: '1h ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Churn Rate Improved',
      desc: 'Monthly churn dropped by -0.4% down to 2.5%.',
      time: '3h ago',
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-sm bg-[#141518] text-white border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-[#00e676]" />
                  <h2 className="text-lg font-bold font-display text-white">Notifications</h2>
                </div>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {notifications.map((n) => (
                  <div 
                    key={n.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      n.unread
                        ? 'bg-[#1e2128] border-[#00e676]/30 shadow-sm'
                        : 'bg-[#181a1f] border-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        {n.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 font-mono">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#00e676] text-gray-950 text-xs font-bold hover:bg-[#00c865] transition-colors shadow-md mt-6"
            >
              Clear Notifications
            </button>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
