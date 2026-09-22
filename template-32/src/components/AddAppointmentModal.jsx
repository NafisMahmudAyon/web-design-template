import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, UserCheck, Stethoscope } from 'lucide-react';
import { doctorsData } from '../data/mockData';

export default function AddAppointmentModal({ isOpen, onClose, onAddAppointment }) {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState(doctorsData[0].name);
  const [time, setTime] = useState('11:00');
  const [type, setType] = useState('Follow-up Consultation');
  const [room, setRoom] = useState('Room 304');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    const newApt = {
      id: `apt-${Date.now()}`,
      time,
      patientName,
      type,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&h=256&q=80',
      room,
      doctor: doctorName,
      status: 'Upcoming',
      notes: 'Scheduled by Nurse Elisa Nillson.'
    };

    onAddAppointment(newApt);
    onClose();
    setPatientName('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-black/5 text-[#181D17]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-[#181D17]">Schedule Appointment</h3>
              <p className="text-xs text-[#7A8376]">Book a physician review or nurse consultation</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
            {/* Patient Name */}
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Patient Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-sm text-[#181D17]"
                />
              </div>
            </div>

            {/* Doctor Selection */}
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Attending Physician</label>
              <select
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
              >
                {doctorsData.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialty}) - {doc.status}
                  </option>
                ))}
              </select>
            </div>

            {/* Time & Room */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Time Slot</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Ward / Room</label>
                <input
                  type="text"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
                />
              </div>
            </div>

            {/* Consultation Type */}
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Appointment Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
              >
                <option value="Follow-up Consultation">Follow-up Consultation</option>
                <option value="Post-Op Check">Post-Op Check</option>
                <option value="Cardiology Review">Cardiology Review</option>
                <option value="Routine Vitals Check">Routine Vitals Check</option>
                <option value="Pre-Discharge Evaluation">Pre-Discharge Evaluation</option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-100 font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#52734D] hover:bg-[#435F3F] text-white font-bold shadow-sm transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
