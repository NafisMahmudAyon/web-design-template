import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

export default function PatientQueue({ selectedPatientId, onSelectPatient }) {
  const [filterTab, setFilterTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const patients = [
    {
      id: 'annette',
      name: 'Annette Black',
      condition: 'Cardiology',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
      type: 'Old',
    },
    {
      id: 'leslie',
      name: 'Leslie Alexander',
      condition: 'Anxiety Disorder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      type: 'New',
    },
    {
      id: 'dianne',
      name: 'Dianne Russell',
      condition: 'Behavioral issues',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
      type: 'Old',
    },
    {
      id: 'darrell',
      name: 'Darrell Steward',
      condition: 'Cancer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      type: 'Old',
    },
    {
      id: 'robert',
      name: 'Robert Fox',
      condition: 'Diabetes',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
      type: 'Old',
    },
    {
      id: 'darlene',
      name: 'Darlene Robertson',
      condition: 'Anesthesiology',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      type: 'New',
    },
    {
      id: 'cameron',
      name: 'Cameron Williamson',
      condition: 'Communication Difficulties',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      type: 'Old',
    },
  ];

  const filteredPatients = patients.filter((p) => {
    const matchesTab = filterTab === 'All' || p.type === filterTab;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.condition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="mediso-card p-5 flex flex-col h-full">
      {/* Header with Search */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-sm font-bold text-gray-900">Patient Queue</h2>
        <Search className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>

      {/* Filter Tabs */}
      <div className="flex p-1 bg-gray-100/80 rounded-xl mt-1 text-xs">
        {['All', 'Old', 'New'].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilterTab(tab)}
            className={`flex-1 py-1.5 rounded-lg font-medium transition-all ${
              filterTab === tab
                ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Patient Cards List */}
      <div className="mt-3.5 space-y-2.5 overflow-y-auto flex-1 pr-1">
        {filteredPatients.map((patient) => {
          const isSelected = selectedPatientId === patient.id;
          return (
            <div
              key={patient.id}
              onClick={() => onSelectPatient(patient)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                isSelected
                  ? 'bg-white border-[#1FA075] shadow-xs ring-1 ring-[#1FA075]/20'
                  : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={patient.avatar}
                  alt={patient.name}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-gray-100 shrink-0"
                />
                <div>
                  <h3 className="text-xs font-bold text-gray-900 group-hover:text-[#1FA075] transition-colors">
                    {patient.name}
                  </h3>
                  <p className="text-[11px] font-medium text-gray-400 mt-0.5">
                    {patient.condition}
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label={`Options for ${patient.name}`}
                className="p-1 text-gray-300 hover:text-gray-600 rounded"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
