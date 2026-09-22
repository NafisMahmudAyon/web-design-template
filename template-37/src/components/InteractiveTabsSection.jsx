import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Clock, AlertCircle } from 'lucide-react';
import { interactiveTabs, cascadingTasks } from '../data/flowzyData';

export default function InteractiveTabsSection() {
  const [activeTab, setActiveTab] = useState('tracking');

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <div className="flex mb-4">
            <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
            Everything You Need to <br />
            Manage Projects Smarter
          </h2>
        </div>

        {/* 2-Column Split: Left Tabs & Right Cascading Task Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols): Interactive Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {interactiveTabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#FAF9FE] border-purple-200 shadow-sm'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isActive ? 'text-[#6D28D9]' : 'text-gray-500 hover:text-[#0F172A]'
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'rotate-90 text-[#6D28D9]' : 'text-gray-300'
                      }`}
                    />
                  </div>

                  {/* Expanded Description when Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                          {tab.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Soft Cyan/Blue Card with Vertical Task Cards */}
          <div className="lg:col-span-7 bg-[#E0F2FE]/50 p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-inner flex justify-center">
            <div className="w-full max-w-md space-y-3">
              {cascadingTasks.map((task, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{task.due}</span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${task.priorityColor}`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] mt-2">
                    {task.title}
                  </h4>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 text-[10px] text-gray-500">
                    <span>Milestone {task.milestone}</span>
                    <span>Assigned to {task.assigned} members</span>
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
