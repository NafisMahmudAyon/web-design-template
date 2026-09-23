import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Users, Clock, MapPin, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { WEEK_DAYS, INITIAL_EVENTS } from '../data/calendarData';

export default function ScheduleBoard({
  events = INITIAL_EVENTS,
  selectedCategory,
  onSelectEvent,
  onAddEventClick,
  onJoinMeetingClick,
}) {
  const [activeView, setActiveView] = useState('Week'); // Month | Week | Day
  const [selectedDayIndex, setSelectedDayIndex] = useState(2); // thu 20
  const [weekOffset, setWeekOffset] = useState(0);

  // Time grid rows
  const timeLabels = ['8 am', '9 am', '10 am', '11 am', '12 am'];

  // Filter events based on active category if selected
  const filteredEvents = events.filter((evt) => {
    if (!selectedCategory) return true;
    return evt.category === selectedCategory;
  });

  // Color classes map for cards
  const getColorStyles = (colorTheme) => {
    switch (colorTheme) {
      case 'purple':
        return {
          bg: 'bg-[#8272f6]',
          hover: 'hover:bg-[#7766f5]',
          badge: 'bg-white/25 text-white',
          shadow: 'hover:shadow-[#8272f6]/40',
        };
      case 'amber':
        return {
          bg: 'bg-[#fba53e]',
          hover: 'hover:bg-[#f69829]',
          badge: 'bg-white/25 text-white',
          shadow: 'hover:shadow-[#fba53e]/40',
        };
      case 'blue':
      default:
        return {
          bg: 'bg-[#2aa8ff]',
          hover: 'hover:bg-[#1e9cf0]',
          badge: 'bg-white/25 text-white',
          shadow: 'hover:shadow-[#2aa8ff]/40',
        };
    }
  };

  return (
    <div className="flex-1 flex flex-col calendar-gradient rounded-[32px] sm:rounded-[36px] p-4 sm:p-6 shadow-xl border border-white/20 min-w-0">
      {/* 1. Top Bar: Month, Navigation, Join & View Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 select-none">
        {/* Left: Month Title, Today pill, and Chevrons */}
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
            January 2026
          </h2>

          <button
            type="button"
            onClick={() => {
              setWeekOffset(0);
              setSelectedDayIndex(2);
            }}
            className="px-3.5 py-1 rounded-full bg-black hover:bg-black/80 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
          >
            Today
          </button>

          <div className="flex items-center gap-1 ml-1 text-white/90">
            <button
              onClick={() => setWeekOffset((prev) => prev - 1)}
              aria-label="Previous week"
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors active:scale-90"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setWeekOffset((prev) => prev + 1)}
              aria-label="Next week"
              className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors active:scale-90"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right: Join Button & View Switcher */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onJoinMeetingClick}
            className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-black hover:bg-black/85 text-white text-xs font-semibold shadow-lg transition-all active:scale-95"
          >
            <Video className="w-3.5 h-3.5" />
            <span>Join</span>
          </button>

          {/* View Switcher Pill */}
          <div className="flex items-center bg-black/15 backdrop-blur-md border border-white/25 p-1 rounded-full text-xs font-medium text-white/85">
            {['Month', 'Week', 'Day'].map((view) => {
              const isActive = activeView === view;
              return (
                <button
                  key={view}
                  onClick={() => setActiveView(view)}
                  className={`px-3.5 py-1 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-gray-900 font-bold shadow-sm'
                      : 'hover:text-white'
                  }`}
                >
                  {view}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Days Strip (Header of the schedule grid) */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 select-none overflow-x-auto pb-1 no-scrollbar">
        {/* GMT+3 Vertical Badge */}
        <div className="shrink-0 flex items-center justify-center w-8 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
          <span className="writing-vertical-rl rotate-180">GMT+3</span>
        </div>

        {/* Week Day Pills */}
        <div className="flex-1 grid grid-cols-6 gap-2 min-w-[540px]">
          {WEEK_DAYS.map((item, idx) => {
            const isSelected = selectedDayIndex === idx;
            return (
              <button
                key={item.day}
                onClick={() => setSelectedDayIndex(idx)}
                className={`flex items-baseline justify-center gap-1.5 py-2 px-2.5 rounded-2xl transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white/35 backdrop-blur-md border-white text-white shadow-lg scale-[1.02]'
                    : 'bg-white/15 hover:bg-white/25 backdrop-blur-md border-white/20 text-white/90 hover:text-white'
                }`}
              >
                <span className="text-xs font-normal lowercase opacity-90">{item.day}</span>
                <span className="text-lg font-bold tracking-tight">{item.date}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Schedule Canvas (Main Timetable Surface) */}
      <div className="relative flex-1 bg-[#fbf5f4]/95 backdrop-blur-xl rounded-[28px] p-4 sm:p-6 shadow-inner border border-white/60 overflow-hidden flex flex-col min-h-[580px]">
        {/* Inner Scrollable Track for Columns */}
        <div className="relative flex-1 flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar min-w-[580px]">
          {/* Y-Axis Hourly Labels Column */}
          <div className="w-12 shrink-0 flex flex-col justify-between py-2 text-right pr-2 select-none">
            {timeLabels.map((hour) => (
              <div key={hour} className="text-xs font-semibold text-[#8d90a4]">
                {hour}
              </div>
            ))}
          </div>

          {/* Timetable Grid Columns (6 days) */}
          <div className="relative flex-1 grid grid-cols-6 gap-2 sm:gap-2.5 h-full">
            {/* Horizontal Guide Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-4">
              {timeLabels.map((_, index) => (
                <div key={index} className="w-full border-b border-[#ebdcd8]/70"></div>
              ))}
            </div>

            {/* Column Tracks */}
            {WEEK_DAYS.map((_, colIdx) => (
              <div
                key={colIdx}
                className="relative h-full flex flex-col gap-2 rounded-xl"
              >
                {/* Render cards belonging to this column */}
                {filteredEvents
                  .filter((e) => e.dayIndex === colIdx)
                  .map((evt) => {
                    const style = getColorStyles(evt.colorTheme);
                    return (
                      <motion.div
                        key={evt.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        onClick={() => onSelectEvent(evt)}
                        className={`cursor-pointer rounded-2xl p-2.5 text-white ${style.bg} ${style.hover} shadow-md ${style.shadow} transition-all duration-200 flex flex-col justify-between group select-none border border-white/20`}
                        style={{
                          minHeight: `${Math.max(78, (evt.spanRows || 1.6) * 44)}px`,
                        }}
                      >
                        {/* Top: Time Badge */}
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${style.badge}`}
                          >
                            {evt.time}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="my-1.5">
                          <h4 className="text-xs font-semibold text-white leading-snug tracking-tight line-clamp-2">
                            {evt.title}
                          </h4>
                        </div>

                        {/* Attendees Avatars Stack */}
                        <div className="flex items-center justify-between">
                          {evt.attendees && evt.attendees.length > 0 ? (
                            <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                              {evt.attendees.map((avatarUrl, aIdx) => (
                                <img
                                  key={aIdx}
                                  src={avatarUrl}
                                  alt="Attendee"
                                  className="w-5 h-5 rounded-full object-cover ring-1.5 ring-white/90 shadow-sm"
                                />
                              ))}
                            </div>
                          ) : (
                            <span className="text-[9px] text-white/70 font-medium italic">
                              Personal
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}

                {/* Add Event Slot Button (shown in Column 3 / Thursday in the mockup) */}
                {colIdx === 3 && (
                  <button
                    type="button"
                    onClick={onAddEventClick}
                    className="w-full h-18 rounded-2xl border-2 border-dashed border-[#decfcb] hover:border-[#8272f6] bg-[#f5edea]/50 hover:bg-white/60 flex items-center justify-center text-[#8e8b9a] hover:text-[#8272f6] transition-all duration-200 group active:scale-95"
                    title="Add Schedule Slot"
                  >
                    <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#8272f6] text-[#7d7a8c] group-hover:text-white flex items-center justify-center shadow-sm transition-all">
                      <Plus className="w-4 h-4" />
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
