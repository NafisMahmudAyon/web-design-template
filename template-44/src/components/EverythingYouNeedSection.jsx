import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  MoreHorizontal, 
  MessageSquare, 
  Paperclip, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import { EVERYTHING_TABS, WORKSPACE_TASKS } from '../data/flowzyData';

export default function EverythingYouNeedSection() {
  const [activeTabId, setActiveTabId] = useState('tracking');

  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFE] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex p-1.5 rounded-xl bg-purple-100 text-purple-700">
            <Sparkles className="w-4 h-4" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Everything You Need to <br />
            Manage Projects Smarter
          </h2>
        </div>

        {/* 2 Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Accordion Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {EVERYTHING_TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`
                    rounded-2xl p-5 transition-all duration-200 cursor-pointer border select-none
                    ${isActive 
                      ? 'bg-white border-purple-200 shadow-lg' 
                      : 'bg-transparent border-transparent hover:bg-white/60'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`text-base sm:text-lg font-bold ${
                      isActive ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {tab.title}
                    </h3>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isActive ? 'rotate-90 text-purple-600' : 'text-slate-300'
                    }`} />
                  </div>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mt-2 pt-2 border-t border-slate-100"
                    >
                      {tab.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Live Tasks Preview matching screenshot */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-[#E0F2FE] via-[#E9D5FF]/30 to-[#F5F3FF] rounded-[2.5rem] p-4 sm:p-7 border border-blue-100 shadow-xl space-y-3">
              {WORKSPACE_TASKS.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md transition space-y-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-300 hover:text-purple-600 transition cursor-pointer" />
                      <span className="text-xs font-bold text-slate-900 leading-tight">
                        {task.title}
                      </span>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 pl-6 leading-tight truncate">
                    {task.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 pl-6 text-[11px] text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                        {task.milestone}
                      </span>
                      <span className="font-mono text-slate-400">
                        {task.progress}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400">{task.assignedFor}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${task.priorityColor}`}>
                        {task.priority}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MessageSquare className="w-3 h-3" />
                        <span>{task.comments}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Paperclip className="w-3 h-3" />
                        <span>{task.attachments}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
