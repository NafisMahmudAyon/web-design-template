import React, { useState } from 'react';
import { X, UserPlus, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEAM_MEMBERS } from '../data/kanbanData';

export default function InviteModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Editor');
  const [invitedList, setInvitedList] = useState([]);

  if (!isOpen) return null;

  const handleInvite = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setInvitedList(prev => [...prev, { email: email.trim(), role }]);
    setEmail('');
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">Invite Teammates</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <form onSubmit={handleInvite} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Teammate Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="collaborator@agency.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">Access Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                >
                  <option value="Editor">Can Edit & Create Tasks</option>
                  <option value="Viewer">Can View Only</option>
                  <option value="Admin">Full Workspace Admin</option>
                </select>
              </div>

              <div className="self-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition"
                >
                  Send Invite
                </button>
              </div>
            </div>
          </form>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
              Active Project Members ({TEAM_MEMBERS.length + invitedList.length})
            </h4>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {TEAM_MEMBERS.map((m) => (
                <div key={m.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <img src={m.avatar} alt={m.name} className="w-6 h-6 rounded-full object-cover" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">{m.name}</div>
                      <div className="text-[10px] text-slate-400">{m.email}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {m.role.includes('Lead') ? 'Owner' : 'Editor'}
                  </span>
                </div>
              ))}

              {invitedList.map((inv, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-blue-50/50 border border-blue-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                      @
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{inv.email}</div>
                      <div className="text-[10px] text-blue-600">Invitation Pending</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-100 text-blue-700">
                    {inv.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
