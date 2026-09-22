import React from 'react';
import { motion } from 'framer-motion';
import { Check, UserPlus, Eye, Lock, Paperclip, MessageSquare, Calendar, MoreHorizontal, X } from 'lucide-react';
import { onboardingSteps } from '../data/flowzyData';

export default function OnboardingSteps() {
  const teamMembers = [
    { name: 'Iris Finch', role: 'Can View', email: 'irisfinch@company.com' },
    { name: 'Maya Lin', role: 'Can Edit', email: 'mayalin@company.com' },
    { name: 'Jasper Cole', role: 'Can View', email: 'jaspercole@company.com' },
    { name: 'Nina Patel', role: 'Can Edit', email: 'ninapatel@company.com' },
    { name: 'Liam Carter', role: 'Can View', email: 'liamcarter@company.com' },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-0.5 opacity-80" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-display">
            Get Started in three simple steps
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3 font-normal">
            Create your account, connect your workspace, and start managing projects in minutes.
          </p>
        </div>

        {/* 3 Step Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Step 1: Create Your Account */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-[#0F172A]">
                1
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {onboardingSteps[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                {onboardingSteps[0].description}
              </p>
            </div>

            {/* Step 1 Interactive Visual Card */}
            <div className="bg-[#FAF9FE] rounded-3xl p-6 border border-purple-100/80 shadow-md">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-3">
                <div className="text-xs font-bold text-center text-[#0F172A]">Create Account</div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-700">
                    Sajjibur
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-700">
                    Rahman
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-700">
                  hellosajjibur@gmail.com
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-700 flex items-center justify-between">
                  <span>••••••••••••</span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    strong
                  </span>
                </div>

                <button className="w-full py-2 rounded-xl bg-[#7C3AED] text-white text-xs font-bold hover:bg-[#6D28D9] shadow-sm">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Create Projects */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-[#0F172A]">
                2
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {onboardingSteps[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                {onboardingSteps[1].description}
              </p>
            </div>

            {/* Step 2 Interactive Visual Card */}
            <div className="bg-[#FAF9FE] rounded-3xl p-6 border border-purple-100/80 shadow-md">
              <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">User Testing</span>
                  <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
                </div>
                
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  Gather feedback through usability tests to refine design decisions.
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[11px]">
                  <span className="text-gray-500">Planned</span>
                  <span className="font-mono text-gray-400">0/3</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-[10px] text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-600" />
                    <span className="font-mono">15/09/2026</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="flex items-center gap-0.5">
                      <Paperclip className="w-3 h-3" /> 4
                    </span>
                    <span className="flex items-center gap-0.5">
                      <MessageSquare className="w-3 h-3" /> 5
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                    MS
                  </div>
                  <span className="text-[10px] font-bold text-gray-700">MD Sajjibur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Invite Your Teammates */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-[#0F172A]">
                3
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] font-display">
                {onboardingSteps[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                {onboardingSteps[2].description}
              </p>
            </div>

            {/* Step 3 Interactive Visual Card */}
            <div className="bg-[#FAF9FE] rounded-3xl p-6 border border-purple-100/80 shadow-md">
              <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#0F172A]">
                  <span>Invite Teammates</span>
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </div>

                {/* Input with Tag */}
                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-1 text-[10px]">
                  <span className="bg-purple-100 text-[#6D28D9] px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                    Oliver Thompson <span className="cursor-pointer font-bold">×</span>
                  </span>
                  <button className="px-2.5 py-1 rounded-lg bg-[#7C3AED] text-white font-bold">
                    Invite
                  </button>
                </div>

                {/* Members list */}
                <div className="space-y-2 pt-1">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{member.name}</div>
                          <div className="text-[9px] text-gray-400">{member.email}</div>
                        </div>
                      </div>
                      <span className="text-[9px] text-gray-500 border border-gray-200 px-1.5 py-0.5 rounded">
                        {member.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
