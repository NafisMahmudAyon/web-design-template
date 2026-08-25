import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Calendar, 
  MessageSquare, 
  Clock, 
  Grid, 
  Bell, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, onToggleNotifications, hasUnread }) {
  const navItems = [
    { id: 'dashboard', icon: Compass, label: 'Explore' },
    { id: 'calendar', icon: Calendar, label: 'Schedule' },
    { id: 'messages', icon: MessageSquare, label: 'Discussions' },
    { id: 'analytics', icon: Clock, label: 'Recent Activity' },
    { id: 'modules', icon: Grid, label: 'Course Grid' },
  ];

  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center justify-between py-6 px-3 glass-panel rounded-full shadow-2xl border border-white/60 min-h-[640px] w-[68px] backdrop-blur-2xl">
      {/* Brand Logo Header */}
      <div className="flex flex-col items-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('dashboard')}
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group"
        >
          <span className="font-display font-bold text-lg text-black tracking-tighter">P</span>
          {/* Tooltip */}
          <span className="absolute left-16 bg-black text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
            ProDesign Academy
          </span>
        </motion.button>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-3 my-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <div key={item.id} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-black text-white shadow-lg' 
                      : 'text-gray-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.div 
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-black -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.button>
                {/* Tooltip */}
                <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Notifications */}
      <div className="flex flex-col items-center gap-4">
        {/* Notification Bell */}
        <div className="relative group">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleNotifications}
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-black flex items-center justify-center shadow-sm border border-gray-100 transition-all relative"
          >
            <Bell className="w-5 h-5" />
            {hasUnread && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
            )}
          </motion.button>
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
            Notifications
          </span>
        </div>

        {/* User Profile Avatar */}
        <div className="relative group">
          <motion.button 
            whileHover={{ scale: 1.08 }}
            className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md p-0.5 bg-white transition-transform"
          >
            <img 
              src="/assets/user_avatar.png" 
              alt="User profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </motion.button>
          <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
            Alex Rivers (Student)
          </span>
        </div>
      </div>
    </aside>
  );
}
