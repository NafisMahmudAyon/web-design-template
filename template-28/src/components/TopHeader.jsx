import React, { useState } from 'react';
import { Calendar, Sparkles, ChevronDown, Bell, Plus } from 'lucide-react';

export default function TopHeader({ activeTab, setActiveTab, onOpenAskAI, onOpenAddTransaction }) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'holdings', label: 'Holdings' },
    { id: 'market-watch', label: 'Market watch' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Title & Tabs */}
        <div className="space-y-3">
          <h1 className="font-display text-2xl font-black text-[#090d16]">
            Investment
          </h1>

          <div className="flex items-center space-x-6 border-b border-transparent text-xs font-bold">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[#090d16] font-extrabold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#090d16]'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions & Profile */}
        <div className="flex items-center space-x-4">
          
          {/* Add Asset Button */}
          <button
            onClick={onOpenAddTransaction}
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#090d16] transition-colors"
            title="Add Transaction"
          >
            <Plus className="w-4 h-4" />
          </button>

          {/* Timeframe Dropdown */}
          <button className="flex items-center space-x-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 px-3.5 py-2 rounded-xl text-xs font-bold text-gray-700 transition-colors">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>This Year</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {/* ✨ Ask AI Button */}
          <button
            onClick={onOpenAskAI}
            className="inline-flex items-center space-x-2 bg-[#090d16] hover:bg-black text-white text-xs font-black px-5 py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Ask AI</span>
          </button>

          <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

          {/* User Profile Info */}
          <div className="flex items-center space-x-3 cursor-pointer p-1 rounded-xl hover:bg-gray-50 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Tom Anderson"
              className="w-9 h-9 rounded-full object-cover border border-gray-200"
            />
            <div className="hidden sm:block text-left">
              <span className="text-xs font-black text-[#090d16] block leading-none">
                Tom Anderson
              </span>
              <span className="text-[10px] font-medium text-gray-400">
                tom@gmail.com
              </span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:block" />
          </div>

        </div>

      </div>
    </header>
  );
}
