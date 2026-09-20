import React, { useState } from 'react';
import { Menu, Bell, ChevronDown, Check, User, Shield, HelpCircle, LogOut } from 'lucide-react';

export default function Header({ onOpenMobileMenu }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(2);

  return (
    <header className="h-16 px-6 sm:px-8 border-b border-gray-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between">
      {/* Left: Mobile hamburger & Page Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Open sidebar navigation"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-base sm:text-lg font-medium text-gray-800">
          Home page
        </h1>
      </div>

      {/* Right: Quick actions & User Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => setNotificationsCount(0)}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            {notificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#186F65] rounded-full ring-2 ring-white animate-pulse" />
            )}
          </button>
        </div>

        {/* User Profile Pill */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2.5 p-1 pl-1.5 pr-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
              alt="Alex Wilkerson"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-gray-200"
            />
            <span className="hidden sm:inline-block text-sm font-semibold text-gray-800">
              Alex Wilkerson
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 transition-transform duration-200" />
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-xs font-medium text-gray-400">Signed in as</p>
                <p className="text-sm font-semibold text-gray-900 truncate">alex.wilkerson@wealthwise.io</p>
              </div>
              <div className="py-1">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2.5"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <User className="w-4 h-4 text-gray-400" />
                  <span>Your Profile</span>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2.5"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span>Security & 2FA</span>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2.5"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                  <span>Help & Documentation</span>
                </button>
              </div>
              <div className="border-t border-gray-100 pt-1">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2.5"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
