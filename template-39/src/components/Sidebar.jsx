import React, { useState } from 'react';
import { 
  Home, 
  Inbox, 
  Calendar, 
  Sparkles, 
  Users2, 
  Plus, 
  MoreHorizontal, 
  GripVertical, 
  Asterisk, 
  Compass, 
  SunMedium, 
  MessageSquarePlus, 
  Settings, 
  HelpCircle, 
  ChevronsUpDown,
  Check,
  X
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/workspaceData';

export default function Sidebar({ 
  activeProject, 
  setActiveProject, 
  onOpenDM, 
  onNewMessage, 
  onNewProject,
  isOpen,
  onClose 
}) {
  const [activeNav, setActiveNav] = useState('projects');
  const [workspaceMenuOpen, setWorkspaceMenuOpen] = useState(false);

  const generalItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'inbox', label: 'Inbox', icon: Inbox, badge: '3' },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'automation', label: 'Automation', icon: Sparkles },
    { id: 'team', label: 'Team Settings', icon: Users2 },
  ];

  const projects = [
    { id: 'q3', name: 'Q3 Roadmap', icon: Compass, color: 'text-emerald-500' },
    { id: 'launch', name: 'Product Launch 2026', icon: Asterisk, color: 'text-blue-600', isDefault: true },
    { id: 'marketing', name: 'Marketing Campaign', icon: SunMedium, color: 'text-amber-500' },
  ];

  const dmContacts = [
    { email: 'alexandra@gmail.com', user: TEAM_MEMBERS[1] },
    { email: 'hellosajibur@gmail.com', user: TEAM_MEMBERS[0] },
    { email: 'mophia.chen@domain.org', user: TEAM_MEMBERS[2] },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top Workspace Header */}
        <div>
          <div className="p-4 border-b border-slate-100 flex items-center justify-between relative">
            <button 
              onClick={() => setWorkspaceMenuOpen(!workspaceMenuOpen)}
              className="flex items-center gap-3 w-full text-left hover:bg-slate-50 p-1.5 rounded-xl transition group"
            >
              {/* Oripio Logo Mark */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-sm text-white relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 truncate flex items-center gap-1.5">
                  Oripio Design
                </div>
                <div className="text-[11px] font-medium text-slate-400 tracking-wide">
                  Team Plan
                </div>
              </div>

              <ChevronsUpDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition flex-shrink-0" />
            </button>

            {/* Close button on mobile */}
            <button 
              onClick={onClose}
              className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Workspace Switcher Dropdown */}
            {workspaceMenuOpen && (
              <div className="absolute top-16 left-3 right-3 bg-white border border-slate-200 shadow-xl rounded-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Switch Workspace
                </div>
                <div className="p-2 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-between text-xs font-semibold text-blue-900 mb-1">
                  <span>Oripio Design (Active)</span>
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div className="p-2 rounded-xl hover:bg-slate-50 flex items-center justify-between text-xs font-medium text-slate-600 cursor-pointer transition">
                  <span>Acme Studio Labs</span>
                </div>
                <div className="p-2 rounded-xl hover:bg-slate-50 flex items-center justify-between text-xs font-medium text-slate-600 cursor-pointer transition">
                  <span>Personal Sandbox</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Scrollable Body */}
          <div className="px-3 py-3 overflow-y-auto max-h-[calc(100vh-210px)] space-y-6">
            
            {/* GENERAL SECTION */}
            <div>
              <div className="flex items-center justify-between px-3 mb-1.5">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">General</span>
                <button className="text-slate-400 hover:text-slate-600 transition p-0.5 rounded hover:bg-slate-100">
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>
              <nav className="space-y-0.5">
                {generalItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveNav(item.id)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition group
                        ${isActive 
                          ? 'bg-slate-100 text-slate-900 font-semibold' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* PROJECTS SECTION */}
            <div>
              <div className="flex items-center justify-between px-3 mb-1.5">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Projects</span>
                <button 
                  onClick={onNewProject}
                  title="Create new project"
                  className="text-slate-400 hover:text-blue-600 transition p-0.5 rounded hover:bg-blue-50"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1">
                {projects.map((proj) => {
                  const Icon = proj.icon;
                  const isActive = activeProject === proj.name;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setActiveProject(proj.name)}
                      className={`
                        w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition text-left relative group
                        ${isActive 
                          ? 'bg-blue-50/80 text-blue-700 font-semibold border-l-[3px] border-blue-600 rounded-l-none pl-2 shadow-xs' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <GripVertical className="w-3 h-3 text-slate-300 opacity-0 group-hover:opacity-100 transition flex-shrink-0 cursor-grab" />
                        <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-blue-600' : proj.color}`} />
                        <span className="truncate">{proj.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* DIRECT MESSAGES SECTION */}
            <div>
              <div className="flex items-center justify-between px-3 mb-1.5">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Direct Messages</span>
              </div>

              <div className="space-y-1">
                {dmContacts.map((contact, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOpenDM(contact.email)}
                    className="w-full flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition text-left group"
                  >
                    <div className="relative flex-shrink-0">
                      {contact.user.initials === 'H' ? (
                        <div className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold shadow-2xs">
                          H
                        </div>
                      ) : (
                        <img 
                          src={contact.user.avatar} 
                          alt={contact.user.name} 
                          className="w-5 h-5 rounded-full object-cover shadow-2xs" 
                        />
                      )}
                      {contact.user.online && (
                        <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white" />
                      )}
                    </div>
                    <span className="truncate text-slate-600 group-hover:text-slate-900 text-xs font-normal">
                      {contact.email}
                    </span>
                  </button>
                ))}

                <button
                  onClick={onNewMessage}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Message</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* SYSTEM SECTION (Pinned to Bottom) */}
        <div className="p-3 border-t border-slate-100 bg-white">
          <div className="px-3 mb-1">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">System</span>
          </div>
          <div className="space-y-0.5">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Help Center</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
