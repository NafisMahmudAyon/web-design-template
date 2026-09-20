import React, { useState } from 'react';
import { MoreHorizontal, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const DATES = [
  { day: 'Fri', date: '31' },
  { day: 'Sat', date: '01' },
  { day: 'Sun', date: '02' },
  { day: 'Mon', date: '03' },
  { day: 'Tue', date: '04' },
];

const APPOINTMENTS = [
  {
    id: 1,
    patientName: 'Jerome Bell',
    condition: 'Bahaviaral issues',
    dateLabel: 'Tuesday, 12 sep 2028',
    time: '9:00 AM',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 2,
    patientName: 'Darlene Robertson',
    condition: 'Anxiety Disorder',
    dateLabel: 'Tuesday, 12 sep 2028',
    time: '11:00 AM',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 3,
    patientName: 'Brooklyn Simmons',
    condition: 'Communication Difficulties',
    dateLabel: 'Tuesday, 12 sep 2028',
    time: '02:00 AM',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  }
];

export default function TodaysSchedule() {
  const [selectedDate, setSelectedDate] = useState('02');

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-slate-900 font-display">
          Todays Schedule
        </h3>
        <button
          className="w-7 h-7 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-300 hover:text-slate-600 transition-colors"
          title="Schedule options"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Date Carousel Strip */}
      <div className="flex items-center justify-between gap-1 mb-5 px-1 py-1">
        <button
          className="w-6 h-6 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-300 hover:text-slate-600 transition-colors flex-shrink-0"
        >
          <ChevronLeft size={14} />
        </button>

        <div className="flex items-center justify-around flex-1 gap-1">
          {DATES.map((item) => {
            const isActive = selectedDate === item.date;
            return (
              <button
                key={item.date}
                onClick={() => setSelectedDate(item.date)}
                className={`flex flex-col items-center py-1.5 px-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                  {item.day}
                </span>
                <span className="text-xs font-bold mt-0.5">
                  {item.date}
                </span>
              </button>
            );
          })}
        </div>

        <button
          className="w-6 h-6 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-300 hover:text-slate-600 transition-colors flex-shrink-0"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Appointment Cards */}
      <div className="space-y-3.5">
        {APPOINTMENTS.map((apt) => (
          <div
            key={apt.id}
            className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:bg-slate-50 transition-all"
          >
            {/* Appointment Meta: Status Dot + Date + Time Pill */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] text-slate-500">{apt.dateLabel}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200/60 shadow-2xs">
                <Clock size={11} className="text-slate-400" />
                <span>{apt.time}</span>
              </div>
            </div>

            {/* Patient Info */}
            <div className="flex items-center gap-3">
              <img
                src={apt.avatar}
                alt={apt.patientName}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-2xs"
              />
              <div className="truncate">
                <h5 className="text-xs font-bold text-slate-900 truncate">
                  {apt.patientName}
                </h5>
                <p className="text-[11px] text-slate-400 truncate">
                  {apt.condition}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
