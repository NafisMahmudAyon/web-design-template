import React, { useState } from 'react';
import { X, UserPlus, Upload, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AddEmployeeModal({ isOpen, onClose, onAddEmployee }) {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Product Designer',
    experience: '1.0 years of work',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    skills: 'Figma, Design System, Prototyping',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    onAddEmployee({
      id: `emp-${Date.now()}`,
      name: formData.name,
      role: formData.role,
      avatar: formData.avatar,
      online: true,
      experience: formData.experience,
      daysInCompany: 1,
      doneProjects: 0,
      skills: formData.skills.split(',').map((s) => s.trim()),
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md bg-[#12131b] border border-[#262838] rounded-3xl p-6 shadow-2xl text-white relative"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1b1d28] hover:bg-[#252837] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Title */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-xl bg-[#7ae2a4]/15 text-[#7ae2a4] flex items-center justify-center">
              <UserPlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Add Team Member
              </h3>
              <p className="text-xs text-[#717489]">Onboard colleague to Drank workspace</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Liam Henderson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#191a24] border border-[#292c3d] text-white text-xs focus:border-[#7ae2a4] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                Role Title
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Senior UX Researcher"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#191a24] border border-[#292c3d] text-white text-xs focus:border-[#7ae2a4] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                Experience
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#191a24] border border-[#292c3d] text-white text-xs focus:border-[#7ae2a4] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                Core Skills (comma separated)
              </label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#191a24] border border-[#292c3d] text-white text-xs focus:border-[#7ae2a4] focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#202230]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-[#1b1d28] hover:bg-[#252837] text-xs font-medium text-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white text-xs font-semibold shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                Save Member
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
