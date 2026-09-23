import React, { useState } from 'react';
import { Calendar, Plus, Check } from 'lucide-react';
import { INITIAL_CONTACTS } from '../data/calendarData';

export default function SlimSidebar({ onContactSelect, selectedContactId }) {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  const handleAddContact = () => {
    const newId = contacts.length + 1;
    const newContact = {
      id: newId,
      name: `Guest Designer #${newId}`,
      role: 'Collaborator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      online: true,
    };
    setContacts([...contacts, newContact]);
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2000);
  };

  return (
    <aside className="w-16 sm:w-18 flex flex-col items-center py-4 bg-[#111219] rounded-[28px] border border-[#1e202c] shadow-lg shrink-0">
      {/* Top App Logo: Violet Squircle with 4 petals */}
      <button
        type="button"
        aria-label="Kallendr Dashboard Home"
        className="w-12 h-12 rounded-2xl bg-[#8278f8] hover:bg-[#7368f5] text-white flex items-center justify-center shadow-lg shadow-[#8278f8]/30 transition-all duration-200 active:scale-95 group mb-3"
      >
        <div className="grid grid-cols-2 gap-1 w-5 h-5">
          <span className="w-2 h-2 rounded-[4px] bg-white group-hover:scale-90 transition-transform"></span>
          <span className="w-2 h-2 rounded-[4px] bg-white group-hover:scale-110 transition-transform"></span>
          <span className="w-2 h-2 rounded-[4px] bg-white group-hover:scale-110 transition-transform"></span>
          <span className="w-2 h-2 rounded-[4px] bg-white group-hover:scale-90 transition-transform"></span>
        </div>
      </button>

      {/* Calendar Navigation Icon */}
      <button
        type="button"
        aria-label="Calendar view active"
        className="w-12 h-12 rounded-2xl bg-[#1e202a] hover:bg-[#252835] border border-[#2c2f3f] text-white flex items-center justify-center shadow-md transition-all duration-200 group active:scale-95 mb-2"
        title="Calendar Schedule"
      >
        <Calendar className="w-5 h-5 text-gray-200 group-hover:text-white group-hover:scale-105 transition-all" />
      </button>

      {/* Subtle Divider */}
      <div className="w-8 h-[1px] bg-[#222432] my-3"></div>

      {/* Team Contact Avatars Stack */}
      <div className="flex flex-col items-center gap-3.5 flex-1">
        {contacts.map((contact) => {
          const isSelected = selectedContactId === contact.id;
          return (
            <div key={contact.id} className="relative group">
              <button
                onClick={() => onContactSelect && onContactSelect(contact)}
                className={`relative w-11 h-11 rounded-full p-[2px] transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? 'ring-2 ring-[#8278f8] ring-offset-2 ring-offset-[#111219]'
                    : 'hover:ring-2 hover:ring-white/40 ring-offset-1 ring-offset-[#111219]'
                }`}
                title={contact.name}
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-full h-full rounded-full object-cover"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#111219] rounded-full"></span>
                )}
              </button>

              {/* Tooltip on Hover */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-[#1a1c26] text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 shadow-xl border border-[#2b2d3e] z-40">
                <p className="font-semibold">{contact.name}</p>
                <p className="text-[10px] text-gray-400">{contact.role}</p>
              </div>
            </div>
          );
        })}

        {/* Plus / Add Contact Button */}
        <div className="relative group mt-1">
          <button
            onClick={handleAddContact}
            className="w-10 h-10 rounded-full bg-[#181923] hover:bg-[#222432] border border-[#262837] hover:border-[#8278f8] text-[#8c90a5] hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
            title="Add Team Member"
            aria-label="Add Team Member"
          >
            {showAddSuccess ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-[#1a1c26] text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-150 shadow-xl border border-[#2b2d3e] z-40">
            Invite Colleague
          </div>
        </div>
      </div>
    </aside>
  );
}
