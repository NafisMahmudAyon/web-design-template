import React, { useState } from 'react';
import Header from './components/Header';
import SlimSidebar from './components/SlimSidebar';
import CalendarSidebar from './components/CalendarSidebar';
import ScheduleBoard from './components/ScheduleBoard';
import EventModal from './components/EventModal';
import NotificationsModal from './components/NotificationsModal';
import { INITIAL_EVENTS } from './data/calendarData';

export default function App() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedContactId, setSelectedContactId] = useState(null);

  // Modal States
  const [eventModalState, setEventModalState] = useState({
    isOpen: false,
    mode: 'view', // 'view' | 'create'
    event: null,
  });

  const [notificationsModal, setNotificationsModal] = useState({
    isOpen: false,
    tab: 'bell',
  });

  // Filter events based on search query AND active category
  const filteredEvents = events.filter((evt) => {
    const matchesCategory = !selectedCategory || evt.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectEvent = (event) => {
    setEventModalState({
      isOpen: true,
      mode: 'view',
      event,
    });
  };

  const handleAddEventClick = () => {
    setEventModalState({
      isOpen: true,
      mode: 'create',
      event: null,
    });
  };

  const handleSaveNewEvent = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const handleDeleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const handleOpenReminderModal = () => {
    setEventModalState({
      isOpen: true,
      mode: 'view',
      event: {
        id: 'reminder-1',
        title: 'Meet Gabriel at the International Library',
        time: '12:00 - 13:30',
        startTime: '12:00 PM',
        endTime: '1:30 PM',
        dayIndex: 2,
        colorTheme: 'purple',
        category: 'work',
        location: 'Central International Library, Main Atrium 4B',
        description: 'Design system review and book research on architectural typography and grid layouts.',
        attendees: [
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        ],
      },
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#e6e5ee] flex items-center justify-center p-2 sm:p-4 md:p-8 font-sans antialiased selection:bg-[#8278f8] selection:text-white">
      {/* Outer Sleek Dark Tablet Frame */}
      <main className="w-full max-w-[1460px] bg-[#0c0d12] rounded-[32px] sm:rounded-[44px] p-3.5 sm:p-5 md:p-6 border border-[#1d1f2b] shadow-2xl shadow-black/35 flex flex-col gap-4">
        {/* Top Header */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onOpenNotifications={(tab) => setNotificationsModal({ isOpen: true, tab })}
        />

        {/* Dashboard Main Workspace Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4 min-w-0">
          {/* Leftmost Slim Strip (App Logo & Contacts) */}
          <div className="hidden sm:flex lg:flex shrink-0">
            <SlimSidebar
              selectedContactId={selectedContactId}
              onContactSelect={(contact) => {
                setSelectedContactId(
                  selectedContactId === contact.id ? null : contact.id
                );
              }}
            />
          </div>

          {/* Middle Calendar Sidebar Panel */}
          <CalendarSidebar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenReminderModal={handleOpenReminderModal}
          />

          {/* Right Main Schedule Board */}
          <ScheduleBoard
            events={filteredEvents}
            selectedCategory={selectedCategory}
            onSelectEvent={handleSelectEvent}
            onAddEventClick={handleAddEventClick}
            onJoinMeetingClick={() => {
              alert('Starting instant team video conference...');
            }}
          />
        </div>
      </main>

      {/* Event Details & Add Modal */}
      <EventModal
        isOpen={eventModalState.isOpen}
        mode={eventModalState.mode}
        event={eventModalState.event}
        onClose={() => setEventModalState({ isOpen: false, mode: 'view', event: null })}
        onSaveNewEvent={handleSaveNewEvent}
        onDeleteEvent={handleDeleteEvent}
      />

      {/* Notifications / Messages Flyout */}
      <NotificationsModal
        isOpen={notificationsModal.isOpen}
        activeTab={notificationsModal.tab}
        onClose={() => setNotificationsModal({ isOpen: false, tab: 'bell' })}
      />
    </div>
  );
}
