import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  MoreHorizontal, 
  Calendar, 
  MessageSquare, 
  Paperclip, 
  X, 
  Check, 
  UserPlus 
} from 'lucide-react';

export default function ThreeStepsSection() {
  // Step 1 state
  const [showPassword, setShowPassword] = useState(false);
  const [step1Email, setStep1Email] = useState('hellosajibur@gmail.com');
  const [step1Password, setStep1Password] = useState('SuperSecretPassword123');

  // Step 3 state
  const [invitedMembers, setInvitedMembers] = useState([
    { name: 'Anis Fikri', email: 'anis@company.com', role: 'Can Edit' },
    { name: 'Maya Lin', email: 'maya@company.com', role: 'Can View' },
    { name: 'Jasper Cox', email: 'jasper@company.com', role: 'Can View' },
    { name: 'Nina Patel', email: 'nina@company.com', role: 'Can Edit' },
    { name: 'Liam Carter', email: 'liam@company.com', role: 'Can View' },
  ]);
  const [newInviteTag, setNewInviteTag] = useState('Oliver Thompson');
  const [inviteFeedback, setInviteFeedback] = useState(false);

  const handleSendInvite = () => {
    if (!newInviteTag) return;
    setInvitedMembers(prev => [
      { name: newInviteTag, email: `${newInviteTag.toLowerCase().replace(' ', '.')}@company.com`, role: 'Can View' },
      ...prev
    ]);
    setInviteFeedback(true);
    setNewInviteTag('');
    setTimeout(() => setInviteFeedback(false), 2000);
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex justify-center">
            <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
              <UserPlus className="w-4 h-4" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Get Started in three simple steps
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Create your account, set up your project workspace, and start collaborating in minutes.
          </p>
        </div>

        {/* 3 Step Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
          {/* STEP 1: CREATE ACCOUNT */}
          <div className="space-y-6">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shadow-2xs">
                1
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Create Your Account
              </h3>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Sign up in minutes and set up your workspace to start managing projects effortlessly.
            </p>

            {/* Interactive Card Mockup matching screenshot */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-flowzy-card space-y-3.5">
              <span className="text-xs font-bold text-slate-900 block">Create Account</span>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 block mb-0.5">First Name</label>
                  <input
                    type="text"
                    defaultValue="Sajibur"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold text-slate-400 block mb-0.5">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Rahman"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-slate-400 block mb-0.5">Email</label>
                <input
                  type="email"
                  value={step1Email}
                  onChange={(e) => setStep1Email(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none bg-slate-50/50"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-0.5">
                  <label className="text-[10px] font-semibold text-slate-400">Password</label>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">strong</span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={step1Password}
                    onChange={(e) => setStep1Password(e.target.value)}
                    className="w-full px-2.5 py-1.5 pr-8 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none bg-slate-50/50 font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-bold transition shadow-sm">
                Sign Up
              </button>
            </div>
          </div>

          {/* STEP 2: CREATE PROJECTS */}
          <div className="space-y-6">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shadow-2xs">
                2
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Create Projects
              </h3>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Organize your work with projects, tasks, deadlines, and priorities in one place.
            </p>

            {/* Interactive Card Mockup matching screenshot */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-flowzy-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">User Testing</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Gather feedback through usability tests to refine design decisions.
              </p>

              {/* Progress Tracker */}
              <div className="space-y-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-purple-700">Planned</span>
                  <span className="text-slate-400 font-mono">0/3</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="w-1/3 h-full bg-purple-600 rounded-full" />
                </div>
              </div>

              {/* Footer Badges */}
              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>15/09/2026</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3 text-slate-400" />
                    <span>4</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Paperclip className="w-3 h-3 text-slate-400" />
                    <span>5</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[10px] font-bold">
                    MD Sajibur
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: INVITE TEAMMATES */}
          <div className="space-y-6">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shadow-2xs">
                3
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Invite Your Teammates
              </h3>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Add your team members, assign responsibilities, and collaborate in real time.
            </p>

            {/* Interactive Card Mockup matching screenshot */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-flowzy-card space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Invite Teammates</span>
                <X className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
              </div>

              {/* Invite Input Bar */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-200 bg-slate-50">
                {newInviteTag ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-purple-100 text-purple-800 text-[10px] font-bold">
                    <span>{newInviteTag}</span>
                    <button onClick={() => setNewInviteTag('')}><X className="w-2.5 h-2.5" /></button>
                  </span>
                ) : (
                  <input
                    type="text"
                    placeholder="Enter teammate name..."
                    className="text-xs px-2 py-0.5 bg-transparent focus:outline-none flex-1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && e.target.value) {
                        setNewInviteTag(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                )}
                <button
                  onClick={handleSendInvite}
                  className="px-3 py-1 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-[11px] font-bold transition ml-auto"
                >
                  {inviteFeedback ? 'Invited!' : 'Invite'}
                </button>
              </div>

              {/* Teammates List */}
              <div className="space-y-2 pt-1 max-h-48 overflow-y-auto">
                {invitedMembers.slice(0, 5).map((member, i) => (
                  <div key={i} className="flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                        {member.name.charAt(0)}
                      </div>
                      <div className="truncate">
                        <span className="font-bold text-slate-800 block leading-none">{member.name}</span>
                        <span className="text-[10px] text-slate-400 block truncate">{member.email}</span>
                      </div>
                    </div>

                    <select
                      defaultValue={member.role}
                      className="text-[10px] font-semibold text-slate-600 bg-slate-100 rounded px-1.5 py-0.5 border border-slate-200/60 focus:outline-none"
                    >
                      <option value="Can Edit">Can Edit</option>
                      <option value="Can View">Can View</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
