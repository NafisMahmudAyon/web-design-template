import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserPlus, Bell } from 'lucide-react';

export default function TopNavbar({ onInviteClick }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      
      {/* Page Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#141814] tracking-tight">
          Overview
        </h1>
      </div>

      {/* Right Controls: Search, Invite & Earn, Notification, Avatar */}
      <div className="flex items-center gap-3 self-end sm:self-auto">
        
        {/* Search Input */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-full bg-white border border-black/[0.04] text-xs text-[#141814] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#141814] w-56 shadow-sm"
          />
        </div>

        {/* Invite & Earn Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onInviteClick}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-black/[0.04] text-xs font-bold text-[#141814] shadow-sm hover:bg-gray-50 transition-colors focus:outline-none"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>Invite & Earn</span>
        </motion.button>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="w-9 h-9 rounded-full bg-white border border-black/[0.04] flex items-center justify-center text-gray-700 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
          </button>

          <AnimatePresence>
            {notificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-2 w-64 rounded-2xl bg-white p-3 shadow-xl border border-black/5 z-50 text-xs text-[#141814]"
              >
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 font-bold">
                  <span>Notifications</span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Live</span>
                </div>
                <div className="py-2 space-y-1 text-[11px]">
                  <p className="font-semibold text-gray-800">Client Payment Received</p>
                  <p className="text-gray-500">+$1,550.00 via PayPal settled to treasury.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border border-black/5 shadow-sm bg-gray-100 flex-shrink-0 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80"
            alt="Sajibur Rahman"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  );
}
