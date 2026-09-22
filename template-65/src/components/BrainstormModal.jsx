import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Plus, Check } from 'lucide-react';
import { initialCalendarData } from '../data/calendarData';

export default function BrainstormModal({
  isOpen,
  onClose,
  initialDate = 'September 2, 2025',
  onSaveEvent,
}) {
  const [title, setTitle] = useState('Brainstorm Session');
  const [date, setDate] = useState(initialDate);
  const [eventType, setEventType] = useState('Important');
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [startTime, setStartTime] = useState('11:30');
  const [endTime, setEndTime] = useState('13:00');
  const [note, setNote] = useState('');
  const [members, setMembers] = useState(initialCalendarData.teamMembers);

  if (!isOpen) return null;

  const eventTypes = [
    { label: 'Important', color: '#F59E0B' },
    { label: 'Work', color: '#2B85FF' },
    { label: 'Personal', color: '#10B981' },
    { label: 'Review', color: '#A855F7' },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    if (onSaveEvent) {
      onSaveEvent({
        title,
        date,
        eventType,
        timeRange: `${startTime} - ${endTime}`,
        note,
      });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-[420px] rounded-3xl bg-[#1C2535] border border-[#283549] shadow-2xl z-10 p-6 sm:p-7 text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#283549]/60">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-bold text-white bg-transparent border-b border-transparent focus:border-[#2B85FF] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-4 pt-5 text-xs">
            {/* Date Field */}
            <div className="flex items-center justify-between py-1">
              <span className="text-[#8B9CB2] font-medium w-20">Date</span>
              <span className="text-white font-semibold flex-1 text-right sm:text-left sm:pl-4">
                {date}
              </span>
            </div>

            {/* Type Selector Dropdown */}
            <div className="flex items-center justify-between py-1 relative">
              <span className="text-[#8B9CB2] font-medium w-20">Type</span>
              <div className="flex-1 sm:pl-4 relative">
                <button
                  type="button"
                  onClick={() => setTypeDropdown(!typeDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#151D2A] border border-[#283549] hover:border-[#2B85FF] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          eventTypes.find((t) => t.label === eventType)?.color ||
                          '#F59E0B',
                      }}
                    />
                    <span className="text-white font-medium">{eventType}</span>
                  </div>
                  <span className="text-[#8B9CB2]">▾</span>
                </button>

                {typeDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 py-1 rounded-xl bg-[#18212F] border border-[#283549] shadow-2xl z-30">
                    {eventTypes.map((t) => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => {
                          setEventType(t.label);
                          setTypeDropdown(false);
                        }}
                        className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2B85FF]/20 text-neutral-300 hover:text-white transition-colors"
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: t.color }}
                        />
                        <span>{t.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Hour Time Steppers */}
            <div className="flex items-center justify-between py-1">
              <span className="text-[#8B9CB2] font-medium w-20">Hour</span>
              <div className="flex-1 sm:pl-4 flex items-center gap-3">
                {/* Start Time */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#151D2A] border border-[#283549]">
                  <button
                    type="button"
                    onClick={() => setStartTime('11:00')}
                    className="text-[#8B9CB2] hover:text-white"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <span className="font-mono text-white text-xs">{startTime}</span>
                  <button
                    type="button"
                    onClick={() => setStartTime('12:00')}
                    className="text-[#8B9CB2] hover:text-white"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                <span className="text-[#8B9CB2] font-mono">&gt;</span>

                {/* End Time */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#151D2A] border border-[#283549]">
                  <button
                    type="button"
                    onClick={() => setEndTime('12:30')}
                    className="text-[#8B9CB2] hover:text-white"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <span className="font-mono text-white text-xs">{endTime}</span>
                  <button
                    type="button"
                    onClick={() => setEndTime('13:30')}
                    className="text-[#8B9CB2] hover:text-white"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Note Field */}
            <div className="flex items-center justify-between py-1">
              <span className="text-[#8B9CB2] font-medium w-20">Note</span>
              <div className="flex-1 sm:pl-4">
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add Note"
                  className="w-full px-3 py-2 rounded-xl bg-[#151D2A] border border-[#283549] text-white placeholder-[#8B9CB2]/60 focus:outline-none focus:border-[#2B85FF]"
                />
              </div>
            </div>

            {/* Members Row */}
            <div className="flex items-center justify-between py-2 border-t border-[#283549]/40">
              <span className="text-[#8B9CB2] font-medium w-20">Members</span>
              <div className="flex-1 sm:pl-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {members.map((m) => (
                    <img
                      key={m.id}
                      src={m.avatar}
                      alt={m.name}
                      title={m.name}
                      className="w-7 h-7 rounded-full border-2 border-[#1C2535] object-cover"
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => alert('Invite link copied to clipboard!')}
                  className="w-7 h-7 rounded-full bg-[#151D2A] border border-[#283549] hover:border-[#2B85FF] flex items-center justify-center text-[#8B9CB2] hover:text-white transition-colors cursor-pointer"
                  title="Add Member"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-10 py-2.5 rounded-xl bg-[#2B85FF] hover:bg-[#1A74EE] text-white font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(43,133,255,0.45)] cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
