import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  Heart, 
  UserPlus, 
  ChevronDown, 
  ArrowUpRight,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { initialPatientMetrics } from '../data/mockData';

export default function PatientCareOverview({ onSelectMetric }) {
  const [selectedFilter, setSelectedFilter] = useState('This Week');
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState('stable'); // Default active highlight as in design
  const [hoveredProgress, setHoveredProgress] = useState(null);

  const getIcon = (type) => {
    switch (type) {
      case 'users':
        return <Users className="w-5 h-5 text-[#52734D]" />;
      case 'user-check':
        return <UserCheck className="w-5 h-5 text-[#52734D]" />;
      case 'heart-pulse':
        return <Heart className="w-5 h-5 text-[#52734D]" />;
      case 'user-plus':
        return <UserPlus className="w-5 h-5 text-[#52734D]" />;
      default:
        return <Users className="w-5 h-5 text-[#52734D]" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between">
      
      {/* Header with Title & Filter Dropdown */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#181D17] tracking-tight">
          Patient Care Overview
        </h2>

        {/* Dropdown Filter */}
        <div className="relative">
          <button
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DFE3D8] text-xs font-semibold text-[#4A5246] hover:bg-[#F7F8F5] transition-colors focus:outline-none"
          >
            <span>{selectedFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#6C7568]" />
          </button>

          <AnimatePresence>
            {filterDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute right-0 mt-1 w-32 rounded-xl bg-white p-1.5 shadow-lg border border-black/5 z-20"
              >
                {['Today', 'This Week', 'This Month'].map((period) => (
                  <button
                    key={period}
                    onClick={() => {
                      setSelectedFilter(period);
                      setFilterDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedFilter === period 
                        ? 'bg-[#52734D]/10 text-[#52734D] font-bold' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Track Section */}
      <div className="my-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#181D17] mb-6">
          <span>Total progress</span>
          {hoveredProgress && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] text-[#52734D] font-semibold"
            >
              {hoveredProgress}
            </motion.span>
          )}
        </div>

        {/* Multi-checkpoint Progress Bar */}
        <div className="relative w-full h-3 rounded-full bg-[#E5EAE1] my-8">
          
          {/* Green Completed Track (75%) */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-0 top-0 h-full rounded-l-full bg-[#52734D]"
          />

          {/* Hatched Remaining Track (25%) */}
          <div className="absolute left-[75%] top-0 w-[25%] h-full rounded-r-full progress-hatched" />

          {/* Checkpoint 1: 45% (Shift Vitals Done) */}
          <div 
            className="absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHoveredProgress('45% Vitals & Medication Pass Completed')}
            onMouseLeave={() => setHoveredProgress(null)}
          >
            {/* Top Pin with Icon */}
            <div className="relative -top-3.5 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white border border-[#DFE3D8] shadow-sm text-[#43523F] flex items-center justify-center transition-transform group-hover:scale-110">
                <Users className="w-3.5 h-3.5 stroke-[2]" />
              </div>
              <div className="w-0.5 h-2 bg-[#DFE3D8]" />
            </div>
            
            {/* Percentage Label below */}
            <span className="absolute top-4 text-[11px] font-semibold text-[#6C7568]">
              45%
            </span>
          </div>

          {/* Checkpoint 2: 75% (Critical Care Audits Done) */}
          <div 
            className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHoveredProgress('75% Critical Care & Physician Rounds Done')}
            onMouseLeave={() => setHoveredProgress(null)}
          >
            {/* Top Pin with Icon */}
            <div className="relative -top-3.5 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white border border-[#52734D]/40 shadow-sm text-[#52734D] flex items-center justify-center transition-transform group-hover:scale-110">
                <Heart className="w-3.5 h-3.5 stroke-[2] fill-[#52734D]/10" />
              </div>
              <div className="w-0.5 h-2 bg-[#52734D]/50" />
            </div>

            {/* Percentage Label below */}
            <span className="absolute top-4 text-[11px] font-semibold text-[#6C7568]">
              75%
            </span>
          </div>

          {/* Endpoint labels */}
          <span className="absolute left-0 top-5 text-[11px] font-semibold text-[#6C7568]">
            0%
          </span>
          <span className="absolute right-0 top-5 text-[11px] font-semibold text-[#6C7568]">
            100%
          </span>
        </div>
      </div>

      {/* 4 Polymorphic Metric Cards - Zero Layout Shift (Fixed Outer Height) */}
      <div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-5"
        onMouseLeave={() => setActiveCardId('stable')}
      >
        {initialPatientMetrics.map((item) => {
          const isActive = activeCardId === item.id;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActiveCardId(item.id)}
              onClick={() => {
                setActiveCardId(item.id);
                if (onSelectMetric) onSelectMetric(item);
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`relative h-[180px] rounded-2xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 select-none overflow-hidden ${
                isActive
                  ? 'bg-white ring-2 ring-[#52734D] shadow-md border-transparent'
                  : 'bg-[#F4F6F2] hover:bg-[#EEF1EC] border border-transparent'
              }`}
            >
              {/* Top Row: Circular Icon Badge */}
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isActive ? 'bg-[#52734D]/15 text-[#52734D]' : 'bg-white text-[#4A5246] shadow-sm'
                }`}>
                  {getIcon(item.icon)}
                </div>

                {isActive && (
                  <span className="text-[10px] font-bold text-[#52734D] uppercase tracking-wider bg-[#52734D]/10 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                )}
              </div>

              {/* Title & Big Stat Value */}
              <div className="mt-1">
                <h3 className="text-xs font-semibold text-[#6C7568] tracking-tight">
                  {item.title}
                </h3>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold text-[#181D17] tracking-tight">
                    {item.value}
                  </span>
                  {item.denominator && (
                    <span className="text-sm font-semibold text-[#7A8376]">
                      / {item.denominator}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Interactive Area: Fixed reserved height so Zero CLS occurs */}
              <div className="h-6 flex items-center justify-between pt-1 border-t border-black/[0.04]">
                {isActive ? (
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-[#52734D]">
                    <span className="truncate">{item.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                ) : (
                  <span className="text-[10px] text-[#7A8376] font-medium truncate">
                    Tap to inspect
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
