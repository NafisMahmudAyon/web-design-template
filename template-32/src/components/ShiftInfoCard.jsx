import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, Clock } from 'lucide-react';

export default function ShiftInfoCard() {
  const [selectedShiftFilter, setSelectedShiftFilter] = useState('Today');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-5 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-[155px]">
      
      {/* Header with Title & Filter Pill */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#181D17] tracking-tight">
          Shift Info
        </h3>

        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#DFE3D8] text-[11px] font-semibold text-[#4A5246] hover:bg-[#F7F8F5] transition-colors focus:outline-none"
          >
            <Calendar className="w-3 h-3 text-[#7A8376]" />
            <span>{selectedShiftFilter}</span>
            <ChevronDown className="w-3 h-3 text-[#7A8376]" />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-1 w-28 rounded-xl bg-white p-1 shadow-lg border border-black/5 z-20"
              >
                {['Today', 'Tomorrow', 'This Week'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelectedShiftFilter(item);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors ${
                      selectedShiftFilter === item ? 'bg-[#52734D]/10 text-[#52734D] font-bold' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Shift Name & Progress Percentage */}
      <div>
        <div className="flex items-center justify-between text-xs font-bold text-[#181D17] mb-2">
          <span>Day Shift</span>
          <span>60%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#E5EAE1] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-[#52734D]"
          />
        </div>
      </div>

      {/* Time & Remaining Info */}
      <div className="flex items-center justify-between text-[11px] text-[#7A8376] font-medium pt-1 border-t border-black/[0.04]">
        <span>7:00 AM - 4:00PM</span>
        <span className="font-semibold text-[#52734D]">3h 12m remaining</span>
      </div>

    </div>
  );
}
