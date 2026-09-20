import React from 'react';
import { Menu, Mail, Bell, ChevronDown, MoreHorizontal } from 'lucide-react';

export default function TopHeader({ onOpenMobileMenu, onOpenMessage }) {
  return (
    <header className="h-16 px-6 sm:px-8 border-b border-gray-200/80 bg-white sticky top-0 z-30 flex items-center justify-between">
      {/* Left: Hamburger & Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg"
          aria-label="Open navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">
          Patient Profile
        </h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Messages */}
        <button
          type="button"
          onClick={onOpenMessage}
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors relative"
          aria-label="Messages"
        >
          <Mail className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1FA075] rounded-full" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors relative"
          aria-label="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#1FA075] rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80"
            alt="Dr. Marvin McKinney"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-gray-200"
          />
          <ChevronDown className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
        </div>

        {/* More Button */}
        <button
          type="button"
          aria-label="More options"
          className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
