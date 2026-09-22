import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Mic, Send, Sparkles, Bot, User, Check, RefreshCw } from 'lucide-react';
import { aiKnowledgeBase } from '../data/mockData';

export default function AiAssistantCard() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Good morning Nurse Elisa. All vitals and lab alerts for St. Mary’s Ward 4B are synced. Ask me about ECG readings, med schedules, or ICU alerts.',
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [credits, setCredits] = useState(200);

  const quickPrompts = [
    'Why is my HRV low?',
    'Check medication schedule',
    'Summarize ICU vitals'
  ];

  const handleSendPrompt = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    setCredits((prev) => Math.max(0, prev - 1));

    // Simulate AI response
    setTimeout(() => {
      const responseEntry = aiKnowledgeBase[query] || aiKnowledgeBase.default;
      const aiReply = {
        id: Date.now() + 1,
        sender: 'ai',
        text: responseEntry.reply,
        tags: responseEntry.tags,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="relative rounded-3xl p-6 text-white shadow-card flex flex-col justify-between h-full min-h-[350px] overflow-hidden bg-gradient-to-b from-[#56764E] via-[#4D6C46] to-[#3B5435]">
      
      {/* Subtle Background Glows */}
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Ai Assistant
          </h2>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-white/80 bg-black/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
          <Sparkles className="w-3 h-3 text-emerald-300" />
          <span>Clinical v4.2</span>
        </div>
      </div>

      {/* Quick Prompts Horizontal Pills */}
      <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {quickPrompts.map((prompt, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSendPrompt(prompt)}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-all border border-white/10"
          >
            {prompt}
          </motion.button>
        ))}
      </div>

      {/* Chat History Drawer / Display */}
      <div className="relative z-10 my-3 max-h-36 overflow-y-auto space-y-2.5 pr-1 scrollbar-thin">
        {messages.slice(-2).map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className={`p-3 rounded-2xl text-xs leading-relaxed max-w-[90%] ${
              msg.sender === 'user' 
                ? 'bg-[#181D17] text-white font-medium ml-4' 
                : 'bg-white/20 text-white backdrop-blur-md border border-white/15 mr-4'
            }`}>
              <p>{msg.text}</p>
              {msg.tags && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {msg.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 p-2 text-xs text-white/80"
          >
            <Bot className="w-3.5 h-3.5 animate-bounce" />
            <span>Analyzing clinical telemetry...</span>
          </motion.div>
        )}
      </div>

      {/* Translucent Glass Input Box */}
      <div className="relative z-10 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-3 shadow-inner">
        
        {/* Credits & Upgrade Header */}
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
          <span className="text-white/80 font-medium">
            {credits} Credits Remaining
          </span>
          <button 
            onClick={() => setCredits(250)}
            className="font-semibold text-white hover:underline focus:outline-none"
          >
            Upgrade
          </button>
        </div>

        {/* Input Text Field */}
        <div className="mt-2">
          <input
            type="text"
            placeholder="Ask anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendPrompt();
            }}
            className="w-full bg-transparent text-xs text-white placeholder-white/60 focus:outline-none"
          />
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center justify-between mt-3 pt-1">
          {/* Left: Attachment & Mic */}
          <div className="flex items-center gap-2">
            <button 
              title="Attach patient ECG / chart"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            <button 
              title="Voice dictation"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none"
            >
              <Mic className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Dark Circular Send Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => handleSendPrompt()}
            className="w-8 h-8 rounded-full bg-[#181D17] text-white flex items-center justify-center shadow-md hover:bg-black transition-all focus:outline-none"
          >
            <Send className="w-3.5 h-3.5 text-white -translate-x-0.5 translate-y-0.5" />
          </motion.button>
        </div>

      </div>

    </div>
  );
}
