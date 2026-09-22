import React, { useState } from 'react';
import { X, Trees } from 'lucide-react';
import { announcementData } from '../data/productData';

export default function AnnouncementBar({ onRepairClick }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#202020] text-neutral-200 text-xs py-2.5 px-4 tracking-wide font-sans border-b border-neutral-800 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Spacer for symmetry */}
        <div className="w-4 hidden sm:block" />

        {/* Center message */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          <Trees className="w-3.5 h-3.5 text-neutral-400" />
          <span>{announcementData.text}</span>
          <button
            onClick={onRepairClick}
            className="hidden md:inline text-neutral-400 hover:text-white underline underline-offset-2 ml-1 cursor-pointer"
          >
            Learn More
          </button>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setVisible(false)}
          className="text-neutral-400 hover:text-white p-0.5 transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
