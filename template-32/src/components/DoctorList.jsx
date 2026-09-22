import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, PhoneCall, Radio, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { doctorsData } from '../data/mockData';

export default function DoctorList({ onSelectDoctor }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctorsData.filter((doc) => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'On Duty':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse"></span>
            <span>On Duty</span>
          </div>
        );
      case 'Available':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
            <span>Available</span>
          </div>
        );
      case 'On Leave':
        return (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]"></span>
            <span>On Leave</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-card border border-black/[0.04] transition-all flex flex-col justify-between h-full">
      
      {/* Header with Title & Search Trigger */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#181D17] tracking-tight">
          Doctor
        </h2>

        {/* Search button / input */}
        <div className="relative flex items-center">
          <AnimatePresence>
            {searchOpen && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 140, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="text-xs px-2.5 py-1.5 rounded-xl border border-[#DFE3D8] bg-[#F7F8F5] focus:outline-none focus:ring-1 focus:ring-[#52734D] text-[#181D17] mr-1.5"
              />
            )}
          </AnimatePresence>

          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              if (searchOpen) setSearchQuery('');
            }}
            title="Search Doctors"
            className="w-8 h-8 rounded-xl border border-[#DFE3D8] flex items-center justify-center text-[#4A5246] hover:bg-[#F7F8F5] transition-colors focus:outline-none"
          >
            {searchOpen ? <X className="w-3.5 h-3.5" /> : <Search className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Doctor Roster */}
      <div className="space-y-3.5 flex-1 flex flex-col justify-between">
        {filteredDoctors.map((doc) => (
          <motion.div
            key={doc.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => onSelectDoctor(doc)}
            className="group flex items-center justify-between p-2 rounded-2xl hover:bg-[#F7F8F5] transition-all cursor-pointer border border-transparent hover:border-black/[0.03]"
          >
            {/* Avatar & Name/Specialty */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-black/5">
                <img 
                  src={doc.avatar} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-[#181D17] group-hover:text-[#52734D] transition-colors truncate">
                  {doc.name}
                </p>
                <p className="text-[11px] text-[#7A8376] font-medium truncate">
                  {doc.specialty}
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex-shrink-0 pl-2">
              {getStatusBadge(doc.status)}
            </div>
          </motion.div>
        ))}

        {filteredDoctors.length === 0 && (
          <div className="py-8 text-center text-xs text-gray-400">
            No doctors found matching "{searchQuery}"
          </div>
        )}
      </div>

    </div>
  );
}
