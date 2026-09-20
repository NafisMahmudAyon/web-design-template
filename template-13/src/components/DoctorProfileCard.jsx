import React from 'react';
import { SquarePen, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DoctorProfileCard({ doctor, onOpenMessage }) {
  if (!doctor) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-900 font-display">
          Doctor Profile
        </h3>
        <button
          className="w-8 h-8 rounded-lg border border-slate-100 hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          title="Edit profile"
        >
          <SquarePen size={15} />
        </button>
      </div>

      {/* Doctor Photo & Main Identifiers */}
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 ring-4 ring-slate-50 mb-3.5 shadow-2xs">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h4 className="text-lg font-bold text-slate-900 tracking-tight">
          {doctor.name}
        </h4>
        <p className="text-xs text-slate-400 mt-0.5 font-medium">
          {doctor.specialty}
        </p>
      </div>

      {/* Contact Details List */}
      <div className="space-y-4 mb-6">
        {/* Phone */}
        <div className="flex items-start gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 mt-0.5">
            <Phone size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-slate-400 leading-none mb-1">
              Phone Number
            </span>
            <span className="text-xs font-semibold text-slate-800 tracking-tight">
              {doctor.phone}
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 mt-0.5">
            <Mail size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-slate-400 leading-none mb-1">
              Email Address
            </span>
            <span className="text-xs font-semibold text-slate-800 tracking-tight truncate block">
              {doctor.email}
            </span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 mt-0.5">
            <MapPin size={15} />
          </div>
          <div className="overflow-hidden">
            <span className="block text-[11px] font-medium text-slate-400 leading-none mb-1">
              Address
            </span>
            <span className="text-xs font-semibold text-slate-800 tracking-tight">
              {doctor.address}
            </span>
          </div>
        </div>
      </div>

      {/* Message Button */}
      <motion.button
        onClick={() => onOpenMessage(doctor)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-2.5 rounded-xl border border-slate-200/90 hover:bg-slate-50 text-slate-700 text-xs font-semibold tracking-wide transition-all shadow-2xs hover:shadow-xs flex items-center justify-center gap-2"
      >
        <MessageSquare size={14} className="text-slate-500" />
        <span>Message</span>
      </motion.button>
    </div>
  );
}
