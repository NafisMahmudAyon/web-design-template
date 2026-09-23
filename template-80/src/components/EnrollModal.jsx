import React, { useState } from 'react';
import { X, Check, GraduationCap, Calendar, Clock, User, Mail, BookOpen } from 'lucide-react';

export const EnrollModal = ({ isOpen, onClose, selectedCourse }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('High School AP Physics');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-neutral-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#EBF3ED] text-[#548A63] mx-auto flex items-center justify-center mb-3">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl font-bold text-neutral-900">
            Book 1-on-1 Physics Session
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            {selectedCourse
              ? `Enrolling in: ${selectedCourse.title}`
              : 'Reserve your personalized academic diagnostics session with Dr. Angela.'}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-display text-xl font-bold text-neutral-900">
              Session Confirmed!
            </h4>
            <p className="text-xs text-neutral-600 max-w-xs mx-auto">
              Your meeting link and preparatory problem sheet have been emailed to you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Student Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Richard Feynman"
                  className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-[#548A63] focus:ring-1 focus:ring-[#548A63]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Parent or Student Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="richard@feynman.edu"
                  className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-[#548A63] focus:ring-1 focus:ring-[#548A63]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Academic Level & Goal
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-[#548A63] focus:ring-1 focus:ring-[#548A63] bg-white"
              >
                <option value="Middle School Physics">Middle School Foundation (Ages 11-14)</option>
                <option value="High School AP Physics">High School AP Physics 1 & 2 / C</option>
                <option value="IB Physics HL/SL">International Baccalaureate (IB) Physics HL/SL</option>
                <option value="University Physics">Undergraduate University Classical & Quantum Physics</option>
                <option value="Physics Olympiad Prep">National & International Physics Olympiad (USAPhO/IPhO)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Preferred Start Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-3.5" />
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-3 border border-neutral-300 rounded-md text-sm text-neutral-800 focus:outline-none focus:border-[#548A63] focus:ring-1 focus:ring-[#548A63]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#548A63] hover:bg-[#437150] text-white font-semibold text-xs sm:text-sm tracking-wide rounded-md shadow-sm transition-all duration-200 mt-2"
            >
              Confirm Academic Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
