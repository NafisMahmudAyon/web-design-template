import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { appointmentsData } from '../data/mockData';

export default function AppointmentsCard({ appointments, onOpenAddAppointment, onSelectAppointment }) {
  const currentAppointments = appointments || appointmentsData;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header with Title, Count Badge & Add New */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-[#181D17] tracking-tight">
            Appointments
          </h2>
          <span className="w-5 h-5 rounded-full bg-[#F4F6F2] text-[#52734D] text-[11px] font-bold flex items-center justify-center">
            {currentAppointments.length}
          </span>
        </div>

        {/* Add New Button */}
        <button
          onClick={onOpenAddAppointment}
          className="flex items-center gap-1 text-xs font-bold text-[#181D17] hover:text-[#52734D] transition-colors focus:outline-none group"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5] group-hover:scale-110 transition-transform" />
          <span>Add new</span>
        </button>
      </div>

      {/* Appointment List */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        {currentAppointments.map((apt) => (
          <motion.div
            key={apt.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectAppointment(apt)}
            className="group flex items-center justify-between p-2 rounded-2xl hover:bg-[#F7F8F5] transition-all cursor-pointer border border-transparent hover:border-black/[0.03]"
          >
            {/* Time */}
            <div className="w-12 text-xs font-bold text-[#181D17] flex-shrink-0">
              {apt.time}
            </div>

            {/* Avatar & Patient Info */}
            <div className="flex items-center gap-2.5 flex-1 min-w-0 px-2">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-black/5">
                <img 
                  src={apt.avatar} 
                  alt={apt.patientName} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-[#181D17] group-hover:text-[#52734D] transition-colors truncate">
                  {apt.patientName}
                </p>
                <p className="text-[10px] text-[#7A8376] font-medium truncate">
                  {apt.type}
                </p>
              </div>
            </div>

            {/* Chevron Arrow */}
            <div className="w-6 h-6 rounded-full bg-[#F4F6F2] group-hover:bg-[#52734D] group-hover:text-white text-[#7A8376] flex items-center justify-center transition-colors flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5 stroke-[2]" />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
