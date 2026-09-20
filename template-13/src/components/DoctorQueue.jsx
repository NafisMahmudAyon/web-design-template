import React, { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export const INITIAL_DOCTORS = [
  {
    id: 1,
    name: 'Brooklyn Simmons',
    specialty: 'Cardiologist',
    type: 'Old',
    avatar: 'https://images.unsplash.com/photo-1594824813565-d419d2903b41?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 321-7890',
    email: 'brooklyn.s@mediso.com',
    address: '42 Oak Avenue, Springfield, USA',
    npi: '10045091223',
    primarySpecialist: 'Cardiologist',
    languages: 'English, French',
    bio: 'Experienced clinical cardiologist focused on preventative heart health and holistic care.',
    licenses: [
      { id: '#049122 2011 2025', region: 'Ohio', active: true },
      { id: '#889123 7112 2027', region: 'California', active: true },
    ]
  },
  {
    id: 2,
    name: 'Dr. Farhan Ahmed',
    specialty: 'Cardiologist Surgeon',
    type: 'Old',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=260',
    phone: '+(555) 764-1095',
    email: 'farhanahmed@dr.com',
    address: '23 Maple Street, Springfield,USA',
    npi: '10030000126',
    primarySpecialist: 'Cardiologist',
    languages: 'English, Urdu, bangla',
    bio: 'I am Pleased to be part of the Northwest Ohio Community since 2012. I provide Cardiologist Surgeon, medical and medication management services to reduce pain and suffering of patients',
    licenses: [
      { id: '#068455 2008 2024', region: 'Maryland', active: true },
      { id: '#563655 8455 2026', region: 'Australia', active: true },
    ]
  },
  {
    id: 3,
    name: 'Dianne Russell',
    specialty: 'Gastroenterologist',
    type: 'New',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 890-1234',
    email: 'dianne.r@mediso.com',
    address: '15 Pine Crest, Springfield, USA',
    npi: '10088921443',
    primarySpecialist: 'Gastroenterologist',
    languages: 'English, Spanish',
    bio: 'Dedicated to advanced GI interventions and compassionate digestive disease therapies.',
    licenses: [
      { id: '#019283 2015 2026', region: 'Illinois', active: true }
    ]
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    specialty: 'Endocrinologist',
    type: 'Old',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 456-7890',
    email: 'jenny.wilson@mediso.com',
    address: '88 Cedar Boulevard, Springfield, USA',
    npi: '10067341998',
    primarySpecialist: 'Endocrinologist',
    languages: 'English, German',
    bio: 'Specializing in metabolic disorder management and diabetes care.',
    licenses: [
      { id: '#901234 2019 2025', region: 'Michigan', active: true }
    ]
  },
  {
    id: 5,
    name: 'Eleanor Pena',
    specialty: 'Rheumatologist',
    type: 'New',
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 234-5678',
    email: 'eleanor.p@mediso.com',
    address: '9 River Bend Rd, Springfield, USA',
    npi: '10011290345',
    primarySpecialist: 'Rheumatologist',
    languages: 'English, Portuguese',
    bio: 'Expert in autoimmune conditions and long-term joint health restoration.',
    licenses: [
      { id: '#451092 2014 2024', region: 'Maryland', active: true }
    ]
  },
  {
    id: 6,
    name: 'Cameron Williamson',
    specialty: 'Neurosurgeon',
    type: 'Old',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 678-9012',
    email: 'cameron.w@mediso.com',
    address: '104 High Street, Springfield, USA',
    npi: '10099451230',
    primarySpecialist: 'Neurosurgeon',
    languages: 'English, Arabic',
    bio: 'Leading complex neurosurgical reconstructions with minimally invasive precision.',
    licenses: [
      { id: '#773412 2010 2028', region: 'Ohio', active: true }
    ]
  },
  {
    id: 7,
    name: 'Courtney Henry',
    specialty: 'Plastic Surgeon',
    type: 'New',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=160',
    phone: '+(555) 345-6789',
    email: 'courtney.h@mediso.com',
    address: '77 Summit Drive, Springfield, USA',
    npi: '10055678129',
    primarySpecialist: 'Plastic Surgeon',
    languages: 'English, Italian',
    bio: 'Reconstructive and cosmetic aesthetic surgery with natural outcomes.',
    licenses: [
      { id: '#220914 2016 2026', region: 'New York', active: true }
    ]
  }
];

export default function DoctorQueue({ selectedDoctor, onSelectDoctor }) {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const filteredDoctors = INITIAL_DOCTORS.filter(doc => {
    const matchesFilter = filter === 'All' || doc.type === filter;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900 font-display">
          Doctor Queue
        </h2>
        <button
          onClick={() => setSearchActive(!searchActive)}
          className="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors"
          title="Search doctor queue"
        >
          <Search size={16} />
        </button>
      </div>

      {/* Expandable Search Input */}
      {searchActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mb-3"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or specialty..."
            className="w-full text-xs px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:bg-white"
            autoFocus
          />
        </motion.div>
      )}

      {/* Filter Tabs: All, Old, New */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-50 rounded-xl mb-4 border border-slate-100">
        {['All', 'Old', 'New'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              filter === tab
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Doctor List */}
      <div className="space-y-1 overflow-y-auto pr-1 flex-1 max-h-[680px] scrollbar-thin">
        {filteredDoctors.map((doctor) => {
          const isSelected = selectedDoctor?.id === doctor.id;
          return (
            <motion.div
              key={doctor.id}
              onClick={() => onSelectDoctor(doctor)}
              whileHover={{ scale: 1.01 }}
              className={`flex items-center justify-between p-2.5 rounded-2xl cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-slate-50/90 border-slate-200 shadow-2xs'
                  : 'bg-white border-transparent hover:bg-slate-50/50 hover:border-slate-100'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <img
                  src={doctor.avatar}
                  alt={doctor.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-2xs"
                />
                <div className="truncate">
                  <h4 className="text-sm font-semibold text-slate-900 truncate">
                    {doctor.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {doctor.specialty}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0"
              >
                <MoreHorizontal size={16} />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
