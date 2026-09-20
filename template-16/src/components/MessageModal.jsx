import React, { useState } from 'react';
import { X, Send, Paperclip, CheckCheck } from 'lucide-react';

export default function MessageModal({ isOpen, onClose, patient }) {
  const [messageText, setMessageText] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      id: 1,
      sender: 'patient',
      text: 'Good morning Dr. McKinney, my abdominal pain has slightly increased after lunch.',
      time: '10:15 AM',
    },
    {
      id: 2,
      sender: 'doctor',
      text: 'Hello Leslie. Please avoid heavy meals for today. Our nursing staff will administer the prescribed IV medication shortly.',
      time: '10:22 AM',
    },
  ]);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'doctor',
      text: messageText.trim(),
      time: 'Just now',
    };

    setChatLog((prev) => [...prev, newMsg]);
    setMessageText('');

    // Simulate patient automated reply
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'patient',
          text: 'Thank you doctor! I will rest until the nurse arrives.',
          time: 'Just now',
        },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-[520px] overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <img
              src={patient?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"}
              alt="Leslie Alexander"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#1FA075]/20"
            />
            <div>
              <h3 className="text-sm font-bold text-gray-900">{patient?.name || 'Leslie Alexander'}</h3>
              <div className="flex items-center gap-1.5 text-[11px] text-[#1FA075] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1FA075] animate-pulse" />
                <span>Active in Ward 11</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50/50">
          {chatLog.map((msg) => {
            const isDoctor = msg.sender === 'doctor';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isDoctor ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    isDoctor
                      ? 'bg-[#1FA075] text-white rounded-tr-xs'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-tl-xs shadow-2xs'
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1 px-1">
                  <span>{msg.time}</span>
                  {isDoctor && <CheckCheck className="w-3 h-3 text-[#1FA075]" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-4 border-t border-gray-100 bg-white flex items-center gap-2"
        >
          <button
            type="button"
            aria-label="Attach File"
            className="p-2 text-gray-400 hover:text-gray-600 rounded-xl"
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <input
            type="text"
            placeholder="Type clinical instruction or response..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="flex-1 px-3 py-2 text-xs text-gray-900 placeholder-gray-400 bg-gray-100/70 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1FA075]"
          />

          <button
            type="submit"
            disabled={!messageText.trim()}
            className="p-2.5 bg-[#1FA075] hover:bg-[#188560] disabled:opacity-40 text-white rounded-xl transition-all shadow-xs"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
