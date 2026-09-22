import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import ProjectSubheader from './components/ProjectSubheader';
import ViewToolbar from './components/ViewToolbar';
import TaskListView from './components/TaskListView';
import TaskKanbanView from './components/TaskKanbanView';
import TaskCalendarView from './components/TaskCalendarView';
import CreateTaskModal from './components/CreateTaskModal';
import TaskDetailModal from './components/TaskDetailModal';
import InviteModal from './components/InviteModal';
import CommandPalette from './components/CommandPalette';
import DirectMessageModal from './components/DirectMessageModal';
import NotificationPopover from './components/NotificationPopover';
import { INITIAL_TASKS, NOTIFICATIONS } from './data/workspaceData';

export default function App() {
  const [activeProject, setActiveProject] = useState('Product Launch 2026');
  const [currentView, setCurrentView] = useState('list'); // 'list' | 'kanban' | 'calendar'
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  // Modals & Drawers state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);
  const [createTaskStatus, setCreateTaskStatus] = useState('todo');
  const [selectedTask, setSelectedTask] = useState(null);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeDM, setActiveDM] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  // Keyboard shortcut listener for ⌘ K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleToggleTask = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const nextCompleted = !t.completed;
        return {
          ...t,
          completed: nextCompleted,
          status: nextCompleted ? 'completed' : 'todo',
        };
      }
      return t;
    }));
  };

  const handleAddTask = (newTask) => {
    setTasks(prev => [newTask, ...prev]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
    setSelectedTask(updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    setSelectedTask(null);
  };

  const handleMoveTaskStatus = (taskId, newStatus) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        return {
          ...t,
          status: newStatus,
          completed: newStatus === 'completed',
        };
      }
      return t;
    }));
  };

  const handleOpenCreateWithStatus = (statusId) => {
    setCreateTaskStatus(statusId);
    setCreateTaskModalOpen(true);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-[#EBECEF] p-0 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center font-sans antialiased text-slate-800">
      {/* Outer Workspace Frame matching Figma Mockup */}
      <div className="w-full max-w-[1580px] bg-white rounded-none sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden flex min-h-[920px] relative">
        
        {/* Left Fixed / Collapsible Sidebar */}
        <Sidebar
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          onOpenDM={(email) => setActiveDM(email)}
          onNewMessage={() => setActiveDM('alexandra@gmail.com')}
          onNewProject={() => alert('New project dialog')}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Right Main Application Area */}
        <div className="flex-1 flex flex-col min-w-0 lg:pl-64 bg-[#FCFCFD]">
          {/* Top Header Bar */}
          <TopHeader
            onToggleSidebar={() => setSidebarOpen(true)}
            onOpenNotifications={() => setNotificationsOpen(prev => !prev)}
            notificationCount={unreadCount}
            activeProject={activeProject}
          />

          {/* Main Dashboard Canvas */}
          <main className="flex-1 px-4 sm:px-6 md:px-8 py-2 overflow-y-auto">
            {/* Project Subheader */}
            <ProjectSubheader
              projectName={activeProject}
              onOpenInvite={() => setInviteModalOpen(true)}
            />

            {/* Views Switcher & Search Controls Bar */}
            <ViewToolbar
              currentView={currentView}
              setCurrentView={setCurrentView}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              onCreateTask={() => {
                setCreateTaskStatus('todo');
                setCreateTaskModalOpen(true);
              }}
              onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            />

            {/* View Render */}
            {currentView === 'list' && (
              <TaskListView
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onSelectTask={(task) => setSelectedTask(task)}
                onCreateTaskWithStatus={handleOpenCreateWithStatus}
                searchQuery={searchQuery}
                priorityFilter={priorityFilter}
              />
            )}

            {currentView === 'kanban' && (
              <TaskKanbanView
                tasks={tasks}
                onSelectTask={(task) => setSelectedTask(task)}
                onCreateTaskWithStatus={handleOpenCreateWithStatus}
                onMoveTaskStatus={handleMoveTaskStatus}
              />
            )}

            {currentView === 'calendar' && (
              <TaskCalendarView
                tasks={tasks}
                onSelectTask={(task) => setSelectedTask(task)}
              />
            )}
          </main>
        </div>
      </div>

      {/* Global Modals & Interactive Overlays */}
      <CreateTaskModal
        isOpen={createTaskModalOpen}
        onClose={() => setCreateTaskModalOpen(false)}
        onAddTask={handleAddTask}
        initialStatus={createTaskStatus}
      />

      <TaskDetailModal
        task={selectedTask}
        isOpen={!!selectedTask}
        onClose={() => setSelectedTask(null)}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />

      <InviteModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        tasks={tasks}
        onSelectTask={(task) => setSelectedTask(task)}
        onCreateTask={() => {
          setCreateTaskStatus('todo');
          setCreateTaskModalOpen(true);
        }}
        onChangeView={(view) => setCurrentView(view)}
      />

      <DirectMessageModal
        contactEmail={activeDM}
        isOpen={!!activeDM}
        onClose={() => setActiveDM(null)}
      />

      <NotificationPopover
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllRead={handleMarkAllRead}
      />
    </div>
  );
}
