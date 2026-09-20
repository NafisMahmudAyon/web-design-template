import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, CheckCircle2, Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const TIMES = ['07:30 AM', '08:45 AM', '10:15 AM', '12:30 PM', '02:00 PM', '03:45 PM'];

export default function BookingModal({ isOpen, onClose }) {
  const [course, setCourse] = useState('Pinehurst No. 2 Championship');
  const [players, setPlayers] = useState(2);
  const [date, setDate] = useState('2026-10-15');
  const [selectedTime, setSelectedTime] = useState('08:45 AM');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    setBooked(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E2F844', '#1b3b2b', '#10b981'],
    });
  };

  const handleReset = () => {
    setBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0e2218] border border-white/15 rounded-3xl w-full max-w-lg p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E2F844]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#E2F844]/20 border border-[#E2F844] text-[#E2F844] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold">Tee Time Confirmed!</h3>
            <p className="text-white/70 text-sm mt-2 max-w-sm mx-auto">
              Your round at <strong className="text-white">{course}</strong> is locked in for <strong className="text-white">{selectedTime}</strong> on <strong className="text-white">{date}</strong> for {players} players.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60">
              A calendar invite and digital bag tags have been dispatched to your email.
            </div>
            <button
              onClick={handleReset}
              className="mt-8 w-full bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold py-3.5 rounded-full transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E2F844] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Reservation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Book a Tee Time
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Reserve your slot with real-time course availability.
            </p>

            <form onSubmit={handleConfirm} className="mt-6 space-y-4">
              {/* Course Selector */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5">
                  Select Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-[#153324] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E2F844]"
                >
                  <option value="Pinehurst No. 2 Championship">Pinehurst No. 2 Championship</option>
                  <option value="Pebble Beach Golf Links">Pebble Beach Golf Links</option>
                  <option value="Augusta National Reserve">Augusta National Reserve</option>
                  <option value="St Andrews Old Course Links">St Andrews Old Course Links</option>
                </select>
              </div>

              {/* Date and Players */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E2F844]" /> Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#153324] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E2F844]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#E2F844]" /> Golfers
                  </label>
                  <select
                    value={players}
                    onChange={(e) => setPlayers(Number(e.target.value))}
                    className="w-full bg-[#153324] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E2F844]"
                  >
                    <option value={1}>1 Player (Single)</option>
                    <option value={2}>2 Players (Pair)</option>
                    <option value={3}>3 Players (Trio)</option>
                    <option value={4}>4 Players (Foursome)</option>
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#E2F844]" /> Tee Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIMES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all ${
                        selectedTime === time
                          ? 'bg-[#E2F844] text-[#0a1711] border-[#E2F844]'
                          : 'bg-[#153324] text-white/80 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#E2F844] hover:bg-[#d0e536] text-[#0a1711] font-bold py-3.5 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-[#E2F844]/20"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
