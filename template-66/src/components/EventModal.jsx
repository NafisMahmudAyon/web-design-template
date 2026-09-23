import React, { useState } from 'react';
import { X, Clock, MapPin, Users, Tag, CheckCircle2, Trash2, Video, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEEK_DAYS } from '../data/calendarData';

export default function EventModal({
  isOpen,
  mode = 'view', // 'view' | 'create'
  event,
  onClose,
  onSaveNewEvent,
  onDeleteEvent,
}) {
  const [formData, setFormData] = useState({
    title: '',
    time: '09:00-10:30',
    startTime: '9:00 AM',
    endTime: '10:30 AM',
    dayIndex: 2,
    colorTheme: 'purple',
    category: 'work',
    location: 'Conference Room Alpha',
    description: 'Quarterly review and design system consistency check.',
  });

  if (!isOpen) return null;

  const handleSubmitNew = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSaveNewEvent({
      id: `evt-${Date.now()}`,
      ...formData,
      attendees: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
      ],
      spanRows: 1.8,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg bg-[#14151e] border border-[#262838] rounded-3xl p-6 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e202b] hover:bg-[#282a39] text-gray-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {mode === 'create' ? (
            /* CREATE EVENT FORM */
            <form onSubmit={handleSubmitNew} className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8278f8]"></span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Schedule New Event
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                  Event Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Design Critique & Prototyping"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none focus:ring-2 focus:ring-[#8278f8]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                    Day
                  </label>
                  <select
                    value={formData.dayIndex}
                    onChange={(e) => setFormData({ ...formData, dayIndex: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                  >
                    {WEEK_DAYS.map((wd, i) => (
                      <option key={wd.day} value={i} className="bg-[#1b1c26]">
                        {wd.fullDay} ({wd.date} Jan)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                    Time Span
                  </label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                  >
                    <option value="work">Work (Violet)</option>
                    <option value="personal">Personal (Coral)</option>
                    <option value="education">Education (Yellow)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                    Color Theme
                  </label>
                  <select
                    value={formData.colorTheme}
                    onChange={(e) => setFormData({ ...formData, colorTheme: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                  >
                    <option value="purple">Purple</option>
                    <option value="amber">Amber</option>
                    <option value="blue">Cyan / Blue</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                  Location / Call Link
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8c90a5] mb-1.5">
                  Description
                </label>
                <textarea
                  rows="2"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#1b1c26] border border-[#2b2d3e] text-white text-sm focus:border-[#8278f8] focus:outline-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#232536]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-[#1f212c] hover:bg-[#282a39] text-xs font-medium text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#8278f8] hover:bg-[#7267f5] text-white text-xs font-semibold shadow-lg shadow-[#8278f8]/30 transition-all active:scale-95"
                >
                  Add to Calendar
                </button>
              </div>
            </form>
          ) : (
            /* VIEW EVENT DETAILS */
            event && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      event.colorTheme === 'purple'
                        ? 'bg-[#8272f6]/20 text-[#a396fd] border border-[#8272f6]/40'
                        : event.colorTheme === 'amber'
                        ? 'bg-[#fba53e]/20 text-[#fca446] border border-[#fba53e]/40'
                        : 'bg-[#2aa8ff]/20 text-[#60c4ff] border border-[#2aa8ff]/40'
                    }`}
                  >
                    {event.category || 'Schedule'}
                  </span>
                  <span className="text-xs text-gray-400">
                    {WEEK_DAYS[event.dayIndex]?.fullDay || 'Scheduled Session'}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#8c90a5] mt-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#8278f8]" />
                    <span>{event.time} ({event.startTime || 'Scheduled'})</span>
                  </div>
                </div>

                <div className="bg-[#1b1c26] rounded-2xl p-4 border border-[#262837] space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{event.location || 'Figma Collaboration Studio'}</span>
                  </div>

                  <p className="text-xs text-[#9ea2b6] leading-relaxed">
                    {event.description ||
                      'Review design deliverables, client interaction specifications, and production timelines.'}
                  </p>
                </div>

                {/* Attendees */}
                <div>
                  <h4 className="text-xs font-semibold text-[#8c90a5] mb-2">
                    Participants
                  </h4>
                  <div className="flex items-center gap-2">
                    {event.attendees && event.attendees.length > 0 ? (
                      event.attendees.map((avatar, idx) => (
                        <img
                          key={idx}
                          src={avatar}
                          alt="Participant"
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-[#8278f8]/50"
                        />
                      ))
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        Solo Focus Session
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#242636]">
                  {onDeleteEvent && (
                    <button
                      type="button"
                      onClick={() => {
                        onDeleteEvent(event.id);
                        onClose();
                      }}
                      className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}

                  <div className="flex items-center gap-3 ml-auto">
                    <button
                      type="button"
                      onClick={() => {
                        alert(`Joining ${event.title} video call...`);
                        onClose();
                      }}
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#8278f8] hover:bg-[#7368f7] text-white text-xs font-semibold shadow-lg shadow-[#8278f8]/30 transition-all active:scale-95"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Join Call</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
