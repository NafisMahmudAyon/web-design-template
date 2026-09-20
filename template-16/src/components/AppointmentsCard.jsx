import React from 'react';
import { SquarePen } from 'lucide-react';

export default function AppointmentsCard({ onAddAppointment }) {
  const appointments = [
    {
      id: 1,
      date: '12 Oct 2023',
      title: 'Post-Surgical Care',
      doctor: 'Dr. Marvin McKinney',
    },
    {
      id: 2,
      date: '12 Sep 2023',
      title: 'Post-Surgical Care',
      doctor: 'Dr. Marvin McKinney',
    },
    {
      id: 3,
      date: '12 Sep 2023',
      title: 'Post-Surgical Care',
      doctor: 'Dr. Marvin McKinney',
    },
  ];

  return (
    <div className="mediso-card p-6 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-sm font-bold text-gray-900">Appointments</h2>
        <button
          type="button"
          onClick={onAddAppointment}
          aria-label="Edit or Add Appointment"
          className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <SquarePen className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline List */}
      <div className="mt-2 space-y-4 relative">
        {appointments.map((apt, index) => (
          <div key={apt.id} className="relative flex items-start gap-3.5 group">
            {/* Left Timeline Indicator */}
            <div className="flex flex-col items-center shrink-0 mt-1">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#1FA075] bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1FA075]" />
              </div>
              {index !== appointments.length - 1 && (
                <div className="w-0.5 h-14 border-l-2 border-dotted border-gray-200 mt-1" />
              )}
            </div>

            {/* Appointment Content */}
            <div className="flex-1">
              <span className="text-[11px] font-medium text-gray-400 block mb-1">
                {apt.date}
              </span>
              <div className="p-3 bg-[#F8F9FA] hover:bg-gray-100/80 rounded-xl border border-gray-100 transition-colors">
                <h3 className="text-xs font-bold text-gray-800">{apt.title}</h3>
                <p className="text-[11px] font-medium text-gray-400 mt-0.5">{apt.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
