import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, PhoneCall, Radio, CheckCircle, Clock, MapPin, Calendar, Activity } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, data, type }) {
  if (!isOpen || !data) return null;

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
            <h3 className="text-base font-bold text-[#181D17]">
              {type === 'doctor' ? 'Doctor Profile & Pager' : type === 'appointment' ? 'Appointment Record' : 'Metric Details'}
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-4">
            {type === 'doctor' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                    <img src={data.avatar} alt={data.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#181D17]">{data.name}</h4>
                    <p className="text-xs text-[#7A8376] font-medium">{data.specialty}</p>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#E0F2FE] text-[#0284C7]">
                      {data.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-[#F7F8F5] p-3 rounded-2xl text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Office Location</span>
                    <span className="font-semibold text-gray-800">{data.room}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Hospital Pager</span>
                    <span className="font-semibold text-[#52734D]">{data.pager}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Active Patients</span>
                    <span className="font-semibold text-gray-800">{data.patientsCount} Assigned</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-bold">Shift Schedule</span>
                    <span className="font-semibold text-gray-800">08:00 - 17:00</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => {
                      alert(`Pager alert sent to ${data.name} (${data.pager}).`);
                      onClose();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-[#52734D] hover:bg-[#435F3F] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Radio className="w-4 h-4" />
                    Page Doctor Now
                  </button>
                </div>
              </div>
            )}

            {type === 'appointment' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-black/5 shadow-sm">
                    <img src={data.avatar} alt={data.patientName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#181D17]">{data.patientName}</h4>
                    <p className="text-xs text-[#7A8376] font-medium">{data.type}</p>
                    <span className="text-xs font-bold text-[#52734D]">{data.time}</span>
                  </div>
                </div>

                <div className="bg-[#F7F8F5] p-3.5 rounded-2xl text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Attending:</span>
                    <span className="font-bold text-gray-800">{data.doctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-bold text-gray-800">{data.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-bold text-emerald-600">{data.status}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200/60">
                    <span className="text-gray-500 block mb-1">Clinical Notes:</span>
                    <p className="text-gray-700 leading-relaxed font-medium">{data.notes}</p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-[#52734D] text-white font-bold text-xs shadow-sm"
                >
                  Close Record
                </button>
              </div>
            )}

            {type === 'metric' && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-extrabold text-[#181D17]">{data.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{data.description}</p>
                </div>

                {data.details && (
                  <div className="bg-[#F7F8F5] p-3.5 rounded-2xl text-xs space-y-2">
                    {data.details.map((d, i) => (
                      <div key={i} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600">{d.label}</span>
                        <span className="font-bold text-[#181D17]">{d.val}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-[#52734D] text-white font-bold text-xs shadow-sm"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
