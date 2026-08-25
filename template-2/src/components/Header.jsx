import React, { useState } from 'react';
import { Sparkles, Search, MessageSquare, Bell } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="top-header">
      {/* Brand Logo Icon */}
      <div className="brand-icon-box" title="Kairos Analytics Logo">
        <Sparkles size={24} color="#101010" fill="#101010" />
      </div>

      {/* Search Input Bar */}
      <div className="header-search-bar">
        <Search size={16} color="#8e8e93" />
        <input
          type="text"
          placeholder="Search anything here..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Header Right Action Icons */}
      <div className="header-actions">
        <button 
          className="icon-action-btn" 
          title="Messages"
          onClick={() => onOpenModal('Messages')}
        >
          <MessageSquare size={18} />
        </button>

        <button 
          className="icon-action-btn" 
          title="Notifications"
          onClick={() => onOpenModal('Notifications')}
        >
          <Bell size={18} />
          <span className="notif-dot" />
        </button>

        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
          alt="User Profile"
          className="avatar-img"
          onClick={() => onOpenModal('Profile')}
          title="User Account"
        />
      </div>
    </header>
  );
}
