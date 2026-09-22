import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Calendar, 
  Kanban, 
  List, 
  Clock, 
  MoreHorizontal,
  Home,
  Inbox,
  Users,
  Settings,
  Flame
} from 'lucide-react';

export default function HeroSection({ onGetStarted, onContactSales }) {
  const [activeView, setActiveView] = useState('list'); // 'kanban' | 'list' | 'calendar'

  return (
    <section className="relative hero-flowzy-glow pt-10 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Top Feature Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/80 shadow-xs mb-8 hover:border-purple-300 transition"
        >
          <span className="px-2 py-0.5 rounded-full bg-[#1A1235] text-white text-[10px] font-bold">
            ★ NEW
          </span>
          <span className="text-xs font-semibold text-slate-700">
            Optimizing Workflow Better Than Ever
          </span>
        </motion.div>

        {/* Big Stylized Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display max-w-4xl mx-auto leading-[1.15]"
        >
          Manage Your{' '}
          <span className="font-serif italic font-normal text-purple-700 font-normal">
            Project Smarter
          </span>
          ,<br />
          Powered by Real Insights
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-medium"
        >
          Stay on top of your tasks and deadlines with our intuitive project management tool designed for teams of all sizes.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white text-xs sm:text-sm font-bold shadow-purple-glow hover:shadow-xl transition active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={onContactSales}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-xs transition active:scale-95"
          >
            Contact Sales
          </button>
        </motion.div>

        {/* Hero Interactive Workspace Mockup matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden text-left">
            {/* Window titlebar */}
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-semibold text-slate-500 ml-2">
                  flowzy.app/workspace/product-launch-2026
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Syncing</span>
              </div>
            </div>

            {/* Workspace Interior: Sidebar + Main Content */}
            <div className="grid grid-cols-12 min-h-[460px]">
              {/* Left Workspace Mini-Sidebar */}
              <div className="hidden md:block md:col-span-3 border-r border-slate-100 p-4 space-y-5 bg-[#FBFBFE]">
                {/* Workspace Title */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                    O
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Oripio Design</span>
                    <span className="text-[10px] text-slate-400">Team Plan</span>
                  </div>
                </div>

                {/* General Nav */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2">General</span>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <Inbox className="w-3.5 h-3.5" />
                    <span>Inbox</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Calendar</span>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2">Projects</span>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-purple-700 bg-purple-50 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Product Launch 2026</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span>Marketing Campaign</span>
                  </div>
                </div>
              </div>

              {/* Main Workspace Canvas */}
              <div className="col-span-12 md:col-span-9 p-4 sm:p-6 space-y-4">
                {/* Breadcrumb & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-medium text-slate-400">Projects / Product Launch 2026</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">Product Launch 2026</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-slate-400" />
                      <span>Filter</span>
                    </button>
                    <button className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5">
                      <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Create Task</span>
                    </button>
                  </div>
                </div>

                {/* View Switcher Pills */}
                <div className="flex items-center gap-2 pb-2">
                  <button
                    onClick={() => setActiveView('kanban')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
                      activeView === 'kanban' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Kanban className="w-3.5 h-3.5" />
                    <span>Kanban View</span>
                  </button>

                  <button
                    onClick={() => setActiveView('list')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
                      activeView === 'list' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>List View</span>
                  </button>

                  <button
                    onClick={() => setActiveView('calendar')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition ${
                      activeView === 'calendar' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Calendar View</span>
                  </button>
                </div>

                {/* List View Tasks Group */}
                <div className="space-y-4">
                  {/* To Do Group */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold text-slate-800">To Do</span>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 rounded-full">2</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between gap-4 text-xs transition">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-slate-300" />
                          <span className="font-bold text-slate-900 truncate">Homepage Conversion Optimization</span>
                          <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">Milestone</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-shrink-0">
                          <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md">High</span>
                          <span>Due 01 Dec 2026</span>
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between gap-4 text-xs transition">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-slate-300" />
                          <span className="font-bold text-slate-900 truncate">Multi-language Support Planning</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-shrink-0">
                          <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md">High</span>
                          <span>Due 03 Dec 2026</span>
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* On Process Group */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="text-xs font-bold text-slate-800">On Process</span>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 rounded-full">2</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between gap-4 text-xs transition">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-amber-500" />
                          <span className="font-bold text-slate-900 truncate">Mobile Dashboard Development</span>
                          <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">Milestone</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-shrink-0">
                          <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md">High</span>
                          <span>Due 01 Dec 2026</span>
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="p-3 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between gap-4 text-xs transition">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-amber-500" />
                          <span className="font-bold text-slate-900 truncate">User Onboarding Experience</span>
                        </div>
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-shrink-0">
                          <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">Low</span>
                          <span>Due 04 Dec 2026</span>
                          <MoreHorizontal className="w-4 h-4 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
