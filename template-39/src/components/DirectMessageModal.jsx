import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { TEAM_MEMBERS, SAMPLE_CHATS } from '../data/workspaceData';

export default function DirectMessageModal({ 
  contactEmail, 
  isOpen, 
  onClose 
}) {
  const [messages, setMessages] = useState(
    SAMPLE_CHATS[contactEmail] || [
      { sender: 'them', text: 'Hey there! Let me know if you need review on any specs.', time: '11:00 AM' }
    ]
  );
  const [inputMessage, setInputMessage] = useState('');

  if (!isOpen || !contactEmail) return null;

  const contactUser = TEAM_MEMBERS.find(m => m.email === contactEmail) || {
    name: contactEmail.split('@')[0],
    email: contactEmail,
    avatar: TEAM_MEMBERS[1].avatar,
    online: true,
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [
      ...prev,
      {
        sender: 'me',
        text: inputMessage.trim(),
        time: 'Just now',
      }
    ]);
    setInputMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 flex flex-col h-[480px]">
      {/* Header */}
      <div className="px-4 py-3.5 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <img src={contactUser.avatar} alt={contactUser.name} className="w-8 h-8 rounded-full object-cover" />
            {contactUser.online && (
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-900" />
            )}
          </div>
          <div>
            <div className="text-xs font-bold truncate max-w-[180px]">{contactUser.name}</div>
            <div className="text-[10px] text-slate-400 truncate max-w-[180px]">{contactUser.email}</div>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50">
        {messages.map((m, idx) => {
          const isMe = m.sender === 'me';
          return (
            <div 
              key={idx} 
              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed
                  ${isMe 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-2xs' 
                    : 'bg-white border border-slate-200/80 text-slate-800 rounded-bl-none shadow-2xs'
                  }
                `}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-slate-400 mt-1 px-1">{m.time}</span>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-slate-100 bg-white flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 px-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition shadow-2xs"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
