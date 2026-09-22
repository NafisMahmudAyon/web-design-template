import React from 'react';
import { Asterisk, UserPlus } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/kanbanData';

export default function ProjectSubheader({ 
  projectName = 'Product Launch 2026', 
  onOpenInvite 
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 pb-4">
      <div className="flex items-start sm:items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <Asterisk className="w-7 h-7 stroke-[2.5]" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {projectName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Monitor all of your task here.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-start sm:self-auto">
        <div className="flex items-center -space-x-2 overflow-hidden py-1 pl-1">
          {TEAM_MEMBERS.map((member) => (
            <img
              key={member.id}
              src={member.avatar}
              alt={member.name}
              title={`${member.name} (${member.role})`}
              className="inline-block w-8 h-8 rounded-full ring-2 ring-white object-cover shadow-2xs hover:scale-110 transition-transform duration-150 z-0 hover:z-10 cursor-pointer"
            />
          ))}
        </div>

        <button
          onClick={onOpenInvite}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-slate-300 text-xs font-semibold text-slate-700 shadow-xs transition active:scale-95"
        >
          <UserPlus className="w-3.5 h-3.5 text-slate-500" />
          <span>Invite</span>
        </button>
      </div>
    </div>
  );
}
