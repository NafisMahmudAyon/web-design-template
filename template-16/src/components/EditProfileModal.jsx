import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function EditProfileModal({ isOpen, onClose, patient, onSave }) {
  const [name, setName] = useState(patient?.name || 'Leslie Alexander');
  const [condition, setCondition] = useState(patient?.condition || 'Anxiety Disorder');
  const [phone, setPhone] = useState('+(555) 657-2036');
  const [email, setEmail] = useState('lesliealexander@mail.com');
  const [ward, setWard] = useState('Floor 32, Ward 11');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ name, condition, phone, email, ward });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold text-gray-900">Edit Patient Record</h3>
        <p className="text-xs text-gray-500 mt-0.5">Update patient details, ward allocation, and contacts.</p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Primary Condition / Department</label>
            <input
              type="text"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Ward / Floor</label>
              <input
                type="text"
                value={ward}
                onChange={(e) => setWard(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
            />
          </div>

          <div className="mt-6 pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 py-2.5 bg-[#1FA075] hover:bg-[#188560] text-white rounded-xl text-xs font-semibold shadow-xs transition-all"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
