import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Check, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { INITIAL_CATEGORIES } from '../data/calendarData';

export default function CalendarSidebar({
  selectedDate = 20,
  setSelectedDate,
  selectedCategory,
  setSelectedCategory,
  onOpenReminderModal,
}) {
  const [currentMonthYear, setCurrentMonthYear] = useState({ month: 'January', year: 2026 });
  const [tasksAccordionOpen, setTasksAccordionOpen] = useState(true);
  const [favoritesAccordionOpen, setFavoritesAccordionOpen] = useState(false);
  const [categoriesAccordionOpen, setCategoriesAccordionOpen] = useState(true);

  // Checkbox states
  const [checkedItems, setCheckedItems] = useState({
    dailyTasks: true,
    birthdays: false,
    tasks: false,
  });

  const toggleCheckbox = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // January 2026 Calendar days matrix:
  // Mo Tu We Th Fr Sa Su
  // Dec 28, 29, 30, 31 (faded)
  // Jan 1 to 31
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const calendarDays = [
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true }, // Default selected in mockup
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true }, // Highlighted ring in mockup
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
  ];

  return (
    <div className="w-full lg:w-76 xl:w-80 flex flex-col gap-3.5 shrink-0 select-none">
      {/* 1. Mini Calendar Widget */}
      <div className="bg-[#13141c] rounded-[26px] p-4 sm:p-5 border border-[#1f212d] shadow-md">
        {/* Month Title & Chevron Navigation */}
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            {currentMonthYear.month} {currentMonthYear.year}
          </h3>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentMonthYear((prev) => ({ ...prev, month: 'December', year: 2025 }))}
              aria-label="Previous month"
              className="w-7 h-7 rounded-lg hover:bg-[#20222f] text-[#8e92a8] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentMonthYear((prev) => ({ ...prev, month: 'February', year: 2026 }))}
              aria-label="Next month"
              className="w-7 h-7 rounded-lg hover:bg-[#20222f] text-[#8e92a8] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Day of Week Headers */}
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {daysOfWeek.map((d) => (
            <span key={d} className="text-[11px] font-medium text-[#64677d]">
              {d}
            </span>
          ))}
        </div>

        {/* Date Numbers Matrix */}
        <div className="grid grid-cols-7 gap-y-1.5 gap-x-1 text-center">
          {calendarDays.map((item, idx) => {
            const isSelected = item.isCurrentMonth && item.day === selectedDate;
            const isDay24 = item.isCurrentMonth && item.day === 24;

            return (
              <button
                key={idx}
                onClick={() => {
                  if (item.isCurrentMonth && setSelectedDate) {
                    setSelectedDate(item.day);
                  }
                }}
                className={`relative w-8 h-8 mx-auto flex items-center justify-center rounded-full text-xs transition-all duration-150 ${
                  !item.isCurrentMonth
                    ? 'text-[#474a5e] cursor-default'
                    : isSelected
                    ? 'bg-[#6d5dfc] text-white font-bold shadow-md shadow-[#6d5dfc]/40 scale-105'
                    : isDay24
                    ? 'border border-[#6d5dfc] text-[#9b8ffc] font-semibold hover:bg-[#6d5dfc]/20'
                    : 'text-[#d4d6e4] hover:bg-[#20222e] hover:text-white'
                }`}
              >
                {item.day}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Tasks / Checklist Accordion ("January 2026") */}
      <div className="bg-[#13141c] rounded-[24px] px-4 py-3 border border-[#1f212d] shadow-sm transition-colors">
        <button
          onClick={() => setTasksAccordionOpen(!tasksAccordionOpen)}
          className="w-full flex items-center justify-between text-left py-1 group"
        >
          <span className="text-xs font-semibold text-white tracking-wide group-hover:text-[#8278f8] transition-colors">
            January 2026
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#7b7e94] group-hover:text-white transition-transform duration-200 ${
              tasksAccordionOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {tasksAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2.5 pb-1 flex flex-col gap-2.5">
                {[
                  { id: 'dailyTasks', label: 'Daily Tasks' },
                  { id: 'birthdays', label: 'Birthdays' },
                  { id: 'tasks', label: 'Tasks' },
                ].map((task) => {
                  const isChecked = checkedItems[task.id];
                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleCheckbox(task.id)}
                      className="flex items-center gap-3 cursor-pointer group py-0.5"
                    >
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center transition-all ${
                          isChecked
                            ? 'bg-[#6d5dfc] text-white shadow-sm shadow-[#6d5dfc]/30'
                            : 'border border-[#34374a] group-hover:border-[#6d5dfc]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span
                        className={`text-xs transition-colors ${
                          isChecked ? 'text-gray-200 font-medium' : 'text-[#8c90a5] group-hover:text-white'
                        }`}
                      >
                        {task.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Favorites Accordion */}
      <div className="bg-[#13141c] rounded-[24px] px-4 py-3 border border-[#1f212d] shadow-sm">
        <button
          onClick={() => setFavoritesAccordionOpen(!favoritesAccordionOpen)}
          className="w-full flex items-center justify-between text-left py-1 group"
        >
          <span className="text-xs font-semibold text-white tracking-wide group-hover:text-[#8278f8] transition-colors">
            Favorites
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#7b7e94] group-hover:text-white transition-transform duration-200 ${
              favoritesAccordionOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {favoritesAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-1 flex flex-col gap-2 text-xs text-[#8c90a5]">
                <div className="flex items-center justify-between hover:text-white cursor-pointer py-1">
                  <span>⭐ Design System Sprint</span>
                  <span className="text-[10px] text-[#6d5dfc]">Active</span>
                </div>
                <div className="flex items-center justify-between hover:text-white cursor-pointer py-1">
                  <span>📁 Client Proposals</span>
                  <span className="text-[10px] text-gray-500">3 tasks</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Categories Accordion with Progress Indicators */}
      <div className="bg-[#13141c] rounded-[24px] px-4 py-3 border border-[#1f212d] shadow-sm">
        <button
          onClick={() => setCategoriesAccordionOpen(!categoriesAccordionOpen)}
          className="w-full flex items-center justify-between text-left py-1 group"
        >
          <span className="text-xs font-semibold text-white tracking-wide group-hover:text-[#8278f8] transition-colors">
            Categories
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#7b7e94] group-hover:text-white transition-transform duration-200 ${
              categoriesAccordionOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {categoriesAccordionOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2.5 pb-1 flex flex-col gap-3">
                {INITIAL_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      onClick={() =>
                        setSelectedCategory(isActive ? null : cat.id)
                      }
                      className={`cursor-pointer group flex items-center gap-3 p-1 rounded-xl transition-all ${
                        isActive ? 'bg-[#1e202c]' : 'hover:bg-[#181923]'
                      }`}
                      title={`Filter by ${cat.name}`}
                    >
                      <div className="flex items-center gap-2 w-20 shrink-0">
                        <span
                          className={`w-2 h-2 rounded-full ${cat.dotColor} group-hover:scale-125 transition-transform`}
                        ></span>
                        <span className="text-xs text-[#d1d3e2] group-hover:text-white font-medium">
                          {cat.name}
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="flex-1 h-1.5 bg-[#252838] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${cat.progress}%`,
                            backgroundColor: cat.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 5. Bottom Reminder Card ("Meet Gabriel at the International Library") */}
      <div className="relative bg-[#14151e] rounded-[24px] p-4 border border-[#232534] shadow-lg overflow-hidden group">
        {/* Subtle background glow */}
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#8278f8]/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-medium text-[#7d8096]">
            12:00 - 13:30
          </span>
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#8278f8]/15 border border-[#8278f8]/30 text-[#b5a7ff] text-[11px] font-medium">
            <Clock className="w-3 h-3" />
            <span>14 min</span>
          </div>
        </div>

        {/* Content Body with 3D Book Graphic */}
        <div className="flex items-center justify-between gap-2 mt-1">
          <div className="flex-1 pr-1">
            <h4 className="text-sm font-semibold text-white leading-snug tracking-tight">
              Meat Gabriel at the International Library
            </h4>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-3.5">
              <button
                type="button"
                onClick={() => alert('Reminder postponed by 30 minutes.')}
                className="px-3.5 py-1 rounded-full bg-[#1c1d27] hover:bg-[#252736] border border-[#2b2e40] text-[11px] font-medium text-gray-300 hover:text-white transition-all active:scale-95"
              >
                Later
              </button>
              <button
                type="button"
                onClick={onOpenReminderModal}
                className="px-4 py-1 rounded-full bg-[#6d5dfc] hover:bg-[#7b6dfc] text-white text-[11px] font-semibold shadow-md shadow-[#6d5dfc]/35 transition-all active:scale-95"
              >
                Details
              </button>
            </div>
          </div>

          {/* 3D Book Image Graphic */}
          <div className="w-20 h-20 shrink-0 relative flex items-center justify-center">
            <img
              src="/assets/open-book.jpg"
              alt="International Library Meeting"
              className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
