import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, CheckCircle2 } from 'lucide-react';
import { AI_SUGGESTIONS } from '../data/mockData';

export default function AskAIModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: "Hello Tom! I'm your Investo AI Assistant. I've analyzed your $125,340 portfolio. You have an Alpha of +5.3% and low downside volatility. How can I help you today?"
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (textToSend) => {
    const messageText = textToSend || query;
    if (!messageText.trim()) return;

    // Add user message
    const newHistory = [...chatHistory, { sender: 'user', text: messageText }];
    setChatHistory(newHistory);
    setQuery('');

    // Simulate AI Response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Based on current market intelligence and your Moderate Beta (0.87), ${messageText.toLowerCase().includes('crypto') ? 'your 40% Solana (SOL) position is driving highest upside (+10%), but trim 5% to lock gains into US Treasury yields.' : 'your Sharpe ratio of 1.24 indicates strong risk-adjusted returns across your holdings.'}`
        }
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 border-l border-gray-200 text-[#090d16]">
        
        {/* Header */}
        <div className="bg-[#090d16] text-white p-6 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-black tracking-wide">
                INVESTO AI ASSISTANT
              </h3>
              <p className="text-[10px] text-purple-300 font-bold">
                Powered by Real-Time Portfolio Intelligence
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close AI"
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc]">
          {chatHistory.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start space-x-3 ${
                msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-[#090d16] text-white'
                    : 'bg-purple-600 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl text-xs font-medium leading-relaxed max-w-[80%] shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-[#090d16] text-white rounded-tr-none'
                    : 'bg-white text-[#090d16] border border-gray-200 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Quick Suggestions Pills */}
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <span className="text-[10px] font-black uppercase text-gray-400 block tracking-wider">
              Suggested AI Prompts
            </span>
            <div className="space-y-1.5">
              {AI_SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(sug)}
                  className="w-full text-left text-[11px] font-bold text-gray-700 bg-white hover:bg-purple-50 hover:text-purple-700 p-2.5 rounded-xl border border-gray-200 transition-colors"
                >
                  ✨ {sug}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask AI about rebalancing, risk, or news..."
              className="flex-1 bg-[#f8fafc] border border-gray-200 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-purple-600 font-bold"
            />
            <button
              type="submit"
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
