import React, { useState } from 'react';
import { 
  LayoutGrid, FileText, Folder, Users, 
  Clock, User, Inbox, Target, LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('grid');

  const navItems = [
    { id: 'grid', icon: LayoutGrid, label: 'Dashboard' },
    { id: 'files', icon: FileText, label: 'Invoices & Reports' },
    { id: 'folder', icon: Folder, label: 'Projects' },
    { id: 'users', icon: Users, label: 'Team' },
    { id: 'timer', icon: Clock, label: 'Time Tracking' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'inbox', icon: Inbox, label: 'Inbox' },
    { id: 'target', icon: Target, label: 'Goals' },
  ];

  return (
    <aside className="left-icon-sidebar">
      {/* Top Main Navigation Icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              className={`sidebar-icon-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
              title={item.label}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </div>

      {/* Bottom Exit / Logout Icon */}
      <button 
        className="sidebar-icon-btn" 
        title="Logout"
        onClick={() => alert('Signing out of Dashboard Overview...')}
      >
        <LogOut size={18} />
      </button>
    </aside>
  );
}
