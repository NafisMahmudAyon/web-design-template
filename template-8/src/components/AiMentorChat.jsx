import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Paperclip, ArrowUpRight, Plus, Send, FileText, CheckCircle2 } from 'lucide-react';

export default function AiMentorChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Please upload your Figma file here',
    },
    {
      id: 2,
      sender: 'user',
      text: "Sure, I'm uploading the document now. When to expect a review report?",
      hasFile: true,
      fileName: 'Header_Design_V2.fig',
      fileSize: '4.2 MB',
    },
    {
      id: 3,
      sender: 'ai',
      text: 'File received! Analyzing auto-layout rules, spacing grid, and typography contrast. I will prepare your comprehensive report in ~2 minutes.',
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputVal.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputVal,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI Mentor typing back intelligent feedback
    setTimeout(() => {
      let aiText = "Great question! For header navigation, ensure 16px vertical padding, clean contrast ratio (at least 4.5:1), and responsive flex alignment for mobile viewports.";
      
      if (inputVal.toLowerCase().includes('figma')) {
        aiText = "Your Figma frames show strong visual hierarchy. I recommend converting your header navigation items into component variants with hover states.";
      } else if (inputVal.toLowerCase().includes('review') || inputVal.toLowerCase().includes('report')) {
        aiText = "Your review score is currently 94/100! Excellent grid alignment and modern font pairing.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: aiText,
        }
      ]);
      setIsTyping(false);
    }, 1400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      className="glass-panel rounded-[32px] p-5 shadow-xl border border-white/80 bg-white/90 flex flex-col justify-between h-full group"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-lime-300 to-emerald-400 flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-950" />
          </div>
          <h2 className="text-base font-bold text-gray-900 font-sans">Ai Mentor</h2>
        </div>

        <div className="flex items-center gap-2">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-black border border-gray-200/80 flex items-center justify-center shadow-sm"
          >
            <Paperclip className="w-4 h-4" />
          </motion.button>
          <motion.button 
            whileHover={{ rotate: 45, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-white text-gray-600 hover:text-black border border-gray-200/80 flex items-center justify-center shadow-sm"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Chat Messages Stream */}
      <div className="flex-1 overflow-y-auto max-h-[260px] pr-1 flex flex-col gap-3 my-2 scrollbar-thin">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';
          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}
            >
              {/* Message text bubble */}
              <div
                className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                  isAi
                    ? 'bg-gray-100/90 text-gray-800 rounded-tl-sm border border-gray-200/60'
                    : 'bg-black text-white rounded-tr-sm'
                }`}
              >
                {msg.text}
              </div>

              {/* File preview attachment card */}
              {msg.hasFile && (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-2 p-3 rounded-2xl bg-white border border-gray-200/80 shadow-md flex items-center gap-3 max-w-[85%]"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">{msg.fileName}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{msg.fileSize} • Uploaded</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </motion.div>
              )}

              {/* Avatar thumbnail */}
              <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400 px-1 font-medium">
                {!isAi && (
                  <>
                    <span>You</span>
                    <img 
                      src="/assets/user_avatar.png" 
                      alt="User" 
                      className="w-4 h-4 rounded-full inline ml-0.5 object-cover"
                    />
                  </>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* AI Typing Indicator */}
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 p-3 rounded-2xl bg-gray-100 text-gray-400 text-xs w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime-600 animate-spin" />
            <span>AI Mentor is thinking...</span>
          </motion.div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Input Action Bar */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 hover:text-black flex items-center justify-center shadow-sm"
        >
          <Plus className="w-4 h-4" />
        </motion.button>

        <div className="flex-1 relative flex items-center">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Enter Task for AI Assistant"
            className="w-full text-xs font-medium bg-gray-100/80 hover:bg-gray-100 focus:bg-white text-gray-800 placeholder-gray-400 py-2.5 px-3.5 pr-8 rounded-full border border-transparent focus:border-gray-300 focus:outline-none transition-all"
          />
          <Sparkles className="w-3.5 h-3.5 text-amber-500 absolute right-3 pointer-events-none" />
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleSend}
          className="w-9 h-9 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4 stroke-[2.2]" />
        </motion.button>
      </div>
    </motion.div>
  );
}
