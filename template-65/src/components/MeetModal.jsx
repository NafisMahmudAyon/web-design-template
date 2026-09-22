import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, MicOff, Video, VideoOff, PhoneOff, Users, MessageSquare } from 'lucide-react';

export default function MeetModal({ isOpen, onClose, event }) {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [joined, setJoined] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl rounded-3xl bg-[#18212F] border border-[#283549] shadow-2xl z-10 overflow-hidden text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#283549]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-bold text-sm tracking-tight text-white">
                {event?.title || 'Job Interview'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Preview Box */}
          <div className="p-6">
            <div className="h-64 rounded-2xl bg-[#0F1622] border border-[#283549] relative overflow-hidden flex items-center justify-center">
              {videoOn ? (
                <img
                  src="/alex-avatar.jpg"
                  alt="Camera view"
                  className="w-full h-full object-cover opacity-80"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#1C2535] border border-[#283549] flex items-center justify-center text-xl font-bold text-[#8B9CB2]">
                  Alex
                </div>
              )}

              {/* Status Pill */}
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-mono text-neutral-300">
                Alex (You)
              </div>

              {/* In-Call Controls */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button
                  onClick={() => setMicOn(!micOn)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    micOn ? 'bg-[#253346] text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setVideoOn(!videoOn)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    videoOn ? 'bg-[#253346] text-white' : 'bg-red-500 text-white'
                  }`}
                >
                  {videoOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Join Action Bar */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-[#8B9CB2]">
                <div className="font-semibold text-white">Ready to join?</div>
                <div>2 other participants are waiting in the room.</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setJoined(true);
                    setTimeout(() => {
                      setJoined(false);
                      onClose();
                    }, 2500);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#2B85FF] hover:bg-[#1A74EE] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(43,133,255,0.45)] cursor-pointer"
                >
                  {joined ? 'Connecting...' : 'Join Now'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
