import React, { useState } from 'react';
import { X, Send, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MessageModal({ isOpen, onClose, doctor }) {
  const [messages, setMessages] = useState([
    { sender: 'doctor', text: 'Hello! How can I assist you with cardiology management today?', time: '09:12 AM' }
  ]);
  const [inputText, setInputText] = useState('');

  if (!isOpen || !doctor) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    setInputText('');

    // Simulate quick auto reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'doctor',
          text: `Thank you for your message. I have noted this on file and will follow up shortly during clinical rounds.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col h-[520px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-100"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900">{doctor.name}</h4>
                <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for consultations</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-emerald-500 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1 flex items-center gap-1">
                  {m.time}
                  {m.sender === 'user' && <CheckCheck size={12} className="text-emerald-500" />}
                </span>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="pt-3 border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Write message to ${doctor.name}...`}
              className="flex-1 text-xs px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-transform active:scale-95 shadow-xs"
            >
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
