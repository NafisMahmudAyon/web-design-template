import React, { useState } from 'react';
import SidebarNav from './components/SidebarNav';
import CalendarHeader from './components/CalendarHeader';
import CalendarGrid from './components/CalendarGrid';
import ScheduledSidebar from './components/ScheduledSidebar';
import BrainstormModal from './components/BrainstormModal';
import MeetModal from './components/MeetModal';
import { initialCalendarData } from './data/calendarData';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('calendar');
  const [selectedDateKey, setSelectedDateKey] = useState('2025-09-08');
  const [selectedDateText, setSelectedDateText] = useState('8 September, 2025');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [isBrainstormOpen, setIsBrainstormOpen] = useState(true); // Open initially to match screenshot!
  const [isMeetOpen, setIsMeetOpen] = useState(false);
  const [activeMeetEvent, setActiveMeetEvent] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Agenda items state (reactive to user edits and date switching)
  const [agendaData, setAgendaData] = useState(initialCalendarData.agendaByDate);

  const handleSelectDate = (dateKey, dayNumber) => {
    setSelectedDateKey(dateKey);
    const month = initialCalendarData.currentMonth;
    const year = initialCalendarData.currentYear;
    setSelectedDateText(`${dayNumber} ${month}, ${year}`);
  };

  const handleOpenMeet = (event) => {
    setActiveMeetEvent(event);
    setIsMeetOpen(true);
  };

  const handleSaveEvent = (newEvent) => {
    const newId = `ev-${Date.now()}`;
    const formattedItem = {
      id: newId,
      timeSlot: newEvent.timeRange.split(' - ')[0] || '11:30',
      title: newEvent.title,
      subtitle: newEvent.note || 'Team collaborative session',
      timeRange: newEvent.timeRange,
      duration: '1h 30m',
      accentColor: '#F59E0B',
      attendeeText: 'Core UX Squad',
    };

    setAgendaData((prev) => ({
      ...prev,
      [selectedDateKey]: [...(prev[selectedDateKey] || []), formattedItem],
    }));

    setToastMessage(`Saved "${newEvent.title}" to ${selectedDateText}`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const currentAgenda = agendaData[selectedDateKey] || [];

  return (
    <div className="min-h-screen bg-[#0E1520] text-white flex items-center justify-center p-3 sm:p-6 lg:p-10 font-sans selection:bg-[#2B85FF] selection:text-white relative overflow-hidden">
      {/* Background Diagonal Abstract Graphic Layers matching mockup frame */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-32 -left-32 w-[900px] h-[340px] bg-gradient-to-r from-[#17273C] via-[#1E334D] to-[#121F30] -rotate-[22deg] transform" />
        <div className="absolute top-1/2 -right-40 w-[1100px] h-[280px] bg-gradient-to-r from-[#1E3450] via-[#17283D] to-transparent -rotate-[22deg] transform" />
        <div className="absolute -bottom-40 left-10 w-[1200px] h-[320px] bg-gradient-to-r from-[#152538] via-[#1A2E46] to-[#0E1825] -rotate-[22deg] transform" />
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#2B85FF]/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/6 blur-[180px] rounded-full" />
      </div>

      {/* Floating Main Application Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[1380px] bg-[#1A2230]/95 backdrop-blur-2xl rounded-3xl lg:rounded-4xl border border-[#283549] shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col lg:flex-row relative z-10"
      >
        {/* 1. Left Vertical Nav Rail */}
        <SidebarNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          user={initialCalendarData.user}
        />

        {/* 2. Center Content Area (Calendar Month View) */}
        <main className="flex-1 flex flex-col p-6 sm:p-8 bg-[#161E2C]/80 border-t lg:border-t-0 lg:border-l border-[#283549]/70 overflow-hidden">
          {/* Top Greeting & Search Header */}
          <CalendarHeader
            user={initialCalendarData.user}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Month Calendar Grid View */}
          <CalendarGrid
            selectedDateKey={selectedDateKey}
            onSelectDate={handleSelectDate}
            onOpenCreateEvent={() => setIsBrainstormOpen(true)}
            searchQuery={searchQuery}
          />
        </main>

        {/* 3. Right Sidebar ("Scheduled" Daily Agenda View) */}
        <ScheduledSidebar
          selectedDateText={selectedDateText}
          agendaItems={currentAgenda}
          onOpenMeet={handleOpenMeet}
          onEventClick={() => setIsBrainstormOpen(true)}
        />
      </motion.div>

      {/* 4. Brainstorm Session Modal */}
      <BrainstormModal
        isOpen={isBrainstormOpen}
        onClose={() => setIsBrainstormOpen(false)}
        initialDate="September 2, 2025"
        onSaveEvent={handleSaveEvent}
      />

      {/* 5. Google Meet Video Call Modal */}
      <MeetModal
        isOpen={isMeetOpen}
        onClose={() => setIsMeetOpen(false)}
        event={activeMeetEvent}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-[#1C2535] border border-[#2B85FF] text-white text-xs font-medium shadow-2xl flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#2B85FF] animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
