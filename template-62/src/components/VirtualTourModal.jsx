import React, { useState } from 'react';
import { X, RotateCw, Compass, Eye, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ROOMS = [
  { id: 'living', name: 'Grand Living Salon', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { id: 'kitchen', name: 'Chef Minimalist Kitchen', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'pool', name: 'Infinity Pool & Terrace', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop' },
  { id: 'master', name: 'Master Suite Retreat', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop' }
];

export default function VirtualTourModal({ isOpen, onClose }) {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const [isRotating, setIsRotating] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-neutral-900 border border-neutral-800 rounded-3xl max-w-5xl w-full h-[80vh] overflow-hidden flex flex-col z-10 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C88C48]/20 text-[#C88C48] flex items-center justify-center">
                <RotateCw className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-syne">
                  360° Interactive Architectural Tour
                </h3>
                <p className="text-xs text-neutral-400">
                  Currently Viewing: <span className="text-[#C88C48] font-semibold">{activeRoom.name}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                  isRotating
                    ? 'bg-[#C88C48] text-white border-[#C88C48]'
                    : 'bg-neutral-800 text-neutral-300 border-neutral-700'
                }`}
              >
                Auto-Rotate: {isRotating ? 'ON' : 'OFF'}
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Panoramic View Stage */}
          <div className="relative flex-1 bg-black overflow-hidden group">
            <img
              src={activeRoom.image}
              alt={activeRoom.name}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isRotating ? 'scale-105 filter brightness-105' : 'scale-100'
              }`}
            />

            {/* Virtual Compass Overlay */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C88C48]" />
              <span>Facing: 142° SE</span>
            </div>

            {/* Interactive Hotspot Pin */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin">
              <div className="w-8 h-8 rounded-full bg-[#C88C48]/80 text-white flex items-center justify-center shadow-lg animate-bounce">
                <Eye className="w-4 h-4" />
              </div>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                Smart Glass Tint Controls
              </div>
            </div>
          </div>

          {/* Bottom Room Selector Strip */}
          <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center gap-3 overflow-x-auto">
            {ROOMS.map((room) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(room)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  activeRoom.id === room.id
                    ? 'bg-[#C88C48] text-white border-[#C88C48] shadow-md'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800'
                }`}
              >
                <span>{room.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
