import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Grip, 
  Bell, 
  Menu, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  UserCheck, 
  LogOut,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenAddPatient, onOpenAddAppointment }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Critical Alert: ICU Bed 4',
      message: 'BP dropping (88/54). Dr. Bennett requested stat arterial blood gas.',
      time: '4m ago',
      type: 'critical',
    },
    {
      id: 2,
      title: 'Medication Pass Due',
      message: 'Ward 4B - 6 patients due for IV antibiotic administration.',
      time: '18m ago',
      type: 'warning',
    },
    {
      id: 3,
      title: 'Discharge Approved',
      message: 'Michael Chen discharged from Room 302. Transport notified.',
      time: '35m ago',
      type: 'info',
    }
  ];

  return (
    <header className="relative z-40 w-full mb-6">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left: Quick Add & Nurse Profile Pill */}
        <div className="flex items-center gap-3">
          {/* Quick Add Button (+) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAddPatient}
            title="Admit Patient / Add Task"
            className="w-11 h-11 rounded-2xl bg-[#52734D] text-white flex items-center justify-center hover:bg-[#435F3F] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#52734D]/50"
          >
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </motion.button>

          {/* Profile Pill: Elisa Nillson */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setProfileOpen(!profileOpen)}
              className="h-11 px-4 rounded-full bg-[#181D17] text-white flex items-center gap-2.5 font-medium text-sm hover:bg-[#252C24] transition-all shadow-sm focus:outline-none"
            >
              {/* 6-dot grip icon */}
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3 text-white/80">
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </div>
              <span className="tracking-tight text-[13px] font-semibold">Elisa Nillson</span>
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute left-0 mt-2 w-64 rounded-2xl bg-white p-3 shadow-xl border border-black/5 z-50 text-[#181D17]"
                >
                  <div className="flex items-center gap-3 p-2 border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 rounded-full bg-[#52734D]/15 text-[#52734D] flex items-center justify-center font-bold text-sm">
                      EN
                    </div>
                    <div>
                      <p className="text-sm font-bold">Elisa Nillson, RN</p>
                      <p className="text-xs text-gray-500">Head Nurse • Ward 4B</p>
                    </div>
                  </div>
                  <div className="py-2 space-y-1 text-xs">
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-700 flex items-center justify-between"
                    >
                      Shift Handover Checklist
                      <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">Active</span>
                    </button>
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-700"
                    >
                      Emergency Code Protocols
                    </button>
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-700"
                    >
                      Nursing Staff Roster
                    </button>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    <button 
                      onClick={() => setProfileOpen(false)}
                      className="w-full text-left px-3 py-1.5 rounded-xl hover:bg-rose-50 text-rose-600 font-semibold text-xs flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out Shift
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center: Navigation Pill Tabs */}
        <nav className="bg-white/85 backdrop-blur-md rounded-full p-1.5 border border-black/5 shadow-sm hidden md:flex items-center gap-1">
          {['Dashboard', 'Patients', 'Doctors', 'Schedules'].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-[#6C7568] hover:text-[#181D17]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#52734D] shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Notifications & Menu */}
        <div className="flex items-center gap-2.5">
          {/* Notification Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="w-11 h-11 rounded-2xl bg-white text-[#293026] flex items-center justify-center border border-black/5 shadow-sm hover:bg-gray-50 transition-all focus:outline-none"
            >
              <Bell className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </motion.button>

            {/* Notifications Dropdown */}
            <AnimatePresence>
              {notificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-80 rounded-2xl bg-white p-4 shadow-xl border border-black/5 z-50 text-[#181D17]"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h4 className="font-bold text-sm">Shift Notifications</h4>
                    <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 font-bold text-[10px]">3 New</span>
                  </div>
                  <div className="divide-y divide-gray-100 mt-2">
                    {notifications.map((n) => (
                      <div key={n.id} className="py-2.5 hover:bg-gray-50/80 rounded-xl px-2 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${
                            n.type === 'critical' ? 'text-rose-600' : n.type === 'warning' ? 'text-amber-600' : 'text-blue-600'
                          }`}>
                            {n.title}
                          </span>
                          <span className="text-[10px] text-gray-400">{n.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{n.message}</p>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setNotificationsOpen(false)}
                    className="w-full mt-3 py-1.5 text-center text-xs font-semibold text-[#52734D] hover:underline"
                  >
                    Mark all as reviewed
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger Menu Button */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 rounded-2xl bg-white text-[#293026] flex items-center justify-center border border-black/5 shadow-sm hover:bg-gray-50 transition-all focus:outline-none"
            >
              <Menu className="w-5 h-5 stroke-[2]" />
            </motion.button>

            {/* Quick Menu Drawer */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl bg-white p-3 shadow-xl border border-black/5 z-50 text-[#181D17]"
                >
                  <div className="p-2 border-b border-gray-100">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quick Actions</p>
                  </div>
                  <div className="py-2 space-y-1 text-xs">
                    <button 
                      onClick={() => { onOpenAddAppointment(); setMenuOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-800 flex items-center gap-2"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#52734D]" />
                      Schedule New Appointment
                    </button>
                    <button 
                      onClick={() => { onOpenAddPatient(); setMenuOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-800 flex items-center gap-2"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-[#52734D]" />
                      Admit Emergency Patient
                    </button>
                    <button 
                      onClick={() => setMenuOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-gray-50 font-medium text-gray-800 flex items-center gap-2"
                    >
                      <Clock className="w-3.5 h-3.5 text-[#52734D]" />
                      Shift Handover Report
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile nav bar pills */}
      <div className="mt-3 flex md:hidden items-center justify-center">
        <nav className="bg-white/90 backdrop-blur-md rounded-full p-1 border border-black/5 shadow-sm flex items-center gap-1">
          {['Dashboard', 'Patients', 'Doctors', 'Schedules'].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                  isActive ? 'bg-[#52734D] text-white' : 'text-[#6C7568]'
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
