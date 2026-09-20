import React, { useState } from 'react';
import { X, UserPlus, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function AddDoctorModal({ isOpen, onClose, onAddDoctor }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('Cardiologist Surgeon');
  const [phone, setPhone] = useState('+(555) 000-1122');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('Central Medical Center, Suite 400');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    onAddDoctor({
      id: Date.now(),
      name,
      specialty,
      type: 'New',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=260',
      phone,
      email: email || `${name.toLowerCase().replace(/\s+/g, '.')}@mediso.com`,
      address,
      npi: `100${Math.floor(10000000 + Math.random() * 90000000)}`,
      primarySpecialist: specialty.split(' ')[0] || specialty,
      languages: 'English',
      bio: `Dedicated specialist providing exemplary clinical care in ${specialty}.`,
      licenses: [
        { id: `#${Math.floor(100000 + Math.random() * 900000)} 2024 2028`, region: 'Ohio', active: true }
      ]
    });

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <UserPlus size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Add New Doctor</h3>
                <p className="text-xs text-slate-400">Register a medical professional</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Doctor Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Julian Vance"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specialty
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
              >
                <option>Cardiologist Surgeon</option>
                <option>Cardiologist</option>
                <option>Gastroenterologist</option>
                <option>Endocrinologist</option>
                <option>Rheumatologist</option>
                <option>Neurosurgeon</option>
                <option>Plastic Surgeon</option>
                <option>Pediatrician</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Clinic / Hospital Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-xs"
              >
                Save Doctor
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
