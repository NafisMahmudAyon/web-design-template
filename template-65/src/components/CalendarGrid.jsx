import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { initialCalendarData } from '../data/calendarData';

export default function CalendarGrid({
  selectedDateKey,
  onSelectDate,
  onOpenCreateEvent,
  searchQuery = '',
}) {
  const [currentMonth, setCurrentMonth] = useState('September');
  const [currentYear, setCurrentYear] = useState(2025);
  const [monthDropdown, setMonthDropdown] = useState(false);
  const [yearDropdown, setYearDropdown] = useState(false);

  return (
    <div className="flex-1 flex flex-col pt-4">
      {/* Month & Year Navigation Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Month Selector */}
          <div className="relative">
            <button
              onClick={() => {
                setMonthDropdown(!monthDropdown);
                setYearDropdown(false);
              }}
              className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-white hover:text-[#2B85FF] transition-colors cursor-pointer"
            >
              <span>{currentMonth}</span>
              <ChevronDown className="w-4 h-4 text-[#8B9CB2]" />
            </button>

            {monthDropdown && (
              <div className="absolute top-full left-0 mt-2 w-36 py-2 rounded-xl bg-[#1C2535] border border-[#283549] shadow-2xl z-30 max-h-48 overflow-y-auto">
                {initialCalendarData.months.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setCurrentMonth(m);
                      setMonthDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#2B85FF]/20 hover:text-white transition-colors ${
                      currentMonth === m ? 'text-[#2B85FF] font-bold' : 'text-neutral-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Selector */}
          <div className="relative">
            <button
              onClick={() => {
                setYearDropdown(!yearDropdown);
                setMonthDropdown(false);
              }}
              className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-white hover:text-[#2B85FF] transition-colors cursor-pointer"
            >
              <span>{currentYear}</span>
              <ChevronDown className="w-4 h-4 text-[#8B9CB2]" />
            </button>

            {yearDropdown && (
              <div className="absolute top-full left-0 mt-2 w-28 py-2 rounded-xl bg-[#1C2535] border border-[#283549] shadow-2xl z-30">
                {initialCalendarData.years.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setCurrentYear(y);
                      setYearDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#2B85FF]/20 hover:text-white transition-colors ${
                      currentYear === y ? 'text-[#2B85FF] font-bold' : 'text-neutral-300'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            title="Previous month"
            className="w-8 h-8 rounded-full bg-[#18212F] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            title="Next month"
            className="w-8 h-8 rounded-full bg-[#18212F] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekday Labels Header (7 Columns) */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center">
        {initialCalendarData.daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-[11px] sm:text-xs font-medium text-[#8B9CB2]/80 uppercase tracking-wider py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 35 Calendar Day Cells */}
      <div className="grid grid-cols-7 gap-2.5 items-stretch flex-1">
        {initialCalendarData.calendarDays.map((day, idx) => {
          const isSelected = selectedDateKey === day.dateKey;
          const isFiltered =
            searchQuery &&
            day.events.some((e) =>
              e.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

          return (
            <div
              key={idx}
              onClick={() => onSelectDate(day.dateKey, day.dayNumber)}
              className={`h-[95px] sm:h-[110px] rounded-2xl p-2.5 flex flex-col justify-between cursor-pointer transition-all duration-200 relative group overflow-hidden ${
                isSelected
                  ? 'border-2 border-dashed border-[#2B85FF] bg-[#1E2E44]/90 shadow-[0_0_20px_rgba(43,133,255,0.25)]'
                  : day.isHighlightedGlow
                  ? 'border border-[#2B85FF]/50 bg-gradient-to-br from-[#205187] to-[#1C283A] shadow-[0_0_25px_rgba(43,133,255,0.3)]'
                  : day.isCurrentMonth
                  ? 'border border-[#283549] bg-[#1C2535] hover:border-[#2B85FF]/50 hover:bg-[#202B3D]'
                  : 'border border-[#283549]/40 bg-[#151D2A]/60 opacity-40 hover:opacity-70'
              } ${isFiltered ? 'ring-2 ring-emerald-400' : ''}`}
            >
              {/* Day Number */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm sm:text-base font-bold ${
                    isSelected
                      ? 'text-[#2B85FF]'
                      : day.isCurrentMonth
                      ? 'text-white'
                      : 'text-neutral-500'
                  }`}
                >
                  {day.dayNumber}
                </span>

                {/* Quick Add Event on hover */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenCreateEvent(day.dateKey);
                  }}
                  className="opacity-0 group-hover:opacity-100 p-1 text-[#8B9CB2] hover:text-[#2B85FF] transition-opacity"
                  title="Add Event"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Event Tags List */}
              <div className="space-y-1 overflow-hidden">
                {day.events.slice(0, 3).map((event, evIdx) => (
                  <div
                    key={evIdx}
                    className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-neutral-300 truncate"
                  >
                    <span
                      className="w-1 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: event.color }}
                    />
                    <span className="truncate">{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
