import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  UserCheck,
  Users,
  Calendar,
  Building2,
  FileBarChart,
  Contact,
  Settings,
  Puzzle,
  Headphones,
  Search,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function Sidebar({
  collapsed,
  setCollapsed,
  activeSubmenu = 'Doctor Profile',
  onSelectSubmenu,
  onOpenAddDoctor
}) {
  const [doctorMenuOpen, setDoctorMenuOpen] = useState(true);

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 250 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 h-screen bg-white border-r border-slate-100 flex flex-col justify-between z-30 select-none shadow-[2px_0_12px_rgba(0,0,0,0.015)]"
    >
      {/* Top Brand & Search */}
      <div className="flex flex-col">
        {/* Logo and Collapse Toggle */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-slate-50">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Mediso Brand Icon */}
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-500/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 15C4 10.5817 7.58172 7 12 7C16.4183 7 20 10.5817 20 15" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="8" cy="16" r="2" fill="white" />
                <circle cx="16" cy="16" r="2" fill="white" />
              </svg>
            </div>
            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-bold text-xl text-slate-800 tracking-tight font-display"
                >
                  Mediso
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors border border-slate-200/60"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
          </button>
        </div>

        {/* Search Bar (⌘ K) */}
        {!collapsed ? (
          <div className="px-5 pt-5 pb-2">
            <div className="relative flex items-center bg-slate-50 hover:bg-slate-100/80 rounded-xl px-3 py-2 text-slate-400 transition-colors border border-slate-100 focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-500/10">
              <Search size={16} className="text-slate-400 flex-shrink-0 mr-2.5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none w-full"
              />
              <span className="text-[11px] font-medium bg-white text-slate-400 px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                ⌘ K
              </span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center pt-4 pb-2">
            <button className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500">
              <Search size={18} />
            </button>
          </div>
        )}

        {/* Navigation Sections */}
        <div className="px-3.5 py-3 overflow-y-auto space-y-6 max-h-[calc(100vh-220px)] scrollbar-none">
          {/* Main Menu */}
          <div>
            {!collapsed && (
              <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
                Main Menu
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <LayoutDashboard size={18} className="text-slate-400" />
                  {!collapsed && <span>Dashboard</span>}
                </button>
              </li>

              {/* Doctor Category with Submenu */}
              <li>
                <div
                  onClick={() => setDoctorMenuOpen(!doctorMenuOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-800 bg-slate-50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <UserCheck size={18} className="text-emerald-500" />
                    {!collapsed && <span className="font-semibold text-slate-900">Doctor</span>}
                  </div>
                </div>

                {/* Submenu with tree guide */}
                {!collapsed && doctorMenuOpen && (
                  <div className="relative ml-5 pl-4 mt-1.5 space-y-1 border-l-2 border-slate-100">
                    <button
                      onClick={() => onSelectSubmenu?.('Doctor List')}
                      className={`w-full flex items-center text-xs font-medium py-1.5 px-2 rounded-lg transition-colors ${
                        activeSubmenu === 'Doctor List'
                          ? 'text-slate-900 font-semibold bg-slate-50'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Doctor List
                    </button>
                    
                    <button
                      onClick={() => onSelectSubmenu?.('Doctor Profile')}
                      className={`relative w-full flex items-center text-xs py-1.5 px-2 rounded-lg transition-colors ${
                        activeSubmenu === 'Doctor Profile'
                          ? 'text-slate-900 font-bold bg-slate-50'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {/* Active green dot attached to tree line */}
                      <span className="absolute -left-[22px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                      Doctor Profile
                    </button>

                    <button
                      onClick={() => onOpenAddDoctor?.()}
                      className="w-full flex items-center text-xs font-medium text-slate-500 hover:text-slate-800 py-1.5 px-2 rounded-lg transition-colors"
                    >
                      Add Doctor
                    </button>
                  </div>
                )}
              </li>

              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Users size={18} className="text-slate-400" />
                  {!collapsed && <span>Patient</span>}
                </button>
              </li>

              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Calendar size={18} className="text-slate-400" />
                  {!collapsed && <span>Appointment</span>}
                </button>
              </li>

              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Building2 size={18} className="text-slate-400" />
                  {!collapsed && <span>Departments</span>}
                </button>
              </li>
            </ul>
          </div>

          {/* Record */}
          <div>
            {!collapsed && (
              <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
                Record
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <FileBarChart size={18} className="text-slate-400" />
                  {!collapsed && <span>Reports</span>}
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Contact size={18} className="text-slate-400" />
                  {!collapsed && <span>Contacts</span>}
                </button>
              </li>
            </ul>
          </div>

          {/* System & Settings */}
          <div>
            {!collapsed && (
              <p className="px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-2">
                Settings
              </p>
            )}
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Settings size={18} className="text-slate-400" />
                  {!collapsed && <span>Settings</span>}
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Puzzle size={18} className="text-slate-400" />
                  {!collapsed && <span>Integrations</span>}
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                  <Headphones size={18} className="text-slate-400" />
                  {!collapsed && <span>Help Center</span>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
