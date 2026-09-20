import React from 'react';
import { SquarePen, Phone, Mail, MapPin } from 'lucide-react';

export default function PatientProfileCard({ patient, onEdit, onMessage }) {
  return (
    <div className="mediso-card p-6 flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-sm font-bold text-gray-900">Patient Profile</h2>
        <button
          type="button"
          onClick={onEdit}
          aria-label="Edit Patient Profile"
          className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <SquarePen className="w-4 h-4" />
        </button>
      </div>

      {/* Patient Avatar & Headline */}
      <div className="flex flex-col items-center text-center mt-2">
        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xs ring-2 ring-gray-100 mb-3">
          <img
            src={patient?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&auto=format&fit=crop&q=80"}
            alt={patient?.name || "Leslie Alexander"}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-base font-bold text-gray-900">
          {patient?.name || 'Leslie Alexander'}
        </h3>
        <p className="text-xs font-medium text-gray-400 mt-0.5">
          Cardiology Patient
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-5 pt-4 border-t border-gray-100 space-y-3.5">
        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Phone Number</span>
            <span className="text-xs font-semibold text-gray-800">+(555) 657-2036</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Email Address</span>
            <span className="text-xs font-semibold text-gray-800">lesliealexander@mail.com</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
          <div>
            <span className="text-[11px] font-medium text-gray-400 block">Address</span>
            <span className="text-xs font-semibold text-gray-800 leading-tight">
              23 New Work Street, New Work, USA
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-2 flex items-center gap-3">
        <button
          type="button"
          onClick={onEdit}
          className="flex-1 py-2.5 px-4 bg-gray-100/80 hover:bg-gray-200/80 active:scale-[0.98] text-gray-800 rounded-xl text-xs font-semibold transition-all"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onMessage}
          className="flex-1 py-2.5 px-4 bg-[#1FA075] hover:bg-[#188560] active:scale-[0.98] text-white rounded-xl text-xs font-semibold shadow-xs transition-all"
        >
          Message
        </button>
      </div>
    </div>
  );
}
