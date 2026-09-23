import React from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function TeamHeader({
  teamMembers,
  activeEmployeeId,
  onSelectEmployee,
  onAddEmployeeClick,
}) {
  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-3 select-none">
      {/* Title & Members Count */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Welcome in, Drank
        </h1>
        <p className="text-xs text-[#727589] mt-0.5">12 members</p>
      </div>

      {/* Team Avatars Carousel */}
      <div className="flex items-center gap-2 bg-[#101118] px-3 py-1.5 rounded-full border border-[#1d1f2b]">
        <button
          type="button"
          aria-label="Previous team member"
          className="w-7 h-7 rounded-full hover:bg-[#1c1e2a] text-[#727589] hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 px-1">
          {teamMembers.map((member) => {
            const isActive = activeEmployeeId === member.id;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => onSelectEmployee(member)}
                className={`relative w-8 h-8 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'ring-2 ring-[#7ae2a4] ring-offset-2 ring-offset-[#090a0e] scale-110'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                title={`${member.name} (${member.role})`}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
                {member.online && (
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#090a0e]"></span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next team member"
          className="w-7 h-7 rounded-full hover:bg-[#1c1e2a] text-[#727589] hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Add Employee Button */}
      <button
        type="button"
        onClick={onAddEmployeeClick}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#12131b] hover:bg-[#1a1c27] border border-[#232533] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add employee</span>
      </button>
    </div>
  );
}
