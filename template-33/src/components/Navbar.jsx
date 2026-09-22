import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronDown, User, Settings, ShieldCheck, LogOut, Layers } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const tabs = ['Dashboard', 'Sales', 'Customers', 'Reports', 'Orders'];

  return (
    <header className="relative z-40 w-full mb-6">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 cursor-pointer select-none">
            {/* 3 Staggered Horizontal Bars Icon */}
            <div className="flex flex-col gap-1 w-6">
              <span className="w-6 h-1.5 rounded-full bg-[#141814]"></span>
              <span className="w-4 h-1.5 rounded-full bg-[#141814]"></span>
              <span className="w-5 h-1.5 rounded-full bg-[#141814]"></span>
            </div>
            <span className="text-xl font-extrabold text-[#141814] tracking-tight font-display">
              Rexora
            </span>
          </div>
        </div>

        {/* Center: Navigation Pill Tabs */}
        <nav className="bg-white/85 backdrop-blur-md rounded-full p-1.5 border border-black/[0.04] shadow-sm hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-200 ${
                  isActive
                    ? 'text-[#141814]'
                    : 'text-[#6C736A] hover:text-[#141814]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeRexoraPill"
                    className="absolute inset-0 rounded-full bg-[#B4EE58] shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Notifications & User Profile */}
        <div className="flex items-center gap-3">
          
          {/* Notification Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="w-11 h-11 rounded-full bg-white text-[#202720] flex items-center justify-center border border-black/[0.04] shadow-sm hover:bg-gray-50 transition-all focus:outline-none"
            >
              <Bell className="w-4 h-4 stroke-[2]" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#F16522] ring-2 ring-white"></span>
            </motion.button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-white p-3.5 shadow-xl border border-black/5 z-50 text-[#141814]"
                >
                  <div className="flex items-center justify-between pb-2.5 border-b border-gray-100">
                    <span className="font-bold text-xs">Revenue Alerts</span>
                    <span className="text-[10px] font-bold bg-[#B4EE58]/30 text-[#436411] px-2 py-0.5 rounded-full">
                      Live
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50 mt-1 text-xs">
                    <div className="py-2 hover:bg-gray-50 rounded-lg px-1.5 transition-colors cursor-pointer">
                      <p className="font-bold text-gray-900">US Shopify Surge</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">206 payments cleared in 1 hour.</p>
                    </div>
                    <div className="py-2 hover:bg-gray-50 rounded-lg px-1.5 transition-colors cursor-pointer">
                      <p className="font-bold text-gray-900">Finland Payout</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">$312,450 deposited into merchant bank.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile Pill */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2.5 pl-1.5 pr-3 py-1 rounded-full bg-white border border-black/[0.04] shadow-sm hover:bg-gray-50 transition-all focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=128&h=128&q=80" 
                  alt="Oripio Sajib" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-[#141814] leading-tight">Oripio Sajib</p>
                <p className="text-[10px] text-gray-400 font-medium">Admin</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2.5 shadow-xl border border-black/5 z-50 text-[#141814] text-xs"
                >
                  <div className="p-2 border-b border-gray-100">
                    <p className="font-bold">Oripio Sajib</p>
                    <p className="text-[11px] text-gray-400">sajib@rexora.io</p>
                  </div>
                  <div className="py-1.5 space-y-0.5">
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <User className="w-3.5 h-3.5" />
                      Account Settings
                    </button>
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      API Credentials
                    </button>
                  </div>
                  <div className="border-t border-gray-100 pt-1">
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-rose-50 text-rose-600 font-semibold flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="mt-3 flex md:hidden items-center justify-center">
        <nav className="bg-white/90 backdrop-blur-md rounded-full p-1 border border-black/[0.04] shadow-sm flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  isActive ? 'bg-[#B4EE58] text-[#141814]' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
