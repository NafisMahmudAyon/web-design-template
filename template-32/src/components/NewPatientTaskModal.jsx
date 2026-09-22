import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserPlus, Heart, Activity, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function NewPatientTaskModal({ isOpen, onClose, onPatientAdmitted }) {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [ward, setWard] = useState('General Ward 4B');
  const [condition, setCondition] = useState('Stable');
  const [diagnosis, setDiagnosis] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patientName.trim()) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    if (onPatientAdmitted) {
      onPatientAdmitted({
        patientName,
        age,
        ward,
        condition,
        diagnosis
      });
    }

    onClose();
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
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#52734D]/15 text-[#52734D] flex items-center justify-center">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#181D17]">Admit Patient / Task</h3>
                <p className="text-xs text-[#7A8376]">Intake protocol for St. Mary's Nursing</p>
              </div>
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
            {/* Patient Name & Age */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block font-bold text-gray-700 mb-1.5">Patient Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. James Wilson"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-sm text-[#181D17]"
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Age</label>
                <input
                  type="number"
                  placeholder="48"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-sm text-[#181D17]"
                />
              </div>
            </div>

            {/* Ward & Condition */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Assigned Ward</label>
                <select
                  value={ward}
                  onChange={(e) => setWard(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
                >
                  <option value="General Ward 4B">General Ward 4B</option>
                  <option value="ICU Wing B">ICU Wing B</option>
                  <option value="Stepdown Telemetry">Stepdown Telemetry</option>
                  <option value="Observation Unit">Observation Unit</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-gray-700 mb-1.5">Initial Status</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17]"
                >
                  <option value="Stable">Stable</option>
                  <option value="Critical">Critical</option>
                  <option value="Observation">Observation</option>
                </select>
              </div>
            </div>

            {/* Clinical Notes / Diagnosis */}
            <div>
              <label className="block font-bold text-gray-700 mb-1.5">Diagnosis / Reason for Admission</label>
              <textarea
                rows={3}
                placeholder="e.g. Acute exacerbation of COPD, prescribed nebulized bronchodilators, baseline SpO2 91%."
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#52734D] text-xs text-[#181D17] resize-none"
              />
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
                Admit Patient
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
