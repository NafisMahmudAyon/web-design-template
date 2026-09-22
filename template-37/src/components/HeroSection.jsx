import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Search, 
  Filter, 
  Kanban, 
  List, 
  Calendar, 
  Paperclip, 
  MessageSquare, 
  MoreHorizontal,
  Folder,
  Inbox,
  Clock,
  Settings,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { heroData, heroTasks } from '../data/flowzyData';

export default function HeroSection({ onGetStarted, onContactSales, onCreateTask }) {
  const [activeView, setActiveView] = useState('list'); // 'kanban', 'list', 'calendar'
  const [tasksList, setTasksList] = useState(heroTasks);

  const priorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden flowzy-hero-bg text-[#0F172A]">
      
      {/* Background radial atmosphere */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-purple-300/25 blur-[120px] rounded-full pointer-events-none -z-0" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Top Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/70 shadow-sm mb-6 cursor-pointer hover:bg-white"
        >
          <span className="px-2 py-0.5 rounded-full bg-[#4C1D95] text-white text-[10px] font-extrabold uppercase tracking-wider">
            {heroData.badge}
          </span>
          <span className="text-xs font-semibold text-gray-700">
            {heroData.badgeText}
          </span>
        </motion.div>

        {/* Hero Title with Elegant Serif Italic Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.15]"
        >
          {heroData.titleRegular1}{' '}
          <span className="font-serif italic font-normal text-[#6D28D9]">
            {heroData.titleItalic}
          </span>{' '}
          <br />
          {heroData.titleRegular2}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mt-5 leading-relaxed font-normal"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            onClick={onGetStarted}
            className="px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold text-xs tracking-wide shadow-lg shadow-purple-500/25 inline-flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onContactSales}
            className="px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-[#0F172A] border border-gray-200 font-semibold text-xs tracking-wide shadow-sm transition-all hover:scale-105"
          >
            Contact Sales
          </button>
        </motion.div>

        {/* Floating Perspective Product Launch Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 rounded-3xl bg-white border border-gray-200/80 shadow-2xl shadow-indigo-900/10 overflow-hidden text-left relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Dashboard Left Sidebar (3 cols) */}
            <div className="lg:col-span-3 bg-[#FAF9FE] border-r border-gray-200/70 p-4 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Team Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-gray-200/60">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    O
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A] leading-tight">Onpio Design</div>
                    <div className="text-[10px] text-gray-400">Team Plan</div>
                  </div>
                </div>

                {/* General Nav */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 mb-1">
                    General
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Inbox className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inbox</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Calendar</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Automation</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Settings className="w-3.5 h-3.5" />
                    <span>Team Settings</span>
                  </div>
                </div>

                {/* Projects Section */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 mb-1">
                    Projects
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Folder className="w-3.5 h-3.5 text-gray-400" />
                    <span>Q3 Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#6D28D9] bg-purple-100/60 cursor-pointer">
                    <Folder className="w-3.5 h-3.5 text-[#6D28D9]" />
                    <span>Product Launch 2026</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-white cursor-pointer">
                    <Folder className="w-3.5 h-3.5 text-gray-400" />
                    <span>Marketing Campaign</span>
                  </div>
                </div>

                {/* Direct Messages */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 mb-1">
                    Direct Messages
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="truncate">alexandra@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="truncate">hellosajjibur@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="truncate">sophia.chendesign@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Main Board (9 cols) */}
            <div className="lg:col-span-9 p-5 flex flex-col justify-between">
              <div>
                {/* Header Breadcrumb & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <div className="text-[10px] text-gray-400">Projects / Product Launch 2026</div>
                    <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">Product Launch 2026</h3>
                    <p className="text-[11px] text-gray-500">Monitor all of your task here.</p>
                  </div>

                  {/* Top Right Avatars */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80'
                      ].map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="team"
                          className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                      <div className="w-6 h-6 rounded-full bg-purple-100 text-[#6D28D9] flex items-center justify-center text-[10px] font-bold border-2 border-white">
                        +8
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtoolbar: View Switcher, Search, + Create Task */}
                <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100">
                  {/* View Switchers */}
                  <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg text-xs font-semibold">
                    <button
                      onClick={() => setActiveView('kanban')}
                      className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
                        activeView === 'kanban' ? 'bg-white text-[#6D28D9] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <Kanban className="w-3.5 h-3.5" />
                      <span>Kanban View</span>
                    </button>
                    <button
                      onClick={() => setActiveView('list')}
                      className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
                        activeView === 'list' ? 'bg-white text-[#6D28D9] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <List className="w-3.5 h-3.5" />
                      <span>List View</span>
                    </button>
                    <button
                      onClick={() => setActiveView('calendar')}
                      className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-all ${
                        activeView === 'calendar' ? 'bg-white text-[#6D28D9] shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Calendar View</span>
                    </button>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input
                        type="text"
                        readOnly
                        placeholder="Search..."
                        className="bg-gray-50 border border-gray-200 rounded-lg pl-8 pr-2.5 py-1 text-xs text-gray-600 w-28 focus:outline-none"
                      />
                    </div>
                    <button className="px-2.5 py-1 rounded-lg border border-gray-200 text-xs text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                      <Filter className="w-3 h-3" />
                      <span>Filter</span>
                    </button>
                    <button
                      onClick={onCreateTask}
                      className="px-3 py-1 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Create Task</span>
                    </button>
                  </div>
                </div>

                {/* Table Content: To Do & On Process sections */}
                <div className="mt-3 space-y-4">
                  {/* Group 1: To Do */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>To Do</span>
                      <span className="text-[10px] text-gray-400 font-normal">2</span>
                    </div>

                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-gray-50 text-[10px] font-semibold text-gray-400 border-b border-gray-100">
                            <th className="py-2 px-3 font-medium">Task name</th>
                            <th className="py-2 px-3 font-medium">Description</th>
                            <th className="py-2 px-3 font-medium">Assignee</th>
                            <th className="py-2 px-3 font-medium">Start</th>
                            <th className="py-2 px-3 font-medium">Due Date</th>
                            <th className="py-2 px-3 font-medium">Priority</th>
                            <th className="py-2 px-3 font-medium text-center">Attach</th>
                            <th className="py-2 px-3 font-medium text-center">Chat</th>
                            <th className="py-2 px-3"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {tasksList.slice(0, 2).map((task) => (
                            <tr key={task.id} className="hover:bg-purple-50/40 transition-colors">
                              <td className="py-2.5 px-3 font-bold text-[#0F172A] whitespace-nowrap">
                                {task.title}
                              </td>
                              <td className="py-2.5 px-3 text-gray-500 text-[11px] truncate max-w-[140px]">
                                {task.desc}
                              </td>
                              <td className="py-2.5 px-3">
                                <div className="flex -space-x-1.5">
                                  {task.assignees.map((img, i) => (
                                    <img key={i} src={img} alt="user" className="w-5 h-5 rounded-full object-cover border border-white" />
                                  ))}
                                </div>
                              </td>
                              <td className="py-2.5 px-3 text-gray-500 font-mono text-[11px]">{task.startDate}</td>
                              <td className="py-2.5 px-3 text-gray-500 font-mono text-[11px]">{task.dueDate}</td>
                              <td className="py-2.5 px-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${priorityColor(task.priority)}`}>
                                  {task.priority}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-gray-400 text-[11px]">
                                <span className="inline-flex items-center gap-0.5">
                                  <Paperclip className="w-3 h-3" />
                                  <span>{task.attachments}</span>
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-gray-400 text-[11px]">
                                <span className="inline-flex items-center gap-0.5">
                                  <MessageSquare className="w-3 h-3" />
                                  <span>{task.comments}</span>
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-gray-400 cursor-pointer">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Group 2: On Process */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-700 mb-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>On Process</span>
                      <span className="text-[10px] text-gray-400 font-normal">2</span>
                    </div>

                    <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      <table className="w-full text-left text-xs">
                        <tbody className="divide-y divide-gray-100">
                          {tasksList.slice(2, 4).map((task) => (
                            <tr key={task.id} className="hover:bg-purple-50/40 transition-colors">
                              <td className="py-2.5 px-3 font-bold text-[#0F172A] whitespace-nowrap w-[24%]">
                                {task.title}
                              </td>
                              <td className="py-2.5 px-3 text-gray-500 text-[11px] truncate max-w-[140px] w-[20%]">
                                {task.desc}
                              </td>
                              <td className="py-2.5 px-3 w-[10%]">
                                <div className="flex -space-x-1.5">
                                  {task.assignees.map((img, i) => (
                                    <img key={i} src={img} alt="user" className="w-5 h-5 rounded-full object-cover border border-white" />
                                  ))}
                                </div>
                              </td>
                              <td className="py-2.5 px-3 text-gray-500 font-mono text-[11px] w-[12%]">{task.startDate}</td>
                              <td className="py-2.5 px-3 text-gray-500 font-mono text-[11px] w-[12%]">{task.dueDate}</td>
                              <td className="py-2.5 px-3 w-[10%]">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${priorityColor(task.priority)}`}>
                                  {task.priority}
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-gray-400 text-[11px] w-[5%]">
                                <span className="inline-flex items-center gap-0.5">
                                  <Paperclip className="w-3 h-3" />
                                  <span>{task.attachments}</span>
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-center text-gray-400 text-[11px] w-[5%]">
                                <span className="inline-flex items-center gap-0.5">
                                  <MessageSquare className="w-3 h-3" />
                                  <span>{task.comments}</span>
                                </span>
                              </td>
                              <td className="py-2.5 px-3 text-gray-400 cursor-pointer w-[2%]">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
