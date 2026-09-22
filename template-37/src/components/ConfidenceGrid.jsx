import React from 'react';
import { motion } from 'framer-motion';
import { Kanban, Users, Calendar, BarChart3, MoreHorizontal, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { confidenceFeatures } from '../data/flowzyData';

export default function ConfidenceGrid() {
  return (
    <section className="py-24 bg-[#FAF9FE] border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
            Manage Projects with Confidence
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            Everything you need to plan, collaborate, and deliver projects faster.
          </p>
        </div>

        {/* 2x2 Feature Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Smart Boards */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            {/* Visual: Kanban Columns */}
            <div className="bg-[#FAF9FE] rounded-2xl p-5 border border-purple-100/70 h-56 flex gap-3 overflow-hidden">
              {/* Column 1: On Process */}
              <div className="flex-1 bg-white rounded-xl p-3 border border-gray-200/80 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 pb-1.5 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>On Process</span>
                  </span>
                  <span className="text-[10px] text-gray-400">2</span>
                </div>
                <div className="bg-[#FAF9FE] rounded-lg p-2 border border-gray-100 mt-2 space-y-1">
                  <div className="text-[9px] text-gray-400">Due 8 Dec, 2026</div>
                  <div className="text-[11px] font-bold text-[#0F172A] leading-tight">
                    Mobile Dashboard Development
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-gray-500 pt-1">
                    <span>Milestone 4/8</span>
                    <span className="px-1.5 py-0.2 bg-rose-50 text-rose-700 rounded font-bold">High</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 text-center pt-1">+ New Task</div>
              </div>

              {/* Column 2: On Review */}
              <div className="flex-1 bg-white rounded-xl p-3 border border-gray-200/80 flex flex-col justify-between shadow-xs">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-700 pb-1.5 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <span>On Review</span>
                  </span>
                  <span className="text-[10px] text-gray-400">3</span>
                </div>
                <div className="bg-[#FAF9FE] rounded-lg p-2 border border-gray-100 mt-2 space-y-1">
                  <div className="text-[9px] text-gray-400">Due 5 Dec, 2026</div>
                  <div className="text-[11px] font-bold text-[#0F172A] leading-tight">
                    Design System Update
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-gray-500 pt-1">
                    <span>Milestone 3/7</span>
                    <span className="px-1.5 py-0.2 bg-amber-50 text-amber-700 rounded font-bold">Medium</span>
                  </div>
                </div>
                <div className="text-[10px] text-gray-400 text-center pt-1">+ New Task</div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {confidenceFeatures[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                {confidenceFeatures[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Seamless Collaboration */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            {/* Visual: Live Collaboration Task Card with Cursor Tags */}
            <div className="bg-[#FAF9FE] rounded-2xl p-6 border border-purple-100/70 h-56 flex flex-col justify-between relative overflow-hidden">
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-xs space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">Prototyping</span>
                  <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Create interactive models to test user flows and interface dynamics.
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-500 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1 font-semibold text-purple-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                    Not Started
                  </span>
                  <span className="font-mono text-gray-400">3/5</span>
                </div>

                {/* Floating Avatar Badge */}
                <div className="absolute -top-3 -right-2 bg-[#7C3AED] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <span>MD Sajjibur</span>
                </div>
              </div>

              {/* Collaborative Cursor Indicator */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>4 members viewing task</span>
                </div>
                <div className="flex -space-x-1.5">
                  {['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=80'
                  ].map((img, i) => (
                    <img key={i} src={img} alt="collaborator" className="w-5 h-5 rounded-full border border-white object-cover" />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {confidenceFeatures[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                {confidenceFeatures[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Deadline Control */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            {/* Visual: Calendar Planner Slots */}
            <div className="bg-[#FAF9FE] rounded-2xl p-5 border border-purple-100/70 h-56 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-xs font-bold text-gray-700 pb-2 border-b border-gray-200/60">
                <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer" />
                <span className="font-mono">Dec 2026</span>
                <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>

              <div className="grid grid-cols-3 gap-2 py-2">
                <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs space-y-1">
                  <div className="text-[9px] font-mono text-gray-400">10:00 AM</div>
                  <div className="text-[10px] font-bold text-[#0F172A] leading-tight">Sprint Planning</div>
                </div>

                <div className="bg-purple-100 p-2.5 rounded-xl border border-purple-300 shadow-xs space-y-1">
                  <div className="text-[9px] font-mono text-purple-700 font-bold">11:00 AM</div>
                  <div className="text-[10px] font-bold text-purple-900 leading-tight">Client Review</div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs space-y-1">
                  <div className="text-[9px] font-mono text-gray-400">2:00 PM</div>
                  <div className="text-[10px] font-bold text-[#0F172A] leading-tight">Q1 Workshop</div>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 text-center font-medium">
                Automated conflict detection enabled
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {confidenceFeatures[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                {confidenceFeatures[2].description}
              </p>
            </div>
          </motion.div>

          {/* Card 4: Progress Tracking */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between"
          >
            {/* Visual: Progress Meters */}
            <div className="bg-[#FAF9FE] rounded-2xl p-5 border border-purple-100/70 h-56 flex flex-col justify-between overflow-hidden">
              <div className="space-y-2.5">
                <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                  <div className="flex justify-between text-[11px] font-bold text-[#0F172A] mb-1">
                    <span>Wireframing</span>
                    <span className="text-purple-600 font-mono">2/5 Progress</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-purple-600 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                  <div className="flex justify-between text-[11px] font-bold text-[#0F172A] mb-1">
                    <span>Final Design</span>
                    <span className="text-emerald-600 font-mono">6/8 Completed</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-emerald-500 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-gray-200 shadow-xs">
                  <div className="flex justify-between text-[11px] font-bold text-[#0F172A] mb-1">
                    <span>Security Audit</span>
                    <span className="text-amber-600 font-mono">1/4 In Review</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-amber-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {confidenceFeatures[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                {confidenceFeatures[3].description}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
