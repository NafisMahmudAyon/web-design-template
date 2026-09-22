import React from 'react';
import { motion } from 'framer-motion';
import { 
  Kanban, 
  Users, 
  Calendar, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  MoreHorizontal 
} from 'lucide-react';
import { CONFIDENCE_FEATURES } from '../data/flowzyData';

export default function ProjectsWithConfidenceSection() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex justify-center">
            <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
              <Kanban className="w-4 h-4" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Manage Projects with Confidence
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Everything you need to plan, collaborate, and deliver projects faster.
          </p>
        </div>

        {/* 2x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart Boards */}
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition duration-300 group">
            {/* Visual Mini Kanban Board Container */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-6 min-h-[200px] overflow-hidden">
              <div className="grid grid-cols-2 gap-3">
                {/* Column 1 */}
                <div className="bg-slate-50 p-2.5 rounded-xl space-y-2 border border-slate-200/60">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                    <span>On Process</span>
                    <span className="bg-slate-200 px-1.5 py-0.2 rounded-full text-[9px]">2</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[10px] text-slate-400 block font-semibold">Due 6 Dec, 2026</span>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Mobile Dashboard Development</span>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.2 rounded">High</span>
                      <span className="text-[9px] text-slate-400">4/8</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="bg-slate-50 p-2.5 rounded-xl space-y-2 border border-slate-200/60">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                    <span>On Review</span>
                    <span className="bg-slate-200 px-1.5 py-0.2 rounded-full text-[9px]">3</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[10px] text-slate-400 block font-semibold">Due 5 Dec, 2026</span>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Design System Update</span>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded">Medium</span>
                      <span className="text-[9px] text-slate-400">2/8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Smart Boards
              </h3>
              <p className="text-xs text-slate-500">
                Visualize tasks with flexible Kanban, list, timeline views
              </p>
            </div>
          </div>

          {/* Card 2: Seamless Collaboration */}
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition duration-300 group">
            {/* Visual Task Card with Assignee Tags */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900">Prototyping</span>
                  <MoreHorizontal className="w-4 h-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Create interactive models to test user flows and interface dynamics.
                </p>
              </div>

              {/* Badges & Assigned Avatar */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Not Started</span>
                  <span className="font-mono font-bold text-slate-700">3/5</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 text-[10px] font-bold">
                      MD Sajibur
                    </span>
                    <span className="text-[11px] text-slate-400">05/09/2026</span>
                  </div>
                  <div className="flex -space-x-1.5">
                    {['A', 'M', 'L'].map((initial, i) => (
                      <div key={i} className="w-5 h-5 rounded-full bg-slate-200 border border-white text-[9px] font-bold text-slate-600 flex items-center justify-center">
                        {initial}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Seamless Collaboration
              </h3>
              <p className="text-xs text-slate-500">
                Visualize tasks with flexible Kanban, list, timeline views
              </p>
            </div>
          </div>

          {/* Card 3: Deadline Control */}
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition duration-300 group">
            {/* Visual Calendar View */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-6 min-h-[200px]">
              {/* Calendar Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-slate-800">
                <button className="p-1 hover:bg-slate-100 rounded"><ChevronLeft className="w-3.5 h-3.5" /></button>
                <span>Dec 2026</span>
                <button className="p-1 hover:bg-slate-100 rounded"><ChevronRight className="w-3.5 h-3.5" /></button>
              </div>

              {/* Timeline slots matching mockup */}
              <div className="grid grid-cols-3 gap-2 pt-3">
                <div className="p-2 bg-purple-50 border border-purple-200/60 rounded-xl">
                  <span className="text-[9px] font-bold text-purple-600 block">10:00 AM - 11:00 AM</span>
                  <span className="text-[10px] font-bold text-slate-800 block mt-0.5 leading-tight">Sprint Planning Meeting</span>
                </div>

                <div className="p-2 bg-blue-50 border border-blue-200/60 rounded-xl">
                  <span className="text-[9px] font-bold text-blue-600 block">11:00 AM - 12:00 AM</span>
                  <span className="text-[10px] font-bold text-slate-800 block mt-0.5 leading-tight">Client Presentation Preparation</span>
                </div>

                <div className="p-2 bg-emerald-50 border border-emerald-200/60 rounded-xl">
                  <span className="text-[9px] font-bold text-emerald-600 block">2:00 PM - 3:00 PM</span>
                  <span className="text-[10px] font-bold text-slate-800 block mt-0.5 leading-tight">Q1 Planning Workshop</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Deadline Control
              </h3>
              <p className="text-xs text-slate-500">
                Visualize tasks with flexible Kanban, list, timeline views
              </p>
            </div>
          </div>

          {/* Card 4: Progress Tracking */}
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl transition duration-300 group">
            {/* Visual Multi-task Progress */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-6 min-h-[200px] space-y-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>Wireframing</span>
                  <span className="text-[11px] font-mono text-purple-700">2/5 Progress</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-2/5 h-full bg-purple-600 rounded-full" />
                </div>
                <span className="text-[10px] text-slate-400 block">Assigned for 20/08/2026</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>Final Design</span>
                  <span className="text-[11px] font-mono text-purple-700">2/8 Progress</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-1/4 h-full bg-blue-600 rounded-full" />
                </div>
                <span className="text-[10px] text-slate-400 block">Assigned for 30/08/2026</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Progress Tracking
              </h3>
              <p className="text-xs text-slate-500">
                Visualize tasks with flexible Kanban, list, timeline views
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
