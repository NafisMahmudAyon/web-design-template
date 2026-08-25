import React, { useState, useRef, useEffect } from 'react';
import { 
  Shield, Bell, Search, User, Check, X, 
  Settings, Layout, Key, LogOut, Sliders, Calendar, ChevronRight
} from 'lucide-react';

export default function Header() {
  const [activeTab, setActiveTab] = useState('Analytics');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [activePopup, setActivePopup] = useState(null); // 'notifications' | 'search' | 'profile' | null
  const [unreadCount, setUnreadCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('All');

  const tabs = ['Overview', 'Analytics', 'Monitoring', 'Statistics'];
  const tabRefs = useRef([]);
  const containerRef = useRef(null);
  const popupRef = useRef(null);

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const currentTabName = hoveredTab !== null ? hoveredTab : activeTab;

  useEffect(() => {
    const currentIndex = tabs.indexOf(currentTabName);
    const currentBtn = tabRefs.current[currentIndex];
    const container = containerRef.current;

    if (currentBtn && container) {
      const btnRect = currentBtn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setIndicatorStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    }
  }, [currentTabName]);

  // Close popup on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setActivePopup(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePopup = (popupName) => {
    if (activePopup === popupName) {
      setActivePopup(null);
    } else {
      setActivePopup(popupName);
    }
  };

  const notifications = [
    {
      id: 1,
      icon: Calendar,
      title: 'Argentina vs Jordan Kickoff',
      time: '10 min ago',
      desc: 'Match 28 scheduled at Dallas AT&T Stadium.',
      unread: true,
      tag: 'Match'
    },
    {
      id: 2,
      icon: Sliders,
      title: 'VAR System Offline Alert',
      time: '25 min ago',
      desc: 'Scheduled maintenance from 02:00 to 04:00 UTC.',
      unread: true,
      tag: 'Alert'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Phase 2 Special Ticket Sales',
      time: '1 hour ago',
      desc: 'Special promotional window ends 10th July 2026.',
      unread: true,
      tag: 'Promo'
    }
  ];

  const searchResults = [
    { type: 'Match', title: 'Argentina vs Jordan', sub: 'Jun 28, 08:00 AM • Dallas Stadium' },
    { type: 'Team', title: 'Brazil (BRA)', sub: 'Group C • Qualification Probability 87%' },
    { type: 'Venue', title: 'AT&T Stadium', sub: 'Dallas, USA • Capacity 80,000' },
    { type: 'Stat', title: 'Goals Production', sub: '89 Total Goals • 32 Matches Played' },
  ].filter(item => 
    searchFilter === 'All' || item.type === searchFilter
  ).filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.sub.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="header-nav" ref={popupRef}>
      {/* Brand Logo */}
      <div className="brand-logo">
        <div className="brand-icon">
          <Shield size={20} color="#ffffff" />
        </div>
        <span>Kairos</span>
      </div>

      {/* Navigation Pills with Sliding Blue Glow Indicator */}
      <nav 
        className="nav-pills" 
        ref={containerRef}
        onMouseLeave={() => setHoveredTab(null)}
      >
        {/* Sliding Blue Background Pill */}
        <div
          className="sliding-pill-bg"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity,
          }}
        />

        {tabs.map((tab, idx) => {
          const isActive = activeTab === tab;
          const isHovered = hoveredTab === tab;

          return (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[idx] = el)}
              className={`nav-pill-btn ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredTab(tab)}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          );
        })}
      </nav>

      {/* Header Right Action Icons */}
      <div className="header-right" style={{ position: 'relative' }}>
        {/* 1. Notification Bell Button */}
        <button 
          className={`icon-circle-btn ${activePopup === 'notifications' ? 'is-popup-open' : ''}`} 
          onClick={() => togglePopup('notifications')}
          title="Notifications"
        >
          <Bell size={18} />
          {unreadCount > 0 && <span className="notification-badge" />}
        </button>

        {/* 2. Search Button */}
        <button 
          className={`icon-circle-btn ${activePopup === 'search' ? 'is-popup-open' : ''}`} 
          onClick={() => togglePopup('search')}
          title="Search"
        >
          <Search size={18} />
        </button>

        {/* 3. User Profile Avatar */}
        <div className="avatar-wrapper" onClick={() => togglePopup('profile')}>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="User Profile"
            className={`user-avatar ${activePopup === 'profile' ? 'avatar-active' : ''}`}
          />
          <span className="online-indicator" />
        </div>

        {/* ================= POPUPS ================= */}

        {/* NOTIFICATION POPUP */}
        {activePopup === 'notifications' && (
          <div className="header-popup-menu notification-popup">
            <div className="popup-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>Notifications</h4>
                {unreadCount > 0 && (
                  <span className="badge-pill badge-green">{unreadCount} New</span>
                )}
              </div>
              {unreadCount > 0 && (
                <button className="popup-link-btn" onClick={() => setUnreadCount(0)}>
                  Mark all read
                </button>
              )}
            </div>

            <div className="popup-scroll-list">
              {notifications.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="popup-item notif-item">
                    <div className="notif-icon-circle">
                      <Icon size={15} color="#00d2ff" />
                    </div>
                    <div className="notif-content">
                      <div className="notif-top">
                        <span className="notif-title">{item.title}</span>
                        <span className="notif-time">{item.time}</span>
                      </div>
                      <p className="notif-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="popup-footer">
              <button className="popup-action-btn" onClick={() => setActivePopup(null)}>
                View All Activity Logs
              </button>
            </div>
          </div>
        )}

        {/* SEARCH POPUP */}
        {activePopup === 'search' && (
          <div className="header-popup-menu search-popup">
            <div className="popup-search-bar">
              <Search size={16} color="var(--text-sub)" />
              <input
                type="text"
                placeholder="Search matches, teams, venues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="popup-search-input"
              />
              {searchQuery && (
                <button className="close-btn" onClick={() => setSearchQuery('')}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Quick Filter Tags */}
            <div className="search-filter-tags">
              {['All', 'Match', 'Team', 'Venue', 'Stat'].map((tag) => (
                <button
                  key={tag}
                  className={`tag-btn ${searchFilter === tag ? 'active' : ''}`}
                  onClick={() => setSearchFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Search Results List */}
            <div className="popup-scroll-list">
              {searchResults.length > 0 ? (
                searchResults.map((res, idx) => (
                  <div key={idx} className="popup-item search-result-item">
                    <div className="search-res-left">
                      <span className="search-res-type">{res.type}</span>
                      <span className="search-res-title">{res.title}</span>
                      <span className="search-res-sub">{res.sub}</span>
                    </div>
                    <ChevronRight size={14} color="var(--text-muted)" />
                  </div>
                ))
              ) : (
                <div className="empty-search">No matching stats found</div>
              )}
            </div>
          </div>
        )}

        {/* PROFILE POPUP */}
        {activePopup === 'profile' && (
          <div className="header-popup-menu profile-popup">
            <div className="profile-user-card">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Alex Rivera"
                className="profile-card-img"
              />
              <div className="profile-user-info">
                <span className="profile-name">Alex Rivera</span>
                <span className="profile-role">Chief Analytics Lead</span>
                <span className="profile-email">alex.rivera@kairos.io</span>
              </div>
            </div>

            <div className="profile-menu-list">
              <button className="profile-menu-item" onClick={() => setActivePopup(null)}>
                <User size={16} />
                <span>My Profile & Settings</span>
              </button>
              <button className="profile-menu-item" onClick={() => setActivePopup(null)}>
                <Layout size={16} />
                <span>Dashboard Layouts</span>
              </button>
              <button className="profile-menu-item" onClick={() => setActivePopup(null)}>
                <Key size={16} />
                <span>API Keys & Security</span>
              </button>
              <button className="profile-menu-item" onClick={() => setActivePopup(null)}>
                <Settings size={16} />
                <span>System Preferences</span>
              </button>
              <div className="menu-divider" />
              <button className="profile-menu-item text-red" onClick={() => setActivePopup(null)}>
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
