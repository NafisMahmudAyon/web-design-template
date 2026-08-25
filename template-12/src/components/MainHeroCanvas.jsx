import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Sparkles, Wand2, Download, Maximize2 } from 'lucide-react';

export default function MainHeroCanvas({ 
  activeModel, 
  promptText, 
  setPromptText, 
  onGenerate, 
  isGenerating,
  onOpenExport 
}) {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#b8c5c1] border border-white/20 shadow-2xl flex flex-col justify-between p-4 group">
      
      {/* 3D Cyberpunk Mech Render Canvas Visual */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Dynamic Stylized Cyberpunk Mech Sculpture Canvas */}
        <motion.div
          key={activeModel.id}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Gradient Mesh Canvas Visual */}
          <div className="w-full h-full bg-gradient-to-b from-[#d4dfdb] via-[#a8b7b2] to-[#82928c] flex items-center justify-center relative">
            
            {/* Embedded 3D Sculpture SVG Artwork matching Screenshot */}
            <svg className="w-full h-full max-h-[420px]" viewBox="0 0 500 500" fill="none">
              {/* Outer Head Mesh Shell */}
              <path 
                d="M 250,70 C 350,70 380,150 380,240 C 380,330 330,420 250,420 C 170,420 120,330 120,240 C 120,150 150,70 250,70 Z" 
                fill="url(#headGradient)" 
                stroke="#1a1c20"
                strokeWidth="2"
              />
              
              {/* Carbon Fiber Mesh Visor Pattern */}
              <path 
                d="M 180,100 C 240,90 300,100 320,140 C 340,180 340,250 320,270 C 300,290 200,290 180,270 C 160,250 160,180 180,100 Z" 
                fill="#16181c" 
                opacity="0.95"
              />

              {/* Glowing Hydraulics Neck Tubes */}
              <circle cx="250" cy="340" r="14" fill="#ff5722" className="animate-pulse" />
              <circle cx="210" cy="330" r="10" fill="#ff7043" />
              <circle cx="290" cy="330" r="10" fill="#ff7043" />
              
              <path d="M 210,330 L 250,370 L 290,330" stroke="#ff5722" strokeWidth="6" strokeLinecap="round" />
              <path d="M 170,300 Q 250,390 330,300" stroke="#252830" strokeWidth="12" strokeLinecap="round" />

              {/* Ear Mechanics */}
              <circle cx="340" cy="200" r="22" fill="#121316" stroke="#444" strokeWidth="4" />
              <circle cx="340" cy="200" r="12" fill="#252830" />
              
              {/* Gradients */}
              <defs>
                <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1c20" />
                  <stop offset="50%" stopColor="#2c3038" />
                  <stop offset="100%" stopColor="#e8ecea" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Orb Overlay */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff5722]/20 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Top Action Overlay (Full screen & Export) */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
          Render Engine • {activeModel.name}
        </span>

        <div className="flex items-center gap-2">
          <button 
            onClick={onOpenExport}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-950 flex items-center justify-center shadow-md transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Floating Prompt Input Bar (Matching White Pill in Screenshot: Write your prompt) */}
      <div className="relative z-10 mt-auto pt-4">
        <form onSubmit={onGenerate} className="relative flex items-center max-w-sm">
          <div className="w-full bg-white text-gray-950 rounded-full pl-3 pr-4 py-2 flex items-center gap-2 shadow-xl border border-black/10">
            <button 
              type="submit"
              className="w-7 h-7 rounded-full bg-gray-950 text-white flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors"
            >
              {isGenerating ? <Wand2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-4 h-4" />}
            </button>
            
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Write your prompt"
              className="w-full text-xs font-semibold text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
            />
          </div>
        </form>
      </div>

    </div>
  );
}
